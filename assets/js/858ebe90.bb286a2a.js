"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[227],{3868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(4848),i=n(8453),s=n(1470),a=n(9365);const o={sidebar_position:3},l="Integration",u={id:"integration",title:"Integration",description:"Let's get started by cloning a repository that has built in errors.",source:"@site/docs/integration.mdx",sourceDirName:".",slug:"/integration",permalink:"/integration",draft:!1,unlisted:!1,editUrl:"https://github.com/panoshalios/panoshalios.github.io/tree/main/docs/integration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Help",permalink:"/help"}},c={},d=[{value:"Running Kropply",id:"running-kropply",level:2},{value:"Viewing suggestions",id:"viewing-suggestions",level:2},{value:"Diffin&#39;",id:"diffin",level:2},{value:"Applying a fix",id:"applying-a-fix",level:2}];function h(e){const t={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"integration",children:"Integration"}),"\n",(0,r.jsx)(t.p,{children:"Let's get started by cloning a repository that has built in errors."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/panoshalios/kropply-demo.git\n"})}),"\n",(0,r.jsx)(t.p,{children:"Open that repository with VS Code and then install the packages."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,r.jsx)(t.h2,{id:"running-kropply",children:"Running Kropply"}),"\n",(0,r.jsxs)(t.p,{children:["Open ",(0,r.jsx)(t.code,{children:"mergesort.test.ts"}),". All you need to do now is to save it."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"mac",label:"Mac",default:!0,children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"CMD + S"})})}),(0,r.jsx)(a.A,{value:"windows-linux",label:"Linux/Window",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"CTRL + S"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Wait a bit for suggestions to generate. In the background, Kropply is running Jest to capture the errors.",(0,r.jsx)(t.br,{}),"\n","On the ",(0,r.jsx)(t.strong,{children:"left hand side panel"})," you should see the number of suggestions on top of the Kropply logo."]}),"\n",(0,r.jsx)("img",{src:"/img/suggestion-count.png",alt:"number of suggestions",style:{maxWidth:"60%"}}),"\n",(0,r.jsx)(t.h2,{id:"viewing-suggestions",children:"Viewing suggestions"}),"\n",(0,r.jsx)(t.p,{children:"Click on the logo to see the suggestions."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Keep in mind that the suggestions that you have might be different that ones from the below image."})}),"\n",(0,r.jsx)("img",{src:"/img/suggestion.png",alt:"the suggestions",style:{maxWidth:"60%"}}),"\n",(0,r.jsx)(t.h2,{id:"diffin",children:"Diffin'"}),"\n",(0,r.jsx)(t.p,{children:"Click the inside a suggestion to display the diff within the editor."}),"\n",(0,r.jsx)(t.h2,{id:"applying-a-fix",children:"Applying a fix"}),"\n",(0,r.jsxs)(t.p,{children:["Finally click ",(0,r.jsx)(t.strong,{children:"Apply"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"You just succesfully fixed your first error with Kropply!"})}),"\n",(0,r.jsx)(t.p,{children:"\ud83d\udcbb Now all you need to do is write your own tests, and Kropply will automatically generate suggestions in the background."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const i={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),i=n(4164),s=n(3104),a=n(6347),o=n(205),l=n(7485),u=n(1682),c=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=g({queryString:n,groupId:i}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),m=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(u(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,i.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);