---
sidebar_position: 1
---

# TP Eni Store API - Partie 2 (Avant Service)

> **Prérequis** : Avoir complété les modules 1 et 2 ainsi que les TP associés.

**Durée estimée : 30min**

---

## Énoncé

L’objectif de ce TP est de mettre en place la gestion des **Articles** dans l’application.  
Vous allez implémenter les éléments suivants :

- **Article** : Classe métier dans le package **BO**
- **ArticleRestController** : Contrôleur REST exposant les **routes API** pour le CRUD d’un article. Les données en mémoire dans le controller

Un article comporte au minimum :
- **id** : `int`
- **title** : `String`

## Url à implémenter

- `getAll()`
- `getById(id)`
- `delete(id)`
- `save(Article)`

#### getAll
- Réponse : La liste des articles

#### getId
- Si l’article est trouvé : L'article trouvé
- Si l’article n’est pas trouvé : null

#### delete
- Si l’article est supprimé : True
- Si l’article n’existe pas : False

#### save
- Si l’id n’existe pas :
    - Création réussie → L'article crée
- Si l’id existe déjà :
    - Mise à jour réussie → L'article modifié


Les opérations de recherche et de filtrage devront utiliser les **`Stream`** et/out **`Predicate`** de Java.
