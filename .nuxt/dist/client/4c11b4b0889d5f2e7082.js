(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{409:function(t,n,o){var content=o(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("a8cb2c06",content,!0,{sourceMap:!1})},580:function(t,n,o){"use strict";var e=o(409);o.n(e).a},581:function(t,n,o){(n=o(8)(!1)).push([t.i,".nowrap[data-v-60643816]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}main#placehold[data-v-60643816]{flex:1;display:flex;align-items:center;justify-content:center;position:relative}main#placehold[data-v-60643816] svg{width:25vw;height:25vh}.sign-in[data-v-60643816]{position:absolute;top:15px;right:15px}iframe[data-v-60643816]{flex:1;width:100%;height:100%;border:none}",""]),t.exports=n},613:function(t,n,o){"use strict";o.r(n);var e={name:"Placehold",components:{Box:o(157).a},data:function(){return{dialog:{status:0,types:["","SignVerify","SignIn","SignAccount","SignUp","ForgetPassword"]}}},methods:{openSignForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.dialog.status=t}}},r=(o(580),o(2)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("main",{attrs:{id:"placehold"}},[o("el-button",{staticClass:"sign-in",on:{click:function(n){return t.openSignForm()}}},[t._v("登录")]),o("nn-dialog",{attrs:{open:t.dialog.status,clear:""},on:{"update:open":function(n){return t.$set(t.dialog,"status",n)}}},[t.dialog.status?o("Box",{attrs:{type:t.dialog.types[t.dialog.status]},on:{switchSignForm:t.openSignForm}}):t._e()],1),o("iframe",{attrs:{src:"https://www.nn.com/"}})],1)}),[],!1,null,"60643816",null);n.default=component.exports}}]);