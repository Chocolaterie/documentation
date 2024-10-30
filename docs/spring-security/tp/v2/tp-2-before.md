---
sidebar_position: 2
---

# TP Eni Store API (Partie 2 - Before)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi les modules 1 à 2 et d’avoir réalisé les TP proposés.

**Durée Estimée : 1H-2H**

## Enonce

Il sera nécessaire de créer les éléments suivants :

- **Article** : La classe **Article** dans le package **BO**
- **ArticleService** : La couche métier (ou service/BLL) qui fera appel à la **DAO**
- **ArticleRestController** : Ce contrôleur contiendra les **routes API** pour le CRUD d'un article (donc 3 routes)

Un article contient au moins:
- Id
- Title

## Les services :
 
- getAll
- getId(id)
- delete(id)
- save(Article)

### getAll

- Code : 202

### getId

- Si on trouve : Code : 202
- Si on trouve pas Code : 703

#### delete

- Si on trouve : Code : 202
- Si on trouve pas Code : 703

### save

- Si l'id de l'article n'existe :
    - Si créee avec succès : Code 202
- Si id existe
    - Si update avec succès : Code 202

## Gérer les données

Pour gérer les faux articles, vous allez avoir par défaut dans le Service une liste de 3 Articles

Pour faire de la recherche utilisez les `stream` et `predicate` en java