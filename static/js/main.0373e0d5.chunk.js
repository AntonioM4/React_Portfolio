(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/cover-image.402a471b.jpg"},function(e,t,a){var n={"./book-search.jpg":14,"./calculator.jpg":15,"./fitness-tracker.jpg":16,"./pastel-puzzels.jpg":17,"./project-3-nfl.jpg":18,"./run-buddy.jpg":19,"./surf-report.jpg":20};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=13},function(e,t,a){e.exports=a.p+"static/media/book-search.62128d47.jpg"},function(e,t,a){e.exports=a.p+"static/media/calculator.a19f2b67.jpg"},function(e,t,a){e.exports=a.p+"static/media/fitness-tracker.9f2caf0d.jpg"},function(e,t,a){e.exports=a.p+"static/media/pastel-puzzels.ed494730.jpg"},function(e,t,a){e.exports=a.p+"static/media/project-3-nfl.70c7d160.jpg"},function(e,t,a){e.exports=a.p+"static/media/run-buddy.938f8fe0.jpg"},function(e,t,a){e.exports=a.p+"static/media/surf-report.12557c9b.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(11),a(1));a(12);var i=function(e){return r.a.createElement("header",{className:"flex-row space-between px-1"},r.a.createElement("h1",null,"My Portfolio"),e.children)};function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var u=function(e){console.log("this is props",e);var t=e.pages,a=void 0===t?[]:t,l=e.setCurrentPage,c=e.currentPage;return Object(n.useEffect)((function(){document.title=m(c.name)}),[c]),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},a.map((function(e){return r.a.createElement("li",{className:"mx-5 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){return l(e)}},m(e.name)))}))))},p=function(e){return r.a.createElement("div",null,e.children)};var f=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"profile-img my-5"},r.a.createElement("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})),r.a.createElement("p",null,"My name is Antonio Marino, Welcome to my portfolio I am a 24 year old aspiring web developer based in Columbus Ohio. I am working throught the 12 week Web Dev program at The Ohio State University."),r.a.createElement("p",null,"Past expierence: I worked at Scotts Miracle Gro for 2 years with the Digital Expierence team. My role within this team was Digital content manager, I would use a CMS to update, create, and maintain our content or products! This expierence was a very important role in my decision to become a Developer!")))};var E=function(e){var t=e.project,n=t.name,l=t.repo,c=t.link,o=t.description;return r.a.createElement("div",{className:"project",key:n},r.a.createElement("img",{src:a(13)("./".concat(n,".jpg")),alt:s(n),className:"project-bg"}),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,r.a.createElement("a",{href:c},s(n))," ",r.a.createElement("a",{href:l},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,o)))};var d=function(){var e=Object(n.useState)([{name:"fitness-tracker",description:"MERN Stack",link:"https://sheltered-ravine-90487.herokuapp.com/?id=61b6938c2ce838001658dfd0",repo:"https://github.com/AntonioM4/Fitness_Tracker"},{name:"project-3-nfl",description:"WIP",link:"",repo:"https://github.com/AntonioM4/Fitness_Tracker"},{name:"book-search",description:"MERN stack",link:"",repo:"https://github.com/AntonioM4/Book_search"}]),t=Object(o.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},t.map((function(e,t){return r.a.createElement(E,{project:e,key:"project"+t})}))))},g=a(2),h=a(3);var v=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),m=i[0],s=i[1],u=a.name,p=a.email,f=a.message,E=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);s(t?"":"Your email is invalid.")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."));m||(l(Object(h.a)(Object(h.a)({},a),{},Object(g.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return r.a.createElement("section",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),m||console.log("Submit Form",a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:u,onBlur:E})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:E})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:f,onBlur:E})),m&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},m)),r.a.createElement("button",{type:"submit"},"Submit")))};var b=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Download my ",r.a.createElement("a",{href:"../Resume-ANTONIO-MARINO.pdf"},"resume")),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"responsive design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"APIs"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"MongoDB, Mongoose"),r.a.createElement("li",null,"REST"),r.a.createElement("li",null,"GraphQL"))))};var j=function(e){var t=e.currentPage;return r.a.createElement("section",null,r.a.createElement("h2",null,m(t.name)),r.a.createElement(p,null,function(){switch(t.name){case"about me":return r.a.createElement(f,null);case"portfolio":return r.a.createElement(d,null);case"contact":return r.a.createElement(v,null);case"resume":return r.a.createElement(b,null);default:return r.a.createElement(f,null)}}()))};var k=function(){return r.a.createElement("footer",{className:"flex-row px-1"},[{name:"fab fa-github",link:"https://github.com/AntonioM4"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/antonio-marino-092a1418a/"}].map((function(e){return r.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.name}))})))};var w=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(t[0]),l=Object(o.a)(a,2),c=l[0],m=l[1];return r.a.createElement("div",null,r.a.createElement(i,null,r.a.createElement(u,{pages:t,setCurrentPage:m,currentPage:c})),r.a.createElement("main",null,r.a.createElement(j,{currentPage:c})),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.0373e0d5.chunk.js.map