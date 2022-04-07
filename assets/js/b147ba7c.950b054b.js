"use strict";(self.webpackChunksraddhanand=self.webpackChunksraddhanand||[]).push([[6033],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||c;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=p;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6402:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={},u=void 0,l={unversionedId:"docker/docker-build",id:"docker/docker-build",title:"docker-build",description:"The docker build command builds Docker images from a Dockerfile and a \u201ccontext\u201d. A build\u2019s context is the set of files located in the specified PATH or URL. The build process can refer to any of the files in the context. For example, your build can use a COPY instruction to reference a file in the context.",source:"@site/docs/docker/docker-build.md",sourceDirName:"docker",slug:"/docker/docker-build",permalink:"/docs/docker/docker-build",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docker/docker-build.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/docs/docker/container"},next:{title:"Docker Commands",permalink:"/docs/docker/commands"}},d={},s=[],p={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The docker build command builds Docker images from a Dockerfile and a \u201ccontext\u201d. A build\u2019s context is the set of files located in the specified PATH or URL. The build process can refer to any of the files in the context. For example, your build can use a COPY instruction to reference a file in the context."),(0,c.kt)("p",null,"The URL parameter can refer to three kinds of resources: Git repositories, pre-packaged tarball contexts and plain text files."),(0,c.kt)("p",null,"commands specified against ",(0,c.kt)("inlineCode",{parentName:"p"},"CMD")," can be overriden during the runtime and  ",(0,c.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," - commads will be appended"))}f.isMDXComponent=!0}}]);