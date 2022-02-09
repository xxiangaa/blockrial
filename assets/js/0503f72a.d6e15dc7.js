(self.webpackChunkblockrial=self.webpackChunkblockrial||[]).push([[380],{7411:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(531),r=n(7757),i=n.n(r),l=n(6242),o=n(4267),u=n(5861),c=n(9411),s=n(6447),f=n(3321),h=n(7294),m=n(2153),d=n.n(m);function p(){var e=h.useState(1),t=e[0],n=e[1],r=h.useState(d()((new Date).getTime().toString()).toString()),m=r[0],p=r[1],v=h.useState(0),k=v[0],Z=v[1],b=h.useState(!1),E=b[0],S=b[1];return h.useEffect((function(){var e=setInterval((0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E&&(n=d()(m+k).toString(),p(n),n.endsWith("0".repeat(t))?S(!1):Z(k+1));case 1:case"end":return e.stop()}}),e)}))),100);return function(){return clearInterval(e)}}),[E,m,k,t]),h.createElement(l.Z,null,h.createElement(o.Z,null,h.createElement(u.Z,{variant:"h5"},"Simple Proof Of Work"),h.createElement(u.Z,{variant:"subtitle1"}," Difficulty "),h.createElement(c.ZP,{size:"medium",value:t,onChange:function(e,t){return n(t)},"aria-label":"Small",valueLabelDisplay:"auto"}),h.createElement(u.Z,{variant:"subtitle1"},"Current Difficulty: ",t),h.createElement(u.Z,{variant:"subtitle1"}," ","Current iterations: ",k," "),h.createElement(u.Z,{variant:"subtitle1"},"Current Hash: ",h.createElement("b",null,m)),h.createElement(u.Z,{variant:"subtitle1"},"The difficulty is the number of zeros in the hash."),h.createElement(s.Z,{direction:"row"},h.createElement(f.Z,{onClick:function(){Z(0)}},"Reset"),h.createElement(f.Z,{onClick:function(){S(!E)}},E?"Stop":"Start"))))}},9309:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return z},default:function(){return R},frontMatter:function(){return M},metadata:function(){return O},toc:function(){return A}});var a=n(7462),r=n(3366),i=n(7294),l=n(3905),o=n(6242),u=n(4267),c=n(5861),s=n(913),f=n(476),h=n(7957),m=n(480),d=n(9240),p=n(239),v=n(2153),k=n.n(v),Z=n(34),b=n.n(Z),E=n(7460),S=n.n(E),g=n(7252),C=n.n(g),w=[{title:"sha256",function:k()},{title:"sha512",function:b()},{title:"sha384",function:S()},{title:"hmacSHA512",function:C()}];function y(){var e=i.useState(w[0]),t=e[0],n=e[1],a=i.useState(""),r=a[0],l=a[1],v=i.useState(""),k=v[0],Z=v[1],b=function(){var e=t.function(r).toString();Z(e)};return i.createElement(o.Z,null,i.createElement(u.Z,null,i.createElement(c.Z,{variant:"h5"},"Hash Function Playground"),i.createElement(s.Z,null,i.createElement(f.Z,{id:"demo-row-radio-buttons-group-label"},"Hash Functions"),i.createElement(h.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",defaultValue:w[0].title,onChange:function(e){var t=w.find((function(t){return t.title===e.target.value}));n(t),b()}},w.map((function(e){return i.createElement(m.Z,{key:e.title,value:e.title,control:i.createElement(d.Z,null),label:e.title})})))),i.createElement(c.Z,null,"Input Value"),i.createElement(s.Z,{style:{width:"100%"}},i.createElement(p.Z,{value:r,fullWidth:!0,onChange:function(e){l(e.target.value),b()}})),i.createElement(c.Z,null,"Result"),i.createElement(c.Z,null,k)))}var H=n(7411),x=n(531),D=n(7757),P=n.n(D),T=n(9411),W=n(6447),N=n(3321);function I(e){var t=i.useState(10),n=t[0],a=t[1],r=i.useState(k()((new Date).getTime().toString()).toString()),l=r[0],s=r[1],f=i.useState(0),h=f[0],m=f[1],d=i.useState(!1),p=d[0],v=d[1];return i.useEffect((function(){var t=setInterval((0,x.Z)(P().mark((function t(){var r;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p&&(r=k()(l+h).toString(),s(r),r.endsWith("0".repeat(n))?v(!1):(m(h+1),h%e.step==0&&h>0&&a(Math.max(n-1,1))));case 1:case"end":return t.stop()}}),t)}))),100);return function(){return clearInterval(t)}}),[p,l,h,n]),i.createElement(o.Z,null,i.createElement(u.Z,null,i.createElement(c.Z,{variant:"h5"},"Advance Proof Of Work"),i.createElement(c.Z,{variant:"subtitle1"}," Difficulty "),i.createElement(T.ZP,{size:"medium",value:n,onChange:function(e,t){return a(t)},"aria-label":"Small",valueLabelDisplay:"auto"}),i.createElement(c.Z,{variant:"subtitle1"},"Current Difficulty: ",n),i.createElement(c.Z,{variant:"subtitle1"}," ","Current iterations: ",h," "),i.createElement(c.Z,{variant:"subtitle1"},"Current Hash: ",i.createElement("b",null,l)),i.createElement(c.Z,{variant:"subtitle1"},"The difficulty is the number of zeros in the hash."),i.createElement(W.Z,{direction:"row"},i.createElement(N.Z,{onClick:function(){m(0)}},"Reset"),i.createElement(N.Z,{onClick:function(){v(!p)}},p?"Stop":"Start"))))}var F=["components"],M={sidebar_position:1},z="Hash Function",O={unversionedId:"hash",id:"hash",title:"Hash Function",description:"\u4ec0\u4e48\u662fhash",source:"@site/docs/hash.mdx",sourceDirName:".",slug:"/hash",permalink:"/docs/hash",editUrl:"https://github.com/etherdata-blockchain/blockrial/docs/hash.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"BlockChain",permalink:"/docs/chain"}},A=[{value:"\u4ec0\u4e48\u662fhash",id:"\u4ec0\u4e48\u662fhash",children:[],level:2},{value:"Proof of Work",id:"proof-of-work",children:[],level:2}],L={toc:A};function R(e){var t=e.components,i=(0,r.Z)(e,F);return(0,l.kt)("wrapper",(0,a.Z)({},L,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hash-function"},"Hash Function"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662fhash"},"\u4ec0\u4e48\u662fhash"),(0,l.kt)("p",null,"\u6709\u5f88\u591a\u7684Hash function\uff0c\u7b80\u5355\u7684\u53ef\u4ee5\u7406\u89e3\u662fHash \u53ef\u4ee5\u628a\u4efb\u4f55\u7684\u4e1c\u897f\u8f6c\u6362\u6210\u4e00\u4e32\u957f\u5ea6\u66f4\u77ed\u7684\u5b57\u7b26\u4e32\u3002\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4f8b\u5b50\u770b\u5230\uff0c\u5de6\u8fb9\u7684\u8f93\u5165\u53ef\u4ee5\u662f\u5f88\u957f\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u5f88\u77ed\u7684\u53e5\u5b50\uff0c\u4f46\u662f\u53f3\u8fb9\u751f\u6210\u51fa\u6765\u7684\u7ed3\u679c\n\u90fd\u662f\u5dee\u4e0d\u591a\u6784\u9020\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hash function intro image",src:n(8547).Z,width:"660",height:"447"})),(0,l.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u53ef\u4ee5\u5e26\u4f60\u89c1\u8bc6\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528\u8fd9\u4e2aHash\u529f\u80fd\u3002"),(0,l.kt)(y,{mdxType:"SimpleHash"}),(0,l.kt)("h2",{id:"proof-of-work"},"Proof of Work"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u7684\u7406\u89e3\u5c31\u662f\u901a\u8fc7\u5927\u91cf\u7684\u8ba1\u7b97\u8fbe\u5230\u67d0\u4e00\u4e2a\u7ed3\u679c\uff0c\u8fd9\u5176\u4e2d\u7684\u5de5\u4f5c\u91cf\u7684\u591a\u5c11\u5c31\u53d6\u51b3\u4e8e\u8fd9\u4e2a\u95ee\u9898\u7684\u96be\u5ea6\u3002\u8b6c\u5982\u6211\u4eec\u60f3\u8981\u627e\u5230\u4e00\u4e2a\n",(0,l.kt)("inlineCode",{parentName:"p"},"\u8f93\u5165\u6570\u503c"),"\u4f7f\u5176\u7ecf\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Hash"),"\u8fc7\u7684\u8f93\u51fa\u672b\u5c3e\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u4e2a\u8fde\u7eed\u76840\u3002\u8fd9\u4e2a\u95ee\u9898\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4e0d\u65ad\u7684\u5c1d\u8bd5\u5c31\u53ef\u4ee5\u8fbe\u5230\uff0c\u4f46\u662f\u8fd9\u4e2a\u95ee\u9898\u7684\u96be\u5ea6\n\u4e5f\u4f1a\u968f\u7740",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u53d8\u5927\u8d8a\u6765\u8d8a\u96be\u3002\u4e3e\u4f8b\uff0c\u627e\u5230\u7ed3\u5c3e\u67091\u4e2a\u8fde\u7eed\u76840\u7684\u8f93\u5165\u8981\u8fdc\u6bd4\u627e\u523010\u4e2a\u8fde\u7eed\u76840\u8981\u7b80\u5355\u3002\u4e0b\u9762\u7684\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u4f1a\u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"sha256"),"\n\u4f5c\u4e3aHash\u51fd\u6570\uff0c\u4e4b\u540e\u4f60\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u4e0a\u9762\u7684\u96be\u5ea6\u6765\u770b\u6240\u9700\u8981\u7684\u8ba1\u7b97\u65f6\u95f4\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u540c\u65f6\u4e5f\u5f88\u5f62\u8c61\u7684\u8bf4\u660e\u4e86\u533a\u5757\u94fe\u7684\u6838\u5fc3\u601d\u60f3\uff0c\u53bb\u5bfb\u627e\u4e00\u4e2a\u7ed3\u679c\u5f88\u96be\uff0c\u4f46\u662f\u8bc1\u660e\u7ed3\u679c\u7684\u6b63\u786e\u6027\u5f88\u7b80\u5355\u3002\u6bd5\u7adf\u770b\u7ed3\u679c\u662f\u4e0d\u662f\u5f00\u5934\u6709\u8fd9\u4e48\u591a\u4e2a0\uff0c\n\u53ea\u9700\u8981\u4e00\u79d2\u949f\uff0c\u4f46\u662f\u8981\u627e\u5230\u8fd9\u4e2a\u7b54\u6848\u5374\u9700\u8981\u5f88\u957f\u65f6\u95f4\u3002")),(0,l.kt)(H.Z,{mdxType:"SimpleProofOfWork"}),(0,l.kt)("p",null,"\u5f53\u7136\u8fd9\u4e2a\u6bd5\u7adf\u662f\u57fa\u7840\u7248\u672c\uff0c\u6240\u4ee5\u8fd8\u6709\u5f88\u591a\u7684\u4e0d\u8db3\u7684\u5730\u65b9\uff0c\u8b6c\u5982\u4e0d\u591f\u667a\u80fd\uff0c\u5f53\u96be\u5ea6\u8fc7\u9ad8\u7684\u65f6\u5019\u5c31\u4f1a\u51fa\u73b0\u4e00\u76f4\u627e\u4e0d\u5230\u6b63\u786e\u7684\u7ed3\u679c\u3002\u5f53\u7136\u6211\u4eec\n\u73b0\u5728\u5df2\u7ecf\u6709\u7684\u533a\u5757\u94fe\u4ea7\u54c1\u53ef\u6ca1\u6709\u8fd9\u4e48\u7684\u4e0d\u667a\u80fd\uff0c\u4ed6\u4eec\u90fd\u4f1a\u81ea\u5df1\u8c03\u6574\u96be\u5ea6\uff0c\u5982\u679c\u4e00\u76f4\u627e\u4e0d\u5230\u7ed3\u679c\u7684\u8bdd\uff0c\u5c31\u4f1a\u81ea\u52a8\u964d\u4f4e\u96be\u5ea6\u3002\u4e0b\u9762\u7684\n\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u5f88\u5f62\u8c61\u7684\u9610\u8ff0\u4e86\u8fd9\u4e2a\u8fc7\u7a0b\u3002"),(0,l.kt)(I,{step:20,mdxType:"AdvanceProofOfWork"}))}R.isMDXComponent=!0},8547:function(e,t,n){"use strict";t.Z=n.p+"assets/images/hash-intro-5f1136e66b6b1ca72a8f1bb290254719.png"},2480:function(){}}]);