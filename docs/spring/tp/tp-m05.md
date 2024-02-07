---
sidebar_position: 3
---

# TP Spring DAO

## Etape 1

- Installer dans le gradle Spring Data et le connecteur mysql
- Creer ta base de données film dans le Workbench
- Les parametres de connexion et spring data dans le application.properties
- Mettre les annotations dans les entités avec les relations qui vont avec

Finalités : le serveur démarre sans crash et les tables et relations sont bien répliqué en Base de données

## Etape 2

- Insérer des fausses données en bases :
    - Soit tu utilise fichiers sql fournis (du moins se baser sur cela)
    - Tu prend du temps pour générer sois-même les données via des outils (comme https://www.mockaroo.com)

- Créer tes couches
    - Créer les interfaces DAO
    - Les implementations JPA à partir de ton interface DAO
    - Mettre un profile dans l'injection (exemple: jpa)
    - Implementer la couche service non mocké (service qui utilise vos interfaces DAO)

## Etape 3

- Utiliser et faire fonctionner tes controlleurs et vues
- Dans tes controlleurs tu appel uniquement ton Metier/BLL donc le Service
