//HOISTING
// console.log(test);
// var test=10;
// console.log(a);

// let a=10;

// function test()
// {
//     console.log(x);

//     if(true)
// {    var x=10;

// }

// }
// test();



// function test()
// {
//     console.log("Test ")
// }

// test();

//Arrow Functions, function as expression

// var code=function(){
//     console.log("Code called...")
// }

// code();
// display();

// function display()
// {
//     console.log("Display...")
// }
// let display1=()=>{
//     console.log("Display 1 called...")
// }

// function sum(x,y)
// {
//     return x+y;
// }
// let add=(x,y)=>{
//     return x+y;
// }
// let add1=(x,y)=>x+y;

// let add2=(x)=>x;
// let add3=x=>x;


// display1();
// var getFullName=()=>{
//     console.log(this);

//     console.log(`the name of user ${this.name}`);

// }


// let obj={
//     name:"Test name",
//     getName:getFullName
// }
// function getFullName()
// {
//     console.log(this.name);
// }
// obj.getName();




//console.log(x)

//CLOSURE PROPERTY
// function test()
// {
//     let code=10;
//         return function(){
//             console.log("Inner function",code);
//         }
// }
// let result=test();
// //console.log(code);
// //console.log(result);
// result();
// function xyz()
// {
//     var code=10;
// }
// //xyz();
// //console.log(code);

//currying
//MULTIPLE ARGUMENTS ->SINGLE ARUGMENT -> SERIES OF FUNCTION
// function sum(x,y)
// {
//     console.log(x,y);
//     return x+y;
// }

// function sum(x)
// {
//     return function(y){
//         console.log(x,y);
//         return x+y;
//     }
// }

// let  result=sum(10);


// result(20);
//OVERLOADING
// function sum(x,y)
// {
//     console.log("Multiple Arguments...")
// }


// sum(3);
// sum(3,4);
//Async Prog.
//callback functions

//Event Loop

//Call Stack
//Async Block ->aysnc /fetch browser API
function test()
{
    console.log("Test called...")
   // setTimeout(test,1000);

}
function demo()
{
    console.log("Demo called..");
}

//setInterval(test,1000);
//let id=setTimeout(test,3000)

//clearTimeout(id);

//test();
demo();


