---
sidebar_position: 1
---

# TP API

**Durée estimée : 30 min**

## Énoncé

Une API ExpressJS vous est fournie. Cette API retourne une liste de films via l’URL :

- http://localhost:3000/movies

Vous devez créer une page HTML/JS pour afficher la liste de ces films lors du clic sur un bouton **"Charger les films"**.

Voici à quoi ressemble le début du retour JSON :

```json
[
  {
    "id": 1,
    "title": "Inception",
    "synopsis": "Un voleur s'infiltre dans les rêves pour dérober des secrets.",
    "cover": "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    "note": 9
  },
  {
    "id": 2,
    "title": "The Dark Knight",
    "synopsis": "Batman affronte le Joker pour sauver Gotham.",
    "cover": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "note": 10
  },
  {
...
```    

## Étapes

- Assurez-vous que le serveur API est lancé.
- Commencez par créer une page avec un design simple pour une carte de film (ne perdez pas trop de temps sur le design, vous pouvez par exemple utiliser des `<li>`).
- Une fois le bouton et un exemple de film développés, ajoutez le code JS pour appeler l’API.

Pour rappel concernant l’appel API :

- Utilisez `fetch` pour appeler l’URL, puis traitez la réponse pour obtenir le JSON (comme dans la démo).
- Utilisez ce JSON pour alimenter dynamiquement la liste de films côté HTML.

### Design d’un film

- Pour commencer sans CSS, utilisez un `<li>`.
- Ensuite, pourquoi ne pas créer une carte (card) avec un peu de style.
- Si vous avez encore du temps :
  - Affichez la **note** sous forme d’étoiles.
  - Intégrez l’**image de couverture** du film.

## Bonus

- Si vous avez du temps, vous pouvez faire en sorte que les films se chargent automatiquement à l’ouverture de la page.
- Intégrer une popup de chargement.
- Améliorer le design.
