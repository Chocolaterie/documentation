---
title: Utilisation des Formulaires

sidebar_position: 5
---

# Utilisation des Formulaires avec Symfony 6

Ce guide explique comment créer, afficher et traiter un formulaire simple avec Symfony 6. Il s'adresse aux débutants souhaitant comprendre les bases du composant Form.

## Pré-requis

- Avoir un projet Symfony 6 installé.
- Connaissances de base en PHP et Symfony.

### Étape 1 : Créer une entité

Commencez par créer une entité, par exemple `Contact`.

```php
#[ORM\Entity]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(length: 255)]
    private $name;

    #[ORM\Column(length: 255)]
    private $email;

    #[ORM\Column(type: 'text')]
    private $message;

    // getters et setters
}
```

### Étape 2 : Créer une classe de formulaire

Générer le formulaire le php

```bash
php bin/console make:form
```

Le code sur formulaire généré ressemble à :

```php
class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class)
            ->add('email', EmailType::class)
            ->add('message', TextareaType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
```

On peut enlever dans le builder les champs à ne pas afficher le front:
- Exemple : une date de création ou modification

### Étape 3 : Utiliser le formulaire dans un contrôleur

```php
class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function index(Request $request, EntityManagerInterface $em): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Enregistrer ou traiter les données
            // $em->persist($contact);
            // $em->flush();

            // Message temporaire success
            $this->addFlash('success', 'Message envoyé !');
            
            // Rédiriger
            return $this->redirectToRoute('contact');
        }

        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
```

:::warning Flash Message

A vous de le designer de votre base.html.twig par exemple

```html
{#  Pour chaque type de message temporaire (ex: [success, [messages]] #}
{% for label, messages in app.flashes %}
    {#  Pour chaque message j'affiche une alert. ex: [Virement effectué, Connecté] #}
    {% for message in messages %}
        <div class="uk-alert-{{ label }}" uk-alert>
            <a href class="uk-alert-close" uk-close></a>
            <p>{{ message }}</p>
        </div>
    {% endfor %}
{% endfor %}
```
:::


### Étape 4 : Créer le template Twig

La moins découpé :

```twig
{# Ouvrir le formulaire #}
{{ form_start(form) }}

{# Afficher tout les champs #}
{{ form_widget(form) }}

<button type="submit">Envoyer</button>

{# Fermer le formulaire #}
{{ form_end(form) }}
```

Découpé :

```twig
{# templates/contact/index.html.twig #}
{% extends 'base.html.twig' %}

{% block title %}Contact{% endblock %}

{% block body %}
    <h1>Contactez-nous</h1>

    {{ form_start(form) }}
        {{ form_row(form.name) }}
        {{ form_row(form.email) }}
        {{ form_row(form.message) }}
        <button type="submit">Envoyer</button>
    {{ form_end(form) }}
{% endblock %}
```

## Conclusion

Vous avez maintenant un formulaire fonctionnel avec Symfony 6. Ce guide couvre les bases :
- Création d'entité
- Création de formulaire
- Traitement dans un contrôleur
- Affichage avec Twig
