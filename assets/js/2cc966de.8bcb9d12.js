"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[7926],{2506:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var s=r(5893),t=r(1151);const i={sidebar_position:4},o="TP Spring REST Et Angular",a={id:"spring/tp/tp-bonus",title:"TP Spring REST Et Angular",description:"Etape 1 (Web Service)",source:"@site/docs/spring/tp/tp-bonus.md",sourceDirName:"spring/tp",slug:"/spring/tp/tp-bonus",permalink:"/documentation/docs/spring/tp/tp-bonus",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring/tp/tp-bonus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"TP Spring DAO",permalink:"/documentation/docs/spring/tp/tp-m05"}},l={},u=[{value:"Etape 1 (Web Service)",id:"etape-1-web-service",level:2},{value:"Etape 2 (Angular)",id:"etape-2-angular",level:2},{value:"Tips",id:"tips",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tp-spring-rest-et-angular",children:"TP Spring REST Et Angular"}),"\n",(0,s.jsx)(n.h2,{id:"etape-1-web-service",children:"Etape 1 (Web Service)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cr\xe9e un package qui va contenir le contr\xf4leur du service web (par exemple : ihm.rest)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ajoute le contr\xf4leur MovieRestController qui aura l'annotation @RestController."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Commence par cr\xe9er une route qui s\xe9lectionne un film par son id et retourne le Film en question. Voici un exemple :"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@GetMapping\nMovie getMovieById(){\n    return // Votre film;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Vous pouvez donc en d\xe9duire que par d\xe9faut, ",(0,s.jsx)(n.strong,{children:"les contr\xf4leurs REST"})," retournent les objets au format JSON, ce qui est testable via un navigateur."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Une fois que vous avez compris cela, assurez-vous que ce ",(0,s.jsx)(n.strong,{children:"RestController"})," poss\xe8de toutes les routes n\xe9cessaires pour reproduire ce que nous avions en ",(0,s.jsx)(n.strong,{children:"Front-end"}),", mais en version ",(0,s.jsx)(n.strong,{children:"Web Service JSON"})]}),"\n",(0,s.jsx)(n.h2,{id:"etape-2-angular",children:"Etape 2 (Angular)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cr\xe9er un projet angular (version LTS)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Creer une page qui affiche la liste des films"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["La doc : ",(0,s.jsx)(n.a,{href:"https://angular.io/start",children:"https://angular.io/start"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tips",children:"Tips"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Il faut recr\xe9er le model Movie avec ses associatons cot\xe9s Angular en Typescript (pas d'annotations ou ORM)"}),"\n",(0,s.jsxs)(n.li,{children:["Une page sera un composant (ng-generate-page) : ",(0,s.jsx)(n.a,{href:"https://angular.io/guide/component-overview",children:"https://angular.io/guide/component-overview"})]}),"\n",(0,s.jsxs)(n.li,{children:["Les donn\xe9es du Back (Spring web) vont \xeatre r\xe9cup\xe9rer via un Service angular : ",(0,s.jsx)(n.a,{href:"https://angular.io/tutorial/tour-of-heroes/toh-pt4",children:"https://angular.io/tutorial/tour-of-heroes/toh-pt4"})]}),"\n",(0,s.jsxs)(n.li,{children:["Utiliser le ngFor pour boucler la liste des films r\xe9cup\xe9rer : ",(0,s.jsx)(n.a,{href:"https://guide-angular.wishtack.io/angular/composants/ngfor",children:"https://guide-angular.wishtack.io/angular/composants/ngfor"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var s=r(7294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);