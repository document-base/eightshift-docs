(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(1),i=n(9),r=(n(0),n(250)),a={id:"block-structure",title:"Block Structure",sidebar_label:"Block Structure"},l={id:"basics/block-structure",title:"Block Structure",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/block-structure.md",permalink:"/eightshift-docs/docs/basics/block-structure",sidebar_label:"Block Structure",sidebar:"docs",previous:{title:"Global Manifest",permalink:"/eightshift-docs/docs/basics/blocks-global-manifest"},next:{title:"Component Structure",permalink:"/eightshift-docs/docs/basics/blocks-component-structure"}},s=[{value:"assets",id:"assets",children:[]},{value:"components",id:"components",children:[]},{value:"docs",id:"docs",children:[]},{value:"heading-block.js",id:"heading-blockjs",children:[]},{value:"heading.php",id:"headingphp",children:[]},{value:"heading-editor.scss",id:"heading-editorscss",children:[]},{value:"heading-style.scss",id:"heading-stylescss",children:[]},{value:"heading-hooks.js",id:"heading-hooksjs",children:[]},{value:"heading-transforms.js",id:"heading-transformsjs",children:[]},{value:"manifest.json",id:"manifestjson",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(r.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(r.b)("p",null,"Your custom blocks are placed in the ",Object(r.b)("inlineCode",{parentName:"p"},"src/Blocks/custom")," folder."),Object(r.b)("p",null,"For example, let's take the heading block (just replace ",Object(r.b)("inlineCode",{parentName:"p"},"heading")," with your block name)."),Object(r.b)("p",null,"We suggest you always use the full name and never abbreviate the block name. If your block has multiple words, you should separate them by a dash, for example, ",Object(r.b)("inlineCode",{parentName:"p"},"featured-post-block.js"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Block structure should look like this:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"heading",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"assets",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"index.js"))),Object(r.b)("li",{parentName:"ul"},"components",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"heading-editor.js"),Object(r.b)("li",{parentName:"ul"},"heading-options.js"),Object(r.b)("li",{parentName:"ul"},"heading-toolbar.js"))),Object(r.b)("li",{parentName:"ul"},"docs",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"story.js"),Object(r.b)("li",{parentName:"ul"},"readme.mdx"))),Object(r.b)("li",{parentName:"ul"},"heading-block.js"),Object(r.b)("li",{parentName:"ul"},"heading.php"),Object(r.b)("li",{parentName:"ul"},"heading-editor.scss"),Object(r.b)("li",{parentName:"ul"},"heading-style.scss"),Object(r.b)("li",{parentName:"ul"},"heading-hooks.js"),Object(r.b)("li",{parentName:"ul"},"heading-transforms.js"),Object(r.b)("li",{parentName:"ul"},"manifest.json")))),Object(r.b)("h3",{id:"assets"},"assets"),Object(r.b)("p",null,"In this folder, you'll define all the custom JavaScript functionality for your block that will only be used on the front end of the application. You must provide the ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," file in this folder, and the rest is up to you. We recommend using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"}),"JavaScript dynamic imports")," for all your frontend scripts. This ensures that the JavaScript is only loaded in the application when it is used and not before. By using dynamic import, you optimize your application and make it load faster."),Object(r.b)("h3",{id:"components"},"components"),Object(r.b)("p",null,"Components folder holds three files ",Object(r.b)("inlineCode",{parentName:"p"},"heading-options.js"),", ",Object(r.b)("inlineCode",{parentName:"p"},"heading-editor.js"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"heading-toolbars.js"),". Each of these files represents a part of the Block Editor block that is used in the editor. We have separated options, editor, and toolbar into separate components for readability and reusing components in different projects."),Object(r.b)("h3",{id:"docs"},"docs"),Object(r.b)("p",null,"Contains everything that a block needs to be run inside the Storybook. This part is optional. However, it will speed up your development time and provide you with the much needed documentation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"story.js")," - Storybook entrypoint for your block. All blocks have the exact same story."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"readme.mdx")," - readme document that describes your block and provides the documentation.")),Object(r.b)("h3",{id:"heading-blockjs"},"heading-block.js"),Object(r.b)("p",null,"This file represents the ",Object(r.b)("inlineCode",{parentName:"p"},"edit")," callback method used in WordPress ",Object(r.b)("inlineCode",{parentName:"p"},"registerBlockType")," method.\nWe are not using the ",Object(r.b)("inlineCode",{parentName:"p"},"save")," callback method because we are creating dynamic blocks. The ",Object(r.b)("inlineCode",{parentName:"p"},"edit")," method describes how your block will be rendered in the editor once the block is used. In this file, you can use more advanced stuff like hooks and all the top-level block features."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"heading-options.js")," - must be wrapped with the ",Object(r.b)("inlineCode",{parentName:"li"},"InspectorControls")," component from the core. This will ensure that options are shown in the proper place in the Block Editor (sidebar)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"heading-toolbar.js")," - must be wrapped with the ",Object(r.b)("inlineCode",{parentName:"li"},"BlockControls")," component from the core. This will ensure that toolbar is shown in the proper place in the Block Editor (floating or fixed toolbar)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"heading-editor.js")," - must ",Object(r.b)("strong",{parentName:"li"},"not")," be wrapped with any top-level component. This will ensure that the editor component is showed in the proper place in the Block Editor (editor).")),Object(r.b)("h3",{id:"headingphp"},"heading.php"),Object(r.b)("p",null,"This file is the frontend representation of a block. In this file, you will have all the attributes that you defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," file."),Object(r.b)("p",null,"In the blocks PHP part, you always have these two properties (props) available:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"$attributes")," - This prop contains all the attributes you defined in the ",Object(r.b)("inlineCode",{parentName:"li"},"manifest.json")," and all the attributes saved in the database."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"$innerBlockContent")," - This prop contains all the inner block details when you set your block to contain inner blocks.")),Object(r.b)("h3",{id:"heading-editorscss"},"heading-editor.scss"),Object(r.b)("p",null,"Holds only the editor styling for the block. You should be using this file to override styles in the editor set by the component. In 90% of cases, you will not need to write any overrides here. But if you are using any column layout like a grid, flex, etc., you may need to add some corrections."),Object(r.b)("p",null,"Corrections in the grid layout are necessary because the Block Editor adds its additional HTML and we can't change it."),Object(r.b)("p",null,"Please reference in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"writing-styles"}),"writing styles")," chapter for more details."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This file is optional"),"."),Object(r.b)("h3",{id:"heading-stylescss"},"heading-style.scss"),Object(r.b)("p",null,"Holds all the frontend and editor styling for the component."),Object(r.b)("p",null,"Please reference in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"writing-styles"}),"writing styles")," chapter for more details."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This file is optional"),"."),Object(r.b)("h3",{id:"heading-hooksjs"},"heading-hooks.js"),Object(r.b)("p",null,"Here you can provide any custom Block Editor hook you need. For documentation please refer to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/developers/filters/block-filters/"}),"this link"),". This file is going to be merged in the ",Object(r.b)("inlineCode",{parentName:"p"},"registerBlockType")," method."),Object(r.b)("h3",{id:"heading-transformsjs"},"heading-transforms.js"),Object(r.b)("p",null,"Here you can provide any custom block transformation you need. For documentation please referee to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-transforms/"}),"this link"),". This file is going to be merged in the ",Object(r.b)("inlineCode",{parentName:"p"},"registerBlockType")," method."),Object(r.b)("h3",{id:"manifestjson"},"manifest.json"),Object(r.b)("p",null,"This file contains all the configuration required for a block to work. It's used in WordPress ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/"}),Object(r.b)("inlineCode",{parentName:"a"},"registerBlockType"))," method to register a block."),Object(r.b)("p",null,"For more details, check the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"block-manifest"}),"block manifest")," chapter"))}b.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=o,h=d["".concat(a,".").concat(u)]||d[u]||p[u]||r;return n?i.a.createElement(h,l({ref:t},c,{components:n})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);