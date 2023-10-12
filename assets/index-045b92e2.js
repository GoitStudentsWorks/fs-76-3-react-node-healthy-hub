import{q as ve,w as Oa,P as s,r as M,j as n,x as Na,v as Ia,y as Ea,R as Ra,z as Pa,L as Ba,B as Da,Q as za}from"./index-8b2bd5cf.js";import{C as qa,a as Wa,L as Ga,P as $a,b as Ua,p as Ha,c as Ka,d as Ja,e as Ya,S as Va}from"./arrow-right-liqht-a51c20ce.js";const Za="_titleField_zvgfy_1",Xa="_lastPeriodField_zvgfy_8",Qa="_dashboardLink_zvgfy_14",ka="_dashboardTitle_zvgfy_31",er="_toggleBtn_zvgfy_46",tr="_toggleIsActive_zvgfy_56",ar="_lastButton_zvgfy_60",rr="_monthTitle_zvgfy_82",B={titleField:Za,lastPeriodField:Xa,dashboardLink:Qa,dashboardTitle:ka,toggleBtn:er,toggleIsActive:tr,lastButton:ar,monthTitle:rr},nr="_chartTitleField_fdv7t_1",ir="_chartTitle_fdv7t_1",sr="_average_fdv7t_26",or="_averageValue_fdv7t_32",lr="_chart_fdv7t_1",cr="_chartCont_fdv7t_58",dr="_desktopGraphField_fdv7t_81",ur="_weightCont_fdv7t_89",fr="_weightField_fdv7t_106",hr="_weightData_fdv7t_131",pr="_dataWeightItemMonth_fdv7t_136",gr="_dataWeightItemYear_fdv7t_150",_r="_labelWeightItem_fdv7t_158",u={chartTitleField:nr,chartTitle:ir,average:sr,averageValue:or,chart:lr,chartCont:cr,desktopGraphField:dr,weightCont:ur,weightField:fr,weightData:hr,dataWeightItemMonth:pr,dataWeightItemYear:gr,labelWeightItem:_r};var ye={exports:{}};ye.exports;(function(v,y){var b=200,w="__lodash_hash_undefined__",f=1,x=2,O=9007199254740991,c="[object Arguments]",T="[object Array]",A="[object AsyncFunction]",N="[object Boolean]",G="[object Date]",$="[object Error]",V="[object Function]",Z="[object GeneratorFunction]",X="[object Map]",ee="[object Number]",me="[object Null]",D="[object Object]",te="[object Promise]",be="[object Proxy]",xe="[object RegExp]",S="[object Set]",le="[object String]",Te="[object Symbol]",we="[object Undefined]",ae="[object WeakMap]",h="[object ArrayBuffer]",Q="[object DataView]",lt="[object Float32Array]",ct="[object Float64Array]",dt="[object Int8Array]",ut="[object Int16Array]",ft="[object Int32Array]",ht="[object Uint8Array]",pt="[object Uint8ClampedArray]",gt="[object Uint16Array]",_t="[object Uint32Array]",vt=/[\\^$.*+?()[\]{}|]/g,yt=/^\[object .+?Constructor\]$/,mt=/^(?:0|[1-9]\d*)$/,o={};o[lt]=o[ct]=o[dt]=o[ut]=o[ft]=o[ht]=o[pt]=o[gt]=o[_t]=!0,o[c]=o[T]=o[h]=o[N]=o[Q]=o[G]=o[$]=o[V]=o[X]=o[ee]=o[D]=o[xe]=o[S]=o[le]=o[ae]=!1;var Ee=typeof ve=="object"&&ve&&ve.Object===Object&&ve,bt=typeof self=="object"&&self&&self.Object===Object&&self,E=Ee||bt||Function("return this")(),Re=y&&!y.nodeType&&y,Pe=Re&&!0&&v&&!v.nodeType&&v,Be=Pe&&Pe.exports===Re,Ae=Be&&Ee.process,De=function(){try{return Ae&&Ae.binding&&Ae.binding("util")}catch{}}(),ze=De&&De.isTypedArray;function xt(e,t){for(var a=-1,r=e==null?0:e.length,l=0,i=[];++a<r;){var p=e[a];t(p,a,e)&&(i[l++]=p)}return i}function Tt(e,t){for(var a=-1,r=t.length,l=e.length;++a<r;)e[l+a]=t[a];return e}function wt(e,t){for(var a=-1,r=e==null?0:e.length;++a<r;)if(t(e[a],a,e))return!0;return!1}function At(e,t){for(var a=-1,r=Array(e);++a<e;)r[a]=t(a);return r}function jt(e){return function(t){return e(t)}}function St(e,t){return e.has(t)}function Ct(e,t){return e==null?void 0:e[t]}function Lt(e){var t=-1,a=Array(e.size);return e.forEach(function(r,l){a[++t]=[l,r]}),a}function Mt(e,t){return function(a){return e(t(a))}}function Ft(e){var t=-1,a=Array(e.size);return e.forEach(function(r){a[++t]=r}),a}var Ot=Array.prototype,Nt=Function.prototype,ce=Object.prototype,je=E["__core-js_shared__"],qe=Nt.toString,I=ce.hasOwnProperty,We=function(){var e=/[^.]+$/.exec(je&&je.keys&&je.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ge=ce.toString,It=RegExp("^"+qe.call(I).replace(vt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$e=Be?E.Buffer:void 0,de=E.Symbol,Ue=E.Uint8Array,He=ce.propertyIsEnumerable,Et=Ot.splice,U=de?de.toStringTag:void 0,Ke=Object.getOwnPropertySymbols,Rt=$e?$e.isBuffer:void 0,Pt=Mt(Object.keys,Object),Se=k(E,"DataView"),re=k(E,"Map"),Ce=k(E,"Promise"),Le=k(E,"Set"),Me=k(E,"WeakMap"),ne=k(Object,"create"),Bt=J(Se),Dt=J(re),zt=J(Ce),qt=J(Le),Wt=J(Me),Je=de?de.prototype:void 0,Fe=Je?Je.valueOf:void 0;function H(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function Gt(){this.__data__=ne?ne(null):{},this.size=0}function $t(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Ut(e){var t=this.__data__;if(ne){var a=t[e];return a===w?void 0:a}return I.call(t,e)?t[e]:void 0}function Ht(e){var t=this.__data__;return ne?t[e]!==void 0:I.call(t,e)}function Kt(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=ne&&t===void 0?w:t,this}H.prototype.clear=Gt,H.prototype.delete=$t,H.prototype.get=Ut,H.prototype.has=Ht,H.prototype.set=Kt;function R(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function Jt(){this.__data__=[],this.size=0}function Yt(e){var t=this.__data__,a=fe(t,e);if(a<0)return!1;var r=t.length-1;return a==r?t.pop():Et.call(t,a,1),--this.size,!0}function Vt(e){var t=this.__data__,a=fe(t,e);return a<0?void 0:t[a][1]}function Zt(e){return fe(this.__data__,e)>-1}function Xt(e,t){var a=this.__data__,r=fe(a,e);return r<0?(++this.size,a.push([e,t])):a[r][1]=t,this}R.prototype.clear=Jt,R.prototype.delete=Yt,R.prototype.get=Vt,R.prototype.has=Zt,R.prototype.set=Xt;function K(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function Qt(){this.size=0,this.__data__={hash:new H,map:new(re||R),string:new H}}function kt(e){var t=he(this,e).delete(e);return this.size-=t?1:0,t}function ea(e){return he(this,e).get(e)}function ta(e){return he(this,e).has(e)}function aa(e,t){var a=he(this,e),r=a.size;return a.set(e,t),this.size+=a.size==r?0:1,this}K.prototype.clear=Qt,K.prototype.delete=kt,K.prototype.get=ea,K.prototype.has=ta,K.prototype.set=aa;function ue(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new K;++t<a;)this.add(e[t])}function ra(e){return this.__data__.set(e,w),this}function na(e){return this.__data__.has(e)}ue.prototype.add=ue.prototype.push=ra,ue.prototype.has=na;function z(e){var t=this.__data__=new R(e);this.size=t.size}function ia(){this.__data__=new R,this.size=0}function sa(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function oa(e){return this.__data__.get(e)}function la(e){return this.__data__.has(e)}function ca(e,t){var a=this.__data__;if(a instanceof R){var r=a.__data__;if(!re||r.length<b-1)return r.push([e,t]),this.size=++a.size,this;a=this.__data__=new K(r)}return a.set(e,t),this.size=a.size,this}z.prototype.clear=ia,z.prototype.delete=sa,z.prototype.get=oa,z.prototype.has=la,z.prototype.set=ca;function da(e,t){var a=pe(e),r=!a&&ja(e),l=!a&&!r&&Oe(e),i=!a&&!r&&!l&&at(e),p=a||r||l||i,g=p?At(e.length,String):[],_=g.length;for(var d in e)(t||I.call(e,d))&&!(p&&(d=="length"||l&&(d=="offset"||d=="parent")||i&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||ba(d,_)))&&g.push(d);return g}function fe(e,t){for(var a=e.length;a--;)if(Qe(e[a][0],t))return a;return-1}function ua(e,t,a){var r=t(e);return pe(e)?r:Tt(r,a(e))}function ie(e){return e==null?e===void 0?we:me:U&&U in Object(e)?ya(e):Aa(e)}function Ye(e){return se(e)&&ie(e)==c}function Ve(e,t,a,r,l){return e===t?!0:e==null||t==null||!se(e)&&!se(t)?e!==e&&t!==t:fa(e,t,a,r,Ve,l)}function fa(e,t,a,r,l,i){var p=pe(e),g=pe(t),_=p?T:q(e),d=g?T:q(t);_=_==c?D:_,d=d==c?D:d;var j=_==D,F=d==D,m=_==d;if(m&&Oe(e)){if(!Oe(t))return!1;p=!0,j=!1}if(m&&!j)return i||(i=new z),p||at(e)?Ze(e,t,a,r,l,i):_a(e,t,_,a,r,l,i);if(!(a&f)){var C=j&&I.call(e,"__wrapped__"),L=F&&I.call(t,"__wrapped__");if(C||L){var W=C?e.value():e,P=L?t.value():t;return i||(i=new z),l(W,P,a,r,i)}}return m?(i||(i=new z),va(e,t,a,r,l,i)):!1}function ha(e){if(!tt(e)||Ta(e))return!1;var t=ke(e)?It:yt;return t.test(J(e))}function pa(e){return se(e)&&et(e.length)&&!!o[ie(e)]}function ga(e){if(!wa(e))return Pt(e);var t=[];for(var a in Object(e))I.call(e,a)&&a!="constructor"&&t.push(a);return t}function Ze(e,t,a,r,l,i){var p=a&f,g=e.length,_=t.length;if(g!=_&&!(p&&_>g))return!1;var d=i.get(e);if(d&&i.get(t))return d==t;var j=-1,F=!0,m=a&x?new ue:void 0;for(i.set(e,t),i.set(t,e);++j<g;){var C=e[j],L=t[j];if(r)var W=p?r(L,C,j,t,e,i):r(C,L,j,e,t,i);if(W!==void 0){if(W)continue;F=!1;break}if(m){if(!wt(t,function(P,Y){if(!St(m,Y)&&(C===P||l(C,P,a,r,i)))return m.push(Y)})){F=!1;break}}else if(!(C===L||l(C,L,a,r,i))){F=!1;break}}return i.delete(e),i.delete(t),F}function _a(e,t,a,r,l,i,p){switch(a){case Q:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case h:return!(e.byteLength!=t.byteLength||!i(new Ue(e),new Ue(t)));case N:case G:case ee:return Qe(+e,+t);case $:return e.name==t.name&&e.message==t.message;case xe:case le:return e==t+"";case X:var g=Lt;case S:var _=r&f;if(g||(g=Ft),e.size!=t.size&&!_)return!1;var d=p.get(e);if(d)return d==t;r|=x,p.set(e,t);var j=Ze(g(e),g(t),r,l,i,p);return p.delete(e),j;case Te:if(Fe)return Fe.call(e)==Fe.call(t)}return!1}function va(e,t,a,r,l,i){var p=a&f,g=Xe(e),_=g.length,d=Xe(t),j=d.length;if(_!=j&&!p)return!1;for(var F=_;F--;){var m=g[F];if(!(p?m in t:I.call(t,m)))return!1}var C=i.get(e);if(C&&i.get(t))return C==t;var L=!0;i.set(e,t),i.set(t,e);for(var W=p;++F<_;){m=g[F];var P=e[m],Y=t[m];if(r)var rt=p?r(Y,P,m,t,e,i):r(P,Y,m,e,t,i);if(!(rt===void 0?P===Y||l(P,Y,a,r,i):rt)){L=!1;break}W||(W=m=="constructor")}if(L&&!W){var ge=e.constructor,_e=t.constructor;ge!=_e&&"constructor"in e&&"constructor"in t&&!(typeof ge=="function"&&ge instanceof ge&&typeof _e=="function"&&_e instanceof _e)&&(L=!1)}return i.delete(e),i.delete(t),L}function Xe(e){return ua(e,La,ma)}function he(e,t){var a=e.__data__;return xa(t)?a[typeof t=="string"?"string":"hash"]:a.map}function k(e,t){var a=Ct(e,t);return ha(a)?a:void 0}function ya(e){var t=I.call(e,U),a=e[U];try{e[U]=void 0;var r=!0}catch{}var l=Ge.call(e);return r&&(t?e[U]=a:delete e[U]),l}var ma=Ke?function(e){return e==null?[]:(e=Object(e),xt(Ke(e),function(t){return He.call(e,t)}))}:Ma,q=ie;(Se&&q(new Se(new ArrayBuffer(1)))!=Q||re&&q(new re)!=X||Ce&&q(Ce.resolve())!=te||Le&&q(new Le)!=S||Me&&q(new Me)!=ae)&&(q=function(e){var t=ie(e),a=t==D?e.constructor:void 0,r=a?J(a):"";if(r)switch(r){case Bt:return Q;case Dt:return X;case zt:return te;case qt:return S;case Wt:return ae}return t});function ba(e,t){return t=t??O,!!t&&(typeof e=="number"||mt.test(e))&&e>-1&&e%1==0&&e<t}function xa(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ta(e){return!!We&&We in e}function wa(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||ce;return e===a}function Aa(e){return Ge.call(e)}function J(e){if(e!=null){try{return qe.call(e)}catch{}try{return e+""}catch{}}return""}function Qe(e,t){return e===t||e!==e&&t!==t}var ja=Ye(function(){return arguments}())?Ye:function(e){return se(e)&&I.call(e,"callee")&&!He.call(e,"callee")},pe=Array.isArray;function Sa(e){return e!=null&&et(e.length)&&!ke(e)}var Oe=Rt||Fa;function Ca(e,t){return Ve(e,t)}function ke(e){if(!tt(e))return!1;var t=ie(e);return t==V||t==Z||t==A||t==be}function et(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=O}function tt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function se(e){return e!=null&&typeof e=="object"}var at=ze?jt(ze):pa;function La(e){return Sa(e)?da(e):ga(e)}function Ma(){return[]}function Fa(){return!1}v.exports=Ca})(ye,ye.exports);var vr=ye.exports;const yr=Oa(vr),mr="_graphTooltip_16li6_1",br="_closeBtn_16li6_11",xr="_tooltipValue_16li6_26",Tr="_tooltipTitle_16li6_32",wr="_tooltipField_16li6_41",oe={graphTooltip:mr,closeBtn:br,tooltipValue:xr,tooltipTitle:Tr,tooltipField:wr};qa.register(Wa,Ga,$a,Ua,Ha,Ka,Ja);const Ie=({type:v,graphData:y})=>{const b=y.map(A=>A.period),w=y.map(A=>A.value),f=M.useRef(null),[x,O]=M.useState({opacity:0,top:0,left:0,date:"",value:"",display:"none"}),c={interaction:{mode:"index",intersect:!1},responsive:!0,plugins:{legend:{display:!1,position:"top"},title:{display:!1},tooltip:{enabled:!1,position:"nearest",external:A=>{const N=A.tooltip;if(N.opacity===0&&x.opacity!==0){O(V=>({...V,opacity:0,display:"none"}));return}const G=A.chart.canvas.getBoundingClientRect(),$={opacity:1,display:"block",left:G.left+N.caretX,top:G.top+N.caretY-94,date:N.dataPoints[0].label,value:N.dataPoints[0].formattedValue};yr(x,$)||O($)}}},indexAxis:"x",scales:{x:{alignToPixels:!0,offset:!0,ticks:{padding:6,backdropPadding:0},beginAtZero:!1,grid:{color:"#292928",offset:!0,tickLength:0},border:{color:"#292928"}},y:{ticks:{alignToPixels:!0,stepSize:1e3,padding:8,backdropPadding:0,callback:function(A){return A===0?0:`${A/1e3}${v==="calories"?"K":"L"}`}},beginAtZero:!0,grid:{color:"#292928",tickLength:0},border:{color:"#292928"}}}},T={labels:b,datasets:[{label:"Statistic",data:w,borderColor:"#E3FFA8",tension:.4,backgroundColor:"#292928",borderWidth:1,pointRadius:0,pointHoverBackgroundColor:"#E3FFA8",hitRadius:5,pointHoverRadius:5}]};return n.jsxs(n.Fragment,{children:[n.jsx(Ya,{options:c,ref:f,data:T,style:{width:"100%",fontSize:"10px"}}),n.jsxs("div",{className:oe.graphTooltip,style:{top:x.top,left:x.left,opacity:x.opacity,display:x.display},children:[n.jsx("button",{className:oe.closeBtn,children:n.jsx(Na,{width:16,height:16,stroke:"#B6B6B6"})}),n.jsxs("div",{className:oe.tooltipField,children:[n.jsx("p",{className:oe.tooltipValue,children:x.value}),n.jsx("p",{className:oe.tooltipTitle,children:v==="calories"?"calories":"milliliters"})]})]})]})};Ie.propTypes={type:s.string.isRequired,graphData:s.arrayOf(s.exact({period:s.oneOfType([s.string.isRequired,s.number.isRequired]),value:s.number.isRequired}))};const st=({lastMonth:v,water:y,calories:b,weight:w})=>{const f=Math.round(b.map(({value:c})=>c).reduce((c,T)=>c+T,0)/b.length),x=Math.round(y.map(({value:c})=>c).reduce((c,T)=>c+T,0)/y.length),O=Math.round(w.map(({value:c})=>c).reduce((c,T)=>c+T,0)/w.length);return n.jsxs("div",{children:[n.jsxs("div",{className:u.desktopGraphField,children:[n.jsxs("div",{children:[n.jsxs("div",{className:u.chartTitleField,children:[n.jsx("h4",{className:u.chartTitle,children:"calories"}),n.jsxs("p",{className:u.average,children:["Average value:",n.jsx("span",{className:u.averageValue,children:f?`${f} cal`:"0 cal"})]})]}),n.jsx("div",{className:u.chartCont,children:n.jsx("div",{className:u.chart,children:n.jsx(Ie,{graphData:b,type:"calories"})})})]}),n.jsxs("div",{children:[n.jsxs("div",{className:u.chartTitleField,children:[n.jsx("h4",{className:u.chartTitle,children:"water"}),n.jsxs("p",{className:u.average,children:["Average value:",n.jsx("span",{className:u.averageValue,children:x?`${x} ml`:"0 ml"})]})]}),n.jsx("div",{className:u.chartCont,children:n.jsx("div",{className:u.chart,children:n.jsx(Ie,{graphData:y,type:"water"})})})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:u.chartTitleField,children:[n.jsx("h4",{className:u.chartTitle,children:"weight"}),n.jsxs("p",{className:u.average,children:["Average value:",n.jsx("span",{className:u.averageValue,children:O?`${O} kg`:"0 kg"})]})]}),n.jsx("div",{className:u.weightCont,children:n.jsx("div",{className:u.weightField,children:w.map((c,T)=>n.jsxs("div",{className:u.weightData,children:[n.jsx("p",{className:v?u.dataWeightItemMonth:u.dataWeightItemYear,children:c.value}),n.jsx("p",{className:u.labelWeightItem,children:c.period})]},T))})})]})]})};st.propTypes={lastMonth:s.bool.isRequired,water:s.arrayOf(s.exact({period:s.oneOfType([s.string.isRequired,s.number.isRequired]),value:s.number.isRequired})),calories:s.arrayOf(s.exact({period:s.oneOfType([s.string.isRequired,s.number.isRequired]),value:s.number.isRequired})),weight:s.arrayOf(s.exact({period:s.oneOfType([s.string.isRequired,s.number.isRequired]),value:s.number.isRequired}))};const Ar="_modal_bxjbm_1",jr={modal:Ar},ot=({onClose:v,children:y})=>(M.useEffect(()=>{const b=w=>{w.code==="Escape"&&v()};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[v]),n.jsx("div",{className:jr.modal,children:y}));ot.propTypes={onClose:s.func.isRequired};const Sr=async v=>{const{data:y}=await Ia.get(`/user/statistics?range=${v}`);return y},nt={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"Augest",9:"September",10:"October",11:"November",12:"December"},it={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"June",7:"July",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},Ne=[{period:1,value:1e3},{period:2,value:1500},{period:3,value:1e3}],Cr=()=>{var te;const v=Ea(),y=M.useRef(((te=v.state)==null?void 0:te.from)??Ra.MainPage),[b,w]=M.useState(!1),[f,x]=M.useState(!0),[O,c]=M.useState(!1),[T,A]=M.useState(Ne),[N,G]=M.useState(Ne),[$,V]=M.useState(Ne),[Z,X]=M.useState("Month");M.useEffect(()=>{const be=f?"month":"year";c(!0),(async()=>{try{const S=await Sr(be),le=S.water.map(h=>f?{period:h._id.day,value:Math.round(h.water*2)/2}:{period:it[h._id.month],value:Math.round(h.avgMonth*2)/2}),Te=S.calories.map(h=>f?{period:h._id.day,value:Math.round(h.calories*2)/2}:{period:it[h._id.month],value:Math.round(h.avgMonth*2)/2}),we=S.weight.map(h=>f?{period:h._id.day,value:Math.round(h.weight*2)/2}:{period:nt[h._id.month],value:Math.round(h.avgMonth*2)/2}),ae=Math.round(S.calories.map(h=>S.calories?f?h._id.month:h._id.year:f?"Month":"Year").reduce((h,Q)=>h+Q,0)/S.calories.length);A(le),G(Te),V(we),X(ae)}catch{za.error("Unable to download statistics")}finally{c(!1)}})()},[f]);const ee=()=>{b&&w(!1)},me=()=>{w(!b)},D=()=>{x(!f),ee()};return n.jsxs("section",{children:[O&&n.jsx(Pa,{}),n.jsxs("div",{className:B.titleField,children:[n.jsxs("div",{className:B.lastPeriodField,children:[n.jsx(Ba,{to:y.current,className:B.dashboardLink,children:n.jsx(Va,{strokeWidth:2,width:24,height:24,className:B.goBackBtn})}),n.jsx("h2",{className:B.dashboardTitle,children:f?"Last month":"Last year"}),n.jsx("button",{type:"button",className:`${B.toggleBtn} ${b&&B.toggleIsActive}`,onClick:me,children:n.jsx(Da,{width:16,height:16,stroke:"#E3FFA8"})}),b&&n.jsx(ot,{onClose:ee,children:n.jsx("button",{type:"button",className:B.lastButton,onClick:D,children:f?"Last year":"Last month"})})]}),n.jsx("h3",{className:B.monthTitle,children:f&&Z?`${nt[Z]}`??Z:`${Z}`})]}),n.jsx(st,{water:T,calories:N,weight:$,lastMonth:f})]})},Fr=Cr;export{Fr as default};
