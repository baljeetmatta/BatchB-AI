const name=document.querySelector("#name");
const job=document.querySelector("#job");
const send=document.querySelector("#send");

send.addEventListener("click",()=>{
    
    let request={
        name:name.value,
        job:job.value
    }
    sendRequest(request);

})

let sendRequest=(request)=>{

    let xmlRequest=new XMLHttpRequest();
    xmlRequest.open("POST","https://reqres.in/api/users");
    xmlRequest.addEventListener("load",()=>{

        console.log(xmlRequest.responseText)
    })
    xmlRequest.setRequestHeader("x-api-key","reqres-free-v1")
 xmlRequest.setRequestHeader("Content-type","application/json")
    xmlRequest.send(JSON.stringify( request));


}


