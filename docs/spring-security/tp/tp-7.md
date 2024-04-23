---
sidebar_position: 7
---

# TP Eni Store API (Partie 7)

> **Note:** Avant de démarrer ce TP, il convient d’avoir suivi tout les modules et d’avoir réalisé les TP proposés.

**Durée Estimée : 1-3h**

## Enonce

Après avoir exploré toutes les fonctionnalités abordées dans le cours, nous pouvons désormais approfondir notre application.

Dans ce TP, nous allons mettre en place des réponses métier plutôt que de simplement renvoyer des données sans aucun moyen de connaître le résultat de nos traitements métier.

Plutôt que de remplacer toutes les routes existantes, nous allons en créer de nouvelles avec la même structure d'URL, à l'exception du préfixe qui sera /api/v2.

D'une part, nous étudierons les implications d'une telle migration dans un projet et pourquoi il est essentiel de procéder avec précaution.

## Quelques pistes 


### Dans le Metier
Étant donné qu'il est nécessaire de maintenir le fonctionnement des anciennes routes, vous devrez probablement dupliquer des fonctions dans la couche métier/service. 

Cela permettra de conserver une version avec l'ancienne signature qui appellera les versions migrées pour garantir un fonctionnement rétro-compatible.

Exemple pour getArticles

```java
/**
 * @deprecated Cette méthode est obsolète (api v1). Utilisez {@link #getArticles()} à la place.
 */
@Deprecated
List<Article> getArticles_Deprecated() {
    // On utilise quand même la nouvelle version afin de maintenir une uniformité dans la logique métier et les règles de gestion
    ServiceResponse response = getArticles();

    // Cependant, nous allons retourner uniquement la liste des articles dans la réponse
    // Puisque dans l'API v1, nous récupérons uniquement les données de la DAO.
    return response.data;
}

/**
 * Méthode à jour
 */
ServiceResponse getArticles() {
    // le nouveau code
}
```

### Dans les routes

Voici une route de l'api v1 qui maintenant utilise **getArticles_Deprecated** au lieu de **getArticles** :

- La signature reste la même, donc le retour est de type `List<Article>`
- Cependant, on utilise une version dépréciée du service

```java
public List<Article> getArticles(){
    return articleService.getArticles_Deprecated();
}
```

Et la route api v2 : 

- La signature reste la même, donc le retour est de type `ServiceResponse`
- On utilise une méthode à jour du Service

```java
public ServiceResponse getArticles(){
    return articleService.getArticles();
}
```