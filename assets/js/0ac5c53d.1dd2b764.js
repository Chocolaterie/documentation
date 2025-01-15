"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[4864],{5880:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=t(7624),n=t(2172);const o={sidebar_position:1},s="TP Eni Store API (Partie 1)",a={id:"spring-security/tp/v2/tp-1",title:"TP Eni Store API (Partie 1)",description:"Note: Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les modules 1 \xe0 2 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s.",source:"@site/docs/spring-security/tp/v2/tp-1.md",sourceDirName:"spring-security/tp/v2",slug:"/spring-security/tp/v2/tp-1",permalink:"/documentation/docs/spring-security/tp/v2/tp-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring-security/tp/v2/tp-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"(V2)",permalink:"/documentation/docs/category/v2"},next:{title:"TP Eni Store API (Partie 2 - Before)",permalink:"/documentation/docs/spring-security/tp/v2/tp-2-before"}},c={},p=[{value:"Enonce",id:"enonce",level:2},{value:"Arborescence",id:"arborescence",level:2},{value:"Proc\xe9dure d&#39;initialisation du projet",id:"proc\xe9dure-dinitialisation-du-projet",level:3},{value:"Spring Initializr",id:"spring-initializr",level:4},{value:"Import Gradle Project",id:"import-gradle-project",level:4}];function u(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"tp-eni-store-api-partie-1",children:"TP Eni Store API (Partie 1)"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Note:"})," Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les modules 1 \xe0 2 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Dur\xe9e Estim\xe9e : 1H"})}),"\n",(0,r.jsx)(i.h2,{id:"enonce",children:"Enonce"}),"\n",(0,r.jsx)(i.p,{children:"Dans un premier temps, nous allons mettre en place le projet avec au moins une route qui retourne un message de test, ainsi que la configuration n\xe9cessaire pour avoir un mot de passe de d\xe9veloppement par d\xe9faut sur Spring Security"}),"\n",(0,r.jsx)(i.h2,{id:"arborescence",children:"Arborescence"}),"\n",(0,r.jsx)(i.p,{children:"Vous pouvez d\xe9j\xe0 cr\xe9er ces sous-packages pour pr\xe9parer la structure de votre projet."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Diagram",src:t(232).c+"",width:"217",height:"146"})}),"\n",(0,r.jsx)(i.h3,{id:"proc\xe9dure-dinitialisation-du-projet",children:"Proc\xe9dure d'initialisation du projet"}),"\n",(0,r.jsx)(i.p,{children:"Pour creer le projet vous pouvez suivre ces etapes"}),"\n",(0,r.jsx)(i.h4,{id:"spring-initializr",children:"Spring Initializr"}),"\n",(0,r.jsxs)(i.p,{children:["Configurer votre projet via cette URL :  ",(0,r.jsx)(i.a,{href:"https://start.spring.io/",children:"https://start.spring.io/"})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Diagram",src:t(708).c+"",width:"1507",height:"927"})}),"\n",(0,r.jsx)(i.p,{children:"Apr\xe8s le t\xe9l\xe9chargement, d\xe9compressez le projet en dehors de workspace (attention surtout si vous utilisez Eclipse !)"}),"\n",(0,r.jsx)(i.admonition,{title:"N'allez pas trop vite !",type:"warning",children:(0,r.jsx)(i.p,{children:"Ce projet est un projet Gradle, il faut l'importer selon les bonnes pratiques dans Eclipse"})}),"\n",(0,r.jsx)(i.h4,{id:"import-gradle-project",children:"Import Gradle Project"}),"\n",(0,r.jsx)(i.p,{children:"Sur Eclipse : File -> Import -> Existing Gradle Project"}),"\n",(0,r.jsx)(i.p,{children:"Le chemin sera la racine du projet t\xe9l\xe9charg\xe9 d\xe9compress\xe9."})]})}function d(e={}){const{wrapper:i}={...(0,n.M)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},232:(e,i,t)=>{t.d(i,{c:()=>r});const r="data:image/png;base64,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"},708:(e,i,t)=>{t.d(i,{c:()=>r});const r=t.p+"assets/images/tp_1_spring_initializr-df88808ca80a267556eb1540c1eb20ba.png"},2172:(e,i,t)=>{t.d(i,{I:()=>a,M:()=>s});var r=t(1504);const n={},o=r.createContext(n);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);