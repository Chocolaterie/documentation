---
sidebar_position: 2
---

# TP Eni Store API (Partie 2 - Before)

> **Prérequis** : Avoir complété les modules 1 et 2 ainsi que les TP associés.

**Durée estimée : 1h à 2h**

---

## Énoncé

L’objectif de ce TP est de mettre en place la gestion des **Articles** dans l’application.  
Vous allez implémenter les éléments suivants :

- **Article** : Classe métier dans le package **BO**
- **ArticleDAO** : Couche DAO (non abstraite pour l’instant), qui gère les données en mémoire
- **ArticleService** : Couche métier (BLL/Service) qui communique avec la DAO
- **ArticleRestController** : Contrôleur REST exposant les **routes API** pour le CRUD d’un article

Un article comporte au minimum :
- **id** : `int`
- **title** : `String`

## DAO

A vous de créer les fonctions DAO mocks selon vos besoins métier.

## Services à implémenter

- `getAll()`
- `getId(id)`
- `delete(id)`
- `save(Article)`

### Détails des services et codes retour

#### getAll
- Réponse : **Code 202** | Data: La liste des articles

#### getId
- Si l’article est trouvé : **Code 202** | Data: L'article trouvé
- Si l’article n’est pas trouvé : **Code 703** | Data  null

#### delete
- Si l’article est supprimé : **Code 202** | Data: null
- Si l’article n’existe pas : **Code 703** | Data: null

#### save
- Si l’id n’existe pas :
    - Création réussie → **Code 202** | Data: L'article crée
- Si l’id existe déjà :
    - Mise à jour réussie → **Code 203** | Data: L'article modifié

## Gestion des données


:::warning Attention

Si vous avez pas le temps :

- Pour tester votre API, la couche **Service** peut contenir par défaut une liste de **3 articles**.

:::


Les opérations de recherche et de filtrage devront utiliser les **`Stream`** et/out **`Predicate`** de Java.
