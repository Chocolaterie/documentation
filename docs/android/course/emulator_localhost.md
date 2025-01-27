---
sidebar_position: 10
---

# Emulateur localhost


# Le fichier de configuration

Il faut placer un fichier `network_security_config.xml` dans le `res/xml` de votre projet Android.

Contenu du fichier :

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <domain-config cleartextTrafficPermitted="true">
    <domain includeSubdomains="true">10.0.2.2</domain>
  </domain-config>
</network-security-config>
```

# Dans le code

Lorsqu'il faudra appeler le **localhost** ou **127.0.0.1** depuis le code Kotlin Android. Il faut remplacer l'ip (donc localhost ou 127.0.0.1) par l'ip local du émulateur donc : **10.0.2.2**

Exemple :

```kt
// avant 
val BASE_URL = "http://localhost:3000/monapi";

// dans la version émulateur 
val BASE_URL = "http://10.0.2.2:3000/monapi";
```