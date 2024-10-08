"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[2616],{6580:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(7624),i=s(2172);const r={sidebar_position:1},o="Test Unitaire/Fonctionnel (Jest)",c={id:"nodejs/course/test-fonc-jest",title:"Test Unitaire/Fonctionnel (Jest)",description:"D\xe9monstration de mise en place d'un test fonctionnel sur un projet JS (Node) avec Jest.",source:"@site/docs/nodejs/course/test-fonc-jest.md",sourceDirName:"nodejs/course",slug:"/nodejs/course/test-fonc-jest",permalink:"/documentation/docs/nodejs/course/test-fonc-jest",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodejs/course/test-fonc-jest.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cours/Exemple",permalink:"/documentation/docs/category/coursexemple"},next:{title:"Logger (winston)",permalink:"/documentation/docs/nodejs/course/logger"}},l={},d=[{value:"Sp\xe9cifier l&#39;outil  de test",id:"sp\xe9cifier-loutil--de-test",level:2},{value:"Creer un fichier de test",id:"creer-un-fichier-de-test",level:2},{value:"Lancer le test",id:"lancer-le-test",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"test-unitairefonctionnel-jest",children:"Test Unitaire/Fonctionnel (Jest)"}),"\n",(0,n.jsx)(t.p,{children:"D\xe9monstration de mise en place d'un test fonctionnel sur un projet JS (Node) avec Jest."}),"\n",(0,n.jsx)(t.p,{children:"Pour l'installation de Jest, vous pouvez suivre ce lien :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://jestjs.io/docs/getting-started",children:"https://jestjs.io/docs/getting-started"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"sp\xe9cifier-loutil--de-test",children:"Sp\xe9cifier l'outil  de test"}),"\n",(0,n.jsxs)(t.p,{children:["Il faut sp\xe9cifier dans le ",(0,n.jsx)(t.strong,{children:"package.json"})," que notre commande ",(0,n.jsx)(t.strong,{children:"test"})," utilisera ",(0,n.jsx)(t.strong,{children:"Jest"}),", notre librairie de tests unitaires."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'...\n"scripts": {\n    "test": "jest"\n},\n...\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Ainsi nous pourrons lancer les test avec la commande ",(0,n.jsx)(t.code,{children:"npm test"})]}),"\n",(0,n.jsx)(t.h2,{id:"creer-un-fichier-de-test",children:"Creer un fichier de test"}),"\n",(0,n.jsxs)(t.p,{children:["Les fichiers de test doivent avoir l'extension ",(0,n.jsx)(t.code,{children:".test.js"})," pour \xeatre reconnus comme un fichier de test."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Exemple de fichier qui contient deux tests :"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Un test qui attend qu'un code m\xe9tier soit \xe9gal \xe0 ",(0,n.jsx)(t.code,{children:"200"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Un test qui attend qu'un code m\xe9tier soit \xe9gal \xe0 ",(0,n.jsx)(t.code,{children:"703"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const userService = require('./user-service');\n\ntest('getByEmail with valid email', () => {\n    const serviceResponse = userService.getByEmail(\"isaac@gmail.com\");\n    expect(serviceResponse.code).toBe('200');\n});\n\n\ntest('getByEmail with unexisted email', () => {\n    const serviceResponse = userService.getByEmail(\"i@gmail.com\");\n    expect(serviceResponse.code).toBe('703');\n});\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"lancer-le-test",children:"Lancer le test"}),"\n",(0,n.jsxs)(t.p,{children:["Comme dit plus haut, nous pouvons lancer les test avec la commande ",(0,n.jsx)(t.code,{children:"npm test"})]}),"\n",(0,n.jsx)(t.p,{children:"Exemple de resultat dans le cmd :"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screenshot",src:s(9244).c+"",width:"711",height:"579"})})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},9244:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/img-test-fonc-jest-01-76f849224b019be6b05f8f7816a98566.png"},2172:(e,t,s)=>{s.d(t,{I:()=>c,M:()=>o});var n=s(1504);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);