(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f983496"],{"24bc":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",t._b({attrs:{placeholder:"选择项目"},model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-select",t.$attrs,!1),t._l(t.list,(function(t){return n("el-option",{attrs:{label:t.project,value:t.project}})})),1)},s=[],a=(n("9382"),n("ed32")),o={name:"",props:{value:{type:String}},components:{},data:function(){return{list:[]}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydListProjects();case 2:e=t.sent,this.list=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},c=o,i=n("5d22"),u=Object(i["a"])(c,r,s,!1,null,"09352087",null);e["a"]=u.exports},"835b":function(t,e,n){},"84a4":function(t,e,n){"use strict";n("835b")},"93b4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("JobTool",{attrs:{statusInfo:t.statusInfo,status:t.status,project:t.project},on:{"update:status":function(e){t.status=e},"update:project":function(e){t.project=e},"status-change":t.handleStatusChange,"project-change":t.handleProjcetChange,success:t.getData}}),t._v(" "),n("div",{staticStyle:{height:"20px"}}),t._v(" "),n("JobTable",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,project:t.project}})],1)},s=[],a=(n("9382"),n("ed32")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mo-table",t._g(t._b({},"mo-table",t.$attrs,!1),t.$listeners),[n("el-table-column",{attrs:{align:"center",label:"序号",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.$index+1)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"\bSpider名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.spider)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.status)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"持续时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.duration_str}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"开始时间",align:"center",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.start_time}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"结束时间",align:"center",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.end_time}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"PID",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("mo-text",{attrs:{text:t.row.pid+""}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"查看日志",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"logs-project-spider-job",params:{project:t.project,spider:e.row.spider,job:e.row.id}},target:"_blank"}},[n("i",{staticClass:"el-icon-document"}),t._v(" 查看")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"取消运行",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("JobCancel",{attrs:{job:t.row.id,disabled:"finished"==t.row.status}})]}}])})],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("el-button",t._b({attrs:{size:"mini"},on:{click:t.handleCancel}},"el-button",t.$attrs,!1),[t._v("取消")])],1)},u=[],l={name:"",props:{job:{type:String}},components:{},data:function(){return{project:""}},computed:{},methods:{handleCancel:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydCancel({project:this.project,job:this.job});case 2:e=t.sent,0==e.code?this.$message.success("取消成功"):this.$message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.project=this.$route.params.project}},p=l,f=n("5d22"),h=Object(f["a"])(p,i,u,!1,null,"52c32c2c",null),d=h.exports,m={name:"",props:{project:{type:String,default:""}},components:{JobCancel:d},data:function(){return{}},computed:{},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},g=m,b=Object(f["a"])(g,o,c,!1,null,"eb9a555c",null),_=b.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("el-radio-group",{attrs:{size:"small"},model:{value:t._status,callback:function(e){t._status=e},expression:"_status"}},[n("el-radio-button",{attrs:{label:""}},[t._v("全部 "+t._s(t.statusInfo.total))]),t._v(" "),n("el-radio-button",{attrs:{label:"pending"}},[t._v("等待中 "+t._s(t.statusInfo.pending))]),t._v(" "),n("el-radio-button",{attrs:{label:"running"}},[t._v("运行中 "+t._s(t.statusInfo.running))]),t._v(" "),n("el-radio-button",{attrs:{label:"finished"}},[t._v("已结束 "+t._s(t.statusInfo.finished))])],1),t._v(" "),n("ProjectSelect",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",value:t._project},on:{"update:value":function(e){t._project=e}}}),t._v(" "),n("JobCancelAll",{staticStyle:{"margin-left":"20px"},attrs:{project:t.project,size:"small"}}),t._v(" "),n("AutoRefresh",{staticStyle:{"margin-left":"20px"},on:{refresh:function(e){return t.$emit("success")}}})],1)},j=[],w=n("ef1e"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-button",t._b({on:{click:t.handleCancel}},"el-button",t.$attrs,!1),[t._v("取消所有任务")])},y=[],$={name:"",props:{project:{type:String}},components:{},data:function(){return{}},computed:{},methods:{handleCancel:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydCancelAllJob({project:this.project});case 2:e=t.sent,0==e.code?this.$message.success("取消成功"):this.$message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){}},S=$,D=Object(f["a"])(S,x,y,!1,null,"4c5b7e26",null),R=D.exports,k=n("24bc"),C={name:"",components:{AutoRefresh:w["a"],JobCancelAll:R,ProjectSelect:k["a"]},props:{status:{type:String},project:{type:String,default:""},statusInfo:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{_status:{get:function(){return this.status},set:function(t){this.$emit("update:status",t),this.$emit("status-change",t)}},_project:{get:function(){return this.project},set:function(t){this.$emit("update:project",t),this.$emit("project-change",t)}}},methods:{},created:function(){}},I=C,O=Object(f["a"])(I,v,j,!1,null,"046e2d98",null),A=O.exports,J={name:"",props:[],components:{JobTable:_,JobTool:A},data:function(){return{status:"",project:"",list:[],listLoading:!0,statusInfo:{total:0,finished:0,pending:0,running:0}}},computed:{},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,this.$Http.scrapydlistJobsMerge({project:this.project,status:this.status});case 3:e=t.sent,0==e.code?(this.list=e.data.list,this.statusInfo.total=e.data.total,this.statusInfo.pending=e.data.pending,this.statusInfo.running=e.data.running,this.statusInfo.finished=e.data.finished):this.$message.error(e.msg),this.listLoading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleStatusChange:function(){this.getData()},handleProjcetChange:function(t){t?(this.project=t,localStorage.setItem("project",t),this.getData()):this.$message.error("请选择项目")}},created:function(){var t=this.$route.query.project;t||(t=localStorage.getItem("project")),this.handleProjcetChange(t)}},T=J,E=Object(f["a"])(T,r,s,!1,null,"eaf91f0c",null);e["default"]=E.exports},ef1e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("el-button",{attrs:{size:"small"},on:{click:t.changeAutoRefresh}},[t._v(t._s(t.autoRefreshText))]),t._v(" "),n("span",{staticClass:"tips"},[t._v(t._s(t.countDownText))])],1)},s=[],a=(n("e680"),{name:"",props:{frequency:{type:Number,default:3e3}},components:{},data:function(){return{timer:null,countDown:0}},computed:{autoRefreshText:function(){return null==this.timer?"开启自动刷新":"关闭自动刷新"},countDownText:function(){return null==this.timer?"":(console.log(this.countDown),this.countDown+" 秒后自动刷新")}},methods:{autoRefresh:function(){console.log("refresh"),this.$emit("refresh"),this.resetCountDown()},countDownReduce:function(){this.countDown--},resetCountDown:function(){this.countDown=Math.ceil(.001*this.frequency)},openAutoRefresh:function(){var t=this;this.resetCountDown(),this.countDownTimer=setInterval((function(){t.countDownReduce()}),1e3),this.timer=setInterval((function(){t.autoRefresh()}),this.frequency),console.log("启动自动刷新")},closeAutoRefresh:function(){clearInterval(this.timer),clearInterval(this.countDownTimer),console.log("关闭自动刷新"),this.timer=null,this.countDownTimer=null},changeAutoRefresh:function(){this.timer?this.closeAutoRefresh():this.openAutoRefresh()}},beforeDestroy:function(){this.closeAutoRefresh()},created:function(){}}),o=a,c=(n("84a4"),n("5d22")),i=Object(c["a"])(o,r,s,!1,null,"3b21a7d2",null);e["a"]=i.exports}}]);