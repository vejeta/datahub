"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[63011],{46475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),i=n(51715),s=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={sidebar_position:36,title:"NiFi",slug:"/generated/ingestion/sources/nifi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md"},c="NiFi",d={unversionedId:"docs/generated/ingestion/sources/nifi",id:"version-0.13.1/docs/generated/ingestion/sources/nifi",title:"NiFi",description:"Certified",source:"@site/versioned_docs/version-0.13.1/docs/generated/ingestion/sources/nifi.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/nifi",permalink:"/docs/generated/ingestion/sources/nifi",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md",tags:[],version:"0.13.1",sidebarPosition:36,frontMatter:{sidebar_position:36,title:"NiFi",slug:"/generated/ingestion/sources/nifi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md"},sidebar:"overviewSidebar",previous:{title:"MySQL",permalink:"/docs/generated/ingestion/sources/mysql"},next:{title:"Okta",permalink:"/docs/generated/ingestion/sources/okta"}},u={},m=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Single User Authentication (<code>auth: SINGLE_USER</code>)",id:"single-user-authentication-auth-single_user",level:4},{value:"Client Certificates Authentication (<code>auth: CLIENT_CERT</code>)",id:"client-certificates-authentication-auth-client_cert",level:4},{value:"Kerberos Authentication via SPNEGO (<code>auth: Kerberos</code>)",id:"kerberos-authentication-via-spnego-auth-kerberos",level:4},{value:"Basic Authentication (<code>auth: BASIC_AUTH</code>)",id:"basic-authentication-auth-basic_auth",level:4},{value:"No Authentication (<code>auth: NO_AUTH</code>)",id:"no-authentication-auth-no_auth",level:4},{value:"Access Policies",id:"access-policies",level:3},{value:"Global Access Policies",id:"global-access-policies",level:4},{value:"Component level Access Policies (required to be set on root process group)",id:"component-level-access-policies-required-to-be-set-on-root-process-group",level:4},{value:"Code Coordinates",id:"code-coordinates",level:3}],k={toc:m},N="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(N,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nifi"},"NiFi"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,a.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Capability"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported. See docs for limitations")))),(0,a.kt)("p",null,"This plugin extracts the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NiFi flow as ",(0,a.kt)("inlineCode",{parentName:"li"},"DataFlow")," entity"),(0,a.kt)("li",{parentName:"ul"},"Ingress, egress processors, remote input and output ports as ",(0,a.kt)("inlineCode",{parentName:"li"},"DataJob")," entity"),(0,a.kt)("li",{parentName:"ul"},"Input and output ports receiving remote connections as ",(0,a.kt)("inlineCode",{parentName:"li"},"Dataset")," entity"),(0,a.kt)("li",{parentName:"ul"},"Lineage information between external datasets and ingress/egress processors by analyzing provenance events")),(0,a.kt)("p",null,"Current limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Limited ingress/egress processors are supported",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"S3: ",(0,a.kt)("inlineCode",{parentName:"li"},"ListS3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"FetchS3Object"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"PutS3Object")),(0,a.kt)("li",{parentName:"ul"},"SFTP: ",(0,a.kt)("inlineCode",{parentName:"li"},"ListSFTP"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"FetchSFTP"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"GetSFTP"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"PutSFTP"))))),(0,a.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,a.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[nifi]'\n")),(0,a.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,a.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,a.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,a.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "nifi"\n  config:\n    # Coordinates\n    site_url: "https://localhost:8443/nifi/"\n\n    # Credentials\n    auth: SINGLE_USER\n    username: admin\n    password: password\n\nsink:\n  # sink configs\n')),(0,a.kt)("h3",{id:"config-details"},"Config Details"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Note that a ",(0,a.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,a.kt)("div",{className:"config-table"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"site_url"),"\xa0",(0,a.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"URL for Nifi, ending with /nifi/. e.g. ",(0,a.kt)("a",{parentName:"td",href:"https://mynifi.domain/nifi/"},"https://mynifi.domain/nifi/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"auth"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"Enum"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nifi authentication. must be one of : NO_AUTH, SINGLE_USER, CLIENT_CERT, KERBEROS ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"NO","_","AUTH")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"ca_file"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"One of boolean, string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Path to PEM file containing certs for the root CA(s) for the NiFi")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"client_cert_file"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},'Path to PEM file containing the public certificates for the user/client identity, must be set for auth = "CLIENT_CERT"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"client_key_file"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Path to PEM file containing the client\u2019s secret key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"client_key_password"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The password to decrypt the client_key_file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"password"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},'Nifi password, must be set for auth = "SINGLE_USER"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"provenance_days"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"integer"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"time window to analyze provenance events for external datasets ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"7")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"site_name"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Site name to identify this site with, useful when using input and output ports receiving remote connections ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"default")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"site_url_to_site_name"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"map(str,string)"))),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"username"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},'Nifi username, must be set for auth = "SINGLE_USER"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"env"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"PROD")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-main"},"process_group_pattern"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"regex patterns for filtering process groups ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-prefix"},"process_group_pattern."),(0,a.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"boolean"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"True")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-prefix"},"process_group_pattern."),(0,a.kt)("span",{className:"path-main"},"allow"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"array"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of regex patterns to include in ingestion ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"[","'",".","*","'","]")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-prefix"},"process_group_pattern.allow."),(0,a.kt)("span",{className:"path-main"},"string"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-prefix"},"process_group_pattern."),(0,a.kt)("span",{className:"path-main"},"deny"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"array"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of regex patterns to exclude from ingestion. ",(0,a.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,a.kt)("span",{className:"default-value"},"[","]")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("div",{className:"path-line"},(0,a.kt)("span",{className:"path-prefix"},"process_group_pattern.deny."),(0,a.kt)("span",{className:"path-main"},"string"))," ",(0,a.kt)("div",{className:"type-name-line"},(0,a.kt)("span",{className:"type-name"},"string"))),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)(s.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "NifiSourceConfig",\n  "description": "Any source that produces dataset urns in a single environment should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "site_url": {\n      "title": "Site Url",\n      "description": "URL for Nifi, ending with /nifi/. e.g. https://mynifi.domain/nifi/",\n      "type": "string"\n    },\n    "auth": {\n      "description": "Nifi authentication. must be one of : NO_AUTH, SINGLE_USER, CLIENT_CERT, KERBEROS",\n      "default": "NO_AUTH",\n      "allOf": [\n        {\n          "$ref": "#/definitions/NifiAuthType"\n        }\n      ]\n    },\n    "provenance_days": {\n      "title": "Provenance Days",\n      "description": "time window to analyze provenance events for external datasets",\n      "default": 7,\n      "type": "integer"\n    },\n    "process_group_pattern": {\n      "title": "Process Group Pattern",\n      "description": "regex patterns for filtering process groups",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "site_name": {\n      "title": "Site Name",\n      "description": "Site name to identify this site with, useful when using input and output ports receiving remote connections",\n      "default": "default",\n      "type": "string"\n    },\n    "site_url_to_site_name": {\n      "title": "Site Url To Site Name",\n      "description": "Lookup to find site_name for site_url ending with /nifi/, required if using remote process groups in nifi flow",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "username": {\n      "title": "Username",\n      "description": "Nifi username, must be set for auth = \\"SINGLE_USER\\"",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Nifi password, must be set for auth = \\"SINGLE_USER\\"",\n      "type": "string"\n    },\n    "client_cert_file": {\n      "title": "Client Cert File",\n      "description": "Path to PEM file containing the public certificates for the user/client identity, must be set for auth = \\"CLIENT_CERT\\"",\n      "type": "string"\n    },\n    "client_key_file": {\n      "title": "Client Key File",\n      "description": "Path to PEM file containing the client\\u2019s secret key",\n      "type": "string"\n    },\n    "client_key_password": {\n      "title": "Client Key Password",\n      "description": "The password to decrypt the client_key_file",\n      "type": "string"\n    },\n    "ca_file": {\n      "title": "Ca File",\n      "description": "Path to PEM file containing certs for the root CA(s) for the NiFi",\n      "anyOf": [\n        {\n          "type": "boolean"\n        },\n        {\n          "type": "string"\n        }\n      ]\n    }\n  },\n  "required": [\n    "site_url"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "NifiAuthType": {\n      "title": "NifiAuthType",\n      "description": "An enumeration.",\n      "enum": [\n        "NO_AUTH",\n        "SINGLE_USER",\n        "CLIENT_CERT",\n        "KERBEROS",\n        "BASIC_AUTH"\n      ]\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"This connector supports following authentication mechanisms"),(0,a.kt)("h4",{id:"single-user-authentication-auth-single_user"},"Single User Authentication (",(0,a.kt)("inlineCode",{parentName:"h4"},"auth: SINGLE_USER"),")"),(0,a.kt)("p",null,"Connector will pass this ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," as used on Nifi Login Page over ",(0,a.kt)("inlineCode",{parentName:"p"},"/access/token")," REST endpoint. This mode also works when ",(0,a.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#kerberos_login_identity_provider"},"Kerberos login identity provider")," is set up for Nifi."),(0,a.kt)("h4",{id:"client-certificates-authentication-auth-client_cert"},"Client Certificates Authentication (",(0,a.kt)("inlineCode",{parentName:"h4"},"auth: CLIENT_CERT"),")"),(0,a.kt)("p",null,"Connector will use ",(0,a.kt)("inlineCode",{parentName:"p"},"client_cert_file"),"(required) and ",(0,a.kt)("inlineCode",{parentName:"p"},"client_key_file"),"(optional), ",(0,a.kt)("inlineCode",{parentName:"p"},"client_key_password"),"(optional) for mutual TLS authentication. "),(0,a.kt)("h4",{id:"kerberos-authentication-via-spnego-auth-kerberos"},"Kerberos Authentication via SPNEGO (",(0,a.kt)("inlineCode",{parentName:"h4"},"auth: Kerberos"),")"),(0,a.kt)("p",null,"If nifi has been configured to use ",(0,a.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#kerberos_service"},"Kerberos SPNEGO"),", connector will pass user\u2019s Kerberos ticket to nifi over  ",(0,a.kt)("inlineCode",{parentName:"p"},"/access/kerberos")," REST endpoint. It is assumed that user's Kerberos ticket is already present on the machine on which ingestion runs. This is usually done by installing krb5-user and then running kinit for user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt install krb5-user\nkinit user@REALM\n")),(0,a.kt)("h4",{id:"basic-authentication-auth-basic_auth"},"Basic Authentication (",(0,a.kt)("inlineCode",{parentName:"h4"},"auth: BASIC_AUTH"),")"),(0,a.kt)("p",null,"Connector will use ",(0,a.kt)("a",{parentName:"p",href:"https://requests.readthedocs.io/en/latest/user/authentication/#basic-authentication"},"HTTPBasicAuth")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,a.kt)("h4",{id:"no-authentication-auth-no_auth"},"No Authentication (",(0,a.kt)("inlineCode",{parentName:"h4"},"auth: NO_AUTH"),")"),(0,a.kt)("p",null,"This is useful for testing purposes."),(0,a.kt)("h3",{id:"access-policies"},"Access Policies"),(0,a.kt)("p",null,"This connector requires following access policies to be set in Nifi for ingestion user."),(0,a.kt)("h4",{id:"global-access-policies"},"Global Access Policies"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Policy"),(0,a.kt)("th",{parentName:"tr",align:null},"Privilege"),(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Action"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"view the UI"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows users to view the UI"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/flow")),(0,a.kt)("td",{parentName:"tr",align:null},"R")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query provenance"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows users to submit a Provenance Search and request Event Lineage"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/provenance")),(0,a.kt)("td",{parentName:"tr",align:null},"R")))),(0,a.kt)("h4",{id:"component-level-access-policies-required-to-be-set-on-root-process-group"},"Component level Access Policies (required to be set on root process group)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Policy"),(0,a.kt)("th",{parentName:"tr",align:null},"Privilege"),(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Action"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"view the component"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows users to view component configuration details"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/<component-type>/<component-UUID>")),(0,a.kt)("td",{parentName:"tr",align:null},"R")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"view the data"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows users to view metadata and content for this component in flowfile queues in outbound connections and through provenance events"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/data/<component-type>/<component-UUID>")),(0,a.kt)("td",{parentName:"tr",align:null},"R")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"view provenance"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows users to view provenance events generated by this component"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/provenance-data/<component-type>/<component-UUID>")),(0,a.kt)("td",{parentName:"tr",align:null},"R")))),(0,a.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Class Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.nifi.NifiSource")),(0,a.kt)("li",{parentName:"ul"},"Browse on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/nifi.py"},"GitHub"))),(0,a.kt)("h2",null,"Questions"),(0,a.kt)("p",null,"If you've got any questions on configuring ingestion for NiFi, feel free to ping us on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}h.isMDXComponent=!0}}]);