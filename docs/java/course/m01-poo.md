---
sidebar_position: 1
---

# Cours Java - Création d'Objets, Instanciation, Constructeurs et Signature de Méthodes

## Introduction
En Java, la programmation orientée objet repose sur la création de **classes** et d'**objets**. Apprendre à définir des classes, créer des objets et comprendre les constructeurs est essentiel.

---

## 1. Déclaration d'une Classe
Une classe est un modèle pour créer des objets.

```java
// Déclaration d'une classe Person
public class Person {
    // Attributs
    private String name;
    private int age;

    // Méthode d'affichage
    public void displayInfo() {
        System.out.println("Nom: " + name + ", Age: " + age);
    }
}
```

---

## 2. Instanciation d'un Objet
Pour créer un objet, utilisez le mot-clé `new`.

```java
public class Main {
    public static void main(String[] args) {
        // Instanciation d'un objet de la classe Person
        Person person = new Person();
        person.displayInfo();  // Utilisation de l'objet
    }
}
```

---

## 3. Constructeurs
Un **constructeur** initialise les objets lorsqu'ils sont créés.

### Exemple de Constructeur
```java
public class Person {
    private String name;
    private int age;

    // Constructeur par défaut
    public Person() {
        name = "Inconnu";
        age = 0;
    }

    // Constructeur avec paramètres
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void displayInfo() {
        System.out.println("Nom: " + name + ", Age: " + age);
    }
}
```

### Instanciation avec Constructeur
```java
public class Main {
    public static void main(String[] args) {
        // Utilisation du constructeur par défaut
        Person person1 = new Person();
        person1.displayInfo();

        // Utilisation du constructeur avec paramètres
        Person person2 = new Person("Alice", 25);
        person2.displayInfo();
    }
}
```

---

## 4. Signature de Méthode
La **signature de méthode** inclut :
- Le type de retour
- Le nom de la méthode
- Le type et l'ordre des paramètres

### Exemple de Méthodes
```java
public class MathOperations {
    // Méthode sans retour
    public void sayHello() {
        System.out.println("Bonjour!");
    }

    // Méthode avec retour et paramètres
    public int add(int a, int b) {
        return a + b;
    }
}
```

### Utilisation
```java
public class Main {
    public static void main(String[] args) {
        MathOperations math = new MathOperations();
        math.sayHello();

        int result = math.add(5, 3);
        System.out.println("Résultat: " + result);
    }
}
```

---

## Conclusion
- **Création de classe** : Déclarez des attributs et des méthodes.
- **Instanciation** : Utilisez `new` pour créer des objets.
- **Constructeurs** : Initialisez les objets avec des valeurs.
- **Signature de méthode** : Respectez le type de retour, le nom et les paramètres.

Avec cette base, vous êtes prêt à construire des programmes Java orientés objet !