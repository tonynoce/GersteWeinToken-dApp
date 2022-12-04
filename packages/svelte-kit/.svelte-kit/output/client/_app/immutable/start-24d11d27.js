var Ke=Object.defineProperty;var Je=(r,e,t)=>e in r?Ke(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var de=(r,e,t)=>(Je(r,typeof e!="symbol"?e+"":e,t),t);import{S as We,i as He,s as Fe,a as Ge,e as j,c as Ye,b as V,g as H,t as N,d as F,f as C,h as D,j as Me,k as Xe,o as ge,l as Ze,m as Qe,n as xe,p as pe,q as K,r as et,u as tt,v as nt,w as q,x as Z,y as z,z as B,A as Oe}from"./chunks/index-edb2350d.js";import{w as re}from"./chunks/index-8212d1f4.js";class ne{constructor(e,t){de(this,"name","HttpError");de(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class Pe{constructor(e,t){this.status=e,this.location=t}}function rt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function st(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class at extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let je="",ze="";function it(r){je=r.base,ze=r.assets||je}function Ne(r){let e=r.baseURI;if(!e){const t=r.getElementsByTagName("base");e=t.length?t[0].href:r.URL}return e}function we(){return{x:pageXOffset,y:pageYOffset}}function Ce(r){return r.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function Ie(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Te(r){const e=re(r);let t=!0;function o(){t=!0,e.update(n=>n)}function s(n){t=!1,e.set(n)}function u(n){let i;return e.subscribe(c=>{(i===void 0||t&&c!==i)&&n(i=c)})}return{notify:o,set:s,subscribe:u}}function ot(){const{set:r,subscribe:e}=re(!1);let t;async function o(){clearTimeout(t);const s=await fetch(`${ze}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const{version:u}=await s.json(),n=u!=="1660620441472";return n&&(r(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:o}}function ct(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const be=window.fetch;function lt(r,e){let o=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(o+=`[sveltekit\\:data-body="${ct(e.body)}"]`);const s=document.querySelector(o);if(s&&s.textContent){const{body:u,...n}=JSON.parse(s.textContent);return Promise.resolve(new Response(u,n))}return be(r,e)}const ft=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ut(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,n,i)=>{const c=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(c)return e.push(c[1]),t.push(c[2]),"(?:/(.*))?";const p=n===i.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((_,E)=>{if(E%2){const S=ft.exec(_);if(!S)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,Q,x]=S;return e.push(Q),t.push(x),v?"(.*?)":"([^/]+?)"}return p&&_.includes(".")&&(o=!1),_.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function dt(r,e,t,o){const s={};for(let u=0;u<e.length;u+=1){const n=e[u],i=t[u],c=r[u+1]||"";if(i){const p=o[i];if(!p)throw new Error(`Missing "${i}" param matcher`);if(!p(c))return}s[n]=c}return s}function pt(r,e,t){return Object.entries(e).map(([o,[s,u,n,i]])=>{const{pattern:c,names:p,types:_}=ut(o),E={id:o,exec:S=>{const v=c.exec(S);if(v)return dt(v,p,_,t)},errors:s.map(S=>r[S]),layouts:u.map(S=>r[S]),leaf:r[n],uses_server_data:!!i};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E})}function ht(r,e){return new ne(r,e)}function _t(r){let e,t,o;var s=r[0][0];function u(n){return{props:{data:n[1],errors:n[4]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&2&&(c.data=n[1]),i&16&&(c.errors=n[4]),s!==(s=n[0][0])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function mt(r){let e,t,o;var s=r[0][0];function u(n){return{props:{data:n[1],$$slots:{default:[yt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&2&&(c.data=n[1]),i&1053&&(c.$$scope={dirty:i,ctx:n}),s!==(s=n[0][0])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function gt(r){let e,t,o;var s=r[0][1];function u(n){return{props:{data:n[2],errors:n[4]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&4&&(c.data=n[2]),i&16&&(c.errors=n[4]),s!==(s=n[0][1])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function wt(r){let e,t,o;var s=r[0][1];function u(n){return{props:{data:n[2],$$slots:{default:[bt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&4&&(c.data=n[2]),i&1033&&(c.$$scope={dirty:i,ctx:n}),s!==(s=n[0][1])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function bt(r){let e,t,o;var s=r[0][2];function u(n){return{props:{data:n[3]}}}return s&&(e=new s(u(r))),{c(){e&&q(e.$$.fragment),t=j()},l(n){e&&Z(e.$$.fragment,n),t=j()},m(n,i){e&&z(e,n,i),V(n,t,i),o=!0},p(n,i){const c={};if(i&8&&(c.data=n[3]),s!==(s=n[0][2])){if(e){H();const p=e;N(p.$$.fragment,1,0,()=>{B(p,1)}),F()}s?(e=new s(u(n)),q(e.$$.fragment),C(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(n){o||(e&&C(e.$$.fragment,n),o=!0)},o(n){e&&N(e.$$.fragment,n),o=!1},d(n){n&&D(t),e&&B(e,n)}}}function yt(r){let e,t,o,s;const u=[wt,gt],n=[];function i(c,p){return c[0][2]?0:1}return e=i(r),t=n[e]=u[e](r),{c(){t.c(),o=j()},l(c){t.l(c),o=j()},m(c,p){n[e].m(c,p),V(c,o,p),s=!0},p(c,p){let _=e;e=i(c),e===_?n[e].p(c,p):(H(),N(n[_],1,1,()=>{n[_]=null}),F(),t=n[e],t?t.p(c,p):(t=n[e]=u[e](c),t.c()),C(t,1),t.m(o.parentNode,o))},i(c){s||(C(t),s=!0)},o(c){N(t),s=!1},d(c){n[e].d(c),c&&D(o)}}}function De(r){let e,t=r[6]&&Ve(r);return{c(){e=Ze("div"),t&&t.c(),this.h()},l(o){e=Qe(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=xe(e);t&&t.l(s),s.forEach(D),this.h()},h(){pe(e,"id","svelte-announcer"),pe(e,"aria-live","assertive"),pe(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(o,s){V(o,e,s),t&&t.m(e,null)},p(o,s){o[6]?t?t.p(o,s):(t=Ve(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&D(e),t&&t.d()}}}function Ve(r){let e;return{c(){e=et(r[7])},l(t){e=tt(t,r[7])},m(t,o){V(t,e,o)},p(t,o){o&128&&nt(e,t[7])},d(t){t&&D(e)}}}function vt(r){let e,t,o,s,u;const n=[mt,_t],i=[];function c(_,E){return _[0][1]?0:1}e=c(r),t=i[e]=n[e](r);let p=r[5]&&De(r);return{c(){t.c(),o=Ge(),p&&p.c(),s=j()},l(_){t.l(_),o=Ye(_),p&&p.l(_),s=j()},m(_,E){i[e].m(_,E),V(_,o,E),p&&p.m(_,E),V(_,s,E),u=!0},p(_,[E]){let S=e;e=c(_),e===S?i[e].p(_,E):(H(),N(i[S],1,1,()=>{i[S]=null}),F(),t=i[e],t?t.p(_,E):(t=i[e]=n[e](_),t.c()),C(t,1),t.m(o.parentNode,o)),_[5]?p?p.p(_,E):(p=De(_),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(_){u||(C(t),u=!0)},o(_){N(t),u=!1},d(_){i[e].d(_),_&&D(o),p&&p.d(_),_&&D(s)}}}function kt(r,e,t){let{stores:o}=e,{page:s}=e,{components:u}=e,{data_0:n=null}=e,{data_1:i=null}=e,{data_2:c=null}=e,{errors:p}=e;Me("__svelte__",o),Xe(o.page.notify);let _=!1,E=!1,S=null;return ge(()=>{const v=o.page.subscribe(()=>{_&&(t(6,E=!0),t(7,S=document.title||"untitled page"))});return t(5,_=!0),v}),r.$$set=v=>{"stores"in v&&t(8,o=v.stores),"page"in v&&t(9,s=v.page),"components"in v&&t(0,u=v.components),"data_0"in v&&t(1,n=v.data_0),"data_1"in v&&t(2,i=v.data_1),"data_2"in v&&t(3,c=v.data_2),"errors"in v&&t(4,p=v.errors)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(s)},[u,n,i,c,p,_,E,S,o,s]}class $t extends We{constructor(e){super(),He(this,e,kt,vt,Fe,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const Et=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Rt=function(r){return"/"+r},qe={},he=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=Rt(s),s in qe)return;qe[s]=!0;const u=s.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":Et,u||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),u)return new Promise((c,p)=>{i.addEventListener("load",c),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Lt={},se=[()=>he(()=>import("./chunks/0-3f49ac77.js"),["_app/immutable/chunks/0-3f49ac77.js","_app/immutable/components/layout.svelte-676bb282.js","_app/immutable/chunks/index-edb2350d.js"]),()=>he(()=>import("./chunks/1-e97d819e.js"),["_app/immutable/chunks/1-e97d819e.js","_app/immutable/components/error.svelte-0e3785d4.js","_app/immutable/chunks/index-edb2350d.js"]),()=>he(()=>import("./chunks/2-4cbb098c.js"),["_app/immutable/chunks/2-4cbb098c.js","_app/immutable/components/pages/_page.svelte-1a3b509a.js","_app/immutable/assets/+page-b47da0ba.css","_app/immutable/chunks/index-edb2350d.js","_app/immutable/chunks/index-8212d1f4.js"])],St={"":[[1],[0],2]},Be="sveltekit:scroll",W="sveltekit:index",_e=pt(se,St,Lt),Ut=se[0](),At=se[1]();let X={};try{X=JSON.parse(sessionStorage[Be])}catch{}function me(r){X[r]=we()}function Ot({target:r,session:e,base:t,trailing_slash:o}){var Se;const s=[],u={url:Te({}),page:Te({}),navigating:re(null),session:re(e),updated:ot()},n={id:null,promise:null},i={before_navigate:[],after_navigate:[]};let c={branch:[],error:null,session_id:0,url:null},p=!1,_=!0,E=!1,S=1,v=null,Q,x,ye=!1;u.session.subscribe(async a=>{x=a,!(!ye||(S+=1,!c.branch.some(g=>g==null?void 0:g.uses.session)))&&ce(new URL(location.href),[])}),ye=!0;let G=!0,T=(Se=history.state)==null?void 0:Se[W];T||(T=Date.now(),history.replaceState({...history.state,[W]:T},"",location.href));const ae=X[T];ae&&(history.scrollRestoration="manual",scrollTo(ae.x,ae.y));let ie=!1,oe,ve;async function ke(a,{noscroll:d=!1,replaceState:g=!1,keepfocus:l=!1,state:f={}},$){if(typeof a=="string"&&(a=new URL(a,Ne(document))),G)return fe({url:a,scroll:d?we():null,keepfocus:l,redirect_chain:$,details:{state:f,replaceState:g},accepted:()=>{},blocked:()=>{}});await M(a)}async function $e(a){const d=Le(a);if(!d)throw new Error("Attempted to prefetch a URL that does not belong to this app");return n.promise=Re(d),n.id=d.id,n.promise}async function ce(a,d,g,l){var k,L,U;const f=Le(a),$=ve={};let h=f&&await Re(f);if(!h&&a.origin===location.origin&&a.pathname===location.pathname&&(h=await te({status:404,error:new Error(`Not found: ${a.pathname}`),url:a,routeId:null})),!h)return await M(a),!1;if(a=(f==null?void 0:f.url)||a,ve!==$)return!1;if(s.length=0,h.type==="redirect")if(d.length>10||d.includes(a.pathname))h=await te({status:500,error:new Error("Redirect loop"),url:a,routeId:null});else return G?ke(new URL(h.location,a).href,{},[...d,a.pathname]):await M(new URL(h.location,location.href)),!1;else((L=(k=h.props)==null?void 0:k.page)==null?void 0:L.status)>=400&&await u.updated.check()&&await M(a);if(E=!0,g&&g.details){const{details:b}=g,A=b.replaceState?0:1;b.state[W]=T+=A,history[b.replaceState?"replaceState":"pushState"](b.state,"",a)}if(p?(c=h.state,h.props.page&&(h.props.page.url=a),Q.$set(h.props)):Ee(h),g){const{scroll:b,keepfocus:A}=g;if(!A){const R=document.body,m=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var w;(w=getSelection())==null||w.removeAllRanges()}),m!==null?R.setAttribute("tabindex",m):R.removeAttribute("tabindex")}if(await Oe(),_){const R=a.hash&&document.getElementById(a.hash.slice(1));b?scrollTo(b.x,b.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Oe();n.promise=null,n.id=null,_=!0,h.props.page&&(oe=h.props.page);const y=h.state.branch.at(-1);G=((U=y==null?void 0:y.node.shared)==null?void 0:U.router)!==!1,l&&l(),E=!1}function Ee(a){c=a.state;const d=document.querySelector("style[data-sveltekit]");if(d&&d.remove(),oe=a.props.page,Q=new $t({target:r,props:{...a.props,stores:u},hydrate:!0}),G){const g={from:null,to:new URL(location.href)};i.after_navigate.forEach(l=>l(g))}p=!0}async function ee({url:a,params:d,branch:g,status:l,error:f,routeId:$}){const h=g.filter(Boolean),y={type:"loaded",state:{url:a,params:d,branch:g,error:f,session_id:S},props:{components:h.map(b=>b.node.component)}};let k={},L=!1;for(let b=0;b<h.length;b+=1)Object.assign(k,h[b].data),c.branch.some(A=>A===h[b])||(y.props[`data_${b}`]=h[b].data,L=!0);if(!c.url||a.href!==c.url.href||c.error!==f||L){y.props.page={error:f,params:d,routeId:$,status:l,url:a,data:k};const b=(A,R)=>{Object.defineProperty(y.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${R}`)}})};b("origin","origin"),b("path","pathname"),b("query","searchParams")}return y}async function le({node:a,parent:d,url:g,params:l,routeId:f,server_data:$}){var A,R;const h={params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1};function y(...m){for(const w of m){const{href:O}=new URL(w,g);h.dependencies.add(O)}}let k=null;a.server&&(h.dependencies.add(g.href),h.url=!0);const L={};for(const m in l)Object.defineProperty(L,m,{get(){return h.params.add(m),l[m]},enumerable:!0});const U=x,b=new at(g);if((A=a.shared)!=null&&A.load){const m={routeId:f,params:L,data:$,get url(){return h.url=!0,b},get session(){return h.session=!0,U},async fetch(w,O){let P;typeof w=="string"?P=w:(P=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O});const J=new URL(P,g).href;return y(J),p?be(J,O):lt(P,O)},setHeaders:()=>{},depends:y,get parent(){return h.parent=!0,d},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};k=(R=await a.shared.load.call(null,m))!=null?R:null}return{node:a,data:k||$,uses:h}}async function Re({id:a,url:d,params:g,route:l}){if(n.id===a&&n.promise)return n.promise;const{errors:f,layouts:$,leaf:h}=l,y=c.url&&{url:a!==c.url.pathname+c.url.search,params:Object.keys(g).filter(m=>c.params[m]!==g[m]),session:S!==c.session_id};[...f,...$,h].forEach(m=>m==null?void 0:m().catch(()=>{}));const k=[...$,h],L=[];for(let m=0;m<k.length;m++)if(!k[m])L.push(!1);else{const w=c.branch[m],O=!w||y.url&&w.uses.url||y.params.some(P=>w.uses.params.has(P))||y.session&&w.uses.session||Array.from(w.uses.dependencies).some(P=>s.some(J=>J(P)))||w.uses.parent&&L.includes(!0);L.push(O)}let U=null;if(l.uses_server_data){try{const m=await be(`${d.pathname}${d.pathname.endsWith("/")?"":"/"}__data.json${d.search}`);if(U=await m.json(),!m.ok)throw U}catch{throw new Error("TODO render fallback error page")}if(U.type==="redirect")return U}const b=U==null?void 0:U.nodes,A=k.map(async(m,w)=>Promise.resolve().then(async()=>{var Y;if(!m)return;const O=await m(),P=c.branch[w];if(L[w]||!P||O!==P.node){const I=b==null?void 0:b[w];if(I!=null&&I.status)throw ht(I.status,I.message);if(I!=null&&I.error)throw I.error;return await le({node:O,url:d,params:g,routeId:l.id,parent:async()=>{var Ae;const Ue={};for(let ue=0;ue<w;ue+=1)Object.assign(Ue,(Ae=await A[ue])==null?void 0:Ae.data);return Ue},server_data:(Y=I==null?void 0:I.data)!=null?Y:null})}else return P}));for(const m of A)m.catch(()=>{});const R=[];for(let m=0;m<k.length;m+=1)if(k[m])try{R.push(await A[m])}catch(w){const O=w;if(O instanceof Pe)return{type:"redirect",location:O.location};const P=w instanceof ne?w.status:500;for(;m--;)if(f[m]){let J,Y=m;for(;!R[Y];)Y-=1;try{return J={node:await f[m](),data:{},uses:{params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1}},await ee({url:d,params:g,branch:R.slice(0,Y+1).concat(J),status:P,error:O,routeId:l.id})}catch{continue}}return await te({status:P,error:O,url:d,routeId:l.id})}else R.push(void 0);return await ee({url:d,params:g,branch:R,status:200,error:null,routeId:l.id})}async function te({status:a,error:d,url:g,routeId:l}){const f={},$=await le({node:await Ut,url:g,params:f,routeId:l,parent:()=>Promise.resolve({}),server_data:null}),h={node:await At,data:null,uses:{params:new Set,url:!1,session:!1,dependencies:new Set,parent:!1}};return await ee({url:g,params:f,branch:[$,h],status:a,error:d,routeId:l})}function Le(a){if(a.origin!==location.origin||!a.pathname.startsWith(t))return;const d=decodeURI(a.pathname.slice(t.length)||"/");for(const g of _e){const l=g.exec(d);if(l){const f=new URL(a.origin+rt(a.pathname,o)+a.search+a.hash);return{id:f.pathname+f.search,route:g,params:st(l),url:f}}}}async function fe({url:a,scroll:d,keepfocus:g,redirect_chain:l,details:f,accepted:$,blocked:h}){const y=c.url;let k=!1;const L={from:y,to:a,cancel:()=>k=!0};if(i.before_navigate.forEach(U=>U(L)),k){h();return}me(T),$(),p&&u.navigating.set({from:c.url,to:a}),await ce(a,l,{scroll:d,keepfocus:g,details:f},()=>{const U={from:y,to:a};i.after_navigate.forEach(b=>b(U)),u.navigating.set(null)})}function M(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ge(()=>(i.after_navigate.push(a),()=>{const d=i.after_navigate.indexOf(a);i.after_navigate.splice(d,1)}))},before_navigate:a=>{ge(()=>(i.before_navigate.push(a),()=>{const d=i.before_navigate.indexOf(a);i.before_navigate.splice(d,1)}))},disable_scroll_handling:()=>{(E||!p)&&(_=!1)},goto:(a,d={})=>ke(a,d,[]),invalidate:a=>{if(a===void 0){for(const d of c.branch)d==null||d.uses.dependencies.add("");s.push(()=>!0)}else if(typeof a=="function")s.push(a);else{const{href:d}=new URL(a,location.href);s.push(g=>g===d)}return v||(v=Promise.resolve().then(async()=>{await ce(new URL(location.href),[]),v=null})),v},prefetch:async a=>{const d=new URL(a,Ne(document));await $e(d)},prefetch_routes:async a=>{const g=(a?_e.filter(l=>a.some(f=>l.exec(f))):_e).map(l=>Promise.all([...l.layouts,l.leaf].map(f=>f==null?void 0:f())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{let f=!1;const $={from:c.url,to:null,cancel:()=>f=!0};i.before_navigate.forEach(h=>h($)),f?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){me(T);try{sessionStorage[Be]=JSON.stringify(X)}catch{}}});const a=l=>{const f=Ce(l);f&&f.href&&f.hasAttribute("sveltekit:prefetch")&&$e(Ie(f))};let d;const g=l=>{clearTimeout(d),d=setTimeout(()=>{var f;(f=l.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",l=>{if(!G||l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const f=Ce(l);if(!f||!f.href)return;const $=f instanceof SVGAElement,h=Ie(f);if(!$&&!(h.protocol==="https:"||h.protocol==="http:"))return;const y=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||y.includes("external")||f.hasAttribute("sveltekit:reload")||($?f.target.baseVal:f.target))return;const[k,L]=h.href.split("#");if(L!==void 0&&k===location.href.split("#")[0]){ie=!0,me(T),u.page.set({...oe,url:h}),u.page.notify();return}fe({url:h,scroll:f.hasAttribute("sveltekit:noscroll")?we():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault()})}),addEventListener("popstate",l=>{if(l.state&&G){if(l.state[W]===T)return;fe({url:new URL(location.href),scroll:X[l.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=l.state[W]},blocked:()=>{const f=T-l.state[W];history.go(f)}})}}),addEventListener("hashchange",()=>{ie&&(ie=!1,history.replaceState({...history.state,[W]:++T},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&u.navigating.set(null)})},_hydrate:async({status:a,error:d,node_ids:g,params:l,routeId:f})=>{const $=new URL(location.href);let h;try{const y=document.querySelector('script[sveltekit\\:data-type="server_data"]'),k=y!=null&&y.textContent?JSON.parse(y.textContent):[],L=g.map(async(U,b)=>{var A;return le({node:await se[U](),url:$,params:l,routeId:f,parent:async()=>{const R={};for(let m=0;m<b;m+=1)Object.assign(R,(await L[m]).data);return R},server_data:(A=k[b])!=null?A:null})});h=await ee({url:$,params:l,branch:await Promise.all(L),status:a,error:d!=null&&d.__is_http_error?new ne(d.status,d.message):d,routeId:f})}catch(y){const k=y;if(k instanceof Pe){await M(new URL(y.location,location.href));return}h=await te({status:k instanceof ne?k.status:500,error:k,url:$,routeId:f})}Ee(h)}}}function Pt(r){r.client}function It(r){}async function Tt({paths:r,target:e,session:t,route:o,spa:s,trailing_slash:u,hydrate:n}){const i=Ot({target:e,session:t,base:r.base,trailing_slash:u});Pt({client:i}),it(r),n&&await i._hydrate(n),o&&(s&&i.goto(location.href,{replaceState:!0}),i._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{It as set_public_env,Tt as start};