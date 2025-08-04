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

### Étape 3 : Utiliser le formulaire dans un contrôleur

```php
class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function index(Request $request): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Enregistrer ou traiter les données
            // $entityManager = $this->getDoctrine()->getManager();
            // $entityManager->persist($contact);
            // $entityManager->flush();

            $this->addFlash('success', 'Message envoyé !');
            return $this->redirectToRoute('contact');
        }

        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
```

### Étape 4 : Créer le template Twig

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
