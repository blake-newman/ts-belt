"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[103],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=u(n),s=a,g=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5125:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>u,toc:()=>c,default:()=>m});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"usage",title:"Usage"},p=void 0,u={unversionedId:"getting-started/usage",id:"getting-started/usage",isDocsHomePage:!1,title:"Usage",description:"There are two ways to import ts-belt functions into your project.",source:"@site/docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/ts-belt/docs/getting-started/usage",editUrl:"https://github.com/mobily/ts-belt/edit/master/docs/docs/getting-started/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"sidebar",previous:{title:"TS and ESLint config",permalink:"/ts-belt/docs/getting-started/config"},next:{title:"Changelog",permalink:"/ts-belt/docs/changelog"}},c=[{value:"Compact",id:"compact",children:[],level:3},{value:"Explicit",id:"explicit",children:[],level:3}],d={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are two ways to import ",(0,l.kt)("inlineCode",{parentName:"p"},"ts-belt")," functions into your project."),(0,l.kt)("h3",{id:"compact"},"Compact"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Module"),(0,l.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/array"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"Utility functions for ",(0,l.kt)("inlineCode",{parentName:"td"},"Array"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/boolean"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"Utility functions for ",(0,l.kt)("inlineCode",{parentName:"td"},"Boolean"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/number"},"Number")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Utility functions for ",(0,l.kt)("inlineCode",{parentName:"td"},"Number"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/object"},"Object (Dict)")),(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"Utility functions for ",(0,l.kt)("inlineCode",{parentName:"td"},"Object"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/string"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"S"),(0,l.kt)("td",{parentName:"tr",align:null},"Utility functions for ",(0,l.kt)("inlineCode",{parentName:"td"},"String"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/guards"},"Guards")),(0,l.kt)("td",{parentName:"tr",align:null},"G"),(0,l.kt)("td",{parentName:"tr",align:null},"Various TypeScript guards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/option"},"Option")),(0,l.kt)("td",{parentName:"tr",align:null},"O"),(0,l.kt)("td",{parentName:"tr",align:null},"Functions for handling the ",(0,l.kt)("inlineCode",{parentName:"td"},"Option")," type that represents the existence and nonexistence of a value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/result"},"Result")),(0,l.kt)("td",{parentName:"tr",align:null},"R"),(0,l.kt)("td",{parentName:"tr",align:null},"Functions for describing the result of a certain operation without relying on exceptions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/api/function"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"Other useful functions.")))),(0,l.kt)("p",null,"The full API reference can be found ",(0,l.kt)("a",{parentName:"p",href:"/api/array"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { A, O, N, pipe } from '@mobily/ts-belt'\n\npipe(\n  [1, 2, 3, 4, 5], // \u2192 [1, 2, 3, 4, 5]\n  A.dropExactly(2), // \u2192 Some([3, 4, 5])\n  O.flatMap(A.head), // \u2192 Some(3)\n  O.map(N.multiply(10)), // \u2192 Some(30)\n  O.getWithDefault(0), // \u2192 30\n) // \u2192 30\n")),(0,l.kt)("h3",{id:"explicit"},"Explicit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as Belt from '@mobily/ts-belt'\n\nBelt.pipe(\n  [1, 2, 3, 4, 5],\n  Belt.A.dropExactly(2),\n  Belt.O.flatMap(Belt.A.head),\n  Belt.O.map(Belt.N.multiply(10)),\n  Belt.O.getWithDefault(0),\n)\n")))}m.isMDXComponent=!0}}]);