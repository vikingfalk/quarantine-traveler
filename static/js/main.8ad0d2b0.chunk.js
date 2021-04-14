(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(n,e,t){},37:function(n,e,t){},38:function(n,e,t){},39:function(n,e,t){"use strict";t.r(e);var c,r,a,i,o,s,b,l,j,u=t(0),d=t.n(u),h=t(20),m=t.n(h),O=t(8),g=t(2),p=t(7),f=t(24),x=t(41),v=t(4),k=t(5),N=k.b.article(c||(c=Object(v.a)(["\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  cursor: pointer;\n\n  & > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  @media (min-width: 480px) {\n    &:hover {\n    ","\n  }\n  }\n"])),(function(n){return!n.selected&&Object(k.a)(r||(r=Object(v.a)(["\n      box-shadow: 0 0 6px 6px rgba(80, 255, 80, 0.6);\n    "])))})),w=t(1),_=function(n){var e=n.card,t=n.checkMatch;return Object(w.jsx)(N,{onClick:function(){return t(e)},children:Object(w.jsx)("img",{src:e.flagURL})})},S=k.b.article(a||(a=Object(v.a)(["\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);\n  position: relative;\n  height: 100%;\n\n  & > img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .cheat-text {\n    position: absolute;\n    color: pink;\n    background-color: black;\n    font-size: 2rem;\n    right: 0;\n    bottom: 0;\n  }\n\n  @media (min-width: 480px) {\n    & {\n      border-radius: 5px;\n      height: calc(100vw * 0.35);\n    }\n  }\n"]))),y=function(n){var e=n.card;return Object(w.jsxs)(S,{children:[!1,Object(w.jsx)("img",{src:e.pictureURL})]})},L=function(n){var e=n.incrementTries,t=n.setFinished,c=n.onMatched,r=Object(u.useState)(null),a=Object(p.a)(r,2),i=a[0],o=a[1],s=Object(u.useState)(null),b=Object(p.a)(s,2),l=b[0],j=b[1],d=Object(u.useState)(null),h=Object(p.a)(d,2),m=h[0],O=h[1],g=Object(u.useState)(""),v=Object(p.a)(g,2),k=v[0],N=v[1],S=Object(u.useState)(!0),L=Object(p.a)(S,2),T=L[0],F=L[1],M=function(n){n.country===m.country?(j(l.filter((function(n,e){return 0!==e}))),c(!0)):c(!1),e()};return Object(u.useEffect)((function(){l&&(0!==l.length?O(l[0]):t(!0))}),[l]),Object(u.useEffect)((function(){fetch("https://quarantine-traveler.herokuapp.com").then((function(n){return n.json()})).then((function(n){if(n.error)N("Error loading game");else{var e=n.flags.map((function(n){return Object(f.a)(n.sort((function(){return.5-Math.random()}))).map((function(n){return{id:Object(x.a)(),type:"flag",country:n.name,flagURL:"./assets/flags/".concat(n.name,".png")}}))})),t=n.pictures.map((function(n){return{id:Object(x.a)(),type:"picture",country:n.name,pictureURL:n.pictureURL}}));o(e),j(t),F(!1)}}))}),[]),k?Object(w.jsx)("h2",{children:k}):T?Object(w.jsx)("h2",{children:"\uac8c\uc784 \ub85c\ub529 \uc911..."}):0===l.length?null:Object(w.jsxs)("section",{className:"board",children:[Object(w.jsx)("section",{className:"board__column board__column--picture",children:Object(w.jsx)(y,{card:m})}),Object(w.jsx)("section",{className:"board__column board__column--flags",children:i&&i[i.length-l.length].map((function(n){return Object(w.jsx)(_,{card:n,checkMatch:M},n.id)}))})]})},T=k.b.button(i||(i=Object(v.a)(["\n  border: none;\n  padding: 0.8rem 1.5rem;\n  border-radius: 5px;\n  font-size: 1.6rem;\n  transition: all 0.2s;\n  cursor: pointer;\n  background-color: rgb(220, 220, 220);\n\n  &:hover {\n    background-color: rgb(230, 230, 230);\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),(function(n){return n.main&&Object(k.a)(o||(o=Object(v.a)(["\n  background-color: rgb(82, 235, 123);\n    padding: 0.8rem 2rem;\n  "])))}),(function(n){return n.main&&!n.disabled&&Object(k.a)(s||(s=Object(v.a)(["\n    &:hover {\n      background-color: rgb(102, 255, 153);\n    }\n  "])))}),(function(n){return n.disabled&&Object(k.a)(b||(b=Object(v.a)(["\n    background-color: rgb(180, 180, 180);\n    color: rgb(100, 100, 100);\n    transition: none;\n    cursor: default;\n\n    &:hover {\n      background-color: rgb(180, 180, 180);\n    }\n  "])))}),(function(n){return n.again&&Object(k.a)(l||(l=Object(v.a)(["\n    background-color: rgb(82, 235, 123);\n\n    &:hover {\n      background-color: rgb(102, 255, 153);\n    }\n  "])))}),(function(n){return n.start&&Object(k.a)(j||(j=Object(v.a)(["\n    padding: 1rem 3rem;\n    font-size: 1.8rem;\n  "])))})),F=(t(32),function(){var n=Object(u.useState)(0),e=Object(p.a)(n,2),t=e[0],c=e[1],r=Object(u.useState)(!1),a=Object(p.a)(r,2),i=a[0],o=a[1],s=Object(u.useState)(!1),b=Object(p.a)(s,2),l=b[0],j=b[1],d=Object(u.useState)(!1),h=Object(p.a)(d,2),m=h[0],f=h[1],x=Object(g.f)();return i?Object(w.jsxs)("div",{className:"container container--column-center",children:[Object(w.jsxs)("h1",{className:"finished-text",children:["\uc798 \ud558\uc168\uc2b5\ub2c8\ub2e4! ",t," \ucc28\ub840 \uc2dc\ub3c4\ud558\uace0 \uac8c\uc784 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4!"]}),Object(w.jsxs)("section",{className:"buttons-wrapper",children:[Object(w.jsx)(T,{onClick:function(){return x.go(0)},again:!0,children:"\uac8c\uc784 \ub610 \ud558\uae30"}),Object(w.jsx)(O.b,{to:"/",children:Object(w.jsx)(T,{children:"\ud648 \ud398\uc774\uc9c0"})})]})]}):Object(w.jsxs)("div",{className:"container container--column-center",children:[Object(w.jsx)(O.b,{to:"/",children:Object(w.jsxs)("span",{className:"btn-home",children:[Object(w.jsx)("span",{className:"material-icons btn-home__icon",children:"exit_to_app"}),Object(w.jsx)("span",{className:"btn-home__text",children:"\ub3cc\uc544\uac00\uae30"})]})}),Object(w.jsxs)("h1",{className:"counter",children:[t," \ucc28\ub840 \uc2dc\ub3c4"]}),l&&Object(w.jsx)("p",{className:"matched",children:"\uc798 \ud558\uc168\uc5b4\uc694!"}),m&&Object(w.jsx)("p",{className:"failed",children:"\ub2e4\uc2dc \ud55c \ubc88 \ud574 \ubcf4\uc138\uc694!"}),Object(w.jsx)(L,{incrementTries:function(){c(t+1)},setFinished:o,onMatched:function(n){if(n)return j(!0),void setTimeout((function(){return j(!1)}),1e3);f(!0),setTimeout((function(){return f(!1)}),1e3)}})]})}),M=t.p+"static/media/traveller.335e8bd8.png",C=t.p+"static/media/worldwide.835418a6.png",R=t.p+"static/media/airplane.08eb947d.png",U=(t(37),function(){return Object(w.jsxs)("div",{className:"container container--column-center",children:[Object(w.jsx)("h1",{className:"main-heading",children:"Quarantine Traveler"}),Object(w.jsx)("h2",{className:"sub-heading",children:"\uac8c\uc784\uc744 \ud55c \ubc88 \ud574 \ubcf4\uc2ed\uc2dc\uc624!"}),Object(w.jsx)(O.b,{to:"/game",children:Object(w.jsx)(T,{main:!0,start:!0,children:"\uac8c\uc784 \uc2dc\uc791"})}),Object(w.jsx)("img",{className:"img-world",src:C}),Object(w.jsx)("img",{className:"img-traveller",src:M}),Object(w.jsx)("img",{className:"img-plane",src:R})]})}),E=(t(38),function(){return Object(w.jsx)(O.a,{basename:"/",children:Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(g.c,{children:[Object(w.jsx)(g.a,{path:"/",exact:!0,component:U}),Object(w.jsx)(g.a,{path:"/game",component:F})]})})})}),z=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),a(n),i(n)}))};m.a.render(Object(w.jsx)(d.a.StrictMode,{children:Object(w.jsx)(E,{})}),document.getElementById("root")),z()}},[[39,1,2]]]);
//# sourceMappingURL=main.8ad0d2b0.chunk.js.map