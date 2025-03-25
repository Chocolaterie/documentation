"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[9356],{6308:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=n(7624),r=n(2172);const a={sidebar_position:1},c="Code Coverage sur Java avec Sonar",s={id:"java/tuto/tuto-01-jacoco-sonar",title:"Code Coverage sur Java avec Sonar",description:"Installer Jacoco",source:"@site/docs/java/tuto/tuto-01-jacoco-sonar.md",sourceDirName:"java/tuto",slug:"/java/tuto/tuto-01-jacoco-sonar",permalink:"/documentation/docs/java/tuto/tuto-01-jacoco-sonar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/tuto/tuto-01-jacoco-sonar.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TP - Meal (Partie 3)",permalink:"/documentation/docs/java/tp/tp-meal-3"},next:{title:"Java EE",permalink:"/documentation/docs/category/java-ee"}},i={},l=[{value:"Installer Jacoco",id:"installer-jacoco",level:2},{value:"Ajouter test jacoco dans test gradle",id:"ajouter-test-jacoco-dans-test-gradle",level:2},{value:"sonar-project.properties",id:"sonar-projectproperties",level:2},{value:"Ex\xe9cuter le code coverage Jacoco en CMD nativement",id:"ex\xe9cuter-le-code-coverage-jacoco-en-cmd-nativement",level:2}];function d(e){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"code-coverage-sur-java-avec-sonar",children:"Code Coverage sur Java avec Sonar"}),"\n",(0,t.jsx)(o.h2,{id:"installer-jacoco",children:"Installer Jacoco"}),"\n",(0,t.jsx)(o.p,{children:"Dans votre fichier build.gradle :"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'plugins {\n    ....\n\tid \'jacoco\'\n\tid "org.sonarqube" version "4.3.1.3277"\n}\n'})}),"\n",(0,t.jsx)(o.p,{children:"Apr\xe9s plugins il faut sp\xe9cifier la version de jacoco :"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'jacoco {\n\ttoolVersion = "0.8.7"\n}\n'})}),"\n",(0,t.jsx)(o.p,{children:"Sp\xe9cifier \xe0 jacoco de g\xe9n\xe9rer le rapport du test coverage en XML et HTML"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"jacocoTestReport {\n\treports {\n\t\txml.required = true\n\t\thtml.outputLocation = layout.buildDirectory.dir('jacocoHtml')\n\t}\n}\n"})}),"\n",(0,t.jsx)(o.p,{children:"Toujours au premier niveau d'indentation (pas d'indentation) il faut remettre les m\xeames param\xe8tres d'authentification Sonar dans le Gradle pour que les t\xe2ches Gradle puissent se connecter au SonarQube"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'sonar {\n\tproperties {\n\t\tproperty "sonar.projectKey", "Demo"\n\t\tproperty "sonar.host.url", "http://localhost:9000"\n\t\tproperty "sonar.token", "sqp_c45c454825fb09a8b904e59e77e182b917cb3d6c"\n\t}\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"ajouter-test-jacoco-dans-test-gradle",children:"Ajouter test jacoco dans test gradle"}),"\n",(0,t.jsx)(o.p,{children:"Dans tasks.named('test'):"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"finalizedBy jacocoTestReport\n"})}),"\n",(0,t.jsx)(o.p,{children:"Donc \xe7a ressemble \xe0 :"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"tasks.named('test') {\n\tuseJUnitPlatform()\n\tfinalizedBy jacocoTestReport\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Cela permet de dire \xe0 ",(0,t.jsx)(o.code,{children:"gradle test"})," d'effectuer les tests suivants :"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Tests unitaires JUnit"}),"\n",(0,t.jsx)(o.li,{children:"Tests jacoco (code coverage)"}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"sonar-projectproperties",children:"sonar-project.properties"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"On dit \xe0 Sonar que le code coverage est fait par jacoco"}),"\n",(0,t.jsx)(o.li,{children:"On scan e ncode coverage uniquement les services"}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"sonar.java.coveragePlugin=jacoco\nsonar.coverage.jacoco.xmlReportPaths=build/reports/jacoco/jacocoTestReport.xml\nsonar.inclusions=**/*Service.java\n"})}),"\n",(0,t.jsx)(o.h2,{id:"ex\xe9cuter-le-code-coverage-jacoco-en-cmd-nativement",children:"Ex\xe9cuter le code coverage Jacoco en CMD nativement"}),"\n",(0,t.jsx)(o.p,{children:"A ex\xe9cuter \xe0 la racine du projet projet en CMD"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"gradlew.bat build jacocoTestReport sonar\n"})}),"\n",(0,t.jsx)(o.admonition,{title:"Note",type:"info",children:(0,t.jsx)(o.p,{children:"Je conseil d'utiliser la ligne de commande native"})})]})}function u(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,o,n)=>{n.d(o,{I:()=>s,M:()=>c});var t=n(1504);const r={},a=t.createContext(r);function c(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);