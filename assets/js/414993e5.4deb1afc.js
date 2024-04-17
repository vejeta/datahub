"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[11774],{84110:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>p,toc:()=>c});t(67294);var n=t(3905),r=t(51715),o=t(7626);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const m={title:"Domains",slug:"/api/tutorials/domains",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/domains.md"},d="Domains",p={unversionedId:"docs/api/tutorials/domains",id:"version-0.13.1/docs/api/tutorials/domains",title:"Domains",description:"Why Would You Use Domains?",source:"@site/versioned_docs/version-0.13.1/docs/api/tutorials/domains.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/domains",permalink:"/docs/api/tutorials/domains",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/domains.md",tags:[],version:"0.13.1",frontMatter:{title:"Domains",slug:"/api/tutorials/domains",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/domains.md"},sidebar:"overviewSidebar",previous:{title:"Ownership",permalink:"/docs/api/tutorials/owners"},next:{title:"Deprecation",permalink:"/docs/api/tutorials/deprecation"}},u={},c=[{value:"Why Would You Use Domains?",id:"why-would-you-use-domains",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Domain",id:"create-domain",level:2},{value:"Expected Outcomes of Creating Domain",id:"expected-outcomes-of-creating-domain",level:3},{value:"Creating a Nested Domain",id:"creating-a-nested-domain",level:3},{value:"Read Domains",id:"read-domains",level:2},{value:"Add Domains",id:"add-domains",level:2},{value:"Expected Outcomes of Adding Domain",id:"expected-outcomes-of-adding-domain",level:3},{value:"Remove Domains",id:"remove-domains",level:2},{value:"Expected Outcomes of Removing Domain",id:"expected-outcomes-of-removing-domain",level:3}],h={toc:c},g="wrapper";function b(e){var{components:a}=e,t=l(e,["components"]);return(0,n.kt)(g,s(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){i(e,a,t[a])}))}return e}({},h,t),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"domains"},"Domains"),(0,n.kt)("h2",{id:"why-would-you-use-domains"},"Why Would You Use Domains?"),(0,n.kt)("p",null,"Domains are curated, top-level folders or categories where related assets can be explicitly grouped. Management of Domains can be centralized, or distributed out to Domain owners Currently, an asset can belong to only one Domain at a time.\nFor more information about domains, refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/domains"},"About DataHub Domains"),"."),(0,n.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,n.kt)("p",null,"This guide will show you how to"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a domain."),(0,n.kt)("li",{parentName:"ul"},"Read domains attached to a dataset."),(0,n.kt)("li",{parentName:"ul"},"Add a dataset to a domain"),(0,n.kt)("li",{parentName:"ul"},"Remove the domain from a dataset.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,n.kt)("h2",{id:"create-domain"},"Create Domain"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation createDomain {\n  createDomain(input: { name: "Marketing", description: "Entities related to the marketing department" })\n}\n')),(0,n.kt)("p",null,"If you see the following response, the operation was successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createDomain": "<domain_urn>"\n  },\n  "extensions": {}\n}\n'))),(0,n.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createDomain { createDomain(input: { name: \\"Marketing\\", description: \\"Entities related to the marketing department.\\" }) }", "variables":{}}\'\n')),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "createDomain": "<domain_urn>" }, "extensions": {} }\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_domain.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_domain_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.metadata.schema_classes import ChangeTypeClass, DomainPropertiesClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\ndomain_urn = make_domain_urn("marketing")\ndomain_properties_aspect = DomainPropertiesClass(\n    name="Marketing", description="Entities related to the marketing department"\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityType="domain",\n    changeType=ChangeTypeClass.UPSERT,\n    entityUrn=domain_urn,\n    aspect=domain_properties_aspect,\n)\n\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\nlog.info(f"Created domain {domain_urn}")\n\n')))),(0,n.kt)("h3",{id:"expected-outcomes-of-creating-domain"},"Expected Outcomes of Creating Domain"),(0,n.kt)("p",null,"You can now see ",(0,n.kt)("inlineCode",{parentName:"p"},"Marketing")," domain has been created under ",(0,n.kt)("inlineCode",{parentName:"p"},"Govern > Domains"),"."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/domain-created.png"})),(0,n.kt)("h3",{id:"creating-a-nested-domain"},"Creating a Nested Domain"),(0,n.kt)("p",null,"You can also create a nested domain, or a domain within another domain."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation createDomain {\n  createDomain(input: { name: "Verticals", description: "An optional description", parentDomain: "urn:li:domain:marketing" })\n}\n'))),(0,n.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createDomain { createDomain(input: { name: \\"Verticals\\", description: \\"Entities related to the verticals sub-domain.\\", parentDomain: \\"urn:li:domain:marketing\\" }) }", "variables":{}}\'\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_nested_domain.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_domain_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.metadata.schema_classes import ChangeTypeClass, DomainPropertiesClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\ndomain_urn = make_domain_urn("marketing")\ndomain_properties_aspect = DomainPropertiesClass(\n    name="Verticals",\n    description="Entities related to the verticals sub-domain",\n    parentDomain="urn:li:domain:marketing",\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityType="domain",\n    changeType=ChangeTypeClass.UPSERT,\n    entityUrn=domain_urn,\n    aspect=domain_properties_aspect,\n)\n\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\nlog.info(f"Created domain {domain_urn}")\n\n')))),(0,n.kt)("p",null,'This query will create a new domain, "Verticals", under the "Marketing" domain.'),(0,n.kt)("h2",{id:"read-domains"},"Read Domains"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)") {\n    domain {\n      associatedUrn\n      domain {\n        urn\n        properties {\n          name\n        }\n      }\n    }\n  }\n}\n')),(0,n.kt)("p",null,"If you see the following response, the operation was successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "dataset": {\n      "domain": {\n        "associatedUrn": "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        "domain": {\n          "urn": "urn:li:domain:71b3bf7b-2e3f-4686-bfe1-93172c8c4e10",\n          "properties": {\n            "name": "Marketing"\n          }\n        }\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{ dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") { domain { associatedUrn domain { urn properties { name } } } } }\", \"variables\":{}}'\n")),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "domain": {\n        "associatedUrn": "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        "domain": {\n          "urn": "urn:li:domain:71b3bf7b-2e3f-4686-bfe1-93172c8c4e10",\n          "properties": { "name": "Marketing" }\n        }\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_domain.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import DomainsClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["domains"],\n    aspect_types=[DomainsClass],\n)\n\nprint(result)\n\n')))),(0,n.kt)("h2",{id:"add-domains"},"Add Domains"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation setDomain {\n    setDomain(domainUrn: "urn:li:domain:marketing", entityUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)")\n}\n')),(0,n.kt)("p",null,"If you see the following response, the operation was successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "setDomain": true\n  },\n  "extensions": {}\n}\n'))),(0,n.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation setDomain { setDomain(entityUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)", domainUrn: "urn:li:domain:marketing")) }", "variables":{}}\'\n')),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "setDomain": true }, "extensions": {} }\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_domain_execute_graphql.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation setDomain {\n    setDomain(domainUrn: "urn:li:domain:marketing", entityUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)")\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,n.kt)("h3",{id:"expected-outcomes-of-adding-domain"},"Expected Outcomes of Adding Domain"),(0,n.kt)("p",null,"You can now see ",(0,n.kt)("inlineCode",{parentName:"p"},"Marketing")," domain has been added to the dataset."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/domain-added.png"})),(0,n.kt)("h2",{id:"remove-domains"},"Remove Domains"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation unsetDomain {\n    unsetDomain(\n      entityUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"\n    )\n}\n')),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "removeDomain": true\n  },\n  "extensions": {}\n}\n'))),(0,n.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"mutation unsetDomain { unsetDomain(entityUrn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") }\", \"variables\":{}}'\n"))),(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_remove_domain_execute_graphql.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation unsetDomain {\n    unsetDomain(\n      entityUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"\n    )\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,n.kt)("h3",{id:"expected-outcomes-of-removing-domain"},"Expected Outcomes of Removing Domain"),(0,n.kt)("p",null,"You can now see a domain ",(0,n.kt)("inlineCode",{parentName:"p"},"Marketing")," has been removed from the ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_created")," dataset."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/domain-removed.png"})))}b.isMDXComponent=!0}}]);