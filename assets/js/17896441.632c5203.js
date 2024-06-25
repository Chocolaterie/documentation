"use strict";(self.webpackChunkschool_learn=self.webpackChunkschool_learn||[]).push([[6752],{4556:(e,n,t)=>{t.d(n,{c:()=>g});t(1504);var s=t(4064),a=t(5864),i=t(9940),l=t(3376),o=t(867),c=t(4357),r=t(964),d=t(7624);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,r.cp)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.c,{"aria-label":(0,c.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,d.jsx)(o.c,{className:a,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:a,children:n})}function b(e){let{children:n,active:t,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.c)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function g(){const e=(0,i.js)(),n=(0,l.Y5)();return e?(0,d.jsx)("nav",{className:(0,s.c)(a.W.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,c.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(b,{active:s,index:t,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:s,children:n.label})},t)}))]})}):null}},1264:(e,n,t)=>{t.r(n),t.d(n,{default:()=>R});var s=t(1504),a=t(8900),i=t(1100),l=t(7624);const o=s.createContext(null);function c(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,l.jsx)(o.Provider,{value:a,children:n})}function r(){const e=(0,s.useContext)(o);if(null===e)throw new i.AH("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=r();return(0,l.jsx)(a.U7,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(4064),m=t(1432),h=t(4948);function v(){const{metadata:e}=r();return(0,l.jsx)(h.c,{previous:e.previous,next:e.next})}var x=t(2136),b=t(8092),g=t(5864),p=t(1096),f=t(3092);function j(){const{metadata:e}=r(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(n||t||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.c)(g.W.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.c)("row margin-top--sm",g.W.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(p.c,{tags:a})})}),o&&(0,l.jsx)(f.c,{className:(0,u.c)("margin-top--sm",g.W.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var C=t(8448),L=t(3088),N=t(4357);const _={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function k(e){let{collapsed:n,...t}=e;return(0,l.jsx)("button",{type:"button",...t,className:(0,u.c)("clean-btn",_.tocCollapsibleButton,!n&&_.tocCollapsibleButtonExpanded,t.className),children:(0,l.jsx)(N.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const T={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function H(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,C.a)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.c)(T.tocCollapsible,!i&&T.tocCollapsibleExpanded,t),children:[(0,l.jsx)(k,{collapsed:i,onClick:o}),(0,l.jsx)(C.U,{lazy:!0,className:T.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(L.c,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const M={tocMobile:"tocMobile_ITEo"};function y(){const{toc:e,frontMatter:n}=r();return(0,l.jsx)(H,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.c)(g.W.docs.docTocMobile,M.tocMobile)})}var E=t(5124);function I(){const{toc:e,frontMatter:n}=r();return(0,l.jsx)(E.c,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:g.W.docs.docTocDesktop})}var w=t(6448),A=t(9444);function B(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=r();return n.hide_title||void 0!==t?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.c)(g.W.docs.docMarkdown,"markdown"),children:[t&&(0,l.jsx)("header",{children:(0,l.jsx)(w.c,{as:"h1",children:t})}),(0,l.jsx)(A.c,{children:n})]})}var O=t(4556),V=t(1528);const U={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function W(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=r(),t=(0,m.U)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,l.jsx)(y,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,l.jsx)(I,{})}}(),{metadata:{unlisted:s}}=r();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.c)("col",!t.hidden&&U.docItemCol),children:[s&&(0,l.jsx)(V.c,{}),(0,l.jsx)(x.c,{}),(0,l.jsxs)("div",{className:U.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(O.c,{}),(0,l.jsx)(b.c,{}),t.mobile,(0,l.jsx)(B,{children:n}),(0,l.jsx)(j,{})]}),(0,l.jsx)(v,{})]})]}),t.desktop&&(0,l.jsx)("div",{className:"col col--3",children:t.desktop})]})}function R(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,l.jsx)(c,{content:e.content,children:(0,l.jsxs)(a.cr,{className:n,children:[(0,l.jsx)(d,{}),(0,l.jsx)(W,{children:(0,l.jsx)(t,{})})]})})}},4948:(e,n,t)=>{t.d(n,{c:()=>l});t(1504);var s=t(4357),a=t(308),i=t(7624);function l(e){const{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(a.c,{...n,subLabel:(0,i.jsx)(s.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(a.c,{...t,subLabel:(0,i.jsx)(s.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},8092:(e,n,t)=>{t.d(n,{c:()=>c});t(1504);var s=t(4064),a=t(4357),i=t(5864),l=t(9920),o=t(7624);function c(e){let{className:n}=e;const t=(0,l.E)();return t.badge?(0,o.jsx)("span",{className:(0,s.c)(n,i.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},2136:(e,n,t)=>{t.d(n,{c:()=>b});t(1504);var s=t(4064),a=t(8264),i=t(867),l=t(4357),o=t(2840),c=t(5864),r=t(4592),d=t(9920),u=t(7624);const m={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=m[e.versionMetadata.banner];return(0,u.jsx)(n,{...e})}function v(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.c,{to:t,onClick:s,children:(0,u.jsx)(l.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:i}}=(0,a.c)(),{pluginId:l}=(0,o.UF)({failfast:!0}),{savePreferredVersionName:d}=(0,r.iy)(l),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,o.i8)(l),b=m??(g=x).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.c)(n,c.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:x.label,to:b.path,onClick:()=>d(x.name)})})]})}function b(e){let{className:n}=e;const t=(0,d.E)();return t.banner?(0,u.jsx)(x,{className:n,versionMetadata:t}):null}},308:(e,n,t)=>{t.d(n,{c:()=>l});t(1504);var s=t(4064),a=t(867),i=t(7624);function l(e){const{permalink:n,title:t,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.c,{className:(0,s.c)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},5124:(e,n,t)=>{t.d(n,{c:()=>r});t(1504);var s=t(4064),a=t(3088);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(7624);const o="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function r(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,s.c)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.c,{...t,linkClassName:o,linkActiveClassName:c})})}},3088:(e,n,t)=>{t.d(n,{c:()=>x});var s=t(1504),a=t(1824);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>o(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function r(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.y)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=r();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),r=c(o,{anchorTopOffset:t.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(867),m=t(7624);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.c,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:r,maxHeadingLevel:u,...h}=e;const x=(0,a.y)(),b=r??x.tableOfContents.minHeadingLevel,g=u??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:b,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:g}}),[o,c,b,g])),(0,m.jsx)(v,{toc:p,className:t,linkClassName:o,...h})}},3020:(e,n,t)=>{t.d(n,{c:()=>o});t(1504);var s=t(4064),a=t(867);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=t(7624);function o(e){let{permalink:n,label:t,count:o,description:c}=e;return(0,l.jsxs)(a.c,{href:n,title:c,className:(0,s.c)(i.tag,o?i.tagWithCount:i.tagRegular),children:[t,o&&(0,l.jsx)("span",{children:o})]})}},1096:(e,n,t)=>{t.d(n,{c:()=>c});t(1504);var s=t(4064),a=t(4357),i=t(3020);const l={tags:"tags_jXut",tag:"tag_QGVx"};var o=t(7624);function c(e){let{tags:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.c)(l.tags,"padding--none","margin-left--sm"),children:n.map((e=>(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.c,{...e})},e.permalink)))})]})}},1528:(e,n,t)=>{t.d(n,{c:()=>h});t(1504);var s=t(4064),a=t(4357),i=t(6952),l=t(7624);function o(){return(0,l.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,l.jsx)(i.c,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5864),u=t(304);function m(e){let{className:n}=e;return(0,l.jsx)(u.c,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.c)(n,d.W.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{}),(0,l.jsx)(m,{...e})]})}}}]);