(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{319:function(t,e,n){var content=n(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("99d21c3c",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";var r=n(319);n.n(r).a},336:function(t,e,n){(e=n(8)(!1)).push([t.i,".nowrap[data-v-68ba9eb6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nnBanner[data-v-68ba9eb6]{height:136px;background-repeat:no-repeat;background-position-x:center;background-size:cover}",""]),t.exports=e},344:function(t,e,n){"use strict";var r={name:"NnBanner",props:{img:{type:String,required:!0},url:String}},o=(n(335),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.url,target:"_blank"}},[e("div",{staticClass:"nnBanner",style:{"background-image":"url("+this.img+")"}})])}),[],!1,null,"68ba9eb6",null);e.a=component.exports},387:function(t,e,n){var content=n(539);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("c625c05a",content,!0,{sourceMap:!1})},537:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABW0lEQVQoU32Rv0uVcRTGP8/7plO41eIk6qgYVCCCm5MOgj8ChUDrft8ShXB1d3MRI+/3OggKERdLRConJwdBoT+gIdpqaTE08b1PvFe83EE86zmfc87zPOKOCtGfBKPNI7oLKEXPJqbHYlrwoJhtAC8r7k3NvM0jhDHH6T3WrnJCAouGXJDWgVB2JlizkOCbIQV6ZIRIbD4CFxJTytY9iDhEnNhMxEw/iyUvNtyV5lQl+qjxBOhGPFUo+wDRf57TtfVav5s1vXrn9lrKd8FeOehZXUOIPgO+xqDx2wzIyv5i0RuD2m+Af4adStDUrUD0rmEgBl27FKKPgM4/Z3RUF3XeDC1su+3yLz8sTmPQUB0oRU8m8MGmetnK880ZXRSNube+n7fwHhjJxfBGSZ8bOWTRq8CC4ZfhIClsNUOIhzbLMdPSzeVGcKXoMZk3iMcqYhPHNVipBO03v/kf1wCFlx4NVGgAAAAASUVORK5CYII="},538:function(t,e,n){"use strict";var r=n(387);n.n(r).a},539:function(t,e,n){(e=n(8)(!1)).push([t.i,".nowrap[data-v-603da382]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page[data-v-603da382]{background-color:#36393f}.pass-list[data-v-603da382]{padding:22px 28px}.pass-list .item[data-v-603da382]{padding:12px 0;border-bottom:1px solid #2f3136}.pass-list .item .Avatar[data-v-603da382]{width:42px;height:42px;border-radius:50%}.pass-list .item .name[data-v-603da382]{color:#dcddde;margin:0 5px}.pass-list .item .info[data-v-603da382]{margin-left:38px;color:#9fa4ab}.pass-list .item .status[data-v-603da382]{color:#72767d}",""]),t.exports=e},600:function(t,e,n){"use strict";n.r(e);n(22),n(12),n(11),n(5),n(14),n(15);var r=n(3),o=n(4),c=(n(24),n(20)),l=n(344);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"FriendSearch",components:Object(o.a)({},l.a.name,l.a),computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["USER_ID"])),data:function(){return{list:[]}},mounted:function(){var t=this;setTimeout((function(){t.getlist()}),0)},methods:{getlist:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("apply/list/".concat(t.USER_ID));case 2:n=e.sent,data=n.data,t.list=data;case 5:case"end":return e.stop()}}),e)})))()},Refuse:function(t){var e=this,n=t.dbId;this.$axios.put("friend/apply/ignored",{applyId:n}).then((function(t){var n=t.msg;e.$message.info(n),e.getlist()}))},accept:function(t){var e=this,n=t.dbId;this.$axios.put("friend/apply/agree",{alias:"周公来",applyId:n}).then((function(t){var n=t.msg;e.$message.success(n),e.getlist()}))}}},v=(n(538),n(2)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page spacer flex column"},[r("NnBanner",{attrs:{href:"//www.baidu.com",img:"http://placekitten.com/1280/128"}}),t._v(" "),r("div",{staticClass:"flex-sub pass-list"},[t._l(t.list,(function(e){return r("div",{key:e,staticClass:"item flex aic"},[r("n-link",{attrs:{to:"/friends/"+e.applyUserId}},[r("img",{staticClass:"Avatar",attrs:{alt:"",src:"http://placekitten.com/42/42"}})]),t._v(" "),r("n-link",{attrs:{to:"/friends/"+e.applyUserId}},[r("div",{staticClass:"name"},[t._v("1号粉丝昵称")])]),t._v(" "),r("img",{attrs:{alt:"",src:n(537)}}),t._v(" "),r("div",{staticClass:"info flex-1"},[t._v("申请成为好友")]),t._v(" "),0==e.status?[r("el-button",{attrs:{round:"",size:"mini",type:"default"},on:{click:function(n){return t.Refuse(e)}}},[t._v("拒绝")]),t._v(" "),r("el-button",{attrs:{round:"",size:"mini",type:"primary"},on:{click:function(n){return t.accept(e)}}},[t._v("接受")])]:t._e(),t._v(" "),1==e.status?[r("span",{staticClass:"status"},[t._v(t._s(0==e.type?"已添加":"已同意"))])]:t._e(),t._v(" "),2==e.status?[r("span",{staticClass:"status"},[t._v("已忽略")])]:t._e(),t._v(" "),3==e.status?[r("span",{staticClass:"status"},[t._v("已过期")])]:t._e(),t._v(" "),4==e.status?[r("span",{staticClass:"status"},[t._v("已拒绝")])]:t._e()],2)})),t._v(" "),0==t.list.length?r("noData",[t._v("暂无好友申请")]):t._e()],2)],1)}),[],!1,null,"603da382",null);e.default=component.exports}}]);