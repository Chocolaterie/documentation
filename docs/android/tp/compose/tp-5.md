---
sidebar_position: 5
---

# TP Android - Partie 05

> **Durée Estimée : Indeterminée (4h) **

## Enoncé

:::warning Localhost du serveur

L'api sera appelé sur le **localhost**

Dans tout les cas port **3000**

Les ip possibles selon votre cas :

- 127.0.0.1 : Localhost du pc en port fowarding
- 10.0.2.2 : Sur emulateur avec le security-config 
- 10.0.0.2 : Sur un autre emulateur sans security-config
- etc..

:::

### Objectif

Adapter le TP actuel pour qu'il fonctionne avec un **web service** (API).

### Back-End (API)

Vous devez créer une **application web API** en **Node.js** avec **Express** (comme montré dans la démo).

#### Modèle

Le modèle à utiliser sera **Article**.

#### Routes

Vous devez implémenter les routes suivantes, classées par ordre de difficulté/priorité :

1. **getAll** : Récupérer la liste des articles.
2. **getById** : Récupérer un article par son ID.
3. **saveArticle** : Gérer la création et la mise à jour des articles.
4. **deleteArticle** : Supprimer un article par son ID.

#### Test

:::warning **Attention !!!** 
Testez toutes les routes de votre web service via **Swagger** avant de passer à la partie front-end.
:::

### Front-End

#### Liste des articles

- Réadaptez la page de la **liste des articles** pour qu'elle récupère les articles via l'API.

#### UX de chaque article

Pour chaque article, il doit y avoir trois boutons permettant d'effectuer les actions suivantes :

1. **Voir** : Afficher une page avec le détail de l'article.
2. **Editer** : Ouvrir le formulaire de l'article en mode édition.
3. **Supprimer** : Appeler l'API pour supprimer l'article, puis rafraîchir la liste des articles.

#### Détail de la suppression

Dans l'exemple ci-dessus, l'appel à l'API pour supprimer un article pourrait ressembler à cela :

```kotlin
fun deleteArticle(movieId: String) {
    // Logique pour appeler l'API de suppression
}
