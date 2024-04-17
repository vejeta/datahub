"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[23621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Adding user metadata in DataHub",slug:"/how/add-user-data",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-user-data.md"},u="Adding user metadata in DataHub",c={unversionedId:"docs/how/add-user-data",id:"version-0.13.1/docs/how/add-user-data",title:"Adding user metadata in DataHub",description:"This guide shares how you can add user metadata in DataHub. Usually you would want to use one of our sources for ingesting user metadata. But if there is no connector for your use case then you would want to use this guide.",source:"@site/versioned_docs/version-0.13.1/docs/how/add-user-data.md",sourceDirName:"docs/how",slug:"/how/add-user-data",permalink:"/docs/how/add-user-data",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-user-data.md",tags:[],version:"0.13.1",frontMatter:{title:"Adding user metadata in DataHub",slug:"/how/add-user-data",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-user-data.md"}},l={},d=[{value:"Using File-Based Ingestion Recipe",id:"using-file-based-ingestion-recipe",level:2},{value:"Using Rest.li API",id:"using-restli-api",level:2}],p={toc:d},m="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-user-metadata-in-datahub"},"Adding user metadata in DataHub"),(0,r.kt)("p",null,"This guide shares how you can add user metadata in DataHub. Usually you would want to use one of our sources for ingesting user metadata. But if there is no connector for your use case then you would want to use this guide."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This does not allow you to add new users for Authentication. If you want to add a new user in DataHub for Login please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/guides/add-users"},"Adding Users to DataHub"))),(0,r.kt)("p",null,"You can look at all aspects supported for users in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/aspect/CorpUserAspect.pdl"},"CorpUserAspect")),(0,r.kt)("h2",{id:"using-file-based-ingestion-recipe"},"Using File-Based Ingestion Recipe"),(0,r.kt)("p",null,"Define a JSON File containing your user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-my-user.json"},'[\n    {\n        "auditHeader": null,\n        "proposedSnapshot": {\n            "com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot": {\n                "urn": "urn:li:corpuser:aseem.bansal",\n                "aspects": [\n                    {\n                        "com.linkedin.pegasus2avro.identity.CorpUserInfo": {\n                            "active": true,\n                            "displayName": {\n                                "string": "Aseem Bansal"\n                            },\n                            "email": "aseem+examples@acryl.io",\n                            "title": {\n                                "string": "Software Engineer"\n                            },\n                            "managerUrn": null,\n                            "departmentId": null,\n                            "departmentName": null,\n                            "firstName": null,\n                            "lastName": null,\n                            "fullName": {\n                                "string": "Aseem Bansal"\n                            },\n                            "countryCode": null\n                        }\n                    }\n                ]\n            }\n        }\n    }\n]\n')),(0,r.kt)("p",null,"Define an ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/#recipes"},"ingestion recipe")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\n# see https://datahubproject.io/docs/generated/ingestion/sources/file for complete documentation\nsource:\n  type: "file"\n  config:\n    path: "./my-user.json"\n\n# see https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for complete documentation\nsink:\n  ... \n\n')),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli"},"DataHub CLI")," to do the ingestion."),(0,r.kt)("h2",{id:"using-restli-api"},"Using Rest.li API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/entities?action=ingest\' -X POST --data \'{\n    "entity": {\n        "value": {\n            "com.linkedin.metadata.snapshot.CorpUserSnapshot": {\n                "urn": "urn:li:corpuser:aseem.bansal",\n                "aspects": [{\n                    "com.linkedin.identity.CorpUserInfo": {\n                        "active": true, \n                        "displayName": "Aseem Bansal",\n                        "email": "aseem+example@acryl.io",\n                        "title": "Software Engineer",\n                        "fullName": "Aseem Bansal"\n                    }\n                }]\n            }\n        }\n    }\n}\'\n')))}f.isMDXComponent=!0}}]);