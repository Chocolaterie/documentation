---
id: model-scikit-learn
title: Les modeles dans Scikit-learn
sidebar_position: 8
---

# Comprendre le modèle `LinearRegression` de Scikit-learn

## Introduction

Le modèle `LinearRegression` de la bibliothèque Scikit-learn est utilisé pour effectuer des **prédictions de valeurs numériques continues** à partir de variables d'entrée.

Ce type de modèle est appelé **régression linéaire**, car il cherche à modéliser la relation entre les variables sous forme de droite (ou d'hyperplan si plusieurs variables).


## Formule mathématique

La régression linéaire modélise les données avec l'équation suivante :

```
y = w0 + w1 * x1 + w2 * x2 + ... + wn * xn
```

- `y` : la valeur prédite (ex. : prix d'une maison)
- `w0` : l'ordonnée à l'origine (biais)
- `w1, ..., wn` : les coefficients (ou poids)
- `x1, ..., xn` : les variables d'entrée

Le modèle cherche à **trouver les bons coefficients** `w` pour que les prédictions soient les plus proches possibles des vraies valeurs.

## Comment le modèle apprend

Lors de l'entraînement (avec `.fit()`), le modèle :

1. Reçoit des exemples (X, y) : X = données d'entrée, y = valeurs cibles.
2. Cherche les coefficients `w` qui minimisent l'erreur, souvent mesurée par la **somme des erreurs au carré** (moindres carrés).

## Exemple simple en Python

```
from sklearn.linear_model import LinearRegression
import numpy as np

# Exemple de données
X = np.array([[1], [2], [3], [4]])  # variable d'entrée
y = np.array([2, 4, 6, 8])          # cible

# Création et entraînement du modèle
model = LinearRegression()
model.fit(X, y)

# Prédiction
prediction = model.predict([[5]])
print("Prédiction pour x=5 :", prediction[0])

# Affichage des coefficients
print("Coefficient (w1) :", model.coef_[0])
print("Biais (w0) :", model.intercept_)
```

## Interprétation des résultats

Si le modèle affiche :

```
Coefficient (w1) : 2.0
Biais (w0) : 0.0
```

Alors l'équation du modèle appris est :

```
y = 2 * x + 0
```

Donc, pour `x = 5`, la prédiction est `y = 10`.

## Conclusion

`LinearRegression` est un modèle simple mais puissant lorsqu'on pense qu'une **relation linéaire** existe entre les variables d'entrée et la cible. Il est rapide à entraîner et très utile pour l'interprétation des relations entre variables.
