(function(e){function t(t){for(var r,o,c=t[0],l=t[1],i=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("Notification")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vk-notification",{attrs:{messages:e.messages,position:"top-right"},on:{"update:messages":function(t){e.messages=t}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.title,a=t.body;return n("div",{},[n("strong",{staticClass:"uk-text-small uk-text-normal"},[e._v(e._s(r))]),n("p",{staticClass:"uk-text-meta"},[e._v(e._s(a))])])}}])})},c=[],l=(n("d3b7"),n("96cf"),{data:function(){return{token:null,messages:[]}},created:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return this.$firebase.setVapidKey("BPD5dvUuG-e5SEeBU6oT67sG2i5PftQdgjDyrlDdEmlDjb1trrZlODHZ0KLEE6X1yHnDKkQEGFMJBgVAaVBXJd0"),this.$firebase.requestPushPermission(),t.next=4,regeneratorRuntime.awrap(this.$firebase.getToken());case 4:this.token=t.sent,this.$firebase.messaging.onMessage((function(t){e.messages.push(t.notification)}));case 6:case"end":return t.stop()}}),null,this)}}),i=l,u=n("2877"),p=Object(u["a"])(i,o,c,!1,null,null,null),f=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vk-sticky",{attrs:{top:0}},[n("vk-navbar",{staticClass:"tm-navbar-container"},[n("vk-navbar-nav",e._l(e.navbarItems,(function(t,r){return n("router-link",{key:r,attrs:{to:t.to},scopedSlots:e._u([{key:"default",fn:function(e){var r=e.href,a=e.isActive,s=e.navigate;return[n("vk-navbar-nav-item",{attrs:{title:t.name,href:r,active:a},on:{click:s}})]}}],null,!0)})})),1),n("vk-navbar-nav",{attrs:{slot:"right"},slot:"right"},[n("vk-navbar-nav-item",{attrs:{href:e.dataSource,title:"資料來源",target:"_blank"}}),n("vk-navbar-nav-item",{attrs:{icon:"github",href:"https://github.com/elct9620/world-flipper-crawler",title:"",target:"_blank"}})],1)],1)],1)},b=[],m={data:function(){return{navbarItems:[{name:"裝備",to:"/"}],dataSource:"https://docs.google.com/spreadsheets/d/1rpdOVhqE8NBQx23zUMq-KRWAU2LCwg6toPXj0xzqgD4"}}},v=m,h=(n("c19a"),Object(u["a"])(v,d,b,!1,null,"1779681e",null)),y=h.exports,g={name:"app",components:{Notification:f,Navbar:y}},O=g,k=Object(u["a"])(O,a,s,!1,null,null,null),j=k.exports,w=n("6d68"),_=n("5320"),x=(n("1941"),n("d4ec")),P=n("bee2"),D=n("c23d"),E=n.n(D),S=(n("8071"),null),T=function(){function e(t){Object(x["a"])(this,e),this.vapidKeySetuped=!1,this.app=E.a.initializeApp(t),this.messaging=this.app.messaging()}return Object(P["a"])(e,null,[{key:"install",value:function(t,n){S||(S=new e(n)),Object.defineProperty(t.prototype,"$firebase",{get:function(){return S}})}}]),Object(P["a"])(e,[{key:"setVapidKey",value:function(e){this.vapidKeySetuped||(this.messaging.usePublicVapidKey(e),this.vapidKeySetuped=!0)}},{key:"requestPushPermission",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.messaging.requestPermission());case 3:e.next=7;break;case 5:e.prev=5,e.t0=e["catch"](0);case 7:case"end":return e.stop()}}),null,this,[[0,5]])}},{key:"getToken",value:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(this.messaging.getToken());case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),null,this,[[0,7]])}}]),e}(),A=T,B={apiKey:"AIzaSyD0HLTEydfriCsHSekuPtERVVlEMguOkQE",authDomain:"world-flipper-crawler.firebaseapp.com",databaseURL:"https://world-flipper-crawler.firebaseio.com",projectId:"world-flipper-crawler",storageBucket:"world-flipper-crawler.appspot.com",messagingSenderId:"525398090536",appId:"1:525398090536:web:525767c0f786fcb1f1a61d",measurementId:"G-EQ87CRDR6Z"},$=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DataTable",{attrs:{items:e.weapons,columns:e.columns}})},R=[],K=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),M=n("2f62"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vk-table",{attrs:{data:e.sortedItems,"sorted-by":e.sortedBy,cellMiddle:""},on:{"update:sortedBy":function(t){e.sortedBy=t},"update:sorted-by":function(t){e.sortedBy=t}}},e._l(e.columns,(function(t){return n(t.sortable?"vk-table-column-sort":"vk-table-column",{key:t.name,tag:"component",attrs:{title:t.label,cell:t.name},scopedSlots:e._u([{key:"default",fn:function(r){var a=r.cell,s=r.selected,o=r.allSelected;return e._t("default",[n(t.type||"span",e._b({tag:"component",attrs:{column:t}},"component",{cell:a,selected:s,allSelected:o},!1),[e._v(" "+e._s(a)+" ")])])}}],null,!0)})})),1)},W=[],z=(n("a630"),n("4e82"),n("3ca3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{staticClass:"uk-preserve-width",attrs:{src:e.cell}})}),V=[],C={name:"DataTable.Icon",props:{column:Object,cell:String,selected:Boolean,allSelected:Boolean}},L=C,q=Object(u["a"])(L,z,V,!1,null,null,null),H=q.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.text))])},X=[],Q={name:"DataTable.LocalizedText",props:{column:Object,cell:Object,selected:Boolean,allSelected:Boolean},computed:{text:function(){return this.cell.zh||this.cell.ja}}},G=Q,J=Object(u["a"])(G,N,X,!1,null,null,null),Z=J.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.descriptions,(function(t,r){return n("div",{key:r},[e._v(" "+e._s(t)+" ")])})),0)},Y=[],ee={name:"DataTable.Description",props:{column:Object,cell:Array,selected:Boolean,allSelected:Boolean},computed:{descriptions:function(){return this.cell}}},te=ee,ne=Object(u["a"])(te,F,Y,!1,null,null,null),re=ne.exports,ae={name:"DataTable",data:function(){return{sortedBy:{id:"asc"}}},components:{Icon:H,LocalizedText:Z,Description:re},props:{items:Array,columns:Array},computed:{sortedItems:function(){var e=Object.keys(this.sortedBy)[0],t=Array.from(this.items).sort((function(t,n){return t[e]-n[e]}));return"desc"==this.sortedBy[e]&&t.reverse(),t}}},se=ae,oe=Object(u["a"])(se,U,W,!1,null,null,null),ce=oe.exports;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){Object(K["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue={name:"Weapons",data:function(){return{columns:[{name:"id",label:"ID",sortable:!0},{name:"icon",class:"uk-table-shrink",type:"Icon"},{name:"name",label:"名稱",type:"LocalizedText"},{name:"rank",label:"星級",sortable:!0},{name:"element",label:"屬性"},{name:"effects",label:"效果",type:"Description"},{name:"max_effects",label:"MAX 效果",type:"Description"},{name:"hp",label:"HP",sortable:!0},{name:"atk",label:"ATK",sortable:!0},{name:"max_hp",label:"MAX HP",sortable:!0},{name:"max_atk",label:"MAX ATK",sortable:!0},{name:"sources",label:"獲取途徑",type:"Description"}]}},components:{DataTable:ce},created:function(){this.reloadWeapons()},computed:Object(M["c"])({weapons:"getWeapons"}),methods:ie({},Object(M["b"])(["reloadWeapons"]))},pe=ue,fe=Object(u["a"])(pe,I,R,!1,null,null,null),de=fe.exports;r["a"].use($["a"]);var be=[{path:"/",component:de}],me=new $["a"]({routes:be}),ve=(n("d81d"),"WEAPON."),he={UPDATE:"".concat(ve,"UPDATE")},ye=function(){return{items:[]}},ge=Object(K["a"])({},he.UPDATE,(function(e,t){e.items=Array.from(t).map((function(e,t){return Object.assign(e,{id:t})}))})),Oe={reloadWeapons:function(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.commit,r.next=3,regeneratorRuntime.awrap(fetch("/api/weapons.json").then((function(e){return e.json()})));case 3:n=r.sent,t(he.UPDATE,n);case 5:case"end":return r.stop()}}))}},ke={getWeapons:function(e){return e.items}},je={state:ye,mutations:ge,actions:Oe,getters:ke};r["a"].use(M["a"]);var we=new M["a"].Store({modules:{Weapon:je}});r["a"].config.productionTip=!1,r["a"].use(w["a"]),r["a"].use(_["a"]),r["a"].use(A,B),new r["a"]({render:function(e){return e(j)},router:me,store:we}).$mount("#app")},c19a:function(e,t,n){"use strict";var r=n("c4b2"),a=n.n(r);a.a},c4b2:function(e,t,n){}});
//# sourceMappingURL=app.3c2fe8d3.js.map