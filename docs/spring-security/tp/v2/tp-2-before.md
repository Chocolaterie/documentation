---
sidebar_position: 2
---

# TP Eni Store API - Partie 2 (Final)

> **Prérequis** : Avoir complété les TP associés.

**Durée estimée : 30min à 1h**

---

## Énoncé

L’objectif de ce TP est de mettre en place la gestion des **Articles** dans l’application.  

Vous allez implémenter les éléments suivants :

- **ArticleDAO** : Couche DAO (non abstraite pour l’instant), qui gère les données en mémoire

Pour rappel voici ce qu'on aura à la fin :

- **Article** : Classe métier dans le package **BO**
- **ArticleDAO** : Couche DAO (non abstraite pour l’instant), qui gère les données en mémoire
- **ArticleService** : Couche métier (BLL/Service) qui communique avec la DAO
- **ArticleRestController** : Contrôleur REST exposant les **routes API** pour le CRUD d’un article

Un article comporte au minimum :
- **id** : `int`
- **title** : `String`

## DAO

A vous de créer les fonctions DAO mocks selon vos besoins métier.

### Les fonctions de la DAO

Je vous propose ces fonctions, mais vous pouvez faire différement:

- `selectAll()`
- `selectById(id)`
- `delete(id)`
- `save(Article)`

## Pour aller plus loin

Vous pouvez ajouter le **ResponseEntity** dans le Controller pour encapsuler les codes HTTP 

:::warning CODE HTTP

Attention le code HTTP n'est pas le code Métier.
Donc un code **HTTP 200 ou 202** n'as rien avoir avec un **code métier** inventé **200 ou 202**, c'est deux choses différentes

:::