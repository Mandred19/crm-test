(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8e71"],{3152:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("pre-loader"):e.getRecord?r("div",[r("div",{staticClass:"breadcrumb-wrap"},[r("router-link",{staticClass:"breadcrumb",attrs:{to:"/history"}},[e._v(" "+e._s(e._f("locale")("history_bread_crumbs"))+" ")]),r("a",{staticClass:"breadcrumb"},[e._v(" "+e._s(e.modifiedRecord.typeText)+" ")])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col s12 m6"},[r("div",{staticClass:"card",class:[e.modifiedRecord.typeClass]},[r("div",{staticClass:"card-content white-text"},[r("p",[e._v(e._s(e._f("locale")("input_description"))+": "+e._s(e.modifiedRecord.description))]),r("p",[e._v(e._s(e._f("locale")("amount"))+": "+e._s(e._f("course")(e.modifiedRecord.amount,"RUB")))]),r("p",[e._v(e._s(e._f("locale")("category"))+": "+e._s(e.modifiedRecord.categoryName))]),r("small",[e._v(e._s(e._f("date")(e.modifiedRecord.date,"datetime")))])])])])])]):r("p",{staticClass:"center"},[e._v(" "+e._s(e._f("locale")("record"))+" id = "),r("strong",[e._v(e._s(e.$route.params.id))]),e._v(" "+e._s(e._f("locale")("not_found"))+". "),r("router-link",{attrs:{to:"/history"}},[e._v(" "+e._s(e._f("locale")("history_bread_crumbs"))+" ")])],1)],1)},a=[],c=(r("a4d3"),r("4de4"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("ade3")),s=(r("96cf"),r("2f62")),i=r("df2c");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){Object(c["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"AppDetailRecord",mounted:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$store.dispatch("loadRecordById",this.$route.params.id));case 2:return e.next=4,regeneratorRuntime.awrap(this.$store.dispatch("loadCategoryById",this.getRecord.categoryId));case 4:this.loading=!1;case 5:case"end":return e.stop()}}),null,this)},computed:d({},Object(s["b"])({getCategory:"getCategory",getRecord:"getRecord"}),{modifiedRecord:function(){return this.getRecord&&this.getCategory?d({},this.getRecord,{categoryName:this.getCategory.name,typeClass:"income"===this.getRecord.type?"teal":"red",typeText:"income"===this.getRecord.type?Object(i["a"])("income"):Object(i["a"])("expense")}):null}}),data:function(){return{loading:!0}},metaInfo:function(){return{title:this.$title("record_detail_title")}}},u=l,p=r("2877"),f=Object(p["a"])(u,o,a,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0b8e71.2ca9014d.js.map