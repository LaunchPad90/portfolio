(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/O3a":function(e,t,n){e.exports=n.p+"static/smackTalk2-7ee9f63b8e3b7cefed18448b94581a91.gif"},"2W6z":function(e,t,n){"use strict";n("pIFo");var o=function(){};e.exports=o},"2qYP":function(e,t,n){e.exports=n.p+"static/golf2-6ec7ddddb323aacee53b9986537fe4c2.gif"},"2rMq":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},"2zs7":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,r=n("2rMq");var a=((o=r)&&o.__esModule?o:{default:o}).default,i=a.canUseDOM?window.HTMLElement:{};t.canUseDOM=a.canUseDOM;t.default=i},"9ox4":function(e,t,n){e.exports=n.p+"static/golf-6c4a306b1ba9342804bf6ca05b1984d1.png"},"9rZX":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("qFS3"),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},EqZ6:function(e,t,n){e.exports=n.p+"static/badapp2-a03e6fcc4c515c843518972ddd8e2897.gif"},MiJL:function(e,t,n){e.exports=n.p+"static/slot-c7d0d7f72ea41c4e9774ebf823e8cce3.png"},QEso:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("eM6i"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),l=b(i),s=b(n("17x9")),c=h(n("VKEO")),u=b(n("S1to")),d=h(n("Ye7m")),f=h(n("fbhf")),p=b(n("2zs7")),m=b(n("UIKY"));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function b(e){return e&&e.__esModule?e:{default:e}}n("WkvU");var g={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=0,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&f.remove(document.body,a),r&&f.remove(document.getElementsByTagName("html")[0],r),o&&y>0&&0===(y-=1)&&d.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(c.returnFocus(),c.teardownScopedFocus()):c.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(c.setupScopedFocus(n.node),c.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,u.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":r(t))?t:{base:g[e],afterOpen:g[e]+"--after-open",beforeClose:g[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"==typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&f.add(document.body,r),o&&f.add(document.getElementsByTagName("html")[0],o),n&&(y+=1,d.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,i=n?{}:a.content,s=r?{}:a.overlay;return this.shouldBeClosed()?null:l.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},s,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},l.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},i,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(i.Component);v.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},v.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.instanceOf(p.default),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,testId:s.default.string},t.default=v,e.exports=t.default},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return V}));var o=n("q1tI"),r=n.n(o),a=n("vOnD"),i=n("SorC"),l=n.n(i),s=n("Bl7J"),c=n("uZbd"),u=n("9rZX"),d=n.n(u),f={content:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"80%",width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},p={btn:{backgroundColor:"#3A5F85",color:"white",padding:".5rem 2rem",display:"inline-block",borderRadius:"100px",fontSize:"1rem",cursor:"pointer"},close:{fontSize:"2rem",alignSelf:"flex-end",cursor:"pointer",backgroundColor:"red",color:"white",padding:".3rem"}},m={link:{fontSize:"2rem",cursor:"pointer",textDecoration:"none",color:"#3A5F85",marginTop:".5rem"}};var h=function(e){var t=r.a.useState(!1),n=t[0],o=t[1];function a(){o(!1)}return r.a.createElement("div",null,r.a.createElement("button",{style:p.btn,onClick:function(){o(!0)}},"View Demo"),r.a.createElement(d.a,{isOpen:n,onRequestClose:a,style:f,contentLabel:e.title},r.a.createElement("button",{style:p.close,onClick:a},"X"),r.a.createElement("img",{autoPlay:"autoplay",style:{height:"85%",width:"90%"},src:e.gif,alt:"gif of app",title:e.gif}),r.a.createElement("h2",null,"Please allow a few seconds to view hosted website."),r.a.createElement("a",{style:m.link,href:e.hosted,target:"blank"},"View hosted app")))},b=n("ZXdF");function g(){var e=C(["\n            font-size: 1.5rem;\n        "]);return g=function(){return e},e}function y(){var e=C(["\n            height: 25%;\n            margin-bottom: 0;\n       "]);return y=function(){return e},e}function v(){var e=C(["\n            height: 25rem;\n            width: 20rem;\n        "]);return v=function(){return e},e}function C(e,t){return t||(t=e.slice(0)),e.raw=t,e}function w(e){var t=a.b.div.withConfig({displayName:"card__CardBox",componentId:"sc-138n9c3-0"})(["width:21rem;;height:30rem;perspective:1000px;margin:3rem;text-align:center;",""],c.a.l(v())),n=a.b.div.withConfig({displayName:"card__CardFront",componentId:"sc-138n9c3-1"})(["display:flex;flex-direction:column;align-items:center;padding-bottom:1.5rem;"]),o=a.b.div.withConfig({displayName:"card__CardBack",componentId:"sc-138n9c3-2"})(["background:white;display:flex;flex-direction:column;width:100%;height:100%;transform:rotateY(180deg);padding-bottom:1.5rem;"]),i=a.b.div.withConfig({displayName:"card__Card",componentId:"sc-138n9c3-3"})(["position:relative;width:100%;height:100%;transition:transform 1s;transform-style:preserve-3d;box-shadow:20px 20px 25px rgba(50,50,50,.5);border-radius:10px;",",","{position:absolute;backface-visibility:hidden;width:100%;height:100%;}",".flipped,&.flipped{transform:rotateY(180deg);box-shadow:-20px 20px 25px rgba(50,50,50,.2);}"],n,o,t),l=a.b.div.withConfig({displayName:"card__CardImageDiv",componentId:"sc-138n9c3-4"})(["width:100%;height:30%;margin-bottom:.5rem;",""],c.a.l(y())),s=a.b.img.withConfig({displayName:"card__CardImage",componentId:"sc-138n9c3-5"})(["width:100%;height:100%;border-radius:10px;"]),u=a.b.div.withConfig({displayName:"card__CardTitle",componentId:"sc-138n9c3-6"})(["font-size:2.2rem;margin-top:.5rem;"]),d=a.b.div.withConfig({displayName:"card__CardContent",componentId:"sc-138n9c3-7"})(["width:100%;height:100%;font-size:1.8rem;padding:1rem;display:flex;align-items:center;"]),f=a.b.ul.withConfig({displayName:"card__ContentList",componentId:"sc-138n9c3-8"})(["height:100%;width:40%;margin-top:1rem;"]),p=a.b.li.withConfig({displayName:"card__ListItem",componentId:"sc-138n9c3-9"})(["list-style:none;font-size:1.4rem;padding:1rem;&:not(:last-child){border-bottom:1px solid #707070;}",""],c.a.l(g())),m=a.b.div.withConfig({displayName:"card__Buttons",componentId:"sc-138n9c3-10"})(["display:inline-block;justify-content:flex-end;align-items:flex-end;"]),C=a.b.a.withConfig({displayName:"card__A",componentId:"sc-138n9c3-11"})(["background-color:white;color:#3A5F85;border:2px solid #3A5F85;padding:.5rem 2rem;display:inline-block;border-radius:100px;font-size:1rem;cursor:pointer;text-decoration:none;margin-top:.5rem;"]);return r.a.createElement(t,null,r.a.createElement(i,{onClick:function(e){e.currentTarget.classList.toggle("flipped")}},r.a.createElement(n,null,r.a.createElement(l,null,r.a.createElement(s,{src:e.projectImage,alt:"image of website"})),r.a.createElement(u,null,e.projectTitle),r.a.createElement(f,null,r.a.createElement(p,null,e.projectTech1),r.a.createElement(p,null,e.projectTech2),r.a.createElement(p,null,e.projectTech3)),r.a.createElement(b.a,null,"View More")),r.a.createElement(o,null,r.a.createElement(d,null,e.projectContent),r.a.createElement(m,null,r.a.createElement(h,{gif:e.projectGif,title:e.projectTitle,hosted:e.hosted}),r.a.createElement(C,{href:e.gitHub,target:"blank"},"View Code")))))}var O=n("MiJL"),E=n.n(O),_=n("qAge"),x=n.n(_),k=n("dZx+"),j=n.n(k),M=n("9ox4"),S=n.n(M),N=n("Zc2B"),A=n.n(N),T=n("/O3a"),P=n.n(T),R=n("EqZ6"),D=n.n(R),F=n("2qYP"),I=n.n(F),H=[{title:"Slot Machine",tech1:"HTML",tech2:"CSS",tech3:"Javascript",content:"Simple browser game. This was my first attempt at writing javascript logic for a game.",image:""+E.a,gif:""+A.a,color1:"rgba(72, 103, 228, 0.4)",color2:"rgba(27, 60, 191, 0.8)",gitHub:"https://github.com/LaunchPad90/TombstoneSlotMachine",hosted:""},{title:"Smack-Talk",tech1:"Node.js",tech2:"Express.js",tech3:"MongoDB",content:"Do you love cooking? Do you hate viewing recipes on blog sites? This is the app for you. Enough talking, lets cook.",image:""+x.a,gif:""+P.a,color1:"rgba(150, 0, 200, 0.4)",color2:"rgba(124, 59, 220, 0.8)",gitHub:"https://github.com/LaunchPad90/Smack-Talk",hosted:"https://thawing-wave-87870.herokuapp.com/"},{title:"Bad App-app",tech1:"Python",tech2:"Django",tech3:"MongoDB",content:"A website designed for developers to post ideas and rate other app ideas. Guaranteed to help with your creativity.",image:""+j.a,gif:""+D.a,color1:"rgba(255, 0, 12, 0.4)",color2:"rgba(255, 168, 96, 0.8)",gitHub:"https://github.com/LaunchPad90/bad_app_app",hosted:"https://badapp-app.herokuapp.com/"},{title:"FORE!-card",tech1:"React.js",tech2:"Express.js",tech3:"MongoDB",content:"Easy to use scorecard app, designed with a mobile first approach. This app wont help with your game, but it will help you see how bad you are...FORE!",image:""+S.a,gif:""+I.a,color1:"rgba(85, 197, 122, 0.4)",color2:"rgba(21, 157, 62, 0.8)",gitHub:"https://github.com/LaunchPad90/FORE-card",hosted:""}];function L(e){var t=a.b.div.withConfig({displayName:"projects__CardContainer",componentId:"sc-1moua6e-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;"]);return r.a.createElement(t,null,H.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement(w,{projectTitle:e.title,projectTech1:e.tech1,projectTech2:e.tech2,projectTech3:e.tech3,projectContent:e.content,projectImage:e.image,projectGif:e.gif,color1:e.color1,color2:e.color2,gitHub:e.gitHub,hosted:e.hosted}))})))}n("rMck");var q=n("W/9C");function U(){var e=W(["\n            font-size: 2rem;\n        "]);return U=function(){return e},e}function B(){var e=W(["\n      font-size: 2rem;\n      letter-spacing: .2rem;\n      width: 100vw;\n    "]);return B=function(){return e},e}function z(){var e=W(["\n      font-size: 2rem;\n      width: 100vw;\n    "]);return z=function(){return e},e}function W(e,t){return t||(t=e.slice(0)),e.raw=t,e}function V(){var e=Object(a.c)(["0%{opacity:0;transform:translateX(-50rem) rotate(-40deg);}80%{transform:translateX(1rem)}100%{opacity:1;transform:translate(0)}"]),t=Object(a.c)(["0%{opacity:0;transform:translateX(50rem) rotate(100deg);}80%{transform:translateX(-1rem);}100%{opacity:1;transform:translate(0);}"]),n=a.b.div.withConfig({displayName:"pages__Hero",componentId:"sc-1bygtfm-0"})(["height:100%;background:linear-gradient( to left bottom,#7597D380,#7597D380),url("," );background-size:cover;background-position:top;clip-path:polygon(2% 0,98% 0,98% 80%,2% 100%);display:flex;flex-direction:column;justify-content:center;"],l.a),o=a.b.div.withConfig({displayName:"pages__HeroTextBox",componentId:"sc-1bygtfm-1"})(["text-align:center;align-self:center;justify-content:center;color:white;font-family:Roboto Condensed,sans-serif;margin-bottom:2rem;"]),i=a.b.span.withConfig({displayName:"pages__HeroPrimaryMain",componentId:"sc-1bygtfm-2"})(["display:block;font-size:5rem;font-weight:700;letter-spacing:.2rem;margin-bottom:.5rem;animation:"," 1s ease-out;",""],e,c.a.l(z())),u=a.b.span.withConfig({displayName:"pages__HeroPrimarySub",componentId:"sc-1bygtfm-3"})(["display:block;padding:2%;font-size:2rem;letter-spacing:.2rem;animation:"," 1s ease-out;",""],t,c.a.l(B())),d=a.b.h1.withConfig({displayName:"pages__ProjectHeader",componentId:"sc-1bygtfm-4"})(["font-size:3rem;text-align:center;margin-top:1.3rem;color:#383838;",""],c.a.l(U()));return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(n,null,r.a.createElement(o,null,r.a.createElement(i,null,"Denver based developer"),r.a.createElement(u,null,"Focusing on front-end technologies. Currently hacking around in React and challenging myself on codewars."))),r.a.createElement(d,null,"View my Recent Work"),r.a.createElement(L,null),r.a.createElement(q.a,null)))}},S1to:function(e,t,n){"use strict";n("V+eJ"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,r=t.shiftKey,i=n[0],l=n[n.length-1];if(e===document.activeElement){if(!r)return;o=l}l!==document.activeElement||r||(o=i);i===document.activeElement&&r&&(o=l);if(o)return t.preventDefault(),void o.focus();var s=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==s||"Chrome"==s[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var c=n.indexOf(document.activeElement);c>-1&&(c+=r?-1:1);if(void 0===(o=n[c]))return t.preventDefault(),void(o=r?l:i).focus();t.preventDefault(),o.focus()};var o,r=n("ZDLa"),a=(o=r)&&o.__esModule?o:{default:o};e.exports=t.default},SorC:function(e,t,n){e.exports=n.p+"static/skate-hero-27e1307cfb1db400ba39100c6ebc7969.jpeg"},UIKY:function(e,t,n){"use strict";n("8+KV"),n("V+eJ"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},VKEO:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){i.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==i.length&&(e=i.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){i.length>0&&i.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var o,r=n("ZDLa"),a=(o=r)&&o.__esModule?o:{default:o};var i=[],l=null,s=!1;function c(){s=!0}function u(){if(s){if(s=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,a.default)(l)[0]||l).focus()}),0)}}},WkvU:function(e,t,n){"use strict";var o,r=n("UIKY"),a=(o=r)&&o.__esModule?o:{default:o};var i=void 0,l=void 0,s=[];function c(){0!==s.length&&s[s.length-1].focusContent()}a.default.subscribe((function(e,t){i&&l||((i=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),i.style.position="absolute",i.style.opacity="0",i.setAttribute("tabindex","0"),i.addEventListener("focus",c),(l=i.cloneNode()).addEventListener("focus",c)),(s=t).length>0?(document.body.firstChild!==i&&document.body.insertBefore(i,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(i.parentElement&&i.parentElement.removeChild(i),l.parentElement&&l.parentElement.removeChild(l))}))},Ye7m:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=s,t.setElement=function(e){var t=e;if("string"==typeof t&&i.canUseDOM){var n=document.querySelectorAll(t);s(n,t),t="length"in n?n[0]:n}return l=t||l},t.validateElement=c,t.hide=function(e){c(e)&&(e||l).setAttribute("aria-hidden","true")},t.show=function(e){c(e)&&(e||l).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){l=null},t.resetForTesting=function(){l=null};var o,r=n("2W6z"),a=(o=r)&&o.__esModule?o:{default:o},i=n("2zs7");var l=null;function s(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){return!(!e&&!l)||((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},ZDLa:function(e,t,n){"use strict";n("0l/t"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(i)};var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function i(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},ZXdF:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("q1tI"),r=n.n(o),a=n("vOnD");function i(e){var t=e.children,n=a.b.button.withConfig({displayName:"button__Button",componentId:"sc-1d911st-0"})(["background-color:#3A5F85;color:white;padding:.5rem 2rem;display:inline-block;border-radius:100px;font-size:1rem;cursor:pointer;"]);return r.a.createElement(n,null,t)}},Zc2B:function(e,t,n){e.exports=n.p+"static/slotMachine2-d7ee32496ab8223f5a8391c6ad2b963a.gif"},"dZx+":function(e,t,n){e.exports=n.p+"static/badapp-be1a79fcbd32bc8ce73e6ca0182fa501.png"},fbhf:function(e,t,n){"use strict";n("KKXr"),n("8+KV"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},r={};t.add=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),n.add(e)}));var n,a},t.remove=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&n.remove(e)}));var n,a}},qAge:function(e,t,n){e.exports=n.p+"static/food-6874c838e52e30cc24f77ddc5b994ad3.png"},qFS3:function(e,t,n){"use strict";n("eM6i"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=m(a),l=m(n("i8i4")),s=m(n("17x9")),c=m(n("QEso")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("Ye7m")),d=n("2zs7"),f=m(d),p=n("94VI");function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",v=void 0!==l.default.createPortal,C=function(){return v?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var O=function(e){function t(){var e,n,r;h(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=r=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.removePortal=function(){!v&&l.default.unmountComponentAtNode(r.node);var e=w(r.props.parentSelector);e?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=C()(r,i.default.createElement(c.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},b(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(v||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!v&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var i=n.prevParent,l=n.nextParent;l!==i&&(i.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||r)&&!v&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&v?(!this.node&&v&&(this.node=document.createElement("div")),C()(i.default.createElement(c.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(a.Component);O.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.instanceOf(f.default),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func},O.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},O.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(O),t.default=O},rMck:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-062f486229ab5858f725.js.map