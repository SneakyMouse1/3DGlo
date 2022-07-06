(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function n(c){let a=(c-r)/o;a>1&&(a=1);let l=e(a);t(l),a<1&&requestAnimationFrame(n)}))},t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),r=document.createElement("div"),n=(e,t="")=>{r.classList.remove("loader-circle"),r.style.color="#fff",r.innerHTML="","error"===e?r.innerHTML=`<img src="images/icons/error-close-svgrepo-com.svg" width='45px;'/> Ошибка... ${t}`:"success"===e&&(r.innerHTML="<img src=\"images/icons/success-svgrepo-com.svg\" width='45px;'/> Спасибо! Наш менеджер cкоро с Вами свяжется"),setTimeout((()=>{r.remove()}),5e3)};try{if(!o)throw new Error("Верните форму, пожалуйста....");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),c=new FormData(o),a={};r.className="loader-circle";let l="";for(let e=1;e<=1;e++)l+=`<div class="loader-circle-${e}"><div></div></div>`;var s;r.innerHTML=l,o.append(r),c.forEach(((e,t)=>{a[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?a[e.id]=t.textContent:"input"===e.type&&(a[e.id]=t.value)})),(e=>{let t=!0;return e&&e.forEach((e=>{"user_name"===e.name?/[^а-яА-Я-\s]/g.test(e.value)&&(t=!1):"user_phone"===e.name?/[^0-9\-\(\)\+]/g.test(e.value)&&(t=!1):"user_message"===e.name&&/[^а-яА-Я-\s0-9\(\)\.\,\:\"\!\?]/g.test(e.value)&&(t=!1)})),t})(e)?(s=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n("success"),e.forEach((e=>{e.value=""}))})).catch((e=>{n("err","Данные не удалось отправить")})):n("err","Данные не валидны")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let n;const c=()=>{let e=(()=>{let e=(new Date("28 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),c=e.hours<10?"0"+e.hours:e.hours,a=e.minutes<10?"0"+e.minutes:e.minutes,l=e.seconds<10?"0"+e.seconds:e.seconds;e.timeRemaining>0?(t.textContent=c,o.textContent=a,r.textContent=l):(t.textContent="00",o.textContent="00",r.textContent="00",clearInterval(n))};c(),n=setInterval(c,1e3)})(),(()=>{const e=document.querySelector("menu"),t=e.querySelector(".close-btn");document.addEventListener("click",(o=>{o.target.closest(".menu")?e.classList.add("active-menu"):!o.target.closest("a")&&o.target.closest("menu")||e.classList.remove("active-menu"),o.target===t&&o.preventDefault()}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),r=o.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{document.body.clientWidth>768?(o.style.display="block",e({duration:600,timing:e=>e,draw(e){r.style.left=42*e+"%",r.style.transform="translateY(50%)"}})):o.style.display="block"}))})),o.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(r.style.left="0px",o.style.display="none")}))})(),(()=>{const e=document.querySelector("menu").querySelectorAll("ul>li>a"),t=document.querySelector("main a"),o=document.getElementById("service-block");t.addEventListener("click",(e=>{e.preventDefault(),o.scrollIntoView({behavior:"smooth",block:"start"})})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))}))})(),(()=>{const e=document.querySelectorAll(".calc-block >input"),t=document.querySelectorAll("input[name = user_name]"),o=document.querySelectorAll("input[name = user_email]"),r=document.querySelectorAll("input[name = user_phone]"),n=document.querySelectorAll("input[name = user_message]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я -]/gi,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w@-_.!~*]/gi,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^()-\d]/g,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я -]/gi,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");(()=>{const e=document.createElement("li");t.forEach(((t,r)=>{t[r]=e.cloneNode(!0),o.append(t[r])})),document.querySelectorAll(".dot")[0].classList.add("dot-active")})();const r=document.querySelectorAll(".dot");let n,c=0;const a=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{a(t,c,"portfolio-item-active"),a(r,c,"dot-active"),c++,c>=t.length&&(c=0),l(t,c,"portfolio-item-active"),l(r,c,"dot-active")},i=(e=1500)=>{n=setInterval(s,e)};i(3e3),e.addEventListener("click",(e=>{e.preventDefault();const o=e.target;o.matches(".portfolio-btn, .dot")&&(a(t,c,"portfolio-item-active"),a(r,c,"dot-active"),o.matches("#arrow-right")?c++:o.matches("#arrow-left")?c--:o.matches(".dot")&&r.forEach(((e,t)=>{e===o&&(c=t)})),c<0?c=t.length-1:c>=t.length&&(c=0),l(t,c,"portfolio-item-active"),l(r,c,"dot-active"))})),e.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),e.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i(3e3)}))})(),((t=100)=>{const o=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),l=document.getElementById("total");o.addEventListener("input",(o=>{if(o.target===r||o.target===n||o.target===c||o.target===a){const o=(()=>{const e=+r.options[r.selectedIndex].value,o=n.value;let l=0,s=1,i=1;return c.value>1&&(s+=+c.value/10),a.value&&a.value<5?i=2:a.value&&a.value<10&&(i=1.5),l=r.value&&n.value?t*e*o*s*i:0,l})();e({duration:500,timing:e=>e,draw(e){l.textContent=Math.round(e*o)}})}}))})(),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();