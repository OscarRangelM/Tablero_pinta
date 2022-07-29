'use strict'
// alert("hola");
// const mq=matchMedia("(max-width: 500px)") ;
// const caja=document.querySelector(".caja");

// mq.addEventListener("change",()=>{
//     if (mq.matches) caja.classList.replace("caja","responsive-caja");
//     else if(caja.className =="responsive-caja")caja.classList.replace("responsive-caja", "caja");
// })

// const cajas=document.querySelectorAll(".caja");

// const verifyVisibility=(entries)=>{
//     for(const entry of entries){
//         if (entry.isIntersecting) console.log("Se esta viendo la caja: ",entry.target.textContent);
//     }
// }

// const observer = new IntersectionObserver(verifyVisibility);

// for (const caja of cajas){
//     observer.observe(caja);
// }

// if(!('Notification' in window)){
//     console.log("Las notificaciones no estan disponibles en este navegador");
// }

// Notification.requestPermission(()=>{
//     if(Notification.permission=="granted"){
//         new Notification("Esto esta funcionando");
//     }
// })


// const worker =new Worker("worker.js");

// document.querySelector(".button").addEventListener("click",()=>ejecutarBucle());

// const ejecutarBucle=()=>{
//     worker.postMessage(true);
// }

// console.log(navigator.appCodeName);
// console.log(navigator.hardwareConcurrency);

// if(navigator.serviceWorker){
//     navigator.serviceWorker.register("sw.js");
// }

const canvas= document.querySelector(".canvas");

const dif=canvas.getBoundingClientRect();

const ctx = canvas.getContext("2d");

// ctx.strokeStyle="#48e";
// ctx.strokeRect(50,30, 400,200);
// ctx.fillRect(40,20,400,200);

let painting,color,linewidth, difX, difY;

canvas.addEventListener("mousedown",(e)=>{
    difX=e.clientX - dif.left;
    difY= e.clientY - dif.top;
    painting=true;
    color=document.getElementById("color").value;
    linewidth =document.getElementById("lw").value;
    ctx.beginPath();
})

canvas.addEventListener("mousemove", e=>{
    if(painting){
        dibujar(difX,difY,e.clientX-dif.left,e.clientY-dif.top);
        difX=e.clientX-difX.left;
        difY= e.clientY - difY.top;
    }
})

canvas.addEventListener("mouseup",()=>{
    ctx.closePath();
    painting=false;
})


const dibujar =(x1,y1,x2,y2)=>{
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}