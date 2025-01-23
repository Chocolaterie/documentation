"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[9624],{2180:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(7624),s=r(2172);const l={sidebar_position:5},t="TP Android - Partie 05",o={id:"android/tp/compose/tp-5",title:"TP Android - Partie 05",description:"Dur\xe9e Estim\xe9e : Indetermin\xe9e (4h)",source:"@site/docs/android/tp/compose/tp-5.md",sourceDirName:"android/tp/compose",slug:"/android/tp/compose/tp-5",permalink:"/documentation/docs/android/tp/compose/tp-5",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/tp/compose/tp-5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TP Android - Partie 05 (pr\xe9liminaire)",permalink:"/documentation/docs/android/tp/compose/tp-5-pre"},next:{title:"TP Android - Partie 06",permalink:"/documentation/docs/android/tp/compose/tp-6"}},d={},c=[{value:"Enonc\xe9",id:"enonc\xe9",level:2},{value:"Objectif",id:"objectif",level:3},{value:"Back-End (API)",id:"back-end-api",level:3},{value:"Mod\xe8le",id:"mod\xe8le",level:4},{value:"Routes",id:"routes",level:4},{value:"Front-End",id:"front-end",level:3},{value:"Ressources",id:"ressources",level:2},{value:"Liste des articles",id:"liste-des-articles",level:4},{value:"UX de chaque article",id:"ux-de-chaque-article",level:4},{value:"BONUS (Pour allez plus loin)",id:"bonus-pour-allez-plus-loin",level:4},{value:"D\xe9tail de la suppression",id:"d\xe9tail-de-la-suppression",level:4}];function a(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"tp-android---partie-05",children:"TP Android - Partie 05"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Dur\xe9e Estim\xe9e : Indetermin\xe9e (4h)"})}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"enonc\xe9",children:"Enonc\xe9"}),"\n",(0,n.jsxs)(i.admonition,{title:"Localhost du serveur",type:"warning",children:[(0,n.jsxs)(i.p,{children:["L'api sera appel\xe9 sur le ",(0,n.jsx)(i.strong,{children:"localhost"})]}),(0,n.jsxs)(i.p,{children:["Dans tout les cas port ",(0,n.jsx)(i.strong,{children:"3000"})]}),(0,n.jsx)(i.p,{children:"Les ip possibles selon votre cas :"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"127.0.0.1 : Localhost du pc en port fowarding"}),"\n",(0,n.jsx)(i.li,{children:"10.0.2.2 : Sur emulateur avec le security-config"}),"\n",(0,n.jsx)(i.li,{children:"10.0.0.2 : Sur un autre emulateur sans security-config"}),"\n",(0,n.jsx)(i.li,{children:"etc.."}),"\n"]})]}),"\n",(0,n.jsx)(i.h3,{id:"objectif",children:"Objectif"}),"\n",(0,n.jsxs)(i.p,{children:["Adapter le TP actuel pour qu'il fonctionne avec un ",(0,n.jsx)(i.strong,{children:"web service"})," (API)."]}),"\n",(0,n.jsx)(i.h3,{id:"back-end-api",children:"Back-End (API)"}),"\n",(0,n.jsxs)(i.p,{children:["L'API Local est situ\xe9e ici : ",(0,n.jsx)(i.a,{href:"https://github.com/Chocolaterie/ApiArticle",children:"https://github.com/Chocolaterie/ApiArticle"})]}),"\n",(0,n.jsx)(i.p,{children:"Il y'a des instructions dans le Readme pour pouvoir l'utiliser (il faut installer Node JS dans un premier temps)"}),"\n",(0,n.jsx)(i.h4,{id:"mod\xe8le",children:"Mod\xe8le"}),"\n",(0,n.jsxs)(i.p,{children:["Le mod\xe8le \xe0 utiliser sera ",(0,n.jsx)(i.strong,{children:"Article"}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"routes",children:"Routes"}),"\n",(0,n.jsx)(i.p,{children:"Vous devez impl\xe9menter les routes suivantes, class\xe9es par ordre de difficult\xe9/priorit\xe9 :"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["GET: ",(0,n.jsx)(i.strong,{children:"articles"})," : R\xe9cup\xe9rer la liste des articles."]}),"\n",(0,n.jsxs)(i.li,{children:["GET: ",(0,n.jsxs)(i.strong,{children:["article/",":id"]})," : R\xe9cup\xe9rer un article par son ID."]}),"\n",(0,n.jsxs)(i.li,{children:["POST: ",(0,n.jsx)(i.strong,{children:"save-article"})," : G\xe9rer la cr\xe9ation et la mise \xe0 jour des articles."]}),"\n",(0,n.jsxs)(i.li,{children:["DELETE: ",(0,n.jsxs)(i.strong,{children:["article/",":id"]})," : Supprimer un article par son ID."]}),"\n"]}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{children:(0,n.jsx)(i.strong,{children:"A LIRE"})}),(0,n.jsx)(i.p,{children:"L'ID est un String"})]}),"\n",(0,n.jsx)(i.h3,{id:"front-end",children:"Front-End"}),"\n",(0,n.jsx)(i.h2,{id:"ressources",children:"Ressources"}),"\n",(0,n.jsxs)(i.p,{children:["Pour la doc retrofit vous pouvez consulter : ",(0,n.jsx)(i.a,{href:"https://square.github.io/retrofit/",children:"https://square.github.io/retrofit/"})]}),"\n",(0,n.jsx)(i.h4,{id:"liste-des-articles",children:"Liste des articles"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["R\xe9adaptez la page de la ",(0,n.jsx)(i.strong,{children:"liste des articles"})," pour qu'elle r\xe9cup\xe8re les articles via l'API."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"ux-de-chaque-article",children:"UX de chaque article"}),"\n",(0,n.jsx)(i.p,{children:"Pour chaque article, il doit y avoir trois boutons permettant d'effectuer les actions suivantes :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Voir"})," : Afficher une page avec le d\xe9tail de l'article."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"bonus-pour-allez-plus-loin",children:"BONUS (Pour allez plus loin)"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\xc9diter"})," : Ouvrir le formulaire de l'article en mode \xe9dition."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Supprimer"})," : Appeler l'API pour supprimer l'article, puis rafra\xeechir la liste des articles."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"d\xe9tail-de-la-suppression",children:"D\xe9tail de la suppression"}),"\n",(0,n.jsx)(i.p,{children:"Dans l'exemple ci-dessus, l'appel \xe0 l'API pour supprimer un article pourrait ressembler \xe0 cela :"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"fun deleteArticle(articleId: String) {\n    // Logique pour appeler l'API de suppression\n    // Exemple :\n    val response = apiService.deleteArticle(articleId)\n    if (response.isSuccessful) {\n        // Rafra\xeechir la liste des articles\n    }\n}\n"})})]})}function u(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},2172:(e,i,r)=>{r.d(i,{I:()=>o,M:()=>t});var n=r(1504);const s={},l=n.createContext(s);function t(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);