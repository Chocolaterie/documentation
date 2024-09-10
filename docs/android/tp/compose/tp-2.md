---
sidebar_position: 2
---

# TP Android - Partie 02

> **Durée Estimée : 30min-1h**

## Enoncé

Dans l'optique de continuer la pratique, nous allons ajouter une nouvelle page pour afficher une liste d'articles.

Cela vous permettra de pratiquer la fonction `items()` afin d'afficher une liste d'éléments dans un layout.

### Instructions

Vous allez créer une classe **`Article`** qui servira de modèle de données. La classe doit contenir les propriétés suivantes :
- `title` (String) : le titre de l'article.
- `desc` (String) : la description de l'article.
- `imgPath` (String) : le chemin ou l'URL de l'image associée à l'article.

La page devra afficher au minimum :
- Le titre ou une icône représentative en haut de la page.
- La liste des articles, avec pour chaque article :
  - Le titre.
  - La description.
  - L'image (si disponible).

### Design

Pour le design, comme d'habitude, vous êtes libre de procéder selon votre créativité. N'hésitez pas à utiliser les composants de `Jetpack Compose` pour structurer l'interface.

### Pour aller plus loin

Vous pouvez explorer l'attribut `imgPath` pour afficher une image provenant d'Internet (une URL) dans chaque article, par exemple en utilisant la lib `Coil` (qui faut ajouter dans le gradle) avec le composant **AsyncImage** pour le chargement d'images en Jetpack Compose.

Documentation : https://developer.android.com/develop/ui/compose/graphics/images/

```kotlin
// Exemple d'utilisation pour afficher une image à partir d'une URL
AsyncImage(
    model = "https://example.com/image.jpg",
    contentDescription = "Translated description of what the image contains"
)
