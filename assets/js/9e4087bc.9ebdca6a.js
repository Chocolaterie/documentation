"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[7028],{6140:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});s(1504);var a=s(6016),t=s(4357),i=s(5756),c=s(2616),l=s(6448),n=s(7624);function h(e){let{year:r,posts:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.c,{as:"h3",id:r,children:r}),(0,n.jsx)("ul",{children:s.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(a.c,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function o(e){let{years:r}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(h,{...e})},r)))})})})}function d(e){let{archive:r}=e;const s=(0,t.G)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,t.G)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{const s=r.metadata.date.split("-")[0],a=e.get(s)??[];return e.set(s,[r,...a])}),new Map);return Array.from(r,(e=>{let[r,s]=e;return{year:r,posts:s}}))}(r.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.U7,{title:s,description:a}),(0,n.jsxs)(c.c,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.c,{as:"h1",className:"hero__title",children:s}),(0,n.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,n.jsx)("main",{children:h.length>0&&(0,n.jsx)(o,{years:h})})]})]})}}}]);