(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t.p+"static/media/scene.b79f0bec.gltf"},25:function(e,n,t){e.exports=t.p+"static/media/arid2_ft.6a76a7ae.jpg"},26:function(e,n,t){e.exports=t.p+"static/media/arid2_bk.238766bf.jpg"},27:function(e,n,t){e.exports=t.p+"static/media/arid2_up.e0e3a4fd.jpg"},28:function(e,n,t){e.exports=t.p+"static/media/arid2_dn.5d5b8be3.jpg"},29:function(e,n,t){e.exports=t.p+"static/media/arid2_rt.64c0edaa.jpg"},30:function(e,n,t){e.exports=t.p+"static/media/arid2_lf.2a53a848.jpg"},31:function(e,n,t){e.exports=t(46)},36:function(e,n,t){},37:function(e,n,t){},41:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(20),o=t.n(r),c=(t(36),t(37),t(5)),l=t(6),s=t(8),d=t(7),u=t(9),m=t(21);window.THREE=m,t(38),t(39);var p=window.THREE,w=t(22),h=t.n(w),f=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e,n,t,a=function a(){t.render(e,n),requestAnimationFrame(a)};!function(){(e=new p.Scene).background=new p.Color(16777215),(n=new p.PerspectiveCamera(90,window.innerWidth/window.innerHeight,.3,500)).rotation.y=.25*Math.PI,n.position.x=0,n.position.y=1,n.position.z=2,new p.OrbitControls(n).addEventListener("change",t);var i=new p.AmbientLight(16777215,.5);e.add(i);var r=new p.DirectionalLight(16754247,.5);r.position.set(0,1,0),r.castShadow=!0,e.add(r);var o=new p.PointLight(16568223,.9);o.position.set(0,30,50),e.add(o);var c=new p.PointLight(16754247,1.2);c.position.set(50,10,0),e.add(c);var l=new p.PointLight(16776698,1.8);l.position.set(0,100,-500),e.add(l);var s=new p.PointLight(16776698,1.8);s.position.set(-500,300,500),e.add(s),(t=new p.WebGLRenderer({antialias:!0})).setSize(1*window.innerWidth,1*window.innerHeight),document.body.appendChild(t.domElement),window.addEventListener("resize",function(){var e=window.innerWidth,a=window.innerHeight;t.setSize(e,a),n.aspect=e/a,n.updateProjectionMatrix()}),window.addEventListener("onMouseWheel",function(e){e.preventDefault(),e.stopPropagation()});var d=new p.GLTFLoader,u=h.a;d.load(u,function(n){n.scene.children[0].scale.set(.5,.5,.5),e.add(n.scene),a()},function(e){console.log("".concat(e.loaded/e.total*100,"% loaded"))},function(e){console.error("An error has happened",e)})}()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h2",null,"I am an ancient mexican mask coming from Three js"),i.a.createElement("small",null,"Object: gltf made in Blender 2.8  "),i.a.createElement("small",null,"  Author: Daniel Cabrera "),i.a.createElement("div",{ref:function(n){return e.mount=n}}))}}]),n}(a.Component);var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(40);var b=t(11),E=t(10),j=(t(41),function(){return i.a.createElement("div",{className:"navBar-container"},i.a.createElement("nav",{className:"navBar"},i.a.createElement("ul",{className:"navBar-ul"},i.a.createElement("li",null,i.a.createElement(b.b,{to:"/gallery",className:"navRef"},"Gallery")),i.a.createElement("li",null,i.a.createElement(b.b,{to:"/projects",className:"navRef"},"Projects")),i.a.createElement("li",null,i.a.createElement(b.b,{to:"/contactUs",className:"navRef"},"Contact us")),i.a.createElement("li",null,i.a.createElement(b.b,{to:"/SignIn",className:"navRef"},"Sign in")),i.a.createElement("li",null,i.a.createElement(b.b,{to:"/",className:"navRef"},"Home")))))}),g=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("h1",null,"Soy la galer\xeda")}}]),n}(i.a.Component),O=t(25),x=t.n(O),y=t(26),L=t.n(y),M=t(27),k=t.n(M),C=t(28),B=t.n(C),S=t(29),P=t.n(S),W=t(30),T=t.n(W),H=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e,n,t,a=function a(){t.render(e,n),requestAnimationFrame(a)};!function(){e=new p.Scene,(n=new p.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,3e4)).position.set(-900,-200,-900),(t=new p.WebGLRenderer({antialias:!0})).setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);var i=new p.OrbitControls(n);i.addEventListener("change",t),i.minDistance=500,i.maxDistance=1500,window.addEventListener("resize",function(){var e=window.innerWidth,a=window.innerHeight;t.setSize(e,a),n.aspect=e/a,n.updateProjectionMatrix()});var r=[],o=(new p.TextureLoader).load(x.a),c=(new p.TextureLoader).load(L.a),l=(new p.TextureLoader).load(k.a),s=(new p.TextureLoader).load(B.a),d=(new p.TextureLoader).load(P.a),u=(new p.TextureLoader).load(T.a);r.push(new p.MeshBasicMaterial({map:o})),r.push(new p.MeshBasicMaterial({map:c})),r.push(new p.MeshBasicMaterial({map:l})),r.push(new p.MeshBasicMaterial({map:s})),r.push(new p.MeshBasicMaterial({map:d})),r.push(new p.MeshBasicMaterial({map:u}));for(var m=0;m<6;m++)r[m].side=p.BackSide;var w=new p.BoxGeometry(1e4,1e4,1e4),h=new p.Mesh(w,r);e.add(h),a()}()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{ref:function(n){return e.mount=n}}))}}]),n}(a.Component),N=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("h1",null,"Soy Contact us")}}]),n}(i.a.Component),R=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("h1",null,"Soy Sign In")}}]),n}(i.a.Component);o.a.render(i.a.createElement(b.a,null,i.a.createElement(j,null),i.a.createElement(E.c,null,i.a.createElement(E.a,{exact:!0,path:"/",component:v}),i.a.createElement(E.a,{exact:!0,path:"/gallery",component:g}),i.a.createElement(E.a,{exact:!0,path:"/projects",component:H}),i.a.createElement(E.a,{exact:!0,path:"/contactUs",component:N}),i.a.createElement(E.a,{exact:!0,path:"/signIn",component:R}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.08959a21.chunk.js.map