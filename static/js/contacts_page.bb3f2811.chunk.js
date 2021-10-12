(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{122:function(t,e,n){"use strict";var r,a,c,o=n(127),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){c=!1}function i(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==u&&(r=u,s())}function l(){return c||(c=function(){r||i(u);for(var t,e=r.split(""),n=[],a=o.nextValue();e.length>0;)a=o.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return i(t),r},seed:function(t){o.seed(t),a!==t&&(s(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},124:function(t,e,n){t.exports={form:"ContactForm_form__2qxT4",label:"ContactForm_label__3lQ2p",input:"ContactForm_input__3q8qe",button:"ContactForm_button__2uVPp"}},125:function(t,e,n){"use strict";t.exports=n(126)},126:function(t,e,n){"use strict";var r=n(122),a=n(128),c=n(132),o=n(133)||0;function u(){return a(o)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return o=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=c},127:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},128:function(t,e,n){"use strict";var r,a,c=n(129);n(122);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=c(7),e+=c(t),r>0&&(e+=c(r)),e+=c(n)}},129:function(t,e,n){"use strict";var r=n(122),a=n(130),c=n(131);t.exports=function(t){for(var e,n=0,o="";!e;)o+=c(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return o}},130:function(t,e,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(t){return a.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},131:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),c="";;)for(var o=t(a),u=a;u--;)if((c+=e[o[u]&r]||"").length===+n)return c}},132:function(t,e,n){"use strict";var r=n(122);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},133:function(t,e,n){"use strict";t.exports=0},134:function(t,e,n){t.exports={list:"ContactList_list__2h0kF",item:"ContactList_item__2wrhb",button:"ContactList_button__1xinY"}},135:function(t,e,n){t.exports={label:"Filter_label__1IL0I",input:"Filter_input__1Crf1"}},136:function(t,e,n){t.exports={title:"App_title__12cHP"}},140:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return V}));var r=n(31),a=function(t){return t.contacts.items},c=function(t){return t.contacts.filter},o=function(t){return t.contacts.loading},u=Object(r.a)([a,c],(function(t,e){return function(t){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t)})),s=n(10),i=n(0),l=n(28),f=n(18),b=n.n(f),p=n(25),h=n(20),d=n.n(h),j=n(7),m={fetchContacts:function(){return function(){var t=Object(p.a)(b.a.mark((function t(e){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(j.i)()),t.prev=1,t.next=4,d.a.get("/contacts");case 4:n=t.sent,r=n.data,e(Object(j.j)(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(j.h)(new Error("Not found")));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(p.a)(b.a.mark((function n(r){var a,c,o;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},r(Object(j.b)()),n.prev=2,n.next=5,d.a.post("/contacts",a);case 5:c=n.sent,o=c.data,r(Object(j.c)(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r(Object(j.a)(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(p.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(j.f)()),e.prev=1,e.next=4,d.a.delete("/contacts/".concat(t));case 4:n(Object(j.g)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(j.e)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},x=n(124),v=n.n(x),O=n(1);var g=function(){var t=Object(i.useState)(""),e=Object(l.a)(t,2),n=e[0],r=e[1],c=Object(i.useState)(""),o=Object(l.a)(c,2),u=o[0],f=o[1],b=Object(s.c)(a),p=Object(s.b)(),h=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":f(a);break;default:return}},d=function(){r(""),f("")};return Object(O.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),b.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in contacts.")),void d();!function(t,e){p(m.addContact(t,e))}(n,u),d()},className:v.a.form,children:[Object(O.jsxs)("label",{className:v.a.label,children:["Name",Object(O.jsx)("input",{className:v.a.input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:h})]}),Object(O.jsxs)("label",{className:v.a.label,children:["Number",Object(O.jsx)("input",{className:v.a.input,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:h})]}),Object(O.jsx)("button",{type:"submit",className:v.a.button,children:"Add contact"})]})},w=n(125),_=n.n(w),C=n(134),k=n.n(C);function N(){var t=Object(s.c)(u),e=Object(s.b)();Object(i.useEffect)((function(){e(m.fetchContacts())}),[e]);return Object(O.jsx)("ul",{className:k.a.list,children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(O.jsxs)("li",{className:k.a.item,children:[r,": ",a,Object(O.jsx)("button",{className:k.a.button,type:"button",onClick:function(){return function(t){return e(m.deleteContact(t))}(n)},children:"Delete"})]},_.a.generate())}))})}var y=n(135),F=n.n(y);function L(){var t=Object(s.c)(c),e=Object(s.b)();return Object(O.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(O.jsx)("input",{className:F.a.input,type:"text",value:t,onChange:function(t){return e(j.d(t.target.value))}})]})}var q=n(42),A=n(136),M=n.n(A);function V(){var t=Object(s.b)(),e=Object(s.c)(o);return Object(i.useEffect)((function(){return t(m.fetchContacts())}),[t]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:M.a.title,children:"Phonebook"}),Object(O.jsx)(g,{}),Object(O.jsx)("h2",{className:M.a.title,children:"Contacts"}),Object(O.jsx)(L,{}),e&&Object(O.jsx)(q.a,{}),Object(O.jsx)(N,{})]})}}}]);
//# sourceMappingURL=contacts_page.bb3f2811.chunk.js.map