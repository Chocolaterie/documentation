---
id: introduction-seaborn
title: Introduction à Seaborn
sidebar_position: 6
---

# Introduction à Seaborn

**Seaborn** est une bibliothèque Python de visualisation de données basée sur matplotlib.  
Elle simplifie la création de graphiques statistiques et produit des visualisations plus esthétiques par défaut.

## Pourquoi utiliser Seaborn ?

- Syntaxe simple, intégrée à pandas
- Apparence professionnelle par défaut
- Graphiques statistiques utiles pour l’exploration des données

## Installation

Si vous avez Anaconda, Seaborn est déjà installé. Sinon, utilisez :

```bash
pip install seaborn
```

## Importation

```python
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
```

## Exemple de dataset intégré

Seaborn inclut des jeux de données prêts à l’emploi :

```python
df = sns.load_dataset("penguins")
print(df.head())
```

## Graphique en nuage de points (scatterplot)

```python
sns.scatterplot(data=df, x="flipper_length_mm", y="body_mass_g")
plt.title("Longueur des nageoires vs Masse corporelle")
plt.show()
```

## Coloration par catégorie

```python
sns.scatterplot(data=df, x="flipper_length_mm", y="body_mass_g", hue="species")
plt.title("Espèces de manchots")
plt.show()
```

## Graphique en barres

```python
sns.barplot(data=df, x="species", y="body_mass_g")
plt.title("Masse corporelle moyenne par espèce")
plt.show()
```

## Graphique en boîte (boxplot)

```python
sns.boxplot(data=df, x="species", y="flipper_length_mm")
plt.title("Distribution des longueurs de nageoires")
plt.show()
```

## Histogramme avec `histplot`

```python
sns.histplot(data=df, x="body_mass_g", bins=20, kde=True)
plt.title("Répartition des masses")
plt.show()
```

## Corrélation avec `heatmap`

```python
corr = df.corr(numeric_only=True)
sns.heatmap(corr, annot=True, cmap="coolwarm")
plt.title("Matrice de corrélation")
plt.show()
```

## Facettage : plusieurs graphes par groupe

```python
sns.relplot(data=df, x="flipper_length_mm", y="body_mass_g", hue="species", col="sex")
plt.show()
```

## À retenir

| Fonction | Description |
|----------|-------------|
| `scatterplot()` | Nuage de points |
| `barplot()` | Moyennes avec barres d'erreur |
| `boxplot()` | Boîte à moustaches |
| `histplot()` | Histogramme |
| `heatmap()` | Matrice de corrélation |
| `relplot()` | Facettage automatique |

## Bonnes pratiques

- Utiliser Seaborn avec des `DataFrame` pandas
- Toujours importer matplotlib pour `plt.show()`
- Tester les jeux de données intégrés (`tips`, `penguins`, `titanic`…)

## Prochaines étapes

- Personnaliser les couleurs et styles (`palette`, `style`, `context`)
- Combiner avec `matplotlib` pour des graphiques plus complexes
- Explorer les graphiques avancés : `violinplot`, `pairplot`, `catplot`