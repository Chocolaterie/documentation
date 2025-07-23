---
id: angular-tips
title: Tips Angular
sidebar_label: Tips  Angular
description: Tips pour Angular
---

## Ajouter framework CSS

## Exemple avec UIKit

Deux manières d’ajouter UIKit à votre projet :

- **Manuellement** : placez le dossier `uikit` dans un dossier public, par exemple `/public`.
- **Via npm** (si la librairie est disponible) :

```bash
npm install uikit
```

:::info Attention

Si vous installez un framework CSS via **npm**, il sera stocké dans le dossier `node_modules`.

:::

### Liaison dans `angular.json`

Il faut lier le css et le js dans le fichier angular.json

Exemple avec UIKit (avec npm install uikit)

```json
"styles": [
  "src/styles.scss",
  "node_modules/uikit/dist/css/uikit.min.css"
],
"scripts": [
  "node_modules/uikit/dist/js/uikit.min.js",
  "node_modules/uikit/dist/js/uikit-icons.min.js"
]
```