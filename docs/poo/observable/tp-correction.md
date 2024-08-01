---
sidebar_position: 2
---

# TP - Pattern Observable (Correction)

Dans cette correction les **Observer** seront des fonctions lambda.

### Observable

```dart
class Observable<T> {
  T value;
  final List<void Function(T)> observers = [];

  Observable(this.value);

  void setValue(T newValue) {
    value = newValue;
    notifyObservers();
  }

  void addObserver(void Function(T) observer) {
    observers.add(observer);
  }

  void removeObserver(void Function(T) observer) {
    observers.remove(observer);
  }

  void notifyObservers() {
    for (var observer in observers) {
      observer(value);
    }
  }
}
```

### Main

```dart
void main() {
  // Créer un observable avec une valeur initiale
  var observable = Observable<int>(0);

  // Ajouter un observateur
  observable.addObserver((value) {
    print('Observateur 1: La valeur a changé: $value');
  });

  // Ajouter un autre observateur
  observable.addObserver((value) {
    print('Observateur 2: La valeur a changé: $value');
  });

  // Changer la valeur pour voir les observateurs en action
  observable.setValue(1);
  observable.setValue(2);

  // Retirer un observateur
  observable.removeObserver((value) {
    print('Observateur 2: La valeur a changé: $value');
  });

  // Changer la valeur pour voir l'effet après avoir retiré un observateur
  observable.setValue(3);
}

```