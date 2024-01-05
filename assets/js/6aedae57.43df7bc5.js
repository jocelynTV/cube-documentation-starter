"use strict";(self.webpackChunksrd_documentation=self.webpackChunksrd_documentation||[]).push([[8215],{3603:(e,n,r)=>{r.r(n),r.d(n,{Highlight:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var t=r(5893),a=r(1151),s=r(3992),l=r(425);const o={sidebar_position:4},i="Edit a user",u={id:"users/edit-a-user",title:"Edit a user",description:"Edit the details of a user.",source:"@site/docs/users/edit-a-user.mdx",sourceDirName:"users",slug:"/users/edit-a-user",permalink:"/docs/next/users/edit-a-user",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"List all users",permalink:"/docs/next/users/list-all-user"},next:{title:"Delete a user",permalink:"/docs/next/users/delete-a-user"}},c={},d=({children:e,color:n})=>{const r={span:"span",...(0,a.a)()};return(0,t.jsx)(r.span,{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},h=[{value:"Request",id:"request",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Body",id:"body",level:3},{value:"Example",id:"example",level:3},{value:"Response",id:"response",level:2},{value:"Schema",id:"schema",level:3},{value:"Example",id:"example-1",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"edit-a-user",children:"Edit a user"}),"\n",(0,t.jsx)(n.p,{children:"Edit the details of a user."}),"\n","\n",(0,t.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(n.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(d,{color:"#fca130",children:"PATCH"})," /api/users/",":user_id"]}),"\n",(0,t.jsx)(n.h3,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"user_id"}),": ",(0,t.jsx)(n.code,{children:"string<uuid>"})," - ID of the meeting. Fetch the user ID using the create a user API"]}),"\n",(0,t.jsx)(n.h3,{id:"body",children:"Body"}),"\n",(0,t.jsx)(n.p,{children:"application/json"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["name: ",(0,t.jsx)(n.code,{children:"string"})," ",(0,t.jsx)(n.code,{children:"min:6 characters"})," - User Fullname"]}),"\n",(0,t.jsxs)(n.li,{children:["email ",(0,t.jsx)("sub",{children:"required"}),": ",(0,t.jsx)(n.code,{children:"string<email>"})," - User email address"]}),"\n"]}),"\n","\n","\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"cURL",label:"cURL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'curl --request PATCH \\\n--url http://example.com/api/users/92693c4f-c752-4f75-bd44-68dc088a5e26 \\\n--header \'Authorization: Bearer meowmeowmeow\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"username": "John78",\n"email": "john.smith@example.com"\n}\'\n'})})}),(0,t.jsx)(l.Z,{value:"Node.js",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const fetch = require('node-fetch');\n\nlet url = 'http://example.com/api/users/92693c4f-c752-4f75-bd44-68dc088a5e26';\n\nlet options = {\n  method: 'PATCH',\n  headers: {'Content-Type': 'application/json', Authorization: 'Bearer meowmeowmeow'},\n  body: '{\"username\":\"John78\",\"email\":\"john.smith@example.com\"}'\n};\n\nfetch(url, options)\n  .then(res => res.json())\n  .then(json => console.log(json))\n  .catch(err => console.error('error:' + err));\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(d,{color:"#49cc90",children:"200"})," OK"]}),"\n",(0,t.jsx)(n.h3,{id:"schema",children:"Schema"}),"\n",(0,t.jsx)(n.p,{children:"application/json"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "id": "string", // User ID\n  "name": "string", // User fullname\n  "email": "string" // User email address\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "id": "92693c4f-c752-4f75-bd44-68dc088a5e26",\n  "name": "John78",\n  "email": "john.smith@example.com"\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},425:(e,n,r)=>{r.d(n,{Z:()=>l});r(7294);var t=r(512);const a={tabItem:"tabItem_Ymn6"};var s=r(5893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:r,children:n})}},3992:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(7294),a=r(512),s=r(2957),l=r(6550),o=r(1270),i=r(5238),u=r(3609),c=r(2560);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(1048);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(5893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),a=o[r].value;a!==t&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var t=r(7294);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);