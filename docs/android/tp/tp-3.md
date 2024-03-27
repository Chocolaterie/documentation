---
sidebar_position: 3
---

# TP Android - Partie 03

> **Durée Estimée : 30min**

## Enoncé

Dans les 3 pages, afficher une boîte de dialogue lorsque vous **soumettez** formulaire.

## Page login

Lors de la soumission du formulaire, afficher dans une **dialog** : "Vous êtes connecté(e) avec succès" 

## Page inscription

Lors de la soumission du formulaire, afficher dans une **dialog** un résumé des informations saisies


## Page récupération mot de passe

Lors de la soumission du formulaire, afficher dans une **dialog** : "Un mail de récupération a été envoyé à email_saisi"

## Migration en DataBinding (Extra)

### Mise en place
- Activer le DataBinding dans le projet
- Convertir les 3 pages en DataBinding 
- Les boutons ne sont plus accessibles via **findViewById** mais directement via la vue DataBinding chargée


### ViewModels
Créer les classes ViewModel pour les écrans correspondants :
- LoginViewModel
- RegisterViewModel
- ResetPasswordViewModel

Ces 3 classes doivent être associées dans chacunes des vues respectives (<data><variable>)

:::warning Attention !!!

N'oubliez pas d'instancier ces ViewModel dans les Activity (car elles sont Null par défaut)

:::

### Model

Créer une classe **Person** ou **User** qui va contenir les attributs nécessaires :
- email
- pseudo
- password
- zipCode
- city
- phone

### Inscription

La confirmation mot de passe ne fait pas partie du model **Person**, donc pour l'associer dans le EditText il va falloir
le mettre dans le ViewModel **RegisterViewModel**
Donc dans **RegisterViewModel** :
- person: Person
- passwordConfirm : String