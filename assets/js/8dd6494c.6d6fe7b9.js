"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[31226],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?r.createElement(k,a(a({ref:t},c),{},{components:o})):r.createElement(k,a({ref:t},c))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},95874:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>p});o(67294);var r=o(3905);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const l={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/looker/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md"},s="Looker & LookML Ingestion Guide: Overview",u={unversionedId:"docs/quick-ingestion-guides/looker/overview",id:"version-0.13.0/docs/quick-ingestion-guides/looker/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/versioned_docs/version-0.13.0/docs/quick-ingestion-guides/looker/overview.md",sourceDirName:"docs/quick-ingestion-guides/looker",slug:"/quick-ingestion-guides/looker/overview",permalink:"/docs/0.13.0/quick-ingestion-guides/looker/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md",tags:[],version:"0.13.0",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/looker/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/0.13.0/quick-ingestion-guides/powerbi/configuration"},next:{title:"Setup",permalink:"/docs/0.13.0/quick-ingestion-guides/looker/setup"}},c={},p=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Looker",id:"looker",level:3},{value:"LookML",id:"lookml",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Reference",id:"reference",level:3}],d={toc:p},m="wrapper";function k(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){n(e,t,o[t])}))}return e}({},d,o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"looker--lookml-ingestion-guide-overview"},"Looker & LookML Ingestion Guide: Overview"),(0,r.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,r.kt)("p",null,"This guide will help you set up the Looker & LookML connectors to begin ingesting metadata into DataHub.\nUpon completing this guide, you will have a recurring ingestion pipeline to extract metadata from Looker & LookML and load it into DataHub. "),(0,r.kt)("h3",{id:"looker"},"Looker"),(0,r.kt)("p",null,"Looker connector will ingest Looker asset types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/dashboards"},"Dashboards")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/creating-visualizations"},"Charts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-explore-explore"},"Explores")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.looker.com/api/explorer/4.0/methods/Metadata/connection_schemas"},"Schemas")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/creating-user-defined-dashboards"},"Owners of Dashboards"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To get complete Looker metadata integration (including Looker views and lineage to the underlying warehouse tables), you must also use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/looker#module-lookml"},"lookml")," connector.")),(0,r.kt)("h3",{id:"lookml"},"LookML"),(0,r.kt)("p",null,"LookMl connector will include the following LookML asset types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-view-view"},"LookML views from model files in a project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-field-dimension"},"Metadata for dimensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-measure-types"},"Metadata for measures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-field-dimension-group"},"Dimension Groups as tag"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To get complete Looker metadata integration (including Looker views and lineage to the underlying warehouse tables), you must also use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/looker#module-looker"},"looker")," connector.")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Please continue to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.13.0/quick-ingestion-guides/looker/setup"},"setup guide"),", where we'll describe the prerequisites."),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("p",null,"If you want to ingest metadata from Looker using the DataHub CLI, check out the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.13.0/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/Looker"},"Looker Ingestion Source"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,r.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}k.isMDXComponent=!0}}]);