(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(8),c=a.n(i),r=(a(15),a(2)),s=a(3),d=a(5),u=a(4),m=a(6),p=a(1),l=(a(16),function(e){function t(){var e,a;Object(r.a)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).playAudio=function(e){e.currentTime=0,e.play()},a.handleClick=function(e){if(a.props.activeState){var t=e.target.children[0];a.playAudio(t),a.props.display(e.target.id),setTimeout(function(){a.props.display("")},2e3)}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",function(t){if(e.props.activeState&&-1!==[81,87,69,65,83,68,90,88,67].indexOf(t.keyCode)){var a=document.querySelector("#".concat(String.fromCharCode(t.keyCode)));e.playAudio(a);var o=document.querySelector("#".concat(String.fromCharCode(t.keyCode))).parentElement.id;e.props.display(o),setTimeout(function(){e.props.display("")},2e3)}})}},{key:"render",value:function(){var e=this,t={minWidth:"4rem",minHeight:"4rem",border:"5px outset #5a6a6d",color:"#d4d4d4",background:"#3e565b",fontSize:"1.5rem",fontWeight:"700"};return n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3 , 1fr)",gridGap:"5px"}},this.props.btnsData.map(function(a){return n.a.createElement("button",{style:t,key:a.key,className:"drum-pad",id:a.sound,onClick:e.handleClick},a.id,n.a.createElement("audio",{src:a.audioSrc,className:"clip",id:a.id}))}))}}]),t}(o.Component)),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={display:"",active:!0,btnsData:[{id:"Q",key:81,sound:"Heater-1",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{id:"W",key:87,sound:"Heater-2",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:"E",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",key:69,sound:"Heater-3"},{id:"A",key:65,sound:"Shaker",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{id:"S",key:83,sound:"Clap",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:"D",key:68,sound:"Open-HH",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:"Z",key:90,sound:"Kick-n'-Hat",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{id:"X",key:88,sound:"Kick",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:"C",key:67,sound:"Closed-HH",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]},a.displaySound=a.displaySound.bind(Object(p.a)(Object(p.a)(a))),a.toggleActive=a.toggleActive.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"displaySound",value:function(e){this.setState({display:e})}},{key:"toggleActive",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e={color:this.state.active?"#d4d4d4":"#374c50",borderRight:"2px solid #d4d4d4"},t={color:this.state.active?"#374c50":"#d4d4d4"};return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"drum-machine"},n.a.createElement("button",{onClick:this.toggleActive,className:"toggleActive"},n.a.createElement("span",{style:e},"on"),n.a.createElement("span",{style:t},"off")),n.a.createElement("p",{id:"display"},this.state.display),n.a.createElement(l,{btnsData:this.state.btnsData,display:this.displaySound,activeState:this.state.active})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1eae58e1.chunk.js.map