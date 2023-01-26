(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{6061:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/signup",function(){return t(5787)}])},5787:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(7297),i=t(5893),a=t(4217),o=t(1664),s=t.n(o),l=t(5675),d=t.n(l),u=t(8945),c=t(7294),p=t(1163);function h(){let n=(0,r.Z)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  max-width: 1920px;\n"]);return h=function(){return n},n}function m(){let n=(0,r.Z)(["\n  position: relative;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 600px;\n  display: none;\n\n  @media (min-width: 768px) {\n    display: block;\n    width: 35%;\n    background-image: url('/assets/signuppage.jpeg');\n    background-size: cover;\n    background-position: center center;\n  }\n"]);return m=function(){return n},n}function x(){let n=(0,r.Z)(["\n  margin-top: 0.5rem;\n  margin-left: 1rem;\n  display: flex;\n  align-items: center;\n  height: 70px;\n  flex-flow: row nowrap;\n"]);return x=function(){return n},n}function g(){let n=(0,r.Z)(["\n  margin: auto 0;\n  width: 100%;\n\n  @media (min-width: 578px) {\n    max-width: 75%;\n    margin: 125px auto;\n  }\n\n  @media (min-width: 912px) {\n    padding: 0px 100px;\n    max-width: 686px;\n  }\n"]);return g=function(){return n},n}function f(){let n=(0,r.Z)(["\n  display: table;\n  min-width: 350px;\n  margin: 0 auto;\n  padding: 1rem;\n\n  label {\n    display: table;\n    width: 100%;\n    margin-bottom: 0.7rem;\n    color: var(--fg);\n  }\n  input {\n    display: table;\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 0.25rem;\n    margin-bottom: 1.4rem;\n    border: none;\n    background-color: var(--fading-bg);\n  }\n  input:focus {\n    outline-color: var(--main);\n  }\n\n  button {\n    display: table;\n    width: 100%;\n    padding: 0.5rem;\n    border: none;\n    border-radius: 0.25rem;\n    box-sizing: border-box;\n    background-color: var(--main);\n    color: #fff;\n    cursor: pointer;\n    margin-bottom: 1rem;\n  }\n\n  button:hover {\n    background-color: var(--fg);\n    color: var(--bg);\n  }\n\n  a {\n    margin-top: 15px;\n  }\n  a:hover {\n    color: var(--main);\n  }\n"]);return f=function(){return n},n}function b(){let n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  h3 {\n    font-size: 40px;\n    line-height: 46px;\n    font-weight: 700;\n    margin-bottom: 14px;\n    text-align: center;\n  }\n\n  span {\n    margin: 20px auto;\n  }\n"]);return b=function(){return n},n}function w(){let n=(0,r.Z)(["\n  position: absolute;\n  right: -15px;\n  top: 14px;\n"]);return w=function(){return n},n}function v(){let n=(0,p.useRouter)(),e=()=>{let[e,t]=(0,c.useState)([]),[r,a]=(0,c.useState)(""),[o,s]=(0,c.useState)(""),[l,d]=(0,c.useState)(""),[p,h]=(0,c.useState)(""),[m,x]=(0,c.useState)(""),[g,f]=(0,c.useState)(!1),b={method:"post",url:"http://localhost:3500/users",data:{email:r,password:o,lastName:l,firstName:p,address:m}},w=e=>{e.preventDefault(),(0,u.Z)(b).then(n=>{f(!0)}).catch(n=>{Error()}),n.push("../user/login")};return(0,i.jsxs)(k,{method:"post",children:[(0,i.jsx)("label",{htmlFor:"firstName",children:"First Name"}),(0,i.jsx)("input",{type:"text",id:"firstName",name:"firstName",onChange:n=>h(n.target.value)}),(0,i.jsx)("label",{htmlFor:"lastName",children:"Lastname"}),(0,i.jsx)("input",{type:"text",id:"lastName",name:"lastName",onChange:n=>d(n.target.value)}),(0,i.jsx)("label",{htmlFor:"address",children:"Address"}),(0,i.jsx)("input",{type:"text",id:"address",name:"address",onChange:n=>x(n.target.value)}),(0,i.jsx)("label",{htmlFor:"email",children:"Email"}),(0,i.jsx)("input",{type:"email",id:"email",name:"email",onChange:n=>a(n.target.value)}),(0,i.jsx)("label",{htmlFor:"password",children:"Password"}),(0,i.jsx)("input",{type:"password",id:"password",name:"password",onChange:n=>s(n.target.value)}),(0,i.jsx)("button",{type:"submit",onClick:n=>w(n),children:"Sign up"}),(0,i.jsx)("a",{href:"/user/login",children:"Already have an account ?"}),g?(0,i.jsx)("p",{className:"text-success",children:"You Are Registered Successfully"}):(0,i.jsx)("p",{className:"text-danger",children:"You Are Not Registered"})]})};return(0,i.jsxs)(j,{children:[(0,i.jsx)(y,{children:(0,i.jsx)(N,{children:(0,i.jsx)(s(),{href:"/",children:(0,i.jsx)(d(),{priority:!0,src:"/assets/logo.svg",height:60,width:60,alt:""})})})}),(0,i.jsxs)(Z,{children:[(0,i.jsxs)(_,{children:[(0,i.jsx)("h3",{children:"Join the boat"}),(0,i.jsx)("span",{children:"Sign up and explore the awesome world of OpenLake !"})]}),(0,i.jsx)(e,{})]})]})}let j=a.Z.div(h()),y=a.Z.div(m()),N=a.Z.div(x()),Z=a.Z.div(g()),k=a.Z.form(f()),_=a.Z.div(b());a.Z.div(w())}},function(n){n.O(0,[511,945,774,888,179],function(){return n(n.s=6061)}),_N_E=n.O()}]);