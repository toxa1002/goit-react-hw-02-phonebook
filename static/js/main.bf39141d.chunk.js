(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__P6R2Y",buttonForm:"ContactForm_buttonForm__1SzU4"}},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),i=(n(18),n(12)),u=n(2),s=n(3),l=n(6),m=n(5),h=n(8),b=n(9),d=n.n(b),j=n(0);function f(t){var e=t.id,n=t.name,a=t.number,r=t.onRemove;return Object(j.jsxs)("li",{className:d.a.listItem,children:[n," : ",a," ",Object(j.jsx)("button",{className:d.a.buttonDelete,onClick:function(){return r(e)},children:"delete"})]})}var p=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)(f,Object(h.a)(Object(h.a)({},t),{},{onRemove:n}),t.id)}))})},v=n(4),O=n(13),C=n(10),x=n.n(C),S=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(v.a)({},a,r))},t.handleSubmitForm=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;t.validateForm()&&(t.props.onSubmit({id:Object(O.a)(),name:a,number:r}),t.reset())},t.validateForm=function(){var e=t.state,n=e.name,a=e.number,r=t.props.onChekunike;return n&&a?r(n):(alert("Empty field! Please fill"),!1)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmitForm,children:[Object(j.jsx)("h3",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleInputChange}),Object(j.jsx)("h3",{children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"012-345-67-89",value:n,onChange:this.handleInputChange}),Object(j.jsx)("button",{className:x.a.buttonForm,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=function(t){var e=t.filter,n=t.onChange;return Object(j.jsx)("input",{type:"text",name:"filter",value:e,placeholder:"Search by contacts",onChange:function(t){var e=t.target;return n(e.value)}})},F=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleSubmitForm=function(e){t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}}))},t.handleUniceContact=function(e){var n=t.state.contacts.find((function(t){return t.name===e}));if(!n)return!n;alert("Contact is exist")},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterSearch=function(e){return t.setState({filter:e})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(S,{onSubmit:this.handleSubmitForm,onChekunike:this.handleUniceContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)("h3",{children:"Find contacts by name"}),Object(j.jsx)(g,{filter:t,onChange:this.handleFilterSearch}),Object(j.jsx)(p,{contacts:e,onRemove:this.handleRemoveContact})]})}}]),n}(a.Component),y=F;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={buttonDelete:"ContactsList_buttonDelete__23hSL",listItem:"ContactsList_listItem__3Bm7z"}}},[[20,1,2]]]);
//# sourceMappingURL=main.bf39141d.chunk.js.map