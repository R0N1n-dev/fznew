(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30a6a434"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("fe6c"),a=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"5bcb":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"home-footer",color:"grey darken-4",dark:"","min-height":"72"}},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("div",{staticClass:"d-flex flex-wrap justify-md-start justify-center justify-md-none"},[t._l(t.social,(function(e,o){return[i("a",{key:e,staticClass:"white--text pa-1 pa-md-0",attrs:{href:"#"},domProps:{textContent:t._s(e)}}),o<t.social.length-1?i("v-responsive",{key:"divider-"+e,staticClass:"mx-4 shrink hidden-sm-and-down",attrs:{"max-height":"24"}},[i("v-divider",{attrs:{vertical:""}})],1):t._e()]}))],2)]),i("v-col",{staticClass:"text-center text-md-right",attrs:{cols:"12",md:"6"}},[t._v(" Copyright © 2020 Vuetify, LLC ")])],1)],1)],1)},a=[],n={name:"HomeFooter",data:function(){return{social:["Facebook","Twitter","Instagram","Linkedin"]}}},s=n,r=(i("99c0"),i("0c7c")),c=i("6544"),p=i.n(c),u=i("62ad"),l=i("a523"),d=i("ce7e"),h=(i("a9e3"),i("c7cd"),i("5530")),f=(i("b5b6"),i("3a66")),v=i("8dd9"),m=i("d10f"),b=i("58df"),y=i("80d2"),g=Object(b["a"])(v["a"],Object(f["a"])("footer",["height","inset"]),m["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(h["a"])({},v["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(h["a"])({},v["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(y["f"])(t),left:Object(y["f"])(this.computedLeft),right:Object(y["f"])(this.computedRight),bottom:Object(y["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),w=i("6b53"),x=i("0fd9"),j=Object(r["a"])(s,o,a,!1,null,null,null);e["default"]=j.exports;p()(j,{VCol:u["a"],VContainer:l["a"],VDivider:d["a"],VFooter:g,VResponsive:w["a"],VRow:x["a"]})},"6ef5":function(t,e,i){},"99c0":function(t,e,i){"use strict";var o=i("6ef5"),a=i.n(o);a.a},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-30a6a434.bd242dfe.js.map