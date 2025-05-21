---
sidebar_position: 5
---

# Les ids

## Pourquoi éviter d'utiliser des IDs entiers pour des données nombreuses ?

Lorsque vous concevez des bases de données susceptibles de contenir des millions (voire des milliards) de lignes, il faut faire attention au type d'identifiants utilisés.

### Problèmes avec les IDs entiers (`INT`, `BIGINT`)

#### 1. **Capacité limitée**
- `INT` (4 octets) : maximum **2 147 483 647**.
- `BIGINT` (8 octets) : environ **9 quintillions**, mais reste une **ressource finie**.
- Avec des volumes très élevés, **le dépassement est possible**.

#### 2. **Conflits et contention en base**
- Les `AUTO_INCREMENT` peuvent causer des **goulots d'étranglement** lors d'écritures concurrentes.
- Risques accrus dans des bases **fortement sollicitées** ou **distribuées**.

#### 3. **Pas d’unicité globale**
- Les IDs auto-incrémentés sont uniques **dans une base**, mais pas à l’échelle de plusieurs serveurs ou applications.
- Difficile à gérer dans un **système distribué** ou avec **des imports de données externes**.

#### 4. **Prévisibilité = Risques de sécurité**
- Les IDs séquentiels sont faciles à deviner (`/user/1`, `/user/2`, etc.).
- Cela peut **exposer des données** sensibles si les contrôles d’accès sont mal faits.

#### 5. **Fusion de données difficile**
- Deux tables issues de bases différentes peuvent avoir des IDs identiques (`user_id = 42`), ce qui complique les **imports ou fusions de données**.

---

### Alternatives recommandées

| Type d'ID    | Avantages clés                          | Inconvénients |
|--------------|------------------------------------------|----------------|
| `UUID` (v4)   | Unique globalement, non séquentiel      | Taille (16 octets), non trié |
| `UUIDv7` / `ULID` | Unique, encodé avec un timestamp, triable | Taille plus grande que `INT` |
| `Snowflake`   | Unique, timestamp + shard ID + incrément | Implémentation + stockage |

---

### En résumé :
> Pour des données **nombreuses, sensibles ou distribuées**, évitez les IDs `INT` auto-incrémentés. Préférez des identifiants **globalement uniques**, comme `UUID`, `ULID`, ou des solutions de type `Snowflake`.

:::info Tip

Pour les petits projets ou des données peu critiques, un `INT AUTO_INCREMENT` reste simple et performant.

:::


## Pourquoi ne faut-il pas exposer les `_id` MongoDB dans les URLs ?

Exposer les identifiants MongoDB (`_id`) dans les URLs peut sembler pratique, mais cela présente plusieurs inconvénients importants, surtout en termes de sécurité, de maintenabilité et de bonnes pratiques.


### 1. Prévisibilité et énumération

Les `_id` de MongoDB sont de type `ObjectId`, un format qui contient :

- Un **timestamp** (date de création),
- Un identifiant machine,
- Un PID (process ID),
- Un compteur.

Cela les rend **semi-prévisibles**. Un attaquant qui connaît un `_id` peut essayer de deviner ou générer d'autres identifiants proches. C’est ce qu’on appelle une **attaque par énumération d’identifiants**.

### 2. Fuite d’informations internes

Le `ObjectId` encode la **date exacte de création** d’un document. Cela peut :

- Révéler des informations sur le volume et la fréquence des opérations,
- Donner des indices à un attaquant sur les périodes d’activité.

Même si cela semble anodin, **toute fuite d’information est à éviter** par principe de précaution.

### 3. Couplage à l’implémentation de la base de données

En exposant les `_id`, on rend l’API dépendante de la structure interne de la base. Cela pose plusieurs problèmes :

- Difficulté à changer de base ou de stratégie d’identifiants,
- URLs non parlantes et peu lisibles,
- Manque de flexibilité si on souhaite modifier l’architecture plus tard.

### 4. Complexité accrue de la gestion des autorisations

Si l’URL contient un `_id`, il faut systématiquement vérifier que l’utilisateur a le droit d’y accéder. Cela rend les contrôles d’accès plus complexes et plus sujets à oubli.

Avec des identifiants métiers ou des tokens générés côté application, on peut encapsuler plus facilement des règles de sécurité.


### Recommandations

- Ne pas utiliser directement les `_id` dans les routes d’API publiques.
- Utiliser à la place :
  - des **UUID générés côté application**,
  - des **slugs lisibles et uniques** (ex: `/articles/mon-titre`),
  - ou des **identifiants abstraits ou opaques**.


### Exemple

Mauvaise pratique :

```
GET /api/users/64ae2fddc9a6f43b6a9b7a2e
```

Bonne pratique :

```
GET /api/users/benoit-dupont
GET /api/users/00f5e390-b821-46fc-a3f2-b3f5a19dd9cf
```

---

:::info Tip

Un bon identifiant dans une URL est stable, non prévisible, et découplé de l’implémentation technique interne.

:::