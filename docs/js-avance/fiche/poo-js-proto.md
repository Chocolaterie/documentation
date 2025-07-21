---
id: poo-js-prototype
title: POO en JavaScript avec prototypes
sidebar_position: 2
---

# Programmation Orientée Objet avec prototypes

Avant l'introduction des `class` (ES6), JavaScript utilisait un système basé sur les **fonctions constructrices** et le **prototype** pour la programmation orientée objet.

Ce document montre comment utiliser ce modèle "classique".

## Fonction constructeur

On commence par une fonction qui initialise un objet :

```js
function Personne(nom) {
  this.nom = nom;
}
```

Ici, `Personne` est une fonction constructeur. On l’utilise avec `new` :

```js
const alice = new Personne("Alice");
console.log(alice.nom); // Alice
```

## Ajouter des méthodes via le prototype

Pour éviter de recréer les méthodes à chaque instanciation, on les ajoute à `Personne.prototype` :

```js
Personne.prototype.saluer = function () {
  console.log("Bonjour, je m'appelle " + this.nom);
};
```

Maintenant, toutes les instances de `Personne` partagent la même méthode `saluer` :

```js
alice.saluer(); // Bonjour, je m'appelle Alice
```

## Héritage par prototype

On peut créer une fonction `Etudiant` qui hérite de `Personne` :

```js
function Etudiant(nom, filiere) {
  Personne.call(this, nom); // Appel du constructeur parent
  this.filiere = filiere;
}
```

Ensuite on lie les prototypes :

```js
Etudiant.prototype = Object.create(Personne.prototype);
Etudiant.prototype.constructor = Etudiant;
```

Puis on ajoute des méthodes spécifiques :

```js
Etudiant.prototype.afficherFiliere = function () {
  console.log(this.nom + " étudie en " + this.filiere);
};
```

Utilisation :

```js
const bob = new Etudiant("Bob", "Informatique");
bob.saluer(); // Bonjour, je m'appelle Bob
bob.afficherFiliere(); // Bob étudie en Informatique
```

## Vérification d'héritage

```js
console.log(bob instanceof Etudiant); // true
console.log(bob instanceof Personne); // true
```


## Résumé

- Chaque fonction peut devenir un constructeur via `new`.
- Le prototype permet de partager des méthodes entre instances.
- L’héritage est fait manuellement via `Object.create()` et `call`.


## Aller plus loin

- [MDN - Object prototypes](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
