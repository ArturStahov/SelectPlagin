(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Dv/5":function(e,t,s){},QfWi:function(e,t,s){"use strict";s.r(t);s("Dv/5"),s("IlJM"),s("8cZI"),s("lmye");function i(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var n=function(){function e(e,t,s){this.selectRef=document.querySelector(e),console.log(this.selectRef),this.options=t,this.selectedID=s,this._render(),this._setup(),this.valueRef=document.querySelector(e+' [data-type="value"]')}var t,s,n,l=e.prototype;return l._setup=function(){this.handlerEvent=this.handlerEvent.bind(this),this.selectRef.addEventListener("click",this.handlerEvent)},l.handlerEvent=function(e){var t=e.target.dataset.type;if("input"===t&&this.toggle(),"item"===t){var s=e.target.dataset.id;this.select(s)}"backdrop"===t&&this.close()},l.toggle=function(){this.isOpen?this.close():this.open()},l._render=function(){var e=this.options,t=e.placeholder,s=e.data,i=e.startID;this.selectRef.classList.add("select"),this.selectRef.innerHTML=function(e,t,s){void 0===e&&(e=[]);var i=null!=t?t:"Выбери",n=" ",l=e.map((function(e){return e.id===s?(i=e.value,n="selected"):n=" ",'<li class="select-item '+n+'" data-type="item" data-id="'+e.id+'">'+e.value+"</li>"}));return'<div class="select-backdrop" data-type="backdrop"></div>\n           <div class="select-input" data-type="input">\n          <span class="select-text" data-type="value">\n            '+i+'\n          </span>\n        </div>\n        <div class="select-dropdown">\n          <ul class="select-list">\n           '+l.join(" ")+"\n          </ul>\n        </div>"}(s,t,i)},l.open=function(){this.selectRef.classList.add("open")},l.close=function(){this.selectRef.classList.remove("open")},l.delete=function(){this.selectRef.removeEventListener("click",this.handlerEvent),this.selectRef.innerHTML=" "},l.select=function(e){this.selectedID=e;var t=this.currentItem;this.valueRef.textContent=t.value;var s=this.selectRef.querySelector(".selected");null!==s&&s.classList.remove("selected"),this.selectRef.querySelector('[data-id="'+e+'"]').classList.add("selected"),this.close()},t=e,(s=[{key:"isOpen",get:function(){return this.selectRef.classList.contains("open")}},{key:"currentItem",get:function(){var e=this;return this.options.data.find((function(t){return t.id===e.selectedID}))}}])&&i(t.prototype,s),n&&i(t,n),e}();new n("#select-plugin",{placeholder:"выбери значение",data:[{id:"0",value:"react"},{id:"1",value:"node"},{id:"2",value:"javascript"},{id:"3",value:"css"},{id:"4",value:"scss"},{id:"5",value:"html"},{id:"6",value:"json"},{id:"7",value:"npm"},{id:"8",value:"ajax"}],startID:"3"})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c4523b81ccee0a36f558.js.map