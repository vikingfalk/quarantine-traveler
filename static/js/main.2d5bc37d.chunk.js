(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(n,e,t){},38:function(n,e,t){},39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var a,r,c,i,s,o,u,d,l,b,j,h,g,m,f,O,p=t(0),x=t.n(p),k=t(21),v=t.n(k),y=t(8),w=t(2),N=t(5),S={home:{subHeading:"Let's go on an adventure!",startButton:"Start"},game:{btnHome:"BACK",counter:"SCORE",finishedTxt1:"Good job! You finished with a score of",finishedTxt2:"!",finishedBtnAgain:"Play again",finishedBtnHome:"Home screen",loading:"Loading game..."}},L={home:{subHeading:"Uppt\xe4ck v\xe4rlden hemifr\xe5n!",startButton:"Starta"},game:{btnHome:"TILLBAKA",counter:"PO\xc4NG",finishedTxt1:"Bra jobbat! Du lyckades samla ihop",finishedTxt2:" po\xe4ng!",finishedBtnAgain:"Spela igen",finishedBtnHome:"Till startsidan",loading:"Laddar spel..."}},T={home:{subHeading:"\uac8c\uc784\uc744 \ud55c \ubc88 \ud574 \ubcf4\uc2ed\uc2dc\uc624!",startButton:"\uac8c\uc784 \uc2dc\uc791"},game:{btnHome:"\ub3cc\uc544\uac00\uae30",counter:"\uc810\uc218",finishedTxt1:"\uc798 \ud558\uc168\uc2b5\ub2c8\ub2e4! \uc810\uc218\uac00",finishedTxt2:"\uc810\uc73c\ub85c \uac8c\uc784\uc744 \uc131\uacf5\ud558\uc168\uc2b5\ub2c8\ub2e4!",finishedBtnAgain:"\uac8c\uc784 \ub610 \ud558\uae30",finishedBtnHome:"\ud648 \ud398\uc774\uc9c0",loading:"\uac8c\uc784 \ub85c\ub529 \uc911..."}},B={swedish:{argentina:"argentina",australia:"australien",brazil:"brasilien",cuba:"kuba",france:"frankrike",germany:"tyskland",italy:"italien",japan:"japan",korea:"korea",mexico:"mexiko",netherlands:"nederl\xe4nderna",romania:"rum\xe4ninen",russia:"ryssland",spain:"spanien",sweden:"sverige",thailand:"thailand",ukraine:"ukraina",usa:"usa"},korean:{argentina:"\uc544\ub974\ud5e8\ud2f0\ub098",australia:"\ud638\uc8fc",brazil:"\ube0c\ub77c\uc9c8",cuba:"\ucfe0\ubc14",france:"\ud504\ub791\uc2a4",germany:"\ub3c5\uc77c",italy:"\uc774\ud0c8\ub9ac\uc544",japan:"\uc77c\ubcf8",korea:"\ud55c\uad6d",mexico:"\uba55\uc2dc\ucf54",netherlands:"\ub124\ub35c\ub780\ub4dc",romania:"\ub8e8\ub9c8\ub2c8\uc544",russia:"\ub7ec\uc2dc\uc544",spain:"\uc2a4\ud398\uc778",sweden:"\uc2a4\uc6e8\ub374",thailand:"\ud0dc\uad6d",ukraine:"\uc6b0\ud06c\ub77c\uc774\ub098",usa:"\ubbf8\uad6d"}},C=t(1),_=Object(p.createContext)(),H=function(n){var e=n.children,t=Object(p.useState)("english"),a=Object(N.a)(t,2),r=a[0],c=a[1];return Object(C.jsx)(_.Provider,{value:{setLanguage:c,getTexts:function(){switch(r){case"english":return S;case"swedish":return L;case"korean":return T;default:return S}},getCountryName:function(n){switch(r){case"english":return n;case"swedish":return B.swedish[n];case"korean":return B.korean[n];default:return n}},language:r},children:e})},A=t(25),E=t(13),z=t(42),F=t(3),M=t(4),R=M.b.article(a||(a=Object(F.a)(["\n  display: block;\n  position: relative;\n  width: 100%;\n  height: calc(100vw * 0.25);\n  /* overflow: hidden; */\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  cursor: pointer;\n  user-select: none;\n  user-drag: none;\n\n  & > .country-name {\n    display: none;\n    position: absolute;\n    background-color: rgba(150, 150, 150, 0.5);\n    height: 100%;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    user-select: none;\n    user-drag: none;\n\n    & > p {\n      display: none;\n      color: white;\n      text-transform: capitalize;\n      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);\n      font-size: 1.5rem;\n    }\n\n    & > .score-gained {\n      position: absolute;\n      color: rgb(40, 255, 40);\n      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);\n      animation: scoreGained 1.5s ease-out forwards;\n    }\n  }\n\n  & > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 5px;\n    user-select: none;\n    user-drag: none;\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  @media (min-width: 480px) {\n    &:hover {\n      ","\n    }\n\n    & {\n      height: 100%;\n    }\n  }\n\n  @keyframes scoreGained {\n    0% {bottom: 50%; opacity: 100%}\n    40% {opacity: 100%}\n    100% {bottom: 8rem; opacity: 0%}\n  }\n"])),(function(n){return n.disabled&&Object(M.a)(r||(r=Object(F.a)(["\n    cursor: default;\n\n    & > .country-name {\n      display: flex;\n    }\n  "])))}),(function(n){return n.tried&&Object(M.a)(c||(c=Object(F.a)(["\n    box-shadow: 0 0 2px 3px rgba(255, 40, 40, 0.8);\n    cursor: default;\n\n    & > .country-name {\n      display: flex;\n    }\n\n    & > .country-name > p {\n      display: block;\n    }\n  "])))}),(function(n){return n.matched&&Object(M.a)(i||(i=Object(F.a)(["\n    box-shadow: 0 0 2px 4px rgba(40, 255, 40, 0.8);\n\n    & > .country-name > p {\n      display: block;\n    }\n  "])))}),(function(n){return!n.tried&&!n.disabled&&Object(M.a)(s||(s=Object(F.a)(["\n        box-shadow: 0 0 6px 6px rgba(80, 255, 80, 0.6);\n      "])))})),U=function(n){var e=n.card,t=n.checkMatch,a=n.scoreValue,r=n.roundOver,c=Object(p.useContext)(_).getCountryName;return Object(C.jsxs)(R,{onClick:e.tried||r?function(){}:function(){return t(e)},tried:e.tried,matched:e.matched,disabled:r,children:[Object(C.jsxs)("div",{className:"country-name",children:[Object(C.jsx)("p",{children:c(e.country)}),e.matched&&Object(C.jsxs)("h2",{className:"score-gained",children:["+",a]})]}),Object(C.jsx)("img",{src:e.flagURL})]})},P=M.b.article(o||(o=Object(F.a)(["\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);\n  position: relative;\n  height: 100%;\n\n  & > img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    user-select: none;\n    user-drag: none;\n  }\n\n  .cheat-text {\n    position: absolute;\n    color: pink;\n    background-color: black;\n    font-size: 2rem;\n    right: 0;\n    bottom: 0;\n  }\n\n  ","\n\n  @media (min-width: 480px) {\n    & {\n      border-radius: 5px;\n      height: calc(100vw * 0.35);\n      max-height: calc(2500px * 0.35);\n    }\n  }\n"])),(function(n){return n.buffer&&Object(M.a)(u||(u=Object(F.a)(["\n    & {\n      display: none;\n    }\n  "])))})),G=function(n){var e=n.card,t=n.buffer;return Object(C.jsxs)(P,{buffer:t,children:[!1,Object(C.jsx)("img",{src:e.pictureURL})]})},I=function(n){var e=n.setFinished,t=n.onMatched,a=Object(p.useContext)(_),r=a.getTexts,c=a.language,i=Object(p.useState)({}),s=Object(N.a)(i,2),o=s[0],u=s[1],d=Object(p.useState)(null),l=Object(N.a)(d,2),b=l[0],j=l[1],h=Object(p.useState)(null),g=Object(N.a)(h,2),m=g[0],f=g[1],O=Object(p.useState)(null),x=Object(N.a)(O,2),k=x[0],v=x[1],y=Object(p.useState)(""),w=Object(N.a)(y,2),S=w[0],L=w[1],T=Object(p.useState)(!0),B=Object(N.a)(T,2),H=B[0],F=B[1],M=Object(p.useState)(!1),R=Object(N.a)(M,2),P=R[0],I=R[1],D=function(n){if(n.country===k.country){I(!0);var e=b;e[b.length-m.length]=e[b.length-m.length].map((function(e){return e.id===n.id?Object(E.a)(Object(E.a)({},e),{},{matched:!0}):e})),j(e),setTimeout((function(){return f(m.filter((function(n,e){return 0!==e})))}),2e3),t(!0)}else{t(!1);var a=b;a[b.length-m.length]=a[b.length-m.length].map((function(e){return e.id===n.id?Object(E.a)(Object(E.a)({},e),{},{tried:!0}):e})),j(a)}};return Object(p.useEffect)((function(){u(r().game)}),[c]),Object(p.useEffect)((function(){m&&(0!==m.length?(v(m[0]),I(!1)):e(!0))}),[m]),Object(p.useEffect)((function(){fetch("https://quarantine-traveler.herokuapp.com").then((function(n){return n.json()})).then((function(n){if(n.error)L("Error loading game");else{var e=n.flags.map((function(n){return Object(A.a)(n.sort((function(){return.5-Math.random()}))).map((function(n){return{id:Object(z.a)(),type:"flag",country:n.name,flagURL:"./assets/flags/".concat(n.name,".png"),tried:!1,matched:!1}}))})),t=n.pictures.map((function(n){return{id:Object(z.a)(),type:"picture",country:n.name,pictureURL:n.pictureURL}}));j(e),f(t),F(!1)}}))}),[]),S?Object(C.jsx)("h2",{children:S}):H?Object(C.jsx)("h2",{children:o.loading}):0===m.length?null:Object(C.jsxs)("section",{className:"board",children:[Object(C.jsxs)("section",{className:"board__column board__column--picture",children:[m.length>1&&Object(C.jsx)(G,{card:m[1],buffer:!0}),Object(C.jsx)(G,{card:k})]}),Object(C.jsx)("section",{className:"board__column board__column--flags",children:b&&b[b.length-m.length].map((function(n){return Object(C.jsx)(U,{card:n,checkMatch:D,scoreValue:b[b.length-m.length].filter((function(n){return!n.tried})).length,roundOver:P},n.id)}))})]})},D=M.b.button(d||(d=Object(F.a)(["\n  border: none;\n  padding: 0.8rem 1.5rem;\n  border-radius: 5px;\n  font-size: 1.6rem;\n  transition: all 0.2s;\n  cursor: pointer;\n  background-color: rgb(220, 220, 220);\n\n  &:hover {\n    background-color: rgb(230, 230, 230);\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),(function(n){return n.main&&Object(M.a)(l||(l=Object(F.a)(["\n  background-color: rgb(82, 235, 123);\n    padding: 0.8rem 2rem;\n  "])))}),(function(n){return n.main&&!n.disabled&&Object(M.a)(b||(b=Object(F.a)(["\n    &:hover {\n      background-color: rgb(102, 255, 153);\n    }\n  "])))}),(function(n){return n.disabled&&Object(M.a)(j||(j=Object(F.a)(["\n    background-color: rgb(180, 180, 180);\n    color: rgb(100, 100, 100);\n    transition: none;\n    cursor: default;\n\n    &:hover {\n      background-color: rgb(180, 180, 180);\n    }\n  "])))}),(function(n){return n.again&&Object(M.a)(h||(h=Object(F.a)(["\n    background-color: rgb(82, 235, 123);\n\n    &:hover {\n      background-color: rgb(102, 255, 153);\n    }\n  "])))}),(function(n){return n.start&&Object(M.a)(g||(g=Object(F.a)(["\n    padding: 0.8rem 2.5rem;\n  "])))})),J=(t(33),function(){var n=Object(p.useContext)(_),e=n.getTexts,t=n.language,a=Object(p.useState)({}),r=Object(N.a)(a,2),c=r[0],i=r[1],s=Object(p.useState)(0),o=Object(N.a)(s,2),u=o[0],d=o[1],l=Object(p.useState)(0),b=Object(N.a)(l,2),j=b[0],h=b[1],g=Object(p.useState)(!1),m=Object(N.a)(g,2),f=m[0],O=m[1],x=[{name:"match",file:new Audio("./assets/sound/match.wav")},{name:"fail",file:new Audio("./assets/sound/fail.wav")}],k=Object(w.f)(),v=function(n){var e=x.find((function(e){return e.name===n})).file;e.volume=.2,e.play()};return Object(p.useEffect)((function(){i(e().game)}),[t]),f?Object(C.jsxs)("div",{className:"container container--column-center",children:[Object(C.jsxs)("h1",{className:"finished-text",children:[c.finishedTxt1," ",j,c.finishedTxt2]}),Object(C.jsxs)("section",{className:"buttons-wrapper",children:[Object(C.jsx)(D,{onClick:function(){return k.go(0)},again:!0,children:c.finishedBtnAgain}),Object(C.jsx)(y.b,{to:"/",children:Object(C.jsx)(D,{children:c.finishedBtnHome})})]})]}):Object(C.jsxs)("div",{className:"container container--column-center",children:[Object(C.jsx)(y.b,{to:"/",children:Object(C.jsxs)("span",{className:"btn-home",children:[Object(C.jsx)("span",{className:"material-icons btn-home__icon",children:"exit_to_app"}),Object(C.jsx)("span",{className:"btn-home__text",children:c.btnHome})]})}),Object(C.jsxs)("article",{className:"counter",children:[c.counter,": ",Object(C.jsx)("p",{className:"score",children:j}),"korean"===t&&"\uc810"]}),Object(C.jsx)(I,{setFinished:O,onMatched:function(n){if(n)return v("match"),h(j+(6-u)),void d(0);v("fail"),d(u+1)}})]})}),K=M.b.button(m||(m=Object(F.a)(["\n  height: 2rem;\n  width: 3rem;\n  border: 1px solid #333;\n  cursor: pointer;\n  border-radius: 2px;\n  opacity: 50%;\n  margin-right: 0.5rem;\n\n  &:last-of-type {\n    margin-right: 0;\n  }\n\n  ","\n\n  ","\n"])),(function(n){return Object(M.a)(f||(f=Object(F.a)(["\n    background-image: url('assets/flags/",".png');\n    background-size: cover;\n    background-position: center;\n  "])),n.country)}),(function(n){return n.active&&Object(M.a)(O||(O=Object(F.a)(["\n    opacity: 100%;\n  "])))})),V=function(n){var e=n.buttonLanguage,t=n.country,a=Object(p.useContext)(_),r=a.language,c=a.setLanguage;return Object(C.jsx)(K,{onClick:function(){return c(e)},country:t,active:r===e})},q=t.p+"static/media/traveller.335e8bd8.png",Q=t.p+"static/media/worldwide.835418a6.png",Y=t.p+"static/media/airplane.08eb947d.png",W=(t(38),function(){var n=Object(p.useState)({}),e=Object(N.a)(n,2),t=e[0],a=e[1],r=Object(p.useContext)(_),c=r.getTexts,i=r.language;return Object(p.useEffect)((function(){a(c().home)}),[i]),Object(C.jsxs)("div",{className:"container container--column-center",children:[Object(C.jsx)("h1",{className:"main-heading",children:"Quarantine Traveler"}),Object(C.jsx)("h2",{className:"sub-heading",children:t.subHeading}),Object(C.jsx)(y.b,{to:"/game",children:Object(C.jsx)(D,{main:!0,start:!0,children:t.startButton})}),Object(C.jsxs)("section",{className:"lang-btn-wrapper",children:[Object(C.jsx)(V,{buttonLanguage:"english",country:"uk",children:"English"}),Object(C.jsx)(V,{buttonLanguage:"swedish",country:"sweden",children:"Svenska"}),Object(C.jsx)(V,{buttonLanguage:"korean",country:"korea",children:"\ud55c\uad6d\uc5b4"})]}),Object(C.jsx)("img",{className:"img-world",src:Q}),Object(C.jsx)("img",{className:"img-traveller",src:q}),Object(C.jsx)("img",{className:"img-plane",src:Y})]})}),X=(t(39),function(){return Object(C.jsx)(y.a,{basename:"/",children:Object(C.jsx)(H,{children:Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(w.c,{children:[Object(C.jsx)(w.a,{path:"/",exact:!0,component:W}),Object(C.jsx)(w.a,{path:"/game",component:J})]})})})})}),Z=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};v.a.render(Object(C.jsx)(x.a.StrictMode,{children:Object(C.jsx)(X,{})}),document.getElementById("root")),Z()}},[[40,1,2]]]);
//# sourceMappingURL=main.2d5bc37d.chunk.js.map