(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{6848:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/login",function(){return t(7040)}])},3313:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r=t(7297),i=t(5893),a=t(2010),o=t(7294),l=t(6130),s=t(4603),d=t(4217);function u(){let n=(0,r.Z)(["\n  width: 48px;\n  height: 48px;\n  align-items: center;\n\n  > * {\n    border-width: 3px;\n    border-style: solid;\n    border-color: var(--fading-bg);\n    background-color: var(--bg);\n    border-image: initial;\n    padding: 6px;\n    border-radius: 50%;\n  }\n\n  @media (min-width: 768px) {\n    position: relative;\n    right: 4rem;\n  }\n"]);return u=function(){return n},n}function c(){let{theme:n,setTheme:e}=(0,a.F)(),[t,r]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{r(!0)},[]),t)?(0,i.jsx)(h,{children:"dark"===n?(0,i.jsx)(l.Z,{className:"theme-select",color:"#F5F3CE",onClick:()=>e("light")}):(0,i.jsx)(s.Z,{className:"theme-select",color:"#FDB813",onClick:()=>e("dark")})}):null}let h=d.Z.div(u())},7040:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var r=t(7297),i=t(5893),a=t(4217),o=t(1664),l=t.n(o),s=t(5675),d=t.n(s),u=t(3313),c=t(7294),h=t(8945),p=t(1163);function g(){let n=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  max-width: 1920px;\n"]);return g=function(){return n},n}function m(){let n=(0,r.Z)(["\n  position: relative;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 600px;\n  background-image: url('/assets/loginpage.jpeg');\n  background-size: cover;\n  background-position: center;\n  display: none;\n\n  @media (min-width: 768px) {\n    display: block;\n    width: 35%;\n    background-image: url('/assets/loginpage.jpeg');\n    background-size: cover;\n    background-position: center center;\n  }\n"]);return m=function(){return n},n}function f(){let n=(0,r.Z)(["\n  margin-left: 2rem;\n  display: flex;\n  align-items: center;\n  height: 70px;\n  flex-flow: row nowrap;\n"]);return f=function(){return n},n}function x(){let n=(0,r.Z)(["\n  margin: auto 0;\n  width: 100%;\n\n  @media (min-width: 578px) {\n    max-width: 75%;\n    margin: 125px auto;\n  }\n\n  @media (min-width: 912px) {\n    padding: 0px 100px;\n    max-width: 686px;\n  }\n"]);return x=function(){return n},n}function b(){let n=(0,r.Z)(["\n  display: table;\n  min-width: 350px;\n  margin: 0 auto;\n  padding: 1rem;\n\n  label {\n    display: table;\n    width: 100%;\n    margin-bottom: 0.7rem;\n    color: var(--fg);\n  }\n  input {\n    display: table;\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 0.25rem;\n    margin-bottom: 1.4rem;\n    border: none;\n    background-color: var(--fading-bg);\n  }\n  input:focus {\n    outline-color: var(--main);\n  }\n\n  button {\n    display: table;\n    width: 100%;\n    padding: 0.5rem;\n    border: none;\n    border-radius: 0.25rem;\n    box-sizing: border-box;\n    background-color: var(--main);\n    color: #fff;\n    cursor: pointer;\n    margin-bottom: 1rem;\n  }\n\n  button:hover {\n    background-color: var(--fg);\n    color: var(--bg);\n  }\n\n  a {\n    margin-top: 15px;\n  }\n  a:hover {\n    color: var(--main);\n  }\n"]);return b=function(){return n},n}function w(){let n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  h3 {\n    font-size: 40px;\n    line-height: 46px;\n    font-weight: 700;\n    margin-bottom: 14px;\n    text-align: center;\n  }\n\n  span {\n    margin: 20px auto;\n  }\n"]);return w=function(){return n},n}function v(){let n=(0,r.Z)(["\n  position: absolute;\n  right: 10px;\n  top: 14px;\n  @media (min-width: 768px) {\n    right: -15px;\n  }\n"]);return v=function(){return n},n}function j(){let n=(0,p.useRouter)(),e=()=>{let[e,t]=(0,c.useState)(""),[r,a]=(0,c.useState)(""),[o,l]=(0,c.useState)(!1),s={method:"post",url:"http://localhost:3500/auth",data:{email:e,password:r},withCredentials:!0},d=t=>{t.preventDefault(),(0,h.Z)(s).then(e=>{let t=e.data.data.UserInfo.profile_id,r=e.data.data.UserInfo.id;localStorage.setItem("profile_id","".concat(t)),localStorage.setItem("user_id","".concat(r)),l(!0),n.push("/")}).catch(n=>{console.log(n.response,e,r)})};return(0,i.jsxs)(_,{children:[(0,i.jsxs)("label",{htmlFor:"email",onSubmit:n=>d(n),children:["Email"," "]}),(0,i.jsx)("input",{type:"email",id:"email",name:"email",value:e,onChange:n=>t(n.target.value)}),(0,i.jsx)("label",{htmlFor:"password",children:"Password"}),(0,i.jsx)("input",{type:"password",id:"password",name:"password",value:r,onChange:n=>a(n.target.value)}),(0,i.jsx)("button",{type:"submit",onClick:n=>d(n),children:"Login"}),(0,i.jsx)("a",{href:"/user/signup",children:"Don't have an account already ?"}),o?(0,i.jsx)("p",{className:"text-success",children:"You Are Logged in Successfully"}):(0,i.jsx)("p",{className:"text-danger",children:"You Are Not Logged in"})]})};return(0,i.jsxs)(Z,{children:[(0,i.jsx)(C,{children:(0,i.jsx)(u.Z,{})}),(0,i.jsx)(k,{children:(0,i.jsx)(y,{children:(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)(d(),{priority:!0,src:"/assets/logo.svg",height:60,width:60,alt:""})})})}),(0,i.jsxs)(z,{children:[(0,i.jsxs)(E,{children:[(0,i.jsx)("h3",{children:"Get on the boat"}),(0,i.jsx)("span",{children:"Login and explore the awesome world of OpenLake !"})]}),(0,i.jsx)(e,{})]})]})}let Z=a.Z.div(g()),k=a.Z.div(m()),y=a.Z.div(f()),z=a.Z.div(x()),_=a.Z.form(b()),E=a.Z.div(w()),C=a.Z.div(v())},6130:function(n,e,t){"use strict";var r=t(7294);let i=r.forwardRef(function(n,e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:e},n),r.createElement("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}))});e.Z=i},4603:function(n,e,t){"use strict";var r=t(7294);let i=r.forwardRef(function(n,e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:e},n),r.createElement("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}))});e.Z=i}},function(n){n.O(0,[511,945,774,888,179],function(){return n(n.s=6848)}),_N_E=n.O()}]);