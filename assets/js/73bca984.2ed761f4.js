"use strict";(self.webpackChunksrd_documentation=self.webpackChunksrd_documentation||[]).push([[9081],{2753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(1527),r=n(7463),s=n(9590),o=n(9772);const i={slug:"intro",title:"Intro"},l=void 0,u={permalink:"/cube-documentation-starter/blog/intro",source:"@site/blog/intro.mdx",title:"Intro",description:"What is Cube?",date:"2024-01-05T08:54:04.000Z",formattedDate:"January 5, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"intro",title:"Intro"},unlisted:!1,nextItem:{title:"Flow",permalink:"/cube-documentation-starter/blog/flow"}},c={authorsImageUrls:[]},d=[{value:"What is Cube?",id:"what-is-cube",level:2},{value:"Why do we use it?",id:"why-do-we-use-it",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-is-cube",children:"What is Cube?"}),"\n",(0,a.jsx)(t.p,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://jocelyntv.github.io/cube-ant-design-dashboard/wallpaper.png",alt:"Architecture"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The module provides multiple components eg. to assert that needed translations get loaded or that your content gets rendered when the language changes."})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",metastring:'title="src/i18n/config.ts"',children:"import i18n from 'i18next';\nimport Backend from 'i18next-http-backend';\nimport LanguageDetector from 'i18next-browser-languagedetector';\nimport { initReactI18next } from 'react-i18next';\n\nimport translationVi from './locales/vi/translation.json';\nimport translationENG from './locales/en/translation.json';\n\n//translations\nconst resources = {\n  vi: {\n    translation: translationVi\n  },\n  en: {\n    translation: translationENG\n  }\n};\n\ni18n\n  // load translation using http -> see /public/locales\n  // learn more: https://github.com/i18next/i18next-http-backend\n  .use(Backend)\n  // detect user language\n  // learn more: https://github.com/i18next/i18next-browser-languageDetector\n  .use(LanguageDetector)\n  // pass the i18n instance to react-i18next.\n  .use(initReactI18next)\n  // init i18next\n  // for all options read: https://www.i18next.com/overview/configuration-options\n  .init({\n    resources,\n    lng: 'en',\n    fallbackLng: 'en',\n    debug: true\n  });\n\nexport default i18n;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"why-do-we-use-it",children:"Why do we use it?"}),"\n",(0,a.jsx)(t.p,{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"npm",label:"npm",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npm run cube\n"})})}),(0,a.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"yarn cube\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"pnpm run cube\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9772:(e,t,n)=>{n.d(t,{Z:()=>o});n(959);var a=n(6259);const r={tabItem:"tabItem_rayh"};var s=n(1527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},9590:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(959),r=n(6259),s=n(2321),o=n(8903),i=n(2355),l=n(4541),u=n(5288),c=n(3741);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2318);const g={tabList:"tabList_N3ac",tabItem:"tabItem_FMta"};var v=n(1527);function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function k(e){const t=(0,f.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},7463:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(959);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);