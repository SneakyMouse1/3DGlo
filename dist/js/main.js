(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let c;const l=()=>{let e=(()=>{let e=(new Date("28 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),l=e.hours<10?"0"+e.hours:e.hours,o=e.minutes<10?"0"+e.minutes:e.minutes,a=e.seconds<10?"0"+e.seconds:e.seconds;e.timeRemaining>0?(t.textContent=l,n.textContent=o,r.textContent=a):(t.textContent="00",n.textContent="00",r.textContent="00",clearInterval(c))};l(),c=setInterval(l,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),r.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),r=e.querySelector(".popup-content");let c,l=0;const o=()=>{l++,c=requestAnimationFrame(o),l<42&&(r.style.left=l+"%",r.style.transform="translateY(50%)")};t.forEach((t=>{t.addEventListener("click",(()=>{document.body.clientWidth>768?(r.style.left="0px",e.style.display="block",c=requestAnimationFrame(o)):e.style.display="block"}))})),n.addEventListener("click",(()=>{l=0,cancelAnimationFrame(c),e.style.display="none"}))})(),(()=>{const e=document.querySelector("menu").querySelectorAll("ul>li>a"),t=document.querySelector("main a"),n=document.getElementById("service-block");t.addEventListener("click",(e=>{e.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"})})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))}))})(),(()=>{const e=document.querySelectorAll(".calc-block >input"),t=document.querySelectorAll("input[name = user_name]"),n=document.querySelectorAll("input[name = user_email]"),r=document.querySelectorAll("input[name = user_phone]"),c=document.querySelectorAll("input[name = user_message]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я -]/gi,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w@-_.!~*]/gi,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^()-\d]/g,"")}))})),c.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я -]/gi,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();