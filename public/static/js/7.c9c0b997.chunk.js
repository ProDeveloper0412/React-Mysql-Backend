(this["webpackJsonplearningxl-frontend"]=this["webpackJsonplearningxl-frontend"]||[]).push([[7],{424:function(e,t,c){"use strict";var s=c(34),a=c(21),n="".concat(a.a,"/watch-histories"),i={getAll:function(e){var t=e.page,c=e.perPage,a=e.userId,i="".concat(n,"?page=").concat(t,"&perPage=").concat(c);return a&&(i+="&userId=".concat(a)),s.default.get(i)},getOne:function(e){var t=e.id;return s.default.get("".concat(n,"/").concat(t))},remove:function(e){var t=e.id,c="".concat(n,"/").concat(t);return s.default.delete(c)}};t.a=i},427:function(e,t,c){"use strict";var s=c(2),a=c(3),n=c(5),i=c.n(n),r=c(1),l=c.n(r),o=c(9),j=l.a.forwardRef((function(e,t){var c=e.bsPrefix,n=e.size,r=e.toggle,j=e.vertical,d=e.className,b=e.as,u=void 0===b?"div":b,O=Object(a.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),x=Object(o.a)(c,"btn-group"),h=x;return j&&(h=x+"-vertical"),l.a.createElement(u,Object(s.a)({},O,{ref:t,className:i()(d,h,n&&x+"-"+n,r&&x+"-toggle")}))}));j.displayName="ButtonGroup",j.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=j},499:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c(8),n=c(1),i=c(15),r=c(392),l=c(35),o=c(402),j=c(400),d=c(191),b=c(137),u=c(405),O=c(427),x=c(54),h=c(415),p=c(25),f=c(26),m=c(22),g=c(16),v=c(39),N=c(424),C=c(121),k=c(0);function P(e){var t=e.addToastAction,c=e.history,i=Object(n.useState)([]),m=Object(a.a)(i,2),P=m[0],w=m[1],A=Object(n.useState)(1),S=Object(a.a)(A,2),y=S[0],I=S[1],z=Object(n.useState)(0),L=Object(a.a)(z,2),R=L[0],B=L[1],F=Object(n.useState)(null),H=Object(a.a)(F,2),V=H[0],D=H[1],E=Object(n.useState)(!1),J=Object(a.a)(E,2),G=J[0],K=J[1],T=Object(n.useState)({pagesCount:1,groupsCount:10}),U=Object(a.a)(T,2),q=U[0],M=U[1],Q=function(){N.a.getAll({page:y,perPage:q.groupsCount}).then((function(e){M(Object(s.a)(Object(s.a)({},q),{},{pagesCount:e.totalPages})),w(e.data)}))};return Object(n.useEffect)((function(){Q()}),[y,q.groupsCount]),Object(k.jsxs)(o.a,{className:"pt-4",children:[Object(k.jsx)(j.a,{children:Object(k.jsx)(d.a,{children:Object(k.jsx)(b.a,{variant:"link",onClick:function(){return c.goBack()},children:Object(k.jsx)("span",{className:"h6",children:"Back"})})})}),Object(k.jsx)(j.a,{className:"mb-5",children:Object(k.jsx)(d.a,{children:Object(k.jsx)("h1",{className:"text-center text-primary",children:"Report List"})})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"text-right",children:Object(k.jsx)("div",{className:"mb-2",children:Object(k.jsx)(u.a,{as:O.a,id:"dropdown-variants-".concat("Info"),variant:"Info".toLowerCase(),title:"Page",onChange:function(e){console.log("ad",e)},children:[10,20,50,100].map((function(e){return Object(k.jsx)(x.a.Item,{eventKey:e,onSelect:function(e){M(Object(s.a)(Object(s.a)({},q),{},{groupsCount:e}))},children:e},e)}))},"Info")})}),Object(k.jsxs)(r.a,{children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:"User name"}),Object(k.jsx)("th",{className:"text-center",children:"Video"}),Object(k.jsx)("th",{children:"Started At"}),Object(k.jsx)("th",{className:"text-center",children:"Popup Clicked"}),Object(k.jsx)("th",{className:"text-center",children:"Popup Lost"}),Object(k.jsx)("th",{className:"text-center",children:"Completed"}),Object(k.jsx)("th",{className:"text-center",children:"Actions"})]})}),Object(k.jsx)("tbody",{children:P.map((function(e,t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:t+1}),Object(k.jsx)("td",{children:Object(k.jsx)(l.b,{to:"/admin/users/view/".concat(e.user.id),title:e.user.fullName,children:e.user.fullName})}),Object(k.jsx)("td",{className:"text-center",children:Object(k.jsx)(l.b,{to:"/admin/videos/view/".concat(e.video.id),title:e.video.title,children:"".concat(e.video.title).substr(0,10)})}),Object(k.jsx)("td",{children:Object(C.b)(e.createdAt)}),Object(k.jsx)("td",{className:"text-center",children:Object(C.c)(e.popupHistories)}),Object(k.jsx)("td",{className:"text-center",children:Object(C.d)(e.popupHistories)}),Object(k.jsx)("td",{className:"text-center",children:Object(k.jsx)(p.a,{className:"cursor-pointer text-info mr-2",size:"lg","aria-disabled":!0,icon:0===Object(C.d)(e.popupHistories)&&e.isFinished?f.c:f.l,title:e.isFinished?"Clicked":"Didnt Click"})}),Object(k.jsxs)("td",{className:"text-center",children:[Object(k.jsx)(l.b,{to:"/admin/reports/view/".concat(e.id),title:"View",children:Object(k.jsx)(p.a,{className:"cursor-pointer text-info mr-2",size:"lg",icon:f.f})}),Object(k.jsx)(p.a,{className:"cursor-pointer text-danger ml-2",size:"lg",icon:f.m,onClick:function(t){K(!0),B(e.id),D(t.target)},title:"Remove"})]})]},t)}))})]}),Object(k.jsx)(j.a,{className:"justify-content-end",children:Object(k.jsx)(d.a,{children:Object(k.jsxs)(h.a,{className:"float-right",children:[Object(k.jsx)(h.a.First,{disabled:y<=1,onClick:function(){return I(1)}}),Object(k.jsx)(h.a.Prev,{disabled:y<=1,onClick:function(){return I(y-1)}}),Object(k.jsx)(h.a.Item,{active:!0,children:y}),Object(k.jsx)(h.a.Next,{disabled:y>=q.pagesCount,onClick:function(){return I(y+1)}}),Object(k.jsx)(h.a.Last,{disabled:y>=q.pagesCount,onClick:function(){return I(q.pagesCount)}})]})})})]}),Object(k.jsx)(v.a,{visible:G,target:V,setVisibility:function(){return K(!1)},label:"Are you sure to delete this report?",onConfirm:function(){N.a.remove({id:R}).then((function(e){e.success&&(t("Alert","Remove success",g.a.Success),Q())})).catch((function(e){t("Alert",e.error,g.a.Danger)}))}})]})}P.defaultProps={},t.default=Object(i.g)(Object(m.c)(Object(m.a)(P)))}}]);
//# sourceMappingURL=7.c9c0b997.chunk.js.map