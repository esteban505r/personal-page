(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16431d50"],{"234e":function(i,e,t){"use strict";t("9302")},"2b97":function(i){i.exports=JSON.parse('{"worksInsideData":[{"id":1,"title":"Mi Clima","images":["miclima.png","miclima_2.png"],"features":[{"id":1,"description":"Displays current weather."},{"id":2,"description":"Incorporates animations."},{"id":3,"description":"Built with Flutter and Provider."}],"description":"An app for displaying current weather with delightful animations."},{"id":2,"title":"Focus Friend","images":["focus_friend.png","focus_friend_2.png"],"features":[{"id":1,"description":"Offers time and task management with notifications."},{"id":2,"description":"Tracks behavior and suggests leisure activities."},{"id":3,"description":"Developed with Flutter, Riverpod, and Firebase."}],"description":"A comprehensive time and task management app that helps you stay focused and organized."},{"id":3,"title":"Organize College","images":["organize_college.png","organize_college_2.png"],"features":[{"id":1,"description":"Manages college subjects and schedules."},{"id":2,"description":"Calculates grades needed to pass the semester."},{"id":3,"description":"Developed with Flutter, Cubit, and Sqflite."}],"description":"A handy app for managing college subjects, schedules, and academic progress."},{"id":4,"title":"Pokemon Statistics","images":["assets/img/placeholder/pokemon.jpg"],"features":[{"id":1,"description":"Explores detailed Pokemon statistics with style."},{"id":2,"description":"Developed using Android Native, Jetpack Compose, Hilt, coroutines, retrofit, and MVVM."}],"description":"An app for discovering in-depth Pokemon statistics and captivating animations."},{"id":5,"title":"Cuerpo Fit - Entrena Conmigo","images":["cfit.png","cfit_2.png","cfit_3.png"],"features":[{"id":1,"description":"Provides high-quality workout routines and coaching."},{"id":2,"description":"Enables progress tracking and direct communication with coaches."}],"description":"A top-notch fitness app for accessing premium workout routines, tracking progress, and connecting with personal coaches."}]}')},"7db0":function(i,e,t){"use strict";var s=t("23e7"),n=t("b727").find,a=t("44d2"),o="find",d=!0;o in[]&&Array(1)[o]((function(){d=!1})),s({target:"Array",proto:!0,forced:d},{find:function(i){return n(this,i,arguments.length>1?arguments[1]:void 0)}}),a(o)},9302:function(i,e,t){},e11a:function(i,e,t){"use strict";t.r(e);t("a4d3"),t("e01a");var s=function(){var i=this,e=i._self._c;return e("div",{attrs:{id:"works-inside-index"}},[e("Loading"),i._v(" "),e("Header"),i._v(" "),e("main",{staticClass:"site-main bg-half-ring-right bg-half-ring-top",attrs:{id:"main"}},[e("section",{attrs:{id:"page-content"}},[e("div",{staticClass:"wrapper"},[e("div",{attrs:{id:"single"}},[e("div",{staticClass:"row gutter-width-lg single-content"},[e("div",{staticClass:"col-xl-7 col-lg-7 col-md-7 col-sm-12",attrs:{id:"carousel"}},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":i.onSlideStart,"sliding-end":i.onSlideEnd},model:{value:i.slide,callback:function(e){i.slide=e},expression:"slide"}},i._l(i.item.images,(function(t){return e("b-carousel-slide",{key:t,scopedSlots:i._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"800",src:"/assets/img/works/"+t,alt:"image slot"}})]},proxy:!0}],null,!0)})})),1)],1),i._v(" "),e("div",{staticClass:"col-xl-5 col-lg-5 col-md-5 col-sm-12"},[e("p",{staticClass:"date"},[e("span",{staticClass:"large"},[i._v("25")]),i._v(" May, "+i._s((new Date).getFullYear()))]),i._v(" "),e("h1",{staticClass:"small"},[i._v(i._s(i.item.title))]),i._v(" "),e("div",{staticClass:"description"},[e("p",[i._v(i._s(i.item.description))]),i._v(" "),e("h5",[i._v("Product features")]),i._v(" "),e("ul",i._l(i.item.features,(function(t){return e("li",i._b({},"li",t.id,!1),[i._v(i._s(t.description)+"\n                                    ")])})),0)])])])])])])]),i._v(" "),e("Footer")],1)},n=[],a=(t("7db0"),t("d3b7"),t("4b5c")),o=t("1954"),d=t("0350"),r=t("2b97"),c={components:{Loading:a["a"],Header:o["a"],Footer:d["a"]},data:function(){var i=this;return{item:r.worksInsideData.find((function(e){return e.id==i.$route.params.id}))}},mounted:function(){document.body.classList.add("single"),document.body.classList.add("single-portfolio"),document.body.classList.add("bg-fixed"),document.body.classList.add("bg-line")},beforeDestroy:function(){document.body.classList.remove("single"),document.body.classList.remove("single-portfolio"),document.body.classList.remove("bg-fixed"),document.body.classList.remove("bg-line")},metaInfo:{title:"Works inside | Esteban Lopez",titleTemplate:"%s"}},l=c,p=(t("234e"),t("2877")),u=Object(p["a"])(l,s,n,!1,null,"9d9a53b4",null);e["default"]=u.exports}}]);