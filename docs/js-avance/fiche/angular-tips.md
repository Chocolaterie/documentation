---
id: angular-tips
title: Tips Angular
sidebar_label: Tips  Angular
description: Tips pour Angular
sidebar_position: 5
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

## Ajouter FontAwesome

FontAwesome est un **framework CSS** qui permet d’utiliser une large bibliothèque d’icônes utiles.

On peut par exemple l’installer avec `npm` et le lier à Angular comme on l’a fait avec UIKit.

```bash
npm install @fortawesome/fontawesome-free
```

:::warning Version gratuite

Attention à bien utiliser la **version gratuite**, c’est celle utilisée dans cette fiche.

:::

Dans le angular.json

```json
"styles": [
    ...
    "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
],
```

## Binding

`ngModel` permet de lier des attributs de votre contrôleur TypeScript à la vue.

Le binding peut se faire en **unidirectionnel** ou en **bidirectionnel** :

- **Unidirectionnel** : lecture seule (les données vont du contrôleur vers la vue).
- **Bidirectionnel** : lecture/écriture (les données peuvent être modifiées depuis la vue).

La liaison bidirectionnelle est typiquement utilisée dans les formulaires.

### Syntaxe d’exemple

**Unidirectionnel :**
```html
[ngModel]="user.email"
```

**Bidirectionnel :**
```html
[(ngModel)]="user.email"
```

## Localization (i18n)

Vous pouvez utiliser **ngx-translate** pour gérer les traductions de votre application Angular avec des fichiers au format JSON.

Documentation officielle : [https://ngx-translate.org/](https://ngx-translate.org/)

---

### Étapes

### 1. Installer la bibliothèque

```bash
npm install @ngx-translate/core @ngx-translate/http-loader
```

---

### 2. Ajouter la configuration dans `app.component.ts` ou `app.ts`

#### Imports nécessaires :

```ts
import { TranslateService } from '@ngx-translate/core';
import translationsEN from '../assets/i18n/en.json';
```

#### Dans le constructeur de l’App :

```ts
constructor(private translate: TranslateService) {
  this.translate.addLangs(['fr', 'en']);
  this.translate.setDefaultLang('en');
  this.translate.use('en');
  this.translate.setTranslation('en', translationsEN);
}
```

---

### 3. Exemple de fichier de traduction `en.json`

```json
{
  "title.login": "Login",
  "btn.login": "Log in"
}
```

---

### 4. Utilisation dans la vue Angular

```html
<legend class="uk-legend">{{ 'title.login' | translate }}</legend>
```

C’est cette syntaxe qui permet d’afficher un texte traduit :

```html
{{ 'title.login' | translate }}
```