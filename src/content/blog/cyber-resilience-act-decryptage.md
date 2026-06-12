---
title: 'Cyber Resilience Act : La fin du Far West logiciel en Europe'
description: "Décryptage de la nouvelle directive qui impose le marquage CE aux logiciels. Pourquoi le 'Security by Design' n'est plus une option mais une obligation légale pour 2027."
pubDate: 'Feb 02 2026'
heroImage: '../../assets/illustrations/cra-compliance.svg'
---

C'est un séisme silencieux qui vient de frapper l'industrie numérique. Le 10 décembre 2024, le **Cyber Resilience Act (CRA)** est entré en vigueur.

Pendant des décennies, l'industrie du logiciel a joui d'une exception étonnante : elle pouvait vendre des produits défectueux (vulnérables) sans être tenue responsable des dommages, contrairement à un fabricant de voitures ou de jouets. **Cette époque est révolue.**

## Qu'est-ce que le Cyber Resilience Act ?

Le CRA est un règlement européen qui impose des exigences de cybersécurité obligatoires pour tous les "produits comportant des éléments numériques" (PDE) mis sur le marché de l'UE.

Cela couvre tout :

- Les objets connectés (IoT)
- Les systèmes industriels (PLC, SCADA)
- Les logiciels d'entreprise (SaaS, OS)
- Et bien sûr, l'outillage d'ingénierie et de DevSecOps.

L'objectif est simple : garantir que les produits sont sécurisés **dès leur conception** et tout au long de leur cycle de vie (5 ans minimum).

## Les 3 piliers qui changent tout

### 1. Security by Design (L'obligation de résultat)

Il ne suffit plus de patcher après coup. Le fabricant doit prouver qu'il a intégré la sécurité dans l'architecture même du produit.

- *L'approche R.A.I.S.E. :* C'est exactement pour cela que notre noyau est écrit en **Rust**. La sûreté mémoire n'est pas une "feature", c'est une exigence architecturale qui élimine 70% des vulnérabilités (CVEs) dès la compilation. De plus, notre dogme d'exclusion stricte de tout code de test en production garantit un binaire d'une pureté absolue.

### 2. Le Marquage CE Numérique

À partir de décembre 2027, aucun logiciel critique ne pourra être vendu en Europe sans le marquage CE. Cela implique une documentation technique lourde (Risk Assessment) et, pour les produits critiques (Classe I et II), un audit par un tiers certifié.

### 3. Reporting en 24h

Les fabricants devront signaler toute vulnérabilité activement exploitée à l'ENISA (Agence européenne de cybersécurité) dans un délai de **24 heures**.

- *L'approche R.A.I.S.E. :* Notre architecture de données locale (`json_db`) repose sur un système de handles stricts et immuables. Ce registre d'intégrité permet de tracer instantanément quel composant a failli, facilitant ce reporting légal et garantissant l'auditabilité.

## Le Calendrier (La course contre la montre)

Bien que la loi soit votée, nous sommes dans une phase de transition critique :

- **11 Décembre 2024 :** Entrée en vigueur du texte.
- **11 Septembre 2026 :** Début de l'obligation de reporting des incidents (24h).
- **11 Décembre 2027 :** Application totale. Sans conformité, interdiction de vente.

## Pourquoi l'Open Source est concerné ?

Le CRA a fait trembler la communauté Open Source. La version finale exempte les développeurs bénévoles, mais **toute entité commerciale** tirant profit d'un logiciel open-source (support, SaaS, features pro) est pleinement responsable.

Si vous intégrez une librairie open-source dans votre produit industriel, **vous** êtes responsable de sa sécurité. C'est la fin de la confiance aveugle dans `npm install` ou les dépendances non auditées.

## Conclusion : Une opportunité de souveraineté

Avec l'infrastructure R.A.I.S.E., nous ne voyons pas le CRA comme une contrainte, mais comme une validation. L'Europe pose enfin les bases d'une informatique sérieuse, industrielle et souveraine.

L'ingénierie artisanale, le code non typé et les dépendances Cloud obscures ne passeront pas l'audit. Les architectures déterministes, prouvables et exécutables en zone étanche (Air-Gap) deviennent le nouveau standard de facto.

**Préparez 2027 aujourd'hui.**