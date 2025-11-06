---
id: transformer
title: Transfomer/Clean
sidebar_position: 11
---

# Transformer des colonnes/données

Comment convertir une colonne textuelle en **index numérique** sans utiliser de **binaire (one-hot)**.

### Différence :

- **Encodage en identifiant (index)** : chaque valeur textuelle devient un entier unique (comme une clé étrangère en base de données).
- **Encodage binaire (One-Hot)** : chaque valeur textuelle devient une colonne distincte avec 1 ou 0 (présent / absent).

## LabelEncoder - Encodage en identifiant

```py
import pandas as pd

df = pd.DataFrame({'Categorie':["Horreur", "Aventure", "Sc-Fi", "Aventure"], 'Title':["Saw", "La Jungle", "Slider", "Sharknado"]})

# Label Encoder
from sklearn.preprocessing import LabelEncoder

label_encoder = LabelEncoder()

df['CatId'] = label_encoder.fit_transform(df['Categorie'])
```

### Correspondance de la conversion

| Categorie | CatId |
|-------|--------|
| Aventure | 0 |
| SciFi | 1 |
| Aventure | 0 |
| Horror | 2 |

:::warning Rappel

**LabelEncoder** assigne un entier par valeur unique. Attention : ces entiers ont un ordre arbitraire - à n'utiliser **que si l'ordre n'a pas de sens** pour le modèle.

:::

## OneHotEncoder (Binaire)

```py
from sklearn.preprocessing import OneHotEncoder

# OneHotEncoder (Binaire)
one_hot_encoder = OneHotEncoder()

encoded_column = one_hot_encoder.fit_transform(df[['Categorie']])

# Créer un DataFrame avec les noms de colonnes
encoded_df = pd.DataFrame(encoded_column, columns=one_hot_encoder.get_feature_names_out(['Categorie']))

# Fusionner avec les autres données
df = df.join(encoded_df)

```

### Correspondance de la conversion

| Categorie | Categorie_Aventure | Categorie_Horreur | Categorie_Sci-Fi
|-------|--------|--------|--------|
| Aventure | 1 | 0 | 0 |
| SciFi | 0 | 1 | 0 |
| Aventure | 1 | 0 | 0 |
| Horror | 0 | 0 | 1 |

:::info Info

> Chaque catégorie devient une colonne binaire, indiquant sa présence (1) ou non (0).

:::
