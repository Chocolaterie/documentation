---
sidebar_position: 2
---

# Cours Java - Polymorphisme en Programmation Orientée Objet (POO)

## Introduction
Le **polymorphisme** en POO permet de manipuler des objets de types différents à travers une même interface ou classe parente. Cela rend le code plus flexible et extensible.

---

## Types de Polymorphisme en Java
1. **Polymorphisme de Compilation (Surcharge)** : Même méthode avec des paramètres différents.
2. **Polymorphisme d'Exécution (Redéfinition)** : Méthodes redéfinies dans des sous-classes.

---

## Exemple : Jeu Vidéo - Polymorphisme avec Personnages

### 1. Création de la Classe Parente `Character`

```java
// Classe parente représentant un personnage général
public class Character {
    protected String name;

    public Character(String name) {
        this.name = name;
    }

    // Méthode générique
    public void performAction() {
        System.out.println(name + " attend...");
    }
}
```

---

### 2. Création de Sous-Classes Spécialisées

#### `Warrior` (Guerrier)
```java
public class Warrior extends Character {
    public Warrior(String name) {
        super(name);
    }

    @Override
    public void performAction() {
        System.out.println(name + " attaque avec son épée !");
    }
}
```

#### `Mage` (Magicien)
```java
public class Mage extends Character {
    public Mage(String name) {
        super(name);
    }

    @Override
    public void performAction() {
        System.out.println(name + " lance un sort magique !");
    }
}
```

---

### 3. Utilisation du Polymorphisme

```java
public class Game {
    public static void main(String[] args) {
        // Création d'un tableau de personnages
        Character[] characters = {
            new Warrior("Arthas"),
            new Mage("Jaina"),
            new Character("Paysan")
        };

        System.out.println("--- Début des Actions ---");

        // Utilisation du polymorphisme
        for (Character character : characters) {
            character.performAction();
        }
    }
}
```

---

## Concepts Importants

1. **Redéfinition des Méthodes (`@Override`)** : Les sous-classes peuvent redéfinir les méthodes héritées.
2. **Classe Abstraite et Interface** : Le polymorphisme fonctionne aussi avec des classes abstraites et des interfaces.
3. **Tableaux ou Listes de Type Parent** : Utilisez un tableau de type parent pour gérer des objets de types différents.

---

## Résumé
Le polymorphisme rend le code **flexible**, **extensible** et **réutilisable**. Utilisez-le pour concevoir des systèmes complexes où plusieurs types d'objets peuvent être traités uniformément.
