(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{199:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(80),a=n.n(s),i=n(7),r=(n(199),n(191)),d=n(192),l=n(119),j=n.n(l),u=n(177),b=n(190),f=n(370),O=n(371),h=(n(365),n(372)),p=n(373),x=n(31),m=n(1);var g=function(e){var t=e.socket,n=e.username,o=Object(c.useState)(""),s=Object(i.a)(o,2),a=s[0],r=s[1],l=Object(c.useState)([]),g=Object(i.a)(l,2),v=g[0],k=g[1],y=Object(c.useState)({}),C=Object(i.a)(y,2),T=C[0],S=C[1],N=Object(c.useState)([]),E=Object(i.a)(N,2),w=E[0],I=E[1],F=Object(c.useState)({}),L=Object(i.a)(F,2),A=L[0],P=L[1],R=Object(c.useState)(null),U=Object(i.a)(R,2),K=U[0],D=U[1],H=Object(c.useState)(1),J=Object(i.a)(H,2),z=J[0],B=J[1];T==={}&&t.emit("TRUCKS");var X=function(){var e=Object(u.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a){e.next=4;break}return c={message:a,name:n},e.next=4,t.emit("CHAT",c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var n={code:e};console.log("soyyo"),console.log(e),t.emit("FIX",n)};return Object(c.useEffect)((function(){return t.on("POSITION",(function(e){if(Object.keys(T).length){var t=T;if(t[e.code].position=e.position,e.code in A)A[e.code].setLatLng(e.position);else{var n=A;n[e.code]=x.marker(e.position).addTo(K).bindPopup(e.code),n[e.code].on("mouseover",(function(t){n[e.code].openPopup()})),P(n)}S(t)}})),function(){t.off("POSITION")}}),[T,A]),Object(c.useEffect)((function(){return t.on("FIX",(function(e){if(Object.keys(T).length){var t,n=T;"Ok"!==(null===(t=n[e.code])||void 0===t?void 0:t.states)&&(n[e.code].states="Ok",S(n),console.log(n[e.code].states))}})),function(){t.off("FIX")}}),[T]),Object(c.useEffect)((function(){return t.on("FAILURE",(function(e){if(Object.keys(T).length){var t,n=T;(null===(t=n[e.code])||void 0===t?void 0:t.states)!==e.source&&(n[e.code].states=e.source,S(n),console.log(e))}})),function(){t.off("FAILURE")}}),[T]),Object(c.useEffect)((function(){return t.on("CHAT",(function(e){k((function(t){return[].concat(Object(d.a)(t),[e])}))})),function(){t.off("CHAT")}}),[t]),Object(c.useEffect)((function(){return t.once("TRUCKS",(function(e){if(1===z){var t={};e.forEach((function(e){e.states="Ok",t[e.code]=e})),I(e),S(t),w.forEach((function(e){var t=x.polyline([e.origin,e.destination],{}).addTo(K);x.polylineDecorator(t,{patterns:[{offset:"10%",repeat:"30%",symbol:x.Symbol.arrowHead({pixelSize:15,pathOptions:{fillOpacity:1,weight:0}})}]}).addTo(K),1===z&&(K.panTo(new x.LatLng(e.origin[0],e.origin[1])),B(2))}))}})),function(){t.off("TRUCKS")}}),[T,w,z]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a,{center:[-33.27,-70.4],zoom:10,whenCreated:D,children:Object(m.jsx)(O.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})}),Object(m.jsxs)("div",{className:"chat-window",children:[Object(m.jsx)("div",{className:"chat-header",children:Object(m.jsx)("p",{children:"Centro de Control"})}),Object(m.jsx)("div",{className:"chat-body",children:Object(m.jsx)(b.a,{className:"message-container",children:v.map((function(e){return Object(m.jsx)("div",{className:"message",id:n===e.name?"you":"other",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"message-content",children:Object(m.jsx)("p",{children:e.message})}),Object(m.jsxs)("div",{className:"message-meta",children:[Object(m.jsx)("p",{id:"date",children:Date(e.date).substring(0,21)}),Object(m.jsx)("p",{id:"name",children:e.name})]})]})})}))})}),Object(m.jsxs)("div",{className:"chat-footer",children:[Object(m.jsx)("input",{type:"text",value:a,placeholder:"Escribe algo...",onChange:function(e){r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&X()}}),Object(m.jsx)("button",{onClick:X,children:"\u25ba"})]})]}),Object(m.jsx)("div",{class:"card-group",id:"cardis",children:Object.values(T).map((function(e,t){if("Ok"!==e.states)var n="#ffb3b3";else n="#d6f5d6";return Object(m.jsx)(h.a,{style:{width:"18rem",background:n},className:"box",children:Object(m.jsxs)(h.a.Body,{children:[Object(m.jsxs)(h.a.Title,{children:["Cami\xf3n ",e.code]}),Object(m.jsxs)(h.a.Text,{children:["Origen: ",e.origin]}),Object(m.jsxs)(h.a.Text,{children:["Destino: ",e.destination]}),Object(m.jsxs)(h.a.Text,{children:["Estado: ",null===e||void 0===e?void 0:e.states]}),Object(m.jsxs)(h.a.Text,{children:["Capacidad: ",e.capacity]}),Object(m.jsxs)(h.a.Text,{children:["Engine: ",e.engine]}),Object(m.jsxs)(h.a.Text,{children:["Staff: ",JSON.stringify(e.staff[0],null,4)]}),Object(m.jsxs)(h.a.Text,{children:["Truck: ",e.truck]}),"Ok"!==(null===e||void 0===e?void 0:e.states)&&Object(m.jsx)(p.a,{onClick:function(){return M(null===e||void 0===e?void 0:e.code)},variant:"primary",children:"Arreglar"})]})},t)}))})]})},v=(n(367),Object(r.a)("https://tarea-3-websocket.2021-2.tallerdeintegracion.cl",{path:"/trucks/"}));v.on("connect_error",(function(e){console.log("connect_error due to ".concat(e.message))}));var k=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(!1),a=Object(i.a)(s,2),r=a[0],d=a[1];return v.emit("TRUCKS"),Object(m.jsx)("div",{className:"App",children:r?Object(m.jsx)(g,{socket:v,username:n}):Object(m.jsxs)("div",{className:"joinChatContainer",children:[Object(m.jsx)("h3",{children:"Control de Camiones"}),Object(m.jsx)("input",{type:"text",placeholder:"Nombre o Nickname...",onChange:function(e){o(e.target.value)}}),Object(m.jsx)("button",{onClick:function(){""!==n&&d(!0)},children:"Join"})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,374)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),y()}},[[368,1,2]]]);
//# sourceMappingURL=main.091882d8.chunk.js.map