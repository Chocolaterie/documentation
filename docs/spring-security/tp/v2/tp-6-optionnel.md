---
sidebar_position: 7
---

# TP Eni Store API - Partie 6 JPA MySQL (OPTIONNEL)

> **Prérequis** : Avoir complété les TP précédents.

**Durée estimée : 30 min - 1h**

## Énoncé

Ce TP est **optionnel**.  
Il consiste à remplacer l’implémentation DAO par une version basée sur **JPA / MySQL**.

Dans un premier temps, il faudra **supprimer les dépendances MongoDB**.  
En effet, si deux dépendances de bases de données sont présentes en même temps, Spring Boot tentera d’ouvrir deux connexions simultanées.  
Bien qu’il existe des moyens de configurer plusieurs sources de données, cela n’est pas adapté à ce stade de l’apprentissage.

## Éléments à créer

- **ArticleDAOJPA** : Implémentation de l’interface **ArticleDAO** utilisant une base **SQL**
- **ArticleJPARepository** : Repository JPA pour l’abstraction des requêtes **SQL**


:::warning Rappel

- Adapter le type de l’**Id** en `Long` (au lieu de `String`).
- Ajoutez les dépendances **Spring Data JPA** et le **driver MySQL** dans votre `build.gradle`.
- Configurez votre connexion MySQL dans `application.properties` ou `application.yml`. 

  :::
