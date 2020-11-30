(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{114:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||l;return t?a.a.createElement(m,u(u({ref:r},c),{},{components:t})):a.a.createElement(m,u({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var c=2;c<l;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return s}));var n=t(3),a=t(7),l=(t(0),t(114)),o={id:"fromNullable",title:"fromNullable"},u={unversionedId:"result/fromNullable",id:"result/fromNullable",isDocsHomePage:!1,title:"fromNullable",description:"It returns Error if a value is either null or undefined, otherwise, returns that value wrapped in Ok.",source:"@site/docs/result/fromNullable.md",slug:"/result/fromNullable",permalink:"/ts-belt/docs/result/fromNullable",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/result/fromNullable.md",version:"current",sidebar:"sidebar",previous:{title:"fromFalsy",permalink:"/ts-belt/docs/result/fromFalsy"},next:{title:"fromPredicate",permalink:"/ts-belt/docs/result/fromPredicate"}},i=[{value:"Example",id:"example",children:[]}],c={rightToc:i};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(l.b)("p",null,"It returns ",Object(l.b)("inlineCode",{parentName:"p"},"Error")," if a value is either ",Object(l.b)("inlineCode",{parentName:"p"},"null")," or ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),", otherwise, returns that value wrapped in ",Object(l.b)("inlineCode",{parentName:"p"},"Ok"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"fromNullable<A, B>(error: B, value: A | null | undefined): Result<A, B>\n")),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function() {\n  const error = new Error(':(')\n  const value = pipe(\n    // \u2b07\ufe0f pass `null` or `undefined` below\n    R.fromNullable(error, 'hello'),\n    R.match(value => `${value} world!`, err => err.message),\n  )\n\n  return value\n}\n")))}s.isMDXComponent=!0}}]);