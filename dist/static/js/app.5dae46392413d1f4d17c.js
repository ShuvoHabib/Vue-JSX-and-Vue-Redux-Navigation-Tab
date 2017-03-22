webpackJsonp([2,0],[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(4),i=a(39),u=n(i),l=a(8),c=n(l),s=a(18),o=n(s);u.default.use(r.reduxStorePlugin),new u.default({store:o.default,render:function(e){return e(c.default)}}).$mount("#app")},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CHANGE_TAB="CHANGE_TAB"},,,,,,function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(16),i=n(r),u=a(12),l=n(u);a(19),t.default={name:"app",render:function(e){return e("div",{attrs:{id:"app"}},[e("hr",null,[]),"Normal Vue Tab",e("hr",null,[]),e(i.default,null,[]),e("hr",null,[]),"Vue with Redux Tab",e("hr",null,[]),e(l.default,null,[])])}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"Tab",props:{changeTab:{type:Function,required:!0},isActive:{type:Boolean,required:!0},tab:{type:Object,required:!0}},methods:{handleClick:function(){this.changeTab(this.tab.name)}},render:function(e){return e("li",{ref:"myTab",on:{click:this.handleClick},class:this.isActive?"active":null},[e("a",{attrs:{href:"#"}},[this.tab.name])])}};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"TabContent",props:{activeTab:{type:String,required:!0},tabData:{type:Array,required:!0}},render:function(e){return e("div",{class:"tab-content"},[this.activeTab===this.tabData[0].name?e("h4",{class:"col-4"},["Hello1"]):null,this.activeTab===this.tabData[1].name?e("h4",{class:"col-4"},["Hello2"]):null,this.activeTab===this.tabData[2].name?e("h4",{class:"col-4"},["Hello3"]):null,this.activeTab===this.tabData[3].name?e("h4",{class:"col-4"},["Hello4"]):null,this.activeTab===this.tabData[4].name?e("h4",{class:"col-4"},["Hello5"]):null,this.activeTab===this.tabData[5].name?e("h4",{class:"col-4"},["Hello6"]):null])}};t.default=a},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(9),i=n(r),u={name:"Tabs",props:{activeTab:{type:String,required:!0},changeTab:{type:Function,required:!0},tabData:{type:Array,required:!0}},data:function(){return{page:0}},computed:{pages:function(){return this.tabData}},methods:{},render:function(e){var t=this;return e("div",{class:"box-header"},[e("ul",{class:"box-header-tab"},[this.pages.map(function(a){return e(i.default,{attrs:{tab:a,isActive:t.activeTab===a.name,changeTab:t.changeTab}},[])})])])}};t.default=u},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=a(4),u=a(2),l=r(u),c=a(10),s=n(c),o=a(11),b=n(o),d={name:"TabRedux",props:{activeTab:{type:String},changeTab:{type:Function}},data:function(){return{tabData:[{name:"Tab 1"},{name:"Tab 2"},{name:"Tab 3"},{name:"Tab 4"},{name:"Tab 5"},{name:"Tab 6"}]}},render:function(e){return e("div",null,[e(b.default,{attrs:{tabData:this.tabData,activeTab:this.activeTab,changeTab:this.changeTab}},[]),e(s.default,{attrs:{tabData:this.tabData,activeTab:this.activeTab}},[])])}},f=function(e){return{activeTab:e.activeTab}},h=function(e){return{changeTab:function(t){e({type:l.CHANGE_TAB,activeTab:t})}}};t.default=(0,i.connect)(f,h)(d)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"Tab",props:{changeTab:{type:Function,required:!0},isActive:{type:Boolean,required:!0},tab:{type:Object,required:!0}},methods:{handleClick:function(){this.changeTab(this.tab.name)}},render:function(e){return e("li",{ref:"myTab",on:{click:this.handleClick},class:this.isActive?"active":null},[e("a",{attrs:{href:"#"}},[this.tab.name])])}};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"TabContent",props:{activeTab:{type:String,required:!0},tabData:{type:Array,required:!0}},render:function(e){return e("div",{class:"tab-content"},[this.activeTab===this.tabData[0].name?e("h4",{class:"col-4"},["Hello1"]):null,this.activeTab===this.tabData[1].name?e("h4",{class:"col-4"},["Hello2"]):null,this.activeTab===this.tabData[2].name?e("h4",{class:"col-4"},["Hello3"]):null,this.activeTab===this.tabData[3].name?e("h4",{class:"col-4"},["Hello4"]):null,this.activeTab===this.tabData[4].name?e("h4",{class:"col-4"},["Hello5"]):null,this.activeTab===this.tabData[5].name?e("h4",{class:"col-4"},["Hello6"]):null])}};t.default=a},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(13),i=n(r),u={name:"Tabs",props:{activeTab:{type:String,required:!0},changeTab:{type:Function,required:!0},tabData:{type:Array,required:!0}},data:function(){return{page:0}},computed:{pages:function(){return this.tabData}},methods:{},render:function(e){var t=this;return e("div",{class:"box-header"},[e("ul",{class:"box-header-tab"},[this.pages.map(function(a){return e(i.default,{attrs:{tab:a,isActive:t.activeTab===a.name,changeTab:t.changeTab}},[])})])])}};t.default=u},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(14),i=n(r),u=a(15),l=n(u),c={name:"TabIndex",data:function(){return{tabData:[{name:"Tab 1"},{name:"Tab 2"},{name:"Tab 3"},{name:"Tab 4"},{name:"Tab 5"},{name:"Tab 6"}],activeTab:"Tab 1"}},methods:{handleClick:function(e){this.activeTab=e}},render:function(e){return e("div",null,[e(l.default,{attrs:{tabData:this.tabData,activeTab:this.activeTab,changeTab:this.handleClick}},[]),e(i.default,{attrs:{tabData:this.tabData,activeTab:this.activeTab}},[])])}};t.default=c},function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){switch(t.type){case i.CHANGE_TAB:return console.log("Working"),{activeTab:t.activeTab};default:return e}};var r=a(2),i=n(r)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(35),i=a(17),u=n(i),l={activeTab:"Tab 6"};t.default=(0,r.createStore)(u.default,l)},function(e,t){}]);
//# sourceMappingURL=app.5dae46392413d1f4d17c.js.map