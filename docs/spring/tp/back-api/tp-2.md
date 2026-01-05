---
sidebar_position: 2
---

# TP Store API - Partie 2

**Durée estimée : 1h à 3h**

---

## Énoncé

L'objectif de ce TP est de mettre en place la gestion des **Articles** dans l'application.  
Vous allez implémenter les éléments suivants :

- **Article** : Classe métier dans le package **BO**
- **ArticleRepository** : Repository JPA pour l'abstraction des requêtes **SQL**
- **ArticleRestController** : Contrôleur REST exposant les **routes API** pour le CRUD d'un article


:::warning Rappel

- Adapter le type de l'**Id** en `Long` (au lieu de `String`).
- Ajoutez les dépendances **Spring Data JPA** et le **driver MySQL** dans votre `build.gradle`.
- Configurez votre connexion MySQL dans `application.properties` ou `application.yml`. 
  :::

Un article comporte au minimum :
- **id** : `int`
- **title** : `String`

### Détails des données à retourner via les url

#### getAll
- La liste des articles

#### getId
- Si l'article est trouvé : L'article trouvé
- Si l'article n'est pas trouvé : Data  null

#### delete
- Si l'article est supprimé : true
- Si l'article n'existe pas : false

#### save
- Si l'id n'existe pas :
    - Création réussie → L'article crée
- Si l'id existe déjà :
    - Mise à jour réussie → L'article modifié