---
sidebar_position: 3
---

# TP Store API - Partie 3

**Durée estimée : 1h à 3h**

---

## Énoncé

L'objectif de ce TP est de mettre en place la gestion des **Articles** dans l'application.  
Vous allez devoir rajouter la coiche service pour faire de la logique métier et remplacer les appel API par des données plus importantes :

- **ArticleService** : Couche métier (BLL/Service) qui communique avec la DAO

Donc globalement il faut virer les appel Repository/MySQL des controllers pour les mettre dans le service. Car c'est le service qui doit être appelé dans les controller.

## Services à implémenter

- `getAll()`
- `getId(id)`
- `delete(id)`
- `save(Article)`

### Détails des services et codes retour

#### getAll
- Réponse : **Code 202** | Data: La liste des articles

#### getId
- Si l'article est trouvé : **Code 202** | Data: L'article trouvé
- Si l'article n'est pas trouvé : **Code 703** | Data  null

#### delete
- Si l'article est supprimé : **Code 202** | Data: null
- Si l'article n'existe pas : **Code 703** | Data: null

#### save
- Si l'id n'existe pas :
    - Création réussie → **Code 202** | Data: L'article crée
- Si l'id existe déjà :
    - Mise à jour réussie → **Code 203** | Data: L'article modifié

