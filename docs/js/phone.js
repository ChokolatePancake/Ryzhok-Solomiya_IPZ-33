document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("phone");e.addEventListener("focus",(function(){""===this.value&&(this.value="+(380)-xxx-xx-xx")})),e.addEventListener("input",(function(e){const t=e.target;let n=t.value.replace(/\D/g,"");n.length<3?n="380"+n:"380"!==n.substring(0,3)&&(n="380"+n.substring(3));let u="+(380)-";for(let e=3;e<n.length&&e<10;e++)6===e&&(u+="-"),8===e&&(u+="-"),u+=n[e];t.value=u}))}));