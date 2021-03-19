(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2aaf674e"],{"1905d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("StatsTool",{attrs:{project:t.project,spider:t.spider},on:{"update:project":function(e){t.project=e},"update:spider":function(e){t.spider=e},"project-change":t.handleProjectChange,"spider-change":t.handleSpiderChange,success:t.handleSuccess}}),t._v(" "),n("div",{staticStyle:{height:"20px"}}),t._v(" "),n("StatsTable",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list},on:{"sort-change":t.handleSortChange}}),t._v(" "),n("mo-pagination",{attrs:{"current-page":t.page,"page-size":t.size,total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},change:t.getData}})],1)},s=[],a=(n("9382"),n("ed32")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("mo-table",t._g(t._b({},"mo-table",t.$attrs,!1),t.$listeners),[n("el-table-column",{attrs:{align:"center",label:"序号",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目名",align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.project||"-")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"\bSpider",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\n        "+t._s(e.row.spider)+"\n\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"收集数量",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.item_scraped_count+""}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"丢弃数量",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.item_dropped_count+""}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"错误日志",align:"center",width:"110px",prop:"log_error_count",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.log_error_count+""}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"持续时间",align:"right",width:"110px",prop:"duration",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.duration_str}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"开始时间",align:"center",width:"170px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\n        "+t._s(e.row.start_time)+"\n\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"结束时间",align:"center",width:"170px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\n        "+t._s(e.row.finish_time)+"\n\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"\b运行日志",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"logs-project-spider-job",params:{project:e.row.project,spider:e.row.spider,job:e.row.spider_job_id}},target:"_blank"}},[n("i",{staticClass:"el-icon-document"}),t._v(" 日志")])]}}])})],1)],1)},i=[],c={name:""},u=c,l=n("5d22"),p=Object(l["a"])(u,o,i,!1,null,"e50677b4",null),d=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ProjectSelect",{attrs:{size:"small",value:t._project,clearable:!0,filterable:!0,"allow-create":!0},on:{"update:value":function(e){t._project=e}}}),t._v(" "),n("SpiderSearch",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",project:t._project,value:t._spider,clearable:!0},on:{"update:value":function(e){t._spider=e},change:t.handleSpiderChange}}),t._v(" "),n("StatsRemove",{staticStyle:{"margin-left":"20px"},attrs:{status:t.status,project:t.project,spider:t.spider,schedule_job_id:t.schedule_job_id},on:{success:function(e){return t.$emit("success")}}}),t._v(" "),n("AutoRefresh",{staticStyle:{"margin-left":"20px"},attrs:{frequency:5e3},on:{refresh:function(e){return t.$emit("success")}}})],1)},f=[],m=n("24bc"),g=n("3629"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popconfirm",{attrs:{title:"确定删除？"},on:{confirm:t.handleDelete}},[n("el-button",t._b({attrs:{slot:"reference",size:"small",icon:"el-icon-delete"},slot:"reference"},"el-button",t.$attrs,!1),[t._v("删除列表")])],1)},v=[],b={name:"",props:{project:{type:String,default:""},spider:{type:String,default:""}},components:{},data:function(){return{}},computed:{},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),handleDelete:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.statsCollectionDelete({project:this.project,spider:this.spider});case 2:e=t.sent,0==e.code?(this.$message.success("删除成功"),this.$emit("success")):this.$message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},w=b,j=Object(l["a"])(w,_,v,!1,null,"052c5be0",null),S=j.exports,y=n("ef1e"),x={name:"",props:{status:{type:String},project:{type:String,default:""},spider:{type:String,default:""},schedule_job_id:{type:String,default:""},statusInfo:{type:Object,default:function(){return{}}}},components:{ProjectSelect:m["a"],SpiderSearch:g["a"],StatsRemove:S,AutoRefresh:y["a"]},data:function(){return{}},computed:{_status:{get:function(){return this.status},set:function(t){this.$emit("update:status",t),this.$emit("status-change",t)}},_project:{get:function(){return this.project},set:function(t){this.$emit("update:project",t),this.$emit("project-change",t)}},_spider:{get:function(){return this.spider},set:function(t){this.$emit("update:spider",t)}}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),handleSpiderChange:function(t){this.$emit("spider-change",t)}},created:function(){this.getData()}},$=x,D=Object(l["a"])($,h,f,!1,null,"23fe0788",null),R=D.exports,k={name:"",props:[],components:{StatsTable:d,StatsTool:R},data:function(){return{list:[],total:0,page:1,size:20,listLoading:!1,project:"",spider:"",orderProp:"",orderType:""}},computed:{},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,this.$Http.statsCollectionListItem({page:this.page,size:this.size,project:this.project,spider:this.spider,order_prop:this.orderProp,order_type:this.orderType});case 3:e=t.sent,0==e.code&&(this.list=e.data.list,this.total=e.data.total),this.listLoading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleProjectChange:function(){this.page=1,this.getData()},handleSpiderChange:function(){this.page=1,this.getData()},handleSuccess:function(){this.page=1,this.getData()},handleSortChange:function(t){var e=t.column,n=t.prop,r=t.order;console.log(e,n,r),this.orderType=r,this.orderType?this.orderProp=n:this.orderProp=null,this.page=1,this.getData()}},created:function(){this.project=this.$route.query.project,this.spider=this.$route.query.spider,this.getData()}},C=k,O=Object(l["a"])(C,r,s,!1,null,"740ec8a7",null);e["default"]=O.exports},"24bc":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",t._b({attrs:{placeholder:"选择项目"},model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-select",t.$attrs,!1),t._l(t.list,(function(t){return n("el-option",{attrs:{label:t.project,value:t.project}})})),1)},s=[],a=(n("9382"),n("ed32")),o={name:"",props:{value:{type:String}},components:{},data:function(){return{list:[]}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydListProjects();case 2:e=t.sent,this.list=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},i=o,c=n("5d22"),u=Object(c["a"])(i,r,s,!1,null,"09352087",null);e["a"]=u.exports},3629:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-autocomplete",t._g(t._b({attrs:{"fetch-suggestions":t.querySearch,placeholder:"搜索\bSpider名",clearable:""},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("span",[t._v(t._s(r.spider))])]}}]),model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-autocomplete",t.$attrs,!1),t.$listeners))},s=[],a=(n("9382"),n("ed32")),o={name:"",props:{value:{type:String},project:{type:String}},components:{},data:function(){return{list:[]}},watch:{project:{handler:function(t){t?this.getData():this.list=[]},immediate:!0}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{querySearch:function(t,e){var n=t?this.filterItem(t):this.list;e(n)},filterItem:function(t){return this.list.filter((function(e){return 0==e.spider.toLowerCase().indexOf(t.toLowerCase())}))},handleSelect:function(t){this._value=t.spider,this.$emit("change",t.spider)},getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.list=[],t.next=3,this.$Http.scrapydlistSpiders({project:this.project});case 3:e=t.sent,this.list=e.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){}},i=o,c=n("5d22"),u=Object(c["a"])(i,r,s,!1,null,"ba25b154",null);e["a"]=u.exports},"835b":function(t,e,n){},"84a4":function(t,e,n){"use strict";n("835b")},ef1e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("el-button",{attrs:{size:"small"},on:{click:t.changeAutoRefresh}},[t._v(t._s(t.autoRefreshText))]),t._v(" "),n("span",{staticClass:"tips"},[t._v(t._s(t.countDownText))])],1)},s=[],a=(n("e680"),{name:"",props:{frequency:{type:Number,default:3e3}},components:{},data:function(){return{timer:null,countDown:0}},computed:{autoRefreshText:function(){return null==this.timer?"开启自动刷新":"关闭自动刷新"},countDownText:function(){return null==this.timer?"":(console.log(this.countDown),this.countDown+" 秒后自动刷新")}},methods:{autoRefresh:function(){console.log("refresh"),this.$emit("refresh"),this.resetCountDown()},countDownReduce:function(){this.countDown--},resetCountDown:function(){this.countDown=Math.ceil(.001*this.frequency)},openAutoRefresh:function(){var t=this;this.resetCountDown(),this.countDownTimer=setInterval((function(){t.countDownReduce()}),1e3),this.timer=setInterval((function(){t.autoRefresh()}),this.frequency),console.log("启动自动刷新")},closeAutoRefresh:function(){clearInterval(this.timer),clearInterval(this.countDownTimer),console.log("关闭自动刷新"),this.timer=null,this.countDownTimer=null},changeAutoRefresh:function(){this.timer?this.closeAutoRefresh():this.openAutoRefresh()}},beforeDestroy:function(){this.closeAutoRefresh()},created:function(){}}),o=a,i=(n("84a4"),n("5d22")),c=Object(i["a"])(o,r,s,!1,null,"3b21a7d2",null);e["a"]=c.exports}}]);