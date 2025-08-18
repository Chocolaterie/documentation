---
sidebar_position: 6
---

# TP Eni Store API -  (Partie 5 JPA MySQL ) OPTIONNEL

> **Note:** Avant de démarrer ce TP, il convient d’avoir réalisé les TP proposés.

**Durée Estimée : 30min**

## Enonce

Transformer les données MongoDB en SQL avec JPA

Il sera nécessaire de créer les éléments suivants :

- **ArticleDAOJPA** : L'implémentation de l'interface **ArticleDAO** qui utilisera les données **SQL**
- **ArticleJPARepository** : Le repository JPA pour l'abstraction des requêtes **SQL**

Et d'apater les Id en **Long** et pas **String**

:::warning Rappel

- N'oubliez pas les dépendances JPA et Driver MySQL

:::