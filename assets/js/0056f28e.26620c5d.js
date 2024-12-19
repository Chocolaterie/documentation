"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[4077],{5076:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(7624),t=r(2172);const s={sidebar_position:2},a="TP - Pattern Observable (Correction)",c={id:"poo/observable/tp-correction",title:"TP - Pattern Observable (Correction)",description:"Dans cette correction les Observer seront des fonctions lambda.",source:"@site/docs/poo/observable/tp-correction.md",sourceDirName:"poo/observable",slug:"/poo/observable/tp-correction",permalink:"/documentation/docs/poo/observable/tp-correction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/poo/observable/tp-correction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TP - Pattern Observable",permalink:"/documentation/docs/poo/observable/tp"},next:{title:"Java POO",permalink:"/documentation/docs/category/java-poo"}},i={},l=[{value:"Observable",id:"observable",level:3}];function b(e){const o={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"tp---pattern-observable-correction",children:"TP - Pattern Observable (Correction)"}),"\n",(0,n.jsxs)(o.p,{children:["Dans cette correction les ",(0,n.jsx)(o.strong,{children:"Observer"})," seront des fonctions lambda."]}),"\n",(0,n.jsx)(o.h3,{id:"observable",children:"Observable"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-dart",children:"class Observable<T> {\n  T value;\n  final List<void Function(T)> observers = [];\n\n  Observable(this.value);\n\n  void setValue(T newValue) {\n    value = newValue;\n    notifyObservers();\n  }\n\n  void addObserver(void Function(T) observer) {\n    observers.add(observer);\n  }\n\n  void removeObserver(void Function(T) observer) {\n    observers.remove(observer);\n  }\n\n  void notifyObservers() {\n    for (var observer in observers) {\n      observer(value);\n    }\n  }\n}\n"})})]})}function d(e={}){const{wrapper:o}={...(0,t.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},2172:(e,o,r)=>{r.d(o,{I:()=>c,M:()=>a});var n=r(1504);const t={},s=n.createContext(t);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);