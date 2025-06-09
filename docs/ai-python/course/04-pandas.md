---
id: introduction-pandas
title: Introduction à pandas
sidebar_position: 4
---

# Introduction à pandas

**pandas** est une bibliothèque Python spécialisée dans la **manipulation et l’analyse de données tabulaires**. Elle est indispensable pour tout projet de data science ou de machine learning.

## Pourquoi utiliser pandas ?

- Chargement facile de fichiers CSV, Excel, JSON...
- Manipulation efficace de tableaux de données (filtres, tris, groupements)
- Nettoyage et transformation de données simples
- Fonctionnalités proches d’Excel, mais en Python

## Installation

Si vous utilisez Anaconda, pandas est déjà installé. Sinon, vous pouvez l’installer avec :

```bash
pip install pandas
```

## Structures principales de pandas

### 1. **Series** : vecteur 1D (comme une colonne Excel)

```python
import pandas as pd

s = pd.Series([10, 20, 30])
print(s)
```

Sortie :

```
0    10
1    20
2    30
dtype: int64
```

### 2. **DataFrame** : tableau 2D (comme une feuille de calcul)

```python
data = {
    'Nom': ['Alice', 'Bob', 'Charlie'],
    'Âge': [25, 30, 35],
    'Ville': ['Paris', 'Lyon', 'Marseille']
}

df = pd.DataFrame(data)
print(df)
```

Sortie :

```
      Nom  Âge      Ville
0   Alice   25      Paris
1     Bob   30       Lyon
2  Charlie   35  Marseille
```

## Lire un fichier CSV

```python
df = pd.read_csv("fichier.csv")
```

Pandas détecte automatiquement les colonnes, les types de données, les noms, etc.

## Accéder aux données

### Aperçu rapide

```python
df.head()       # Les 5 premières lignes
df.tail(3)      # Les 3 dernières lignes
df.shape        # Nombre de lignes et colonnes
df.columns      # Liste des colonnes
```

### Accès aux colonnes

```python
df["Nom"]             # Colonne 'Nom'
df[["Nom", "Ville"]]  # Plusieurs colonnes
```

### Accès aux lignes

```python
df.iloc[0]       # Première ligne par position
df.loc[1]        # Ligne avec l’index = 1
```

## Filtres et conditions

```python
# Âge supérieur à 25
df[df["Âge"] > 25]

# Villes différentes de "Paris"
df[df["Ville"] != "Paris"]
```

## Ajouter ou modifier une colonne

```python
df["Année de naissance"] = 2025 - df["Âge"]
```

## Statistiques rapides

```python
df.describe()     # Statistiques sur les colonnes numériques
df["Âge"].mean()  # Moyenne
df["Âge"].max()   # Maximum
```

## Trier les données

```python
df.sort_values("Âge")              # Par défaut croissant
df.sort_values("Âge", ascending=False)  # Décroissant
```

## Grouper les données

```python
df.groupby("Ville")["Âge"].mean()
```

## Exporter les données

```python
df.to_csv("sortie.csv", index=False)
```

## À retenir

| Concept | Explication |
|--------|-------------|
| Series | Colonne unique avec index |
| DataFrame | Tableau 2D avec lignes et colonnes |
| read_csv | Lire un fichier CSV |
| iloc / loc | Accès aux lignes (par position ou par index) |
| groupby | Calculs par groupe (ex : moyenne par ville) |

## Prochaines étapes

- Apprendre à nettoyer des données (valeurs manquantes, doublons…)
- Fusionner plusieurs DataFrames (`merge`, `concat`)
- Utiliser pandas avec NumPy pour des calculs complexes