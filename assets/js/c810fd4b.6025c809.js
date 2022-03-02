"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[308],{6276:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>p,toc:()=>s,default:()=>u});var n=t(7896),a=t(1461),o=(t(2784),t(876)),i=["components"],c={sidebar_position:4},d="createDOMRenderer",p={unversionedId:"react/api/create-dom-renderer",id:"react/api/create-dom-renderer",title:"createDOMRenderer",description:"createDOMRenderer is paired with RendererProvider component and is useful for child window rendering and SSR scenarios. This is the default renderer for web, and will make sure that styles are injected to a document.",source:"@site/docs/react/api/create-dom-renderer.md",sourceDirName:"react/api",slug:"/react/api/create-dom-renderer",permalink:"/griffel/react/api/create-dom-renderer",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/api/create-dom-renderer.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"reactSidebar",previous:{title:"makeStaticStyles",permalink:"/griffel/react/api/make-static-styles"},next:{title:"Atomic CSS",permalink:"/griffel/react/guides/atomic-css"}},s=[],l={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"createdomrenderer"},"createDOMRenderer"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createDOMRenderer")," is paired with ",(0,o.kt)("inlineCode",{parentName:"p"},"RendererProvider")," component and is useful for ",(0,o.kt)("a",{parentName:"p",href:"/react/guides/child-window-rendering"},"child window rendering")," and ",(0,o.kt)("a",{parentName:"p",href:"/react/guides/ssr-usage"},"SSR")," scenarios. This is the default renderer for web, and will make sure that styles are injected to a document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createDOMRenderer, RendererProvider } from '@griffel/react';\n\nfunction App(props) {\n  const { targetDocument } = props;\n  const renderer = React.useMemo(() => createDOMRenderer(targetDocument), [targetDocument]);\n\n  return (\n    <RendererProvider renderer={renderer} targetDocument={targetDocument}>\n      {/* Children components */}\n      {/* ... */}\n    </RendererProvider>\n  );\n}\n")))}u.isMDXComponent=!0},876:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(d,".").concat(f)]||u[f]||l[f]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);