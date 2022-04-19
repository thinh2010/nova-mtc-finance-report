!function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t,e,n,s,o,a){var r,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,i=t.default);var c,l="function"==typeof i?i.options:i;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):s&&(c=s),c){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:i,options:l}}},function(t,e,n){n(2),t.exports=n(14)},function(t,e,n){Nova.booting(function(t,e,s){t.component("mtc-finance-report",n(3))})},function(t,e,n){var s=n(0)(n(4),n(13),!1,null,null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),o=n.n(s);e.default={props:["resourceName","resourceId","panel"],data:function(){return{items:[],statuses:[]}},computed:{totalWordCount:function(){return this.items.reduce(function(t,e){return t+e.word_count},0)},totalBonus:function(){return this.items.reduce(function(t,e){return t+e.bonus},0)},totalFine:function(){return this.items.reduce(function(t,e){return t+e.fine},0)},totalLastMonthCost:function(){return this.items.reduce(function(t,e){return t+e.last_month_cost},0)},totalCost:function(){return this.items.reduce(function(t,e){return t+e.cost},0)},totalFinalCost:function(){return this.items.reduce(function(t,e){return"hold"===e.status||"next-month"===e.status?t+0:t+(e.cost+e.bonus+e.last_month_cost-e.fine)},0)}},methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatMoney:function(t){return parseFloat(t).toLocaleString("vi-VN",{style:"currency",currency:"VND"})}},components:{ItemRow:o.a},mounted:function(){var t=this;Nova.request().get("/nova-vendor/mtc-finance-report/reports/"+this.resourceId+"/items").then(function(e){t.items=e.data}).catch(function(t){Nova.error(t)}),Nova.request().get("/nova-vendor/mtc-finance-report/report-statuses").then(function(e){t.statuses=e.data}).catch(function(t){Nova.error(t)})}}},function(t,e,n){var s=n(0)(n(11),n(12),!1,function(t){n(6)},null,null);t.exports=s.exports},function(t,e,n){var s=n(7);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(9)("37c4db9e",s,!0,{})},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var o=(r=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),a=s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}var r;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(s[a]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(10),a={},r=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var e=0;e<t.length;e++){var n=t[e],s=a[n.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(h(n.parts[o]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(h(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:r}}}}function m(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function h(t){var e,n,s=document.querySelector("style["+d+'~="'+t.id+'"]');if(s){if(c)return l;s.parentNode.removeChild(s)}if(p){var o=u++;s=i||(i=m()),e=x.bind(null,s,o,!1),n=x.bind(null,s,o,!0)}else s=m(),e=function(t,e){var n=e.css,s=e.media,o=e.sourceMap;s&&t.setAttribute("media",s);f.ssrId&&t.setAttribute(d,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,s),n=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else n()}}t.exports=function(t,e,n,s){c=n,f=s||{};var r=o(t,e);return v(r),function(e){for(var n=[],s=0;s<r.length;s++){var i=r[s];(u=a[i.id]).refs--,n.push(u)}e?v(r=o(t,e)):r=[];for(s=0;s<n.length;s++){var u;if(0===(u=n[s]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}};var _,C=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function x(t,e,n,s){var o=n?"":s.css;if(t.styleSheet)t.styleSheet.cssText=C(e,o);else{var a=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}},function(t,e){t.exports=function(t,e){for(var n=[],s={},o=0;o<e.length;o++){var a=e[o],r=a[0],i={id:t+":"+o,css:a[1],media:a[2],sourceMap:a[3]};s[r]?s[r].parts.push(i):n.push(s[r]={id:r,parts:[i]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["item","statuses","canEdit"],data:function(){return{bonus:this.item.bonus,fine:this.item.fine,lastMonthCost:this.item.last_month_cost,cost:this.item.cost,finalCost:this.item.final_cost,status:this.item.status,note:this.item.note}},watch:{bonus:function(t){this.updateBonus(t)},fine:function(t){this.updateFine(t)},lastMonthCost:function(t){this.updateLastMonthCost(t)}},computed:{isEditable:function(){return this.canEdit}},methods:{formatMoney:function(t){return parseFloat(t).toLocaleString("vi-VN",{style:"currency",currency:"VND"})},numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},updateBonus:function(t){var e=this;Nova.request().post("/nova-vendor/mtc-finance-report/report-items/"+this.item.id+"/update-bonus",{bonus:t}).then(function(t){e.finalCost=e.calFinalCost()}).catch(function(t){Nova.error(t)})},updateFine:function(t){var e=this;Nova.request().post("/nova-vendor/mtc-finance-report/report-items/"+this.item.id+"/update-fine",{fine:t}).then(function(t){e.finalCost=e.calFinalCost()}).catch(function(t){Nova.error(t)})},updateLastMonthCost:function(t){var e=this;Nova.request().post("/nova-vendor/mtc-finance-report/report-items/"+this.item.id+"/update-last-month-cost",{last_month_cost:t}).then(function(t){e.finalCost=e.calFinalCost()}).catch(function(t){Nova.error(t)})},updateStatus:function(t){var e=this;Nova.request().post("/nova-vendor/mtc-finance-report/report-items/"+this.item.id+"/update-status",{status:t.target.value}).then(function(t){e.status=t.data.status,Nova.success("Change status to "+e.status+" successfully!")}).catch(function(t){Nova.error(t)})},updateNote:function(t){var e=this;Nova.request().post("/nova-vendor/mtc-finance-report/report-items/"+this.item.id+"/update-note",{note:t.target.value}).then(function(t){e.note=t.data.note,Nova.success("Update note successfully!")}).catch(function(t){Nova.error(t)})},calFinalCost:function(){return parseInt(this.cost)+parseInt(this.lastMonthCost)+parseInt(this.bonus)-parseInt(this.fine)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("div",{staticClass:"text-left text-left"},[n("router-link",{staticClass:"no-underline dim text-primary font-bold",attrs:{to:{name:"detail",params:{resourceName:"users",resourceId:t.item.writer_id}}}},[n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.item.writer_name))])])],1)]),t._v(" "),n("td",[n("div",{staticClass:"text-left text-left"},[n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.numberWithCommas(t.item.word_count)))])])]),t._v(" "),n("td",[n("div",{staticClass:"text-left text-left"},[t.isEditable?n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.bonus,expression:"bonus",modifiers:{lazy:!0}}],staticClass:"w-full form-control form-input form-input-bordered",attrs:{type:"text",placeholder:"Bonus"},domProps:{value:t.bonus},on:{change:function(e){t.bonus=e.target.value}}}):n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.formatMoney(t.item.bonus)))])])]),t._v(" "),n("td",[n("div",{staticClass:"text-left text-left"},[t.isEditable?n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.fine,expression:"fine",modifiers:{lazy:!0}}],staticClass:"w-full form-control form-input form-input-bordered",attrs:{type:"text",placeholder:"Fine"},domProps:{value:t.fine},on:{change:function(e){t.fine=e.target.value}}}):n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.formatMoney(t.item.fine)))])])]),t._v(" "),n("td",[n("div",{staticClass:"text-left text-left"},[t.isEditable?n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.lastMonthCost,expression:"lastMonthCost",modifiers:{lazy:!0}}],staticClass:"w-full form-control form-input form-input-bordered",attrs:{type:"text",placeholder:"Last Month Cost"},domProps:{value:t.lastMonthCost},on:{change:function(e){t.lastMonthCost=e.target.value}}}):n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.formatMoney(t.item.last_month_cost)))])])]),t._v(" "),n("td",[n("div",{staticClass:"text-left text-left"},[n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.formatMoney(t.cost)))])])]),t._v(" "),n("td",[n("div",{staticClass:"text-left text-left"},[n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.formatMoney(t.finalCost)))])])]),t._v(" "),n("td",[n("div",{staticClass:"text-left text-left"},[t.isEditable?n("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control form-select w-full",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status=e.target.multiple?n:n[0]},t.updateStatus]}},[n("option",{attrs:{value:"",selected:"selected",disabled:"disabled"}},[t._v("—")]),t._v(" "),t._l(t.statuses,function(e,s){return n("option",{key:s,domProps:{value:s}},[t._v("\n                    "+t._s(e)+"\n                ")])})],2):n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.item.status.toUpperCase()))])])]),t._v(" "),n("td",[n("div",{staticClass:"text-left text-left"},[t.isEditable?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"w-full form-control form-input form-input-bordered py-3 h-auto",attrs:{id:"description",rows:"3",placeholder:"Note"},domProps:{value:t.note},on:{change:t.updateNote,input:function(e){e.target.composing||(t.note=e.target.value)}}}):n("span",{staticClass:"whitespace-no-wrap"},[t._v(t._s(t.item.note))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{staticClass:"card"},[n("div",{staticClass:"relative"},[n("div",{staticClass:"overflow-hidden overflow-x-auto relative"},[n("table",{staticClass:"table w-full table-default",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[t._m(0),t._v(" "),n("tbody",t._l(t.items,function(e){return n("item-row",{key:e.id,attrs:{item:e,statuses:t.statuses,canEdit:t.panel.fields[0].canEdit}})}),1),t._v(" "),n("tfoot",[n("tr",[n("th",{staticClass:"text-left"}),t._v(" "),n("th",{staticClass:"text-left"},[t._v(t._s(t.numberWithCommas(t.totalWordCount)))]),t._v(" "),n("th",{staticClass:"text-left"},[t._v(t._s(t.formatMoney(t.totalBonus)))]),t._v(" "),n("th",{staticClass:"text-left"},[t._v(t._s(t.formatMoney(t.totalFine)))]),t._v(" "),n("th",{staticClass:"text-left"},[t._v(t._s(t.formatMoney(t.totalLastMonthCost)))]),t._v(" "),n("th",{staticClass:"text-left"},[t._v(t._s(t.formatMoney(t.totalCost)))]),t._v(" "),n("th",{staticClass:"text-left"},[t._v(t._s(t.formatMoney(t.totalFinalCost)))]),t._v(" "),n("th",{staticClass:"text-left"}),t._v(" "),n("th",{staticClass:"text-left"})])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Writer")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Word Count")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Bonus")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Fine")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Last Month Cost")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Cost")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Final Cost")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Status")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Note")])])])}]}},function(t,e){}]);