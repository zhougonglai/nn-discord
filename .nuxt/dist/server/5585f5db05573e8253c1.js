exports.ids=[29],exports.modules={131:function(t,e,n){var content=n(144);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("87628774",content,!0,t)}},132:function(t,e,n){var content=n(146);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("61eedaba",content,!0,t)}},133:function(t,e,n){var content=n(148);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("c38890f6",content,!0,t)}},143:function(t,e,n){"use strict";n.r(e);var r=n(131),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},144:function(t,e,n){(e=n(2)(!1)).push([t.i,".nowrap[data-v-7c2260e5]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}section#container[data-v-7c2260e5]{flex:1;display:flex;flex-direction:column;background-color:var(--background-primary)}section#container .user-header[data-v-7c2260e5]{height:180px;width:100%;padding-left:20px;background-color:var(--background-secondary);background-size:cover;background-repeat:no-repeat;background-position:0;display:flex;align-items:center;justify-content:flex-start;position:relative}section#container .user-editor[data-v-7c2260e5]{position:absolute;top:15px;right:15px}section#container .user-panel[data-v-7c2260e5]{width:50vw;display:flex}section#container .user-avatar[data-v-7c2260e5]{width:100px;display:flex;align-items:center;justify-content:center}section#container .user-avatar .avatar[data-v-7c2260e5]{width:90px;height:90px}section#container .user-info[data-v-7c2260e5]{display:flex;flex-wrap:wrap}section#container .user-item[data-v-7c2260e5]{flex:1 1 50%;min-height:32px;line-height:16px;display:flex;align-items:flex-end}section#container .user-nickname[data-v-7c2260e5]{font-weight:700}section#container .user-descript[data-v-7c2260e5]{font-size:small;color:#d3d3d3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),t.exports=e},145:function(t,e,n){"use strict";n.r(e);var r=n(132),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},146:function(t,e,n){(e=n(2)(!1)).push([t.i,".nowrap[data-v-b773ba24]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Rechargemask[data-v-b773ba24]{position:fixed;top:0;left:0;background:rgba(0,0,0,.5);right:0;bottom:0;z-index:1}.dialog-Recharge[data-v-b773ba24]{position:relative;z-index:99;position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);clip:rect(29px 1052px 658px 14px)}.dialog-Recharge iframe[data-v-b773ba24]{width:1056px;height:660px}.dialog-Recharge .close[data-v-b773ba24]{width:50px;height:50px;right:8px;top:30px;position:absolute;cursor:pointer}",""]),t.exports=e},147:function(t,e,n){"use strict";n.r(e);var r=n(133),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},148:function(t,e,n){(e=n(2)(!1)).push([t.i,'.nowrap[data-v-11edb8b2]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tabs[data-v-11edb8b2]{overflow:auto;flex:1;display:flex;flex-direction:column}.tab-bars[data-v-11edb8b2]{height:48px;padding:0 20px;width:100%;border-bottom:1px solid #2f3136;display:flex}.tab-bar[data-v-11edb8b2]{cursor:pointer;min-width:68px;color:var(--interactive-hover);position:relative;display:flex;align-items:center;justify-content:center;text-align:center;height:100%;overflow:hidden;transition:color .2s linear;will-change:color}.tab-bar[data-v-11edb8b2]:after{content:"";bottom:-4px;left:50%;transform:translateX(-50%);position:absolute;height:8px;border-radius:4px 4px 0 0;width:0;background-color:var(--vs-theme-color);transition:width .2s linear;will-change:width}.tab-bar.nuxt-link-active[data-v-11edb8b2]{color:var(--vs-theme-color)}.tab-bar.nuxt-link-active[data-v-11edb8b2]:after{width:56px}.tab-bar+.tab-bar[data-v-11edb8b2]{margin-left:20px}.tab-body[data-v-11edb8b2]{flex:1;display:flex;overflow:auto}.tab-tools[data-v-11edb8b2]{flex:1;justify-content:flex-end;display:flex;align-items:center}',""]),t.exports=e},151:function(t,e,n){"use strict";var r={name:"Recharge",data:()=>({src:""}),computed:{},mounted(){this.src="http://dev-box.nn.com/recharge?account_token="},methods:{}},o=n(1);var c=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Rechargemask"},[this._ssrNode('<div class="dialog-Recharge" data-v-b773ba24><iframe'+this._ssrAttr("src",this.src)+' frameborder="0" data-v-b773ba24></iframe> <div class="close" data-v-b773ba24></div></div>')])}),[],!1,(function(t){var e=n(145);e.__inject__&&e.__inject__(t)}),"b773ba24","a635172c").exports,d={name:"MeTabs",components:{[c.name]:c},data:()=>({show_Recharge:!1}),methods:{}};var l=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[t._ssrNode('<div class="tab-bars" data-v-11edb8b2>',"</div>",[n("n-link",{staticClass:"tab-bar",attrs:{to:"/me/",exact:""}},[t._v("个人中心")]),n("n-link",{staticClass:"tab-bar",attrs:{to:"/me/notice"}},[t._v("公告")]),n("n-link",{staticClass:"tab-bar",attrs:{to:"/me/Setup"}},[t._v("设置")]),n("n-link",{staticClass:"tab-bar",attrs:{to:"/me/member"}},[t._v("成员")]),n("n-link",{staticClass:"tab-bar",attrs:{to:"/me/author"}},[t._v("游戏账号授权")]),n("n-link",{staticClass:"tab-bar",attrs:{to:"/me/Dynamic"}},[t._v("动态")]),t._ssrNode('<div class="tab-tools" data-v-11edb8b2>',"</div>",[n("nn-btn",{attrs:{rund:"",size:"small"},on:{click:function(e){t.show_Recharge=!0}}},[t._v("充值")])],1)],1),t._ssrNode('<div class="tab-body" data-v-11edb8b2>',"</div>",[t._t("default")],2),t.show_Recharge?n("Recharge",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){t.show_Recharge=!1},expression:"()=>{show_Recharge=false}"}],on:{close:function(){t.show_Recharge=!1}}}):t._e()],1)}),[],!1,(function(t){var e=n(147);e.__inject__&&e.__inject__(t)}),"11edb8b2","9ad4238e");e.a=l.exports},152:function(t,e,n){"use strict";var r=n(4),o=n(9),c={name:"PageHead",components:{[o.a.name]:o.a},computed:{...Object(r.mapState)(["user"])}},d=n(1);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"container"}},[t._ssrNode('<div class="user-header" data-v-7c2260e5>',"</div>",[t._ssrNode('<div class="user-panel" data-v-7c2260e5>',"</div>",[t._ssrNode('<div class="user-avatar" data-v-7c2260e5><div class="avatar"'+t._ssrStyle(null,{"background-image":"url("+t.user.imageUrl+")"},null)+' data-v-7c2260e5></div></div><div class="user-info" data-v-7c2260e5><div class="user-item user-fans" data-v-7c2260e5>'+t._ssrEscape(t._s(t.user.fans)+"粉丝")+'</div><div class="user-item user-follow" data-v-7c2260e5>'+t._ssrEscape(t._s(t.user.follow)+"关注")+'</div><div class="user-item user-nickname" data-v-7c2260e5>'+t._ssrEscape(t._s(t.user.nickName))+'</div><div class="user-item user-memberNo" data-v-7c2260e5>'+t._ssrEscape("NNID："+t._s(t.user.nnNumber))+'</div><p class="user-descript" data-v-7c2260e5>'+t._ssrEscape(t._s(t.user.signature))+"</p></div>"),n("nn-btn",{staticClass:"user-editor",attrs:{rund:"",type:"text",size:"small"}},[t._v("编辑资料")])],2)]),t._t("default")],2)}),[],!1,(function(t){var e=n(143);e.__inject__&&e.__inject__(t)}),"7c2260e5","7f4e46d2");e.a=component.exports},293:function(t,e,n){var content=n(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("45fb5296",content,!0,t)}},294:function(t,e,n){var content=n(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("5205552b",content,!0,t)}},295:function(t,e,n){var content=n(372);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("5c7c5e71",content,!0,t)}},366:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:r,data:data,children:o=[]}=e,{class:c,staticClass:d,style:style,staticStyle:l,attrs:v={},...f}=data;return n("svg",{class:["icon",c,d],style:[style,l],attrs:Object.assign({viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22"},v),...f},o.concat([n("defs",[n("style",[r("*{user-select:text!important}")])]),n("path",{attrs:{d:"M1024 0H711.607L284.453 421.595V0H0v120.54h113.81V1024z",fill:"#FFB406"}})]))}}},367:function(t,e,n){"use strict";n.r(e);var r=n(293),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},368:function(t,e,n){(e=n(2)(!1)).push([t.i,".nowrap[data-v-96590518]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.name[data-v-96590518]{color:#50adff;cursor:pointer}.msg[data-v-96590518]{min-height:100px;padding:15px 0;color:#dcddde}.body[data-v-96590518]{margin-left:12px;flex:1}.footer[data-v-96590518]{border-bottom:1px solid #2f3136;padding-bottom:20px;margin-bottom:20px}.footer .time[data-v-96590518]{color:#72767d}.footer .Reply[data-v-96590518]{margin-left:16px;color:#50adff;cursor:pointer}.one[data-v-96590518]{margin-top:20px}.one .Avatar[data-v-96590518]{width:50px;height:50px;border-radius:50%}.two .Avatar[data-v-96590518]{width:34px;height:34px;border-radius:50%}.txt-Reply[data-v-96590518]  textarea{background:#303339}.btns[data-v-96590518]{padding:15px 0;margin-bottom:25px;color:#72767d}.btns span[data-v-96590518]{cursor:pointer}.btns .ok[data-v-96590518]{color:#50adff}",""]),t.exports=e},369:function(t,e,n){"use strict";n.r(e);var r=n(294),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},370:function(t,e,n){(e=n(2)(!1)).push([t.i,".nowrap[data-v-151eee81]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.MessageBoard[data-v-151eee81]{padding:34px 25px}.MessageBoard .title[data-v-151eee81]{color:#dcddde}",""]),t.exports=e},371:function(t,e,n){"use strict";n.r(e);var r=n(295),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},372:function(t,e,n){(e=n(2)(!1)).push([t.i,".nowrap[data-v-aa000510]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.announcement[data-v-aa000510]{color:#dcddde;padding:34px 28px 0;line-height:20px;border-bottom:1px solid #2f3136}",""]),t.exports=e},388:function(t,e,n){"use strict";n.r(e);var r=n(152),o=n(151),input=n(30),c=n.n(input),d=n(366),l={components:{VIP:n.n(d).a,[c.a.name]:c.a},props:{type:{default:"one"}},data:()=>({msg:"",showReply:!1}),computed:{},mounted(){},methods:{submit(){console.log(this.msg),this.cancel()},cancel(){this.msg="",this.showReply=!1}}},v=n(1);var f={name:"MessageBoard",components:{Item:Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex",class:[t.type]},[t._ssrNode('<img src="http://placekitten.com/40/40" class="Avatar" data-v-96590518> '),t._ssrNode('<div class="body" data-v-96590518>',"</div>",[t._ssrNode('<div class="name" data-v-96590518>',"</div>",[t._ssrNode("五五开的房间"),n("VIP",{staticStyle:{height:"16px"}})],2),t._ssrNode(' <div class="msg" data-v-96590518>\n      你这个公告写的很有水平啊~~~~\n    </div> <div class="footer" data-v-96590518><span class="time" data-v-96590518>2020-05-01 19:30</span> <span class="Reply" data-v-96590518>回复</span></div> '),t.showReply?[n("el-input",{staticClass:"txt-Reply",attrs:{autosize:{minRows:3,maxRows:6},type:"textarea",placeholder:"留言仅社区创建者及社区管理员可见",maxlength:"200","show-word-limit":"",clearable:"",resize:"none",autofocus:""},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),t._ssrNode(' <div class="btns" data-v-96590518><span class="ok mr-2" data-v-96590518>确定</span> <span data-v-96590518>取消</span></div>')]:t._e(),t._ssrNode(" "),t._t("default")],2)],2)}),[],!1,(function(t){var e=n(367);e.__inject__&&e.__inject__(t)}),"96590518","31bde816").exports},data:()=>({}),computed:{},mounted(){},methods:{}};var _=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MessageBoard"},[t._ssrNode('<div class="title" data-v-151eee81>留言板</div> '),t._l(2,(function(a){return n("Item",{key:a.id},t._l(3,(function(b){return n("Item",{key:b.id,attrs:{type:"two"}})})),1)}))],2)}),[],!1,(function(t){var e=n(369);e.__inject__&&e.__inject__(t)}),"151eee81","9999597c").exports,h={name:"Notice",components:{[r.a.name]:r.a,[o.a.name]:o.a,[_.name]:_},data:()=>({str:"本论坛规定：\n请文明发言，禁止发送不良信息，禁止刷屏，侮辱性言辞等不良行为。祝大家在彩六玩家的聚集地玩的愉快，高兴！！！\n\n特许规则：\n文字频道名称后面带*符号的禁止回复\n\n论坛规则：\n1.请勿挂人，尤其是id指向性极强的挂人\n2.请礼貌他人，友好交流\n3.禁止震惊/色情和政治性质的言论\n4.不恶意破坏\n5.信息发在正确的部分\n6.禁止广告\n7.禁止带节奏的言论\n8.不同意管理员操作请使用私人消息解决"})};var m=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("PageHead",[e("MeTabs",[e("div",{staticClass:"v-ofa full-width"},[e("div",{staticClass:"announcement"},[e("div",{staticClass:"title"},[this._v("【公告】社区规定")]),this._v(" "),e("pre",[this._v(this._s(this.str)+"\n  ")])]),this._v(" "),e("messageBoard")],1)])],1)}),[],!1,(function(t){var e=n(371);e.__inject__&&e.__inject__(t)}),"aa000510","686bdd30");e.default=m.exports}};