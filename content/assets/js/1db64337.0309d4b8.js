"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[1372],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13099:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"Overview",keywords:["hudi","design","table","queries","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},l=void 0,s={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"Welcome to Apache Hudi! This overview will provide a high level summary of what Apache Hudi is and will orient you on",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/next/overview",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/docs/overview.md",version:"current",frontMatter:{title:"Overview",keywords:["hudi","design","table","queries","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",next:{title:"Spark Guide",permalink:"/docs/next/quick-start-guide"}},u=[{value:"What is Apache Hudi",id:"what-is-apache-hudi",children:[]},{value:"Core Concepts to Learn",id:"core-concepts-to-learn",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Connect With The Community",id:"connect-with-the-community",children:[{value:"Join in on discussions",id:"join-in-on-discussions",children:[]},{value:"Come to Office Hours for help",id:"come-to-office-hours-for-help",children:[]},{value:"Community Calls",id:"community-calls",children:[]}]},{value:"Contribute",id:"contribute",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to Apache Hudi! This overview will provide a high level summary of what Apache Hudi is and will orient you on\nhow to learn more to get started."),(0,i.kt)("h2",{id:"what-is-apache-hudi"},"What is Apache Hudi"),(0,i.kt)("p",null,"Apache Hudi (pronounced \u201choodie\u201d) is the next generation ",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/07/21/streaming-data-lake-platform"},"streaming data lake platform"),".\nApache Hudi brings core warehouse and database functionality directly to a data lake. Hudi provides ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/table_management"},"tables"),",\n",(0,i.kt)("a",{parentName:"p",href:"/docs/next/timeline"},"transactions"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/write_operations"},"efficient upserts/deletes"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/indexing"},"advanced indexes"),",\n",(0,i.kt)("a",{parentName:"p",href:"/docs/next/hoodie_deltastreamer"},"streaming ingestion services"),", data ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/clustering"},"clustering"),"/",(0,i.kt)("a",{parentName:"p",href:"/docs/next/compaction"},"compaction")," optimizations,\nand ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/concurrency_control"},"concurrency")," all while keeping your data in open source file formats."),(0,i.kt)("p",null,"Not only is Apache Hudi great for streaming workloads, but it also allows you to create efficient incremental batch pipelines.\nRead the docs for more ",(0,i.kt)("a",{parentName:"p",href:"/docs/use_cases"},"use case descriptions")," and check out ",(0,i.kt)("a",{parentName:"p",href:"/powered-by"},"who's using Hudi"),", to see how some of the\nlargest data lakes in the world including ",(0,i.kt)("a",{parentName:"p",href:"https://eng.uber.com/uber-big-data-platform/"},"Uber"),", ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/big-data/how-amazon-transportation-service-enabled-near-real-time-event-analytics-at-petabyte-scale-using-aws-glue-with-apache-hudi/"},"Amazon"),",\n",(0,i.kt)("a",{parentName:"p",href:"http://hudi.apache.org/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance"},"ByteDance"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://s.apache.org/hudi-robinhood-talk"},"Robinhood")," and more are transforming their production data lakes with Hudi."),(0,i.kt)("p",null,"Apache Hudi can easily be used on any ",(0,i.kt)("a",{parentName:"p",href:"/docs/cloud"},"cloud storage platform"),".\nHudi\u2019s advanced performance optimizations, make analytical workloads faster with any of\nthe popular query engines including, Apache Spark, Flink, Presto, Trino, Hive, etc."),(0,i.kt)("h2",{id:"core-concepts-to-learn"},"Core Concepts to Learn"),(0,i.kt)("p",null,"If you are relatively new to Apache Hudi, it is important to be familiar with a few core concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/timeline"},"Hudi Timeline")," \u2013 How Hudi manages transactions and other table services"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/file_layouts"},"Hudi File Layout")," - How the files are laid out on storage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/table_types"},"Hudi Table Types")," \u2013 ",(0,i.kt)("inlineCode",{parentName:"li"},"COPY_ON_WRITE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"MERGE_ON_READ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/table_types#query-types"},"Hudi Query Types")," \u2013 Snapshot Queries, Incremental Queries, Read-Optimized Queries")),(0,i.kt)("p",null,'See more in the "Concepts" section of the docs.'),(0,i.kt)("p",null,"Take a look at recent ",(0,i.kt)("a",{parentName:"p",href:"/blog"},"blog posts")," that go in depth on certain topics or use cases."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Sometimes the fastest way to learn is by doing. Try out these Quick Start resources to get up and running in minutes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/quick-start-guide"},"Spark Quick Start Guide")," \u2013 if you primarily use Apache Spark"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/flink-quick-start-guide"},"Flink Quick Start Guide")," \u2013 if you primarily use Apache Flink")),(0,i.kt)("p",null,"If you want to experience Apache Hudi integrated into an end to end demo with Kafka, Spark, Hive, Presto, etc, try out the Docker Demo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docker_demo"},"Docker Demo"))),(0,i.kt)("h2",{id:"connect-with-the-community"},"Connect With The Community"),(0,i.kt)("p",null,"Apache Hudi is community focused and community led and welcomes new-comers with open arms. Leverage the following\nresources to learn more, engage, and get help as you get started."),(0,i.kt)("h3",{id:"join-in-on-discussions"},"Join in on discussions"),(0,i.kt)("p",null,"See all the ways to ",(0,i.kt)("a",{parentName:"p",href:"/community/get-involved"},"engage with the community here"),". Two most popular methods include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://join.slack.com/t/apache-hudi/shared_invite/enQtODYyNDAxNzc5MTg2LTE5OTBlYmVhYjM0N2ZhOTJjOWM4YzBmMWU2MjZjMGE4NDc5ZDFiOGQ2N2VkYTVkNzU3ZDQ4OTI1NmFmYWQ0NzE"},"Hudi Slack Channel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:users-subscribe@hudi.apache.org"},"Hudi mailing list")," - (send any msg to subscribe)")),(0,i.kt)("h3",{id:"come-to-office-hours-for-help"},"Come to Office Hours for help"),(0,i.kt)("p",null,"Weekly office hours are ",(0,i.kt)("a",{parentName:"p",href:"/community/syncs#weekly-office-hours"},"posted here")),(0,i.kt)("h3",{id:"community-calls"},"Community Calls"),(0,i.kt)("p",null,"Attend ",(0,i.kt)("a",{parentName:"p",href:"/community/syncs#monthly-community-call"},"monthly community calls")," to learn best practices and see what others are building."),(0,i.kt)("h2",{id:"contribute"},"Contribute"),(0,i.kt)("p",null,"Apache Hudi welcomes you to join in on the fun and make a lasting impact on the industry as a whole. See our\n",(0,i.kt)("a",{parentName:"p",href:"/contribute/how-to-contribute"},"contributor guide")," to learn more, and don\u2019t hesitate to directly reach out to any of the\ncurrent committers to learn more."),(0,i.kt)("p",null,"Have an idea, an ask, or feedback about a pain-point, but don\u2019t have time to contribute? Join the ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/enQtODYyNDAxNzc5MTg2LTE5OTBlYmVhYjM0N2ZhOTJjOWM4YzBmMWU2MjZjMGE4NDc5ZDFiOGQ2N2VkYTVkNzU3ZDQ4OTI1NmFmYWQ0NzE"},"Hudi Slack Channel"),"\nand share!"))}p.isMDXComponent=!0}}]);