---
sidebar_position: 5
---

# TP Android - Partie 05

> **Durée Estimée : Indeterminée (4h) **

## Enoncé

Adapter le TP actuel avec un web service.

### Back-End (API)

Créer une **web app api** en **NodeJs** avec **Express** (comme dans la démo)

Il faut le modèle Movie

Il faut les routes (par ordre de difficulté/priorité):

- getAll : Récupérer la liste des films
- geById : Récupérer le film par son id
- saveArticle : Il gère la création et la mise à jour
```js
// OBLIGATOIRE !
// Middleware pour activer les données du body json en POST
app.use(express.json());
app.use(cors());
``` 
- deleteArticle : Supprimer film par son id

:::warning Attention !!!

Testez les web service via votre Swagger avant de faire le front

:::

### Front

- Liste des films : Re adapter la page de la liste des films qui va récupérer les films via l'API

- Le UX de chaque film : Boutons (voir, editer, supprimer)
    - voir : afficher une page avec le détail du film
    - editer : Ouvrir le formulaire Film en mode edition
    - supprimer : Appel API et rafraichir la liste

:::warning Attention !!!

Pour tester votre back via votre téléphone, n'oubliez de activer le port forwarding via **Chrome** pour accéder au **localhost(127.0.0.1)** en USB

:::