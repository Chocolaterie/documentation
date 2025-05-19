---
sidebar_position: 1
---

# Rappel

`nodemon` est un outil qui permet d'exécuter un fichier `.js` avec Node.js en mode *watcher*.  
En d'autres termes, cela signifie que votre application redémarrera automatiquement dès qu'une modification est détectée dans votre code.  
C'est très pratique pendant le développement !

## Installation de nodemon

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
