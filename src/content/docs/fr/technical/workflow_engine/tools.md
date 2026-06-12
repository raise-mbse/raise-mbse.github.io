---
title: "Tools & Plugins"
description: "Documentation du module d'extension (Outils Natifs et WebAssembly)"
category: "technical"
sidebar_group: "WORKFLOW_ENGINE"
---

# 🛠️ Module Tools & Plugins

Ce module implémente la couche d'**Extensibilité Sécurisée** du moteur R.A.I.S.E. Il permet de connecter le noyau d'infrastructure à des environnements matériels, des générateurs de code tiers ou des systèmes industriels propriétaires, sans compromettre la stabilité du `kernel`.

## 🎯 Philosophie et Principes Directeurs

Dans les environnements critiques, l'intégration de bibliothèques tierces est un vecteur de risque majeur. Les _Outils_ (Tools) du moteur obéissent à quatre impératifs stricts :

1. **Déterminisme Absolu** : Pour une entrée donnée, l'outil doit produire une sortie prévisible, constante et répétable.
2. **Isolation Wasm (Sandboxing)** : Les outils complexes ou propriétaires s'exécutent dans un bac à sable WebAssembly. Toute défaillance (Memory Leak, Panic) est contenue et ne peut pas faire crasher l'orchestrateur central.
3. **Contrats de Schémas Explicites** : Les données ingérées ou émises par un outil doivent respecter des schémas JSON stricts. Le typage fort est imposé aux frontières du module.
4. **Paradigme Air-Gap** : Les outils sont conçus pour fonctionner sans accès réseau (WAN). Toute tentative d'appel externe non déclarée est bloquée par le runtime.

---

## 🏗️ Architecture Technique

### Le Trait `SystemTool`

Cœur du module, ce contrat définit comment le moteur communique avec une extension métier :

```rust
#[async_trait]
pub trait SystemTool: Send + Sync + Debug {
    fn name(&self) -> &str;           // Identifiant unique (ex: "ast_compiler")
    fn description(&self) -> &str;    // Description pour les logs d'audit
    fn parameters_schema(&self) -> Value; // Validation JSON Schema stricte des entrées
    async fn execute(&self, args: &Value) -> Result<Value>; // Logique métier asynchrone
}

```

### Cycle de vie d'une exécution

1. **Déclenchement** : Un nœud `ToolCall` est atteint dans le graphe d'exécution DevSecOps.
2. **Validation** : Les arguments fournis sont cryptographiquement validés par rapport au `parameters_schema`. Si un argument implicite est détecté, l'exécution est rejetée.
3. **Exécution Isolée** : L'outil s'exécute (en natif ou via le runtime Wasm).
4. **Persistance Auditée** : Le résultat est injecté dans le contexte du workflow et tracé dans le module `traceability` pour répondre aux exigences de la norme DO-178C.

---

## 🚀 Guide d'Intégration : Créer un Outil Sécurisé

### 1. Définition de la logique (Exemple : `fs_tools.rs`)

Il est crucial de gérer les erreurs proprement via le type `Result` standard de Rust.

```rust
#[async_trait::async_trait]
impl SystemTool for FileReadTool {
    fn name(&self) -> &str { "read_audit_log" }
    
    fn parameters_schema(&self) -> Value {
        json!({
            "type": "object",
            "properties": {
                "path": { "type": "string", "description": "Chemin absolu (restreint au volume local)" }
            },
            "required": ["path"]
        })
    }
    
    async fn execute(&self, args: &Value) -> Result<Value> {
        let path = args.get("path").and_then(|v| v.as_str()).ok_or("Paramètre 'path' explicite requis")?;
        let content = fs::read_to_string(path).map_err(|e| format!("IO Error: {}", e))?;
        Ok(json!({ "content": content, "size": content.len() }))
    }
}

```

### 2. Enregistrement Système

L'outil doit être déclaré dans l'orchestrateur lors de l'initialisation du binaire standalone :

```rust
// Dans src/workflow_engine/scheduler.rs
executor.register_tool(Box::new(fs_tools::FileReadTool));

```

---

## 📦 Catalogue des Capacités d'Infrastructure

| Outil | ID (`name`) | Domaine | Mécanisme de Sécurité |
| --- | --- | --- | --- |
| **Moniteur de Process** | `read_system_metrics` | Observabilité | Lecture seule (Isolé) |
| **Générateur AST** | `rust_ast_weaver` | Build System | Wasm Sandbox |
| **Audit Traçabilité** | `hash_ledger_entry` | Compliance | Signature Ed25519 |

---

## 🛡️ Le Couplage avec les "Lignes Rouges" (Gates)

L'intégration d'un outil dans un pipeline est systématiquement couplée à un nœud `GatePolicy`. Cette architecture permet de créer des **Points d'Arrêt (Vetos) Automatiques** sur la chaîne d'ingénierie :

1. **Extraction** : Le `ToolCall` génère un code source ou lit une métrique.
2. **Évaluation** : La `GatePolicy` analyse la sortie via le Moteur de Règles (ex: "Est-ce qu'il y a du code de test dans ce fichier ?").
3. **Action** : Si une non-conformité est détectée, le moteur interrompt le pipeline et remonte une alerte d'intégrité, protégeant ainsi l'environnement de production final.

```

 