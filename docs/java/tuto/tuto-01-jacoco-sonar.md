---
sidebar_position: 1
---

# Code Coverage sur Java avec Sonar

## Installer Jacoco

Dans votre fichier build.gradle :

```
plugins {
    ....
	id 'jacoco'
	id "org.sonarqube" version "4.3.1.3277"
}
```

Aprés plugins il faut spécifier la version de jacoco :

```
jacoco {
	toolVersion = "0.8.7"
}
```

Spécifier à jacoco de générer le rapport du test coverage en XML et HTML

```
jacocoTestReport {
	reports {
		xml.required = true
		html.outputLocation = layout.buildDirectory.dir('jacocoHtml')
	}
}
```

Toujours au premier niveau d'indentation (pas d'indentation) il faut remettre les mêmes paramètres d'authentification Sonar dans le Gradle pour que les tâches Gradle puissent se connecter au SonarQube

```
sonar {
	properties {
		property "sonar.projectKey", "Demo"
		property "sonar.host.url", "http://localhost:9000"
		property "sonar.token", "sqp_c45c454825fb09a8b904e59e77e182b917cb3d6c"
	}
}
```


## Ajouter test jacoco dans test gradle

Dans tasks.named('test'):

```
finalizedBy jacocoTestReport
```

Donc ça ressemble à :

```
tasks.named('test') {
	useJUnitPlatform()
	finalizedBy jacocoTestReport
}
```

Cela permet de dire à `gradle test` d'effectuer les tests suivants :
- Tests unitaires JUnit
- Tests jacoco (code coverage)
## sonar-project.properties

- On dit à Sonar que le code coverage est fait par jacoco
- On scan e ncode coverage uniquement les services

```
sonar.java.coveragePlugin=jacoco
sonar.coverage.jacoco.xmlReportPaths=build/reports/jacoco/jacocoTestReport.xml
sonar.inclusions=**/*Service.java
```

## Exécuter le code coverage Jacoco en CMD nativement

A exécuter à la racine du projet projet en CMD 

```
gradlew.bat build jacocoTestReport sonar
```

:::info Note

Je conseil d'utiliser la ligne de commande native

:::