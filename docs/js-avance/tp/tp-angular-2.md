---
sidebar_position: 4
---

# TP Angular (Partie 2)

**Durée estimée : 30min - 1h**

## Énoncé

Nous allons à présent changer la manière de récupérer les films.

Précédemment, la liste des films était en mémoire, directement dans le contrôleur.  
À présent, nous allons interroger une API locale, par exemple :

```
http://localhost:3000/movies
```

L’API locale se trouve dans ce dépôt GitHub :  
[https://github.com/Chocolaterie/ApiArticle](https://github.com/Chocolaterie/ApiArticle)

C’est une application Express.js sans base de données.  
Vous pouvez la cloner, exécuter `npm install`, puis lancer le serveur avec :

```bash
node app.js
```

L’URL `http://localhost:3000/movies` retourne par exemple :

```json
{
  "code": "200",
  "message": "La liste des film a été récupérée avec succès !",
  "data": [
    {
      "id": 1,
      "slug": "1",
      "title": "Inception",
      "year": 2010,
      "author": "Christopher Nolan",
      "duration": 125,
      "genre": "Action, Fantasy",
      "synopsis": "Un voleur s'infiltre dans les rêves pour dérober des secrets.",
      "cover": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      "rating": 4.6
    },
    {
      "id": 2,
      "slug": "2",
      "title": "The Dark Knight",
      "year": 2018,
      "author": "Roar Uthaug",
      "duration": 125,
      "genre": "Action, Fantasy",
      "synopsis": "Batman affronte le Joker pour sauver Gotham.",
      "cover": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "rating": 5
    },
    {
      "id": 3,
      "slug": "3",
      "title": "Interstellar",
      "year": 2018,
      "author": "Christopher Nolan",
      "duration": 125,
      "genre": "Action, Fantasy",
      "synopsis": "Une équipe voyage à travers un trou de ver pour sauver l'humanité.",
      "cover": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "rating": 4
    }
  ]
}
```    

## Models

Nous aurons deux modèles qui serviront au mapping des réponses JSON :
- `Movie` : représente la structure d’un film.
- `ApiResponse` : représente la structure d’une réponse API métier. Le champ `data` est générique.

## Service

Pour effectuer les appels HTTP, créez un service que vous pouvez nommer `MovieService`.

Ce service peut contenir une méthode `getMovies` qui retourne un `Observable<ApiResponse<Movie[]>>`.

## Contrôleur TypeScript

Dans le contrôleur, vous pouvez appeler le service dans le cycle de vie `ngOnInit`.

Ainsi, l’appel API sera déclenché automatiquement au chargement initial de la page.

