"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[75690],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>h});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),u=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=n,h=c["".concat(p,".").concat(m)]||c[m]||g[m]||o;return t?r.createElement(h,i(i({ref:a},s),{},{components:t})):r.createElement(h,i({ref:a},s))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},40570:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});t(67294);var r=t(3905);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={title:"Configuring Authorization with Apache Ranger",hide_title:!0,sidebar_label:"Configuring Authorization with Apache Ranger",slug:"/how/configuring-authorization-with-apache-ranger",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/configuring-authorization-with-apache-ranger.md"},p="Configuring Authorization with Apache Ranger",u={unversionedId:"docs/how/configuring-authorization-with-apache-ranger",id:"version-0.13.1/docs/how/configuring-authorization-with-apache-ranger",title:"Configuring Authorization with Apache Ranger",description:"DataHub integration with Apache Ranger allows DataHub Authorization policies to be controlled inside Apache Ranger.",source:"@site/versioned_docs/version-0.13.1/docs/how/configuring-authorization-with-apache-ranger.md",sourceDirName:"docs/how",slug:"/how/configuring-authorization-with-apache-ranger",permalink:"/docs/how/configuring-authorization-with-apache-ranger",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/configuring-authorization-with-apache-ranger.md",tags:[],version:"0.13.1",frontMatter:{title:"Configuring Authorization with Apache Ranger",hide_title:!0,sidebar_label:"Configuring Authorization with Apache Ranger",slug:"/how/configuring-authorization-with-apache-ranger",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/configuring-authorization-with-apache-ranger.md"},sidebar:"overviewSidebar",previous:{title:"Removing Metadata from DataHub",permalink:"/docs/how/delete-metadata"},next:{title:"Taking backup of DataHub",permalink:"/docs/how/backup-datahub"}},s={},c=[{value:"Configuring your Apache Ranger Deployment",id:"configuring-your-apache-ranger-deployment",level:2},{value:"Defining a Ranger Policy",id:"defining-a-ranger-policy",level:3},{value:"Configuring your DataHub Deployment",id:"configuring-your-datahub-deployment",level:2},{value:"Docker",id:"docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Validating your Setup",id:"validating-your-setup",level:3},{value:"Revert Configuration of your Apache Ranger Deployment",id:"revert-configuration-of-your-apache-ranger-deployment",level:2},{value:"Revert Configuration of your DataHub Deployment",id:"revert-configuration-of-your-datahub-deployment",level:2},{value:"Docker",id:"docker-1",level:3},{value:"Kubernetes",id:"kubernetes-1",level:3},{value:"Validating your Setup",id:"validating-your-setup-1",level:3}],g={toc:c},m="wrapper";function h(e){var{components:a}=e,t=i(e,["components"]);return(0,r.kt)(m,o(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){n(e,a,t[a])}))}return e}({},g,t),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-authorization-with-apache-ranger"},"Configuring Authorization with Apache Ranger"),(0,r.kt)("p",null,"DataHub integration with Apache Ranger allows DataHub Authorization policies to be controlled inside Apache Ranger.\nAdmins can create users, groups and roles on Apache Ranger, and then assign them to Ranger policies to control the authorization of requests to DataHub."),(0,r.kt)("p",null,"We'll break down configuration of the DataHub Apache Ranger Plugin into two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configuring your Apache Ranger Deployment"),(0,r.kt)("li",{parentName:"ol"},"Configuring your DataHub Deployment")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Disclaimer: All configurations shown in this documented were tested against ",(0,r.kt)("a",{parentName:"p",href:"https://privacera.com/"},"Privacera Platform")," v6.3.0.1.")),(0,r.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User identifier present in CorpRole URN should be the name of the AD/LDAP user. For example in URN ",(0,r.kt)("strong",{parentName:"li"},"urn:li:corpuser:datahub"),", the ",(0,r.kt)("strong",{parentName:"li"},"datahub")," should present as name of user in AD/LDAP  "),(0,r.kt)("li",{parentName:"ul"},"Apache Ranger and DataHub are configured for authentication via same IDP (either LDAP + JaaS or OIDC SSO)"),(0,r.kt)("li",{parentName:"ul"},"Apache Ranger service available via HTTP"),(0,r.kt)("li",{parentName:"ul"},"Basic authentication is enabled on Apache Ranger Service")),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("h2",{id:"configuring-your-apache-ranger-deployment"},"Configuring your Apache Ranger Deployment"),(0,r.kt)("p",null,"Perform the following steps to configure an Apache Ranger deployment to support creating access policies compatible with DataHub.\nFor kubernetes example command, please replace the ","<","ranger-pod-name",">"," and ","<","namespace",">"," as per your environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("strong",{parentName:"p"},"datahub-ranger-plugin")," from ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.acryl/datahub-ranger-plugin"},"Maven"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Create a "datahub" directory inside the "ranger-plugins" directory where Apache Ranger is deployed. For example, to do this in a Privacera container'),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("em",{parentName:"p"},"Docker command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec privacera_ranger_1 mkdir ews/webapp/WEB-INF/classes/ranger-plugins/datahub\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Kubernetes command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec <ranger-pod-name> mkdir ews/webapp/WEB-INF/classes/ranger-plugins/datahub -n <namespace>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the downloaded ",(0,r.kt)("strong",{parentName:"p"},"datahub-ranger-plugin"),' jar into the newly created "datahub" directory. For example, to do this in a Privacera container'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Docker command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp datahub-ranger-plugin-<version>.jar privacera_ranger_1:/opt/ranger/ranger-2.1.0-admin/ews/webapp/WEB-INF/classes/ranger-plugins/datahub/\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Kubernetes command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl cp datahub-ranger-plugin-<version>.jar <ranger-pod-name>:/opt/ranger/ranger-2.1.0-admin/ews/webapp/WEB-INF/classes/ranger-plugins/datahub/ -n <namespace>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-ranger-auth-plugin/blob/main/datahub-ranger-plugin/conf/servicedef.json"},"service definition file"),". This service definition is the ranger service definition JSON file for datahub-ranger-plugin-","<","version",">",".jar ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Register the downloaded service definition file with Apache Ranger Service. To do this executes the below curl command ",(0,r.kt)("br",null),"\nReplace variables with corresponding values in curl command"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"<","ranger-admin-username",">"),(0,r.kt)("li",{parentName:"ul"},"<","ranger-admin-password",">"),(0,r.kt)("li",{parentName:"ul"},"<","ranger-host",">",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -u <ranger-admin-username>:<ranger-admin-password> -X POST -H "Accept: application/json" -H "Content-Type: application/json" --data @servicedef.json http://<ranger-host>:6080/service/public/v2/api/servicedef\n')))))),(0,r.kt)("h3",{id:"defining-a-ranger-policy"},"Defining a Ranger Policy"),(0,r.kt)("p",null,"Now, you should have the DataHub plugin registered with Apache Ranger. Next, we'll create a sample user and add them to our first resource policy."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login into the Apache Ranger UI (Privacera Portal) to performs below steps. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify ",(0,r.kt)("strong",{parentName:"p"},"datahub-ranger-plugin")," is registered successfully: The  ",(0,r.kt)("strong",{parentName:"p"},"datahub-ranger-plugin")," should be visible as ",(0,r.kt)("strong",{parentName:"p"},"DATAHUB"),"  in  ",(0,r.kt)("em",{parentName:"p"},"Access Management -> Resource Policies"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a service under the plugin ",(0,r.kt)("strong",{parentName:"p"},"DATAHUB")," with name ",(0,r.kt)("strong",{parentName:"p"},"ranger_datahub")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"DATAHUB")," plugin and ",(0,r.kt)("strong",{parentName:"p"},"ranger_datahub")," service is shown in below screenshot: ",(0,r.kt)("br",null)))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apache-ranger/datahub-plugin.png"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new policy under service ",(0,r.kt)("strong",{parentName:"p"},"ranger_datahub")," - this will be used to control DataHub authorization. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a test user & assign them to a policy. We'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," user, which is the default root user inside DataHub."),(0,r.kt)("p",{parentName:"li"},"To do this performs below steps"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a user  ",(0,r.kt)("strong",{parentName:"p"},"datahub")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a policy under ",(0,r.kt)("strong",{parentName:"p"},"ranger_datahub")," service. To assign ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/policies#privileges"},"Platform Privileges"),' (e.g. Admin privileges), simply use the "platform" resource type which is defined. To test the flow, we can simply assign the ',(0,r.kt)("strong",{parentName:"p"},"datahub"),' user all platform privileges that are available through the Ranger UI. This will enable the "datahub" to have full platform admin privileges. '),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"To define fine-grained resource privileges, e.g. for DataHub Datasets, Dashboards, Charts, and more, you can simply select the appropriate Resource Type in the Ranger policy builder. You should also see a list of privileges that are supported for each resource type, which correspond to the actions that you can perform. To learn more about supported privileges, check out the DataHub ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/policies#privileges"},"Policies Guide"),". ")),(0,r.kt)("p",{parentName:"li"}," DataHub platform access policy screenshot: ",(0,r.kt)("br",null)))))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apache-ranger/datahub-platform-access-policy.png"})),(0,r.kt)("p",null,"Once we've created our first policy, we can set up DataHub to start authorizing requests using Ranger policies. "),(0,r.kt)("h2",{id:"configuring-your-datahub-deployment"},"Configuring your DataHub Deployment"),(0,r.kt)("p",null,"Perform the following steps to configure DataHub to send incoming requests to Apache Ranger for authorization."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download Apache Ranger security xml ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/acryldata/datahub-ranger-auth-plugin/blob/main/datahub-ranger-plugin/conf/ranger-datahub-security.xml"},"ranger-datahub-security.xml")),(0,r.kt)("li",{parentName:"ol"},"In  ",(0,r.kt)("strong",{parentName:"li"},"ranger-datahub-security.xml"),"  edit the value of property  ",(0,r.kt)("em",{parentName:"li"},"ranger.plugin.datahub.policy.rest.url"),". Sample snippet is shown below",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <property>\n        <name>ranger.plugin.datahub.policy.rest.url</name>\n        <value>http://199.209.9.70:6080</value>\n        <description>\n            URL to Ranger Admin\n        </description>\n    </property>\n")))),(0,r.kt)("p",null,"As per your deployment follow either Docker or Kubernetes section below"),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build Ranger Authorizer Plugin")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone DataHub Repo: Clone the DataHub repository"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    cd ~/\n    git clone https://github.com/acryldata/datahub-ranger-auth-plugin.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go inside the datahub directory: You should be inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-ranger-auth-plugin")," directory to execute build command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    cd ~/datahub-ranger-auth-plugin/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build plugin: Execute below gradle command to build Ranger Authorizer Plugin jar"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  ./gradlew apache-ranger-plugin:shadowJar\n")),(0,r.kt)("p",{parentName:"li"},"This step will generate a jar file i.e. ./apache-ranger-plugin/build/libs/apache-ranger-plugin-","<","version",">","-SNAPSHOT.jar."),(0,r.kt)("p",{parentName:"li"}," Let's call this jar as ranger-plugin-jar. We need this jar in below step (Configure Ranger Authorizer Plugin)"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure Ranger Authorizer Plugin")),(0,r.kt)("p",null,"On the host where ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-gms")," is deployed, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create directory ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.datahub/plugins/auth/apache-ranger-authorizer/"),": Executes below command ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.datahub/plugins/auth/apache-ranger-authorizer/\n"))),(0,r.kt)("li",{parentName:"ol"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"ranger-datahub-security.xml")," file to ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.datahub/plugins/auth/apache-ranger-authorizer/")),(0,r.kt)("li",{parentName:"ol"},"Copy ranger-plugin-jar: Copy the apache-ranger-plugin-","<","version",">","-SNAPSHOT.jar ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp ./apache-ranger-plugin/build/libs/apache-ranger-plugin-<version>-SNAPSHOT.jar ~/.datahub/plugins/auth/apache-ranger-authorizer/apache-ranger-authorizer.jar\n"))),(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml"),": Create config.yml if not exist",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    touch ~/.datahub/plugins/auth/config.yml \n"))),(0,r.kt)("li",{parentName:"ol"},"Set Apache Ranger Plugin config: Add below entry in config.yml file. Set username and password to Apache Ranger user credentials",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'   plugins:\n     - name: "apache-ranger-authorizer"\n       type: "authorizer"\n       enabled: "true"\n       params:\n         className: "com.datahub.authorization.ranger.RangerAuthorizer"\n         configs:\n           username: "<Apache Ranger username>"\n           password: "<Apache Ranger password>"\n'))),(0,r.kt)("li",{parentName:"ol"},"Restart DataHub GMS container (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub-gms"),")")),(0,r.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"Helm support is coming soon."),(0,r.kt)("p",null,"That's it! Now we can test out the integration. "),(0,r.kt)("h3",{id:"validating-your-setup"},"Validating your Setup"),(0,r.kt)("p",null,"To verify that things are working as expected, we can test that the root ",(0,r.kt)("strong",{parentName:"p"},"datahub")," user has all Platform Privileges and is able to perform all operations: managing users & groups, creating domains, and more. To do this, simply log into your DataHub deployment via the root DataHub user. "),(0,r.kt)("h1",{id:"revert-the-configuration"},"Revert the Configuration"),(0,r.kt)("p",null,"If you want to revert your deployment configuration and don't want Apache Ranger to control the authorization of your DataHub deployment\nthen follow the below sections to undo the configuration steps you have performed in section ",(0,r.kt)("em",{parentName:"p"},"Configuring Authorization with Apache Ranger")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Revert Configuration of your Apache Ranger Deployment"),(0,r.kt)("li",{parentName:"ol"},"Revert Configuration of your DataHub Deployment")),(0,r.kt)("h2",{id:"revert-configuration-of-your-apache-ranger-deployment"},"Revert Configuration of your Apache Ranger Deployment"),(0,r.kt)("p",null,"   For kubernetes example command, please replace the ","<","ranger-pod-name",">"," and ","<","namespace",">"," as per your environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete ",(0,r.kt)("strong",{parentName:"p"},"ranger_datahub")," service: Login into the Privacera Portal and delete service ",(0,r.kt)("strong",{parentName:"p"},"ranger_datahub")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ranger_datahub")," service is shown in below screenshot: ",(0,r.kt)("br",null)))),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apache-ranger/datahub-plugin.png"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete ",(0,r.kt)("strong",{parentName:"p"},"datahub")," plugin: Execute below curl command to delete ",(0,r.kt)("strong",{parentName:"p"},"datahub")," plugin\nReplace variables with corresponding values in curl command"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"<","ranger-admin-username",">"),(0,r.kt)("li",{parentName:"ul"},"<","ranger-admin-password",">"),(0,r.kt)("li",{parentName:"ul"},"<","ranger-host",">")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -u <ranger-admin-username>:<ranger-admin-password> -X DELETE -H "Accept: application/json" -H "Content-Type: application/json" http://<ranger-host>:6080/service/public/v2/api/servicedef/name/datahub\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete ",(0,r.kt)("strong",{parentName:"p"},"datahub")," plugin directory: Execute below command to delete the ",(0,r.kt)("strong",{parentName:"p"},"datahub")," plugin directory from Apache Ranger"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Docker command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec privacera_ranger_1 rm -rf ews/webapp/WEB-INF/classes/ranger-plugins/datahub\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Kubernetes command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec <ranger-pod-name> -n <namespace> -- sh -c 'rm -rf ews/webapp/WEB-INF/classes/ranger-plugins/datahub'\n")))),(0,r.kt)("h2",{id:"revert-configuration-of-your-datahub-deployment"},"Revert Configuration of your DataHub Deployment"),(0,r.kt)("h3",{id:"docker-1"},"Docker"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove Apache Ranger Plugin entry: From ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yml")," file remove the entry which was added for Apache Ranger Plugin"),(0,r.kt)("li",{parentName:"ol"},"Redeploy DataHub (",(0,r.kt)("inlineCode",{parentName:"li"},"datahub-gms"),")")),(0,r.kt)("h3",{id:"kubernetes-1"},"Kubernetes"),(0,r.kt)("p",null,"   For kubernetes example command, please replace the ","<","namespace",">"," as per your environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open deployment editor: Execute below command",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  kubectl edit deployment datahub-datahub-gms -n <namespace>\n"))),(0,r.kt)("li",{parentName:"ol"},"Remove below environments variables ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"AUTH_POLICIES_ENABLED"),(0,r.kt)("li",{parentName:"ol"},"RANGER_AUTHORIZER_ENABLED"),(0,r.kt)("li",{parentName:"ol"},"RANGER_USERNAME"),(0,r.kt)("li",{parentName:"ol"},"RANGER_PASSWORD"))),(0,r.kt)("li",{parentName:"ol"},"Remove below volumes related settings ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"volumes "),(0,r.kt)("li",{parentName:"ol"},"volumeMounts"))),(0,r.kt)("li",{parentName:"ol"},"Save and quit the editor and use below command to check status of ",(0,r.kt)("strong",{parentName:"li"},"datahub-datahub-gms")," deployment rollout",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl rollout status deployment/datahub-datahub-gms -n <namespace>\n")),"On successful rollout you should see a message ",(0,r.kt)("em",{parentName:"li"},'deployment "datahub-datahub-gms" successfully rolled out'))),(0,r.kt)("h3",{id:"validating-your-setup-1"},"Validating your Setup"),(0,r.kt)("p",null,"To verify that things are working as expected, we can test that the root ",(0,r.kt)("strong",{parentName:"p"},"datahub")," user has all Platform Privileges and is able to perform all operations: managing users & groups, creating domains, and more. To do this, simply log into your DataHub deployment via the root DataHub user."))}h.isMDXComponent=!0}}]);