(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{393:function(t,n,e){"use strict";var o=e(3),l=e(394);o({target:"String",proto:!0,forced:e(395)("link")},{link:function(t){return l(this,"a","href",t)}})},394:function(t,n,e){var o=e(6),l=e(44),r=e(21),c=/"/g,m=o("".replace);t.exports=function(t,n,e,o){var f=r(l(t)),d="<"+n;return""!==e&&(d+=" "+e+'="'+m(r(o),c,"&quot;")+'"'),d+">"+f+"</"+n+">"}},395:function(t,n,e){var o=e(5);t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},396:function(t,n,e){t.exports={}},406:function(t,n,e){"use strict";e(396)},407:function(t,n,e){"use strict";var o=e(52),l=(e(37),e(29),e(1)),r=e(107),c=e(173),m=l.default.extend({name:"MenuFloating",components:{NavButton:c.a},props:{items:{type:Array,default:function(){return[]}},section:{type:String,required:!0}},data:function(){return{showMenuInternal:!1}},computed:{position:function(){var t=this,n=this.items.map((function(n){return t.localePath(t.getRoute([n]))})).indexOf(this.$route.path);return n<0?1:n+1}},methods:{getRoute:function(t){return Object(r.a)([{key:this.section}].concat(Object(o.a)(t)))}}}),f=(e(406),e(9)),component=Object(f.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"menu-floating fixed py-2 lg:pt-4 lg:pb-0",class:["items-length-"+t.items.length,{expanded:t.showMenuInternal},t.section]},[e("div",{staticClass:"header-title"},[e("NavButton",{staticClass:"menu-mobile",model:{value:t.showMenuInternal,callback:function(n){t.showMenuInternal=n},expression:"showMenuInternal"}}),t._v(" "),e("div",{staticClass:"title font-bold pl-4 lg:pl-6 2xl:pl-14 lg:pb-10 lg:h-6 text-sm lg:text-sm 2xl:text-base whitespace-nowrap"},[["origins","creating-your-own-yarn","new-yarn-and-colour-innovation"].includes(t.section)?e("PortalTarget",{attrs:{name:"menu-floating-title"}}):[t._v(t._s(t.$t("menu."+t.section+".name")))]],2)],1),t._v(" "),e("div",{staticClass:"menu flex flex-col pt-6 2xl:gap-5"},[t._l(t.items,(function(n,o){return e("NuxtLink",{key:"prim"+o,staticClass:"gap-3 2xl:gap-5 py-2 2xl:py-3 flex items-center lg:pl-6 xl:pl-12 transition-all duration-500",attrs:{to:t.localePath(t.getRoute([n]))},nativeOn:{click:function(n){t.showMenuInternal=!1}}},[e("span",{staticClass:"position text-lg xl:text-xl font-semibold"},[t._v(t._s(o+1))]),t._v(" "),n.logo?e("img",{staticClass:"image",attrs:{src:n.logo,alt:""}}):e("span",{staticClass:"text flex flex-col"},[e("span",{staticClass:"name font-semibold text-sm 2xl:text-base"},[t._v(t._s(t.$t("menu."+n.key+".name")))]),t.$te("menu."+n.key+".subName")?e("span",{staticClass:"sub-name text-xs 2xl:text-sm"},[t._v(t._s(t.$t("menu."+n.key+".subName")))]):t._e()]),t._v(" "),e("span",{staticClass:"arrow-right transition-all duration-500"})])})),t._v(" "),e("div",{staticClass:"line"})],2),t._v(" "),e("Portal",{attrs:{to:"position-title"}},[t._v("\n    "+t._s(t.position)+"\n  ")])],1)}),[],!1,null,"0cdaf624",null);n.a=component.exports},506:function(t,n,e){t.exports={}},572:function(t,n,e){"use strict";e(506)},687:function(t,n,e){"use strict";e.r(n);e(19),e(7),e(393),e(36),e(16);var o=e(1),l=e(50),r=e(407),menu=e(172),c=o.default.extend({name:"NewYarnColourInnovationMainPage",components:{MenuFloating:r.a},data:function(){return{parent:"michell-labs",section:"new-yarn-and-colour-innovation"}},computed:{selectedMenu:function(){return Object(l.f)({key:""},[this.parent,"children",0],menu.a)},menu:function(){var t;return null===(t=this.selectedMenu.childrenInternal)||void 0===t?void 0:t.filter((function(t){return""!==t.link}))},showMenu:function(){var t="michell-labs-new-yarn-and-colour-innovation";return!["".concat(t,"___es"),"".concat(t,"___en")].includes(this.$route.name||"")}}}),m=(e(572),e(9)),component=Object(m.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"new-yarn-&-colour-innovation page-root page-newyarn"},[e("NuxtChild"),t._v(" "),e("MenuFloating",{class:[{show:t.showMenu}],attrs:{items:t.menu,section:t.section}}),t._v(" "),e("Portal",{attrs:{to:"menu-floating-title"}},[t._v("\n    "+t._s(t.$t("menu.michell-labs.name"))+" "),e("br"),t._v(" "),e("span",{staticClass:"font-sm font-normal"},[t._v(t._s(t.$t("menu.new-yarn-and-colour-innovation.name")))])])],1)}),[],!1,null,"5b1ad542",null);n.default=component.exports}}]);