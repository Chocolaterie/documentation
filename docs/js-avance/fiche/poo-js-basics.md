---
sidebar_position: 1
id: poo-nodejs
title: Programmation Orientée Objet en Node.js
---

# Rappel sur la Programmation Orientée Objet (POO) en JavaScript

JavaScript supporte la POO via les **objets**, les **constructeurs**, et les **classes** (depuis ES6).

## 1. Créer un objet simple

```js
const person = {
  name: "Alice",
  sayHello: function () {
    console.log(`Bonjour, je suis ${this.name}`);
  }
};

person.sayHello(); // Bonjour, je suis Alice
```

## 2. Fonctions constructrices (avant ES6)

```js
function Animal(nom) {
  this.nom = nom;
}

Animal.prototype.parler = function () {
  console.log(`${this.nom} fait un bruit`);
};

const chat = new Animal("Miaou");
chat.parler(); // Miaou fait un bruit
```
## 3. Classes ES6 (plus moderne)

```js
class Personne {
  constructor(nom) {
    this.nom = nom;
  }

  direBonjour() {
    console.log(`Salut, je suis ${this.nom}`);
  }
}

const bob = new Personne("Bob");
bob.direBonjour(); // Salut, je suis Bob
```

## 4. Héritage avec extends

```js
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  parler() {
    console.log(`${this.nom} fait un bruit`);
  }
}

class Chien extends Animal {
  parler() {
    console.log(`${this.nom} aboie`);
  }
}

const rex = new Chien("Rex");
rex.parler(); // Rex aboie
```

## 5. Encapsulation (via # en ES2022+)

```js
class Compte {
  #solde = 0; // privé

  deposer(montant) {
    this.#solde += montant;
  }

  afficherSolde() {
    console.log(`Solde: ${this.#solde}€`);
  }
}

const compte = new Compte();
compte.deposer(100);
compte.afficherSolde(); // Solde: 100€
```