exports.ids=[2],exports.modules={171:function(e,t,n){"use strict";t.a={methods:{formatW:e=>(e>=1e4&&(e=(e/1e4+.1).toFixed(1)+"W"),e),formateTime(time){time=new Date(time).getTime();const e=new Date,t=new Date(time),n=e.getTime()-time,r=parseInt(n/864e5);let o=t.getHours();o<10&&(o="0"+o);let d=t.getMinutes();if(d<10&&(d="0"+d),1===r)return"昨天"+o+":"+d;if(2===r)return r+"天前"+o+":"+d;if(r>=2){const n=t.getFullYear();let r=t.getMonth()+1;r<10&&(r="0"+r);let c=t.getDate();return c<10&&(c="0"+c),e.getFullYear()===n?r+"月"+c+"日"+o+":"+d:n+"年"+r+"月"+c+"日"+o+":"+d}const c=parseInt(n%864e5/36e5);if(c>0)return c+"小时前";const l=parseInt(n%36e5/6e4);return l>0?l+"分钟前":"刚刚"}}}},247:function(e,t,n){var content=n(315);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("20b83484",content,!0,e)}},248:function(e,t,n){var content=n(317);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("73ac2feb",content,!0,e)}},249:function(e,t,n){var content=n(319);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("34e1daba",content,!0,e)}},250:function(e,t,n){var content=n(321);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("1079997c",content,!0,e)}},314:function(e,t,n){"use strict";n.r(t);var r=n(247),o=n.n(r);for(var d in r)"default"!==d&&function(e){n.d(t,e,(function(){return r[e]}))}(d);t.default=o.a},315:function(e,t,n){(t=n(2)(!1)).push([e.i,".nowrap[data-v-14e251ea]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-info[data-v-14e251ea]{height:136px;background-size:100% 100%;position:relative;font-size:12px}.header-info .hade[data-v-14e251ea]{background:rgba(0,0,0,.3);z-index:1}.header-info .hade[data-v-14e251ea],.header-info .main[data-v-14e251ea]{width:100%;height:100%;position:absolute}.header-info .main[data-v-14e251ea]{z-index:11}.header-info .clear[data-v-14e251ea]{clear:both}.header-info ul[data-v-14e251ea]{padding:15px 0 0;margin:0}.header-info li[data-v-14e251ea]{list-style:none;width:50%;float:left;box-sizing:border-box;padding:0 0 0 20px;height:30px;line-height:40px}.header-info li i[data-v-14e251ea]{border:1px solid hsla(0,0%,100%,.5);background:hsla(0,0%,100%,.1);margin-right:5px}.header-info .name[data-v-14e251ea]{font-size:18px}.header-info .join[data-v-14e251ea]{width:50%;float:left;padding-left:20px;padding-top:15px}.header-info .join button[data-v-14e251ea]{background:#fff;width:68px;height:28px;line-height:28px;border:none;border-radius:14px;font-size:14px}.header-info .online[data-v-14e251ea]{width:50%;float:left;text-align:right;padding-right:20px;padding-top:22px}.header-info .online span[data-v-14e251ea]{opacity:.8}.header-info .online i[data-v-14e251ea]{display:inline-block;width:8px;height:8px;border-radius:4px;background:#43b581;margin-right:5px}",""]),e.exports=t},316:function(e,t,n){"use strict";n.r(t);var r=n(248),o=n.n(r);for(var d in r)"default"!==d&&function(e){n.d(t,e,(function(){return r[e]}))}(d);t.default=o.a},317:function(e,t,n){(t=n(2)(!1)).push([e.i,".nowrap[data-v-ab866200]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search[data-v-ab866200]{padding-left:10px;position:relative}.search input[data-v-ab866200]{width:220px;height:28px;background:#222428;border-radius:14px;border:none;padding-left:10px;font-size:14px;color:#72767d}.search .icon-search[data-v-ab866200]{position:absolute;right:20px;top:5px}.search .icon-search i[data-v-ab866200]{font-size:20px;color:#72767d;cursor:pointer}",""]),e.exports=t},318:function(e,t,n){"use strict";n.r(t);var r=n(249),o=n.n(r);for(var d in r)"default"!==d&&function(e){n.d(t,e,(function(){return r[e]}))}(d);t.default=o.a},319:function(e,t,n){(t=n(2)(!1)).push([e.i,".nowrap[data-v-04554358]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.community-nav-item[data-v-04554358]{height:40px;line-height:40px;font-size:14px;margin-bottom:2px}.community-nav-item a[data-v-04554358]{display:block;color:#72767d;border-radius:10px;padding-left:20px}.community-nav-item a i[data-v-04554358]{margin-right:10px;font-size:14px}.community-nav-item a[data-v-04554358]:hover{cursor:pointer}.community-nav-item .community-cur[data-v-04554358],.community-nav-item a[data-v-04554358]:hover{background:#393c43;color:#fff}",""]),e.exports=t},320:function(e,t,n){"use strict";n.r(t);var r=n(250),o=n.n(r);for(var d in r)"default"!==d&&function(e){n.d(t,e,(function(){return r[e]}))}(d);t.default=o.a},321:function(e,t,n){(t=n(2)(!1)).push([e.i,".nowrap[data-v-89f46b48]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.channel[data-v-89f46b48]{background:#2f3136;flex-shrink:222;display:flex;flex-grow:1;flex-direction:column}.channel .channel-item[data-v-89f46b48]{display:flex;width:100%}.channel .channel-left[data-v-89f46b48]{width:240px}.channel .community-search[data-v-89f46b48]{padding:20px 0}.channel .community-nav[data-v-89f46b48]{padding:0 10px}.channel .channel-center[data-v-89f46b48]{flex-grow:1;flex-shrink:222}.channel .channel-center .channel-banner[data-v-89f46b48]{height:136px;text-align:center}.channel .channel-center .channel-banner img[data-v-89f46b48]{height:136px}",""]),e.exports=t},386:function(e,t,n){"use strict";n.r(t);var r=n(4),o={name:"HeaderInfo",mixins:[n(171).a],computed:{...Object(r.mapState)("community",["headerInfo"])},methods:{}},d=n(1);var c={name:"CommunitySearch",data:()=>({key:""}),methods:{search(){this.$store.dispatch("community/searchCommunity",this.key)}}};var l={name:"CommunityNav",props:["nav"],data:()=>({}),created(){},computed:{isCur(){return this.$route.fullPath===this.nav.to}},methods:{}};var f={name:"Community",components:{HeaderInfo:Object(d.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"header-info",style:{"background-image":"url("+e.headerInfo.image+")"}},[e._ssrNode('<div class="hade" data-v-14e251ea></div><div class="main" data-v-14e251ea><ul data-v-14e251ea><li class="name" data-v-14e251ea>'+e._ssrEscape(e._s(e.headerInfo.name))+"</li><li data-v-14e251ea><i data-v-14e251ea>NN号 </i>"+e._ssrEscape(e._s(e.headerInfo.code))+"</li><li data-v-14e251ea>"+e._ssrEscape(e._s(e.formatW(e.headerInfo.member))+" 成员")+"</li><li data-v-14e251ea>"+e._ssrEscape(e._s(e.formatW(e.headerInfo.attention))+" 关注")+'</li></ul><div class="clear" data-v-14e251ea></div><div class="join" data-v-14e251ea><button data-v-14e251ea>+加入</button></div><div class="online" data-v-14e251ea><i data-v-14e251ea></i><span data-v-14e251ea>'+e._ssrEscape(e._s(e.formatW(e.headerInfo.online)))+"</span></div></div>")])}),[],!1,(function(e){var t=n(314);t.__inject__&&t.__inject__(e)}),"14e251ea","9e410f1e").exports,Search:Object(d.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"search"},[this._ssrNode('<input placeholder="搜索频道名称"'+this._ssrAttr("value",this.key)+' data-v-ab866200><div class="icon-search" data-v-ab866200><i class="bx bx-search" data-v-ab866200></i></div>')])}),[],!1,(function(e){var t=n(316);t.__inject__&&t.__inject__(e)}),"ab866200","48fbf1be").exports,Nav:Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"community-nav-item"},[t("n-link",{class:{"community-cur":this.isCur},attrs:{to:this.nav.to}},[t("i",{class:this.nav.icon}),t("span",[this._v(this._s(this.nav.title))])])],1)}),[],!1,(function(e){var t=n(318);t.__inject__&&t.__inject__(e)}),"04554358","2990457d").exports},computed:{...Object(r.mapState)("community",["mainNav","channelBanner"])}};var v=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"channel"},[e._ssrNode('<div class="channel-item" data-v-89f46b48>',"</div>",[e._ssrNode('<div class="channel-left" data-v-89f46b48>',"</div>",[n("HeaderInfo")],1),e._ssrNode('<div class="channel-center" data-v-89f46b48><div class="channel-banner" data-v-89f46b48><img'+e._ssrAttr("src",e.channelBanner)+" data-v-89f46b48></div></div>")],2),e._ssrNode('<div class="channel-item flex-sub" data-v-89f46b48>',"</div>",[e._ssrNode('<div class="channel-left" data-v-89f46b48>',"</div>",[e._ssrNode('<div class="community-search" data-v-89f46b48>',"</div>",[n("Search")],1),e._ssrNode('<div class="community-nav" data-v-89f46b48>',"</div>",e._l(e.mainNav,(function(e,t){return n("Nav",{key:t,attrs:{nav:e}})})),1)]),e._ssrNode('<div class="channel-center" data-v-89f46b48>',"</div>",[n("nuxt-child")],1)])])}),[],!1,(function(e){var t=n(320);t.__inject__&&t.__inject__(e)}),"89f46b48","2a00cbc2");t.default=v.exports}};