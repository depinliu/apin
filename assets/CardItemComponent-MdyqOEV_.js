import{o as n,c as o,x as r,a as e,n as i,t as s,u as c,s as m}from"./index--hG1mAw5.js";const d={class:"bg-white p-4 bg-opacity-50 rounded-lg flex flex-col relative"},u=e("i",{class:"bi bi-trash3-fill"},null,-1),x=[u],g={class:"text-sm text-primary flex items-center gap-1 mb-2"},p={class:"text-2xl font-medium mb-2"},h={class:"text-sm"},f={class:"text-xs"},C={__name:"CardItemComponent",props:{categoryIcon:String,categoryName:String,expense:Number,notes:String,user:String,isCanDelete:Boolean},setup(t){const l=()=>{alert("deete?")};return(b,a)=>(n(),o("div",d,[t.isCanDelete?(n(),o("div",{key:0,onClick:a[0]||(a[0]=y=>l()),class:"p-2 cursor-pointer text-primary absolute top-0 right-0"},x)):r("",!0),e("div",g,[e("i",{class:i(t.categoryIcon)},null,2),e("span",null,s(t.categoryName),1)]),e("h1",p,"Rp. "+s(c(m)(t.expense)),1),e("p",h,s(t.notes),1),e("p",f,s(t.user),1)]))}};export{C as default};
