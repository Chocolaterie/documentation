---
sidebar_position: 3
---

# TP Java - Gestion d'un Inventaire (Débutant)

## Objectif
Créer une petite application Java pour gérer un inventaire de jeu vidéo sans interface graphique ni commandes complexes.

**Durée estimée : 1 heure**

---

## Fonctionnalités à Implémenter

1. **Ajouter un objet** : Stocker le nom et la quantité d'un objet.
2. **Afficher l'inventaire** : Lister tous les objets ajoutés.
3. **Supprimer un objet** : Retirer un objet existant.

---

## Étape 1 : Déclaration de la Classe `Item`

**Instructions :**
- Déclarez une classe `Item`.
- Cette classe doit contenir deux attributs : `name` (nom de l'objet) et `quantity` (quantité de l'objet).
- Ajoutez un **constructeur** pour initialiser ces attributs.
- Créez des **méthodes d'accès** (getters) et de **modification** (setters) pour ces attributs.
- Implémentez une méthode `toString()` pour afficher les détails d'un objet sous forme de texte.

---

## Étape 2 : Gestion de l'Inventaire

**Instructions :**
- Créez une classe `Inventory`.
- Déclarez une liste d'objets de type `Item`.
- Implémentez une méthode `addItem(String name, int quantity)` :
  - Vérifiez si l'objet existe déjà.
  - Si oui, mettez à jour sa quantité.
  - Sinon, ajoutez un nouvel objet à la liste.
- Implémentez une méthode `displayItems()` qui parcourt la liste et affiche chaque objet.
- Implémentez une méthode `removeItem(String name)` qui supprime l'objet correspondant au nom donné.

**Conseil :** Utilisez des boucles pour parcourir la liste et cherchez un objet par son nom.

---

## Étape 3 : Programme Principal

**Instructions :**
- Créez une classe `Main` contenant la méthode `main`.
- Instanciez un objet `Inventory`.
- **Ajoutez des objets** dans l'inventaire en appelant la méthode `addItem()`.
- **Affichez l'inventaire** en utilisant `displayItems()`.
- **Supprimez un objet** de l'inventaire en appelant `removeItem()`.
- **Affichez à nouveau l'inventaire** pour vérifier la suppression.

**Conseil :** Commencez par ajouter quelques objets simples, affichez-les, puis supprimez-en un et affichez à nouveau la liste.

---

## Résultats Attendus
- **Ajout d'objets** : L'inventaire stocke et affiche les objets.
- **Suppression** : Un objet est retiré de la liste.
