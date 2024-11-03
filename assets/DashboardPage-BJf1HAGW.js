import{B as $,r as I,l as G,s as J,a as M,o,c as s,m as i,b as l,d as c,e as f,f as K,w as h,n as k,g as m,F as S,h as B,i as O,t as P,j as Q,k as A,p as N,q as L,u as E,v,x as y,y as j,U as V,R as X,z as Y,A as Z,T as _,_ as x,C as F}from"./index-B4EVAOy-.js";import{s as ee,u as te,a as ne,b as oe,c as re,d as ae,e as ie,f as se}from"./uuid-CkBbJNVX.js";import{_ as le,a as ce}from"./NewOperationModal.vue_vue_type_script_setup_true_lang-CTeT1X5U.js";var de=function(n){var t=n.dt;return`
.p-dataview {
    border-color: `.concat(t("dataview.border.color"),`;
    border-width: `).concat(t("dataview.border.width"),`;
    border-style: solid;
    border-radius: `).concat(t("dataview.border.radius"),`;
    padding: `).concat(t("dataview.padding"),`;
}

.p-dataview-header {
    background: `).concat(t("dataview.header.background"),`;
    color: `).concat(t("dataview.header.color"),`;
    border-color: `).concat(t("dataview.header.border.color"),`;
    border-width: `).concat(t("dataview.header.border.width"),`;
    border-style: solid;
    padding: `).concat(t("dataview.header.padding"),`;
    border-radius: `).concat(t("dataview.header.border.radius"),`;
}

.p-dataview-content {
    background: `).concat(t("dataview.content.background"),`;
    border-color: `).concat(t("dataview.content.border.color"),`;
    border-width: `).concat(t("dataview.content.border.width"),`;
    border-style: solid;
    color: `).concat(t("dataview.content.color"),`;
    padding: `).concat(t("dataview.content.padding"),`;
    border-radius: `).concat(t("dataview.content.border.radius"),`;
}

.p-dataview-footer {
    background: `).concat(t("dataview.footer.background"),`;
    color: `).concat(t("dataview.footer.color"),`;
    border-color: `).concat(t("dataview.footer.border.color"),`;
    border-width: `).concat(t("dataview.footer.border.width"),`;
    border-style: solid;
    padding: `).concat(t("dataview.footer.padding"),`;
    border-radius: `).concat(t("dataview.footer.border.radius"),`;
}

.p-dataview-paginator-top {
    border-width: `).concat(t("dataview.paginator.top.border.width"),`;
    border-color: `).concat(t("dataview.paginator.top.border.color"),`;
    border-style: solid;
}

.p-dataview-paginator-bottom {
    border-width: `).concat(t("dataview.paginator.bottom.border.width"),`;
    border-color: `).concat(t("dataview.paginator.bottom.border.color"),`;
    border-style: solid;
}
`)},pe={root:function(n){var t=n.props;return["p-dataview p-component",{"p-dataview-list":t.layout==="list","p-dataview-grid":t.layout==="grid"}]},header:"p-dataview-header",pcPaginator:function(n){var t=n.position;return"p-dataview-paginator-"+t},content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},ue=$.extend({name:"dataview",theme:de,classes:pe}),ge={name:"BaseDataView",extends:B,props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},style:ue,provide:function(){return{$pcDataView:this,$parentInstance:this}}};function he(e){return ye(e)||ve(e)||fe(e)||me()}function me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(e,n){if(e){if(typeof e=="string")return D(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(e,n):void 0}}function ve(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ye(e){if(Array.isArray(e))return D(e)}function D(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,d=Array(n);t<n;t++)d[t]=e[t];return d}var U={name:"DataView",extends:ge,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(n){this.d_first=n},rows:function(n){this.d_rows=n},sortField:function(){this.resetPage()},sortOrder:function(){this.resetPage()}},methods:{getKey:function(n,t){return this.dataKey?I(n,this.dataKey):t},onPage:function(n){this.d_first=n.first,this.d_rows=n.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",n)},sort:function(){var n=this;if(this.value){var t=he(this.value),d=G();return t.sort(function(a,r){var g=I(a,n.sortField),p=I(r,n.sortField);return J(g,p,n.sortOrder,d)}),t}else return null},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{getTotalRecords:function(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var n;return((n=this.$primevue.config)===null||n===void 0||(n=n.locale)===null||n===void 0?void 0:n.emptyMessage)||""},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items:function(){if(this.value&&this.value.length){var n=this.value;if(n&&n.length&&this.sortField&&(n=this.sort()),this.paginator){var t=this.lazy?0:this.d_first;return n.slice(t,t+this.d_rows)}else return n}else return null}},components:{DVPaginator:ee}};function be(e,n,t,d,a,r){var g=M("DVPaginator");return o(),s("div",i({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(o(),s("div",i({key:0,class:e.cx("header")},e.ptm("header")),[l(e.$slots,"header")],16)):c("",!0),r.paginatorTop?(o(),f(g,{key:1,rows:a.d_rows,first:a.d_first,totalRecords:r.getTotalRecords,pageLinkSize:e.pageLinkSize,template:e.paginatorTemplate,rowsPerPageOptions:e.rowsPerPageOptions,currentPageReportTemplate:e.currentPageReportTemplate,class:k(e.cx("pcPaginator",{position:"top"})),alwaysShow:e.alwaysShowPaginator,onPage:n[0]||(n[0]=function(p){return r.onPage(p)}),unstyled:e.unstyled,pt:e.ptm("pcPaginator")},K({_:2},[e.$slots.paginatorstart?{name:"start",fn:h(function(){return[l(e.$slots,"paginatorstart")]}),key:"0"}:void 0,e.$slots.paginatorend?{name:"end",fn:h(function(){return[l(e.$slots,"paginatorend")]}),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):c("",!0),m("div",i({class:e.cx("content")},e.ptm("content")),[r.empty?(o(),s("div",i({key:1,class:e.cx("emptyMessage")},e.ptm("emptyMessage")),[l(e.$slots,"empty",{layout:e.layout},function(){return[O(P(r.emptyMessageText),1)]})],16)):(o(),s(S,{key:0},[e.$slots.list&&e.layout==="list"?l(e.$slots,"list",{key:0,items:r.items}):c("",!0),e.$slots.grid&&e.layout==="grid"?l(e.$slots,"grid",{key:1,items:r.items}):c("",!0)],64))],16),r.paginatorBottom?(o(),f(g,{key:2,rows:a.d_rows,first:a.d_first,totalRecords:r.getTotalRecords,pageLinkSize:e.pageLinkSize,template:e.paginatorTemplate,rowsPerPageOptions:e.rowsPerPageOptions,currentPageReportTemplate:e.currentPageReportTemplate,class:k(e.cx("pcPaginator",{position:"bottom"})),alwaysShow:e.alwaysShowPaginator,onPage:n[1]||(n[1]=function(p){return r.onPage(p)}),unstyled:e.unstyled,pt:e.ptm("pcPaginator")},K({_:2},[e.$slots.paginatorstart?{name:"start",fn:h(function(){return[l(e.$slots,"paginatorstart")]}),key:"0"}:void 0,e.$slots.paginatorend?{name:"end",fn:h(function(){return[l(e.$slots,"paginatorend")]}),key:"1"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):c("",!0),e.$slots.footer?(o(),s("div",i({key:3,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):c("",!0)],16)}U.render=be;var we=function(n){var t=n.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(t("chip.background"),`;
    color: `).concat(t("chip.color"),`;
    border-radius: `).concat(t("chip.border.radius"),`;
    padding: `).concat(t("chip.padding.y")," ").concat(t("chip.padding.x"),`;
    gap: `).concat(t("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(t("chip.icon.color"),`;
    font-size: `).concat(t("chip.icon.font.size"),`;
    width: `).concat(t("chip.icon.size"),`;
    height: `).concat(t("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(t("chip.image.width"),`;
    height: `).concat(t("chip.image.height"),`;
    margin-left: calc(-1 * `).concat(t("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: `).concat(t("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(`).concat(t("chip.padding.y"),` / 2);
    padding-bottom: calc(`).concat(t("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(t("chip.remove.icon.size"),`;
    width: `).concat(t("chip.remove.icon.size"),`;
    height: `).concat(t("chip.remove.icon.size"),`;
    color: `).concat(t("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(t("chip.transition.duration"),", box-shadow ").concat(t("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(t("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(t("chip.remove.icon.focus.ring.width")," ").concat(t("chip.remove.icon.focus.ring.style")," ").concat(t("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(t("chip.remove.icon.focus.ring.offset"),`;
}
`)},ke={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Pe=$.extend({name:"chip",theme:we,classes:ke}),$e={name:"BaseChip",extends:B,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Pe,provide:function(){return{$pcChip:this,$parentInstance:this}}},W={name:"Chip",extends:$e,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},components:{TimesCircleIcon:Q}},Se=["aria-label"],Be=["src"];function Te(e,n,t,d,a,r){return a.visible?(o(),s("div",i({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[l(e.$slots,"default",{},function(){return[e.image?(o(),s("img",i({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Be)):e.$slots.icon?(o(),f(A(e.$slots.icon),i({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(o(),s("span",i({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):c("",!0),e.label?(o(),s("div",i({key:3,class:e.cx("label")},e.ptm("label")),P(e.label),17)):c("",!0)]}),e.removable?l(e.$slots,"removeicon",{key:0,removeCallback:r.close,keydownCallback:r.onKeydown},function(){return[(o(),f(A(e.removeIcon?"span":"TimesCircleIcon"),i({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:r.close,onKeydown:r.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):c("",!0)],16,Se)):c("",!0)}W.render=Te;const Ce={class:"flex flex-col"},Ie=N({__name:"OperationSheet",setup(e){const n=te(),t=L(null),d=L(1),a=L(""),r=[{label:"Новее",value:"!id"},{label:"Старее",value:"id"}],g=p=>{const u=p.value.value,b=p.value;u.indexOf("!")==0?(d.value=-1,a.value=u.substring(1,u.lenght)):(d.value=1,a.value=u),t.value=b};return E(()=>{n.getOperationList()}),(p,u)=>{const b=ne,T=W,C=U;return o(),f(C,{value:v(n).operations,sortOrder:d.value,sortField:a.value,dataKey:"id"},{header:h(()=>[y(b,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=w=>t.value=w),options:r,optionLabel:"label",placeholder:"Сортировать по",onChange:g},null,8,["modelValue"])]),list:h(w=>[m("div",Ce,[(o(!0),s(S,null,j(w.items,(R,z)=>(o(),s("div",{key:z},[m("div",{class:k(["flex flex-col sm:flex-row sm:items-center p-6 gap-4",{"border-t border-surface-200 dark:border-surface-700":z!==0}])},[m("div",null,P(R.name),1),y(T,{label:R.category},null,8,["label"])],2)]))),128))])]),empty:h(()=>u[1]||(u[1]=[O("Лист пустой")])),_:1},8,["value","sortOrder","sortField"])}}});var Le=function(n){var t=n.dt;return`
.p-panel {
    border: 1px solid `.concat(t("panel.border.color"),`;
    border-radius: `).concat(t("panel.border.radius"),`;
    background: `).concat(t("panel.background"),`;
    color: `).concat(t("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(t("panel.header.padding"),`;
    background: `).concat(t("panel.header.background"),`;
    color: `).concat(t("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("panel.header.border.width"),`;
    border-color: `).concat(t("panel.header.border.color"),`;
    border-radius: `).concat(t("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(t("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(t("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(t("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(t("panel.footer.padding"),`;
}
`)},Ae={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},De=$.extend({name:"panel",theme:Le,classes:Ae}),Oe={name:"BasePanel",extends:B,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:De,provide:function(){return{$pcPanel:this,$parentInstance:this}}},q={name:"Panel",extends:Oe,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||V()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||V()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:oe,MinusIcon:re,Button:ae},directives:{ripple:X}},Re=["id"],ze=["id","aria-labelledby"];function Ke(e,n,t,d,a,r){var g=M("Button");return o(),s("div",i({class:e.cx("root")},e.ptmi("root")),[m("div",i({class:e.cx("header")},e.ptm("header")),[l(e.$slots,"header",{id:a.id+"_header",class:k(e.cx("title"))},function(){return[e.header?(o(),s("span",i({key:0,id:a.id+"_header",class:e.cx("title")},e.ptm("title")),P(e.header),17,Re)):c("",!0)]}),m("div",i({class:e.cx("headerActions")},e.ptm("headerActions")),[l(e.$slots,"icons"),e.toggleable?(o(),f(g,i({key:0,id:a.id+"_header",class:e.cx("pcToggleButton"),"aria-label":r.buttonAriaLabel,"aria-controls":a.id+"_content","aria-expanded":!a.d_collapsed,unstyled:e.unstyled,onClick:r.toggle,onKeydown:r.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h(function(p){return[l(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed},function(){return[(o(),f(A(a.d_collapsed?"PlusIcon":"MinusIcon"),i({class:p.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):c("",!0)],16)],16),y(_,i({name:"p-toggleable-content"},e.ptm("transition")),{default:h(function(){return[Y(m("div",i({id:a.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":a.id+"_header"},e.ptm("contentContainer")),[m("div",i({class:e.cx("content")},e.ptm("content")),[l(e.$slots,"default")],16),e.$slots.footer?(o(),s("div",i({key:0,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):c("",!0)],16,ze),[[Z,!a.d_collapsed]])]}),_:3},16)],16)}q.render=Ke;var Ve=function(n){var t=n.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(t("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(t("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(t("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(t("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(t("progressspinner.color.4"),`;
    }
}
`)},Fe={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Me=$.extend({name:"progressspinner",theme:Ve,classes:Fe}),Ne={name:"BaseProgressSpinner",extends:B,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Me,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},H={name:"ProgressSpinner",extends:Ne,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Ee=["fill","stroke-width"];function je(e,n,t,d,a,r){return o(),s("div",i({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(o(),s("svg",i({class:e.cx("spin"),viewBox:"25 25 50 50",style:r.svgStyle},e.ptm("spin")),[m("circle",i({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,Ee)],16))],16)}H.render=je;const Ue={};function We(e,n){return o(),s("div",null,"Тут пока пусто")}const qe=x(Ue,[["render",We]]),He=N({__name:"DepositeSheet",setup(e){const n=ie(),t=F(()=>n.deposites.length==0),d=F(()=>t.value&&!n.loading);return E(()=>{n.getDepositeList()}),(a,r)=>{const g=H,p=q;return o(),f(p,{header:"Депозиты"},{default:h(()=>[t.value?d.value?(o(),f(v(qe),{key:1})):c("",!0):(o(!0),s(S,{key:0},j(v(n).deposites,({id:u,name:b,comment:T,startBalance:C,currency:w})=>(o(),s("div",{key:u},[O(P(`${b} ${T} ${C}`)+" ",1),m("i",{class:k(["pi",v(se)[w]])},null,2)]))),128)),v(n).loading?(o(),f(g,{key:2})):c("",!0)]),_:1})}}}),Xe={__name:"DashboardPage",setup(e){return(n,t)=>(o(),s(S,null,[y(v(He)),y(v(Ie)),y(le),y(v(ce))],64))}};export{Xe as default};
