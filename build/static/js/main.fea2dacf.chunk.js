(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{39:function(e,t,n){e.exports=n(51)},51:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),u=n(35),o=n(21);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"))};var m=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},E=n(32),f=n.n(E);var s=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(f.a,null)))},p=n(27),v=n(34),d=n.n(v),b=n(68),h=n(69);var j=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function f(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(p.a)(Object(p.a)({},e),{},{[n]:a})}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r?l.a.createElement("input",{name:"title",onChange:f,value:m.title,placeholder:"Title"}):null,l.a.createElement("textarea",{onClick:function(){c(!0)},name:"content",onChange:f,value:m.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(h.a,{in:r},l.a.createElement(b.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(d.a,null)))))};var O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(j,{onAdd:function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(s,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(m,null))};c.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fea2dacf.chunk.js.map