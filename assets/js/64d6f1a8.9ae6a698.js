"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[30435],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,m=g["".concat(i,".").concat(d)]||g[d]||p[d]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>g});n(96540);var a=n(15680);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Snowflake DMF Assertions [BETA]",slug:"/assertions/snowflake/snowflake_dmfs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/assertions/snowflake/snowflake_dmfs.md"},i="Snowflake DMF Assertions [BETA]",u={unversionedId:"docs/assertions/snowflake/snowflake_dmfs",id:"docs/assertions/snowflake/snowflake_dmfs",title:"Snowflake DMF Assertions [BETA]",description:"The DataHub Open Assertion Compiler allows you to define your Data Quality assertions in a simple YAML format, and then compile them to be executed by Snowflake Data Metric Functions.",source:"@site/genDocs/docs/assertions/snowflake/snowflake_dmfs.md",sourceDirName:"docs/assertions/snowflake",slug:"/assertions/snowflake/snowflake_dmfs",permalink:"/docs/assertions/snowflake/snowflake_dmfs",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/assertions/snowflake/snowflake_dmfs.md",tags:[],version:"current",frontMatter:{title:"Snowflake DMF Assertions [BETA]",slug:"/assertions/snowflake/snowflake_dmfs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/assertions/snowflake/snowflake_dmfs.md"},sidebar:"overviewSidebar",previous:{title:"Open Data Quality Assertions Specification",permalink:"/docs/assertions/open-assertions-spec"},next:{title:"Documentation Propagation Automation",permalink:"/docs/automation/docs-propagation"}},c={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Permissions",id:"permissions",level:3},{value:"Supported Assertion Types",id:"supported-assertion-types",level:2},{value:"Creating Snowflake DMF Assertions",id:"creating-snowflake-dmf-assertions",level:2},{value:"Step 1. Define your Data Quality assertions using Assertion YAML files",id:"step-1-define-your-data-quality-assertions-using-assertion-yaml-files",level:3},{value:"Step 2. Register your assertions with DataHub",id:"step-2-register-your-assertions-with-datahub",level:3},{value:"Step 3. Compile the assertions into Snowflake DMFs using the DataHub CLI",id:"step-3-compile-the-assertions-into-snowflake-dmfs-using-the-datahub-cli",level:3},{value:"Step 4. Register the compiled DMFs in your Snowflake environment",id:"step-4-register-the-compiled-dmfs-in-your-snowflake-environment",level:3},{value:"Step 5. Run ingestion to report the results back into DataHub",id:"step-5-run-ingestion-to-report-the-results-back-into-datahub",level:3},{value:"Caveats",id:"caveats",level:2},{value:"FAQ",id:"faq",level:2}],p={toc:g},d="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(d,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"snowflake-dmf-assertions-beta"},"Snowflake DMF Assertions ","[BETA]"),(0,a.yg)("p",null,"The DataHub Open Assertion Compiler allows you to define your Data Quality assertions in a simple YAML format, and then compile them to be executed by Snowflake Data Metric Functions.\nOnce compiled, you'll be able to register the compiled DMFs in your Snowflake environment, and extract their results them as part of your normal ingestion process for DataHub.\nResults of Snowflake DMF assertions will be reported as normal Assertion Results, viewable on a historical timeline in the context\nof the table with which they are associated."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You must have a Snowflake Enterprise account, where the DMFs feature is enabled."),(0,a.yg)("li",{parentName:"ul"},"You must have the necessary permissions to provision DMFs in your Snowflake environment (see below)"),(0,a.yg)("li",{parentName:"ul"},"You must have the necessary permissions to query the DMF results in your Snowflake environment (see below)"),(0,a.yg)("li",{parentName:"ul"},"You must have DataHub instance with Snowflake metadata ingested. If you do not have existing snowflake ingestion, refer ",(0,a.yg)("a",{parentName:"li",href:"/docs/quick-ingestion-guides/snowflake/overview"},"Snowflake Quickstart Guide")," to get started."),(0,a.yg)("li",{parentName:"ul"},"You must have DataHub CLI installed and run ",(0,a.yg)("a",{parentName:"li",href:"/docs/cli/#init"},(0,a.yg)("inlineCode",{parentName:"a"},"datahub init")),".")),(0,a.yg)("h3",{id:"permissions"},"Permissions"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Permissions required for registering DMFs")),(0,a.yg)("p",null,"According to the latest Snowflake docs, here are the permissions the service account performing the\nDMF registration and ingestion must have:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Privilege"),(0,a.yg)("th",{parentName:"tr",align:null},"Object"),(0,a.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"USAGE"),(0,a.yg)("td",{parentName:"tr",align:null},"Database, schema"),(0,a.yg)("td",{parentName:"tr",align:null},"Database and schema where snowflake DMFs will be created. This is configured in compile command described below.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"CREATE FUNCTION"),(0,a.yg)("td",{parentName:"tr",align:null},"Schema"),(0,a.yg)("td",{parentName:"tr",align:null},"This privilege enables creating new DMF in schema configured in compile command.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"EXECUTE DATA METRIC FUNCTION"),(0,a.yg)("td",{parentName:"tr",align:null},"Account"),(0,a.yg)("td",{parentName:"tr",align:null},"This privilege enables you to control which roles have access to server-agnostic compute resources to call the system DMF.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"USAGE"),(0,a.yg)("td",{parentName:"tr",align:null},"Database, schema"),(0,a.yg)("td",{parentName:"tr",align:null},"These objects are the database and schema that contain the referenced table in the query.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"OWNERSHIP"),(0,a.yg)("td",{parentName:"tr",align:null},"Table"),(0,a.yg)("td",{parentName:"tr",align:null},"This privilege enables you to associate a DMF with a referenced table.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"USAGE"),(0,a.yg)("td",{parentName:"tr",align:null},"DMF"),(0,a.yg)("td",{parentName:"tr",align:null},"This privilege enables calling the DMF in schema configured in compile command.")))),(0,a.yg)("p",null,"and the roles that must be granted:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Role"),(0,a.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SNOWFLAKE.DATA_METRIC_USER"),(0,a.yg)("td",{parentName:"tr",align:null},"To use System DMFs")))),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Permissions required for running DMFs (scheduled DMFs run with table owner's role)")),(0,a.yg)("p",null,"Because scheduled DMFs run with the role of the table owner, the table owner must have the following privileges:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Privilege"),(0,a.yg)("th",{parentName:"tr",align:null},"Object"),(0,a.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"USAGE"),(0,a.yg)("td",{parentName:"tr",align:null},"Database, schema"),(0,a.yg)("td",{parentName:"tr",align:null},"Database and schema where snowflake DMFs will be created. This is configured in compile command described below.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"USAGE"),(0,a.yg)("td",{parentName:"tr",align:null},"DMF"),(0,a.yg)("td",{parentName:"tr",align:null},"This privilege enables calling the DMF in schema configured in compile power.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"EXECUTE DATA METRIC FUNCTION"),(0,a.yg)("td",{parentName:"tr",align:null},"Account"),(0,a.yg)("td",{parentName:"tr",align:null},"This privilege enables you to control which roles have access to server-agnostic compute resources to call the system DMF.")))),(0,a.yg)("p",null,"and the roles that must be granted:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Role"),(0,a.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SNOWFLAKE.DATA_METRIC_USER"),(0,a.yg)("td",{parentName:"tr",align:null},"To use System DMFs")))),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Permissions required for querying DMF results")),(0,a.yg)("p",null,"In addition, the service account that will be executing DataHub Ingestion, and querying the DMF results, must have been granted the following system application roles:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Role"),(0,a.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"DATA_QUALITY_MONITORING_VIEWER"),(0,a.yg)("td",{parentName:"tr",align:null},"Query the DMF results table")))),(0,a.yg)("p",null,"To learn more about Snowflake DMFs and the privileges required to provision and query them, see the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-quality-intro"},"Snowflake documentation"),"."),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Example: Granting Permissions")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'-- setup permissions to <assertion-registration-role> to create DMFs and associate DMFs with table\ngrant usage on database "<dmf-database>" to role "<assertion-service-role>"\ngrant usage on schema "<dmf-database>.<dmf-schema>" to role "<assertion-service-role>"\ngrant create function on schema "<dmf-database>.<dmf-schema>" to role "<assertion-service-role>"\n-- grant ownership + rest of permissions to <assertion-service-role>\ngrant role "<table-owner-role>" to role "<assertion-service-role>"\n\n-- setup permissions for <table-owner-role> to run DMFs on schedule\ngrant usage on database "<dmf-database>" to role "<table-owner-role>"\ngrant usage on schema "<dmf-database>.<dmf-schema>" to role "<table-owner-role>"\ngrant usage on all functions in "<dmf-database>.<dmf-schema>" to role "<table-owner-role>"\ngrant usage on future functions in "<dmf-database>.<dmf-schema>" to role "<table-owner-role>"\ngrant database role SNOWFLAKE.DATA_METRIC_USER to role "<table-owner-role>"\ngrant execute data metric function on account to role "<table-owner-role>"\n\n-- setup permissions for <datahub-role> to query DMF results \ngrant application role SNOWFLAKE.DATA_QUALITY_MONITORING_VIEWER to role "<datahub_role>"\n')),(0,a.yg)("h2",{id:"supported-assertion-types"},"Supported Assertion Types"),(0,a.yg)("p",null,"The following assertion types are currently supported by the DataHub Snowflake DMF Assertion Compiler:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/managed-datahub/observe/freshness-assertions"},"Freshness")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/managed-datahub/observe/volume-assertions"},"Volume")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/managed-datahub/observe/column-assertions"},"Column")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/managed-datahub/observe/custom-sql-assertions"},"Custom SQL"))),(0,a.yg)("p",null,"Note that Schema Assertions are not currently supported."),(0,a.yg)("h2",{id:"creating-snowflake-dmf-assertions"},"Creating Snowflake DMF Assertions"),(0,a.yg)("p",null,"The process for declaring and running assertions backend by Snowflake DMFs consists of a few steps, which will be outlined\nin the following sections."),(0,a.yg)("h3",{id:"step-1-define-your-data-quality-assertions-using-assertion-yaml-files"},"Step 1. Define your Data Quality assertions using Assertion YAML files"),(0,a.yg)("p",null,"See the section ",(0,a.yg)("strong",{parentName:"p"},"Declaring Assertions in YAML")," below for examples of how to define assertions in YAML."),(0,a.yg)("h3",{id:"step-2-register-your-assertions-with-datahub"},"Step 2. Register your assertions with DataHub"),(0,a.yg)("p",null,"Use the DataHub CLI to register your assertions with DataHub, so they become visible in the DataHub UI:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"datahub assertions upsert -f examples/library/assertions_configuration.yml\n")),(0,a.yg)("h3",{id:"step-3-compile-the-assertions-into-snowflake-dmfs-using-the-datahub-cli"},"Step 3. Compile the assertions into Snowflake DMFs using the DataHub CLI"),(0,a.yg)("p",null,"Next, we'll use the ",(0,a.yg)("inlineCode",{parentName:"p"},"assertions compile")," command to generate the SQL code for the Snowflake DMFs,\nwhich can then be registered in Snowflake."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"datahub assertions compile -f examples/library/assertions_configuration.yml -p snowflake -x DMF_SCHEMA=<db>.<schema-where-DMF-should-live>\n")),(0,a.yg)("p",null,"Two files will be generated as output of running this command: "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dmf_definitions.sql"),": This file contains the SQL code for the DMFs that will be registered in Snowflake."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dmf_associations.sql"),": This file contains the SQL code for associating the DMFs with the target tables in Snowflake.")),(0,a.yg)("p",null,"By default in a folder called ",(0,a.yg)("inlineCode",{parentName:"p"},"target"),". You can use config option ",(0,a.yg)("inlineCode",{parentName:"p"},"-o <output_folder>")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"compile")," command to write these compile artifacts in another folder."),(0,a.yg)("p",null,"Each of these artifacts will be important for the next steps in the process."),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"dmf_definitions.sql")),(0,a.yg)("p",null,"This file stores the SQL code for the DMFs that will be registered in Snowflake, generated\nfrom your YAML assertion definitions during the compile step."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Example dmf_definitions.sql\n\n-- Start of Assertion 5c32eef47bd763fece7d21c7cbf6c659\n\n            CREATE or REPLACE DATA METRIC FUNCTION\n            test_db.datahub_dmfs.datahub__5c32eef47bd763fece7d21c7cbf6c659 (ARGT TABLE(col_date DATE))\n            RETURNS NUMBER\n            COMMENT = 'Created via DataHub for assertion urn:li:assertion:5c32eef47bd763fece7d21c7cbf6c659 of type volume'\n            AS\n            $$\n            select case when metric <= 1000 then 1 else 0 end from (select count(*) as metric from TEST_DB.PUBLIC.TEST_ASSERTIONS_ALL_TIMES )\n            $$;\n\n-- End of Assertion 5c32eef47bd763fece7d21c7cbf6c659\n....\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"dmf_associations.sql")),(0,a.yg)("p",null,"This file stores the SQL code for associating with the target table,\nalong with scheduling the generated DMFs to run on at particular times."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Example dmf_associations.sql\n\n-- Start of Assertion 5c32eef47bd763fece7d21c7cbf6c659\n\n            ALTER TABLE TEST_DB.PUBLIC.TEST_ASSERTIONS_ALL_TIMES SET DATA_METRIC_SCHEDULE = 'TRIGGER_ON_CHANGES';\n            ALTER TABLE TEST_DB.PUBLIC.TEST_ASSERTIONS_ALL_TIMES ADD DATA METRIC FUNCTION test_db.datahub_dmfs.datahub__5c32eef47bd763fece7d21c7cbf6c659 ON (col_date);\n\n-- End of Assertion 5c32eef47bd763fece7d21c7cbf6c659\n....\n")),(0,a.yg)("h3",{id:"step-4-register-the-compiled-dmfs-in-your-snowflake-environment"},"Step 4. Register the compiled DMFs in your Snowflake environment"),(0,a.yg)("p",null,"Next, you'll need to run the generated SQL from the files output in Step 3 in Snowflake."),(0,a.yg)("p",null,"You can achieve this either by running the SQL files directly in the Snowflake UI, or by using the SnowSQL CLI tool:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"snowsql -f dmf_definitions.sql\nsnowsql -f dmf_associations.sql\n")),(0,a.yg)("p",null,":::NOTE\nScheduling Data Metric Function on table incurs Serverless Credit Usage in Snowflake. Refer ",(0,a.yg)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-quality-intro#billing-and-pricing"},"Billing and Pricing")," for more details.\nPlease ensure you DROP Data Metric Function created via dmf_associations.sql if the assertion is no longer in use.\n:::"),(0,a.yg)("h3",{id:"step-5-run-ingestion-to-report-the-results-back-into-datahub"},"Step 5. Run ingestion to report the results back into DataHub"),(0,a.yg)("p",null,"Once you've registered the DMFs, they will be automatically executed, either when the target table is updated or on a fixed\nschedule."),(0,a.yg)("p",null,"To report the results of the generated Data Quality assertions back into DataHub, you'll need to run the DataHub ingestion process with a special configuration\nflag: ",(0,a.yg)("inlineCode",{parentName:"p"},"include_assertion_results: true"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# Your DataHub Snowflake Recipe\nsource:\n  type: snowflake\n  config:\n    # ...\n    include_assertion_results: True\n    # ...\n")),(0,a.yg)("p",null,"During ingestion we will query for the latest DMF results stored in Snowflake, convert them into DataHub Assertion Results, and report the results back into DataHub during your ingestion process\neither via CLI or the UI visible as normal assertions. "),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"datahub ingest -c snowflake.yml")),(0,a.yg)("h2",{id:"caveats"},"Caveats"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Currently, Snowflake supports at most 1000 DMF-table associations at the moment so you can not define more than 1000 assertions for snowflake."),(0,a.yg)("li",{parentName:"ul"},"Currently, Snowflake does not allow JOIN queries or non-deterministic functions in DMF definition so you can not use these in SQL for SQL assertion or in filters section."),(0,a.yg)("li",{parentName:"ul"},"Currently, all DMFs scheduled on a table must follow same exact schedule, so you can not set assertions on same table to run on different schedules."),(0,a.yg)("li",{parentName:"ul"},"Currently, DMFs are only supported for regular tables and not dynamic or external tables.")),(0,a.yg)("h2",{id:"faq"},"FAQ"),(0,a.yg)("p",null,"Coming soon!"))}m.isMDXComponent=!0}}]);