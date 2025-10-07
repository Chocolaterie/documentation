---
sidebar_position: 10
---

# TP : Gestion dynamique des attributs d’un personnage de jeu en Java

## Objectifs pédagogiques

Ce TP a pour but d’introduire les notions de :

- Création et instanciation de classes Java  
- Héritage entre classes  
- Composition d’objets (un objet contient d’autres objets)  
- Manipulation de listes (`ArrayList`)  

## Contexte

On souhaite concevoir un petit programme de gestion de personnages pour un jeu vidéo.  
Chaque personnage possède plusieurs **attributs**, mais leur nombre et leur nature peuvent varier selon le type de personnage.  
L’objectif est d’apprendre à gérer ces attributs de manière **dynamique**, à l’aide d’une classe dédiée et de listes.


## Étape 1 — Classe `Attribute`

Créer une classe `Attribute` qui représente un **attribut individuel** d’un personnage.

### Spécifications :
- Deux attributs privés :  
  - `name` (nom de l’attribut)  
  - `value` (valeur associée)  
- Un constructeur pour initialiser ces deux champs  
- Des getters pour accéder à leurs valeurs  
- Une méthode `show()` affichant le nom et la valeur de l’attribut

### Exemple de résultat attendu :
```
race : humaine
niveau : 5
métier : archère
```



## Étape 2 — Classe `Character`

Créer une classe `Character` représentant un personnage.

### Spécifications :
- Un attribut `name` (chaîne de caractères)  
- Une liste `ArrayList<Attribute>` pour stocker les attributs du personnage  
- Une méthode `addAttribute(Attribute a)` pour ajouter un attribut à la liste  
- Une méthode `showInfo()` qui affiche :  
  - le nom du personnage  
  - la liste complète de ses attributs  

### Exemple de sortie attendue :
```
Nom du personnage : Aria
Attributs :
 - race : humaine
 - métier : archère
 - niveau : 5
```



## Étape 3 — Classe `Hero` (héritage)

Créer une classe `Hero` qui hérite de `Character`.

### Spécifications :
- Un attribut supplémentaire `teamName` (chaîne de caractères)  
- Un constructeur appelant la classe mère (`super(name)`)  
- Possibilité d’ajouter des attributs via `addAttribute()`  
- Redéfinir `showInfo()` pour afficher le type du personnage

### Exemple de sortie attendue :
```
Type : Héros
Nom du personnage : Aria
Équipe : Légion du Nord
Attributs :
 - métier : archère
 - niveau : 5
 - énergie : 120
```



## Étape 4 — Classe `Monster` (héritage)

Créer une classe `Monster` qui hérite également de `Character`.

### Spécifications :
- Un attribut `species` (chaîne de caractères)  
- Un constructeur appelant celui de la classe mère  
- Redéfinir la méthode `showInfo()` pour afficher "Type : Monstre"

### Exemple de sortie attendue :
```
Type : Monstre
Nom du personnage : Goblin
Espèce : Gobelin des cavernes
Attributs :
 - taille : petite
 - dangerosité : 2
 - habitat : grotte
```



## Étape 5 — Manipulation de plusieurs personnages

Créer une classe `TPRpgAttribute` contenant une méthode `main()`.

### Spécifications :
1. Créer plusieurs personnages (`Hero` et `Monster`)  
2. Ajouter des objets `Attribute` à chacun d’eux via `addAttribute()`  
3. Stocker tous les personnages dans une `ArrayList<Character>`  
4. Parcourir cette liste et afficher les informations de chaque personnage via `showInfo()`

### Exemple de sortie attendue :
```
 Liste des personnages enregistrés 

Type : Héros
Nom du personnage : Aria
Équipe : Légion du Nord
Attributs :
 - métier : archère
 - niveau : 5
 - énergie : 120

Type : Monstre
Nom du personnage : Goblin
Espèce : Gobelin des cavernes
Attributs :
 - taille : petite
 - dangerosité : 2
 - habitat : grotte
```



## Étape 6 — Pour aller plus loin (facultatif)

- Ajouter une méthode pour modifier ou supprimer un attribut  
- Trier la liste des personnages selon un critère (nom, type, etc.)  
- Compter le nombre de héros et de monstres dans la liste  



## Compétences travaillées

- Création et utilisation de classes Java  
- Héritage et polymorphisme  
- Composition d’objets  
- Utilisation des listes (`ArrayList`)  
- Parcours et affichage de données en console
