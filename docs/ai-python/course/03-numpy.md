---
id: introduction-numpy
title: Introduction à NumPy
sidebar_position: 3
---

# Introduction à NumPy

**NumPy** est une bibliothèque Python essentielle pour le calcul scientifique. Elle permet de travailler efficacement avec des **tableaux de données numériques** (appelés *arrays*), bien plus rapidement qu’avec les listes Python classiques.

## Pourquoi utiliser NumPy ?

- Manipulation simple et rapide de données numériques
- Opérations vectorielles sans boucle `for`
- Base de nombreuses autres bibliothèques (pandas, scikit-learn, TensorFlow…)

## Installation

Si vous avez installé Anaconda, NumPy est déjà inclus. Sinon, vous pouvez l’installer avec :

```py
pip install numpy
```

## Créer un tableau NumPy (array)

Voici comment créer des tableaux simples avec NumPy :

```py
import numpy as np

# Créer un tableau à partir d’une liste Python
a = np.array([1, 2, 3])
print(a)
```

Sortie :

```
[1 2 3]
```

## Tableaux multidimensionnels

```py
b = np.array([[1, 2], [3, 4]])
print(b)
```

Sortie :

```
[[1 2]
 [3 4]]
```

## Forme et dimensions

```py
print(b.shape)  # (2, 2)
print(b.ndim)   # 2
```

## Opérations sur les tableaux

### Opérations élément par élément

```py
x = np.array([1, 2, 3])
y = np.array([4, 5, 6])

print(x + y)      # [5 7 9]
print(x * y)      # [ 4 10 18]
print(x ** 2)     # [1 4 9]
```

### Fonctions utiles

```py
print(np.mean(x))    # Moyenne
print(np.max(x))     # Maximum
print(np.sum(x))     # Somme
```

## Indexation et slicing

```py
a = np.array([10, 20, 30, 40])
print(a[1])      # 20
print(a[1:3])    # [20 30]
```

Pour les matrices :

```py
m = np.array([[1, 2, 3], [4, 5, 6]])
print(m[1, 2])   # Accès ligne 1, colonne 2 → 6
```

## Génération automatique de tableaux

```py
np.zeros((2, 3))     # Tableau de zéros
np.ones((2, 3))      # Tableau de uns
np.eye(3)            # Matrice identité 3x3
np.arange(0, 10, 2)  # [0 2 4 6 8]
np.linspace(0, 1, 5) # [0.   0.25 0.5  0.75 1.]
```

## Produit matriciel (dot product)

```py
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

print(np.dot(a, b))
```

Sortie :

```
[[19 22]
 [43 50]]
```

## Pourquoi ne pas utiliser simplement les listes Python ?

- Les listes ne sont pas optimisées pour le calcul numérique
- Pas de support natif pour les opérations vectorielles
- Moins efficaces en mémoire et en vitesse

## À retenir

| Concept | Explication |
|--------|-------------|
| array | Tableau NumPy, remplace les listes pour le calcul |
| shape | Dimensions du tableau |
| vectorisation | Calculs sans boucle, plus rapides |
| slicing | Extraction de sous-tableaux |
| dot | Produit matriciel |

## Prochaines étapes

- Apprendre à combiner NumPy avec **pandas** pour manipuler des jeux de données
- S'entraîner à manipuler des matrices, utile pour le machine learning
