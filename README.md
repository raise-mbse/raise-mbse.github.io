# 🚀 R.A.I.S.E. - Portail & Documentation Officielle

<p align="center">
  <img src="src/assets/logo-raise-emblem.svg" width="150" height="150" alt="Logo R.A.I.S.E.">
</p>

> **"La maîtrise de la complexité exige une architecture déterministe, pas des approximations."** <p align="center">
  <a href="https://github.com/Condorcet-Continuum/Condorcet-Continuum.github.io/actions/workflows/deploy.yml">
    <img src="https://github.com/Condorcet-Continuum/Condorcet-Continuum.github.io/actions/workflows/deploy.yml/badge.svg" alt="Deploy Status">
  </a>
  <img src="https://img.shields.io/badge/Built_with-Astro-orange?logo=astro" alt="Astro">
  <img src="https://img.shields.io/badge/Powered_by-Rust_Core-b7410e?logo=rust" alt="Rust Core">
  <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License">
</p>



---

## 🌐 À Propos de ce Dépôt

Ce dépôt héberge le code source du portail public et du registre documentaire du **R.A.I.S.E. Open Core Framework** (*Rationalized Advanced Intelligence System Engine*). 

R.A.I.S.E. est une infrastructure logicielle "Local-First" conçue pour industrialiser l'ingénierie critique (MBSE 2.0, SysML v2, RAMI 4.0) et sécuriser les chaînes DevSecOps en environnement totalement étanche (Air-Gap).

🔗 **Consulter le Portail :** [condorcet-continuum.github.io](https://condorcet-continuum.github.io/)

---

## 🛠️ Stack Technique du Site Web

La documentation est générée statiquement pour garantir des performances maximales, une sécurité absolue (aucune base de données exposée) et une empreinte carbone minimale.

- **Générateur de site :** [Astro 5.0](https://astro.build) (Architecture "Islands")
- **Styling :** [Tailwind CSS v4](https://tailwindcss.com)
- **Contenu :** Collections MDX / Markdown strict
- **Déploiement :** Intégration Continue via GitHub Actions & Pages

---

## 🚀 Installation & Développement (Local)

Pour cloner et exécuter le portail documentaire sur votre poste de travail :

### Prérequis

- Node.js v20+
- npm (ou pnpm / yarn)

### Lancement Rapide

```bash
# 1. Cloner le dépôt de documentation
git clone [https://github.com/Condorcet-Continuum/Condorcet-Continuum.github.io.git](https://github.com/Condorcet-Continuum/Condorcet-Continuum.github.io.git)
cd Condorcet-Continuum.github.io

# 2. Installer les dépendances UI
npm install

# 3. Lancer le serveur de développement local
npm run dev

```

Le site et la documentation seront accessibles sur `http://localhost:4321`.

### Build de Production

Pour générer les fichiers statiques de production :

```bash
npm run build

```

---

## 📂 Topologie du Dépôt Documentaire

```text
/
├── public/           # Fichiers statiques bruts (favicon, robots.txt)
├── src/
│   ├── assets/       # Actifs visuels, diagrammes Mermaid et SVG industriels
│   ├── components/   # Blocs d'interface réutilisables (Header, Footer, Layouts)
│   ├── content/      # Registre d'architecture (Markdown) et schémas documentaires
│   ├── layouts/      # Mises en page maîtres (Documentation, Base)
│   └── pages/        # Routes applicatives (index, architecture, roadmap, use-cases)
├── astro.config.mjs  # Configuration stricte du compilateur statique
└── tailwind.config.mjs

```

---

## 🤝 Contribuer au Registre

Les contributions documentaires sont ouvertes aux **Architectes d'Entreprise, Ingénieurs Système (MBSE) et experts DevSecOps**.

Pour soumettre une correction de spécification ou un nouveau *Blueprint* d'architecture :

1. Forkez le projet.
2. Créez une branche isolée (`git checkout -b doc/SysML-Integration`).
3. Committez vos changements en respectant nos standards (`git commit -m 'docs: update SysML v2 parser specs'`).
4. Pushez sur votre branche (`git push origin doc/SysML-Integration`).
5. Ouvrez une Pull Request pour audit par les mainteneurs du Core.

---

## 📜 Licence

L'ensemble de la documentation et du code de présentation est distribué sous la licence **Apache 2.0**. Voir le fichier `LICENSE` pour plus d'informations.

---

