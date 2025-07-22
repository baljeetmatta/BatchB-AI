"use strict";

const display=document.querySelector("#display");
const startBtn=document.querySelector("#startBtn");
const stopBtn=document.querySelector("#stopBtn");
let counter=1;
let intervalid=0;
let isRunning=false;
startBtn.addEventListener("click",()=>{
   // clearInterval(intervalid);
if(!isRunning)
{
   intervalid= setInterval(count,1000);
   isRunning=true;
}

})
let count=()=>{
counter++;
display.innerText=counter;



}


stopBtn.addEventListener("click",()=>{
clearInterval(intervalid);
isRunning=false;
})
