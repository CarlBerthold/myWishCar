(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},157:function(e,t){},159:function(e,t){},170:function(e,t){},172:function(e,t){},197:function(e,t){},199:function(e,t){},200:function(e,t){},205:function(e,t){},207:function(e,t){},213:function(e,t){},215:function(e,t){},234:function(e,t){},246:function(e,t){},249:function(e,t){},296:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(141),a=n.n(r),s=(n(148),n(23)),i=n(4),o=n(6),u=(n(149),n(150),n(0));function l(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.username}),Object(u.jsx)("h1",{children:"Home Page \ud83e\udd84 \ud83c\udf08"}),Object(u.jsx)("h2",{children:"here should be a greeting for the logedin user"})]})}function j(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Welcome on my Wish Car"}),Object(u.jsx)("img",{src:"Startpic.jpg",width:"800px",height:"500px"}),Object(u.jsx)("p",{children:"Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht \u2013 und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum st\xf6rt es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur tr\xe4umen."})]})}var b=n(15),h=n(9),d=n.n(h);function O(e){var t=function(){d.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))};return Object(u.jsx)("nav",{children:e.user?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"p-3 mb-2 bg-info text-dark bg-opacity-50",children:Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)(b.b,{to:"/HomePage",children:Object(u.jsx)("button",{type:"submit",class:"btn btn-outline-dark",children:"Profil"})}),Object(u.jsx)(b.b,{to:"/CarsList",children:Object(u.jsx)("button",{type:"submit",class:"btn btn-outline-dark",children:"Cars"})}),Object(u.jsx)(b.b,{to:"/addCar",children:Object(u.jsx)("button",{type:"submit",class:"btn btn-outline-dark",children:"Add a Car"})}),Object(u.jsx)(b.b,{to:"/",onClick:function(){return t()},children:Object(u.jsx)("button",{type:"submit",class:"btn btn-outline-dark",children:"Logout"})})]})})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.b,{to:"/signup",children:Object(u.jsx)("button",{className:"btn btn-outline-dark",children:"Sign up"})}),Object(u.jsx)(b.b,{to:"/login",children:Object(u.jsx)("button",{className:"btn btn-outline-dark",children:"Login"})})]})})}function m(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),O=h[0],m=h[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Signup"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(r,l),function(e,t){return d.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(r,l).then((function(t){console.log(t),t.message?(a(""),j(""),m(t.message)):(e.setUser(t),e.history.push("/HomePage"))})).catch((function(e){return console.log(e)}))},children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(u.jsx)("input",{type:"text",name:"username",value:r,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(u.jsx)("input",{type:"password",name:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Sign Up \u270d\ufe0f"}),O&&Object(u.jsx)("h3",{children:O})]}),Object(u.jsx)("img",{src:"Key.jpg",width:"800px",height:"500px"})]})}function x(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),O=h[0],m=h[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Login"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(r,l),function(e,t){return d.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(r,l).then((function(t){console.log(t),t.message?(a(""),j(""),m(t.message)):(e.setUser(t),alert("welcome",t.username),e.history.push("/HomePage",t.username))})).catch((function(e){return console.log(e)}))},children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(u.jsx)("input",{type:"text",name:"username",value:r,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(u.jsx)("input",{type:"password",name:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Log in \ud83d\udd11"}),O&&Object(u.jsx)("h3",{children:O})]}),Object(u.jsx)("img",{src:"Key.jpg",width:"800px",height:"500px"})]})}var g=n(43);function p(e){var t=e.marke,n=e.modell,c=(e.baujahr,e.kilometer,e.preis,e.rating,e.imgUrl),r=e._id;return console.log(t),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("h3",{children:n}),Object(u.jsx)(b.b,{to:"/cars/".concat(r),children:Object(u.jsx)("img",{src:c})})]})}var f=d.a.create({baseURL:"http://localhost:5005/api"}),v=function(e){throw e},S=function(e){return f.post("/cars/upload",e).then((function(e){return e.data})).catch(v)},y=function(e){return f.post("/api/cars/add",e).then((function(e){return e.data})).catch(v)};function C(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(Number),h=Object(i.a)(b,2),O=h[0],m=h[1],x=Object(c.useState)(Number),g=Object(i.a)(x,2),p=g[0],f=g[1],v=Object(c.useState)(Number),C=Object(i.a)(v,2),k=C[0],w=C[1],F=Object(c.useState)(Number),N=Object(i.a)(F,2),U=N[0],L=N[1],P=Object(c.useState)(""),A=Object(i.a)(P,2),E=A[0],M=A[1],B=Object(c.useState)(Number),D=Object(i.a)(B,2),H=D[0],T=D[1];return Object(u.jsx)("div",{class:"d-flex justify-content-center",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"add a car"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),y({marke:r,modell:l,baujahr:O,kilometer:p,preis:k,rating:U,imgUrl:E,timesRating:H}).then((function(e){console.log("added new Car ",e)})).catch((function(e){return console.log("Error while adding the new car",e)}));var n={marke:r,modell:l,baujahr:O,kilometer:p,preis:k,rating:U,imgUrl:E,timesRating:H};d.a.post("/api/cars/addCar",n).then((function(t){a(""),j(""),m(Number),f(Number),w(Number),L(Number),M(""),T(Number),e.refreshCars()})).catch((function(e){return console.log(e)}))},children:[Object(u.jsx)("label",{htmlFor:"marke",children:"Marke: "}),Object(u.jsx)("input",{type:"text",name:"marke",value:r,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"modell",children:"Modell: "}),Object(u.jsx)("input",{type:"text",name:"modell",value:l,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"baujahr",children:"Baujahr: "}),Object(u.jsx)("input",{type:"Number",name:"baujahr",value:O,onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"kilometer",children:"Kilometer: "}),Object(u.jsx)("input",{type:"Number",name:"kilometer",value:p,onChange:function(e){return f(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"preis",children:"\u20ac Preis: "}),Object(u.jsx)("input",{type:"Number",name:"preis",value:k,onChange:function(e){return w(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"rating",children:"Rating: "}),Object(u.jsx)("input",{type:"Number",name:"rating",max:"5",value:U,onChange:function(e){return L(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"imgUrl",children:"Img: "}),Object(u.jsx)("input",{type:"File",name:"imgUrl",onChange:function(e){var t=new FormData;t.append("imgUrl",e.target.files[0]),S(t).then((function(e){console.log("response is: ",e),M(e.secure_url)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}}),E&&Object(u.jsx)("img",{src:E,style:{height:"150px "}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",class:"btn btn-dark",children:"Add this Car"})]})]})})}function k(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(i.a)(a,2),l=o[0],j=o[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),O=h[0],m=h[1],x=function(){d.a.get("".concat("http://localhost:5005","/api/cars")).then((function(e){console.log(e),j(e.data)})).catch((function(e){return console.log(e)}))};Object(c.useEffect)((function(){x()}),[]);var f=Object(g.a)(new Set(l.map((function(e){return e.rating})))).map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)})),v=l.filter((function(e){return"".concat(e.marke).concat(e.modell).toLowerCase().includes(n.toLowerCase())}));v.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.marke}),Object(u.jsx)("td",{children:e.modell})]},e.id)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"All the Cars"}),Object(u.jsx)("input",{type:"text",name:"search",value:n,onChange:function(e){return r(e.target.value)}}),Object(u.jsxs)("select",{name:"rating",value:O,onChange:function(e){return m(e.target.value)},children:[Object(u.jsx)("option",{value:"",children:"All"}),f]}),v.map((function(e){return Object(u.jsx)(p,Object(s.a)({},e),e._id)}))]}),Object(u.jsx)("div",{children:Object(u.jsx)(C,{refreshCars:x})})]})}function w(e){var t="http://localhost:5005",n=Object(c.useState)(0),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(0),l=Object(i.a)(o,2),j=l[0],b=l[1],h=e.match.params.id;Object(c.useEffect)((function(){d.a.get("".concat(t,"/api/cars/").concat(h)).then((function(e){console.log("use effect"),s(e.data.rating)})).catch((function(e){return console.log(e)}))}),[]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"star-rating",children:[Object(g.a)(Array(5)).map((function(e,t){return t+=1,Object(u.jsx)("button",{class:"rating",type:"button",className:t<=(j||a)?"on":"off",onClick:function(){return s(t)},onMouseEnter:function(){return b(t)},onMouseLeave:function(){return b(a)},children:Object(u.jsx)("span",{className:"star",children:"\u2605"})},t)})),Object(u.jsx)("form",{onSubmit:function(n){n.preventDefault();var c={rating:a};d.a.put("".concat(t,"/api/cars/").concat(h),c).then((function(t){e.history.push("/CarsList")})).catch((function(e){return console.log(e)}))},children:Object(u.jsx)("button",{type:"submit",children:" Save your Rating"})})]})})}function F(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),r=n[0],a=n[1],o=e.match.params.id;return Object(c.useEffect)((function(){d.a.get("".concat("http://localhost:5005","/api/cars/").concat(o)).then((function(e){console.log(e.data),a(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{children:r&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{class:"ratio ratio-4x3",children:Object(u.jsx)("img",{src:r.imgUrl})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:r.marke}),Object(u.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(u.jsxs)("li",{class:"list-group-item",children:["Model: ",r.modell]}),Object(u.jsxs)("li",{class:"list-group-item",children:["Year: ",r.baujahr]}),Object(u.jsxs)("li",{class:"list-group-item",children:["Miles: ",r.kilometer]}),Object(u.jsxs)("li",{class:"list-group-item",children:["Price: ",r.preis]})]}),Object(u.jsx)("li",{class:"list-group-item",children:Object(u.jsx)(w,Object(s.a)({},e))})]})]})})}var N=function(e){var t=Object(c.useState)(e.user),n=Object(i.a)(t,2),r=n[0],a=n[1],b=function(e){a(e)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{user:r,setUser:b}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/addCar",user:r,component:C}),Object(u.jsx)(o.a,{exact:!0,path:"/Cars/:id",user:r,component:F}),Object(u.jsx)(o.a,{exact:!0,path:"/CarsList",component:k}),Object(u.jsx)(o.a,{exact:!0,path:"/Signup",render:function(e){return Object(u.jsx)(m,Object(s.a)({setUser:b},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/Login",render:function(e){return Object(u.jsx)(x,Object(s.a)({setUser:b},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/HomePage",user:r,component:l}),Object(u.jsx)(o.a,{exact:!0,path:"/",component:j})]})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,297)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(295);d.a.get("/api/auth/loggedin").then((function(e){console.log("im the logged user: ",e.data);var t=e.data;a.a.render(Object(u.jsx)(b.a,{children:Object(u.jsx)(N,{user:t})}),document.getElementById("root"))})),U()}},[[296,1,2]]]);
//# sourceMappingURL=main.38a19258.chunk.js.map