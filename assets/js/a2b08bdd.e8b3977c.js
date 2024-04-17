"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[78975],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=n,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(f,u(u({ref:t},c),{},{components:a})):r.createElement(f,u({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,u=new Array(o);u[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,u[1]=l;for(var s=2;s<o;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},44237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={title:"Changing the default user credentials",slug:"/authentication/changing-default-credentials",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/changing-default-credentials.md"},i="Changing the default user credentials",s={unversionedId:"docs/authentication/changing-default-credentials",id:"version-0.13.0/docs/authentication/changing-default-credentials",title:"Changing the default user credentials",description:"Default User Credential",source:"@site/versioned_docs/version-0.13.0/docs/authentication/changing-default-credentials.md",sourceDirName:"docs/authentication",slug:"/authentication/changing-default-credentials",permalink:"/docs/0.13.0/authentication/changing-default-credentials",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/changing-default-credentials.md",tags:[],version:"0.13.0",frontMatter:{title:"Changing the default user credentials",slug:"/authentication/changing-default-credentials",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/changing-default-credentials.md"},sidebar:"overviewSidebar",previous:{title:"Concepts & Key Components",permalink:"/docs/0.13.0/authentication/concepts"},next:{title:"Onboarding Users to DataHub",permalink:"/docs/0.13.0/authentication/guides/add-users"}},c={},d=[{value:"Default User Credential",id:"default-user-credential",level:2},{value:"Changing the default user <code>datahub</code>",id:"changing-the-default-user-datahub",level:2},{value:"Helm chart",id:"helm-chart",level:3},{value:"1. Create a new config file",id:"1-create-a-new-config-file",level:4},{value:"2. Create a kubernetes secret",id:"2-create-a-kubernetes-secret",level:4},{value:"3. Mount the config file",id:"3-mount-the-config-file",level:4},{value:"4. Restart Datahub",id:"4-restart-datahub",level:4},{value:"Docker-compose",id:"docker-compose",level:3},{value:"1. Modify a config file",id:"1-modify-a-config-file",level:4},{value:"2. Mount the updated config file",id:"2-mount-the-updated-config-file",level:4},{value:"3. Restart DataHub",id:"3-restart-datahub",level:4},{value:"Quickstart",id:"quickstart",level:3},{value:"1. Modify a config file",id:"1-modify-a-config-file-1",level:4},{value:"2. Mount the updated config file",id:"2-mount-the-updated-config-file-1",level:4},{value:"3. Restart Datahub",id:"3-restart-datahub-1",level:4}],p={toc:d},h="wrapper";function f(e){var{components:t}=e,a=u(e,["components"]);return(0,r.kt)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changing-the-default-user-credentials"},"Changing the default user credentials"),(0,r.kt)("h2",{id:"default-user-credential"},"Default User Credential"),(0,r.kt)("p",null,"The 'datahub' root user is created for you by default. This user is controlled via a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/conf/user.props"},"user.props")," file which ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.13.0/authentication/guides/jaas"},"JaaS Authentication")," is configured to use:"),(0,r.kt)("p",null,"By default, the credential file looks like this for each and every self-hosted DataHub deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// default user.props\ndatahub:datahub\n")),(0,r.kt)("p",null,"Obviously, this is not ideal from a security perspective. It is highly recommended that this file\nis changed ",(0,r.kt)("em",{parentName:"p"},"prior")," to deploying DataHub to production at your organization."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please note that deleting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Hub")," user in the UI ",(0,r.kt)("strong",{parentName:"p"},"WILL NOT")," disable the default user.\nYou will still be able to log in using the default 'datahub:datahub' credentials.\nTo safely delete the default credentials, please follow the guide provided below.")),(0,r.kt)("h2",{id:"changing-the-default-user-datahub"},"Changing the default user ",(0,r.kt)("inlineCode",{parentName:"h2"},"datahub")),(0,r.kt)("p",null,"The method for changing the default user depends on how DataHub is deployed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#helm-chart"},"Helm chart"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.13.0/deploy/kubernetes"},"Deployment Guide")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-compose"},"Docker-compose"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.13.0/docker"},"Deployment Guide")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#quickstart"},"Quickstart"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.13.0/quickstart"},"Deployment Guide"))))),(0,r.kt)("h3",{id:"helm-chart"},"Helm chart"),(0,r.kt)("p",null,"You'll need to create a Kubernetes secret, then mount the file as a volume to the datahub-frontend pod."),(0,r.kt)("h4",{id:"1-create-a-new-config-file"},"1. Create a new config file"),(0,r.kt)("p",null,"Create a new version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/conf/user.props"},"user.props")," which defines the updated password for the datahub user."),(0,r.kt)("p",null,"To remove the user 'datahub' from the new file, simply omit the username. Please note that you can also choose to leave the file empty.\nFor example, to change the password for the DataHub root user to 'newpassword', your file would contain the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// new user.props\ndatahub:newpassword\n")),(0,r.kt)("h4",{id:"2-create-a-kubernetes-secret"},"2. Create a kubernetes secret"),(0,r.kt)("p",null,"Create a secret from your local ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic datahub-users-secret --from-file=user.props=./<path-to-your-user.props>\n")),(0,r.kt)("h4",{id:"3-mount-the-config-file"},"3. Mount the config file"),(0,r.kt)("p",null,"Configure your ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/values.yaml#LL22C1-L22C1"},"values.yaml")," to add the volume to the datahub-frontend container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"datahub-frontend:\n  ...\n  extraVolumes:\n    - name: datahub-users\n      secret:\n        defaultMode: 0444\n        secretName:  datahub-users-secret\n  extraVolumeMounts:\n    - name: datahub-users\n      mountPath: /datahub-frontend/conf/user.props\n      subPath: user.props\n")),(0,r.kt)("h4",{id:"4-restart-datahub"},"4. Restart Datahub"),(0,r.kt)("p",null,"Restart the DataHub containers or pods to pick up the new configs.\nFor example, you could run the following command to upgrade the current helm deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade datahub datahub/datahub --values <path_to_values.yaml>\n")),(0,r.kt)("p",null,"Note that if you update the secret you will need to restart the datahub-frontend pods so the changes are reflected. To update the secret in-place you can run something like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic datahub-users-secret --from-file=user.props=./<path-to-your-user.props> -o yaml --dry-run=client | kubectl apply -f -\n")),(0,r.kt)("h3",{id:"docker-compose"},"Docker-compose"),(0,r.kt)("h4",{id:"1-modify-a-config-file"},"1. Modify a config file"),(0,r.kt)("p",null,"Modify ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/conf/user.props"},"user.props")," which defines the updated password for the datahub user."),(0,r.kt)("p",null,"To remove the user 'datahub' from the new file, simply omit the username. Please note that you can also choose to leave the file empty.\nFor example, to change the password for the DataHub root user to 'newpassword', your file would contain the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// new user.props\ndatahub:newpassword\n")),(0,r.kt)("h4",{id:"2-mount-the-updated-config-file"},"2. Mount the updated config file"),(0,r.kt)("p",null,"Change the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/docker-compose.yml"},"docker-compose.yaml")," to mount an updated user.props file to the following location inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container using a volume:",(0,r.kt)("inlineCode",{parentName:"p"},"/datahub-frontend/conf/user.props")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  datahub-frontend-react:\n  ...\n    volumes:\n    ...\n    - <absolute_path_to_your_custom_user_props_file>:/datahub-frontend/conf/user.props\n")),(0,r.kt)("h4",{id:"3-restart-datahub"},"3. Restart DataHub"),(0,r.kt)("p",null,"Restart the DataHub containers or pods to pick up the new configs."),(0,r.kt)("h3",{id:"quickstart"},"Quickstart"),(0,r.kt)("h4",{id:"1-modify-a-config-file-1"},"1. Modify a config file"),(0,r.kt)("p",null,"Modify ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend/conf/user.props"},"user.props")," which defines the updated password for the datahub user."),(0,r.kt)("p",null,"To remove the user 'datahub' from the new file, simply omit the username. Please note that you can also choose to leave the file empty.\nFor example, to change the password for the DataHub root user to 'newpassword', your file would contain the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// new user.props\ndatahub:newpassword\n")),(0,r.kt)("h4",{id:"2-mount-the-updated-config-file-1"},"2. Mount the updated config file"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/quickstart/docker-compose.quickstart.yml"},"docker-compose file used in quickstart"),".\nModify the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/quickstart/docker-compose.quickstart.yml#L116"},"datahub-frontend-react block")," to contain the extra volume mount."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  datahub-frontend-react:\n  ...\n    volumes:\n    ...\n    - <absolute_path_to_your_custom_user_props_file>:/datahub-frontend/conf/user.props\n")),(0,r.kt)("h4",{id:"3-restart-datahub-1"},"3. Restart Datahub"),(0,r.kt)("p",null,"Run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"datahub docker quickstart --quickstart-compose-file <your-modified-compose>.yml\n")))}f.isMDXComponent=!0}}]);