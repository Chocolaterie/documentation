---
sidebar_position: 5
---

# TP Twitter - Partie 04 (MVVM)

> **Durée Estimée : 30min**

## Enoncé

Migrer la **home page** en pattern **MVVM**

- **Créer** un **ViewModel** (MessageViewModel)
- Dans ce **ViewModel** déporter :
  - La **liste des tweets**
  - Toute la **logique** qui **appelle l'API**, met à jour les **tweets**, affiche un **écran de chargement**, etc.
  - **Notifier les changements**

- Ta page devient **Stateless** car plus de **setState()**
- Il n'y a plus de **setState** car **écouter** le **ViewModel**
- Donc la **ListView** sera un **Observer (consumer)**
