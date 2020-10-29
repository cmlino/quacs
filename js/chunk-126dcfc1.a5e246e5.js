(self["webpackJsonp"]=self["webpackJsonp"]||[]).push([["chunk-126dcfc1"],{"2cf3":function(e,t,r){},3924:function(e,t,r){},"6b7b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.departmentsInitialized&&e.catalogInitialized?r("div",[r("b-overlay",{attrs:{show:0===e.selectedCourses.length||0===e.currentScheduleCRNs.length,rounded:"sm",opacity:"0.7"},scopedSlots:e._u([{key:"overlay",fn:function(){return[r("div",{staticClass:"text-center"},[0===e.lastNewSchedule?r("div",[r("b-spinner",{staticClass:"loading-spinner",attrs:{label:"Loading"}})],1):0===e.selectedCourses.length?r("div",{staticClass:"warning-message"},[r("h3",[e._v("It looks like you have not selected any courses yet :(")]),r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Click to select a course")])],1):0===e.filteredKeepSelected.length?r("div",{staticClass:"warning-message"},[r("h3",[e._v(" Uh oh! You have deselected all sections! Please select at least one section. ")])]):0===e.numSchedules?r("div",{staticClass:"warning-message"},[r("h3",[e._v(" Uh oh! All possible schedules have conflicts! Try choosing more sections. ")])]):e._e()])]},proxy:!0}],null,!1,4125908552)},[r("div",{key:e.lastNewSchedule,staticStyle:{"padding-bottom":"2rem"}},[r("div",{staticClass:"schedule-select"},[r("b-icon-chevron-left",{staticClass:"schedule-select-button",on:{click:function(t){return e.decrementSchedule()}}}),r("span",{staticClass:"schedule-num"},[e._v(" "+e._s(e.visibleCurrentScheduleNumber)+" / "+e._s(e.numSchedules)+" ")]),r("b-icon-chevron-right",{staticClass:"schedule-select-button",on:{click:function(t){return e.incrementSchedule()}}})],1),r("Calendar",{attrs:{crns:e.currentScheduleCRNs}}),r("div",{staticClass:"crn-list"},[e._v(" CRNs: "),e._l(e.currentScheduleCRNs,(function(t,n){return[0!==n?[e._v(", ")]:e._e(),r("span",{key:t,staticClass:"crn",on:{click:function(r){return e.copyToClipboard(t)}}},[e._v(e._s(t))])]})),r("div",{attrs:{id:"crn-copy-indicator"}},[e._v("Copied!")])],2)],1)]),r("div",{staticClass:"card-columns"},e._l(e.selectedCourses,(function(e){return r("CourseCard",{key:e.subj+e.crse+e.title,attrs:{course:e}})})),1)],1):r("b-spinner",{staticClass:"loading-spinner",attrs:{label:"Loading"}})],1)},o=[],i=r("9ab4"),a=r("60a3"),c=r("2f62"),l=r("2f79"),s=r("b42e"),u=r("fa73"),d=r("c637"),p=r("6c06"),h=r("7b1e"),f=r("a8c8"),b=r("3a58");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g={title:{type:String},variant:{type:String,default:null},fontScale:{type:[Number,String],default:1},scale:{type:[Number,String],default:1},rotate:{type:[Number,String],default:0},flipH:{type:Boolean,default:!1},flipV:{type:Boolean,default:!1},shiftH:{type:[Number,String],default:0},shiftV:{type:[Number,String],default:0},animation:{type:String,default:null}},O={viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"icon"},S={width:null,height:null,focusable:null,role:null,"aria-label":null},j=l["a"].extend({name:d["K"],functional:!0,props:v({content:{type:String},stacked:{type:Boolean,default:!1}},g),render:function(e,t){var r,n=t.data,o=t.props,i=t.children,a=Object(f["a"])(Object(b["a"])(o.fontScale,1),0)||1,c=Object(f["a"])(Object(b["a"])(o.scale,1),0)||1,l=Object(b["a"])(o.rotate,0),u=Object(b["a"])(o.shiftH,0),d=Object(b["a"])(o.shiftV,0),y=o.flipH,v=o.flipV,g=o.animation,j=y||v||1!==c,C=j||l,w=u||d,P=[C?"translate(8 8)":null,j?"scale(".concat((y?-1:1)*c," ").concat((v?-1:1)*c,")"):null,l?"rotate(".concat(l,")"):null,C?"translate(-8 -8)":null].filter(p["a"]),x=o.stacked,_=!Object(h["n"])(o.content),k=e("g",{attrs:{transform:P.join(" ")||null},domProps:_?{innerHTML:o.content||""}:{}},i);w&&(k=e("g",{attrs:{transform:"translate(".concat(16*u/16," ").concat(-16*d/16,")")}},[k])),x&&(k=e("g",{},[k]));var N=o.title?e("title",o.title):null;return e("svg",Object(s["a"])({staticClass:"b-icon bi",class:(r={},m(r,"text-".concat(o.variant),!!o.variant),m(r,"b-icon-animation-".concat(g),!!g),r),attrs:O,style:x?{}:{fontSize:1===a?null:"".concat(100*a,"%")}},n,x?{attrs:S}:{},{attrs:{xmlns:x?null:"http://www.w3.org/2000/svg",fill:"currentColor"}}),[N,k])}});function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e,t){var r=Object(u["b"])(e),n="BIcon".concat(Object(u["e"])(e)),o="bi-".concat(r),i=r.replace(/-/g," "),a=Object(u["g"])(t||"");return l["a"].extend({name:n,functional:!0,props:w(w({},g),{},{stacked:{type:Boolean,default:!1}}),render:function(e,t){var r=t.data,n=t.props;return e(j,Object(s["a"])({props:{title:i},attrs:{"aria-label":i}},r,{staticClass:o,props:w(w({},n),{},{content:a})}))}})},_=x("ChevronLeft",'<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>'),k=x("ChevronRight",'<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>'),N=r("01e3"),T=r("3702"),D=r("8c18");
/*!
 * BootstrapVue Icons, generated from Bootstrap Icons 1.0.0
 *
 * @link https://icons.getbootstrap.com/
 * @license MIT
 * https://github.com/twbs/icons/blob/master/LICENSE.md
 */function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z={top:0,left:0,bottom:0,right:0},E=l["a"].extend({name:d["db"],mixins:[D["a"]],props:{show:{type:Boolean,default:!1},variant:{type:String,default:"light"},bgColor:{type:String},opacity:{type:[Number,String],default:.85,validator:function(e){var t=Object(b["a"])(e,0);return t>=0&&t<=1}},blur:{type:String,default:"2px"},rounded:{type:[Boolean,String],default:!1},noCenter:{type:Boolean,default:!1},noFade:{type:Boolean,default:!1},spinnerType:{type:String,default:"border"},spinnerVariant:{type:String},spinnerSmall:{type:Boolean,default:!1},overlayTag:{type:String,default:"div"},wrapTag:{type:String,default:"div"},noWrap:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:10}},computed:{computedRounded:function(){var e=this.rounded;return!0===e||""===e?"rounded":e?"rounded-".concat(e):""},computedVariant:function(){return this.variant&&!this.bgColor?"bg-".concat(this.variant):""},overlayScope:function(){return{spinnerType:this.spinnerType||null,spinnerVariant:this.spinnerVariant||null,spinnerSmall:this.spinnerSmall}}},methods:{defaultOverlayFn:function(e){var t=e.spinnerType,r=e.spinnerVariant,n=e.spinnerSmall;return this.$createElement(N["a"],{props:{type:t,variant:r,small:n}})}},render:function(e){var t=this,r=e();if(this.show){var n=this.overlayScope,o=e("div",{staticClass:"position-absolute",class:[this.computedVariant,this.computedRounded],style:B(B({},z),{},{opacity:this.opacity,backgroundColor:this.bgColor||null,backdropFilter:this.blur?"blur(".concat(this.blur,")"):null})}),i=e("div",{staticClass:"position-absolute",style:this.noCenter?B({},z):{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[this.normalizeSlot("overlay",n)||this.defaultOverlayFn(n)]);r=e(this.overlayTag,{key:"overlay",staticClass:"b-overlay",class:{"position-absolute":!this.noWrap||this.noWrap&&!this.fixed,"position-fixed":this.noWrap&&this.fixed},style:B(B({},z),{},{zIndex:this.zIndex||10}),on:{click:function(e){return t.$emit("click",e)}}},[o,i])}return r=e(T["a"],{props:{noFade:this.noFade,appear:!0},on:{"after-enter":function(){return t.$emit("shown")},"after-leave":function(){return t.$emit("hidden")}}},[r]),this.noWrap?r:e(this.wrapTag,{staticClass:"b-overlay-wrap position-relative",attrs:{"aria-busy":this.show?"true":null}},this.noWrap?[r]:[this.normalizeSlot(),r])}}),I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"calendar",style:{height:e.totalHeight+"px"}},[r("div",{staticClass:"calendar-times"},e._l(e.strHours,(function(t){return r("div",{key:t,staticClass:"hour-label",class:{hour_label_military:e.isMilitaryTime()},style:{height:e.hourHeight+"%"}},[r("div",[e._v(e._s(t))])])})),0),r("div",{staticClass:"calendar-grid"},e._l(e.getDays(),(function(t){return r("div",{key:t.short,staticClass:"grid-day",style:{width:e.dayWidth+"%"}},[r("div",{staticClass:"day-label"},[e._v(e._s(t.name))]),e._l(e.sessionsOnDay(t),(function(n){return r("div",{key:t.short+n.timeslot.timeStart+n.section.crn+n.timeslot.instrutor+n.timeslot.location,staticClass:"calendar-event",style:{"margin-top":e.eventPosition(n.timeslot)+"px",height:e.eventHeight(n.timeslot)+"px",width:e.dayWidth+"%",backgroundColor:e.colors(n.section.crn).bg,borderColor:e.colors(n.section.crn).border,color:e.colors(n.section.crn).text}},[r("div",{staticClass:"event-text"},[e._v(" "+e._s(n.section.title)+" "),r("br"),e._v(" "+e._s(n.section.subj)+" "+e._s(n.section.crse)+" - "+e._s(n.section.sec)+" "),r("br"),e._v(" "+e._s(n.section.crn)+" "),r("br"),e._v(" "+e._s(n.timeslot.instructor)+" "),r("br"),e._v(" "+e._s(n.timeslot.location)+" ")])])})),e._l(e.strHours,(function(t){return r("div",{key:t,staticClass:"grid-hour",style:{height:e.hourHeight+"%"}})}))],2)})),0)])},V=[],M=r("16bd"),R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.startTime=420,t.endTime=1380,t.totalHeight=700,t}return Object(i["d"])(t,e),t.prototype.getDays=function(){var e=this.sessionsOnDay({name:"Saturday",short:"S"}).length+this.sessionsOnDay({name:"Sunday",short:"U"}).length>0;return e?M["a"]:M["a"].slice(0,5)},Object.defineProperty(t.prototype,"numMinutes",{get:function(){return this.endTime-this.startTime},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dayWidth",{get:function(){return 100/this.getDays().length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hourHeight",{get:function(){return 6e3/this.numMinutes},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"crnToSections",{get:function(){var e,t,r,n,o,a,c={};try{for(var l=Object(i["f"])(this.$store.state.departments),s=l.next();!s.done;s=l.next()){var u=s.value;try{for(var d=(r=void 0,Object(i["f"])(u.courses)),p=d.next();!p.done;p=d.next()){var h=p.value;try{for(var f=(o=void 0,Object(i["f"])(h.sections)),b=f.next();!b.done;b=f.next()){var y=b.value;c[y.crn]=y}}catch(v){o={error:v}}finally{try{b&&!b.done&&(a=f.return)&&a.call(f)}finally{if(o)throw o.error}}}}catch(m){r={error:m}}finally{try{p&&!p.done&&(n=d.return)&&n.call(d)}finally{if(r)throw r.error}}}}catch(g){e={error:g}}finally{try{s&&!s.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}return c},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selected",{get:function(){var e,t,r=[];try{for(var n=Object(i["f"])(this.crns),o=n.next();!o.done;o=n.next()){var a=o.value;r.push(this.crnToSections[a])}}catch(c){e={error:c}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}return r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sessionsOnDay",{get:function(){var e=this;return function(t){var r,n,o,a,c=[];try{for(var l=Object(i["f"])(e.selected),s=l.next();!s.done;s=l.next()){var u=s.value;try{for(var d=(o=void 0,Object(i["f"])(u.timeslots)),p=d.next();!p.done;p=d.next()){var h=p.value;h.days.includes(t.short)&&c.push({section:u,timeslot:h})}}catch(f){o={error:f}}finally{try{p&&!p.done&&(a=d.return)&&a.call(d)}finally{if(o)throw o.error}}}}catch(b){r={error:b}}finally{try{s&&!s.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return c}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"strHours",{get:function(){for(var e=[],t=this.startTime;t<this.endTime;t+=60)e.push(Object(M["h"])(t,this.$store.getters["settings/isMilitaryTime"]()));return e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"eventHeight",{get:function(){var e=this;return function(t){return e.totalHeight*(Object(M["e"])(t)/e.numMinutes)}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"eventPosition",{get:function(){var e=this;return function(t){var r=Object(M["j"])(t.timeStart);return e.totalHeight*((r-e.startTime)/e.numMinutes)}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colors",{get:function(){var e=this;return function(t){var r=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--num-calendar-colors")),n=e.selected.findIndex((function(e){return e.crn===t}))%r;return{bg:"var(--calendar-bg-color-"+n+")",border:"var(--calendar-border-color-"+n+")",text:"var(--calendar-text-color-"+n+")"}}},enumerable:!1,configurable:!0}),Object(i["c"])([Object(a["b"])()],t.prototype,"crns",void 0),t=Object(i["c"])([Object(a["a"])({computed:Object(i["a"])({},Object(c["b"])("settings",["isMilitaryTime"]))})],t),t}(a["c"]),W=R,F=W,L=(r("cac1"),r("2877")),K=Object(L["a"])(F,I,V,!1,null,"e387e8e4",null),U=K.exports,J=r("8f57");function Y(e,t){return(e%t+t)%t}var A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.keepSelected=[],t.keepSelectedCourseSet="",t.currentScheduleNumber=0,t.currentScheduleCRNs=[],t}return Object(i["d"])(t,e),t.prototype.onPropertyChanged=function(){this.currentScheduleNumber=0,this.getSchedule(this.currentScheduleNumber)},Object.defineProperty(t.prototype,"selectedCourses",{get:function(){var e,t,r,n,o,a;if(this.currentCourseSet!==this.keepSelectedCourseSet&&(this.keepSelected=[],this.keepSelectedCourseSet=this.currentCourseSet),this.keepSelected.length>0)return this.keepSelected;try{for(var c=Object(i["f"])(this.$store.state.departments),l=c.next();!l.done;l=c.next()){var s=l.value;try{for(var u=(r=void 0,Object(i["f"])(s.courses)),d=u.next();!d.done;d=u.next()){var p=d.value;try{for(var h=(o=void 0,Object(i["f"])(p.sections)),f=h.next();!f.done;f=h.next()){var b=f.value;if(this.$store.getters["schedule/isSelected"](b.crn)){this.keepSelected.push(p);break}}}catch(y){o={error:y}}finally{try{f&&!f.done&&(a=h.return)&&a.call(h)}finally{if(o)throw o.error}}}}catch(v){r={error:v}}finally{try{d&&!d.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}}}catch(m){e={error:m}}finally{try{l&&!l.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}return this.keepSelected},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"filteredKeepSelected",{get:function(){var e=this;return this.keepSelected.filter((function(t){return t.sections.some((function(t){return e.$store.getters["schedule/isSelected"](t.crn)}))}))},enumerable:!1,configurable:!0}),t.prototype.mounted=function(){this.getSchedule(this.currentScheduleNumber)},Object.defineProperty(t.prototype,"lastNewSchedule",{get:function(){return this.$store.state.schedule.lastNewSchedule},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"visibleCurrentScheduleNumber",{get:function(){return 0===this.numSchedules?(this.currentScheduleNumber=0,0):this.currentScheduleNumber+1},enumerable:!1,configurable:!0}),t.prototype.getSchedule=function(e){return Object(i["b"])(this,void 0,Promise,(function(){var t;return Object(i["e"])(this,(function(r){switch(r.label){case 0:return 0===this.numSchedules?(this.currentScheduleCRNs=[],[2]):(t=this,[4,this.$store.getters["schedule/getSchedule"](e)]);case 1:return t.currentScheduleCRNs=r.sent(),[2]}}))}))},t.prototype.incrementSchedule=function(){this.currentScheduleNumber=Y(this.currentScheduleNumber+1,this.numSchedules),this.getSchedule(this.currentScheduleNumber)},t.prototype.decrementSchedule=function(){this.currentScheduleNumber=Y(this.currentScheduleNumber-1,this.numSchedules),this.getSchedule(this.currentScheduleNumber)},t.prototype.copyToClipboard=function(e){var t=document.createElement("input");t.style="position: absolute; left: -1000px; top: -1000px",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t);var r=document.getElementById("crn-copy-indicator");r.className="show",setTimeout((function(){r.className=r.className.replace("show","")}),2e3)},Object(i["c"])([Object(a["d"])("lastNewSchedule")],t.prototype,"onPropertyChanged",null),t=Object(i["c"])([Object(a["a"])({computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["b"])(["departmentsInitialized","catalogInitialized"])),Object(c["b"])("schedule",["numSchedules"])),Object(c["c"])("schedule",["lastNewSchedule","currentCourseSet","lastNewSchedule"])),components:{Calendar:U,CourseCard:J["a"],"b-icon-chevron-left":_,"b-icon-chevron-right":k,"b-spinner":N["a"],"b-overlay":E}})],t),t}(a["c"]),X=A,q=X,G=(r("fc6c"),Object(L["a"])(q,n,o,!1,null,"0b67ce32",null));t["default"]=G.exports},cac1:function(e,t,r){"use strict";var n=r("2cf3"),o=r.n(n);o.a},fc6c:function(e,t,r){"use strict";var n=r("3924"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-126dcfc1.a5e246e5.js.map