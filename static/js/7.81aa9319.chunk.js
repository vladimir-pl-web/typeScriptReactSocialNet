(this["webpackJsonpmy-social-net-type"]=this["webpackJsonpmy-social-net-type"]||[]).push([[7],{291:function(e,t,n){e.exports={Users:"Users_Users__24UPi",UsersItem:"Users_UsersItem__28izy",Img:"Users_Img__zzWN5",Buttons:"Users_Buttons__34myk",Content:"Users_Content__2NHVS",Address:"Users_Address__16RJi",pageLink:"Users_pageLink__1jW0F"}},300:function(e,t,n){"use strict";n.r(t);var a=n(10),s=n(9),r=n(20),o=n(8),i=function(e){return{type:o.c,id:e}},c=function(e){return{type:o.e,id:e}},l=function(e){return{type:o.m,users:e}},u=function(e){return{type:o.i,page:e}},f=function(e){return{type:o.l,total:e}},m=function(e){return{type:o.j,pagination:e}},p=function(e){return{type:o.o,isFetching:e}},g=function(e,t){return{type:o.n,isFetchingFollow:e,userId:t}},d=n(92),b=n(41),h=n(33),U=n(34),E=n(36),_=n(35),y=n(0),v=n.n(y),k=n(23),w=n(123),P=n.n(w),j=n(291),C=n.n(j),O=function(e){for(var t=e.users,n=e.nofollowUser,a=e.followUser,s=e.pages,r=e.onPageSet,o=e.total,i=e.pagination,c=e.setPagination,l=e.followInProgress,u=Math.ceil(o/s),f=[],m=function(e){var t=v.a.createElement("span",{className:C.a.pageLink,onClick:function(){return r(e)}},e);f.push(t)},p=1;p<=u;p++)m(p);var g=[].concat(f).splice(i,10),d=function(e){"back"===e&&c(i-10),"forward"===e&&c(i+10)},b=t.map((function(e){var t=e.name,s=e.id,r=e.photos,o=e.followed,i=e.status;return v.a.createElement("li",{className:C.a.UsersItem,key:s},v.a.createElement(k.c,{to:"/profile/"+s},v.a.createElement("img",{className:C.a.Img,src:r.small?r.small:P.a,alt:"Ava"})),v.a.createElement("div",{className:C.a.Buttons},o?v.a.createElement("button",{disabled:l.some((function(e){return e===s})),onClick:function(){return n(s)}},"Nofollow"):v.a.createElement("button",{disabled:l.some((function(e){return e===s})),onClick:function(){return a(s)}},"Follow")),v.a.createElement("div",{className:C.a.Content},v.a.createElement("h4",null,t),v.a.createElement("div",null,i)),v.a.createElement("div",{className:C.a.Address},v.a.createElement("div",null,"country"),v.a.createElement("div",null,"city")))}));return v.a.createElement("div",{className:C.a.Users},v.a.createElement("h2",null,"Users"),v.a.createElement("ul",null,b),v.a.createElement("div",null,v.a.createElement("button",{onClick:function(){return d("back")}},"back"),g,v.a.createElement("button",{onClick:function(){return d("forward")}},"forward")))},I=n(63),N=function(e){Object(E.a)(n,e);var t=Object(_.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.initialPage)}},{key:"render",value:function(){var e=this,t=this.props,n=t.setPage,a=t.isFetching,s=Object(b.a)(t,["setPage","isFetching"]);return a?v.a.createElement(I.a,null):v.a.createElement(O,Object.assign({onPageSet:function(t){n(t),e.props.getUsers(t)}},s))}}]),n}(v.a.Component),F=u,A=m,z=Object(s.d)(Object(a.b)((function(e){return{users:e.users.users,pages:e.users.pageCount,initialPage:e.users.initialPage,total:e.users.total,pagination:e.users.initialPagination,isFetching:e.users.isFetching,followInProgress:e.users.followInProgress}}),{followUser:function(e){return function(t){t(g(!0,e)),Object(r.b)(e).then((function(n){0===n.resultCode&&(console.log(n.data),t(i(e))),t(g(!1,e))}))}},nofollowUser:function(e){return function(t){t(g(!0,e)),Object(r.h)(e).then((function(n){0===n.resultCode&&t(c(e)),t(g(!1,e))}))}},setPage:F,getUsers:function(e){return function(t){t(p(!0)),Object(r.c)(e).then((function(e){t(f(e.totalCount)),t(l(e.items)),t(p(!1))}))}},setPagination:A}),d.a)(N);t.default=z}}]);
//# sourceMappingURL=7.81aa9319.chunk.js.map