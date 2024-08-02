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