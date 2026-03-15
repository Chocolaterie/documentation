---
sidebar_position: 1
---

# TP Article API - BDD Domain

**Durée Estimée : 1.5j**

## Énoncé

Le but de ce TP est de réaliser un projet multi sous-projets :

- app
- core-domain
- adapter-jpa
- adapter-mongo

### BO

Un article comporte au minimum :

- **id** : \`String\` (trouver une manière de le générer en UUID)
- **title** : \`String\`
- **description** : \`String\`

### Détails des données à retourner via les URLs

Dans le controller, le **Service** retournera ces informations.

Structure du retour : **Code | Message | Data**

#### getAll

- **2002** | **La liste des articles a été récupérée avec succès** | La liste des articles

#### getId

- Si l'article est trouvé :  
  **2002** | **L'article a été récupéré avec succès** | L'article trouvé

- Si l'article n'est pas trouvé :  
  **7001** | **L'article n'existe pas** | null

#### delete

- Si l'article est supprimé :  
  **2002** | **L'article a été supprimé avec succès** | true

- Si l'article n'existe pas :  
  **7001** | **L'article n'existe pas** | false

#### save

- Si l'id n'existe pas :

  - Création réussie →  
    **2002** | **Article créé avec succès** | L'article créé

  - Titre existant →  
    **7006** | **Le titre est déjà utilisé** | null

- Si l'id existe déjà :

  - Mise à jour réussie →  
    **2003** | **Article modifié avec succès** | L'article modifié

  - Titre existant →  
    **7006** | **Le titre est déjà utilisé** | null