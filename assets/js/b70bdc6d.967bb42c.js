"use strict";(self.webpackChunksraddhanand=self.webpackChunksraddhanand||[]).push([[1009],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9379:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"terraform",title:"Infrastructure As Code (IAC)",sidebar_label:"Terraform"},s=void 0,u={unversionedId:"terraform",id:"terraform",title:"Infrastructure As Code (IAC)",description:"IAC Features",source:"@site/docs/terraform.md",sourceDirName:".",slug:"/terraform",permalink:"/docs/terraform",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/terraform.md",tags:[],version:"current",frontMatter:{id:"terraform",title:"Infrastructure As Code (IAC)",sidebar_label:"Terraform"},sidebar:"iac",next:{title:"Providers",permalink:"/docs/terraform/providers"}},c={},p=[{value:"IAC Features",id:"iac-features",level:2},{value:"Which tool to choose?",id:"which-tool-to-choose",level:2},{value:"Terraform",id:"terraform",level:2}],m={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"iac-features"},"IAC Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create, manage all the infrastructure provisioning like servers, networking, storage, loadbalancers, other configurations using code rather than manual steps."),(0,o.kt)("li",{parentName:"ul"},"Write the code to achieve the desired state."),(0,o.kt)("li",{parentName:"ul"},"Store the created resources details"),(0,o.kt)("li",{parentName:"ul"},"update or delete the resources "),(0,o.kt)("li",{parentName:"ul"},"integrate provisioners such as Chef/Puppet/Ansible/Shell script"),(0,o.kt)("li",{parentName:"ul"},"Manage the lifecycle of resources")),(0,o.kt)("h2",{id:"which-tool-to-choose"},"Which tool to choose?"),(0,o.kt)("p",null,"To choose the right IAC tool, understand the below scenarios."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What are the cloud providers we are going to use for the next few years ?"),(0,o.kt)("li",{parentName:"ul"},"How many cloud accounts we need to manage ?"),(0,o.kt)("li",{parentName:"ul"},"What are the complexities we will end up with if we choose cloud provider's IAC (ex: AWS Cloudformation)"),(0,o.kt)("li",{parentName:"ul"},"Integration with configuration management"),(0,o.kt)("li",{parentName:"ul"},"Cost associated to manege the tool")),(0,o.kt)("h2",{id:"terraform"},"Terraform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compared to other tools like Ansible, Chef, etc; Terraform developed keeping infrastucture as code as a primary strategy. ",(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/intro/vs/index.html"},"Comparion")),(0,o.kt)("li",{parentName:"ul"},"Supports multiple platform by using 100s of providers already available."),(0,o.kt)("li",{parentName:"ul"},"Available as freeware & cloud solution."),(0,o.kt)("li",{parentName:"ul"},"Very simple to manage; we need terraform ",(0,o.kt)("strong",{parentName:"li"},"binary and the storage")," (ex: S3 bucket) for state files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/index.html"},"Great documentation")," is available for all the providers and it is very easy to learn."),(0,o.kt)("li",{parentName:"ul"},"However, once the infrastructure is provisioned using terraform, we can use configuration management tools on the instance. Terraform provides very good support for such integrations. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Dry run"))," is very well implemented using ",(0,o.kt)("code",null,"terraform plan"))))}f.isMDXComponent=!0}}]);