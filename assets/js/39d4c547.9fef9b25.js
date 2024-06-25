"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[7852],{7188:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(7624),r=i(2172);const s={sidebar_position:1},c="Injection",o={id:"spring/injection",title:"Injection",description:"Voici un exemple d'impl\xe9mentation DAO sans utilisation d'injection et avec injection (utilisation du pattern IOC)",source:"@site/docs/spring/injection.mdx",sourceDirName:"spring",slug:"/spring/injection",permalink:"/documentation/docs/spring/injection",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring/injection.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Java Spring",permalink:"/documentation/docs/category/java-spring"},next:{title:"Qualifier",permalink:"/documentation/docs/spring/qualifier"}},a={},l=[{value:"Sp\xe9cifier des composants Injectables",id:"sp\xe9cifier-des-composants-injectables",level:2},{value:"R\xe9cup\xe9rer une injection",id:"r\xe9cup\xe9rer-une-injection",level:2},{value:"Utiliser @Autowired",id:"utiliser-autowired",level:4},{value:"Injecter dans un constructeur",id:"injecter-dans-un-constructeur",level:4},{value:"Injecter dans une fonction",id:"injecter-dans-une-fonction",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"injection",children:"Injection"}),"\n",(0,t.jsx)(n.p,{children:"Voici un exemple d'impl\xe9mentation DAO sans utilisation d'injection et avec injection (utilisation du pattern IOC)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:i(8919).c+"",width:"731",height:"574"})}),"\n",(0,t.jsx)(n.p,{children:"L'avantage du pattern IOC est qu'il vise \xe0 minimiser le couplage (et donc \xe0 r\xe9duire les d\xe9pendances fortes) tout en offrant une meilleure flexibilit\xe9 en mati\xe8re de configuration."}),"\n",(0,t.jsx)(n.p,{children:"Cela permet de passer d'une impl\xe9mentation \xe0 une autre sans avoir besoin de modifier le code source, mais plut\xf4t en utilisant des fichiers de propri\xe9t\xe9s"}),"\n",(0,t.jsx)(n.h2,{id:"sp\xe9cifier-des-composants-injectables",children:"Sp\xe9cifier des composants Injectables"}),"\n",(0,t.jsxs)(n.p,{children:["Pour simplifier, pour d\xe9finir une classe/interface ",(0,t.jsx)(n.strong,{children:"Injectable"}),", on peut utiliser les annotations suivantes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@Component"}),"\n",(0,t.jsx)(n.li,{children:"@Service"}),"\n",(0,t.jsx)(n.li,{children:"@Controller"}),"\n",(0,t.jsx)(n.li,{children:"@Repository"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9cup\xe9rer-une-injection",children:"R\xe9cup\xe9rer une injection"}),"\n",(0,t.jsx)(n.p,{children:"Pour r\xe9cup\xe9rer une injection on peut avoir 3 mani\xe8res de faire \xe0 savoir :"}),"\n",(0,t.jsx)(n.h4,{id:"utiliser-autowired",children:"Utiliser @Autowired"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Autowired\nDAOArticle daoArticle;\n"})}),"\n",(0,t.jsx)(n.h4,{id:"injecter-dans-un-constructeur",children:"Injecter dans un constructeur"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"DAOArticle daoArticle;\n\t\nUnConstructeur(DAOArticle daoArticle) {\n    this.daoArticle = daoArticle;\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"injecter-dans-une-fonction",children:"Injecter dans une fonction"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Autowired\nvoid uneFonction(DAOArticle daoArticle) {\n    daoArticle.getAll();\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8919:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/diagramme_ioc_1-737c789d7ed0067abe2f855f3af299a5.png"},2172:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>c});var t=i(1504);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);