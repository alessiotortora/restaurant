(()=>{"use strict";function e(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("name"),t.textContent="Chez Pierre",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("nav");const t=document.createElement("ul"),n=document.createElement("li");return n.textContent="menu",n.addEventListener("click",(function(){const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h2");t.textContent="steak",e.appendChild(t)}())}();console.log(e)})),t.appendChild(n),e.appendChild(t),e}()),e}!function(){const t=document.getElementById("content");t.appendChild(e()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}())}()})();