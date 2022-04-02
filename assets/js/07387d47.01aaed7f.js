"use strict";(self.webpackChunksraddhanand=self.webpackChunksraddhanand||[]).push([[853],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5101:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={id:"secrets",title:"Kubernetes Secrets"},l=void 0,c={unversionedId:"kubernetes/secrets",id:"kubernetes/secrets",title:"Kubernetes Secrets",description:"How to use?",source:"@site/docs/kubernetes/secrets.md",sourceDirName:"kubernetes",slug:"/kubernetes/secrets",permalink:"/docs/kubernetes/secrets",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes/secrets.md",tags:[],version:"current",frontMatter:{id:"secrets",title:"Kubernetes Secrets"},sidebar:"K8S",previous:{title:"Kubernetes cronjob",permalink:"/docs/kubernetes/cronjob"},next:{title:"Service Accounts",permalink:"/docs/kubernetes/service-accounts"}},m={},p=[{value:"How to use?",id:"how-to-use",level:2},{value:"What can be stored in secrets",id:"what-can-be-stored-in-secrets",level:3},{value:"ways to use with pods",id:"ways-to-use-with-pods",level:3},{value:"Create secrets",id:"create-secrets",level:2},{value:"Create a simple secret",id:"create-a-simple-secret",level:3},{value:"Create secret file and mount to pod",id:"create-secret-file-and-mount-to-pod",level:3},{value:"Create secret with docker config",id:"create-secret-with-docker-config",level:3},{value:"Ex:",id:"ex",level:5},{value:"Takeaways",id:"takeaways",level:2},{value:"Useful commands",id:"useful-commands",level:2}],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"how-to-use"},"How to use?"),(0,s.kt)("p",null,"Using kubernetes secrets, you can store the sensitive information as an encrypted data and use them on pods."),(0,s.kt)("h3",{id:"what-can-be-stored-in-secrets"},"What can be stored in secrets"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Sensitive text like ",(0,s.kt)("strong",{parentName:"li"},"password")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Entire file")," with multiple sensitive information"),(0,s.kt)("li",{parentName:"ul"},"Docker registry credentials to pull the image using ",(0,s.kt)("code",null,"ImagePullSecrets"))),(0,s.kt)("h3",{id:"ways-to-use-with-pods"},"ways to use with pods"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Simply retrieve the secret as environment variable"),(0,s.kt)("li",{parentName:"ul"},"Mount as a file to the pod"),(0,s.kt)("li",{parentName:"ul"},"Mount all items in the secrets to a directory on the pod")),(0,s.kt)("h2",{id:"create-secrets"},"Create secrets"),(0,s.kt)("h3",{id:"create-a-simple-secret"},"Create a simple secret"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret generic db-user-pass --from-literal=password=mysecretpass\n$ kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt\n$ kubectl create secret generic db-user-pass --from-file=username=./username.txt --from-file=password=./password.txt\n")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If the key is not specifies as in 2nd statement, the secret get file name as key. Preferred way is ",(0,s.kt)("code",null,"--from-file=key=source"),"  "))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create secret using the config file",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: db-user-pass\ntype: Opaque\ndata:\n  USER_NAME: mongousr\n  PASSWORD: MWYyZDFlMmU2N2Rm\n"))),(0,s.kt)("li",{parentName:"ul"},"Create pod with environment secret")),(0,s.kt)("h3",{id:"create-secret-file-and-mount-to-pod"},"Create secret file and mount to pod"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create secret file using the config file"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# mongo-master-secret.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: mongo-master-key\ntype: Opaque\nstringData:\n  master.key: |-\n    32d1b093fc5db7d104206702f31789e9\n")),(0,s.kt)("p",{parentName:"li"},"Kubernetes creates a secret ",(0,s.kt)("code",null,"mongo-master-key")," with item ",(0,s.kt)("code",null,"master.key"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Create pod with secret as persistent mount."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Create a volume ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"masterkey"))," with the secret ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"mongo-master-key"))),(0,s.kt)("li",{parentName:"ul"},"Mount the volume ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"masterkey"))," to the path: ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"/opt/some-config/master.key"))," using ",(0,s.kt)("code",null,"mountPath"),".",(0,s.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If ",(0,s.kt)("code",null,"subPath")," is not specified, ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"/opt/some-config/master.key"))," would be created as directory rather than file."))))),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# mongo-deploy.yaml\napiVersion: apps/v1beta2\nkind: Deployment\nmetadata:\n  name: mongo-deploy\nspec:\n  template:\n    spec:\n      containers:\n        - name: mongod\n          image: opscode/mongo:latest\n          volumeMounts:\n            - name: masterkey\n              mountPath: /opt/some-config/master.key\n              subPath: master.key\n              readOnly: true\n      volumes:\n        - name: masterkey\n          secret:\n            secretName: mongo-master-key\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Apply both configurations"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f mongo-master-secret.yaml\n$ kubectl apply -f mongo-deploy.yaml\n")))),(0,s.kt)("h3",{id:"create-secret-with-docker-config"},"Create secret with docker config"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret docker-registry <name> --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL\n")),(0,s.kt)("h5",{id:"ex"},"Ex:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create secret for docker registry",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret docker-registry docker-hub-secret --docker-server='https://index.docker.io/v1/'  --docker-username=opscode --docker-password='mysecurepassword' --docker-email='mysingedupemail@example.com'\n"))),(0,s.kt)("li",{parentName:"ul"},"Create pod using the secret.",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1beta2\nkind: Deployment\nmetadata:\n  name: mongo-deploy\nspec:\n  template:\n    spec:\n      containers:\n        - name: mongod\n          image: opscode/mongo:latest\n      imagePullSecrets:\n        - name: docker-hub-secret\n")))),(0,s.kt)("h2",{id:"takeaways"},"Takeaways"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Secrets are ",(0,s.kt)("strong",{parentName:"li"},"limited to namespace"),". pods are created in the same namespace can use the secrets."),(0,s.kt)("li",{parentName:"ul"},"Individual secrets are ",(0,s.kt)("strong",{parentName:"li"},"limited to 1MiB")," in size."),(0,s.kt)("li",{parentName:"ul"},"Secret name must be a valid ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names"},"DNS subdomain name")),(0,s.kt)("li",{parentName:"ul"},"When a Pod is created, there is ",(0,s.kt)("strong",{parentName:"li"},"no check if a referenced secret exists"),". Once a Pod is scheduled, the kubelet will try to fetch the secret value.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If secret does not exist kubelet will periodically retry."),(0,s.kt)("li",{parentName:"ul"},"None of pod containers will start until all the Pod's volumes are mounted.")))),(0,s.kt)("h2",{id:"useful-commands"},"Useful commands"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Secret info")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe secrets/db-user-pass\nkubectl get secret mysecret -o yaml\nkubectl edit secrets mysecret\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To create encrypted text. Below command will return ",(0,s.kt)("em",{parentName:"li"},"MWYyZDFlMmU2N2Rm"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"echo -n '1f2d1e2e67df' | base64\n")))}d.isMDXComponent=!0}}]);