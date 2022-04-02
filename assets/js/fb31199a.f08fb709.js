"use strict";(self.webpackChunksraddhanand=self.webpackChunksraddhanand||[]).push([[685],{3905:function(e,a,t){t.d(a,{Zo:function(){return i},kt:function(){return m}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),l=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=l(e.components);return r.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),k=l(t),m=n,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||o;return t?r.createElement(d,s(s({ref:a},i),{},{components:t})):r.createElement(d,s({ref:a},i))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=k;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4323:function(e,a,t){t.r(a),t.d(a,{assets:function(){return i},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(7462),n=t(3366),o=(t(7294),t(3905)),s=["components"],c={id:"commands",title:"Kafka Commands Cheat sheet - Basics"},p=void 0,l={unversionedId:"kafka/commands",id:"kafka/commands",title:"Kafka Commands Cheat sheet - Basics",description:"Topics",source:"@site/docs/kafka/commands.md",sourceDirName:"kafka",slug:"/kafka/commands",permalink:"/docs/kafka/commands",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kafka/commands.md",tags:[],version:"current",frontMatter:{id:"commands",title:"Kafka Commands Cheat sheet - Basics"},sidebar:"CAP",previous:{title:"Redis Info",permalink:"/docs/redis/redis-basic"}},i={},u=[{value:"Topics",id:"topics",level:3},{value:"Producers",id:"producers",level:3},{value:"Consumers",id:"consumers",level:3},{value:"Consumer Groups",id:"consumer-groups",level:4}],k={toc:u};function m(e){var a=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"topics"},"Topics"),(0,o.kt)("p",null,"Detail for the topics command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh\n")),(0,o.kt)("p",null,"Creating a topic will all the required arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --topic test1 --create --partitions 3 --replication-factor 3\n")),(0,o.kt)("p",null,"Creating a topic including all of the zookeeper servers (not required)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh --zookeeper zookeeper1:2181,zookeeper2:2181,zookeeper3:2181/kafka --topic test1 --create --partitions 3 --replication-factor 3\n")),(0,o.kt)("p",null,"List all topics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --list\n")),(0,o.kt)("p",null,"Describing a topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --topic test2 --describe\n")),(0,o.kt)("p",null,"Delete a topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --topic test2 --delete\n")),(0,o.kt)("h3",{id:"producers"},"Producers"),(0,o.kt)("p",null,"Detail for the producer command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-producer.sh\n")),(0,o.kt)("p",null,"Start a console producer to topic 'test'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-producer.sh --broker-list kafka1:9092 --topic test\n")),(0,o.kt)("p",null,"Add the acks=all flag to your producer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-producer.sh --broker-list kafka1:9092 --topic test --producer-property acks=all\n")),(0,o.kt)("p",null,"Create a topic with the console producer (not recommended)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-producer.sh --broker-list kafka1:9092 --topic test4\n")),(0,o.kt)("p",null,"List the newly created topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --list\n")),(0,o.kt)("p",null,"View the partitions for a topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --topic test5 --describe\n")),(0,o.kt)("h3",{id:"consumers"},"Consumers"),(0,o.kt)("p",null,"Detail for the consumer command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-consumer.sh\n")),(0,o.kt)("p",null,"Start a console consumer to a topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-consumer.sh --bootstrap-server kafka3:9092 --topic test\n")),(0,o.kt)("p",null,"Consuming messages from the beginning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-consumer.sh --bootstrap-server kafka3:9092 --topic test --from-beginning\n")),(0,o.kt)("h4",{id:"consumer-groups"},"Consumer Groups"),(0,o.kt)("p",null,"Detail for the consumer groups command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-consumer-groups.sh\n")),(0,o.kt)("p",null,"Start a consumer group for a topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-consumer.sh --bootstrap-server kafka3:9092 --topic test --group application1\n")),(0,o.kt)("p",null,"Start producing new messages to a topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-producer.sh --broker-list kafka1:9092 --topic test\n")),(0,o.kt)("p",null,"Start a consumer group and read messages from the beginning"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-console-consumer.sh --bootstrap-server kafka3:9092 --topic test --group application1 --from-beginning\n")),(0,o.kt)("p",null,"List the consumer groups"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-consumer-groups.sh --bootstrap-server kafka3:9092 --list\n")),(0,o.kt)("p",null,"Describe a consumer group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/kafka-consumer-groups.sh --bootstrap-server kafka3:9092 --describe --group application1\n")))}m.isMDXComponent=!0}}]);