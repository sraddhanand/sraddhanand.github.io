"use strict";(self.webpackChunksraddhanand=self.webpackChunksraddhanand||[]).push([[9026],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5563:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],s={id:"linux-commands",title:"Linux Commands",sidebar_label:"Linux Commands"},i=void 0,u={unversionedId:"linux/linux-commands",id:"linux/linux-commands",title:"Linux Commands",description:"- yum repo checks",source:"@site/docs/linux/commands.md",sourceDirName:"linux",slug:"/linux/linux-commands",permalink:"/docs/linux/linux-commands",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/commands.md",tags:[],version:"current",frontMatter:{id:"linux-commands",title:"Linux Commands",sidebar_label:"Linux Commands"},sidebar:"DevOps",previous:{title:"Regular Commands",permalink:"/docs/git/git-commands"}},c={},p=[{value:"SSH agent forwarding",id:"ssh-agent-forwarding",level:3},{value:"overwrite the files",id:"overwrite-the-files",level:3},{value:"find",id:"find",level:3},{value:"date",id:"date",level:3}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"yum repo checks")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yum whatprovides openssl\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Openssl commands")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Generate private key\nopenssl genrsa -out opscode.key 2048\n# Use the private key and generate Certificate Signing Request\nopenssl req -new -key opscode.key -out opscode.csr -subj "/CN=opscode/O=opscode"\nopenssl x509 -in \n')),(0,l.kt)("h3",{id:"ssh-agent-forwarding"},"SSH agent forwarding"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Login to private instance thr bastion without copying the pem to bastion")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-add -k ~/.ssh/myssh.pem\nssh -A -i ~/.ssh/myssh.pem ec2-user@bastion_host\nssh private_ip\n")),(0,l.kt)("h3",{id:"overwrite-the-files"},"overwrite the files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dd if=/dev/zero of=/home/ec2-user/test.txt bs=1M count=10\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"stress ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"while :\ndo\n    stress --cpu 2 -m 1 -d 1 --timeout 30 2>&1 > /dev/null\n    sleep 5\ndone\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'while :\ndo\n    echo "Calculating pi\'s 3000 digits..."\n    sudo cgexec -g cpu:/formulaone bash -c \'time echo "scale=3000; 4*a(1)" | bc -l | head -n1\'\ndone\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "Killing instance B (port 8002)"\nps auxf | grep python | grep 8002 | awk \'{system("sudo kill " $2)}\'\nsleep 0.5\nsystemctl status faas001_b --no-pager\n')),(0,l.kt)("h3",{id:"find"},"find"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"find the files bigger than 100 Mb and list")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"find / -xdev -size +100M -exec ls -lh {} \\;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Find the log file bigger than 50 Mb and older than 180 days then remove")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'find /var/log -name "*.log.*" -type f -size +50M   -mtime +180 -exec rm -rf {} \\;\n')),(0,l.kt)("h3",{id:"date"},"date"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"date '+%Y%m%dT%H%M%S'\n")))}m.isMDXComponent=!0}}]);