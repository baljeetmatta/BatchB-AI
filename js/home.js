// const pContent=document.querySelector("#pContent");
// const button1=document.querySelector("#button1");
// const button2=document.querySelector("#button2");

// /*
// button1.onclick=function(){
//  console.log("Button 1 clicked");

// }
//  */
// //button1.addEventListener("click",function(){

// //});
// /*
// button1.addEventListener("click",clickHandler);

// function clickHandler(evt){
// //console.log("Button 1 clicked");
// //console.log(evt.target.getAttribute("id"));
// let id=evt.target.getAttribute("id");
// if(id=="button1")
// pContent.innerText="Modified Content";
// console.log(evt);

// }

// button2.addEventListener("click",clickHandler);
// */
/*
const firstText=document.querySelector("#firstText");
const secondText=document.querySelector("#secondText");
const resultText=document.querySelector("#resultText");
const resultDiv=document.querySelector("#resultDiv");
const addBtn=document.querySelector("#addBtn");

addBtn.addEventListener("click",function(){
  let no1= parseInt(firstText.value);
  let no2=parseInt( secondText.value);
  let add=no1+no2;
  resultText.value=add;
  resultDiv.innerText=add;


})
  */
 const button1=document.querySelector("#button1");
 const button2=document.querySelector("#button2");
 const button3=document.querySelector("#button3");
 const display=document.querySelector("#display");
/*
 button1.addEventListener("click",function(){
    display.value=display.value+"1";


 })
 button2.addEventListener("click",function(){
    display.value=display.value+"2";
    

 })
 button3.addEventListener("click",function(){
    display.value=display.value+"3";
    

 })
    */
//    button1.addEventListener("click",digitHandler);
//    button2.addEventListener("click",digitHandler);
//    button3.addEventListener("click",digitHandler);
 let operand1=0;
 let isOperator=false;
const plusButton=document.querySelector("#plusButton");
const equalButton=document.querySelector("#equalButton");
const elements=document.querySelectorAll(".digits");


equalButton.addEventListener("click",function(){
    let operand2=parseInt(display.value);
    let result=operand1+operand2;
    display.value=result;

})
elements.forEach(function(item){
    item.addEventListener("click",digitHandler);
})

plusButton.addEventListener("click",function(){
operand1=parseInt(display.value);
isOperator=true;

})

function digitHandler(e)
{
    if(display.value=="0" || isOperator==true)
    {
        display.value="";
        isOperator=false;
    }

        display.value=display.value+e.target.innerText;

}