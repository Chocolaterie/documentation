---
title: Tips Doctrine

sidebar_position: 7
---

# Tips Doctrine

Une page pour donner quelques rappels / tips / workflows basiques pour débuter avec Doctrine sur Symfony.

## Migration / BDD cassée

Lorsque vous récupérez un projet ou qu'il y a des problèmes avec votre base de données, et que vous rencontrez des erreurs en essayant de créer ou d’exécuter une migration, voici ce que vous pouvez faire localement :

- Recréer la base de données à vide (la supprimer, puis la recréer)
- Exécuter une migration avec la commande Symfony :
  ```bash
  symfony console doctrine:migrations:migrate
  ```

Ensuite, si vous devez créer des migrations, faites-le après avoir corrigé la base.

## Make Migration

Si la commande `make:migration` ne fonctionne pas, suivez les étapes indiquées ci-dessus dans la section :
[Voir la section Migration / BDD cassée](#migration--bdd-cassee)

Parfois, il faut supprimer vos fichiers de migration récemment créés s'ils sont corrompus. Cependant, il est important d'avoir une bonne connaissance de Doctrine pour déterminer si un fichier de migration est réellement corrompu.