(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1232:function(t,e,r){"use strict";var a=r(965);r.n(a).a},1396:function(t,e,r){"use strict";r.r(e);var a=r(917),n=r(905),l=r(909),s=r.n(l),o={components:{TinyHeader:a.a,HeaderLayout:n.a},props:{currentData:{type:Object,required:!0},currentTemplate:{type:String,required:!0},currentUser:{type:Object,default:null}},meta(){return{title:this.title}},computed:{title(){return this.currentData.title},logoUrl:()=>s.a,isTinyHeader(){return Boolean(this.currentData.shortHeader)},pageName(){return this.currentData.pageName}}},u=(r(1232),r(7)),i=Object(u.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isTinyHeader?r("tiny-header",t._g({attrs:{"current-user":t.currentUser}},t.$listeners),[r("img",{attrs:{slot:"left",src:t.logoUrl},slot:"left"})]):r("header-layout",t._g(t._b({attrs:{"current-template":null,"page-name":t.pageName,layout:"narrow"}},"header-layout",t.$props,!1),t.$listeners),[r("template",{slot:"title"},[t._v(t._s(t.title))])],2)},[],!1,null,"f1a16d7e",null);e.default=i.exports},905:function(t,e,r){"use strict";var a=r(8),n=r(138),l={components:{TheHeaderLayout:a.H,UserNav:n.a},props:{layout:{type:[String,Object],default:"normal"},currentUser:{type:Object,default:null},currentTemplate:{type:String,default:null},pageName:{type:String,default:null}}},s=r(7),o=Object(s.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("the-header-layout",t._g(t._b({},"the-header-layout",t.$props,!1),t.$listeners),[r("user-nav",{attrs:{slot:"user-nav",user:t.currentUser},slot:"user-nav"}),t._v(" "),t._t("title",null,{slot:"title"}),t._v(" "),t._t("stat",null,{slot:"stat"}),t._v(" "),t._t("op",null,{slot:"op"})],2)},[],!1,null,null,null);e.a=o.exports},906:function(t,e,r){},909:function(t,e,r){t.exports=r.p+"logo.png?35e6d0796eab39c4bf304d03e6d332c0"},915:function(t,e,r){"use strict";var a=r(906);r.n(a).a},917:function(t,e,r){"use strict";var a=r(8),n=r(138),l={components:{LLink:a.n,UserNav:n.a},props:{currentUser:{type:Object,default:null}},mounted(){this.$emit("set-layout","tiny")}},s=(r(915),r(7)),o=Object(s.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"left"},[t._t("left")],2),t._v(" "),r("div",{staticClass:"link-container",style:{fontSize:t.$root.realRoot.isMobileMode?".875em":void 0}},[r("l-link",{staticClass:"header-link",attrs:{to:"//class.luogu.com.cn",blank:"","raw-link":"","color-scheme":"none"}},[r("span",{staticStyle:{color:"#262626"}},[t._v("洛谷网校")])]),t._v(" "),r("l-link",{staticClass:"header-link",attrs:{to:"//ti.luogu.com.cn",blank:"","raw-link":"","color-scheme":"none"}},[r("span",{staticStyle:{color:"#262626"}},[t._v("洛谷有题")])]),t._v(" "),r("span",{staticClass:"helper"})],1),t._v(" "),r("user-nav",{staticClass:"user-nav",attrs:{user:t.currentUser}})],1)},[],!1,null,"a4d8eeae",null);e.a=o.exports},965:function(t,e,r){}}]);