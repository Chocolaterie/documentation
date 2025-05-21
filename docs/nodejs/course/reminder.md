---
sidebar_position: 1
---

# Rappel

## Base
### Node.js = Environnement d'exécution JavaScript

- Node.js est un **logiciel** qui permet d'exécuter du code JavaScript **en dehors du navigateur**.
- Il fonctionne sur différents systèmes d'exploitation : **Windows, Linux, MacOS**.
- Il utilise le moteur **V8 de Chrome** (écrit en C++) pour interpréter le JavaScript.

**Astuce** : Node.js ne sert pas à afficher des pages web, mais à faire tourner du code JS côté serveur.


### NPM = Node Package Manager

- C'est un **gestionnaire de packages**, comme :
  - `composer` (PHP)
  - `pip` (Python)
  - `gradle` (Java)
- Il permet d’installer des **librairies** (ou packages) utiles dans tes projets.


### Express.js = Framework pour Node.js

- **Express** est un **framework** qui s’installe **dans un projet Node** avec NPM.
- Il facilite la création d’**applications web** et d’**API**.
- S'installe comme dépendance : `npm install express`.

---

### EJS = Moteur de templates (HTML natif)

- `.ejs` est un **moteur de rendu HTML** natif.
- Il permet d'intégrer des variables dans des vues HTML.
- Comparable à des frameworks front comme **Vue**, **Angular**, ou **React**, mais plus simple et serveur-side.

### Un projet Node.js, c'est quoi ?

- Un **dossier** avec un fichier `package.json` à la racine.
- Ce fichier décrit le projet : nom, version, dépendances, scripts, etc.
- Pour le créer automatiquement :  
  ```bash
  npm init
  ```
  Cela te posera des questions et générera un fichier `package.json` pré-rempli.


## Nodemon

`nodemon` est un outil qui permet d'exécuter un fichier `.js` avec Node.js en mode *watcher*.  
En d'autres termes, cela signifie que votre application redémarrera automatiquement dès qu'une modification est détectée dans votre code.  
C'est très pratique pendant le développement !

### Installation de nodemon

Il est recommandé d’installer `nodemon` **globalement**, c’est-à-dire sur votre système (et non dans votre projet).  
Pourquoi ? Parce que `nodemon` est un **outil de développement** et non une dépendance de production.

```
npm install -g nodemon
```

### Lancer une application avec nodemon

Une fois installé, vous pouvez démarrer votre application comme ceci :

```
nodemon monfichier.js
```

Plutôt que de devoir relancer manuellement à chaque fois avec :

```
node monfichier.js
```

### Détail sur l’emplacement de nodemon

Par curiosité, si vous souhaitez savoir où `nodemon` est installé (ainsi que les autres packages globaux `npm`), ils se trouvent généralement dans le dossier suivant sur Windows :

```
C:\Users\monusername\AppData\Roaming\npm
```

Dans ce dossier, vous retrouverez les exécutables comme `nodemon`.  
Cela vaut pour tous les paquets `npm` installés en global.

## Organisation d'un projet

### Structure par **type de fichier**

C’est une organisation **classique** où les fichiers sont regroupés par **catégorie** ou **rôle** :

```
/project/
├── src/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── views/
    ├── public/
    ├── app.js
```

- Tous les **contrôleurs** dans `controllers/`
- Tous les **modèles** dans `models/`
- Toutes les **routes** dans `routes/`
- Etc.

**Avantage** : Facile à comprendre pour les débutants  
**Limite** : Quand le projet devient gros, les dossiers deviennent très longs et difficiles à maintenir.

---

### Structure **modulaire** (par fonctionnalité ou feature)

C’est une organisation où chaque **fonctionnalité** a son propre dossier avec tous ses fichiers internes :

```
/project/
├── src/
    ├── user/
    │   ├── user.controller.js
    │   ├── user.model.js
    │   ├── user.routes.js
    ├── auth/
    │   ├── auth.controller.js
    │   ├── auth.model.js
    │   ├── auth.routes.js
    ├── app.js
```

- Chaque dossier contient les **fichiers liés à une seule fonctionnalité** (par exemple : "user", "auth", "product", etc.)

**Avantage** : Meilleure organisation à long terme, facile à isoler, maintenir et tester.  
**Limite** : Moins intuitif pour les tout premiers projets.

---

En résumé :

| Structure             | Logique            | Idéal pour...              |
|-----------------------|--------------------|-----------------------------|
| Par type de fichier   | Par rôle (MVC)     | Petits projets, débutants   |
| Modulaire             | Par fonctionnalité | Projets moyens à gros       |