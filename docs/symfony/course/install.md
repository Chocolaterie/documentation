---
title: Installer PHP & Symfony

sidebar_position: 1
---

## Étape 2 : Installer PHP 8.2 (ou 8.3)

Symfony 6+ supporte PHP >= 8.1, mais mieux vaut prendre une version récente.

### Installer avec Scoop

Scoop est un gestionnaire de package windows

Donner les permissions : Ouvrez PowerShell en mode administrateur et exécutez :

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Installer Scoop : Fermez le PowerShell est ouvrez le en mode nromal (pas administrateur)

```bash
irm get.scoop.sh | iex
```

#### Installer PHP

```bash
scoop install php
```

### Fichier php.ini

Pour la suite on va avoir besoin du fichier php.ini pour installer Composer par exemple.
Le dossier php8 installer par scoop devrait se situer ici :

- C:\Users\mon_user\scoop\apps\php\8.xxx

Par défaut le fichier php.ini n'existe pas il est sous la forme :
- php.ini-development
- php.ini-production

Dans notre cas on est en developpement donc on doit copier coller php.ini-development 
et le renommer en php

## Étape 3 : Installer Composer

- Téléchargez https://getcomposer.org/Composer-Setup.exe
- Laissez le détecter php.exe
- Vérifiez : 
```bash
composer -V
```

## Étape 4 : Installer Symfony CLI

Via Scoop :

```bash
scoop install symfony-cli
```

## Étape 5 : Créer un projet Symfony 6.4

```bash
symfony new nom_du_projet --version=6.4 --webapp
cd nom_du_projet
symfony server:start
```