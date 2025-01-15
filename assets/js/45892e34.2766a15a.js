"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[3644],{7036:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=i(7624),t=i(2172);const r={sidebar_position:2},l="TP Spring Web - Partie 02",a={id:"spring/tp/tp-m04-02",title:"TP Spring Web - Partie 02",description:"Dur\xe9e Estim\xe9e : 1-2h",source:"@site/docs/spring/tp/tp-m04-02.md",sourceDirName:"spring/tp",slug:"/spring/tp/tp-m04-02",permalink:"/documentation/docs/spring/tp/tp-m04-02",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring/tp/tp-m04-02.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TP",permalink:"/documentation/docs/category/tp-1"},next:{title:"TP Spring Web - Partie 03",permalink:"/documentation/docs/spring/tp/tp-m04-03"}},c={},o=[{value:"Enonc\xe9",id:"enonc\xe9",level:2},{value:"CSS",id:"css",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Etapes",id:"etapes",level:2},{value:"La liste des films",id:"la-liste-des-films",level:3},{value:"Le detail du Film",id:"le-detail-du-film",level:3},{value:"Rappel architecture",id:"rappel-architecture",level:2}];function d(e){const s={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"tp-spring-web---partie-02",children:"TP Spring Web - Partie 02"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Dur\xe9e Estim\xe9e : 1-2h"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"enonc\xe9",children:"Enonc\xe9"}),"\n",(0,n.jsx)(s.p,{children:"Fonctionnalit\xe9s :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"La page d'accueil"}),"\n",(0,n.jsx)(s.li,{children:"La page qui affiche la liste des films"}),"\n",(0,n.jsx)(s.li,{children:"La page qui affiche le d\xe9tail d'un film"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Commencez par cr\xe9er les 3 pages vides avec uniquement un titre et un paragraphe 'todo'"}),"\n",(0,n.jsx)(s.h2,{id:"css",children:"CSS"}),"\n",(0,n.jsxs)(s.p,{children:["Le CSS n'est pas obligatoire, vous pouvez utiliser le ",(0,n.jsx)(s.strong,{children:"framework CSS"})," de votre choix"]}),"\n",(0,n.jsxs)(s.admonition,{title:"Note",type:"info",children:[(0,n.jsxs)(s.p,{children:["Pour les ",(0,n.jsx)(s.strong,{children:"images"})," ou les fichiers ",(0,n.jsx)(s.strong,{children:"css/js"})," ils sont plac\xe9s dans le dossier ",(0,n.jsx)(s.strong,{children:"static"})]}),(0,n.jsxs)(s.p,{children:["Le dossier ",(0,n.jsx)(s.strong,{children:"static"})," est la racine des ",(0,n.jsx)(s.strong,{children:"assets/ressources"})]})]}),"\n",(0,n.jsxs)(s.p,{children:["Exemple pour importer ",(0,n.jsx)(s.strong,{children:"mon-fichier.css"})," qui est \xe0 la racine de ",(0,n.jsx)(s.strong,{children:"static"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<link rel="stylesheet" href="mon-fichier.css" />\n'})}),"\n",(0,n.jsx)(s.h2,{id:"diagram",children:"Diagram"}),"\n",(0,n.jsxs)(s.p,{children:["Pour le moment vous allez vous concentrer uniquement sur ",(0,n.jsx)(s.strong,{children:"Movie"})," et si vous \xeates \xe0 l'aise sur ces associations \xe0 part ",(0,n.jsx)(s.strong,{children:"avis"})," et ",(0,n.jsx)(s.strong,{children:"actors"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Diagram",src:i(3304).c+"",width:"1121",height:"703"})}),"\n",(0,n.jsx)(s.h2,{id:"etapes",children:"Etapes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Compl\xe9ter la BO, donc le(s) classe(s)"}),"\n",(0,n.jsxs)(s.li,{children:["Compl\xe9ter l'interface ",(0,n.jsx)(s.strong,{children:"IDAOMovie"})," (pour que le bouchon fonctionne)"]}),"\n",(0,n.jsxs)(s.li,{children:["Cr\xe9er la ",(0,n.jsx)(s.strong,{children:"DAOMock"})," (bouchon) qui impl\xe9mente ",(0,n.jsx)(s.strong,{children:"IDAOMovie"})]}),"\n",(0,n.jsxs)(s.li,{children:["Compl\xe9ter le ",(0,n.jsx)(s.strong,{children:"ArticleManager"})," (il aura les m\xe9thodes pour r\xe9cup\xe9rer les donn\xe9es de la DAO)"]}),"\n",(0,n.jsxs)(s.li,{children:["Compl\xe9ter le ",(0,n.jsx)(s.strong,{children:"Controller"})," avec les routes n\xe9cessaires"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"Important",type:"danger",children:(0,n.jsx)(s.p,{children:"Ne pas oublier de bien utiliser les bonnes annotations pour l'injection"})}),"\n",(0,n.jsx)(s.h3,{id:"la-liste-des-films",children:"La liste des films"}),"\n",(0,n.jsx)(s.p,{children:"Diagram processus :"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Diagram",src:i(4232).c+"",width:"127",height:"412"})}),"\n",(0,n.jsx)(s.p,{children:"Globalement, d'un point de vue technique, voici une vue d'ensemble de ce qui peut se passer entre les couches IHM, BLL et DAO"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Diagram",src:i(1420).c+"",width:"431",height:"481"})}),"\n",(0,n.jsx)(s.h3,{id:"le-detail-du-film",children:"Le detail du Film"}),"\n",(0,n.jsx)(s.p,{children:"Pas de formulaire, uniquement afficher les informations en tant que consultation"}),"\n",(0,n.jsxs)(s.p,{children:["Faire abstraction des ",(0,n.jsx)(s.strong,{children:"Avis"})," (pas pour maintenant)"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Diagram",src:i(8576).c+"",width:"315",height:"562"})}),"\n",(0,n.jsx)(s.h2,{id:"rappel-architecture",children:"Rappel architecture"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Diagram",src:i(6240).c+"",width:"772",height:"742"})})]})}function p(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6240:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/archi_tp_1-ba96fc6a4f017c3976d68cfdb3bda5c1.png"},8576:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/diagram_process_movie_detail-1d568a5008fb20bdc53b276dbd5ff9aa.png"},4232:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/diagram_process_movies_1-8b59745deac6a868b79a7698eb79bc5c.png"},1420:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/exemple_appel_archi_tp_1-4ac881eefb86d5f9d94d0a1be8b5be96.png"},3304:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/full_diagram-95a6d45808df59060d63154572fa40a9.png"},2172:(e,s,i)=>{i.d(s,{I:()=>a,M:()=>l});var n=i(1504);const t={},r=n.createContext(t);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);