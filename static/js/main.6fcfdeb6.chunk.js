(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{199:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(80),s=n.n(a),o=n(7),r=(n(199),n(191)),l=n(192),d=n(119),j=n.n(d),u=n(177),b=n(190),f=n(370),h=n(371),O=(n(365),n(372)),m=n(373),p=n(31),x=n(1);var g=function(e){var t=e.socket,n=e.username,i=Object(c.useState)(""),a=Object(o.a)(i,2),s=a[0],r=a[1],d=Object(c.useState)([]),g=Object(o.a)(d,2),v=g[0],y=g[1],k=Object(c.useState)({}),C=Object(o.a)(k,2),T=C[0],S=C[1],N=Object(c.useState)([]),E=Object(o.a)(N,2),w=E[0],I=E[1],F=Object(c.useState)({}),L=Object(o.a)(F,2),A=L[0],P=L[1],R=Object(c.useState)(null),U=Object(o.a)(R,2),K=U[0],D=U[1],H=Object(c.useState)(1),z=Object(o.a)(H,2),B=z[0],J=z[1];T==={}&&t.emit("TRUCKS");var X=function(){var e=Object(u.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===s){e.next=4;break}return c={message:s,name:n},e.next=4,t.emit("CHAT",c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var n={code:e};t.emit("FIX",n)};return Object(c.useEffect)((function(){return t.on("POSITION",(function(e){if(Object.keys(T).length){var t=T;if(t[e.code].position=e.position,e.code in A)A[e.code].setLatLng(e.position);else{var n=A;n[e.code]=p.marker(e.position).addTo(K).bindPopup(e.code),n[e.code].on("mouseover",(function(t){n[e.code].openPopup()})),P(n)}S(t)}})),function(){t.off("POSITION")}}),[T,A]),Object(c.useEffect)((function(){return t.on("FIX",(function(e){if(Object.keys(T).length){var t,n=T;"Ok"!==(null===(t=n[e.code])||void 0===t?void 0:t.states)&&(n[e.code].states="Ok",S(n),J(B-1))}})),function(){t.off("FIX")}}),[T,t]),Object(c.useEffect)((function(){return t.on("FAILURE",(function(e){if(Object.keys(T).length){var t,n=T;(null===(t=n[e.code])||void 0===t?void 0:t.states)!==e.source&&(n[e.code].states=e.source,S(n),J(B+1))}})),function(){t.off("FAILURE")}}),[T,t]),Object(c.useEffect)((function(){return t.on("CHAT",(function(e){y((function(t){return[].concat(Object(l.a)(t),[e])}))})),function(){t.off("CHAT")}}),[t]),Object(c.useEffect)((function(){return t.once("TRUCKS",(function(e){if(1===B){var t={};e.forEach((function(e){e.states="Ok",t[e.code]=e})),I(e),S(t),w.forEach((function(e){var t=p.polyline([e.origin,e.destination],{}).addTo(K);p.polylineDecorator(t,{patterns:[{offset:"10%",repeat:"30%",symbol:p.Symbol.arrowHead({pixelSize:15,pathOptions:{fillOpacity:1,weight:0}})}]}).addTo(K),1===B&&(K.panTo(new p.LatLng(e.origin[0],e.origin[1])),J(2))}))}})),function(){t.off("TRUCKS")}}),[T,w,B]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f.a,{center:[-33.27,-70.4],zoom:10,whenCreated:D,children:Object(x.jsx)(h.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})}),Object(x.jsxs)("div",{className:"chat-window",children:[Object(x.jsx)("div",{className:"chat-header",children:Object(x.jsx)("p",{children:"Centro de Control"})}),Object(x.jsx)("div",{className:"chat-body",children:Object(x.jsx)(b.a,{className:"message-container",children:v.map((function(e){return Object(x.jsx)("div",{className:"message",id:n===e.name?"you":"other",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"message-content",children:Object(x.jsx)("p",{children:e.message})}),Object(x.jsxs)("div",{className:"message-meta",children:[Object(x.jsx)("p",{id:"date",children:Date(e.date).substring(0,21)}),Object(x.jsx)("p",{id:"name",children:e.name})]})]})})}))})}),Object(x.jsxs)("div",{className:"chat-footer",children:[Object(x.jsx)("input",{type:"text",value:s,placeholder:"Escribe algo...",onChange:function(e){r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&X()}}),Object(x.jsx)("button",{onClick:X,children:"\u25ba"})]})]}),Object(x.jsx)("div",{class:"card-group",id:"cardis",children:Object.values(T).map((function(e,t){if("Ok"!==e.states)var n="#ffb3b3";else n="#d6f5d6";return Object(x.jsx)(O.a,{style:{width:"18rem",background:n},className:"box",children:Object(x.jsxs)(O.a.Body,{children:[Object(x.jsxs)(O.a.Title,{children:["Cami\xf3n ",e.code]}),Object(x.jsxs)(O.a.Text,{style:{"line-height":"0.5cm"},children:["Origen: ",e.origin]}),Object(x.jsxs)(O.a.Text,{style:{"line-height":"0.5cm"},children:["Destino: ",e.destination]}),Object(x.jsxs)(O.a.Text,{style:{"line-height":"0.5cm"},children:["Estado: ",null===e||void 0===e?void 0:e.states]}),Object(x.jsxs)(O.a.Text,{style:{"line-height":"0.5cm"},children:["Capacidad: ",e.capacity]}),Object(x.jsxs)(O.a.Text,{style:{"line-height":"0.5cm"},children:["Engine: ",e.engine]}),e.staff.map((function(e,t){return Object(x.jsxs)(O.a.Text,{style:{"line-height":"0.5cm"},children:["Staff: ",e.name," (",e.age,")"]},t)})),Object(x.jsxs)(O.a.Text,{style:{"line-height":"0.5cm"},children:["Truck: ",e.truck]}),"Ok"!==(null===e||void 0===e?void 0:e.states)&&Object(x.jsx)(m.a,{onClick:function(){M(null===e||void 0===e?void 0:e.code),J(B+1)},variant:"primary",children:"Arreglar"})]})},t)}))})]})},v=(n(367),Object(r.a)("https://tarea-3-websocket.2021-2.tallerdeintegracion.cl",{path:"/trucks/"}));v.on("connect_error",(function(e){console.log("connect_error due to ".concat(e.message))}));var y=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),s=Object(o.a)(a,2),r=s[0],l=s[1];return v.emit("TRUCKS"),Object(x.jsx)("div",{className:"App",children:r?Object(x.jsx)(g,{socket:v,username:n}):Object(x.jsxs)("div",{className:"joinChatContainer",children:[Object(x.jsx)("h3",{children:"Control de Camiones"}),Object(x.jsx)("input",{type:"text",placeholder:"Nombre o Nickname...",onChange:function(e){i(e.target.value)}}),Object(x.jsx)("button",{onClick:function(){""!==n&&l(!0)},children:"Join"})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,374)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),k()}},[[368,1,2]]]);
//# sourceMappingURL=main.6fcfdeb6.chunk.js.map