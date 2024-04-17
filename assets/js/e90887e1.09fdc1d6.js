"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[27909],{19775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),o=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"Custom Properties",slug:"/api/tutorials/custom-properties",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/custom-properties.md"},m="Custom Properties",d={unversionedId:"docs/api/tutorials/custom-properties",id:"version-0.13.1/docs/api/tutorials/custom-properties",title:"Custom Properties",description:"Why Would You Use Custom Properties on Datasets?",source:"@site/versioned_docs/version-0.13.1/docs/api/tutorials/custom-properties.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/custom-properties",permalink:"/docs/api/tutorials/custom-properties",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/custom-properties.md",tags:[],version:"0.13.1",frontMatter:{title:"Custom Properties",slug:"/api/tutorials/custom-properties",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/custom-properties.md"},sidebar:"overviewSidebar",previous:{title:"Description",permalink:"/docs/api/tutorials/descriptions"},next:{title:"ML System",permalink:"/docs/api/tutorials/ml"}},u={},c=[{value:"Why Would You Use Custom Properties on Datasets?",id:"why-would-you-use-custom-properties-on-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add Custom Properties programmatically",id:"add-custom-properties-programmatically",level:2},{value:"Expected Outcome of Adding Custom Properties",id:"expected-outcome-of-adding-custom-properties",level:3},{value:"Add and Remove Custom Properties programmatically",id:"add-and-remove-custom-properties-programmatically",level:2},{value:"Expected Outcome of Add and Remove Operations on Custom Properties",id:"expected-outcome-of-add-and-remove-operations-on-custom-properties",level:3},{value:"Replace Custom Properties programmatically",id:"replace-custom-properties-programmatically",level:2},{value:"Expected Outcome of Replacing Custom Properties",id:"expected-outcome-of-replacing-custom-properties",level:3}],h={toc:c},g="wrapper";function f(e){var{components:t}=e,a=p(e,["components"]);return(0,n.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-properties"},"Custom Properties"),(0,n.kt)("h2",{id:"why-would-you-use-custom-properties-on-datasets"},"Why Would You Use Custom Properties on Datasets?"),(0,n.kt)("p",null,"Custom properties to datasets can help to provide additional information about the data that is not readily available in the standard metadata fields. Custom properties can be used to describe specific attributes of the data, such as the units of measurement used, the date range covered, or the geographical region the data pertains to. This can be particularly helpful when working with large and complex datasets, where additional context can help to ensure that the data is being used correctly and effectively."),(0,n.kt)("p",null,"DataHub models custom properties of a Dataset as a map of key-value pairs of strings."),(0,n.kt)("p",null,"Custom properties can also be used to enable advanced search and discovery capabilities, by allowing users to filter and sort datasets based on specific attributes. This can help users to quickly find and access the data they need, without having to manually review large numbers of datasets."),(0,n.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,n.kt)("p",null,"This guide will show you how to add, remove or replace custom properties on a dataset ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_deleted"),". Here's what each operation means:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add: Add custom properties to a dataset without affecting existing properties"),(0,n.kt)("li",{parentName:"ul"},"Remove: Removing specific properties from the dataset without affecting other properties"),(0,n.kt)("li",{parentName:"ul"},"Replace: Completely replacing the entire property map without affecting other fields that are located in the same aspect. e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"DatasetProperties")," aspect contains ",(0,n.kt)("inlineCode",{parentName:"li"},"customProperties")," as well as other fields like ",(0,n.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"description"),".")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before adding custom properties, you need to ensure the target dataset is already present in your DataHub instance.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,n.kt)("p",null,"In this example, we will add some custom properties ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster_name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"retention_time")," to the dataset ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_deleted"),"."),(0,n.kt)("p",null,"After you have ingested sample data, the dataset ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," should have a custom properties section with ",(0,n.kt)("inlineCode",{parentName:"p"},"encoding")," set to ",(0,n.kt)("inlineCode",{parentName:"p"},"utf-8"),"."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-properties-before.png"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --aspect datasetProperties\n{\n  "datasetProperties": {\n    "customProperties": {\n      "encoding": "utf-8"\n    },\n    "description": "table containing all the users deleted on a single day",\n    "tags": []\n  }\n}\n')),(0,n.kt)("h2",{id:"add-custom-properties-programmatically"},"Add Custom Properties programmatically"),(0,n.kt)("p",null,"The following code adds custom properties ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster_name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"retention_time")," to a dataset named ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," without affecting existing properties."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Adding Custom Properties on Dataset via GraphQL is currently not supported.\nPlease check out ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information,"))),(0,n.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetCustomPropertiesAdd.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.UrnUtils;\nimport com.linkedin.metadata.aspect.patch.builder.DatasetPropertiesPatchBuilder;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n@Slf4j\nclass DatasetCustomPropertiesAdd {\n\n  private DatasetCustomPropertiesAdd() {}\n\n  /**\n   * Adds properties to an existing custom properties aspect without affecting any existing\n   * properties\n   *\n   * @param args\n   * @throws IOException\n   * @throws ExecutionException\n   * @throws InterruptedException\n   */\n  public static void main(String[] args)\n      throws IOException, ExecutionException, InterruptedException {\n    MetadataChangeProposal datasetPropertiesProposal =\n        new DatasetPropertiesPatchBuilder()\n            .urn(UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD"))\n            .addCustomProperty("cluster_name", "datahubproject.acryl.io")\n            .addCustomProperty("retention_time", "2 years")\n            .build();\n\n    String token = "";\n    RestEmitter emitter = RestEmitter.create(b -> b.server("http://localhost:8080").token(token));\n    try {\n      Future<MetadataWriteResponse> response = emitter.emit(datasetPropertiesProposal);\n\n      System.out.println(response.get().getResponseContent());\n    } catch (Exception e) {\n      log.error("Failed to emit metadata to DataHub", e);\n      throw e;\n    } finally {\n      emitter.close();\n    }\n  }\n}\n\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_properties.py\nimport logging\nfrom typing import Union\n\nfrom datahub.configuration.kafka import KafkaProducerConnectionConfig\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter, KafkaEmitterConfig\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.rest_emitter import DataHubRestEmitter\nfrom datahub.specific.dataset import DatasetPatchBuilder\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Get an emitter, either REST or Kafka, this example shows you both\ndef get_emitter() -> Union[DataHubRestEmitter, DatahubKafkaEmitter]:\n    USE_REST_EMITTER = True\n    if USE_REST_EMITTER:\n        gms_endpoint = "http://localhost:8080"\n        return DataHubRestEmitter(gms_server=gms_endpoint)\n    else:\n        kafka_server = "localhost:9092"\n        schema_registry_url = "http://localhost:8081"\n        return DatahubKafkaEmitter(\n            config=KafkaEmitterConfig(\n                connection=KafkaProducerConnectionConfig(\n                    bootstrap=kafka_server, schema_registry_url=schema_registry_url\n                )\n            )\n        )\n\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\nwith get_emitter() as emitter:\n    for patch_mcp in (\n        DatasetPatchBuilder(dataset_urn)\n        .add_custom_property("cluster_name", "datahubproject.acryl.io")\n        .add_custom_property("retention_time", "2 years")\n        .build()\n    ):\n        emitter.emit(patch_mcp)\n\n\nlog.info(f"Added cluster_name, retention_time properties to dataset {dataset_urn}")\n\n')))),(0,n.kt)("h3",{id:"expected-outcome-of-adding-custom-properties"},"Expected Outcome of Adding Custom Properties"),(0,n.kt)("p",null,"You can now see the two new properties are added to ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," and the previous property ",(0,n.kt)("inlineCode",{parentName:"p"},"encoding")," is unchanged."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-properties-added.png"})),(0,n.kt)("p",null,"We can also verify this operation by programmatically checking the ",(0,n.kt)("inlineCode",{parentName:"p"},"datasetProperties")," aspect after running this code using the ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --aspect datasetProperties\n{\n  "datasetProperties": {\n    "customProperties": {\n      "encoding": "utf-8",\n      "cluster_name": "datahubproject.acryl.io",\n      "retention_time": "2 years"\n    },\n    "description": "table containing all the users deleted on a single day",\n    "tags": []\n  }\n}\n')),(0,n.kt)("h2",{id:"add-and-remove-custom-properties-programmatically"},"Add and Remove Custom Properties programmatically"),(0,n.kt)("p",null,"The following code shows you how can add and remove custom properties in the same call. In the following code, we add custom property ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster_name")," and remove property ",(0,n.kt)("inlineCode",{parentName:"p"},"retention_time")," from a dataset named ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," without affecting existing properties."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Adding and Removing Custom Properties on Dataset via GraphQL is currently not supported.\nPlease check out ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information,"))),(0,n.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetCustomPropertiesAddRemove.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.UrnUtils;\nimport com.linkedin.metadata.aspect.patch.builder.DatasetPropertiesPatchBuilder;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n@Slf4j\nclass DatasetCustomPropertiesAddRemove {\n\n  private DatasetCustomPropertiesAddRemove() {}\n\n  /**\n   * Applies Add and Remove property operations on an existing custom properties aspect without\n   * affecting any other properties\n   *\n   * @param args\n   * @throws IOException\n   * @throws ExecutionException\n   * @throws InterruptedException\n   */\n  public static void main(String[] args)\n      throws IOException, ExecutionException, InterruptedException {\n    MetadataChangeProposal datasetPropertiesProposal =\n        new DatasetPropertiesPatchBuilder()\n            .urn(UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD"))\n            .addCustomProperty("cluster_name", "datahubproject.acryl.io")\n            .removeCustomProperty("retention_time")\n            .build();\n\n    String token = "";\n    RestEmitter emitter = RestEmitter.create(b -> b.server("http://localhost:8080").token(token));\n    try {\n      Future<MetadataWriteResponse> response = emitter.emit(datasetPropertiesProposal);\n\n      System.out.println(response.get().getResponseContent());\n    } catch (Exception e) {\n      log.error("Failed to emit metadata to DataHub", e);\n      throw e;\n    } finally {\n      emitter.close();\n    }\n  }\n}\n\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_remove_properties.py\nimport logging\nfrom typing import Union\n\nfrom datahub.configuration.kafka import KafkaProducerConnectionConfig\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter, KafkaEmitterConfig\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.rest_emitter import DataHubRestEmitter\nfrom datahub.specific.dataset import DatasetPatchBuilder\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Get an emitter, either REST or Kafka, this example shows you both\ndef get_emitter() -> Union[DataHubRestEmitter, DatahubKafkaEmitter]:\n    USE_REST_EMITTER = True\n    if USE_REST_EMITTER:\n        gms_endpoint = "http://localhost:8080"\n        return DataHubRestEmitter(gms_server=gms_endpoint)\n    else:\n        kafka_server = "localhost:9092"\n        schema_registry_url = "http://localhost:8081"\n        return DatahubKafkaEmitter(\n            config=KafkaEmitterConfig(\n                connection=KafkaProducerConnectionConfig(\n                    bootstrap=kafka_server, schema_registry_url=schema_registry_url\n                )\n            )\n        )\n\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\nwith get_emitter() as emitter:\n    for patch_mcp in (\n        DatasetPatchBuilder(dataset_urn)\n        .add_custom_property("cluster_name", "datahubproject.acryl.io")\n        .remove_custom_property("retention_time")\n        .build()\n    ):\n        emitter.emit(patch_mcp)\n\n\nlog.info(\n    f"Added cluster_name property, removed retention_time property from dataset {dataset_urn}"\n)\n\n')))),(0,n.kt)("h3",{id:"expected-outcome-of-add-and-remove-operations-on-custom-properties"},"Expected Outcome of Add and Remove Operations on Custom Properties"),(0,n.kt)("p",null,"You can now see the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster_name")," property is added to ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"retention_time")," property is removed."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-properties-added-removed.png"})),(0,n.kt)("p",null,"We can also verify this operation programmatically by checking the ",(0,n.kt)("inlineCode",{parentName:"p"},"datasetProperties")," aspect using the ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --aspect datasetProperties\n{\n  "datasetProperties": {\n    "customProperties": {\n      "encoding": "utf-8",\n      "cluster_name": "datahubproject.acryl.io"\n    },\n    "description": "table containing all the users deleted on a single day",\n    "tags": []\n  }\n}\n')),(0,n.kt)("h2",{id:"replace-custom-properties-programmatically"},"Replace Custom Properties programmatically"),(0,n.kt)("p",null,"The following code replaces the current custom properties with a new properties map that includes only the properties ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster_name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"retention_time"),". After running this code, the previous ",(0,n.kt)("inlineCode",{parentName:"p"},"encoding")," property will be removed."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Replacing Custom Properties on Dataset via GraphQL is currently not supported.\nPlease check out ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information,"))),(0,n.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetCustomPropertiesReplace.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.UrnUtils;\nimport com.linkedin.metadata.aspect.patch.builder.DatasetPropertiesPatchBuilder;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n@Slf4j\nclass DatasetCustomPropertiesReplace {\n\n  private DatasetCustomPropertiesReplace() {}\n\n  /**\n   * Replaces the existing custom properties map with a new map. Fields like dataset name,\n   * description etc remain unchanged.\n   *\n   * @param args\n   * @throws IOException\n   */\n  public static void main(String[] args) throws IOException {\n    Map<String, String> customPropsMap = new HashMap<>();\n    customPropsMap.put("cluster_name", "datahubproject.acryl.io");\n    customPropsMap.put("retention_time", "2 years");\n    MetadataChangeProposal datasetPropertiesProposal =\n        new DatasetPropertiesPatchBuilder()\n            .urn(UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD"))\n            .setCustomProperties(customPropsMap)\n            .build();\n\n    String token = "";\n    RestEmitter emitter = RestEmitter.create(b -> b.server("http://localhost:8080").token(token));\n\n    try {\n      Future<MetadataWriteResponse> response = emitter.emit(datasetPropertiesProposal);\n      System.out.println(response.get().getResponseContent());\n    } catch (Exception e) {\n      log.error("Failed to emit metadata to DataHub", e);\n    } finally {\n      emitter.close();\n    }\n  }\n}\n\n'))),(0,n.kt)(o.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_replace_properties.py\nimport logging\nfrom typing import Union\n\nfrom datahub.configuration.kafka import KafkaProducerConnectionConfig\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter, KafkaEmitterConfig\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.rest_emitter import DataHubRestEmitter\nfrom datahub.specific.dataset import DatasetPatchBuilder\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Get an emitter, either REST or Kafka, this example shows you both\ndef get_emitter() -> Union[DataHubRestEmitter, DatahubKafkaEmitter]:\n    USE_REST_EMITTER = True\n    if USE_REST_EMITTER:\n        gms_endpoint = "http://localhost:8080"\n        return DataHubRestEmitter(gms_server=gms_endpoint)\n    else:\n        kafka_server = "localhost:9092"\n        schema_registry_url = "http://localhost:8081"\n        return DatahubKafkaEmitter(\n            config=KafkaEmitterConfig(\n                connection=KafkaProducerConnectionConfig(\n                    bootstrap=kafka_server, schema_registry_url=schema_registry_url\n                )\n            )\n        )\n\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\nproperty_map_to_set = {\n    "cluster_name": "datahubproject.acryl.io",\n    "retention_time": "2 years",\n}\n\nwith get_emitter() as emitter:\n    for patch_mcp in (\n        DatasetPatchBuilder(dataset_urn)\n        .set_custom_properties(property_map_to_set)\n        .build()\n    ):\n        emitter.emit(patch_mcp)\n\n\nlog.info(\n    f"Replaced custom properties on dataset {dataset_urn} as {property_map_to_set}"\n)\n\n')))),(0,n.kt)("h3",{id:"expected-outcome-of-replacing-custom-properties"},"Expected Outcome of Replacing Custom Properties"),(0,n.kt)("p",null,"You can now see the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster_name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"retention_time")," properties are added to ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," but the previous ",(0,n.kt)("inlineCode",{parentName:"p"},"encoding")," property is no longer present."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-properties-replaced.png"})),(0,n.kt)("p",null,"We can also verify this operation programmatically by checking the ",(0,n.kt)("inlineCode",{parentName:"p"},"datasetProperties")," aspect using the ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --aspect datasetProperties\n{\n  "datasetProperties": {\n    "customProperties": {\n      "cluster_name": "datahubproject.acryl.io",\n      "retention_time": "2 years"\n    },\n    "description": "table containing all the users deleted on a single day",\n    "tags": []\n  }\n}\n')))}f.isMDXComponent=!0}}]);