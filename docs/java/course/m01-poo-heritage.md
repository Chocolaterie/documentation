---
sidebar_position: 2
---

# Cours Java - Héritage en Programmation Orientée Objet (POO)

## Introduction
L'**héritage** est un concept fondamental de la POO qui permet à une classe de **réutiliser** et **étendre** les fonctionnalités d'une autre classe.

- La classe héritée est appelée **classe parente** ou **superclasse**.
- La classe qui hérite est appelée **classe enfant** ou **sous-classe**.

---

## Exemple : Jeu Vidéo - Héritage de Personnages

### 1. Création de la Classe Parente `Character`

```java
// Classe parente représentant un personnage général
public class Character {
    protected String name;
    protected int health;

    public Character(String name, int health) {
        this.name = name;
        this.health = health;
    }

    public void takeDamage(int damage) {
        health -= damage;
        System.out.println(name + " a subi " + damage + " points de dégâts. Vie restante: " + health);
    }

    public void displayStatus() {
        System.out.println(name + " | Vie: " + health);
    }
}
```

---

### 2. Création de Sous-Classes Spécialisées

#### `Warrior` (Guerrier)
```java
// Sous-classe héritant de Character
public class Warrior extends Character {
    private int strength;

    public Warrior(String name, int health, int strength) {
        super(name, health); // Appelle le constructeur de la classe parente
        this.strength = strength;
    }

    public void attack(Character target) {
        System.out.println(name + " attaque " + target.name + " avec une force de " + strength);
        target.takeDamage(strength);
    }
}
```

#### `Mage` (Magicien)
```java
public class Mage extends Character {
    private int mana;

    public Mage(String name, int health, int mana) {
        super(name, health);
        this.mana = mana;
    }

    public void castSpell(Character target) {
        if (mana >= 10) {
            System.out.println(name + " lance un sort sur " + target.name);
            target.takeDamage(15);
            mana -= 10;
        } else {
            System.out.println(name + " n'a pas assez de mana pour lancer un sort!");
        }
    }
}
```

---

### 3. Programme Principal `Game`

```java
public class Game {
    public static void main(String[] args) {
        Warrior warrior = new Warrior("Arthas", 100, 20);
        Mage mage = new Mage("Jaina", 80, 30);

        warrior.displayStatus();
        mage.displayStatus();

        System.out.println("--- Début du Combat ---");

        warrior.attack(mage);
        mage.castSpell(warrior);

        warrior.displayStatus();
        mage.displayStatus();
    }
}
```

---

## Concepts Importants

1. **Mot-clé `extends`** : Utilisé pour déclarer une sous-classe.
2. **Constructeur de la Superclasse** : Utilisez `super()` pour appeler le constructeur de la classe parente.
3. **Attributs et Méthodes Héritées** : Les sous-classes héritent des attributs et méthodes publiques ou protégées.
4. **Redéfinition des Méthodes** : Les sous-classes peuvent redéfinir des méthodes de la classe parente.

---

## Résumé
L'héritage permet de **réutiliser le code existant** et de créer une **hiérarchie logique** entre les classes. Utilisez-le pour structurer vos projets tout en gardant un code lisible et maintenable.
