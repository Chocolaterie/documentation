---
id: installation-angular
title: Installation d'Angular
sidebar_label: Installer Angular
description: Guide pour installer Angular sur votre machine
---

## Prérequis

Avant d’installer Angular, assurez-vous d’avoir installé :

- **Node.js** (version recommandée : LTS)
- **npm** (installé automatiquement avec Node.js)

Vous pouvez vérifier les versions avec :

```bash
node -v
npm -v
```

## Installation de l’Angular CLI

L’Angular CLI est l’outil officiel pour créer et gérer des projets Angular.

```bash
npm install -g @angular/cli
```

Vérifiez que l’installation a bien fonctionné :

```bash
ng version
```

## Créer un nouveau projet Angular

```bash
ng new mon-projet-angular
```

Répondez aux questions dans le terminal, puis entrez dans le dossier :

```bash
cd mon-projet-angular
```

## Lancer le serveur de développement

```bash
ng serve
```

Puis ouvrez [http://localhost:4200](http://localhost:4200) dans votre navigateur.

## Générer des components

```
ng generate component <mon-component>
```

:::warning Attention

Depuis Angular20, le ng generate component ne suffixe plus automatiquement

:::

Pour activer les suffixes à la génération, par exemple :

```json
{
  "projects": {
    "app": {
      ...
      "schematics": {
        "@schematics/angular:component": { "type": "component" },
        "@schematics/angular:directive": { "type": "directive" },
        "@schematics/angular:service": { "type": "service" },
        "@schematics/angular:guard": { "typeSeparator": "." },
        "@schematics/angular:interceptor": { "typeSeparator": "." },
        "@schematics/angular:module": { "typeSeparator": "." },
        "@schematics/angular:pipe": { "typeSeparator": "." },
        "@schematics/angular:resolver": { "typeSeparator": "." }
      },
  ...
}
``` 

## Changer le site-template

Modifier le fichier app.html.

L'injection des pages dans le app.html se fait dans : 

``` 
<router-outlet />
``` 

## Ressources utiles

- [Documentation officielle Angular](https://angular.io/docs)
- [CLI Angular](https://angular.io/cli)