const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TabComponent-j5uIcN_-.js","assets/index-DXdIn6aF.js","assets/index-Dz92pqEa.css","assets/ExpenseStore-Cysbb0nG.js","assets/PeriodFilterComponent-D0tffQ8A.js","assets/TotalExpenseComponent-CUBJVtRd.js","assets/ModalReportDetail-RUT0VEHR.js","assets/BudgetStore-CbuszPky.js"])))=>i.map(i=>d[i]);
import{s as p,h as E,c as d,b as s,u as t,a as e,i as w,F as C,j as R,w as S,r as P,o as c,t as u,n as k,k as D,e as l,_ as r}from"./index-DXdIn6aF.js";import{u as T}from"./MasterStore-BXeBj4_9.js";import{u as B}from"./BudgetStore-CbuszPky.js";const L={class:"flex flex-col animate__animated animate__fadeIn p-4"},O={class:"mb-4"},A={class:"bg-red-50 rounded-xl py-6 mb-4"},I={class:"flex flex-col gap-1"},M=["onClick"],F={class:"flex flex-row gap-1.5 items-center"},j={class:"text-sm"},N=e("i",{class:"bi bi-chevron-right text-xs"},null,-1),U={class:"rounded-0 w-full flex flex-row items-center justify-between"},z={class:"px-2"},$=e("div",{class:"w-[30%] text-end text-sm font-medium"},"Rp100.000",-1),q={class:"bg-red-50 rounded-xl p-1"},X={__name:"ReportView",setup(G){const m=l(()=>r(()=>import("./TabComponent-j5uIcN_-.js"),__vite__mapDeps([0,1,2,3]))),f=l(()=>r(()=>import("./PeriodFilterComponent-D0tffQ8A.js"),__vite__mapDeps([4,1,2]))),x=l(()=>r(()=>import("./TotalExpenseComponent-CUBJVtRd.js"),__vite__mapDeps([5,1,2]))),h=l(()=>r(()=>import("./ModalReportDetail-RUT0VEHR.js"),__vite__mapDeps([6,1,2,7]))),v=T(),a=B();p(v);const{isShowDetailModal:_,selectedPeriodFilter:i}=p(a),{handleDetailReport:g}=a;let b=E({accessibility:{enabled:!1},chart:{type:"pie",backgroundColor:"transparent"},title:{text:null},credits:{enabled:!1},tooltip:{valueSuffix:"%"},plotOptions:{series:{allowPointSelect:!0,cursor:"pointer",dataLabels:[{enabled:!1,distance:20}]}},series:[{name:"Percentage",data:a.reports}]});return(H,n)=>{const y=P("ModalBottomSheet");return c(),d("div",L,[s(t(m)),e("div",O,[s(t(f),{page:"Reports",modelValue:t(i),"onUpdate:modelValue":n[0]||(n[0]=o=>w(i)?i.value=o:null)},null,8,["modelValue"])]),s(t(x),{totalExpense:1568e3}),e("div",A,[e("div",I,[(c(!0),d(C,null,R(t(a).reports,(o,V)=>(c(),d("div",{class:"flex flex-col gap-1 py-2 px-4 rounded-md text-gray2 cursor-pointer transition transform duration-100 active:scale-95 active:bg-red-100",key:V,onClick:J=>t(g)(o)},[e("div",F,[e("span",j,u(o.name),1),N]),e("div",U,[e("div",{style:k({backgroundColor:o.color,width:o.y+"%"}),class:"bg-[#f9a8d4] font-medium leading-none p-0.5 py-2 text-xs text-gray1 rounded-0 text-start"},[e("span",z,u(o.y)+"%",1)],4),$])],8,M))),128))])]),e("div",q,[s(t(D.Chart),{options:t(b)},null,8,["options"])]),s(y,{modelValue:t(_),"onUpdate:modelValue":n[1]||(n[1]=o=>_.value=o)},{default:S(()=>[s(t(h))]),_:1},8,["modelValue"])])}}};export{X as default};
