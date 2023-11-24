"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[5960],{3904:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(5893),t=i(1151);const s={sidebar_position:8},a="TP Bonus",o={id:"javaee/tp-bonus",title:"TP Bonus",description:"Suite TP Suivis Repas",source:"@site/docs/javaee/tp-bonus.md",sourceDirName:"javaee",slug:"/javaee/tp-bonus",permalink:"/documentation/docs/javaee/tp-bonus",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javaee/tp-bonus.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Synthese",permalink:"/documentation/docs/javaee/ws/synthese"}},u={},d=[{value:"Enonce",id:"enonce",level:2},{value:"Feature : Modification d&#39;un Repas",id:"feature--modification-dun-repas",level:3},{value:"Feature : Suppression d&#39;un Repas",id:"feature--suppression-dun-repas",level:3},{value:"Feature : Connexion (un plus avanc\xe9e)",id:"feature--connexion-un-plus-avanc\xe9e",level:3},{value:"Feature : Inscription",id:"feature--inscription",level:3},{value:"Feature : Modifier profil utilisateur",id:"feature--modifier-profil-utilisateur",level:3}];function l(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tp-bonus",children:"TP Bonus"}),"\n",(0,r.jsx)(n.p,{children:"Suite TP Suivis Repas"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Avant de d\xe9marrer ce TP, il convient d\u2019avoir suivi les vid\xe9os des modules 1 \xe0 10 et d\u2019avoir r\xe9alis\xe9 les TP propos\xe9s."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dur\xe9e Estim\xe9e : 4H"})}),"\n",(0,r.jsx)(n.h2,{id:"enonce",children:"Enonce"}),"\n",(0,r.jsxs)(n.p,{children:["Vous allez compl\xe9ter le TP au maximum pour avoir plus de ",(0,r.jsx)(n.strong,{children:"features"})]}),"\n",(0,r.jsx)(n.p,{children:"Les features :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Modification d'un repas"}),"\n",(0,r.jsx)(n.li,{children:"Supprimer un repas"}),"\n",(0,r.jsx)(n.li,{children:"Vrai connexion (avec la base de donn\xe9es)"}),"\n",(0,r.jsx)(n.li,{children:"Inscription"}),"\n",(0,r.jsx)(n.li,{children:"Modifier profil utilisateur"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"feature--modification-dun-repas",children:"Feature : Modification d'un Repas"}),"\n",(0,r.jsx)(n.p,{children:"Ajouter un lien/bouton dans la liste des repas pour rediriger vers la page de modification d'un Repas."}),"\n",(0,r.jsx)(n.p,{children:"En soit cette page n'est ni plus ni moins que la page qui permet d'ajouter un Repas mais avec l'id\ndans un input cach\xe9 et l'id dans l'url pour r\xe9cup\xe9rer le repas depuis la BDD."}),"\n",(0,r.jsxs)(n.p,{children:["Il y'aura donc une condition pour savoir si on est en mode ",(0,r.jsx)(n.strong,{children:"Ajout"})," ou ",(0,r.jsx)(n.strong,{children:"Modification"})]}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"info",children:(0,r.jsxs)(n.p,{children:["En gros un objet avec un ",(0,r.jsx)(n.strong,{children:"id non null"})," persist\xe9 effectue un ",(0,r.jsx)(n.strong,{children:"update"})," au lieu d'un ",(0,r.jsx)(n.strong,{children:"insert"})," via JPA."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:i(4692).Z+"",width:"491",height:"581"})}),"\n",(0,r.jsx)(n.h3,{id:"feature--suppression-dun-repas",children:"Feature : Suppression d'un Repas"}),"\n",(0,r.jsxs)(n.p,{children:["En JPA, il faut envoyer l'objet dans la m\xe9thode ",(0,r.jsx)(n.strong,{children:"remove"})," de l'",(0,r.jsx)(n.strong,{children:"EntityMananger"}),"\nDonc r\xe9cup\xe9rer l'objet Repas via l'id avant."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:i(4933).Z+"",width:"122",height:"362"})}),"\n",(0,r.jsx)(n.h3,{id:"feature--connexion-un-plus-avanc\xe9e",children:"Feature : Connexion (un plus avanc\xe9e)"}),"\n",(0,r.jsx)(n.p,{children:"Il faut r\xe9cup\xe9rer une utilisateur via une requ\xeate avec plusieurs conditions."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// les attributs a tester\nString monAttribut = "Test";\nString monAutreAttribut = "Un autre Test";\n\n// la construction de la requ\xeate\nCriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();\nCriteriaQuery<Objet> criteriaQuery = criteriaBuilder.createQuery(Objet.class);\nRoot<Objet> root = criteriaQuery.from(Objet.class);\n\nPredicate condition = criteriaBuilder.and(\n    criteriaBuilder.equal(root.get("monAttribut"), nomRecherche),\n    criteriaBuilder.equal(root.get("monAutreAttribut"), monAutreAttribut)\n);\n\ncriteriaQuery.select(root).where(condition);\n\nTypedQuery<Objet> query = entityManager.createQuery(criteriaQuery);\n// r\xe9cup\xe9rer le result\nObjet resultat = query.getSingleResult();\n'})}),"\n",(0,r.jsxs)(n.admonition,{title:"Note",type:"info",children:[(0,r.jsxs)(n.p,{children:["Bien s\xfbr vous devez remplacer le type ",(0,r.jsx)(n.strong,{children:"Objet"})," par votre objet (exemple : ",(0,r.jsx)(n.strong,{children:"User"}),")"]}),(0,r.jsx)(n.p,{children:"Et adapter le code selon votre besoin"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:i(4706).Z+"",width:"511",height:"402"})}),"\n",(0,r.jsx)(n.h3,{id:"feature--inscription",children:"Feature : Inscription"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:i(3558).Z+"",width:"392",height:"572"})}),"\n",(0,r.jsx)(n.h3,{id:"feature--modifier-profil-utilisateur",children:"Feature : Modifier profil utilisateur"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:i(5904).Z+"",width:"452",height:"682"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4933:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/schema_delete_meal-56f73deda749eabaff656c24a1f63fbc.png"},5904:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/schema_edit_user-ba3542cff0abb029a70a50748d0939a9.png"},4706:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/schema_login-8a6df36e59139b95ddd2b54e0917541f.png"},3558:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/schema_register-a81a72691b17dce2d77ffd2938f8e3a3.png"},4692:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/schema_update_meal-83db9dcd68394db1008f7ac642354ad7.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var r=i(7294);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);