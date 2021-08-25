(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a,r,c,o,i,u,s=n(0),b=n.n(s),l=n(8),d=n.n(l),j=(n(19),n(3)),p=n(5),f=n(13),m=Object(p.b)({name:"items",initialState:null!==(a=JSON.parse(localStorage.getItem("contactList")))&&void 0!==a?a:[],reducers:{addContact:function(t,e){return[e.payload].concat(Object(f.a)(t))},deleteContact:function(t,e){return t.filter((function(t){return t.id!==e.payload}))}}}),x=m.actions,O=x.addContact,g=x.deleteContact,h=m.reducer,v=Object(p.b)({name:"filter",initialState:"",reducers:{filter:function(t,e){return e.payload}}}),y=v.actions.filter,C={items:h,filter:v.reducer},k=Object(p.a)({reducer:C,devTools:!0}),w=n(2),S=n(4),z=S.a.div(r||(r=Object(w.a)(["\n  width: 400px;\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  padding: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n"]))),A=S.a.h1(c||(c=Object(w.a)(["\n  display: block;\n  font-size: 26px;\n  font-weight: 800;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n"]))),J=S.a.h2(o||(o=Object(w.a)(["\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: center;\n  text-transform: uppercase;\n  margin-top: 30px;\n  margin-bottom: 10px;\n"]))),L=n(11),I=n(30),Z=S.a.form(i||(i=Object(w.a)(["\n  padding: 0px;\n"]))),q=S.a.button(u||(u=Object(w.a)(["\n  background-color: #ff6b0a;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  padding: 3px 12px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  text-transform: uppercase;\n  cursor: pointer;\n"]))),B=n(1);var E,M,N,D=function(t){var e=t.text,n=t.type,a=t.onClick;return Object(B.jsx)(q,{type:n,onClick:a,children:e})},F=S.a.input(E||(E=Object(w.a)(["\n  display: block;\n  margin-top: 6px;\n  margin-bottom: 20px;\n"]))),P=S.a.label(M||(M=Object(w.a)(["\n  text-transform: capitalize;\n  font-weight: 500;\n"])));function T(t){var e=t.type,n=t.name,a=t.value,r=t.pattern,c=void 0===r?null:r,o=t.title,i=void 0===o?null:o,u=t.onChange;return Object(B.jsxs)(P,{children:[n,Object(B.jsx)(F,{type:e,name:n,value:a,pattern:c,title:i,onChange:u})]})}function $(){var t=Object(s.useState)(""),e=Object(L.a)(t,2),n=e[0],a=e[1],r=Object(s.useState)(""),c=Object(L.a)(r,2),o=c[0],i=c[1],u=Object(j.b)(),b=Object(j.c)((function(t){return t.items})),l=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":a(r);break;case"number":i(r);break;default:return}},d=function(){a(""),i("")};return Object(B.jsxs)(Z,{onSubmit:function(t){t.preventDefault();var e=Object(I.a)();b.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):u(O({name:n,number:o,id:e})),d()},children:[Object(B.jsx)(T,{type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:l}),Object(B.jsx)(T,{type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:l}),Object(B.jsx)(D,{type:"submit",text:"Add contact"})]})}var G=S.a.li(N||(N=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])));function H(t){var e=t.name,n=t.number,a=t.onClick;return Object(B.jsxs)(G,{children:[e," : ",n,Object(B.jsx)(D,{type:"button",text:"delete",onClick:a})]})}function K(){var t=Object(j.c)((function(t){return t.items})),e=Object(j.c)((function(t){return t.filter})),n=Object(j.b)();Object(s.useEffect)((function(){localStorage.setItem("contactList",JSON.stringify(t))}),[t]);var a=t.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(B.jsx)("ul",{children:a.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(B.jsx)(H,{name:a,number:r,onClick:function(){return n(g(e))}},e)}))})}function Q(){var t=Object(j.b)();return Object(B.jsx)(T,{name:"Find contacts by name",type:"text",onChange:function(e){t(y(e.target.value.toLowerCase()))}})}function R(){var t=Object(j.c)((function(t){return t.items}));return Object(B.jsxs)(z,{children:[Object(B.jsx)(A,{children:"Phonebook"}),Object(B.jsx)($,{}),0!==t.length&&Object(B.jsx)(J,{children:"Contacts"}),0!==t.length&&Object(B.jsx)(Q,{}),Object(B.jsx)(K,{})]})}d.a.render(Object(B.jsx)(b.a.StrictMode,{children:Object(B.jsx)(j.a,{store:k,children:Object(B.jsx)(R,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.7c41acf9.chunk.js.map