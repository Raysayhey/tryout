(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/8Fb":function(e,t,r){var n=r("XKFU"),i=r("UExd")(!0);n(n.S,"Object",{entries:function(e){return i(e)}})},"0GOF":function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return p}));r("f3/d"),r("a1Th"),r("Btvt"),r("XfO3"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf"),r("dRSK");var n=r("q1tI"),i=r.n(n),a=r("TJpk"),o=r.n(a),s=r("kC3F"),l=r("Wbzz"),c=r("qKvR"),u={layout:{name:"15mtm34",styles:"margin-bottom:1.45rem;position:relative;z-index:4;"},pageContainer:{name:"ck2ptl",styles:"margin:0px auto;padding:1vmin 4em 0;flex:auto;"}},d=r("eMCK"),f=function(e){var t=e.title,r=e.children,n=e.bgClassName,a=e.fixedMenuPosition,f=void 0!==a&&a;return Object(c.c)("div",{className:"layout-wrapper "+(n||"white")},Object(c.c)(l.StaticQuery,{query:"1747682184",render:function(e){var a=e.site.siteMetadata,s=a.title,l=a.siteKeywords,m=a.siteDescription;return Object(c.c)(i.a.Fragment,null,Object(c.c)(o.a,{title:t||s,meta:[{name:"description",content:m},{name:"keywords",content:l},{charSet:"utf-8"}]},Object(c.c)("html",{lang:"en"})),Object(c.c)("div",{className:"layout-inner"},Object(c.c)("div",{css:u.layout},Object(c.c)(d.a,{bgClassName:n,numPoints:18,duration:600,delayPointsMax:300,delayPerPath:100,fixedMenuPosition:f})),Object(c.c)("div",{css:u.pageContainer},r)))},data:s}))},m=r("znVL");function b(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t=e.data,r=e.transitionStatus,n=[];return((t||{}).allMarkdownRemark||{}).edges&&(n=t.allMarkdownRemark.edges.reduce((function(e,t){var r=t.node.frontmatter.skills;if(r){var n=r.reduce((function(t,r){return e.find((function(e){return e.title===r.title}))||t.push(r),t}),[]);return[].concat(b(e),b(n))}return e}),[])),Object(c.c)(f,{title:"Skills",bgClassName:"skill",fixedMenuPosition:!0},Object(c.c)(a.Helmet,null,Object(c.c)("title",null,"Skills")),Object(c.c)(m.a,{skills:n,type:"scrollable",title:"Skills",description:"These are the skills that I have acquired through my years of experience working as a software developer, the order is based on the ones I like most and or I have used.",transitionStatus:r}))};var p="2979024225"},"4IfK":function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.useIsomorphicLayoutEffect=void 0;var n=r("q1tI"),i="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;t.useIsomorphicLayoutEffect=i},OTAv:function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollPosition=s;var n=r("q1tI"),i=r("4IfK"),a="undefined"!=typeof window;function o(e){var t=e.element,r=e.useWindow;if(!a)return{x:0,y:0};var n=(t?t.current:document.body).getBoundingClientRect();return r?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function s(e,t,r,s,l){var c=(0,n.useRef)(o({useWindow:s})),u=null,d=function(){var t=o({element:r,useWindow:s});e({prevPos:c.current,currPos:t}),c.current=t,u=null};(0,i.useIsomorphicLayoutEffect)((function(){if(a){var e=function(){l?null===u&&(u=setTimeout(d,l)):d()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}}),t)}s.defaultProps={deps:[],element:!1,useWindow:!1,wait:null}},"Wi/c":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"basePath":"","menuLinks":[{"color":"#000","title":"Home","link":"","name":"home"},{"color":"#3a3d98","title":"Experience","link":"","name":"experience"},{"color":"#d52d43","title":"Skills","link":"","name":"skills"},{"color":"#fff","title":"About Me","link":"","name":"aboutMe"}],"shapeColor":{"link":{"color":"#171616","hover":"#fff"},"shape1":{"opacity":"0.7","color":"#413f46"},"shape2":{"opacity":"0.7","color":"#e6e5ea"},"shape3":{"opacity":"0.7","color":"#fff"}}}}}}')},eMCK:function(e,t,r){"use strict";r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("91GP");var n=r("iYmT"),i=(r("rGqo"),r("yt8O"),r("Btvt"),r("/8Fb"),r("f3/d"),r("tUrg"),r("bHtr"),r("Wi/c")),a=r("q1tI"),o=r("kOA+"),s=r.n(o),l=r("qKvR"),c=r("lVho"),u=Object(c.a)([{type:"max",size:"55"}])[0],d={portfolio:Object(l.b)('&::after{content:"";width:100vw;height:100vh;position:fixed;pointer-events:none;top:0;left:0;transform:translateZ(1000px);}.hamburger{width:64px;height:64px;display:block;position:relative;cursor:pointer;position:absolute;top:0.5em;left:1.25em;z-index:110;pointer-events:auto;background:none;border:none;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);&::after{width:64px;height:64px;content:"";display:block;position:absolute;top:0;left:0;pointer-events:none;}',u,'{position:fixed;}}.global-menu-item{font-size:4vmax;opacity:0;transform:translateY(-100%);pointer-events:none;display:block;margin:0.25em 0;transition:transform 0.3s,opacity 0.3s;transition-timing-function:ease-in;outline:none;&:nth-of-type(1){transition-delay:0s;}&:nth-of-type(2){transition-delay:0.05s;}&:nth-of-type(3){transition-delay:0.1s;}&:nth-of-type(4){transition-delay:0.15s;}&:nth-of-type(5){transition-delay:0.2s;}&:nth-of-type(6){transition-delay:0.25s;}&:nth-of-type(7){transition-delay:0.3s;}&:nth-of-type(8){transition-delay:0.35s;}&:nth-of-type(9){transition-delay:0.4s;}&:nth-of-type(10){transition-delay:0.45s;}&.is-opened{opacity:1;transform:translateY(0) rotate(0);pointer-events:auto;transition-timing-function:ease;}&.is-opened:nth-of-type(1){transition-delay:0.85s;}&.is-opened:nth-of-type(2){transition-delay:0.8s;}&.is-opened:nth-of-type(3){transition-delay:0.75s;}&.is-opened:nth-of-type(4){transition-delay:0.6s;}&.is-opened:nth-of-type(5){transition-delay:0.9s;}&.is-opened:nth-of-type(6){transition-delay:0.95s;}&.is-opened:nth-of-type(7){transition-delay:1s;}&.is-opened:nth-of-type(8){transition-delay:1.05s;}&.is-opened:nth-of-type(9){transition-delay:1.1s;}&.is-opened:nth-of-type(10){transition-delay:1.15s;}}.hamburger-line{width:28px;height:2px;overflow:hidden;position:absolute;z-index:10;}.hamburger-line-in{width:84px;height:2px;position:absolute;top:0;left:0;transition-duration:0.6s;transition-timing-function:cubic-bezier(0.19,1,0.22,1);&::before{left:-56px;}&::after{left:0;}&::before,&::after{width:28px;height:2px;content:"";display:block;position:absolute;top:0;transition-timing-function:cubic-bezier(0.19,1,0.22,1);transition-property:transform;}}.hamburger-line-1{top:24.6px;}.hamburger-line-1,.hamburger-line-2,.hamburger-line-3,.hamburger-line-cross-1,.hamburger-line-cross-2{left:18px;}.hamburger-line-2,.hamburger-line-cross-1,.hamburger-line-cross-2{top:31px;}.hamburger-line-3{top:37.4px;}.hamburger-line-cross-1{transform:rotate(45deg);}.hamburger-line-cross-2{transform:rotate(-45deg);}.hamburger-line{transition-duration:0.6s;transition-timing-function:cubic-bezier(0.19,1,0.22,1);}.hamburger-line-in-cross-1,.hamburger-line-in-cross-2{transform:translateX(-33.3%);}.hamburger-line-in-1{transition-delay:0.2s;}.hamburger-line-in-2{transition-delay:0.25s;&::before,&::after{transition-delay:0.05s;}}.hamburger-line-in-3{transition-delay:0.3s;&::before,&::after{transition-delay:0.1s;}}.hamburger-line-in-cross-1{transition-delay:0s;}.hamburger-line-in-cross-2{transition-delay:0.05s;&::before,&::after{transition-delay:0.1s;}}.hamburger.is-opened-navi .hamburger-line-in::before,.hamburger.is-opened-navi .hamburger-line-in::after{background-color:#000;}.hamburger.is-opened-navi .hamburger-line-in-1,.hamburger.is-opened-navi .hamburger-line-in-2,.hamburger.is-opened-navi .hamburger-line-in-3{transform:translateX(33.3%);}.hamburger.is-opened-navi .hamburger-line-in-cross-1,.hamburger.is-opened-navi .hamburger-line-in-cross-2{transform:translateX(0);}.hamburger.is-opened-navi .hamburger-line-in-1{transition-delay:0s;}.hamburger.is-opened-navi .hamburger-line-in-2{transition-delay:0.05s;}.hamburger.is-opened-navi .hamburger-line-in-3{transition-delay:0.1s;}.hamburger.is-opened-navi .hamburger-line-in-cross-1{transition-delay:0.25s;}.hamburger.is-opened-navi .hamburger-line-in-cross-2{transition-delay:0.3s;}.hamburger:hover .hamburger-line-in::before,.hamburger:hover .hamburger-line-in::after{transform:translateX(200%);}.hamburger:hover .hamburger-line-in-1::before,.hamburger:hover .hamburger-line-in-1::after,.hamburger:hover .hamburger-line-in-2::before,.hamburger:hover .hamburger-line-in-2::after,.hamburger:hover .hamburger-line-in-3::before,.hamburger:hover .hamburger-line-in-3::after{transition-duration:1s;}.hamburger:hover .hamburger-line-in-cross-1::before,.hamburger:hover .hamburger-line-in-cross-1::after,.hamburger:hover .hamburger-line-in-cross-2::before,.hamburger:hover .hamburger-line-in-cross-2::after{transition-duration:0s;}.hamburger.is-opened-navi:hover .hamburger-line-in-cross-1::before,.hamburger.is-opened-navi:hover .hamburger-line-in-cross-1::after,.hamburger.is-opened-navi:hover .hamburger-line-in-cross-2::before,.hamburger.is-opened-navi:hover .hamburger-line-in-cross-2::after{transition-duration:1s;}.hamburger.is-opened-navi:hover .hamburger-line-in-1::before,.hamburger.is-opened-navi:hover .hamburger-line-in-1::after,.hamburger.is-opened-navi:hover .hamburger-line-in-2::before,.hamburger.is-opened-navi:hover .hamburger-line-in-2::after,.hamburger.is-opened-navi:hover .hamburger-line-in-3::before,.hamburger.is-opened-navi:hover .hamburger-line-in-3::after{transition-duration:0s;}'),fixedPosition:{name:"1echnyc",styles:"position:fixed;top:0;left:0;"},globalMenu:{name:"16np7s5",styles:"width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;position:fixed;top:0;left:0;pointer-events:none;z-index:100;"},shape:{name:"gxc0ac",styles:"width:100vw;height:100%;pointer-events:none;position:fixed;z-index:2;top:0;left:0;&.is-opened{pointer-events:auto;}"}};function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.a=function(e){var t,r=e.numPoints,o=e.duration,c=e.delayPointsMax,u=e.delayPerPath,m=e.fixedMenuPosition,h=(e.bgClassName,{home:{title:"Home",color:"#000",url:"/"},experience:{title:"Experience",color:"#3a3d98",url:"/experience"},skills:{title:"Skills",color:"#d52d43",url:"/skills"},aboutMe:{title:"About Me",color:"#fff",url:"/about-me"}}),p=Object(a.useState)(null),g=p[0],y=p[1],v=Object(a.useRef)(),x=Object(a.useRef)(!1),O=Array(3).fill(""),j=Object(a.useRef)(O.map(a.createRef));function w(e){var t=e.title,r=e.color,n=e.url;return Object(l.c)(s.a,{paintDrip:!0,key:n,to:n,hex:r,className:"global-menu-item"+(g?" is-opened":"")},t)}Object(a.useEffect)((function(){var e=[],t=Date.now();function n(t){for(var n,i=[],a=0;a<r+1;a++)i[a]=100*((n=Math.min(Math.max(t-e[a],0)/o,1))<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1);var s="";s+=g?"M 0 0 V "+i[0]+" ":"M 0 "+i[0]+" ";for(var l=0;l<r-1;l++){var c=(l+1)/(r-1)*100,u=c-1/(r-1)*100/2;s+="C "+u+" "+i[l]+" "+u+" "+i[l+1]+" "+c+" "+i[l+1]+" "}return s+=g?"V 0 H 0":"V 100 H 0"}function i(){!function(){for(var e=0;e<j.current.length;e++)j.current[e].current.setAttribute("d",n(Date.now()-(t+u*(g?e:j.current.length-e-1))))}(),Date.now()-t<o+u*(j.current.length-1)+c?requestAnimationFrame((function(){i()})):x.current=!1}null!==g&&function(){x.current=!0;for(var n=4*Math.random()+6,a=0;a<r;a++){var o=a/(r-1)*Math.PI;e[a]=(Math.sin(-o)+Math.sin(-o*n)+2)/4*c}t=Date.now(),i()}()}),[u,c,o,g,r]);var k=i.data.site.siteMetadata,S=k.basePath,I=k.menuLinks,P=k.shapeColor,A=Object(l.b)("& a{color:",P.link.color,";}& a:hover{color:",P.link.hover,";}"),E=m?[d.portfolio,d.fixedPosition]:d.portfolio;I.forEach((function(e){var t=e.name,r=e.title,n=e.color,i=e.link,a=h[t];a?(a.title=r||a.title,a.color=n||a.color,a.url=S?""+S+a.url:a.url):i&&r&&(h.newItems=h.newItems||[],h.newItems.push({title:r,link:i,color:n||"#000"}))}));var M=Object.entries(h).map((function(e){e[0];var t=e[1];return Array.isArray(t)?t.map((function(e){return w({title:e.title,color:e.color,url:e.link})})):w(t)}));return M=(t=[]).concat.apply(t,f(M)),Object(l.c)("main",{css:E},Object(l.c)("div",null,Object(l.c)("button",{className:"hamburger"+(g?" is-opened-navi":""),ref:v,"data-test":"menu",onClick:function(){if(x.current)return!1;y(!g)}},Object(l.c)("div",{className:"hamburger-line hamburger-line-1"},Object(l.c)("div",{className:"hamburgercolr hamburger-line-in hamburger-line-in-1"})),Object(l.c)("div",{className:"hamburger-line hamburger-line-2"},Object(l.c)("div",{className:"hamburgercolr hamburger-line-in hamburger-line-in-2"})),Object(l.c)("div",{className:"hamburger-line hamburger-line-3"},Object(l.c)("div",{className:"hamburgercolr hamburger-line-in hamburger-line-in-3"})),Object(l.c)("div",{className:"hamburger-line hamburger-line-cross-1"},Object(l.c)("div",{className:"hamburgercolr hamburger-line-in hamburger-line-in-cross-1"})),Object(l.c)("div",{className:"hamburger-line hamburger-line-cross-2"},Object(l.c)("div",{className:"hamburgercolr hamburger-line-in hamburger-line-in-cross-2"}))),Object(l.c)("div",{css:Object(n.a)([d.globalMenu,A]),"data-test":"menulinks"},Object(l.c)("div",null,M)),function(e){var t=Object(l.b)("&:nth-of-type(1){fill:",e.shape1.color,";opacity:",e.shape1.opacity,";}&:nth-of-type(2){fill:",e.shape2.color,";opacity:",e.shape2.opacity,";}&:nth-of-type(3){fill:",e.shape3.color,";opacity:",e.shape3.opacity,";}");return Object(l.c)("svg",b({css:d.shape},g&&{className:"is-opened"},{viewBox:"0 0 100 100",preserveAspectRatio:"none"}),O.map((function(e,r){return Object(l.c)("path",{key:"path"+r,ref:j.current[r],css:t})})))}(P)))}},kC3F:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Software developer CV Martin Andersen","email":"marander@protonmail.com","siteKeywords":"Application developer, Full Stack Developer, Front-end","siteDescription":"This cool App contains information about my work experience as a software developer."}}}}')},lTFH:function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useScrollPosition",{enumerable:!0,get:function(){return n.useScrollPosition}});var n=r("OTAv")},tUrg:function(e,t,r){"use strict";r("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},znVL:function(e,t,r){"use strict";r("91GP"),r("0mN4");var n=r("q1tI"),i=r.n(n),a=r("lTFH"),o=(r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("bHtr"),r("9eSz")),s=r.n(o),l=r("EgnG"),c=r("qKvR"),u=r("lVho"),d=Object(u.a)([{type:"max",size:"36"},{type:"max",size:"50"}]),f=d[0],m=d[1],b="\n  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  height: 100%;\n  border-radius: 2%;\n  background: #fff;\n  margin: 0;\n  padding: 0;\n  position: relative;\n",h="\n  width: 200px;\n  padding: 10px;\n  margin: 0;\n  transform-style: preserve-3d;\n  backface-visibility: hidden;\n  "+f+" {\n    width: 150px;\n  }\n",p={textRight:{name:"s2uf1z",styles:"text-align:right;"},elementRight:{name:"ky9fov",styles:"margin:1em 0 0 auto;"},section:Object(c.b)("width:100%;padding:0 3vmax;h2{margin:0 0 1rem;font-size:3rem;line-height:1.25;",m,"{font-size:2.4rem;}}p{padding:0;font-weight:700;max-width:60%;",m,"{font-size:1em;line-height:1.2em;max-width:500px;}}"),sectionStatic:Object(c.b)("width:100%;padding:4vmax;h2{font-size:6em;",f,"{font-size:2.5em;}}p{font-size:1em;max-width:400px;font-weight:700;position:relative;}"),noPointerEvents:{name:"1ixbp0l",styles:"pointer-events:none;"},header:{name:"153aegd",styles:"padding:0 3vmax;"},headerStatic:{name:"rqgsqp",styles:"position:relative;z-index:1;"},fixed:{name:"1b7bwed",styles:"position:fixed;"},gridLayer:{name:"8atqhb",styles:"width:100%;"},gridLayerRight:Object(c.b)("transform:perspective(3000px) translateY(-70px) rotateX(55deg) rotateZ(-45deg);transform-origin:center center;",m,"{width:calc(100% + 450px);transform:perspective(3000px) translateY(-17rem) rotateX(55deg) rotateZ(-45deg);transform-origin:center bottom;}"),gridLayerLeft:{name:"1dks6k5",styles:"transform:translateX(0) translateY(0) rotateX(45deg) rotateZ(45deg);position:fixed;z-index:2;transform-origin:top left;padding-top:10rem;padding-left:20rem;width:calc(80% + 20rem);"},gridHeight:{name:"io2hdt",styles:"width:100%;pointer-events:none;"},grid:{name:"19q5ot5",styles:"margin:0 auto;padding:0;list-style:none;display:flex;flex-direction:row;flex-wrap:wrap;transform-style:flat;transform:translate3d(0,0,0);justify-content:flex-start;"},gridItem:Object(c.b)(h,' &:hover span{opacity:1;transform:translate3d(0,-5px,0);}&::before{content:"";position:absolute;z-index:-1;top:5px;right:5px;bottom:5px;left:5px;background:rgba(0,0,0,0.4);box-shadow:0 0 14px 1px rgba(0,0,0,0.4);transform:translateZ(-1px) scale(0.9);transition:transform 0.3s,opacity 0.3s,box-shadow 0.3s;backface-visibility:hidden;border-radius:2%;}&:hover{&::before{box-shadow:0 0 20px 10px rgba(0,0,0,0.4);}}'),gridItemStatic:Object(c.b)(h),gridImgContainer:{name:"h27x57",styles:"position:relative;cursor:pointer;z-index:1;display:block;"},gridImg:Object(c.b)(b),gridImgStatic:Object(c.b)(b," &:not(:first-of-type){position:absolute;top:0;left:0;}&:nth-of-type(1){background-color:#2d2d2d;border-radius:3%;}&:nth-of-type(2){background-color:#323232;border-radius:3%;}&:nth-of-type(3){background-color:#373737;border-radius:3%;}&:nth-of-type(4){background-color:#fff;}"),gridTitle:{name:"sxv47p",styles:"font-size:1.1em;font-weight:600;position:absolute;z-index:-1;bottom:0;width:100%;text-align:center;letter-spacing:2px;text-transform:uppercase;color:#fff;opacity:0;transform:translate3d(0,-20px,0);transition:transform 0.3s,opacity 0.3s;"}};function g(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e){var t=e.type,r=e.title,a=e.image,o=Array(4).fill(""),u=Object(n.useRef)(null),d=Object(n.useRef)(),f=Object(n.useRef)(o.map(n.createRef));return Object(n.useEffect)((function(){function e(e,r,n){void 0===n&&(n=!0);var i=e.target;if(n&&(i.style.zIndex=2),"static"===t)for(var a,o=g(f.current);!(a=o()).done;){r(a.value.current)}else r(d.current)}function r(r){e(r,(function(e){l.a.remove(e),"static"===t?Object(l.a)({targets:e,translateX:function(){return l.a.random(-60,60)},translateY:function(){return l.a.random(-60,60)},rotateZ:function(){return l.a.random(-10,10)},duration:1e3,easing:"cubicBezier(.2, 1, .2, 1)",delay:20}):Object(l.a)({targets:e,translateX:-50,translateY:-50})}))}function n(r){e(r,(function(e){l.a.remove(e),Object(l.a)({targets:e,translateX:0,translateY:0,rotateZ:0,duration:400,easing:"static"===t?"easeInOutExpo":"easeOutElastic(1, .5)",complete:function(){r.target.style.zIndex=1}})}),!1)}var i=u.current;if(i)return i.addEventListener("mouseenter",r),i.addEventListener("mouseleave",n),function(){i.removeEventListener("mouseenter",r),i.removeEventListener("mouseleave",n)}}),[t]),Object(c.c)("li",{css:"static"===t?p.gridItemStatic:p.gridItem,ref:u},Object(c.c)("div",{css:p.gridImgContainer},"static"===t?o.map((function(e,t){return Object(c.c)("div",{css:p.gridImgStatic,key:"anImg"+t,ref:f.current[t],style:0!==t?{position:"absolute",overflow:"visible"}:{overflow:"visible"}},Object(c.c)(s.a,{fluid:a.childImageSharp.fluid,alt:r}))})):Object(c.c)(i.a.Fragment,null,Object(c.c)("div",{css:p.gridImg,ref:d},Object(c.c)(s.a,{fluid:a.childImageSharp.fluid,style:{overflow:"visible"},alt:r})),Object(c.c)("span",{css:p.gridTitle},r))))},x=r("CWtr");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.a=function(e){var t=e.skills,r=e.title,o=e.description,s=e.showLoadingAnimation,l=void 0===s||s,u=(e.transitionStatus,e.type),d=void 0===u?"static":u,f=e.style,m=void 0!==f&&f,b=Object(n.useState)(!1),h=b[0],g=b[1],y=Object(n.useRef)(null),j=Object(n.useRef)(null),w=Object(n.useRef)(null);Object(a.useScrollPosition)((function(e){var t=e.currPos;"static"!==d&&h&&(y.current.style.transform="translate3d(0, "+t.y+"px, 0)")})),Object(n.useEffect)((function(){w.current=document.querySelector(".tl-wrapper"),"static"!==d&&h&&(j.current.style.height="calc("+y.current.clientHeight+"px + 45rem)")}),[d,h]);var k="static"===d?{section:p.sectionStatic,header:[p.header,p.headerStatic,p.noPointerEvents],h2:[p.textRight,p.noPointerEvents],p:[p.textRight,p.elementRight,p.noPointerEvents],div:[p.gridLayer,p.gridLayerRight]}:{section:p.section,header:[p.header,p.fixed,p.noPointerEvents],h2:p.noPointerEvents,p:p.noPointerEvents,div:[p.gridLayer,p.gridLayerLeft]};return Object(c.c)("main",O({css:p.section},m&&{style:m}),Object(c.c)("header",{css:k.header},Object(c.c)("h2",{css:k.h2},r),Object(c.c)("p",{css:k.p},o)),Object(c.c)(x.a,{wait:1e3,cb:function(){g(!0)},showLoadingAnimation:l},Object(c.c)("div",{css:k.div},Object(c.c)("ul",{css:p.grid,"data-test":"skills",ref:y},(w.current&&(w.current.style.removeProperty?w.current.style.removeProperty("transform"):w.current.style.removeAttribute("transform")),h?t.map((function(e){var t=e.title,r=e.image;return Object(c.c)(v,{type:d,title:t,key:t,image:r})})):Object(c.c)(i.a.Fragment,null))))),Object(c.c)("div",{css:p.gridHeight,ref:j}))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-banshorian-src-pages-skills-js-28b6ca17d4c029e603c0.js.map