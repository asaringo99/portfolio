(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{4309:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t(1134)}])},7220:function(e,n,t){"use strict";var i=t(5893),r=t(1664),o=t.n(r),s=t(3801),a=t.n(s);n.Z=()=>(0,i.jsx)("header",{className:a().nav,children:(0,i.jsxs)("nav",{className:a().items,children:[(0,i.jsx)(o(),{href:"/comingsoon",children:"About"}),(0,i.jsx)(o(),{href:"/home",children:"Home"}),(0,i.jsx)(o(),{href:"/comingsoon",children:"Resume"})]})})},1270:function(e,n,t){"use strict";var i=t(5893),r=t(7294),o=t(8218),s=t.n(o);n.Z=()=>{let[e,n]=(0,r.useState)("#fff"),t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=e=>{let n=t.current;n&&(n.style.top="".concat(e.clientY,"px"),n.style.left="".concat(e.clientX,"px"))},i=e=>{let n=t.current;n&&n.classList.add(s().hovered)},r=e=>{let n=t.current;n&&n.classList.remove(s().hovered)},o=()=>{n("#99f")},a=()=>{n("#fff")};return window.addEventListener("mousemove",e),document.querySelectorAll("a, button").forEach(e=>{e.addEventListener("mouseover",i),e.addEventListener("mouseout",r)}),window.addEventListener("mousedown",o),window.addEventListener("mouseup",a),()=>{window.removeEventListener("mousemove",e),document.querySelectorAll("a, button").forEach(e=>{e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",r)}),window.removeEventListener("mousedown",o),window.removeEventListener("mouseup",a)}},[]),(0,i.jsx)("div",{className:s().cursor,ref:t,style:{backgroundColor:e}})}},793:function(e,n,t){"use strict";var i=t(5893),r=t(7294),o=t(1677),s=t.n(o);n.Z=()=>{let e=(0,r.useRef)(null),n=(0,r.useRef)({x:0,y:0}),t=(0,r.useRef)({x:0,y:0}),o=(0,r.useRef)();return(0,r.useEffect)(()=>{let i=(e,t)=>{n.current.x+=(e-n.current.x)*.1,n.current.y+=(t-n.current.y)*.1},r=()=>{let s=e.current;s&&(i(t.current.x,t.current.y),s.style.top="".concat(n.current.y,"px"),s.style.left="".concat(n.current.x,"px"),o.current=requestAnimationFrame(r))},s=e=>{t.current={x:e.clientX,y:e.clientY}};return window.addEventListener("mousemove",s),o.current=requestAnimationFrame(r),()=>{window.removeEventListener("mousemove",s),o.current&&cancelAnimationFrame(o.current)}},[]),(0,i.jsx)("div",{className:s().cursor,ref:e})}},1134:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return eA}});var i=t(5893),r=t(7294),o=t(7220),s=t(4206),a=t.n(s),c=()=>{let e=(0,r.useCallback)(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);return(0,i.jsxs)("footer",{className:a().footerContainer,children:[(0,i.jsx)("button",{className:a().scrollButton,onClick:e,children:(0,i.jsx)("span",{children:"TOP"})}),(0,i.jsx)("div",{className:a().textContainer,children:"Thank You For Coming To My Page!"}),(0,i.jsx)("div",{className:a().textContainer,children:"END"}),(0,i.jsx)("p",{className:a().copyright,children:"\xa9 2023 Asaringo Portfolio"})]})},l=t(8122),d=t.n(l);t(7951);var u=t(9720),h=t.n(u),x=e=>{let{id:n,height:t,width:r,padding:o,config:s,children:a}=e,c={height:t,width:r,padding:o,...s};return(0,i.jsx)("div",{id:"".concat(n||""),style:c,className:h().container,children:a})},_=t(4945),p=t.n(_),m=t(6495),f=t(3148),j=t(4257),g=t.n(j),v=t(754),C=t.n(v),N=e=>{let{children:n}=e;return(0,i.jsx)("div",{className:C().container,children:n})};f.kL.register(f.qi);var w=e=>{let{title:n,uri:t,percent:r}=e;return(0,i.jsx)(N,{children:(0,i.jsxs)("div",{className:g().container,children:[(0,i.jsx)(m.$I,{data:{datasets:[{data:[r,100-r],backgroundColor:["#099","#E0E0E0"],borderWidth:0}]},options:{cutout:"80%",legend:{display:!1},tooltips:{enabled:!1},animation:{duration:2e3}}}),(0,i.jsx)("div",{className:g().contents,children:(0,i.jsx)("img",{src:"/portfolio"+t,alt:"",width:100,height:100,className:g().icon})})]})})},k=t(4221),b=t.n(k),E=e=>{let{id:n,height:t,padding:r,config:o,children:s}=e,a={height:t,padding:r,...o};return(0,i.jsx)("div",{id:"".concat(n||""),style:a,className:b().container,children:s})},y=e=>{let{title:n}=e;return(0,i.jsxs)("div",{className:p().container,children:[(0,i.jsx)("div",{className:p().title,children:n}),(0,i.jsx)("div",{className:p().content,children:"全般的に知識がまだまだ浅いです...。"}),(0,i.jsx)("div",{className:p().content,children:"ですが少しずつ理解を深めていき、"}),(0,i.jsx)("div",{className:p().content,children:"強いエンジニアになってみせます！！"}),(0,i.jsxs)("div",{className:p().cardContainer,children:[(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/node.png",percent:50})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/ts.png",percent:60})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/flutter.png",percent:20})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/go.png",percent:55})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/C++.png",percent:60})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/java.png",percent:15})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/python.png",percent:60})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/nextjs.png",percent:30})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/React.png",percent:40})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/echo.png",percent:30})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/Gin.png",percent:20})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/Django.png",percent:15})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/linux.png",percent:30})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/Docker.png",percent:50})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/k8s.png",percent:30})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/atcoder.png",percent:60})}),(0,i.jsx)(E,{config:{"aspect-ratio":"1/1"},padding:"2%",children:(0,i.jsx)(w,{title:"",uri:"/codeforces.png",percent:50})})]})]})},I=t(2807),T=t.n(I),W=e=>{let{id:n,height:t,padding:r,config:o,children:s}=e,a={height:t,padding:r,...o};return(0,i.jsx)("div",{id:"".concat(n||""),style:a,className:T().container,children:s})},S=t(9998),F=t.n(S),A=e=>{let{popUpImage:n,children:t}=e,[o,s]=(0,r.useState)(!1),a=()=>{s(!1)};return(0,i.jsxs)("div",{className:F().container,children:[(0,i.jsx)("div",{onClick:()=>{s(!0)},children:n}),o&&(0,i.jsx)("div",{className:F().overlay,onClick:a,children:(0,i.jsxs)("div",{className:F().popup,onClick:e=>{e.stopPropagation()},children:[(0,i.jsx)("div",{className:F().closeButton,onClick:a,children:"\xd7"}),t]})})]})},O=t(4423),R=t.n(O),L=t(1450),P=t.n(L),Z=e=>{let{children:n}=e;return(0,i.jsx)("div",{className:P().container,children:n})};f.kL.register(f.qi);var X=e=>{let{uri:n}=e;return(0,i.jsx)(Z,{children:(0,i.jsx)("div",{className:R().container,children:(0,i.jsx)("div",{className:R().contents,children:(0,i.jsx)("img",{src:"/portfolio"+n,alt:"",width:100,height:50,className:R().icon})})})})},M=()=>(0,i.jsx)(A,{popUpImage:(0,i.jsx)(X,{uri:"/works/auth.png"}),children:"hello world!"}),U=()=>(0,i.jsx)(A,{popUpImage:(0,i.jsx)(X,{uri:"/works/kanban.png"}),children:"hello world!"}),B=()=>(0,i.jsx)("a",{href:"https://asaringo99.github.io/particle-simulater/main.html",children:(0,i.jsx)(X,{uri:"/works/particle.png"})}),H=()=>(0,i.jsx)(A,{popUpImage:(0,i.jsx)(X,{uri:"/works/portfolio.png"}),children:"hello world!"}),q=t(8589),D=t.n(q),G=e=>{let{title:n}=e;return(0,i.jsxs)("div",{className:D().container,children:[(0,i.jsx)("div",{className:D().title,children:n}),(0,i.jsx)("div",{className:D().content,children:"成果物について以下にまとめました！"}),(0,i.jsxs)("div",{className:D().cardContainer,children:[(0,i.jsx)(W,{config:{"aspect-ratio":"2/1"},padding:"2%",children:(0,i.jsx)(H,{})}),(0,i.jsx)(W,{config:{"aspect-ratio":"2/1"},padding:"2%",children:(0,i.jsx)(B,{})}),(0,i.jsx)(W,{config:{"aspect-ratio":"2/1"},padding:"2%",children:(0,i.jsx)(U,{})}),(0,i.jsx)(W,{config:{"aspect-ratio":"2/1"},padding:"2%",children:(0,i.jsx)(M,{})})]})]})},K=t(1270),V=t(793);let Y=(0,r.createContext)(null);var Q=t(876),z=t.n(Q),J=e=>{let{tableOfContents:n}=e,t=(0,r.useContext)(Y);return(0,i.jsx)("div",{className:z().container,children:(0,i.jsx)("div",{className:z().tableOfContents,children:n.map((e,n)=>(0,i.jsx)("a",{href:"#".concat(e.id),children:(0,i.jsx)("div",{className:t==e.id?z().active:"",children:e.name})},n))})})},$=t(1559),ee=t.n($),en=e=>{let{content:n,nextContent:t}=e,o=(0,r.useRef)(null),s=(0,r.useRef)(null),[a,c]=(0,r.useState)(!1),[l,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=setTimeout(()=>{c(!0)},2e3);return()=>{clearTimeout(e)}},[]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{d(!0)},5500);return()=>{clearTimeout(e)}},[]),(0,r.useEffect)(()=>{if(!o.current||!a)return;let e=n.split("");e.forEach((e,n)=>{var t;let i=document.createElement("span");i.textContent=e,i.style.animationDelay="".concat(.1*n,"s"),null===(t=o.current)||void 0===t||t.appendChild(i)})},[a]),(0,r.useEffect)(()=>{if(!s.current||!l)return;let e=t.split("");e.forEach((e,n)=>{var t;let i=document.createElement("span");i.textContent=e,i.style.animationDelay="".concat(.1*n,"s"),null===(t=s.current)||void 0===t||t.appendChild(i)})},[l]),(0,i.jsxs)("div",{className:ee().container,children:[(0,i.jsx)("div",{className:ee().effect,ref:o}),(0,i.jsx)("div",{className:ee().effect,ref:s})]})},et=t(4839),ei=t.n(et),er=e=>{let{color:n,bold:t,handleClick:r}=e;return(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{onClick:r,className:ei().container,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:n,stroke:n,"stroke-width":t,"stroke-linecap":"round","stroke-linejoin":"round",width:"60",height:"60",children:[(0,i.jsx)("button",{}),(0,i.jsx)("path",{d:"M 12,4v 16m -4,-4l 4,4l 4,-4"})]})})},eo=t(892),es=t.n(eo),ea=e=>{let{children:n}=e;return(0,i.jsx)("div",{className:es().uiContainer,children:n})},ec=t(3381),el=t.n(ec),ed=e=>{let{timer:n,children:t}=e,[o,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=setTimeout(()=>{s(!0)},n);return()=>{clearTimeout(e)}},[]),(0,i.jsx)("div",{className:"".concat(o?el().uiContainer:el().noneContainer),children:t})},eu=t(620),eh=t.n(eu),ex=e=>{let{title:n,uri:t,uri2:o}=e,[s,a]=(0,r.useState)(!1),[c,l]=(0,r.useState)(!1);return(0,r.useRef)(null),(0,r.useEffect)(()=>{let e=setTimeout(()=>{a(!0)},500);return()=>{clearTimeout(e)}},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:eh().container,children:[(0,i.jsx)("div",{className:eh().containerMain,children:n}),(0,i.jsx)("div",{className:"".concat(s?eh().containerIcon:eh().noneContainerIcon),onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:(0,i.jsx)("img",{src:"/portfolio"+"".concat(c?o:t),alt:"",width:100,height:100,className:eh().icon})})]})})},e_=t(9867),ep=t.n(e_),em=e=>{let{content:n}=e;return(0,i.jsx)("div",{className:ep().container,children:n})},ef=t(9974),ej=t.n(ef),eg=e=>{let{content:n}=e;return(0,i.jsx)("div",{className:ej().container,children:n})},ev=t(5676),eC=t.n(ev),eN=e=>{let{timer:n,children:t}=e,[o,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=setTimeout(()=>{s(!0)},n);return()=>{clearTimeout(e)}},[]),(0,i.jsx)("div",{className:"".concat(o?eC().uiContainer:eC().noneContainer),children:t})},ew=t(2115),ek=t.n(ew),eb=e=>{let{platform:n,content:t,href:r}=e;return(0,i.jsxs)("div",{className:ek().tag,children:[n," : ",(0,i.jsx)("a",{href:r,children:t})]})},eE=t(5777),ey=t.n(eE),eI=e=>{let{handleClickVector:n}=e;return(0,i.jsxs)("div",{className:ey().container,children:[(0,i.jsx)("div",{className:ey().fadeInContainer,children:(0,i.jsx)(ea,{children:(0,i.jsx)(ex,{title:"FORCE IS POWER",uri:"/bird.png",uri2:"/birdzoom.png"})})}),(0,i.jsxs)("div",{className:ey().slideUpContainer,children:[(0,i.jsx)(ed,{timer:700,children:(0,i.jsx)(em,{content:"Asaringo"})}),(0,i.jsx)(ed,{timer:700,children:(0,i.jsx)(eg,{content:"Software Engineer"})})]}),(0,i.jsx)("div",{className:ey().fadeInWithTimerContainer,children:(0,i.jsxs)(eN,{timer:1e3,children:[(0,i.jsx)(eb,{platform:"Github",content:"@asaringo99",href:"https://github.com/asaringo99"}),(0,i.jsx)(eb,{platform:"Quita",content:"@asaringo",href:"https://github.com/asaringo99"}),(0,i.jsx)(eb,{platform:"Zenn",content:"@asaringo",href:"https://github.com/asaringo99"})]})}),(0,i.jsx)(en,{content:"Hi! Welcome To My Portfolio!",nextContent:"Enjoy Asaringo's Web Page!"}),(0,i.jsx)(x,{height:"100%",width:"100%",padding:"5px",children:(0,i.jsx)(er,{color:"rgb(0, 0, 0)",bold:3,handleClick:n})})]})},eT=t(5748),eW=t.n(eT),eS=e=>{let{title:n}=e;return(0,i.jsxs)("div",{className:eW().container,children:[(0,i.jsx)("div",{className:eW().title,children:n}),(0,i.jsxs)("div",{className:eW().content,children:[(0,i.jsx)("div",{className:eW().textContainer,children:"こんにちは！ asaringoといいます！"}),(0,i.jsx)("div",{className:eW().textContainer,children:"2021年卒の社会人3年目エンジニアです。"}),(0,i.jsx)("div",{className:eW().textContainer,children:"Webアプリケーションや機械学習など"}),(0,i.jsx)("div",{className:eW().textContainer,children:"様々な領域での業務経験があります。"}),(0,i.jsx)("div",{className:eW().textContainer,children:"色々手を出し若干迷走気味な私ですが"}),(0,i.jsx)("div",{className:eW().textContainer,children:"今後はWeb系やインフラ系のエンジニアとして"}),(0,i.jsx)("div",{className:eW().textContainer,children:"腰を据えてキャリアを築きたいと考えています。"}),(0,i.jsx)("div",{className:eW().textContainer,children:"どうぞ、よろしくお願いいたします！"})]})]})},eF=()=>(0,i.jsx)(eS,{title:"About Me"}),eA=()=>{let[e,n]=(0,r.useState)(null),t=(0,r.useRef)({}),s=(0,r.useRef)(null),a=(0,i.jsx)(eI,{handleClickVector:()=>{s.current&&s.current.scrollIntoView({behavior:"smooth"})}}),l=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{ref:s}),(0,i.jsx)(eF,{})]}),u=(0,i.jsx)(y,{title:"Skills"}),h=(0,i.jsx)(G,{title:"Works"}),_=[{id:"welcome",name:"Welcome",height:"25%",width:"100%",element:a},{id:"aboutme",name:"AboutMe",height:"25%",width:"100%",element:l},{id:"skills",name:"Skills",height:"25%",width:"100%",element:u},{id:"works",name:"Works",height:"25%",width:"100%",element:h},{id:"thanks",name:"Thanks"}];return(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&n(e.target.id)})},{threshold:.3});return _.forEach(n=>{let i=t.current[n.id];i&&e.observe(i)}),()=>{_.forEach(n=>{let i=t.current[n.id];i&&e.unobserve(i)})}},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{}),(0,i.jsxs)("div",{style:{cursor:"none"},className:d().container,children:[(0,i.jsxs)(Y.Provider,{value:e,children:[_.map(e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(x,{height:e.height,width:e.width,children:[(0,i.jsx)("span",{id:e.id,ref:n=>t.current[e.id]=n||null}),e.element]})})),(0,i.jsx)(J,{tableOfContents:_}),(0,i.jsx)(V.Z,{}),(0,i.jsx)(K.Z,{})]}),(0,i.jsx)("span",{id:"thanks",ref:e=>t.current.thanks=e||null}),(0,i.jsx)(c,{})]})]})}},9720:function(e){e.exports={container:"Container_container__WAGEk"}},9867:function(e){e.exports={container:"ContentH1_container__pY_NA"}},892:function(e){e.exports={uiContainer:"FadeIn_uiContainer__UBuDg","fade-in":"FadeIn_fade-in__MyGvk"}},5676:function(e){e.exports={noneContainer:"FadeInWithTimer_noneContainer__BVt1N",uiContainer:"FadeInWithTimer_uiContainer__4xzom","fade-in":"FadeInWithTimer_fade-in__U5OeQ"}},4206:function(e){e.exports={footerContainer:"FooterWithScroll_footerContainer__H4uhj",scrollButton:"FooterWithScroll_scrollButton__cZEBU",textContainer:"FooterWithScroll_textContainer__Zl_Ug",copyright:"FooterWithScroll_copyright__4O7Xh"}},3801:function(e){e.exports={nav:"Header_nav__uJ8Zp",items:"Header_items__wCtTt"}},8218:function(e){e.exports={cursor:"CursorCircle_cursor__vD5Ib",hovered:"CursorCircle_hovered__AfodQ"}},1677:function(e){e.exports={cursor:"FollowingCircle_cursor__YiNm0",hovered:"FollowingCircle_hovered__KXlXm"}},9974:function(e){e.exports={container:"Occupation_container__tseB0"}},9998:function(e){e.exports={container:"PopUp_container__RKUX_",overlay:"PopUp_overlay__t_Kdv",popup:"PopUp_popup__XIXP9",closeButton:"PopUp_closeButton__GCxeO"}},4221:function(e){e.exports={container:"CardContainer_container__cPsv3"}},754:function(e){e.exports={container:"CardFrame_container__pKd_u"}},4257:function(e){e.exports={container:"SkillCard_container__NrsmR",contents:"SkillCard_contents__73nRZ",icon:"SkillCard_icon__X32oY"}},3381:function(e){e.exports={noneContainer:"Slide_noneContainer__brisR",uiContainer:"Slide_uiContainer__gHKB_","slide-up":"Slide_slide-up__9fJK_"}},876:function(e){e.exports={container:"TableOfContents_container__ScXD9",tableOfContents:"TableOfContents_tableOfContents__9pbiO",active:"TableOfContents_active__2_9wn"}},2115:function(e){e.exports={tag:"Tag_tag__X83Wf"}},620:function(e){e.exports={container:"TitleWithIcon_container__H_EhM",containerMain:"TitleWithIcon_containerMain__IwgpG",noneContainerIcon:"TitleWithIcon_noneContainerIcon__3gLhe",containerIcon:"TitleWithIcon_containerIcon__la9FT","slide-up":"TitleWithIcon_slide-up__qW_Dx",icon:"TitleWithIcon_icon__sqPIX"}},4839:function(e){e.exports={container:"Vector_container__ZlP4m",floating:"Vector_floating__oKbSL"}},2807:function(e){e.exports={container:"CardContainer_container___7vGI"}},4423:function(e){e.exports={container:"WorkCard_container__yOZ_I",contents:"WorkCard_contents__XOJZl",icon:"WorkCard_icon__P3pCn"}},1450:function(e){e.exports={container:"WorkCardFrame_container__6xjlg"}},5748:function(e){e.exports={container:"AboutMyInfo_container__3r8yn",title:"AboutMyInfo_title__u0_uV",content:"AboutMyInfo_content__Zl_3A",textContainer:"AboutMyInfo_textContainer__vEHif"}},1559:function(e){e.exports={container:"Reception_container__GKGVT",effect:"Reception_effect__LZOyr",textAppear:"Reception_textAppear__0bFeF"}},5777:function(e){e.exports={container:"page_container__gdVAO",slideUpContainer:"page_slideUpContainer__z7s4f",fadeInContainer:"page_fadeInContainer__cQrFb",fadeInWithTimerContainer:"page_fadeInWithTimerContainer__6t1A9"}},4945:function(e){e.exports={container:"Skill_container___oYPE",title:"Skill_title__1XvK1",content:"Skill_content__qd8ay",cardContainer:"Skill_cardContainer__Z1F9Z"}},8589:function(e){e.exports={container:"Works_container__eRkuc",title:"Works_title__AXHO1",content:"Works_content__jBnh0",cardContainer:"Works_cardContainer__Ltk3o"}},8122:function(e){e.exports={container:"Home_container__bCOhY"}}},function(e){e.O(0,[196,664,853,774,888,179],function(){return e(e.s=4309)}),_N_E=e.O()}]);