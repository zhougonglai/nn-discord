exports.ids=[20],exports.modules={131:function(e,t,r){var content=r(144);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("87628774",content,!0,e)}},132:function(e,t,r){var content=r(146);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("61eedaba",content,!0,e)}},133:function(e,t,r){var content=r(148);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("c38890f6",content,!0,e)}},143:function(e,t,r){"use strict";r.r(t);var n=r(131),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},144:function(e,t,r){(t=r(2)(!1)).push([e.i,".nowrap[data-v-7c2260e5]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}section#container[data-v-7c2260e5]{flex:1;display:flex;flex-direction:column;background-color:var(--background-primary)}section#container .user-header[data-v-7c2260e5]{height:180px;width:100%;padding-left:20px;background-color:var(--background-secondary);background-size:cover;background-repeat:no-repeat;background-position:0;display:flex;align-items:center;justify-content:flex-start;position:relative}section#container .user-editor[data-v-7c2260e5]{position:absolute;top:15px;right:15px}section#container .user-panel[data-v-7c2260e5]{width:50vw;display:flex}section#container .user-avatar[data-v-7c2260e5]{width:100px;display:flex;align-items:center;justify-content:center}section#container .user-avatar .avatar[data-v-7c2260e5]{width:90px;height:90px}section#container .user-info[data-v-7c2260e5]{display:flex;flex-wrap:wrap}section#container .user-item[data-v-7c2260e5]{flex:1 1 50%;min-height:32px;line-height:16px;display:flex;align-items:flex-end}section#container .user-nickname[data-v-7c2260e5]{font-weight:700}section#container .user-descript[data-v-7c2260e5]{font-size:small;color:#d3d3d3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),e.exports=t},145:function(e,t,r){"use strict";r.r(t);var n=r(132),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},146:function(e,t,r){(t=r(2)(!1)).push([e.i,".nowrap[data-v-b773ba24]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Rechargemask[data-v-b773ba24]{position:fixed;top:0;left:0;background:rgba(0,0,0,.5);right:0;bottom:0;z-index:1}.dialog-Recharge[data-v-b773ba24]{position:relative;z-index:99;position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);clip:rect(29px 1052px 658px 14px)}.dialog-Recharge iframe[data-v-b773ba24]{width:1056px;height:660px}.dialog-Recharge .close[data-v-b773ba24]{width:50px;height:50px;right:8px;top:30px;position:absolute;cursor:pointer}",""]),e.exports=t},147:function(e,t,r){"use strict";r.r(t);var n=r(133),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},148:function(e,t,r){(t=r(2)(!1)).push([e.i,'.nowrap[data-v-11edb8b2]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tabs[data-v-11edb8b2]{overflow:auto;flex:1;display:flex;flex-direction:column}.tab-bars[data-v-11edb8b2]{height:48px;padding:0 20px;width:100%;border-bottom:1px solid #2f3136;display:flex}.tab-bar[data-v-11edb8b2]{cursor:pointer;min-width:68px;color:var(--interactive-hover);position:relative;display:flex;align-items:center;justify-content:center;text-align:center;height:100%;overflow:hidden;transition:color .2s linear;will-change:color}.tab-bar[data-v-11edb8b2]:after{content:"";bottom:-4px;left:50%;transform:translateX(-50%);position:absolute;height:8px;border-radius:4px 4px 0 0;width:0;background-color:var(--vs-theme-color);transition:width .2s linear;will-change:width}.tab-bar.nuxt-link-active[data-v-11edb8b2]{color:var(--vs-theme-color)}.tab-bar.nuxt-link-active[data-v-11edb8b2]:after{width:56px}.tab-bar+.tab-bar[data-v-11edb8b2]{margin-left:20px}.tab-body[data-v-11edb8b2]{flex:1;display:flex;overflow:auto}.tab-tools[data-v-11edb8b2]{flex:1;justify-content:flex-end;display:flex;align-items:center}',""]),e.exports=t},151:function(e,t,r){"use strict";var n={name:"Recharge",data:()=>({src:""}),computed:{},mounted(){this.src="http://dev-box.nn.com/recharge?account_token="},methods:{}},o=r(1);var c=Object(o.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"Rechargemask"},[this._ssrNode('<div class="dialog-Recharge" data-v-b773ba24><iframe'+this._ssrAttr("src",this.src)+' frameborder="0" data-v-b773ba24></iframe> <div class="close" data-v-b773ba24></div></div>')])}),[],!1,(function(e){var t=r(145);t.__inject__&&t.__inject__(e)}),"b773ba24","a635172c").exports,d={name:"MeTabs",components:{[c.name]:c},data:()=>({show_Recharge:!1}),methods:{}};var l=Object(o.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tabs"},[e._ssrNode('<div class="tab-bars" data-v-11edb8b2>',"</div>",[r("n-link",{staticClass:"tab-bar",attrs:{to:"/me/",exact:""}},[e._v("个人中心")]),r("n-link",{staticClass:"tab-bar",attrs:{to:"/me/notice"}},[e._v("公告")]),r("n-link",{staticClass:"tab-bar",attrs:{to:"/me/Setup"}},[e._v("设置")]),r("n-link",{staticClass:"tab-bar",attrs:{to:"/me/member"}},[e._v("成员")]),r("n-link",{staticClass:"tab-bar",attrs:{to:"/me/author"}},[e._v("游戏账号授权")]),r("n-link",{staticClass:"tab-bar",attrs:{to:"/me/Dynamic"}},[e._v("动态")]),e._ssrNode('<div class="tab-tools" data-v-11edb8b2>',"</div>",[r("nn-btn",{attrs:{rund:"",size:"small"},on:{click:function(t){e.show_Recharge=!0}}},[e._v("充值")])],1)],1),e._ssrNode('<div class="tab-body" data-v-11edb8b2>',"</div>",[e._t("default")],2),e.show_Recharge?r("Recharge",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){e.show_Recharge=!1},expression:"()=>{show_Recharge=false}"}],on:{close:function(){e.show_Recharge=!1}}}):e._e()],1)}),[],!1,(function(e){var t=r(147);t.__inject__&&t.__inject__(e)}),"11edb8b2","9ad4238e");t.a=l.exports},152:function(e,t,r){"use strict";var n=r(4),o=r(9),c={name:"PageHead",components:{[o.a.name]:o.a},computed:{...Object(n.mapState)(["user"])}},d=r(1);var component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"container"}},[e._ssrNode('<div class="user-header" data-v-7c2260e5>',"</div>",[e._ssrNode('<div class="user-panel" data-v-7c2260e5>',"</div>",[e._ssrNode('<div class="user-avatar" data-v-7c2260e5><div class="avatar"'+e._ssrStyle(null,{"background-image":"url("+e.user.imageUrl+")"},null)+' data-v-7c2260e5></div></div><div class="user-info" data-v-7c2260e5><div class="user-item user-fans" data-v-7c2260e5>'+e._ssrEscape(e._s(e.user.fans)+"粉丝")+'</div><div class="user-item user-follow" data-v-7c2260e5>'+e._ssrEscape(e._s(e.user.follow)+"关注")+'</div><div class="user-item user-nickname" data-v-7c2260e5>'+e._ssrEscape(e._s(e.user.nickName))+'</div><div class="user-item user-memberNo" data-v-7c2260e5>'+e._ssrEscape("NNID："+e._s(e.user.nnNumber))+'</div><p class="user-descript" data-v-7c2260e5>'+e._ssrEscape(e._s(e.user.signature))+"</p></div>"),r("nn-btn",{staticClass:"user-editor",attrs:{rund:"",type:"text",size:"small"}},[e._v("编辑资料")])],2)]),e._t("default")],2)}),[],!1,(function(e){var t=r(143);t.__inject__&&t.__inject__(e)}),"7c2260e5","7f4e46d2");t.a=component.exports},408:function(e,t,r){"use strict";r.r(t);var n=r(152),o=r(151),c={name:"Setup",components:{[n.a.name]:n.a,[o.a.name]:o.a}},d=r(1),component=Object(d.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("PageHead",[t("MeTabs",[t("div",{staticClass:"nav-left"},[this._v("\n      ddd\n    ")]),this._v(" "),t("div",{staticClass:"right flex-sub"},[this._v("\n      ddd\n    ")])])],1)}),[],!1,null,null,"1714337d");t.default=component.exports}};