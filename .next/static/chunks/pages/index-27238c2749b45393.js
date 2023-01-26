(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5372)}])},9573:function(n,e,t){"use strict";t.d(e,{Z:function(){return F}});var i=t(7297),r=t(5893),o=t(2010);t(6130),t(4603);var l=t(4217),a=t(5675),s=t.n(a),c=t(1664),d=t.n(c),u=t(7294),h=t(1163);function f(){let n=(0,i.Z)(["\n  display: flex;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]);return f=function(){return n},n}function x(){let n=(0,i.Z)(["\n  position: relative;\n  margin-right: 0.75rem;\n  width: 100%;\n"]);return x=function(){return n},n}function p(){let n=(0,i.Z)(["\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n"]);return p=function(){return n},n}function g(){let n=(0,i.Z)(["\n  color: var(--fg);\n  width: 1.2rem;\n  height: 1.2rem;\n"]);return g=function(){return n},n}function m(){let n=(0,i.Z)(["\n  display: block;\n  width: 100%;\n  max-width: 30rem;\n  padding-left: 2.5rem;\n  height: 40px;\n  border-radius: 15px;\n  background: var(--fading-bg);\n  color: var(--fg);\n  border: none;\n\n  :focus {\n    outline-color: var(--main);\n  }\n"]);return m=function(){return n},n}function v(){let n=new h.useRouter,e=(0,u.useRef)(),[t,i]=(0,u.useState)(""),o=()=>{e.current.style.display="none"},l=()=>{e.current.style.display="block"},a=e=>{"Enter"===e.key&&(localStorage.setItem("search",t),n.push("../explore/search"))};return(0,r.jsx)(w,{children:(0,r.jsxs)(j,{children:[(0,r.jsx)(k,{type:"text",placeholder:"Looking for something ?",onFocus:o,onBlur:l,onKeyDown:n=>a(n),onChange:n=>i(n.target.value)}),(0,r.jsx)(b,{ref:e,children:(0,r.jsx)(Z,{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})})]})})}let w=l.Z.div(f()),j=l.Z.div(x()),b=l.Z.div(p()),Z=l.Z.svg(g()),k=l.Z.input(m());var y=t(3313);function _(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  height: 70px;\n  width: 100%;\n  padding: 5px 2rem;\n  background-color: var(--bg);\n  position: sticky;\n  z-index: 99;\n  max-width: 1920px;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  overflow: hidden;\n"]);return _=function(){return n},n}function z(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 6px;\n  cursor: pointer;\n  div {\n    width: 40px;\n    height: 4px;\n    background-color: black;\n    border-radius: 2px;\n  }\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);return z=function(){return n},n}function N(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n  position: fixed;\n  top: 60px;\n  width: 288px;\n  height: 25%;\n  row-gap: 24px;\n  right: -288px;\n  padding: 24px 16px;\n  border-radius: 10px;\n  background-color: var(--bg);\n  transition: all ease-in 300ms;\n\n  @media (min-width: 768px) {\n    position: unset;\n    flex-direction: row;\n    min-height: fit-content;\n    width: fit-content;\n    column-gap: 24px;\n    align-items: center;\n    width: 100%;\n    margin-top: 0;\n  }\n"]);return N=function(){return n},n}function E(){let n=(0,i.Z)(["\n  .nav__link {\n    font-size: 18px;\n    position: relative;\n    transition: ease-in-out 0.3s;\n  }\n\n  a {\n    margin-right: 50px;\n  }\n\n  @media (min-width: 768px) {\n    .nav__link::before {\n      content: '';\n      position: absolute;\n      width: 0%;\n      height: 3px;\n      bottom: -10px;\n      left: 0;\n      background-color: var(--main);\n      transition: ease-in-out 0.3s;\n    }\n\n    .nav__link:hover:before {\n      width: 100%;\n    }\n  }\n"]);return E=function(){return n},n}function C(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  height: 70px;\n"]);return C=function(){return n},n}function R(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  gap: 1rem;\n"]);return R=function(){return n},n}function O(){let n=(0,i.Z)(["\n  display: none;\n  font-family: 'Righteous', cursive;\n\n  @media (min-width: 768px) {\n    display: block;\n    font-size: 1.9rem;\n    margin-left: 7px;\n  }\n"]);return O=function(){return n},n}function S(){let n=(0,i.Z)(["\n  @media (min-width: 768px) {\n    position: absolute;\n    right: -15px;\n    top: 14px;\n  }\n"]);return S=function(){return n},n}function F(){let[n,e]=(0,u.useState)(null),{theme:t,setTheme:i}=(0,o.F)(),[l,a]=(0,u.useState)(!1),[c,h]=(0,u.useState)(null);return((0,u.useEffect)(()=>{a(!0),e(window.localStorage.profile_id)},[]),console.log(n),l)?(0,r.jsxs)(M,{children:[(0,r.jsxs)(P,{children:[(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)(s(),{priority:!0,src:"/assets/logo.svg",height:60,width:60,alt:""})}),(0,r.jsx)(D,{children:"OpenLake"})]}),(0,r.jsx)(v,{}),(0,r.jsxs)(L,{onClick:()=>h(!c),children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),(0,r.jsxs)(B,{className:"".concat(c?"active":""," nav__menu-list"),children:[n?(0,r.jsxs)(A,{children:[(0,r.jsx)("a",{href:"/explore",className:"nav__link",children:"Explore"}),(0,r.jsx)("a",{href:"/user/profile",className:"nav__link",children:"Profile"})]}):(0,r.jsxs)(A,{children:[(0,r.jsx)("a",{href:"/explore",className:"nav__link",children:"Explore"}),(0,r.jsx)("a",{href:"/user/login",className:"nav__link",children:"Connect"})]}),(0,r.jsx)(T,{className:"theme",children:(0,r.jsx)(y.Z,{})})]})]}):null}let M=l.Z.nav(_()),L=l.Z.div(z()),B=l.Z.div(N()),A=l.Z.div(E()),P=l.Z.div(C());l.Z.nav(R());let D=l.Z.h1(O()),T=l.Z.div(S())},3313:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var i=t(7297),r=t(5893),o=t(2010),l=t(7294),a=t(6130),s=t(4603),c=t(4217);function d(){let n=(0,i.Z)(["\n  width: 48px;\n  height: 48px;\n  align-items: center;\n\n  > * {\n    border-width: 3px;\n    border-style: solid;\n    border-color: var(--fading-bg);\n    background-color: var(--bg);\n    border-image: initial;\n    padding: 6px;\n    border-radius: 50%;\n  }\n\n  @media (min-width: 768px) {\n    position: relative;\n    right: 4rem;\n  }\n"]);return d=function(){return n},n}function u(){let{theme:n,setTheme:e}=(0,o.F)(),[t,i]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{i(!0)},[]),t)?(0,r.jsx)(h,{children:"dark"===n?(0,r.jsx)(a.Z,{className:"theme-select",color:"#F5F3CE",onClick:()=>e("light")}):(0,r.jsx)(s.Z,{className:"theme-select",color:"#FDB813",onClick:()=>e("dark")})}):null}let h=c.Z.div(d())},5372:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var i=t(7297),r=t(5893),o=t(1163),l=t(9008),a=t.n(l),s=t(9573);function c(n){let{children:e,...t}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"OpenLake"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)("main",{className:"px-5",children:e}),(0,r.jsx)("div",{className:"m-auto"})]})]})}var d=t(4217);function u(){let n=(0,i.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 70px);\n  width: 100%;\n  overflow: hidden;\n  max-width: 1920px;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"]);return u=function(){return n},n}function h(){let n=(0,i.Z)(["\n  height: 50%;\n  width: 100%;\n  background: var(--fading-bg);\n  display: flex;\n  align-items: end;\n  justify-content: center;\n\n  h2 {\n    font-family: 'Righteous', cursive;\n    z-index: 999;\n    font-size: 10em;\n    text-align: center;\n    color: var(--fg);\n    align-items: center;\n    -webkit-text-stroke: 3px var(--bg);\n    paint-order: stroke fill;\n  }\n\n  @media (min-width: 1024px) {\n    height: 100%;\n    align-items: center;\n\n    h2 {\n      z-index: 1000;\n      width: 100%;\n      font-size: 20vw;\n      text-align: right;\n      transform: rotate(-3deg);\n    }\n  }\n"]);return h=function(){return n},n}function f(){let n=(0,i.Z)(["\n  display: flex;\n  position: absolute;\n  left: 2%;\n  right: 0%;\n  top: 15%;\n  transform: rotate(-5deg);\n\n  p {\n    font-size: 1.3em;\n  }\n\n  @media (min-width: 1024px) {\n    top: 15%;\n    right: 60%;\n  }\n"]);return f=function(){return n},n}function x(){let n=(0,i.Z)(["\n  img {\n    display: none;\n  }\n\n  @media (min-width: 1024px) {\n    img {\n      display: block;\n      position: absolute;\n      top: 7.5%;\n      left: 50%;\n      width: 35%;\n      margin-left: -15%;\n      z-index: 0;\n    }\n  }\n"]);return x=function(){return n},n}function p(){let n=(0,i.Z)(["\n  height: 50%;\n  width: 100%;\n  background: var(--main);\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n\n  h2 {\n    z-index: 999;\n    font-family: 'Righteous', cursive;\n    font-size: 10em;\n    text-align: center;\n    color: var(--fg);\n    -webkit-text-stroke: 3px var(--bg);\n    align-items: center;\n    paint-order: stroke fill;\n  }\n\n  @media (min-width: 1024px) {\n    height: 100%;\n    align-items: center;\n\n    h2 {\n      z-index: 999;\n      width: 100%;\n      font-size: 20vw;\n      text-align: left;\n      transform: rotate(3deg);\n    }\n  }\n"]);return p=function(){return n},n}function g(){let{locale:n}=(0,o.useRouter)();return(0,r.jsx)(c,{children:(0,r.jsxs)(m,{children:[(0,r.jsxs)(v,{children:[(0,r.jsx)("h2",{children:"Open"}),(0,r.jsx)(w,{children:(0,r.jsx)("p",{children:"Sign up now on OpenLake and discover a whole new world of possibilities. Create your account and start exploring today!"})})]}),(0,r.jsx)(j,{children:(0,r.jsx)("img",{src:"./assets/vagabond-min.png"})}),(0,r.jsx)(b,{children:(0,r.jsx)("h2",{children:"Lake"})})]})})}t(7294),g.getLayout=n=>(0,r.jsx)(c,{children:n});let m=d.Z.div(u()),v=d.Z.div(h()),w=d.Z.div(f()),j=d.Z.div(x()),b=d.Z.div(p())},9008:function(n,e,t){n.exports=t(3121)},6130:function(n,e,t){"use strict";var i=t(7294);let r=i.forwardRef(function(n,e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:e},n),i.createElement("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}))});e.Z=r},4603:function(n,e,t){"use strict";var i=t(7294);let r=i.forwardRef(function(n,e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:e},n),i.createElement("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}))});e.Z=r}},function(n){n.O(0,[511,774,888,179],function(){return n(n.s=5728)}),_N_E=n.O()}]);