"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[8216],{2452:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=s(7624),t=s(2172);const a={sidebar_position:5},i="TP - Pattern Observable (Niveau 1)",l={id:"java/tp/tp-observable-lv1",title:"TP - Pattern Observable (Niveau 1)",description:"Objectif",source:"@site/docs/java/tp/tp-observable-lv1.md",sourceDirName:"java/tp",slug:"/java/tp/tp-observable-lv1",permalink:"/documentation/docs/java/tp/tp-observable-lv1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/tp/tp-observable-lv1.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TP Java - Gestion d'un Inventaire en Programmation R\xe9seau",permalink:"/documentation/docs/java/tp/tp-inventory-network"},next:{title:"TP - Pattern Observable (Niveau 2)",permalink:"/documentation/docs/java/tp/tp-observable-lv2"}},o={},c=[{value:"Objectif",id:"objectif",level:2},{value:"D\xe9tails",id:"d\xe9tails",level:3},{value:"\xc9tapes",id:"\xe9tapes",level:3},{value:"Rappel Pattern",id:"rappel-pattern",level:3},{value:"Schema UML",id:"schema-uml",level:3},{value:"Main",id:"main",level:3},{value:"Exemple de R\xe9sultat Attendu",id:"exemple-de-r\xe9sultat-attendu",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tp---pattern-observable-niveau-1",children:"TP - Pattern Observable (Niveau 1)"}),"\n",(0,r.jsx)(n.h2,{id:"objectif",children:"Objectif"}),"\n",(0,r.jsxs)(n.p,{children:["Cr\xe9er une classe ",(0,r.jsx)(n.strong,{children:"Observable"})," qui pourra contenir des ",(0,r.jsx)(n.strong,{children:"Observers"})," et notifier ces derniers en cas de changement."]}),"\n",(0,r.jsx)(n.h3,{id:"d\xe9tails",children:"D\xe9tails"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La classe ",(0,r.jsx)(n.strong,{children:"Observable"})," doit contenir une liste d'",(0,r.jsx)(n.strong,{children:"Observers"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Les ",(0,r.jsx)(n.strong,{children:"Observers"})," seront d\xe9finis \xe0 l'aide d'une ",(0,r.jsx)(n.strong,{children:"interface"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Voici les fonctionnalit\xe9s attendues :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ajouter ou supprimer des ",(0,r.jsx)(n.strong,{children:"Observers"})," dans un ",(0,r.jsx)(n.strong,{children:"Observable"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Une m\xe9thode ",(0,r.jsx)(n.strong,{children:"onChange"})," dans les ",(0,r.jsx)(n.strong,{children:"Observers"})," sera utilis\xe9e pour notifier les changements."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"\xe9tapes",children:"\xc9tapes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Cr\xe9ez une ",(0,r.jsx)(n.strong,{children:"interface"})," ",(0,r.jsx)(n.code,{children:"Observer"})," avec une m\xe9thode ",(0,r.jsx)(n.code,{children:"onChange"})," qui sera appel\xe9e lors d'une notification."]}),"\n",(0,r.jsxs)(n.li,{children:["Cr\xe9ez une ",(0,r.jsx)(n.strong,{children:"classe"})," ",(0,r.jsx)(n.code,{children:"Observable"})," qui permet d'ajouter, de supprimer et de notifier des ",(0,r.jsx)(n.code,{children:"Observers"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Cr\xe9ez et compl\xe9tez les autres classes pr\xe9sentes dans le fichier ",(0,r.jsx)(n.code,{children:"App.js"})," (le main)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"rappel-pattern",children:"Rappel Pattern"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Screenshot",src:s(9284).c+"",width:"381",height:"231"})}),"\n",(0,r.jsx)(n.h3,{id:"schema-uml",children:"Schema UML"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Screenshot",src:s(1712).c+"",width:"466",height:"550"})}),"\n",(0,r.jsx)(n.h3,{id:"main",children:"Main"}),"\n",(0,r.jsx)(n.p,{children:"Voici le main d\xe9j\xe0 d\xe9velopp\xe9, d\xe9brouillez-vous pour qu'il fonctionne et que les prints s'affichent bien dans la console."}),"\n",(0,r.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,r.jsx)(n.p,{children:"VOUS NE DEVEZ PAS TOUCHER AU CONTENU DU CODE DANS LE MAIN"})}),"\n",(0,r.jsxs)(n.p,{children:["Le package sera nomm\xe9 : ",(0,r.jsx)(n.code,{children:"fr.eni.tp"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package fr.eni.tp;\n\npublic class App {\n\n\tpublic static void main(String[] args) {\n\t\t // Cr\xe9ation de l\'observable\n        Observable observable = new Observable();\n\n        // Cr\xe9ation des observateurs\n        Observer observer1 = new EmailObserver();\n        Observer observer2 = new ContratObserver("148451841517");\n        Observer observer3 = new AccountObserver();\n\n        // Ajout des observateurs\n        observable.addObserver(observer1);\n        observable.addObserver(observer2);\n        observable.addObserver(observer3);\n\n        // Modification le nombre\n        System.out.println("Premier appel des observers dans l\'observable...");\n        observable.notifyObservers();\n        \n        // Suppression d\'un observateur\n        System.out.println("\\nSuppression d\'un observateur...");\n        observable.removeObserver(observer2);\n        observable.notifyObservers();\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"exemple-de-r\xe9sultat-attendu",children:"Exemple de R\xe9sultat Attendu"}),"\n",(0,r.jsx)(n.p,{children:"Voici ce qui doit \xeatre affich\xe9 dans la console:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Premier appel des observers dans l'observable...\nL'email change ! Mais pour le moment on ne connait pas l'email\nLe compte num\xe9ro : 148451841517 a chang\xe9 !\nL'\xe9tat du compte a chang\xe9 ! Mais aucune info pour le moment\n\nSuppression d'un observateur...\nL'email change ! Mais pour le moment on ne connait pas l'email\nL'\xe9tat du compte a chang\xe9 ! Mais aucune info pour le moment\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9284:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/diagram_obs-5770e8a9fae6c9526d0367f6392f7939.png"},1712:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/uml_observer_lv1-187dac8e55857277a855d9c59ed3c8d5.png"},2172:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>i});var r=s(1504);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);