---
sidebar_position: 1
---

# TP Eni Store API - Partie 2 (Service)

> **Prérequis** : Avoir complété les TP associés.

**Durée estimée : 30min**

---

## Énoncé

L’objectif de ce TP est de mettre en place la gestion des **Articles** dans l’application.  
Vous allez implémenter les éléments suivants :

### A modifier

- **ArticleService** : Le code métier, en gros ce qu'on avait dans le controller. Les données en mémoire dans le Service car toujours pas de DAO
- **ArticleRestController** : Contrôleur REST exposant les **routes API** pour le CRUD d’un article.

## ArticleService

Donc les méthodes qu'on aura dans le Service :

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

### Pour aller plus loin

Trouver un moyen de retourner un Code et Message en plus des retours de base 
