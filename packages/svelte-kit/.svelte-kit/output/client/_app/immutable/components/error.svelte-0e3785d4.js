import{J as K,S as L,i as h,s as j,l as d,r as k,a as S,e as q,m as E,n as g,u as $,h as p,c as C,b as u,K as P,v as R,B,L as w}from"../chunks/index-edb2350d.js";const y=()=>{const t=K("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},z={subscribe(t){return y().page.subscribe(t)}};function H(t){let r,i=t[0].error.frame+"",l;return{c(){r=d("pre"),l=k(i)},l(s){r=E(s,"PRE",{});var a=g(r);l=$(a,i),a.forEach(p)},m(s,a){u(s,r,a),P(r,l)},p(s,a){a&1&&i!==(i=s[0].error.frame+"")&&R(l,i)},d(s){s&&p(r)}}}function J(t){let r,i=t[0].error.stack+"",l;return{c(){r=d("pre"),l=k(i)},l(s){r=E(s,"PRE",{});var a=g(r);l=$(a,i),a.forEach(p)},m(s,a){u(s,r,a),P(r,l)},p(s,a){a&1&&i!==(i=s[0].error.stack+"")&&R(l,i)},d(s){s&&p(r)}}}function A(t){let r,i=t[0].status+"",l,s,a,m=t[0].error.message+"",b,v,_,c,o=t[0].error.frame&&H(t),f=t[0].error.stack&&J(t);return{c(){r=d("h1"),l=k(i),s=S(),a=d("pre"),b=k(m),v=S(),o&&o.c(),_=S(),f&&f.c(),c=q()},l(e){r=E(e,"H1",{});var n=g(r);l=$(n,i),n.forEach(p),s=C(e),a=E(e,"PRE",{});var N=g(a);b=$(N,m),N.forEach(p),v=C(e),o&&o.l(e),_=C(e),f&&f.l(e),c=q()},m(e,n){u(e,r,n),P(r,l),u(e,s,n),u(e,a,n),P(a,b),u(e,v,n),o&&o.m(e,n),u(e,_,n),f&&f.m(e,n),u(e,c,n)},p(e,[n]){n&1&&i!==(i=e[0].status+"")&&R(l,i),n&1&&m!==(m=e[0].error.message+"")&&R(b,m),e[0].error.frame?o?o.p(e,n):(o=H(e),o.c(),o.m(_.parentNode,_)):o&&(o.d(1),o=null),e[0].error.stack?f?f.p(e,n):(f=J(e),f.c(),f.m(c.parentNode,c)):f&&(f.d(1),f=null)},i:B,o:B,d(e){e&&p(r),e&&p(s),e&&p(a),e&&p(v),o&&o.d(e),e&&p(_),f&&f.d(e),e&&p(c)}}}function D(t,r,i){let l;return w(t,z,s=>i(0,l=s)),[l]}class G extends L{constructor(r){super(),h(this,r,D,A,j,{})}}export{G as default};
