(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var s=c(3),n=c.n(s),a=c(4),o=(c(9),c(10),c(1)),i=c(0),r=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],s=e[1],n=Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return s("")},children:"-"}),l=function(t){return Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return s(t)},children:"+"})},d=Object(i.jsx)("h1",{className:"title is-flex is-align-items-center",children:"No goods selected"}),u=Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(c," is selected"),Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return s("")}})]}),b=c?u:d,j=r.map((function(t){return Object(i.jsxs)("tr",{"data-cy":"Good",className:t===c?"has-background-success-light":"",children:[Object(i.jsx)("td",{children:t===c?n:l(t)}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]})}));return Object(i.jsxs)("main",{className:"section container",children:[b,Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:j})})]})};n.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4717e14d.chunk.js.map