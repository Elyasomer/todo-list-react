(this["webpackJsonpcreative-name"]=this["webpackJsonpcreative-name"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),u=(n(12),n(2)),l=n(4),o=(n(13),n(14),n(0)),r=function(t){var e=t.status,n=t.display,a=[{display:"block"},{display:"none"}];return Object(o.jsxs)("div",{className:"tasks",children:[Object(o.jsx)("p",{children:t.task}),Object(o.jsx)("input",{type:"text",onChange:t.input,value:t.value,style:n?a[0]:a[1],placeholder:"Edit your task"}),Object(o.jsx)("button",{className:"completed",style:n?a[0]:a[1],onClick:t.save,children:"Save"}),Object(o.jsx)("button",{className:"edit",style:n?a[1]:a[0],onClick:t.edit,children:"Edit"}),Object(o.jsx)("button",{className:e?"completed":"pending",onClick:t.changeStatus,children:e?"Completed":"Pending"}),Object(o.jsx)("button",{className:"del",onClick:t.delete,children:"Remove"})]})};var d=function(){var t=Object(a.useState)(""),e=Object(l.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),d=(i[0],i[1],Object(a.useState)("")),j=Object(l.a)(d,2),b=j[0],p=j[1],O=Object(a.useState)([]),v=Object(l.a)(O,2),f=v[0],h=v[1],m=function(t){p(t.target.value)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("label",{htmlFor:"task",children:"Add your task"}),Object(o.jsx)("input",{name:"task",type:"text",onChange:function(t){c(t.target.value)},value:n}),Object(o.jsx)("button",{onClick:function(){return function(t){var e=[{id:(new Date).getTime(),display:!1,status:!1,task:t}].concat(Object(u.a)(f));h(e)}(n)},children:"Add your task"})]}),f.map((function(t,e){return Object(o.jsx)(r,{task:t.task,status:t.status,value:b,input:m,display:t.display,edit:function(){return function(t){var e=Object(u.a)(f);e[t].display=!0,h(e)}(e)},save:function(){return function(t,e){var n=Object(u.a)(f);n[t].task=e,n[t].display=!1,h(n),p("")}(e,b)},delete:function(){return function(t){var e=Object(u.a)(f);e.splice(t,1),h(e)}(e)},changeStatus:function(){return function(t){var e=Object(u.a)(f);e[t].status=!e[t].status,h(e)}(e)}},e)}))]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.2b324874.chunk.js.map