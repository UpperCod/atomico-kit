import{C as e,O as t,p as o,x as s,T as r}from"./chunks/61e0f1f4.js";export{d as render}from"./chunks/61e0f1f4.js";let l={};const n=({src:s})=>{let[n,a]=r(0);return function(...o){let s=e();t(()=>{let{current:e}=s;e.shadowRoot&&e.shadowRoot.adoptedStyleSheets&&(e.shadowRoot.adoptedStyleSheets=o.map(e=>{if("string"==typeof e&&!l[e]){let t=new CSSStyleSheet;t.replace(e),l[e]=t}return l[e]||e}))},o)}(":host{color:red}",`:host{background:rgba(0,0,0,.${n})}`),o("host",{shadowDom:!0},o("h1",null,"Is the text red?"),o("button",{onclick:()=>a(n+1>10?0:n+1)},"update : ",n))};n.props={src:String},s("use-stylesheet-example-1",n);var a=[{label:"Example useStylesheet",render:()=>o("host",null,o("use-stylesheet-example-1",null))}];export default a;
//# sourceMappingURL=use-stylesheet.showcase.js.map
