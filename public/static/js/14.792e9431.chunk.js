(this["webpackJsonplearningxl-frontend"]=this["webpackJsonplearningxl-frontend"]||[]).push([[14],{497:function(e,a,r){"use strict";r.r(a);var n=r(38),t=r(7),s=r(8),c=r(1),l=r.n(c),i=r(15),d=r(402),o=r(400),j=r(191),u=r(137),b=r(409),m=r(22),f=r(16),O=r(30),p=r(141),h=r(121),v=r(0);function w(e){var a=e.history,r=e.addToastAction,i=e.match,m=Object(c.useState)((function(){return i.params.id})),w=Object(s.a)(m,2),x=w[0],g=(w[1],Object(c.useState)({gender:"",fullName:"",password:"",confirmPassword:"",email:""})),P=Object(s.a)(g,2),C=P[0],N=P[1],y=Object(c.useState)({gender:"",fullName:"",password:"",confirmPassword:"",email:"",validated:!1}),k=Object(s.a)(y,2),F=k[0],E=k[1],S=Object(c.useState)([]),G=Object(s.a)(S,2),L=G[0],q=G[1];Object(c.useEffect)((function(){var e=[];for(var a in O.a)if(Object.hasOwnProperty.call(O.a,a)){var r=O.a[a];e.push({id:r,name:Object(h.a)(r)})}q(e),N(Object(t.a)(Object(t.a)({},C),{},{gender:e[0].id}))}),[O.a]),Object(c.useEffect)((function(){x&&p.a.getOne({id:x}).then((function(e){N(e.data)}),(function(e){return r("Loading Video faild",e.error,f.a.Danger)}))}),[x]);var D=function(e,a){N(Object(t.a)(Object(t.a)({},C),{},Object(n.a)({},a,e)))},I=function(e){e.preventDefault(),e.stopPropagation();var a=R(),n=a.newValidationErrors,s=a.invalid;E(Object(t.a)(Object(t.a)({},n),{},{validated:!0})),s||(x?p.a.updateOne(Object(t.a)({id:x},C)).then((function(e){e.success&&r("Congrationations","You have successfully updated.",f.a.Success)}),(function(e){return r(" ".concat(e.error),e.message,f.a.Danger)})):p.a.createOne({email:C.email,fullName:C.fullName,gender:C.gender,password:C.password}).then((function(e){r("Congrationations","You have successfully registered a new account.",f.a.Success)}),(function(e){return r(" ".concat(e.error),e.message,f.a.Danger)})))},R=function(){var e={email:"",fullName:"",gender:"",password:"",confirmPassword:""},a=!0;return C.email?Object(h.g)(C.email)||(e.email="Please enter valid email",a=!1):(e.email="Please enter an email",a=!1),C.fullName||(e.fullName="Please enter Full name",a=!1),C.gender||(e.gender="Please select your gender",a=!1),x||(C.password||(e.password="Please enter password",a=!1),C.confirmPassword?C.confirmPassword!==C.password&&(e.confirmPassword="Different password detected",a=!1):(e.confirmPassword="Please enter password",a=!1)),{newValidationErrors:e,invalid:!a}};return Object(v.jsxs)(d.a,{children:[Object(v.jsx)(o.a,{children:Object(v.jsx)(j.a,{children:Object(v.jsx)(u.a,{variant:"link",onClick:function(){return a.goBack()},children:Object(v.jsx)("span",{className:"h6",children:"Back"})})})}),Object(v.jsx)(o.a,{className:"mb-5",children:Object(v.jsx)(j.a,{children:Object(v.jsx)("h1",{className:"text-primary text-center",children:"".concat(x?"Update User info":"Add a new user")})})}),Object(v.jsxs)(b.a,{validated:F.validated,onSubmit:I,children:[Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"Email address"}),Object(v.jsx)(b.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:C.email,isInvalid:!!F.email,onChange:function(e){return D(e.target.value,"email")}}),Object(v.jsx)(b.a.Control.Feedback,{type:F.email?"invalid":"valid",children:F.email})]}),Object(v.jsx)(b.a.Row,{children:Object(v.jsx)(j.a,{md:12,children:Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"Full Name"}),Object(v.jsx)(b.a.Control,{required:!0,type:"text",placeholder:"Enter Full Name",value:C.fullName,isInvalid:!!F.fullName,onChange:function(e){return D(e.target.value,"fullName")}}),Object(v.jsx)(b.a.Control.Feedback,{type:F.fullName?"invalid":"valid",children:F.fullName})]})})}),Object(v.jsx)(b.a.Row,{children:Object(v.jsx)(j.a,{xl:12,md:12,children:Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"Gender"}),Object(v.jsx)(b.a.Control,{required:!0,as:"select",value:C.gender,isInvalid:!!F.gender,onChange:function(e){return D(e.target.value,"gender")},children:L.map((function(e){return Object(v.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(v.jsx)(b.a.Control.Feedback,{type:F.gender?"invalid":"valid",children:F.gender})]})})}),!x&&Object(v.jsxs)(l.a.Fragment,{children:[Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"Password"}),Object(v.jsx)(b.a.Control,{required:!0,type:"password",placeholder:"Password",value:C.password,isInvalid:!!F.password,onChange:function(e){return D(e.target.value,"password")}}),Object(v.jsx)(b.a.Control.Feedback,{type:F.password?"invalid":"valid",children:F.password})]}),Object(v.jsxs)(b.a.Group,{children:[Object(v.jsx)(b.a.Label,{children:"Confirm Password"}),Object(v.jsx)(b.a.Control,{required:!0,type:"password",placeholder:"Confirm Password",value:C.confirmPassword,isInvalid:!!F.confirmPassword,onChange:function(e){return D(e.target.value,"confirmPassword")}}),Object(v.jsx)(b.a.Control.Feedback,{type:F.confirmPassword?"invalid":"valid",children:F.confirmPassword})]})]}),Object(v.jsx)(b.a.Row,{className:"justify-content-end",children:Object(v.jsx)(u.a,{className:"ml-3",variant:"primary",type:"submit",onClick:I,children:"".concat(x?"Update":"Register")})})]})]})}w.defaultProps={id:0},a.default=Object(i.g)(Object(m.c)(Object(m.a)(w)))}}]);
//# sourceMappingURL=14.792e9431.chunk.js.map