---
title: Customiser un formulaire

sidebar_position: 3
---

# Customiser formulaire

## Étape 1 : Fichier template

Il nous faut un fichier pour surcharger la manière de générer les formulaires partout.

Exemple :
- `/templates/form/uikit_form_div_layout.html.twig`

:::info Important

Se baser sur le fichier natif (`form_div_layout.html.twig`) :

- https://github.com/symfony/symfony/blob/6.4/src/Symfony/Bridge/Twig/Resources/views/Form/form_div_layout.html.twig

Globalement, on remplace ou ajoute des classes CSS.

:::

## Etape 2 : config/packages/twig.yaml

Ajouter le fichier template du formulaire customisé dans le fichier :

- `config/packages/twig.yaml`

Exemple :

```yaml
twig:
    ...
    form_themes: ['form/uikit_form_div_layout.html.twig']
```

:::info Important

Le chemin commence à partir du dossier `templates`, puisque c'est un fichier Twig.

:::