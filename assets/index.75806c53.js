import{c as E,R as t,a as b,_ as l,S as m,u as h,b as N}from"./vendor.5b22622a.js";const g=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};g();const P=E(),v=({history:s,children:i})=>{const[c,o]=t.useState({action:s.action,location:s.location});return t.useLayoutEffect(()=>{s.listen(o)},[s]),t.createElement(b,Object.assign({children:i,navigator:s},c))};const y="modulepreload",p={},x="",n=function(i,c){return!c||c.length===0?i():Promise.all(c.map(o=>{if(o=`${x}${o}`,o in p)return;p[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":y,e||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),e)return new Promise((f,d)=>{a.addEventListener("load",f),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>i())},T=l.exports.lazy(()=>n(()=>import("./Home.151c6e74.js"),["assets/Home.151c6e74.js","assets/Home.6fca6f43.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css"])),L=l.exports.lazy(()=>n(()=>import("./NotFound.b59c85ff.js"),["assets/NotFound.b59c85ff.js","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css"])),R=l.exports.lazy(()=>n(()=>import("./About.2bd49617.js"),["assets/About.2bd49617.js","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css"])),O=l.exports.lazy(()=>n(()=>import("./index.0e1d2a13.js"),["assets/index.0e1d2a13.js","assets/index.00e4def2.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css"])),A=l.exports.lazy(()=>n(()=>import("./index.5609e1f5.js"),["assets/index.5609e1f5.js","assets/index.00e4def2.css","assets/index.aa3ccb64.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css"])),D=l.exports.lazy(()=>n(()=>import("./index.c3c36b16.js"),["assets/index.c3c36b16.js","assets/index.00e4def2.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css"])),I=l.exports.lazy(()=>n(()=>import("./index.7b0fefaf.js"),["assets/index.7b0fefaf.js","assets/index.00e4def2.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css"])),z=l.exports.lazy(()=>n(()=>import("./index.268f328c.js"),["assets/index.268f328c.js","assets/index.00e4def2.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css","assets/vec3.d4a804b7.js"])),V=l.exports.lazy(()=>n(()=>import("./index.2e3f6083.js"),["assets/index.2e3f6083.js","assets/index.00e4def2.css","assets/index.aa3ccb64.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css","assets/vec3.d4a804b7.js"])),S=l.exports.lazy(()=>n(()=>import("./index.3e3dc02b.js"),["assets/index.3e3dc02b.js","assets/index.00e4def2.css","assets/index.aa3ccb64.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css","assets/vec3.d4a804b7.js"])),w=l.exports.lazy(()=>n(()=>import("./index.31771581.js"),["assets/index.31771581.js","assets/index.00e4def2.css","assets/index.aa3ccb64.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css","assets/vec3.d4a804b7.js"])),$=l.exports.lazy(()=>n(()=>import("./index.19a53880.js"),["assets/index.19a53880.js","assets/index.00e4def2.css","assets/index.aa3ccb64.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css","assets/vec3.d4a804b7.js"])),k=l.exports.lazy(()=>n(()=>import("./index.41810c1c.js"),["assets/index.41810c1c.js","assets/index.00e4def2.css","assets/index.aa3ccb64.css","assets/vendor.5b22622a.js","assets/vendor.ac0748b7.css","assets/vec3.d4a804b7.js"])),F=[{path:"/",element:T},{path:"/part1",element:O},{path:"/part2",element:A},{path:"/part3",element:D},{path:"/part4",element:I},{path:"/part5",element:z},{path:"/part6",element:V},{path:"/part7",element:S},{path:"/part8",element:w},{path:"/part9",element:$},{path:"/part10",element:k},{path:"about",element:R},{path:"404",element:L}];var u="/Users/indeex/Documents/program/indeex/program/webGPU/wgsl-base/src/App.tsx";const U=s=>t.createElement(l.exports.Suspense,{fallback:t.createElement("div",{className:"iloading",__self:globalThis,__source:{fileName:u,lineNumber:8,columnNumber:30}},t.createElement(m,{active:!0,__self:globalThis,__source:{fileName:u,lineNumber:8,columnNumber:56}}),t.createElement(m,{active:!0,__self:globalThis,__source:{fileName:u,lineNumber:8,columnNumber:75}}),t.createElement(m,{active:!0,__self:globalThis,__source:{fileName:u,lineNumber:8,columnNumber:94}}),t.createElement(m,{active:!0,__self:globalThis,__source:{fileName:u,lineNumber:8,columnNumber:113}}),t.createElement(m,{active:!0,__self:globalThis,__source:{fileName:u,lineNumber:8,columnNumber:132}})),__self:globalThis,__source:{fileName:u,lineNumber:8,columnNumber:10}},s),H=()=>{let s=[];F.forEach((c,o)=>{const e=c.element,r={path:c.path,element:U(t.createElement(e,{__self:globalThis,__source:{fileName:u,lineNumber:19,columnNumber:25}}))};s.push(r)});const i=h([...s]);return t.createElement(t.Fragment,null,i)};var _="/Users/indeex/Documents/program/indeex/program/webGPU/wgsl-base/src/main.tsx";N.render(t.createElement(t.StrictMode,{__self:globalThis,__source:{fileName:_,lineNumber:8,columnNumber:3}},t.createElement(v,{history:P,__self:globalThis,__source:{fileName:_,lineNumber:9,columnNumber:5}},t.createElement(H,{__self:globalThis,__source:{fileName:_,lineNumber:10,columnNumber:7}}))),document.getElementById("root"));export{P as h};
