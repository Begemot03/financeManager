import{_ as y,s as x,a as b,b as v}from"./categoryModel-su6EkKw0.js";import{u as g,e as B}from"./uuid-CkBbJNVX.js";import{p as h,q as C,C as S,o as T,c as w,g as s,t as i,v as r,x as a,w as o,i as D}from"./index-B4EVAOy-.js";const I={class:"flex gap-4 flex-col md:flex-row items-start"},N={class:"flex gap-2 flex-col"},V={class:"border border-surface-700 rounded bg-primary p-4 font-bold text-xl"},E=h({__name:"IncomesPage",setup($){const d=g(),m=B(),l=C([]),f=S(()=>l.value.length==0?d.operationsByType("Доход"):d.operationsByType("Доход").filter(p=>l.value.some(e=>e.name==p.category)));return(p,e)=>{const n=v,u=x;return T(),w("div",I,[s("div",N,[s("span",V," Общая сумма: "+i(r(d).incomesTotal),1),a(r(y),{selected:l.value,"onUpdate:selected":e[0]||(e[0]=t=>l.value=t)},null,8,["selected"])]),a(u,{value:f.value,"removable-sort":"",class:"w-full"},{header:o(()=>e[1]||(e[1]=[s("span",{class:"font-bold text-xl"},"Доходы",-1)])),empty:o(()=>e[2]||(e[2]=[s("div",{class:"font-bold text-center"},"Вы пока не тратили",-1)])),default:o(()=>[a(n,{field:"name",header:"Название операции"}),a(n,{field:"sum",header:"Сумма операции",sortable:""},{body:o(t=>[D(i(t.data.sum+" RUB"),1)]),_:1}),a(n,{field:"category",header:"Категория"},{body:o(t=>[a(r(b),{name:t.data.category,type:t.data.type},null,8,["name","type"])]),_:1}),a(n,{field:"depositeId",header:"Депозит"},{body:o(t=>{var c;return[s("div",null,i((c=r(m).deposites.find(_=>_.id===t.data.depositeId))==null?void 0:c.name),1)]}),_:1})]),_:1},8,["value"])])}}});export{E as default};
