# TP - Pattern Observable (Niveau 2)

## Objectif

Étendre votre implémentation actuelle en ajoutant de la **généricité** dans le pattern Observable. Cela permettra à la méthode `onChange` d'accepter des données spécifiques à chaque type d'observateur, rendant le système plus flexible et réutilisable.

---

## Modifications attendues

1. La méthode `onChange` dans l'interface `Observer` doit être générique pour accepter une donnée de type personnalisable.
2. L'implémentation des classes concrètes `Observer` doit être adaptée pour prendre en charge cette donnée.
3. En gros la méthode onChange aura deux paramètres : 
    - la clé en String
    - la donnée générique

### Schema UML

![Screenshot](img/uml_observer_lv2.png)

---

## Étapes

- Modifier l'interface `Observer`
- Modifier la classe `Observable`
- Adapter les classes qui implémentent `Observer`

## OnChange

- **EmailObserver** : L'email se met à jour si c'est la clé `email` avec une donnée générique **String** qui est appelée

- **AccountObserver** : Le montant se met à jour si c'est la clé `amount` avec une donnée générique **Long** qui est appelée