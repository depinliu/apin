import{v as x,q as d,p as _,o,c as l,a as b,F as h,j as y,x as T,u,t as g}from"./index-C-pYT86p.js";import{u as v}from"./ExpenseStore-DGBAUI5h.js";const S=x("tab",()=>{let i=d([{id:"all",name:"All"},{id:"depin",name:"Depin"},{id:"depi",name:"Depi"}]),t=d("all");return{tabList:i,currentTabId:t,handleTab:s=>{t.value=s}}}),k={class:"py-2 flex justify-center sticky top-0 text-[12px] font-medium animate__animated animate__fadeInDown z-50 bg-background"},w={class:"flex gap-2 flex-row items-center justify-center bg-primary px-2 rounded-lg py-1"},D=["onClick"],C={__name:"TabComponent",props:{isShowAll:{type:Boolean,default:!0}},setup(i){const t=_("currentUser");let n=S(),s=v();i.isShowAll||t.value&&(n.currentTabId=t.value.username);const m=p=>{n.handleTab(p.id);const c=s.expenseList.map(e=>{const a=e.expenses.filter(r=>r.user==="Devin Liu");return{...e,expenses:a,expenseTotal:a.reduce((r,f)=>r+f.expense,0)}}).filter(e=>e.expenses.length>0);s.expenseList=c};return(p,c)=>(o(),l("div",k,[b("div",w,[(o(!0),l(h,null,y(u(n).tabList,(e,a)=>(o(),l("div",{key:a,onClick:r=>m(e),class:T(["flex px-3 rounded-md py-1 justify-center cursor-pointer",e.id===u(n).currentTabId?"bg-white text-primary":"text-white"])},g(e.name),11,D))),128))])]))}};export{C as default};
