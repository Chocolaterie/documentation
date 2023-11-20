"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[289],{4554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(5893),r=t(1151);const i={sidebar_position:4},a="Les bases",o={id:"javaee/jpa/intro",title:"Les bases",description:"Globalement pour utiliser JPA dans un projet from scratch vous allez devoir respectez quelques conditions.",source:"@site/docs/javaee/jpa/intro.mdx",sourceDirName:"javaee/jpa",slug:"/javaee/jpa/intro",permalink:"/docs/javaee/jpa/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javaee/jpa/intro.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DAL - JPA",permalink:"/docs/category/dal---jpa"},next:{title:"TP 05 - Implementer JPA",permalink:"/docs/javaee/jpa/tp"}},l={},c=[{value:"Fichier persistence.xml",id:"fichier-persistencexml",level:2},{value:"Importer les librairies",id:"importer-les-librairies",level:2},{value:"Utilisation de JPA",id:"utilisation-de-jpa",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"les-bases",children:"Les bases"}),"\n",(0,s.jsxs)(n.p,{children:["Globalement pour utiliser JPA dans un projet ",(0,s.jsx)(n.strong,{children:"from scratch"})," vous allez devoir respectez quelques conditions."]}),"\n",(0,s.jsx)(n.h2,{id:"fichier-persistencexml",children:"Fichier persistence.xml"}),"\n",(0,s.jsxs)(n.p,{children:["Afin de configurer JPA et le driver necessaire pour se connecter \xe0 la base de donn\xe9es SQL nous devons cr\xe9er un fichier ",(0,s.jsx)(n.strong,{children:"persistence.xml"})," dans les ressources Java"]}),"\n",(0,s.jsx)("u",{children:"Exemple de la location du fichier :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Persistence file location",src:t(1111).Z+"",width:"240",height:"208"})}),"\n",(0,s.jsx)("u",{children:"Exemple du code xml "}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0"  encoding="UTF-8"?>\n<persistence xmlns="http://java.sun.com/xml/ns/persistence"\n\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0"\n\txsi:schemaLocation="http://java.sun.com/xml/ns/persistence\n              http://java.sun.com/xml/ns/persistence/persistence_2_0.xsd">\n\t\n\t<persistence-unit name="myPersistence" transaction-type="RESOURCE_LOCAL">\n\t\n\t\t<class>fr.eni.bo.Article</class>\n\t\t\n\t\t<properties>\n\t\t    <property name="javax.persistence.transactionType" value="RESOURCE_LOCAL"/>\n\t\t\t<property name="javax.persistence.jdbc.driver" value="com.microsoft.sqlserver.jdbc.SQLServerDriver"/>\n\t\t\t<property name="javax.persistence.jdbc.url" value="jdbc:sqlserver://localhost:1433;databaseName=DB_Demo;trustServerCertificate=true"/>\n\t\t\t<property name="javax.persistence.jdbc.user" value="sa"/>\n\t\t\t<property name="javax.persistence.jdbc.password" value="Pa$$w0rd"/>\n\t\t\t\n\t\t\t<property name="hibernate.show_sql" value="true"/>\n\t\t\t<property name="hibernate.format_sql" value="true"/>\n\t\t\t<property name="hibernate.hbm2ddl.auto" value="create"/>\n\t\t\t\n\t\t</properties>\n\t</persistence-unit>\n\t\n</persistence>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"importer-les-librairies",children:"Importer les librairies"}),"\n",(0,s.jsxs)(n.p,{children:["Vous allez devoir importer les ",(0,s.jsx)(n.strong,{children:"lib Java"})," n\xe9cessaires pour utiliser JPA et son ",(0,s.jsx)(n.strong,{children:"implementation Hibernate"})]}),"\n",(0,s.jsxs)(n.p,{children:["Sur Java 21 il faut aussi importer la lib ",(0,s.jsx)(n.strong,{children:"jaxb-api-2.1.jar"})," pour la lecture du fichier XML ",(0,s.jsx)(n.strong,{children:"persistences.xml"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Persistence file location",src:t(5220).Z+"",width:"351",height:"594"})}),"\n",(0,s.jsx)(n.h2,{id:"utilisation-de-jpa",children:"Utilisation de JPA"}),"\n",(0,s.jsx)(n.p,{children:"Afin d'utiliser JPA nous allons g\xe9n\xe9ralement avoir besoin de :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["R\xe9cup\xe9rer l'",(0,s.jsx)(n.strong,{children:"EntityManager"})]}),"\n",(0,s.jsx)(n.li,{children:"Faire du traitement"}),"\n",(0,s.jsxs)(n.li,{children:["Fermer la connexion avec l'",(0,s.jsx)(n.strong,{children:"EntityManager"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Evidement selon le contexte dans ",(0,s.jsx)(n.strong,{children:"le traitement"})," on va avoir besoin d'adapter le code selon le besoin."]}),"\n",(0,s.jsxs)(n.p,{children:["Par exemple dans le cadre d'un insert on peut ",(0,s.jsx)(n.strong,{children:"instancier un objet vide"})," et utiliser ",(0,s.jsx)(n.strong,{children:"les transactions"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Persistence file location",src:t(1251).Z+"",width:"557",height:"702"})}),"\n",(0,s.jsx)(n.p,{children:"Dans le code ca peut revenir \xe0 faire cela :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistence");\nEntityManager em = emf.createEntityManager();\n\n// Creer un article\nArticle article = new Article();\narticle.title = "Le cours va trop vite aled";\n\n// Start transaction\nem.getTransaction().begin();\n\n// Je persiste (envoyer) l\'article en base\nem.persist(article);\n\n// Commit la transaction\nem.getTransaction().commit();\n\n// Fermer les instances/connexions JPA\nemf.close();\nem.close();\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Rappel important",type:"danger",children:(0,s.jsxs)(n.p,{children:["Attention vous devez avoir un ",(0,s.jsx)(n.strong,{children:"constructeur vide"})," d'existant dans vos classes lorsque vous utilisez la s\xe9rialisation"]})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1251:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ex_sequence_insert_article-76c5f89629c171baa5ffa3a9741453f2.png"},5220:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/lib-jar-2ae375c7d5a931884d188f15b1ab693e.png"},1111:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);