---
sidebar_position: 2
---

# Cours Java - Visibilité des Variables et Méthodes en POO

## Introduction
En Java, la **visibilité** définit l'accessibilité des variables et des méthodes dans une classe. Cela permet de sécuriser et d'organiser le code en contrôlant quels membres sont accessibles depuis l'extérieur.

---

## Modificateurs d'Accès en Java

| Modificateur   | Accessible dans la même classe | Accessible dans le même package | Accessible dans une sous-classe | Accessible depuis l'extérieur |
|----------------|-----------------------------|----------------------------|------------------------------|-----------------------------|
| `private`      | ✅                           | ❌                          | ❌                          | ❌                         |
| `default`      | ✅                           | ✅                          | ❌                          | ❌                         |
| `protected`    | ✅                           | ✅                          | ✅                          | ❌                         |
| `public`       | ✅                           | ✅                          | ✅                          | ✅                         |

---

## 1. **`private` : Accès Restreint**
- **Utilisation** : Quand vous voulez cacher des données internes à la classe.
- **Exemple :**

```java
public class Person {
    private String name; // Variable accessible uniquement dans la classe

    public Person(String name) {
        this.name = name;
    }

    public String getName() { // Méthode publique pour accéder à 'name'
        return name;
    }
}
```

---

## 2. **`default` (aucun modificateur)**
- **Utilisation** : Accessibilité limitée au package.
- **Exemple :**

```java
class DefaultExample {
    String message = "Hello"; // Pas de modificateur, donc visibilité dans le package

    void showMessage() {
        System.out.println(message);
    }
}
```

---

## 3. **`protected` : Visibilité Étendue**
- **Utilisation** : Quand vous souhaitez partager des membres avec les classes du même package et les sous-classes.
- **Exemple :**

```java
public class Animal {
    protected String species;

    protected void setSpecies(String species) {
        this.species = species;
    }
}

class Dog extends Animal {
    public void displaySpecies() {
        setSpecies("Canine");
        System.out.println("Species: " + species);
    }
}
```

---

## 4. **`public` : Accès Total**
- **Utilisation** : Quand vous voulez que le membre soit accessible partout.
- **Exemple :**

```java
public class PublicExample {
    public String greeting = "Hello World";

    public void displayGreeting() {
        System.out.println(greeting);
    }
}
```

---

## Conseils Pratiques
1. **Utilisez `private` par défaut** et exposez les données via des **méthodes publiques**.
2. **Réduisez l'accès autant que possible** pour minimiser les erreurs.
3. **`protected`** est utile pour les **héritages complexes**.
4. **Ne pas confondre `default` et `protected`**, qui sont souvent source de confusion pour les débutants.