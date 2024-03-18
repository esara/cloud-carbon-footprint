"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[3014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,b=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={id:"ali",title:"Alibaba Cloud (Aliyun)",sidebar_label:"Ali Cloud",slug:"/ali",sidebar_position:4},o=void 0,l={unversionedId:"ConnectingData/ali",id:"ConnectingData/ali",title:"Alibaba Cloud (Aliyun)",description:"Your Alibaba Cloud Account needs to be configured to allow the application to authenticate and run queries on your usage and billing data via Alibaba Cloud BSS OpenAPI.",source:"@site/docs/ConnectingData/ALI.md",sourceDirName:"ConnectingData",slug:"/ali",permalink:"/docs/ali",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"ali",title:"Alibaba Cloud (Aliyun)",sidebar_label:"Ali Cloud",slug:"/ali",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Azure",permalink:"/docs/azure"},next:{title:"On-Premise",permalink:"/docs/on-premise"}},p={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your Alibaba Cloud Account needs to be configured to allow the application to authenticate and run queries on your usage and billing data via Alibaba Cloud BSS OpenAPI."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ensure your Alibaba Cloud account has the correct permissions")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create or use an existing RAM user with the following permissions: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AliyunBSSFullAccess")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AliyunBSSReadOnlyAccess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AliyunBSSOrderAccess"))))),(0,r.kt)("p",{parentName:"li"},"More information on permissions and resource access control for the BOA API can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/bss-openapi/latest/authorize-api-calls?spm=a2c63.p38356.0.0.3a895f3asxTmSB"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Obtain your Alibaba Cloud credentials")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://usercenter.console.aliyun.com/#/manage/ak"},"Alibaba User Center")," to obtain your access key (ALI_ACCESS_KEY) and secret access key (ALI_ACCESS_SECRET)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configure API or CLI environment variables")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALI_ACCESS_KEY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ALI_ACCESS_SECRET")," variables to the .env file in the API or CLI folder. Reference ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/api/.env.template"},"packages/api/.env.template")," for a template .env file. Rename this file as .env and set the appropriate variables.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are only using Alibaba Cloud, you can remove the environment variables associated with other cloud providers in your ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/api/.env")," file.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Usage and Billing Data")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Usage and billing data is fetched using Alibaba Cloud BSS OpenAPI. Make sure this feature is enabled and configured properly in your Alibaba Cloud account."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Finally, after performing a ",(0,r.kt)("inlineCode",{parentName:"strong"},"yarn install"),", start up the application")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"yarn start\n")),(0,r.kt)("p",{parentName:"li"},"or "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"yarn start-api\n")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"warning")," This will incur some cost. Use this sparingly if you wish to test with live data. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/openapi-explorer/latest/faqs"},"Ali Docs FAQ")," for more information."))}m.isMDXComponent=!0}}]);