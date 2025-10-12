---
sidebar_position: 1
---

# Project Angular 20 — Gestion d’Articles

**Durée estimée : 2 jours**  
**Niveau : Intermédiaire à Avancé**  
**Technologies : Angular 20, TypeScript, RxJS, API REST**


## Objectif du projet

Développer une application **Angular 20** complète permettant la gestion d’un catalogue d’articles.  
L’application devra communiquer avec une **API REST locale** disponible à l’adresse suivante :  
[https://github.com/Chocolaterie/ApiArticle](https://github.com/Chocolaterie/ApiArticle)

L’objectif est de mettre en œuvre les concepts fondamentaux d’Angular : composants, routing, formulaires réactifs, services, communication HTTP et gestion d’état.

## Spécifications fonctionnelles

L’application devra comporter les fonctionnalités suivantes :

### Authentification
- Page de **connexion**
- Page d’**inscription**
- Page de **mot de passe oublié**

### Gestion des articles
- **Liste des articles** : affichage des articles provenant de l’API
- **Détail d’un article** : consultation des informations d’un article spécifique
- **Ajout et modification d’un article** : formulaire pour créer ou éditer un article
- **Suppression d’un article**

Chaque fonctionnalité devra être accessible via le **système de routing Angular**, avec une navigation claire et un contrôle d’accès (auth guard).

## Exigences techniques

- Version Angular : **v20**
- Langage : **TypeScript**
- Gestion des appels HTTP via le module `HttpClient`
- Utilisation des **Formulaires Réactifs**
- Gestion des routes et sous-modules avec **RouterModule**
- Utilisation des **services Angular** pour la communication avec l’API
- Structuration du projet selon une architecture modulaire :
  - `auth/` : gestion de l’authentification
  - `articles/` : gestion du catalogue d’articles
  - `shared/` : composants et services réutilisables

## Critères d’évaluation

- Respect des bonnes pratiques Angular (modularité, typage, réactivité)
- Organisation et clarté du code
- Qualité du design et de l’expérience utilisateur
- Gestion correcte des erreurs et retours API
- Navigation fluide et cohérente entre les différentes pages

## Ressources

- API Back-end : [https://github.com/Chocolaterie/ApiArticle](https://github.com/Chocolaterie/ApiArticle)
- Documentation officielle Angular : [https://angular.dev](https://angular.dev)


## Livrables

- Projet Angular complet sur un dépôt Git public (GitHub ou GitLab)
- Documentation minimale dans un fichier `README.md` :
  - Instructions d’installation et de lancement
  - Présentation rapide des fonctionnalités