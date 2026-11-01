"use strict";var m=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var s=m(function(L,x){
var k=require('@stdlib/blas-ext-base-dwapx/dist').ndarray,z=require('@stdlib/blas-ext-base-dwax/dist').ndarray,f=5;function A(i,r,u,n,o,y,e,c,d){var v,a,t,q;if(i<=0)return e;if(r===1)return k(i,u,n,o,y,e,c,d);if(u===0)return z(i,r,n,o,y,e,c,d);if(v=y,a=d,o===1&&c===1){if(t=i%f,t>0)for(q=0;q<t;q++)e[a]=r*n[v]+u,v+=o,a+=c;if(i<f)return e;for(q=t;q<i;q+=f)e[a]=r*n[v]+u,e[a+1]=r*n[v+1]+u,e[a+2]=r*n[v+2]+u,e[a+3]=r*n[v+3]+u,e[a+4]=r*n[v+4]+u,v+=f,a+=f;return e}for(q=0;q<i;q++)e[a]=r*n[v]+u,v+=o,a+=c;return e}x.exports=A
});var _=m(function(P,R){
var p=require('@stdlib/strided-base-stride2offset/dist'),B=s();function C(i,r,u,n,o,y,e){return B(i,r,u,n,o,p(i,o),y,e,p(i,e))}R.exports=C
});var O=m(function(Q,M){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),F=s();D(E,"ndarray",F);M.exports=E
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=O(),j,g=H(G(__dirname,"./native.js"));I(g)?j=J:j=g;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
