(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{491:function(t,e,n){t.exports={}},543:function(t,e,n){"use strict";n(491)},644:function(t,e,n){"use strict";n.r(e);var c=n(1),menu=n(172),o=c.default.extend({name:"SpringSummerPage",layout:"past-collection",nuxtI18n:{paths:{es:"/colecciones-pasadas/spring-summer-23"}},data:function(){var t;return{collectionFolder:"past-collections",collection:"spring-summer-23",menu:null===(t=menu.a["past-collections"].children)||void 0===t?void 0:t[2]}},head:function(){var section="past-collections",t="spring-summer-23";return{title:this.$t("pages.".concat(section,".").concat(t,".title")),meta:[{hid:"description",name:"description",content:this.$t("pages.".concat(section,".").concat(t,".description"))},{hid:"og:description",name:"og:description",content:this.$t("pages.".concat(section,".").concat(t,".description"))},{hid:"og:title",name:"og:title",content:this.$t("pages.".concat(section,".").concat(t,".title"))}]}}}),l=(n(543),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-root page-machine-knitting page-collection-index"},[n("div",{staticClass:"intro"},[n("div",{staticClass:"section-name"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("menu."+t.collection+".name")))]),t._v(" "),n("div",{staticClass:"sub"},[t._v(t._s(t.$t("menu."+t.collection+".subName")))])]),t._v(" "),n("div",{staticClass:"content"},[n("p",{domProps:{innerHTML:t._s(t.$t("collections."+t.collection+".p1"))}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.$t("collections."+t.collection+".p2"))}})])]),t._v(" "),n("div",{staticClass:"collections flex"},t._l(t.menu.children,(function(line,e){return n("NuxtLink",{key:e,staticClass:"collection-line",style:"background-image: url('/assets/michell/images/general/"+line.img+"');",attrs:{to:t.localePath(t.$parsePath([{key:"past-collections"},{key:t.collection},line]))}},[n("div",{staticClass:"overlay"},[n("div",{staticClass:"bg"}),t._v(" "),n("div",{staticClass:"text"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("menu."+line.key+".name")))]),t._v(" "),t.$te(t.collectionFolder+"."+t.collection+"."+line.key+".slogan")?n("div",{staticClass:"text-sm"},[t._v("\n            "+t._s(t.$t(t.collectionFolder+"."+t.collection+"."+line.key+".slogan"))+"\n          ")]):t._e()])])])})),1)])}),[],!1,null,"8855d9e2",null);e.default=component.exports}}]);