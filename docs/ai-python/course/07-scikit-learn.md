---
id: introduction-scikit-learn
title: Introduction à Scikit-learn
sidebar_position: 7
---

# Introduction à Scikit-learn

**Scikit-learn** est une bibliothèque Python incontournable pour le **Machine Learning classique** (hors deep learning).  
Elle fournit tous les outils pour entraîner, évaluer et utiliser des modèles prédictifs.

## Pourquoi utiliser Scikit-learn ?

- Syntaxe simple, unifiée pour tous les modèles
- Large choix d’algorithmes : régression, classification, clustering...
- Intégration parfaite avec NumPy et pandas
- Utilisé en production et en recherche

## Installation

Si vous avez Anaconda, Scikit-learn est déjà installé. Sinon :

```bash
pip install scikit-learn
```

## Les grandes étapes d’un projet Machine Learning

1. Importer les données
2. Séparer en données d'entraînement et de test
3. Choisir et entraîner un modèle
4. Évaluer la performance
5. Utiliser le modèle pour prédire

## Exemple complet : classification avec K-Nearest Neighbors

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# 1. Charger les données
iris = load_iris()
X = iris.data
y = iris.target

# 2. Séparer en train / test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Créer et entraîner le modèle
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

# 4. Prédire sur les données de test
y_pred = model.predict(X_test)

# 5. Évaluer la précision
accuracy = accuracy_score(y_test, y_pred)
print("Précision :", accuracy)
```

## Autres algorithmes disponibles

| Tâche | Algorithmes |
|------|-------------|
| Classification | `KNeighborsClassifier`, `DecisionTreeClassifier`, `SVC`, `LogisticRegression` |
| Régression | `LinearRegression`, `Ridge`, `SVR`, `RandomForestRegressor` |
| Clustering | `KMeans`, `DBSCAN`, `AgglomerativeClustering` |
| Réduction de dimensions | `PCA`, `TSNE` |

## Fonctions courantes

```python
model.fit(X_train, y_train)    # Entraîner
model.predict(X_test)          # Prédire
model.score(X_test, y_test)    # Score global
```

## Évaluation des modèles

```python
from sklearn.metrics import classification_report, confusion_matrix

print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))
```

## Pipeline complet avec pandas

```python
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Charger un CSV
df = pd.read_csv("donnees.csv")

# Séparer les features (X) et la cible (y)
X = df.drop(columns="cible")
y = df["cible"]

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Entraînement
model = LogisticRegression()
model.fit(X_train, y_train)

# Prédiction
y_pred = model.predict(X_test)
```

## À retenir

| Étape | Outils |
|-------|--------|
| Chargement des données | `pandas`, `load_iris()`, `read_csv()` |
| Séparation | `train_test_split()` |
| Modélisation | `fit()`, `predict()` |
| Évaluation | `accuracy_score()`, `confusion_matrix()` |

## Prochaines étapes

- Tester plusieurs modèles avec les **mêmes données**
- Explorer les **paramètres des modèles** (`max_depth`, `n_neighbors`, etc.)
- Apprendre la **validation croisée** et le **tuning automatique (GridSearchCV)**