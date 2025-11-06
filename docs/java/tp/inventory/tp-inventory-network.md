---
sidebar_position: 5
---

# TP Java - Gestion d'un Inventaire en Programmation Réseau

## Objectif
Créer une application Java utilisant la **programmation réseau** pour gérer un inventaire à distance en utilisant **Sockets**, **URL** et **requêtes HTTP**.

**Durée estimée : 1 à 2 heures**

---

## Fonctionnalités à Implémenter

1. **Serveur** : Gérer un inventaire côté serveur.
2. **Client** : Envoyer des requêtes pour ajouter, supprimer ou afficher des objets.

---

## Étape 1 : Création du Serveur

### Instructions
- Créez une classe `InventoryServer`.
- Utilisez un `ServerSocket` pour attendre des connexions sur un port spécifique.
- Lorsqu'un client se connecte :
  - Lisez les commandes envoyées.
  - Gérer les commandes suivantes :
    - `ADD nom quantité` : Ajouter un objet.
    - `REMOVE nom` : Supprimer un objet.
    - `LIST` : Retourner tous les objets.
  - Retournez une réponse appropriée au client.

**Conseil :** Utilisez `BufferedReader` et `PrintWriter` pour la communication.

---

## Étape 2 : Création du Client

### Instructions
- Créez une classe `InventoryClient`.
- Connectez-vous au serveur à l'aide d'un `Socket`.
- Envoyez des commandes au serveur et affichez les réponses.
- Implémentez un **menu simple** en ligne de commande :
  - Ajouter un objet (`ADD`)
  - Supprimer un objet (`REMOVE`)
  - Lister l'inventaire (`LIST`)

**Conseil :** Utilisez un `Scanner` pour lire l'entrée utilisateur.

---

## Étape 3 : Version Avancée avec Requêtes HTTP

### Instructions
- Utilisez `HttpURLConnection` pour envoyer des requêtes HTTP au serveur.
- Gérez les méthodes suivantes :
  - `GET /inventory` : Retourner la liste des objets.
  - `POST /inventory?name=nom&quantity=qte` : Ajouter un objet.
  - `DELETE /inventory?name=nom` : Supprimer un objet.

**Conseil :** Utilisez `URL` et `HttpURLConnection` pour établir la connexion.

---

## Étape 4 : Tests et Résultats Attendus

### Serveur
- Le serveur démarre et affiche les connexions entrantes.

### Client
- Envoi de commandes `ADD`, `REMOVE`, `LIST`.
- Affichage correct des messages de réponse.
