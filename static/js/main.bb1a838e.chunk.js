(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,function(e,t,n){e.exports={headerWrapper:"pages_headerWrapper__1CVas",nav:"pages_nav__3ZeDw",navActive:"pages_navActive__XXF5Q",burger:"pages_burger__Thn9d",link:"pages_link__EIphy",active:"pages_active__12AVr",errorContainer:"pages_errorContainer__3-zR7"}},,,,,,,,function(e,t,n){e.exports={messages:"Message_messages__2n2dD",avatar:"Message_avatar__2nSEq",message_wrapper:"Message_message_wrapper__1xfnD",name:"Message_name__o13R_",message:"Message_message__31vgz",time:"Message_time__1DVTp"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__vBSr_",underline:"SuperInputText_underline__1vZIL",errorInput:"SuperInputText_errorInput__1UH5W",shake:"SuperInputText_shake__2qUP4",error:"SuperInputText_error__1Svm_"}},,function(e,t,n){e.exports={affairItem:"Affair_affairItem__3YPRH",priority:"Affair_priority__1Of33",buttonDel:"Affair_buttonDel__1elVX"}},,,,function(e,t,n){e.exports={someClass:"Greeting_someClass__1MfBB",error:"Greeting_error__1diVU"}},function(e,t,n){e.exports={blue:"HW4_blue__1TLdM",column:"HW4_column__tLC-I",testSpanError:"HW4_testSpanError__1Y6m8"}},function(e,t,n){e.exports={default:"SuperButton_default__3ptnc",red:"SuperButton_red__3VBmv"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2Jr0M",spanClassName:"SuperCheckbox_spanClassName__3ybP8"}},,,function(e,t,n){e.exports={App:"App_App__2VJ9N"}},,,function(e,t,n){e.exports={buttonContainer:"Affairs_buttonContainer__3FPsw"}},function(e,t,n){e.exports={superSpan:"SuperEditableSpan_superSpan__19O2r"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(27),s=n.n(c),i=(n(38),n(28)),o=n.n(i),j=n(2),u=n(11),l=n(5),b=n.n(l),d=n(0);function O(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:b.a.burger,onClick:function(){return e.setActive(!e.active)},children:Object(d.jsx)("span",{})})})}var h=function(e){Object.assign({},e);var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],s="".concat(a?b.a.navActive:b.a.nav);return Object(d.jsxs)("div",{className:b.a.headerWrapper,children:[Object(d.jsx)(O,{active:a,setActive:c}),Object(d.jsxs)("div",{className:s,children:[Object(d.jsx)("div",{className:b.a.link,children:Object(d.jsx)(u.b,{to:"/pre-junior",activeClassName:b.a.active,children:"PRE_JUNIOR"})}),Object(d.jsx)("div",{className:b.a.link,children:Object(d.jsx)(u.b,{to:"/junior",activeClassName:b.a.active,children:"JUNIOR"})}),Object(d.jsx)("div",{className:b.a.link,children:Object(d.jsx)(u.b,{to:"/junior-plus",activeClassName:b.a.active,children:"JUNIOR+"})})]})]})},x=n(3),p=n(13),m=n.n(p);var f=function(e){return Object(d.jsxs)("div",{className:m.a.messages,children:[Object(d.jsx)("div",{className:m.a.avatar,children:Object(d.jsx)("img",{src:e.avatar})}),Object(d.jsxs)("div",{className:m.a.message_wrapper,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:m.a.name,children:e.name}),Object(d.jsx)("p",{className:m.a.message,children:e.message})]}),Object(d.jsx)("p",{className:m.a.time,children:e.time})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",g="NPM Start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",C="22:00";var k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(f,{avatar:v,name:_,message:g,time:C}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},N=n(18),S=n.n(N);var y=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:S.a.affairItem,children:e.affair.name}),Object(d.jsx)("span",{className:S.a.priority,children:e.affair.priority}),Object(d.jsx)("button",{className:S.a.buttonDel,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},w=n(31),I=n.n(w);var A=function(e){var t=e.data.map((function(t){return Object(d.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsxs)("div",{className:I.a.buttonContainer,children:[Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})]})},E=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(r.useState)(E),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],u=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):[]}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(A,{data:u,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},F=n(33),M=n(22),P=n.n(M),B=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onEnter,i=a?P.a.error:P.a.input;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s}),Object(d.jsx)("span",{children:a}),Object(d.jsx)("button",{onClick:r,disabled:!t,children:"add"}),Object(d.jsx)("span",{children:c})]})},U=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(j.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),u=Object(j.a)(o,2),l=u[0],b=u[1],O=function(){s&&(n(s),alert("hello ".concat(s,"!")),i(""))},h=t.length;return Object(d.jsx)(B,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):(i(""),b("name is required"))},addUser:O,onEnter:function(e){"Enter"===e.key&&s&&O()},error:l,totalUsers:h})},D=n(47);var W=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(U,{users:n,addUserCallback:function(e){var t={_id:Object(D.a)(),name:e};a([].concat(Object(F.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},J=n(8),R=n(7),H=n(16),V=n.n(H),L=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],X=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(R.a)(e,L),j="".concat(V.a.error," ").concat(i||""),u="".concat(V.a.superInput," ").concat(c?V.a.errorInput:V.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(J.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:u},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},q=n(23),K=n.n(q),z=n(24),G=n.n(z),Y=["red","className"],Z=function(e){var t=e.red,n=e.className,r=Object(R.a)(e,Y),a="".concat(t?G.a.red:G.a.default," ").concat(n);return Object(d.jsx)("button",Object(J.a)({className:a},r))},Q=n(25),$=n.n(Q),ee=["type","onChange","onChangeChecked","className","spanClassName","children"],te=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(R.a)(e,ee),s="".concat($.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(J.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(d.jsx)("span",{className:$.a.spanClassName,children:a})]})};var ne=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=n?"":"enter your text",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(j.a)(i,2),u=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:K.a.column,children:[Object(d.jsx)(X,{value:n,onChangeText:a,onEnter:s,error:c}),Object(d.jsx)(X,{className:K.a.blue}),Object(d.jsx)(Z,{children:"default"}),Object(d.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(Z,{disabled:!0,children:"disabled"}),Object(d.jsx)(te,{checked:u,onChangeChecked:l,children:"some text "}),Object(d.jsx)(te,{checked:u,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},re=n(32),ae=n.n(re),ce=["autoFocus","onBlur","onEnter","spanProps"],se=["children","onDoubleClick","className"],ie=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(R.a)(e,ce),s=Object(r.useState)(!1),i=Object(j.a)(s,2),o=i[0],u=i[1],l=a||{},b=l.children,O=l.onDoubleClick,h=l.className,x=Object(R.a)(l,se),p="".concat(ae.a.superSpan," ").concat(h);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(X,Object(J.a)({autoFocus:!0,onBlur:function(e){u(!1),t&&t(e)},onEnter:function(){u(!1),n&&n()}},c)):Object(d.jsxs)("span",Object(J.a)(Object(J.a)({onDoubleClick:function(e){u(!0),O&&O(e)},className:p},x),{},{children:["\ud83d\udd89 ",b||c.value]}))})};function oe(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}oe("test",{x:"A",y:1});!function(e,t){var n=t,r=localStorage.getItem(e);null!==r&&(n=JSON.parse(r))}("test",{x:"",y:0});var je=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(ie,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(Z,{onClick:function(){oe("editable-span-value",n)},children:"save"}),Object(d.jsx)(Z,{onClick:function(){a(n)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ue=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),Object(d.jsx)(T,{}),Object(d.jsx)(W,{}),Object(d.jsx)(ne,{}),Object(d.jsx)(je,{})]})},le=["options","onChange","onChangeOption"],be=function(e){e.options,e.onChange,e.onChangeOption;var t=Object(R.a)(e,le);return Object(d.jsx)("select",Object(J.a)(Object(J.a)({onChange:function(e){}},t),{},{children:[]}))},de=["type","name","options","value","onChange","onChangeOption"],Oe=function(e){e.type;var t=e.name,n=e.options,r=(e.value,e.onChange,e.onChangeOption,Object(R.a)(e,de),n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio"}),e]},t+"-"+n)})):[]);return Object(d.jsx)(d.Fragment,{children:r})},he=["x","y","z"];var xe=function(){var e=Object(r.useState)(he[1]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(be,{options:he,value:n,onChangeOption:a})}),Object(d.jsx)("div",{children:Object(d.jsx)(Oe,{name:"radio",options:he,value:n,onChangeOption:a})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};function pe(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(je,{}),Object(d.jsx)(xe,{})]})}var me=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var fe=function(){var e=Object(r.useState)(me),t=Object(j.a)(e,2),n=t[0],a=t[1],c=n.map((function(e){return Object(d.jsx)("div",{children:"some name, age"},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",c,Object(d.jsx)("div",{children:Object(d.jsx)(Z,{onClick:function(){return a(function(e,t){return t.type,e}(me,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(d.jsx)("div",{children:"sort down"}),"check 18",Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ve=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),n=(t[0],t[1]),a=Object(r.useState)(),c=Object(j.a)(a,2),s=(c[0],c[1],Object(r.useState)(!1)),i=Object(j.a)(s,2),o=i[0],u=(i[1],function(){});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){},onMouseLeave:function(){},children:"Time"}),o&&Object(d.jsx)("div",{children:"Date"}),Object(d.jsx)(Z,{onClick:function(){var e=window.setInterval((function(){}),1e3);n(e)},children:"start"}),Object(d.jsx)(Z,{onClick:u,children:"stop"})]})};var _e=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(ve,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};function ge(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(fe,{}),Object(d.jsx)(_e,{})]})}var Ce=function(){return Object(d.jsx)("div",{className:b.a.errorContainer})},ke="/pre-junior",Ne="/junior",Se="/junior-plus";var ye=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(x.d,{children:[Object(d.jsx)(x.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(x.a,{to:ke})}}),Object(d.jsx)(x.b,{path:ke,render:function(){return Object(d.jsx)(ue,{})}}),Object(d.jsx)(x.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(x.a,{to:Ne})}}),Object(d.jsx)(x.b,{path:Ne,render:function(){return Object(d.jsx)(pe,{})}}),Object(d.jsx)(x.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(x.a,{to:Se})}}),Object(d.jsx)(x.b,{path:Se,render:function(){return Object(d.jsx)(ge,{})}}),"// add routes",Object(d.jsx)(x.b,{render:function(){return Object(d.jsx)(Ce,{})}})]})})};var we=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(ye,{})]})})};var Ie=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(we,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(Ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[45,1,2]]]);
//# sourceMappingURL=main.bb1a838e.chunk.js.map