"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[9015],{7908:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(7624),t=i(2172);const r={sidebar_position:2},a="TP Article API (Partie 2)",c={id:"nodejs/tp/tp-article-api-2",title:"TP Article API (Partie 2)",description:"Note: Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les vid\xe9os des modules 1 \xe0 4 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s.",source:"@site/docs/nodejs/tp/tp-article-api-2.md",sourceDirName:"nodejs/tp",slug:"/nodejs/tp/tp-article-api-2",permalink:"/documentation/docs/nodejs/tp/tp-article-api-2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodejs/tp/tp-article-api-2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TP Article API (Partie 1)",permalink:"/documentation/docs/nodejs/tp/tp-article-api-1"},next:{title:"TP Article API (EXTRA Angular)",permalink:"/documentation/docs/nodejs/tp/tp-article-api-angular"}},l={},d=[{value:"Enonce",id:"enonce",level:2},{value:"Liste des Articles",id:"liste-des-articles",level:4},{value:"Un Article",id:"un-article",level:4},{value:"Sauvegarder un Article",id:"sauvegarder-un-article",level:4},{value:"Supprimer un Article",id:"supprimer-un-article",level:4}];function o(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tp-article-api-partie-2",children:"TP Article API (Partie 2)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les vid\xe9os des modules 1 \xe0 4 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Dur\xe9e Estim\xe9e : 1H"})}),"\n",(0,s.jsx)(n.h2,{id:"enonce",children:"Enonce"}),"\n",(0,s.jsx)(n.p,{children:"En partant du TP pr\xe9c\xe9dent, l'objectif sera de remplacer les messages de test par des op\xe9rations sur des donn\xe9es en m\xe9moire."}),"\n",(0,s.jsxs)(n.p,{children:["Puisque nous n'utilisons pas encore ",(0,s.jsx)(n.strong,{children:"MongoDB"}),", nous allons simuler des fausses donn\xe9es."]}),"\n",(0,s.jsx)(n.p,{children:"Exemple d'initialisation de faux articles dans le serveur :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Simulation de donn\xe9es en m\xe9moire\nlet articles = [\n    { id: 1, title: 'Premier article', content: 'Contenu du premier article', author: 'Isaac' },\n    { id: 2, title: 'Deuxi\xe8me article', content: 'Contenu du deuxi\xe8me article', author: 'Sanchez' },\n    { id: 3, title: 'Troisi\xe8me article', content: 'Contenu du troisi\xe8me article', author: 'Toto' }\n];\n"})}),"\n",(0,s.jsx)(n.p,{children:"A vous d'\xe9crire le code n\xe9cessaire pour :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"/articles :"})," Retourner la liste des article en JSON"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["/article/",":id"," :"]})," Retourner un article en JSON"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"/save-article :"})," Ajouter ou mettre \xe0 jour l'article envoyer depuis le POST dans la liste des articles."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["/article/",":id"," :"]})," Supprimer un article de la liste"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"liste-des-articles",children:"Liste des Articles"}),"\n",(0,s.jsxs)(n.p,{children:["Via Postman vous testerez par exemple l'url (en ",(0,s.jsx)(n.strong,{children:"GET"}),") :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://localhost:3000/articles"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:i(6840).c+"",width:"858",height:"542"})}),"\n",(0,s.jsx)(n.h4,{id:"un-article",children:"Un Article"}),"\n",(0,s.jsxs)(n.p,{children:["Via Postman vous testerez par exemple l'url (en ",(0,s.jsx)(n.strong,{children:"GET"}),") :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://localhost:3000/article/1"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:i(5260).c+"",width:"859",height:"287"})}),"\n",(0,s.jsx)(n.h4,{id:"sauvegarder-un-article",children:"Sauvegarder un Article"}),"\n",(0,s.jsxs)(n.p,{children:["Via Postman vous testerez par exemple l'url (en ",(0,s.jsx)(n.strong,{children:"POST"}),") :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://localhost:3000/save-article"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:i(192).c+"",width:"860",height:"407"})}),"\n",(0,s.jsx)("u",{children:"Dans le cas d'une mise \xe0 jour :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:i(3792).c+"",width:"860",height:"407"})}),"\n",(0,s.jsx)(n.admonition,{title:"Attention !",type:"warning",children:(0,s.jsxs)(n.p,{children:["Dans le cadre d'un ",(0,s.jsx)(n.strong,{children:"POST"})," on veut envoyer un article, donc n'oubliez pas de param\xe9trer correctement l'appel comme affich\xe9 ci-dessus"]})}),"\n",(0,s.jsx)(n.h4,{id:"supprimer-un-article",children:"Supprimer un Article"}),"\n",(0,s.jsxs)(n.p,{children:["Via Postman vous testerez par exemple l'url (en ",(0,s.jsx)(n.strong,{children:"DELETE"}),") :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://localhost:3000/article/1"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:i(188).c+"",width:"841",height:"248"})}),"\n",(0,s.jsx)("u",{children:"Si l'id/article n'existe pas"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:i(6280).c+"",width:"839",height:"230"})})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},6840:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/tp-article-api-2-01-ea361d2bf757aa5adf8454318009832c.png"},5260:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/tp-article-api-2-02-034de3d6ee04c9cd7fad3b43ca9c0540.png"},3792:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/tp-article-api-2-03-update-837ae1d44c69aa86f65209711de66b56.png"},192:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/tp-article-api-2-03-2502a25ba9abcd4adcf51dc705a2bb77.png"},6280:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/tp-article-api-2-04-not-found-950b57daa77a9715b0e6b961d7aa7830.png"},188:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/tp-article-api-2-04-57218f208fb89cc6befa7c55ae594763.png"},2172:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>a});var s=i(1504);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);