(self.webpackChunkblockrial=self.webpackChunkblockrial||[]).push([[155],{7411:function(A,e,t){"use strict";t.d(e,{Z:function(){return C}});var n=t(531),a=t(7757),i=t.n(a),r=t(6242),s=t(4267),l=t(5861),u=t(9411),c=t(6447),o=t(3321),Y=t(7294),g=t(2153),F=t.n(g);function C(){var A=Y.useState(1),e=A[0],t=A[1],a=Y.useState(F()((new Date).getTime().toString()).toString()),g=a[0],C=a[1],B=Y.useState(0),h=B[0],x=B[1],w=Y.useState(!1),L=w[0],W=w[1];return Y.useEffect((function(){var A=setInterval((0,n.Z)(i().mark((function A(){var t;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:L&&(t=F()(g+h).toString(),C(t),t.endsWith("0".repeat(e))?W(!1):x(h+1));case 1:case"end":return A.stop()}}),A)}))),100);return function(){return clearInterval(A)}}),[L,g,h,e]),Y.createElement(r.Z,null,Y.createElement(s.Z,null,Y.createElement(l.Z,{variant:"h5"},"Simple Proof Of Work"),Y.createElement(l.Z,{variant:"subtitle1"}," Difficulty "),Y.createElement(u.ZP,{size:"medium",value:e,onChange:function(A,e){return t(e)},"aria-label":"Small",valueLabelDisplay:"auto"}),Y.createElement(l.Z,{variant:"subtitle1"},"Current Difficulty: ",e),Y.createElement(l.Z,{variant:"subtitle1"}," ","Current iterations: ",h," "),Y.createElement(l.Z,{variant:"subtitle1"},"Current Hash: ",Y.createElement("b",null,g)),Y.createElement(l.Z,{variant:"subtitle1"},"The difficulty is the number of zeros in the hash."),Y.createElement(c.Z,{direction:"row"},Y.createElement(o.Z,{onClick:function(){x(0)}},"Reset"),Y.createElement(o.Z,{onClick:function(){W(!L)}},L?"Stop":"Start"))))}},8980:function(A,e,t){"use strict";t.r(e),t.d(e,{contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return k}});var n=t(7462),a=t(3366),i=t(7294),r=t(3905),s=t(7411),l=t(2153),u=t.n(l),c=t(531),o=t(7757),Y=t.n(o),g=t(6242),F=t(4267),C=t(5861),B=t(9411),h=t(6447),x=t(3321);function w(A){var e=i.useState(2),t=e[0],n=e[1],a=i.useState(A.defaultHash),r=a[0],s=a[1],l=i.useState(A.defaultHash),o=l[0],w=l[1],L=i.useState(0),W=L[0],d=L[1],m=i.useState(!1),f=m[0],p=m[1];return i.useEffect((function(){var e=setInterval((0,c.Z)(Y().mark((function e(){var n;return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f&&(n=u()(o+W).toString(),s(n),n.endsWith("0".repeat(t))?(A.onFound(n),w(n)):d(W+1));case 1:case"end":return e.stop()}}),e)}))),100);return function(){return clearInterval(e)}}),[f,r,W,t,o]),i.createElement(g.Z,null,i.createElement(F.Z,null,i.createElement(C.Z,{variant:"subtitle1"}," Difficulty "),i.createElement(B.ZP,{size:"medium",value:t,onChange:function(A,e){return n(e)},"aria-label":"Small",valueLabelDisplay:"auto"}),i.createElement(C.Z,{variant:"subtitle1"},"Current Difficulty: ",t),i.createElement(C.Z,{variant:"subtitle1"}," ","Current iterations: ",W," "),i.createElement(C.Z,{variant:"subtitle1"},"Current Hash: ",i.createElement("b",null,r)),i.createElement(C.Z,null,"Based On: ",i.createElement("b",null,o)),i.createElement(h.Z,{direction:"row"},i.createElement(x.Z,{onClick:function(){d(0),w(A.defaultHash),A.onReset()}},"Reset"),i.createElement(x.Z,{onClick:function(){p(!f)}},f?"Stop":"Start"))))}var L=t(9362);function W(){var A=i.useState([]),e=A[0],t=A[1],n=i.useState(0),a=n[0],r=n[1],s=i.useCallback((function(A){var n=100*a;e.push({id:""+(a+1),data:{label:a+1+": "+A.substring(0,3)+"..."+A.substring(A.length-3,A.length)},position:{x:0,y:n}}),a>0&&e.push({id:"e"+a+"-"+(a+1),source:""+a,target:""+(a+1),animated:!0}),t(JSON.parse(JSON.stringify(e))),r(a+1)}),[e,a]);return i.createElement("div",null,i.createElement(w,{defaultHash:u()("init").toString(),onFound:function(A){s(A)},onReset:function(){t([]),r(0)}}),i.createElement("div",{style:{height:100*a,width:200,marginTop:10,marginRight:100}},i.createElement(L.ZP,{elements:e,zoomOnDoubleClick:!1,preventScrolling:!1,zoomOnPinch:!1,zoomOnScroll:!1,panOnScroll:!1})))}var d=["components"],m={sidebar_position:2,title:"BlockChain"},f="We don't talk about block chain chain chain chain chain",p={unversionedId:"chain",id:"chain",title:"BlockChain",description:"\u4ec0\u4e48\u662f\u94fe",source:"@site/docs/chain.mdx",sourceDirName:".",slug:"/chain",permalink:"/docs/chain",editUrl:"https://github.com/etherdata-blockchain/blockrial/docs/chain.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"BlockChain"},sidebar:"tutorialSidebar",previous:{title:"Hash Function",permalink:"/docs/hash"}},k=[{value:"\u4ec0\u4e48\u662f\u94fe",id:"\u4ec0\u4e48\u662f\u94fe",children:[],level:2}],I={toc:k};function b(A){var e=A.components,i=(0,a.Z)(A,d);return(0,r.kt)("wrapper",(0,n.Z)({},I,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"we-dont-talk-about-block-chain-chain-chain-chain-chain"},"We don't talk about block chain chain chain chain chain"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u94fe"},"\u4ec0\u4e48\u662f\u94fe"),(0,r.kt)("p",null,"\u6839\u636eWikiPedia \u5bf9\u4e8e\u533a\u5757\u94fe\u7684\u5b9a\u4e49\u662f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e00\u500b\u5340\u584a\u5305\u542b\u4e86\u524d\u4e00\u500b\u5340\u584a\u7684\u52a0\u5bc6\u96dc\u6e4a\u3001\u76f8\u61c9\u6642\u9593\u6233\u8a18\u4ee5\u53ca\u4ea4\u6613\u8cc7\u6599\uff08\u901a\u5e38\u7528\u9ed8\u514b\u723e\u6a39\uff08Merkle tree\uff09\u6f14\u7b97\u6cd5\u8a08\u7b97\u7684\u96dc\u6e4a\u503c\u8868\u793a\uff0c\n\u9019\u6a23\u7684\u8a2d\u8a08\u4f7f\u5f97\u5340\u584a\u5167\u5bb9\u5177\u6709\u96e3\u4ee5\u7be1\u6539\u7684\u7279\u6027\u3002\u7528\u5340\u584a\u93c8\u6280\u8853\u6240\u4e32\u63a5\u7684\u5206\u6563\u5f0f\u5e33\u672c\u80fd\u8b93\u5169\u65b9\u6709\u6548\u8a18\u9304\u4ea4\u6613\uff0c\u4e14\u53ef\u6c38\u4e45\u67e5\u9a57\u6b64\u4ea4\u6613\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chain",src:t(1819).Z,width:"300",height:"797"})),(0,r.kt)("p",null,"\u6211\u4eec\u7528\u4e0a\u4e00\u7ae0\u5b66\u5230\u7684\u77e5\u8bc6\u6765\u8bb2\u8ff0\u4e00\u4e0b\u8fd9\u4e2a\u77e5\u8bc6\u70b9\u5427\uff0c\u9996\u5148\u6211\u4eec\u7684pow\u5c31\u662f\u8981\u7b97\u51fa\u4e00\u4e2aHash \u503c\uff0c\u8fd9\u4e2a\u503c\u8981\u80fd\u591f\u8fbe\u5230\u6211\u4eec\u7684\u8981\u6c42\u3002\u800c\u4e3a\u4e86\u8fbe\u5230\u8fd9\u4e2a\u503c\uff0c\n\u6211\u4eec\u9700\u8981\u9884\u5148\u63d0\u4f9b\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"\u521d\u59cb\u503c"),"\u7ed9\u6211\u4eec\u7684hash \u51fd\u6570\uff0c\u4e4b\u540e\u6bcf\u8fc7\u4e00\u4e2a\u56de\u5408\uff0c\u6211\u4eec\u7684\u8f6f\u4ef6\u5c31\u4f1a\u968f\u673a\u52a0\u4e0a\u4e00\u4e2a\u65b0\u7684\u6570\u503c\uff0c\u8fd9\u4e2a\u53eb",(0,r.kt)("inlineCode",{parentName:"p"},"nonce"),"\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\n\u53ef\u4ee5\u7b97\u51fa\u4e00\u4e2a\u65b0\u7684\u503c\u4e86\u3002\u56de\u5230\u4e4b\u524d\u7684\u4f8b\u5b50\uff0c\u770b\u5230\u6ca1\u6709\u5728iteration \u662f0\u7684\u65f6\u5019\u6211\u4eec\u7684current Hash \u662f\u6709\u7684\uff0c\u8fd9\u4e2a\u662f\u5f53\u524d\u4f60\u7684\u7535\u8111\u7684\u65f6\u95f4\u7684hash\u540e\u7684\u503c\u3002\n\u56e0\u6b64\u6bcf\u6b21\u5237\u65b0\u90fd\u4f1a\u4e0d\u540c\u8fd9\u4e2a\u503c\u3002"),(0,r.kt)(s.Z,{mdxType:"SimpleProofOfWork"}),(0,r.kt)("p",null,"\u4e4b\u540e\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6539\u53d8\u8fd9\u4e2a\u73b0\u6709\u7684\u6570\u5b66\u95ee\u9898\uff0c\u8ba9\u7535\u8111\u53ef\u4ee5\u4e0d\u65ad\u7684\u4ea7\u751f\u65b0\u7684\u95ee\u9898\u3002\u8b6c\u5982\u73b0\u5728\u95ee\u9898\u6765\u4e86\uff0c\u6211\u4eec\u4e0b\u4e00\u4e2a\u7684\u7b54\u6848\u9700\u8981\u6839\u636e\u4e0a\u4e00\u4e2a\u7684\u7b54\u6848\u6765\u8ba1\u7b97\u3002\n\u4ec0\u4e48\u610f\u601d\u5462"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u521d\u59cb\u503c1\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u6211\u4eec\u8981\u5bfb\u627e\u7ed3\u5c3e\u67091\u4e2a0\u7684\u6570\u503c\uff0c\u540c\u65f6\u9700\u8981\u75281\u4f5c\u4e3a\u5f00\u59cb\u7684hash\u6570\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hash(1 + ?) = \u7ed3\u5c3e\u67091\u4e2a0\u7684\u6570\u503c\uff1f\n\u5047\u5982\u95ee\u53f7\u4e3a11\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u6211\u4eec\u8981\u5bfb\u627e\u7ed3\u5c3e\u67092\u4e2a0\u7684\u6570\u503c\uff0c\u540c\u65f6\u9700\u8981\u752811\u4f5c\u4e3a\u5f00\u59cb\u7684hash\u6570\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hash(11 + ?) = \u7ed3\u5c3e\u67092\u4e2a0\u7684\u6570\u503c\uff1f\n\u5047\u5982\u95ee\u53f7\u4e3a111\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u6211\u4eec\u8981\u5bfb\u627e\u7ed3\u5c3e\u67093\u4e2a0\u7684\u6570\u503c\uff0c\u540c\u65f6\u9700\u8981\u7528111\u4f5c\u4e3a\u5f00\u59cb\u7684hash\u6570\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hash(111 + ?) = \u7ed3\u5c3e\u67092\u4e2a0\u7684\u6570\u503c\uff1f\n")),(0,r.kt)("p",null,"\u5c31\u8fd9\u6837\uff0c\u6211\u4eec\u6bcf\u6b21\u7684\u65b0\u7684\u7ed3\u679c\u90fd\u662f\u6839\u636e\u524d\u9762\u7684\u7b54\u6848\u4e3a\u84dd\u672c\u8fdb\u884c\u8ba1\u7b97\uff0c\u8fd9\u6837\u4e00\u4e2a\u94fe\u5c31\u5f62\u6210\u4e86\u3002\u6ce8\u610f\uff0c\u6211\u4eec\u5c06\u7b2c\u4e00\u4e2a\u7684\u521d\u59cb\u503c\u7684\u533a\u5757\n\u79f0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u521b\u4e16\u5757"),"\u3002\u4e0b\u9762\u8fd9\u4e2ademo\u5c06\u4f1a\u4ecb\u7ecd\u57fa\u7840\u533a\u5757\u94fe\u3002"),(0,r.kt)(W,{mdxType:"Chain"}))}b.isMDXComponent=!0},1819:function(A,e){"use strict";e.Z="data:image/png;base64,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"},2480:function(){}}]);