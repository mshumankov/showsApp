(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{58:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=t(5),c=t.n(l),s=t(7),o=t.n(s),u=t(0),m=t.n(u),i=t(18),p=t(22),f=function(){var e=Object(u.useState)(),a=o()(e,2),t=a[0],n=a[1],r=Object(u.useState)(),l=o()(r,2),c=l[0],s=l[1],m=function(e,a){var t;return function(n){t&&(clearTimeout(t),t=null);var r=n.target.value,l=n.target.name;t=setTimeout((function(){!function(e,a,t,n){if("email"===e){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(a)?(t(a),n(void 0)):n("Enter a valid email")}if("password"===e){var r=/\d{1}/g.test(a);r||n("Password contains at least one number");var l=/[A-Z]{1}/g.test(a);l||n("Password contains at least one capital letter");var c=/^([a-zA-Z0-9]{6,20})$/g.test(a);c||n("Password is at least 6 characters without special symbols"),l&&r&&c&&(t(a),n(void 0))}}(l,r,e,a),t=null}),400)}}(n,s);return{value:t,setValue:n,error:c,setError:s,changeHandler:m}},d=t(9);a.default=function(e){var a=e.history,t=Object(u.useContext)(d.a),n=(t.state,t.dispatch,f()),l=f(),s=Object(u.useState)(""),v=o()(s,2),E=v[0],b=v[1],h=Object(u.useState)(!0),g=o()(h,2),w=g[0],N=g[1],k=Object(u.useState)(!1),j=o()(k,2),y=j[0],O=j[1],C=Object(u.useRef)(null),S=Object(u.useRef)(null),x=Object(u.useRef)(null),P=Object(u.useRef)(null),A=function(){n.error?b(n.error):l.error?b(l.error):b(null)};Object(u.useEffect)((function(){A()}),[n.error,l.error]);var H=function(){var e=c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.error||l.error||!n.value||!l.value){e.next=11;break}return e.prev=1,e.next=4,p.a.auth().signInWithEmailAndPassword(n.value,l.value);case 4:a.push("/"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),b(e.t0.message),console.log(e.t0.message);case 11:A();case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.error||l.error||!n.value||!l.value){e.next=10;break}return e.prev=1,e.next=4,p.a.auth().createUserWithEmailAndPassword(n.value,l.value);case 4:a.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:A();case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(u.Fragment,null,m.a.createElement(i.a,null),m.a.createElement("main",{className:"main"},m.a.createElement("section",{className:"content signIn-page"},m.a.createElement("div",{className:"border-wrap"},m.a.createElement("div",{className:"singIn-container"},m.a.createElement("div",{className:"btn-manu-wrap"},m.a.createElement("button",{className:w?"btn-menu active":"btn-menu",onClick:function(){N(!0),O(!1),b(null)}},"Sign in"),m.a.createElement("button",{className:y?"btn-menu active":"btn-menu",onClick:function(){O(!0),N(!1),b(null)}},"Sign up")),m.a.createElement("article",null,m.a.createElement("form",{className:w?"form active":"form"},m.a.createElement("h2",null,"Sign in to Gump"),m.a.createElement("div",{className:"form-control"},m.a.createElement("input",{type:"email",name:"email",placeholder:"E-mail",ref:C,onChange:n.changeHandler})),m.a.createElement("div",{className:"form-control"},m.a.createElement("input",{type:"password",name:"password",placeholder:"Password",ref:x,onChange:l.changeHandler})),m.a.createElement("div",{className:"error-message"},E),m.a.createElement("div",{className:"button-wrap"},m.a.createElement("button",{className:"btn-form",type:"button",onClick:H},m.a.createElement("span",null,"Sign In"))))),m.a.createElement("article",null,m.a.createElement("form",{className:y?"form active":"form"},m.a.createElement("h2",null,"Create your account"),m.a.createElement("div",{className:"form-control"},m.a.createElement("input",{type:"email",name:"email",placeholder:"E-mail",ref:S,onChange:n.changeHandler})),m.a.createElement("div",{className:"form-control"},m.a.createElement("input",{type:"password",name:"password",placeholder:"Password",ref:P,onChange:l.changeHandler})),m.a.createElement("div",{className:"error-message"},E),m.a.createElement("div",{className:"button-wrap"},m.a.createElement("button",{className:"btn-form",type:"button",onClick:I},m.a.createElement("span",null,"Sign Up"))))))))))}}}]);