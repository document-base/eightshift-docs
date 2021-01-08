(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(250)),i={id:"blocks-patterns",title:"Patterns",sidebar_label:"Patterns"},s={id:"basics/blocks-patterns",title:"Patterns",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-patterns.md",permalink:"/eightshift-docs/docs/basics/blocks-patterns",sidebar_label:"Patterns",sidebar:"docs",previous:{title:"Variations",permalink:"/eightshift-docs/docs/basics/blocks-variations"},next:{title:"Transforms",permalink:"/eightshift-docs/docs/basics/blocks-transforms"}},c=[],l={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"Block Patterns are predefined block layouts, ready to insert and tweak."),Object(o.b)("p",null,"You can check ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-patterns/"}),"WordPress documentation")," on this subject."),Object(o.b)("p",null,"Patterns are (as we understand them) the same thing as block variations, but the main difference is that you can provide full layouts with patterns. As we described in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"blocks-variations#limitations"}),"this chapter"),". You can also provide the full page layouts with our variations."),Object(o.b)("p",null,"This means the only difference between our variations and block patterns are:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Variations")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Variations provide data using our manifest.json file (the rest is handled using JavaScript)"),Object(o.b)("li",{parentName:"ul"},"Variations appear in the editor next to the regular blocks")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Patterns")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Patterns are registered using PHP."),Object(o.b)("li",{parentName:"ul"},"Patterns appear in the editor inside the special tab for patterns.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"We will soon provide WP-CLI command to automaticity create block patterns, boilerplate class, for you to use.")))}b.isMDXComponent=!0},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return r?a.a.createElement(f,s({ref:t},l,{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);