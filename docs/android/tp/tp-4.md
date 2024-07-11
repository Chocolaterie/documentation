---
sidebar_position: 4
---

# TP Android - Partie 04

> **Durée Estimée : 1h-2h**

## Enoncé

- Une classe Movie
    - id
    - title
    - synopsis
    - duration
    - year

- Ajouter une page (**Activity**) qui affiche la liste des films

:::warning Attention

Pour l'instant les films sont des listes initialisées en brut (des faux films)

La page et la cellule doivent être en **DataBinding**

:::

### ListView ou RecyclerView

Il faut donc utiliser soit **ListView** soit **RecyclerView**, à vous de choisir.

Néanmoins, je précise que **ListView** est plus simple d'utilisation que **RecyclerView** mais moins performant.

### Design

Pour le design des films à afficher dans la liste, vous avez une totale liberté d'action !

### API

À présent, les films vont être récupérés via une API.

Il faut vous aider des démos et du cours pour le faire avec **Retrofit** et **Moshi**.

L'url de l'API : https://raw.githubusercontent.com/Chocolaterie/EniWebService/main/api/movies.json

