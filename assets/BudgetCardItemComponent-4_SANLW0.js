import{v as s,o as c,c as m,a as e,m as g,t as a,i as o,u as d,q as i,n as b}from"./index-B-3fhn68.js";import{u as x}from"./BudgetListComponent-DJhti0Oo.js";const f={class:"bg-white p-4 bg-opacity-50 rounded-lg flex flex-col relative"},p={class:"flex justify-between mb-1"},_={class:"text-sm text-primary flex items-center gap-1 mb-2"},h={class:"font-medium dark:text-white"},y=e("small",{class:"text-sm"},"Rp",-1),v={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700"},B={class:"font-medium text-primary dark:text-white mt-1"},w=e("small",null,"Rp",-1),k=e("small",null,"remains",-1),z={__name:"BudgetCardItemComponent",props:{budget:{type:Object,default:{}}},setup(t){x();let l=t,n=s(()=>l.budget.remainingBudget/l.budget.budgetAmount*100);const r=s(()=>`${n.value}%`),u=s(()=>`${n.value.toFixed(2)}%`);return(N,C)=>(c(),m("div",f,[e("div",p,[e("div",_,[e("i",{class:g(t.budget.categoryIcon)},null,2),e("span",null,a(t.budget.categoryName),1)]),e("div",h,[y,o(a(d(i)(t.budget.budgetAmount)),1)])]),e("div",v,[e("div",{class:"bg-tertiary text-xs font-medium text-gray1 text-center p-0.5 leading-none rounded-full",style:b({width:r.value})},a(u.value),5)]),e("div",B,[w,o(a(d(i)(t.budget.remainingBudget))+" ",1),k])]))}};export{z as default};
