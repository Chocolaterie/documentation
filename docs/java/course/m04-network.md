---
sidebar_position: 6
---

# Cours Java - Programmation Réseau : Sockets, URL et HTTP

## Introduction
La programmation réseau en Java permet de créer des applications communicantes via Internet. Java propose des bibliothèques robustes pour gérer les **sockets**, **URLs** et **requêtes HTTP**.

---

## 1. Sockets en Java
Les **sockets** permettent une communication directe entre un client et un serveur.

### Exemple : Serveur Socket
```java
import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(1234)) {
            System.out.println("Serveur en attente de connexion...");

            Socket clientSocket = serverSocket.accept();
            System.out.println("Client connecté!");

            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

            String message = in.readLine();
            System.out.println("Message reçu : " + message);
            out.println("Bonjour, client!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Exemple : Client Socket
```java
import java.io.*;
import java.net.*;

public class SimpleClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 1234)) {
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            out.println("Bonjour, serveur!");
            String response = in.readLine();
            System.out.println("Réponse du serveur : " + response);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

## 2. Utilisation de l'URL en Java
La classe `URL` permet de manipuler des adresses Web.

### Exemple : Lecture de contenu Web
```java
import java.io.*;
import java.net.*;

public class URLExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("http://example.com");
            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
            String line;
            while ((line = in.readLine()) != null) {
                System.out.println(line);
            }
            in.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

## 3. Requêtes HTTP avec `HttpURLConnection`
Java permet d'envoyer des requêtes HTTP grâce à `HttpURLConnection`.

### Exemple : Requête GET
```java
import java.io.*;
import java.net.*;

public class HTTPRequestExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://jsonplaceholder.typicode.com/posts/1");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            System.out.println("Code de réponse : " + responseCode);

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            System.out.println("Réponse : " + response.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

## Conclusion
- **Sockets** : Pour les communications directes client-serveur.
- **URL** : Pour accéder aux ressources Web.
- **HTTP** : Pour manipuler les requêtes et les réponses Web.

Avec ces outils, vous pouvez construire des applications réseau robustes et communicantes en Java.
