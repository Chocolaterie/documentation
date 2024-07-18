---
sidebar_position: 10
---

# Stocker temporairement des données

Attention, les mots peuvent avoir plusieurs sens selon l'interlocuteur, notamment lorsqu'on parle de "stocker" des données ou de "stocker temporairement" des données.

Cela peut être des données stockées en mémoire, en base de données, ou dans des fichiers, entre autres.

Néanmoins, je vous propose une interprétation de "je veux dans l'application stocker un String temporairement".

Si on veut stocker un String temporairement pendant l'exécution d'une application, on peut le faire de diverses manières, telles que :

- Le stocker dans un singleton
- Dans une classe statique
- Dans une BDD temporairement
- Dans un cookie
- Dans le local storage
- Etc...

Nous remarquons bien que c'est très vaste !

Lorsqu'on développe une application et que nous devons faire vite dans le cadre d'un TP ou POC (Proof of Concept), on peut choisir, par exemple, la solution de stocker le String dans une classe statique et, au pire, changer de méthode plus tard.


## Exemple stocker dans un classe statique


```kotlin
class MonCacheMemoire {

   companion object {
        var monString : String = ""
   }
}
```
