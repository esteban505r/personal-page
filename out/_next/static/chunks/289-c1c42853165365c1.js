"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{8314:function(e,t,r){r.d(t,{ZP:function(){return o}});let s={_origin:"https://api.emailjs.com"},a=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class i{constructor(e){this.status=e.status,this.text=e.responseText}}let n=(e,t,r={})=>new Promise((a,n)=>{let l=new XMLHttpRequest;l.addEventListener("load",({target:e})=>{let t=new i(e);200===t.status||"OK"===t.text?a(t):n(t)}),l.addEventListener("error",({target:e})=>{n(new i(e))}),l.open("POST",s._origin+e,!0),Object.keys(r).forEach(e=>{l.setRequestHeader(e,r[e])}),l.send(t)}),l=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t};var o={init:(e,t="https://api.emailjs.com")=>{s._userID=e,s._origin=t},send:(e,t,r,i)=>{let l=i||s._userID;return a(l,e,t),n("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:l,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:(e,t,r,i)=>{let o=i||s._userID,c=l(r);a(o,e,t);let d=new FormData(c);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",o),n("/api/v1.0/email/send-form",d)}}},9594:function(e,t,r){var s=r(7437);t.Z=e=>{let{fixed:t=!1,extraCls:r=!1}=e;return(0,s.jsx)("div",{className:"iknow_tm_copyright ".concat(r||(t?"fixed":"hidden")),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"inner",children:[(0,s.jsx)("div",{className:"left",children:(0,s.jsxs)("p",{children:["Designed with love \xa9"," ",(0,s.jsx)("a",{href:"https://themeforest.net/user/codeefly",target:"_blank",children:"CodeeFly"})]})}),(0,s.jsx)("div",{className:"right",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:"Terms & Condition"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:"Privacy Policy"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:"Login"})})]})})]})})})}},1191:function(e,t,r){r.d(t,{AL:function(){return i},O_:function(){return a}});var s=r(7437);t.ZP=()=>(0,s.jsx)("div",{className:"social",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/facebook.svg",alt:""})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/twitter.svg",alt:""})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/youtube.svg",alt:""})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/instagram.svg",alt:""})})})]})});let a=()=>(0,s.jsx)("div",{className:"social",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/facebook-2.svg",alt:"image"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/twitter-2.svg",alt:"image"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/linkedin-2.svg",alt:"image"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/youtube-3.svg",alt:"image"})})})]})}),i=()=>(0,s.jsx)("div",{className:"social_list",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/facebook-2.svg",alt:""})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/twitter-2.svg",alt:""})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{className:"svg",src:"/img/svg/social/youtube-3.svg",alt:""})})})]})})},4312:function(e,t,r){var s=r(7437),a=r(1191);t.Z=e=>{let{topbarIcon:t=!0,darkLogo:r=!0}=e;return(0,s.jsx)("div",{className:"iknow_tm_topbar","data-position":"absolute",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"topbar_inner",children:[(0,s.jsx)("div",{className:"logo",children:(0,s.jsx)("a",{href:"#",children:r?(0,s.jsx)("img",{src:"/img/logo/dark.png",alt:"logo"}):(0,s.jsx)("img",{src:"/img/logo/light.png",alt:"logo"})})}),(0,s.jsxs)("div",{className:"right",children:[t&&(0,s.jsx)(a.ZP,{}),(0,s.jsx)("div",{className:"iknow_tm_button",children:(0,s.jsx)("a",{href:"img/cv/1.jpg",download:!0,children:"Download CV"})})]})]})})})}},8864:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let s=r(1024);r(2265);let a=s._(r(533));function i(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){let r=a.default,s={loading:e=>{let{error:t,isLoading:r,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e),Object.assign(s,t);let n=s.loader;return r({...s,loader:()=>null!=n?n().then(i):Promise.resolve(i(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3699:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return a},NoSSR:function(){return i}}),r(1024),r(2265);let s=r(7669);function a(){let e=Error(s.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=s.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},533:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let s=r(1024),a=s._(r(2265)),i=r(3699),n=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function r(e){let r=t.loading,s=a.default.createElement(r,{isLoading:!0,pastDelay:!0,error:null}),n=t.ssr?a.default.Fragment:i.NoSSR,l=t.lazy;return a.default.createElement(a.default.Suspense,{fallback:s},a.default.createElement(n,null,a.default.createElement(l,e)))}return t.lazy=a.default.lazy(t.loader),r.displayName="LoadableComponent",r}},622:function(e,t,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(2265),a=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var s,o={},c=null,d=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:n.current}}t.jsx=o,t.jsxs=o},7437:function(e,t,r){e.exports=r(622)},7178:function(e,t,r){r.d(t,{Ip:function(){return n},y3:function(){return l}});var s=r(2265),a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t,r,a,i,n,l,o,c=e.className,d=e.counterClockwise,u=e.dashRatio,h=e.pathRadius,f=e.strokeWidth,m=e.style;return(0,s.createElement)("path",{className:c,style:Object.assign({},m,(r=(t={pathRadius:h,dashRatio:u,counterClockwise:d}).counterClockwise,i=(1-t.dashRatio)*(a=2*Math.PI*t.pathRadius),{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(r?-i:i)+"px"})),d:"\n      M 50,50\n      m 0,-"+(l=(n={pathRadius:h,counterClockwise:d}).pathRadius)+"\n      a "+l+","+l+" "+(o=n.counterClockwise?1:0)+" 1 1 0,"+2*l+"\n      a "+l+","+l+" "+o+" 1 1 0,-"+2*l+"\n    ",strokeWidth:f,fillOpacity:0})}var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return!function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,s=e.maxValue;return(Math.min(Math.max(t,r),s)-r)/(s-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,n=e.counterClockwise,l=e.styles,o=e.strokeWidth,c=e.text,d=this.getPathRadius(),u=this.getPathRatio();return(0,s.createElement)("svg",{className:a.root+" "+r,style:l.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,s.createElement)("circle",{className:a.background,style:l.background,cx:50,cy:50,r:50}):null,(0,s.createElement)(i,{className:a.trail,counterClockwise:n,dashRatio:t,pathRadius:d,strokeWidth:o,style:l.trail}),(0,s.createElement)(i,{className:a.path,counterClockwise:n,dashRatio:u*t,pathRadius:d,strokeWidth:o,style:l.path}),c?(0,s.createElement)("text",{className:a.text,style:l.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(s.Component);function l(e){var t=e.rotation,r=e.strokeLinecap,s=e.textColor,a=e.textSize,i=e.pathColor,n=e.pathTransition,l=e.pathTransitionDuration,c=e.trailColor,d=e.backgroundColor,u=null==t?void 0:"rotate("+t+"turn)",h=null==t?void 0:"center center";return{root:{},path:o({stroke:i,strokeLinecap:r,transform:u,transformOrigin:h,transition:n,transitionDuration:null==l?void 0:l+"s"}),trail:o({stroke:c,strokeLinecap:r,transform:u,transformOrigin:h}),text:o({fill:s,fontSize:a}),background:o({fill:d})}}function o(e){return Object.keys(e).forEach(function(t){null==e[t]&&delete e[t]}),e}}}]);