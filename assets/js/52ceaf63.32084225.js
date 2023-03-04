"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"alternative-data-approaches",title:"Alternative Data Approaches",slug:"/alternative-data-approaches",sidebar_position:6},i=void 0,s={unversionedId:"ConnectingData/alternative-data-approaches",id:"ConnectingData/alternative-data-approaches",title:"Alternative Data Approaches",description:"Cloud Provider Usage and Cost Data",source:"@site/docs/ConnectingData/AlternativeDataApproaches.md",sourceDirName:"ConnectingData",slug:"/alternative-data-approaches",permalink:"/docs/alternative-data-approaches",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"alternative-data-approaches",title:"Alternative Data Approaches",slug:"/alternative-data-approaches",sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Recommendations",permalink:"/docs/recommendations"},next:{title:"Data Persistence and Caching",permalink:"/docs/data-persistence-and-caching"}},c={},p=[{value:"Cloud Provider Usage and Cost Data",id:"cloud-provider-usage-and-cost-data",level:2},{value:"Unsupported: Using Cloud Usage APIs (Higher Accuracy)",id:"unsupported-using-cloud-usage-apis-higher-accuracy",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cloud-provider-usage-and-cost-data"},"Cloud Provider Usage and Cost Data"),(0,r.kt)("p",null,"By default, we query AWS Cost and Usage Reports with Amazon Athena, GCP Billing Export Table using BigQuery, and Azure Consumption Management API. This pulls usage data from all Linked Accounts in your AWS, GCP or Azure Organization. This option is selected by default with following options set to true in the server ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AWS_USE_BILLING_DATA")," (AWS)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"GCP_USE_BILLING_DATA")," (GCP)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"AZURE_USE_BILLING_DATA")," (Azure)"),(0,r.kt)("p",null,"You need to also set additional environment variables as specified in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/api/.env.template"},"api/.env.template"),", which was described in the Connecting Your Data section. You can see the permissions required by this approach in ",(0,r.kt)("inlineCode",{parentName:"p"},"ccf-app.yaml")," file. This approach provides us with a more holistic estimation of your cloud energy and carbon consumption, but it is less accurate as we use a constant (rather than measure) CPU Utilization, set for each cloud provider package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/aws/src/domain/AwsFootprintEstimationConstants.ts"},"packages/aws/src/domain/AwsFootprintEstimationConstants.ts")),(0,r.kt)("li",{parentName:"ul"},"GCP: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/gcp/src/domain/GcpFootprintEstimationConstants.ts"},"packages/gcp/src/domain/GcpFootprintEstimationConstants.ts")),(0,r.kt)("li",{parentName:"ul"},"Azure: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/azure/src/domain/AzureFootprintEstimationConstants.ts"},"packages/azure/src/domain/AzureFootprintEstimationConstants.ts"))),(0,r.kt)("h3",{id:"unsupported-using-cloud-usage-apis-higher-accuracy"},"Unsupported: Using Cloud Usage APIs (Higher Accuracy)"),(0,r.kt)("p",null,"This alternative approach is currently unsupported but in the spirit of open source, still exists in the codebase. It utilizes the AWS CloudWatch and Cost Explorer APIs, and the GCP Cloud Monitoring API. We achieve this by looping through the accounts (the list is in the api/.env file) and then making the API calls on each account for the regions and services set in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/packages/common/src/Config.ts"},"packages/common/src/Config.ts"),". The permissions required for this approach are in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blob/trunk/cloudformation/ccf.yaml"},"ccf.yaml")," file. This approach is arguably more accurate as we use the actual CPU usage in the emission estimation but is confined to the services that have been implemented so far in the application. We retrieve an hourly granularity for usage and daily granularity for cost. This option only works for compute and storage, and is not available for Microsoft Azure."),(0,r.kt)("p",null,"The cloud providers and services available with this approach are:"),(0,r.kt)("p",null,"AWS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EC2 (compute)"),(0,r.kt)("li",{parentName:"ul"},"Lambda (compute)"),(0,r.kt)("li",{parentName:"ul"},"EBS (storage)"),(0,r.kt)("li",{parentName:"ul"},"RDS (compute & storage)"),(0,r.kt)("li",{parentName:"ul"},"S3 (storage)"),(0,r.kt)("li",{parentName:"ul"},"Elasticache (compute)")),(0,r.kt)("p",null,"GCP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compute Engine (compute)")),(0,r.kt)("p",null,"For a more comprehensive read on the various calculations and constants that we use for the emissions estimates, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/methodology"},"Methodology page"),"."))}d.isMDXComponent=!0}}]);