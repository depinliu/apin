import{f as L,s as P,r as i,o as d,d as y,w as m,c as h,b as l,u as t,j as V,a as s,h as c,t as g}from"./index-F5-PLuqt.js";const C="/assets/logo_full-COQCyqm3.svg",B={key:0,class:"mb-3 w-full"},E={class:"mb-3 w-full"},N={class:"mb-4 w-full"},S={__name:"FormAuthComponent",props:{isLoginPage:{type:Boolean,default:!0}},setup(e){const r=L(),{isAction:p,user:o}=P(r),{authUser:_}=r;let w=e;const b=async f=>{f&&await _(w.isLoginPage)};return(f,a)=>{const u=i("Input"),v=i("Button"),x=i("FormProvider");return d(),y(x,{id:"login-form",onOnSubmit:b},{default:m(()=>[e.isLoginPage?V("",!0):(d(),h("div",B,[l(u,{type:"text",modelValue:t(o).name,"onUpdate:modelValue":a[0]||(a[0]=n=>t(o).name=n),id:"name",name:"name",label:"Name",placeholder:"Enter name...",icon:"fa-solid fa-envelope",rules:"required"},null,8,["modelValue"])])),s("div",E,[l(u,{type:"email",modelValue:t(o).email,"onUpdate:modelValue":a[1]||(a[1]=n=>t(o).email=n),id:"email",name:"email",label:"Email",placeholder:"Enter email...",icon:"fa-solid fa-envelope",rules:"required"},null,8,["modelValue"])]),s("div",N,[l(u,{type:"password",modelValue:t(o).password,"onUpdate:modelValue":a[2]||(a[2]=n=>t(o).password=n),id:"password",name:"password",label:"Password",placeholder:"Enter password...",rules:"required"},null,8,["modelValue"])]),l(v,{type:"submit",disabled:t(p),class:"bg-primary text-white font-bold w-full",size:"lg"},{default:m(()=>[c(g(e.isLoginPage?"LOGIN":"REGISTER"),1)]),_:1},8,["disabled"])]),_:1})}}},k={class:"flex flex-col justify-center h-screen max-h-screen"},A=["src"],q={class:"p-6"},I={class:"bg-white p-6 h-full rounded-2xl shadow-lg"},R={class:"w-full text-center mt-4"},$={__name:"AuthContentComponent",props:{isLoginPage:{type:Boolean,default:!0}},setup(e){return(r,p)=>{const o=i("router-link");return d(),h("div",k,[s("img",{src:t(C),class:"mx-auto z-20",width:"300"},null,8,A),s("div",q,[s("div",I,[l(S,{isLoginPage:e.isLoginPage},null,8,["isLoginPage"]),s("div",R,[s("p",null,[c(g(e.isLoginPage?"New here?":"Already have an account?")+" ",1),l(o,{to:{name:e.isLoginPage?"authRegister":"authLogin"},class:"text-blue-500 underline w-full",size:"lg"},{default:m(()=>[c(g(e.isLoginPage?"Create an account":"Sign in"),1)]),_:1},8,["to"])])])])])])}}};export{$ as default};
