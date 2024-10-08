---
sidebar_position: 2
---

# Logger (winston)

Pour ajouter un systeme log plus avancé que console.log nous pouvons utiliser winston.

## Configuration

Exemple de configuration du logger

```js
// -- configuer le logger
const logger = winston.createLogger({
    // Log only if level is less than (meaning more severe) or equal to this
    level: "info",
    // Use timestamp and printf to create a standard log format
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
      )
    ),
    // Log to the console and a file
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "logs/app.log" }),
    ],
  });

```

- **format** : Permet de définir comment le message sera **formaté** lorsqu'on le loguera.
- **transports** : Permet de définir comment le message sera **traité**. En gros, que faire lorsqu'on appelle `log`. Dans notre cas, nous décidons de l'afficher dans la console et de l'ajouter dans le fichier "logs/app.log", d'où deux transports.


## Utilisation

```js
logger.info(`Mon message loggé`);
```