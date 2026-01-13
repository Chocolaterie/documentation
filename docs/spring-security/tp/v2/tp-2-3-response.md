---
sidebar_position: 2
---

# TP Eni Store API - Partie 2 (Service Response)

> **Prérequis** : Avoir complété les TP associés.

**Durée estimée : 30min à 1h**

---

## Énoncé

L’objectif de ce TP est de mettre en place la gestion des **Articles** dans l’application.  
Vous allez modifier les éléments suivants :

- **ArticleService** : Les retours sont plus détaillés. on retournera maintenant (code, message, data)
Le data est une donnée générique car le type dépend de l'objet (Article ? `List<Article>` ? Boolean ? etc)

### Détails des services et codes retour


#### getAll
- Réponse : **202** | La liste des articles a été récupérée avec succès | **La liste des articles**

#### getId
- Si l’article est trouvé : **202** | L'article a été récupéré avec succès | **L'article trouvé**
- Si l’article n’est pas trouvé : **703** | L'article n'existe pas | **null**

#### delete
- Si l’article est supprimé : **202** | L'article a été supprimé avec succès |  **null**
- Si l’article n’existe pas : **703** | L'article n'existe pas | **null**

#### save
- Si l’id n’existe pas :
    - Création réussie → **202** | Article créé avec succès | **L'article crée**
- Si l’id existe déjà :
    - Mise à jour réussie → **203** | Article modifié avec succès | **L'article modifié**