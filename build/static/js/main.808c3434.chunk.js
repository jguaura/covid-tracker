(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(102),a(19)),l=a.n(s),i=a(30),u=a(15),m=a(237),d=a(238),f=a(239),v=a(231),p=a(235),h=(a(104),a(90)),b=(a(105),a(236));var E=function(e){var t=e.title,a=e.cases,n=e.total,r=e.active,o=e.isRed,s=Object(h.a)(e,["title","cases","total","active","isRed"]);return c.a.createElement(v.a,{className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(o&&"infoBox--red"),onClick:s.onClick},c.a.createElement(p.a,null,c.a.createElement(b.a,{className:"infoBox__title",color:"textSecondary"},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),c.a.createElement(b.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},y=a(242),g=a(243),x=(a(109),a(89)),j=a(17),O=a.n(j),k=a(240),w=a(241),C={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5",multiplier:800},recovered:{hex:"#7DD71D",rgb:"rgb(125, 215, 29",half_op:"rgba(125, 215, 29, 0.5",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67, 0.5",half_op:"rgba(251, 68, 67, 0.5",multiplier:2e3}},_=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n},N=function(e){return e&&"+".concat(O()(e).format("0.0a"))},S=function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(y.a,{center:n,zoom:r},c.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(k.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:C[t].hex,fillColor:C[t].hex,radius:Math.sqrt(e[t])*C[t].multiplier},c.a.createElement(w.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",O()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",O()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",O()(e.deaths).format("0,0")))))}))}(t,a)))},B=(a(110),function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;e.index;return c.a.createElement("tr",{key:"".concat(t).concat(a)},c.a.createElement("td",{key:"".concat(t)},t),c.a.createElement("td",{key:"".concat(a)},c.a.createElement("strong",null,O()(a).format("0.0a"))))})))}),R=a(87),D={legend:{display:!1},elements:{point:{radius:0}},mantainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return O()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return O()(e).format("0a")}}}]}},I=function(e){var t=e.casesType,a=Object(n.useState)({}),r=Object(u.a)(a,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,c=_(n,t),s(c);case 8:case"end":return e.stop()}}),e)})))()}),[t]),c.a.createElement("div",{className:"linegraph"},(null===o||void 0===o?void 0:o.length)>0&&c.a.createElement(R.a,{data:{datasets:[{data:o,backgroundColor:"rgba(204, 16, 52, 0.5",borderColor:"#CC1034"}]},options:D}))};a(204);var T=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("worlwide"),s=Object(u.a)(o,2),h=s[0],b=s[1],y=Object(n.useState)(""),g=Object(u.a)(y,2),j=g[0],O=g[1],k=Object(n.useState)([]),w=Object(u.a)(k,2),C=w[0],_=w[1],R=Object(n.useState)({lat:34.80746,lng:-40.4796}),D=Object(u.a)(R,2),T=D[0],M=D[1],z=Object(n.useState)(2),A=Object(u.a)(z,2),W=A[0],J=A[1],L=Object(n.useState)([]),V=Object(u.a)(L,2),Y=V[0],q=V[1],F=Object(n.useState)("cases"),K=Object(u.a)(F,2),$=K[0],G=K[1];Object(n.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,O(a);case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var t,a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),o=a,c=Object(x.a)(o).sort((function(e,t){return e.cases>t.cases?-1:1})),_(c),r(n),q(a);case 11:case"end":return e.stop()}var o}),e)})))()}),[]);var H=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,b(a),O(r),M([r.countryInfo.lat,r.countryInfo.long]),J(6);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"COVID-19 TRACKER"),c.a.createElement(m.a,{className:"app__dropdown"},c.a.createElement(d.a,{variant:"outlined",value:h,onChange:H},c.a.createElement(f.a,{key:"default",value:"worlwide"},"Worldwide"),a.map((function(e,t){return c.a.createElement(f.a,{key:t,value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(E,{isRed:!0,active:"cases"===$,onClick:function(){return G("cases")},title:"Corona Virus Cases",cases:N(j.todayCases),total:N(j.cases),key:"infoB1"}),c.a.createElement(E,{active:"recovered"===$,onClick:function(){return G("recovered")},title:"Recovered",cases:N(j.todayRecovered),total:N(j.recovered),key:"infoB2"}),c.a.createElement(E,{isRed:!0,active:"deaths"===$,onClick:function(){return G("deaths")},title:"Deaths",cases:N(j.todayDeaths),total:N(j.deaths),key:"infoB3"})),c.a.createElement(S,{casesType:$,countries:Y,center:T,zoom:W})),c.a.createElement(v.a,{className:"app__right"},c.a.createElement(p.a,null,c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(B,{countries:C}),c.a.createElement("h3",null,"Worldwide new ",$),c.a.createElement(I,{casesType:$}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(205)}},[[97,1,2]]]);
//# sourceMappingURL=main.808c3434.chunk.js.map