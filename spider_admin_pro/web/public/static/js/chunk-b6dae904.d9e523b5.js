(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6dae904"],{"24bc":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",t._b({attrs:{placeholder:"选择项目"},model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-select",t.$attrs,!1),t._l(t.list,(function(t){return n("el-option",{attrs:{label:t.project,value:t.project}})})),1)},r=[],a=(n("e186"),n("7590")),o={name:"",props:{value:{type:String}},components:{},data:function(){return{list:[]}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydListProjects();case 2:e=t.sent,this.list=e.data,this.$emit("on-init",e.data);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},i=o,u=n("cba8"),c=Object(u["a"])(i,s,r,!1,null,"54ef52cb",null);e["a"]=c.exports},3629:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-autocomplete",t._g(t._b({attrs:{"fetch-suggestions":t.querySearch,placeholder:"搜索Spider名",clearable:""},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item;return[n("span",[t._v(t._s(s.spider))])]}}]),model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-autocomplete",t.$attrs,!1),t.$listeners))},r=[],a=(n("e186"),n("7590")),o={name:"",props:{value:{type:String},project:{type:String}},components:{},data:function(){return{list:[]}},watch:{project:{handler:function(t){t?this.getData():this.list=[]},immediate:!0}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{querySearch:function(t,e){var n=t?this.filterItem(t):this.list;e(n)},filterItem:function(t){return this.list.filter((function(e){return 0==e.spider.toLowerCase().indexOf(t.toLowerCase())}))},handleSelect:function(t){this._value=t.spider,this.$emit("change",t.spider)},getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.list=[],t.next=3,this.$Http.scrapydlistSpiders({project:this.project});case 3:e=t.sent,this.list=e.data,this.$emit("on-init",e.data);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){}},i=o,u=n("cba8"),c=Object(u["a"])(i,s,r,!1,null,"8565e4cc",null);e["a"]=c.exports},5388:function(t,e,n){},"84a4":function(t,e,n){"use strict";n("5388")},d995:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("ScheduleLogTool",{attrs:{status:t.status,project:t.project,spider:t.spider,schedule_job_id:t.schedule_job_id,statusInfo:t.statusInfo},on:{"update:status":function(e){t.status=e},"update:project":function(e){t.project=e},"update:spider":function(e){t.spider=e},"status-change":t.handleStatusChange,"project-change":t.handleProjectChange,"spider-change":t.handleSpiderChange,success:t.handleSuccess}}),t._v(" "),n("div",{staticStyle:{height:"20px"}}),t._v(" "),n("ScheduleLogTable",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list}}),t._v(" "),n("mo-pagination",{attrs:{"current-page":t.page,"page-size":t.size,total:t.count},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},change:t.getData}})],1)},r=[],a=(n("e186"),n("7590")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("mo-table",t._g(t._b({},"mo-table",t.$attrs,!1),t.$listeners),[n("el-table-column",{attrs:{align:"center",label:"序号",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目名",align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.project)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Spider",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\n        "+t._s(e.row.spider)+"\n\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"调度模式",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.schedule_mode)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"调度状态",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-status",{attrs:{value:t.row.status}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"错误消息",align:"center",width:"120","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.message}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"运行状态",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.run_status||"-")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"item",align:"center",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.item_count||"-")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"error",align:"center",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.log_error_count||"-")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"持续时间",align:"right",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.duration_str||"-")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"运行日志",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.spider_job_id?n("router-link",{attrs:{to:{name:"logs-project-spider-job",params:{project:e.row.project,spider:e.row.spider,job:e.row.spider_job_id}},target:"_blank"}},[n("i",{staticClass:"el-icon-document"}),t._v(" 日志")]):n("span",[t._v("-")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"调度时间",align:"center",width:"170px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.create_time)+"\n      ")]}}])})],1)],1)},i=[],u={name:""},c=u,l=n("cba8"),p=Object(l["a"])(c,o,i,!1,null,"6f76538e",null),d=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("el-radio-group",{attrs:{size:"small"},model:{value:t._status,callback:function(e){t._status=e},expression:"_status"}},[n("el-radio-button",{attrs:{label:"total"}},[t._v("全部 "+t._s(t.statusInfo.total))]),t._v(" "),n("el-radio-button",{attrs:{label:"success"}},[t._v("成功 "+t._s(t.statusInfo.success))]),t._v(" "),n("el-radio-button",{attrs:{label:"error"}},[t._v("失败 "+t._s(t.statusInfo.error))])],1),t._v(" "),n("ProjectSelect",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",value:t._project,clearable:!0,filterable:!0,"allow-create":!0},on:{"update:value":function(e){t._project=e}}}),t._v(" "),n("SpiderSearch",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",project:t._project,value:t._spider,clearable:!0},on:{"update:value":function(e){t._spider=e},change:t.handleSpiderChange}}),t._v(" "),n("ScheduleLogRemove",{staticStyle:{"margin-left":"20px"},attrs:{status:t.status,project:t.project,spider:t.spider,schedule_job_id:t.schedule_job_id},on:{success:function(e){return t.$emit("success")}}}),t._v(" "),n("AutoRefresh",{staticStyle:{"margin-left":"20px"},attrs:{frequency:5e3},on:{refresh:function(e){return t.$emit("success")}}})],1)},f=[],_=n("24bc"),m=n("3629"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popconfirm",{attrs:{title:"确定删除？"},on:{confirm:t.handleDelete}},[n("el-button",t._b({attrs:{slot:"reference",size:"small",icon:"el-icon-delete"},slot:"reference"},"el-button",t.$attrs,!1),[t._v("删除列表")])],1)},v=[],b={name:"",props:{status:{type:String},project:{type:String,default:""},spider:{type:String,default:""},schedule_job_id:{type:String,default:""}},components:{},data:function(){return{}},computed:{},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),handleDelete:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scheduleRemoveScheduleLogs({status:this.status,project:this.project,spider:this.spider,schedule_job_id:this.schedule_job_id});case 2:e=t.sent,0==e.code?(this.$message.success("删除成功"),this.$emit("success")):this.$message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},w=b,j=Object(l["a"])(w,g,v,!1,null,"430ed13e",null),S=j.exports,y=n("ef1e"),x={name:"",props:{status:{type:String},project:{type:String,default:""},spider:{type:String,default:""},schedule_job_id:{type:String,default:""},statusInfo:{type:Object,default:function(){return{}}}},components:{ProjectSelect:_["a"],SpiderSearch:m["a"],ScheduleLogRemove:S,AutoRefresh:y["a"]},data:function(){return{}},computed:{_status:{get:function(){return this.status},set:function(t){this.$emit("update:status",t),this.$emit("status-change",t)}},_project:{get:function(){return this.project},set:function(t){this.$emit("update:project",t),this.$emit("project-change",t)}},_spider:{get:function(){return this.spider},set:function(t){this.$emit("update:spider",t)}}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),handleSpiderChange:function(t){this.$emit("spider-change",t)}},created:function(){this.getData()}},$=x,D=Object(l["a"])($,h,f,!1,null,"5b47f784",null),R=D.exports,k={name:"",props:[],components:{ScheduleLogTable:d,ScheduleLogTool:R},data:function(){return{list:[],total:0,page:1,size:20,listLoading:!1,status:"total",project:"",spider:"",schedule_job_id:"",statusInfo:{}}},computed:{count:function(){return this.statusInfo[this.status]}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,this.$Http.scheduleScheduleLogs({page:this.page,size:this.size,status:this.status,project:this.project,spider:this.spider,schedule_job_id:this.schedule_job_id});case 3:e=t.sent,0==e.code&&(this.list=e.data.list,this.total=e.data.total,this.statusInfo={total:e.data.total,success:e.data.success,error:e.data.error}),this.listLoading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleStatusChange:function(){this.page=1,this.getData()},handleProjectChange:function(){this.page=1,this.getData()},handleSpiderChange:function(){this.page=1,this.getData()},handleSuccess:function(){this.page=1,this.getData()}},created:function(){this.schedule_job_id=this.$route.query.job,this.project=this.$route.query.project,this.spider=this.$route.query.spider,this.getData()}},C=k,L=Object(l["a"])(C,s,r,!1,null,"8e04c252",null);e["default"]=L.exports},ef1e:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("el-button",{attrs:{size:"small"},on:{click:t.changeAutoRefresh}},[t._v(t._s(t.autoRefreshText))]),t._v(" "),n("span",{staticClass:"tips"},[t._v(t._s(t.countDownText))])],1)},r=[],a=(n("e680"),{name:"",props:{frequency:{type:Number,default:3e3}},components:{},data:function(){return{timer:null,countDown:0}},computed:{autoRefreshText:function(){return null==this.timer?"开启自动刷新":"关闭自动刷新"},countDownText:function(){return null==this.timer?"":(console.log(this.countDown),this.countDown+" 秒后自动刷新")}},methods:{autoRefresh:function(){console.log("refresh"),this.$emit("refresh"),this.resetCountDown()},countDownReduce:function(){this.countDown--},resetCountDown:function(){this.countDown=Math.ceil(.001*this.frequency)},openAutoRefresh:function(){var t=this;this.resetCountDown(),this.countDownTimer=setInterval((function(){t.countDownReduce()}),1e3),this.timer=setInterval((function(){t.autoRefresh()}),this.frequency),console.log("启动自动刷新")},closeAutoRefresh:function(){clearInterval(this.timer),clearInterval(this.countDownTimer),console.log("关闭自动刷新"),this.timer=null,this.countDownTimer=null},changeAutoRefresh:function(){this.timer?this.closeAutoRefresh():this.openAutoRefresh()}},beforeDestroy:function(){this.closeAutoRefresh()},created:function(){}}),o=a,i=(n("84a4"),n("cba8")),u=Object(i["a"])(o,s,r,!1,null,"3b21a7d2",null);e["a"]=u.exports}}]);