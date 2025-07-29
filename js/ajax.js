//Javascript ->client side programming
//AJAX
//XML EXCHANGE -.>JSON
//flat file
/*
LINE BY LINE
NAME
AGE

CITY
NAME
AGE
CITY
--------
CSV COMMA SEPEARATED VALUES
NAME,AGE,CITY
NAME,AGE,CITY
-------
XML ->HTML <B></B>
User Defined Tags
<Students>
    <Student>
        <Name></Name>
        <Age></Age>
        <City></City>
    </Student>
</Students>
----------
JSON - KEY VALUE PAIR

XMLHTTPRequest -class define browser and available to javascript as class
fetch - brwoser
axios
*/
/*
1. Create an Object
2. Prepare Connection -> Method,URL,aysnc/
3. Event- onreadystatechange(5->0-4), load(Response is recieved)=4
4. Send


*/
/*
//1. create an object
let xmlRequest=new XMLHttpRequest();
//2.Prepare
xmlRequest.open("GET","./products.json");
//Event handle
xmlRequest.onload=()=>{

    if(xmlRequest.status==200)
    {
        console.log("OnLoad",  xmlRequest.responseText);
        let obj=JSON.parse(xmlRequest.responseText);
        console.log(obj);

    }

 }

xmlRequest.addEventListener("load",()=>{

     if(xmlRequest.status==200)
    console.log("Load",  xmlRequest.responseText);
 console.log(xmlRequest.status);

})
xmlRequest.addEventListener("readystatechange",()=>{
    console.log(xmlRequest.readyState);
   

})
//4. Send
xmlRequest.send();
console.log("Sent...");
*/

const container=document.querySelector("#container");

let xmlRequest=new XMLHttpRequest();
//2.Prepare
//xmlRequest.open("GET","https://jsonplaceholder.typicode.com/posts");
xmlRequest.open("GET","https://reqres.in/api/users")
//Event handle
xmlRequest.onload=()=>{

    if(xmlRequest.status==200)
    {
       // console.log("OnLoad",  xmlRequest.responseText);
        // let obj=JSON.parse(xmlRequest.responseText);
        // console.log(obj);
        // obj.forEach((post)=>{
        //     addPost(post);
        // })

        let obj=JSON.parse(xmlRequest.responseText);
            obj.data.forEach((item)=>{
                addUsers(item);
            })
    }

 }
 xmlRequest.setRequestHeader("x-api-key","reqres-free-v1")
 xmlRequest.send();
function addPost(post)
{
    let mainDiv=document.createElement("div");
    let titleDiv=document.createElement("div");
    let bodyDiv=document.createElement("div");
    let hr=document.createElement("hr");
    titleDiv.innerText=post.title;
    bodyDiv.innerText=post.body;
    mainDiv.append(titleDiv,bodyDiv,hr);
    container.appendChild(mainDiv);




}
function addUsers(user)
{
    let mainDiv=document.createElement("div");
    let titleDiv=document.createElement("div");
    let bodyDiv=document.createElement("div");
    let hr=document.createElement("hr");
    titleDiv.innerText=user.first_name+" "+user.last_name;
    bodyDiv.innerText=user.email;
    mainDiv.append(titleDiv,bodyDiv,hr);
    container.appendChild(mainDiv);




}