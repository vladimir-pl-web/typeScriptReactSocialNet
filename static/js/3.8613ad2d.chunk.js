(this["webpackJsonpmy-social-net-type"]=this["webpackJsonpmy-social-net-type"]||[]).push([[3],{292:function(e,a,t){e.exports={Dialogs:"Dialog_Dialogs__22nJT"}},293:function(e,a,t){e.exports={Messages:"Messages_Messages__3Yj6l"}},294:function(e,a,t){e.exports={DialogsList:"DialogsList_DialogsList__3q0A_"}},299:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(292),l=t.n(r),o=t(8),c=t(10),i=t(22),u=t(124),m=t(125),g=t(37),b=t(46),f=Object(g.a)(50),p=Object(m.a)({form:"messageForm"})((function(e){var a=e.handleSubmit;return s.a.createElement("form",{onSubmit:a},s.a.createElement(u.a,{placeholder:"type your message",component:b.b,name:"newMessageText",validate:[g.b,f]}),s.a.createElement("button",null,"add post"))})),E=t(293),d=t.n(E),_=function(e){var a=e.messages,t=e.onMessageFormSubmit,n=a.map((function(e,a){var t=e.label;return s.a.createElement("li",{key:a},s.a.createElement(i.b,{to:"/"},t))}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:d.a.Messages},n),s.a.createElement(p,{onSubmit:function(e){t(e.newMessageText)}}))},v=Object(c.b)((function(e){return{messages:e.dialogs.messages}}),{onMessageFormSubmit:function(e){return{type:o.a,value:e}}})(_),y=t(9),D=t(92),M=t(294),j=t.n(M),h=function(e){var a=e.users.map((function(e,a){var t=e.label;return s.a.createElement("li",{key:a},s.a.createElement(i.b,{to:"/dialogs/".concat(a)},t))}));return s.a.createElement("ul",{className:j.a.DialogsList},a)},x=Object(y.d)(Object(c.b)((function(e){return{users:e.dialogs.users}})),D.a)(h);a.default=function(){return s.a.createElement("div",{className:l.a.Dialogs},s.a.createElement(x,null),s.a.createElement(v,null))}}}]);
//# sourceMappingURL=3.8613ad2d.chunk.js.map