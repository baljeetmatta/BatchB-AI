// const items=document.querySelector("#items");
// const box=document.querySelector("#box");
// const button1=document.querySelector("#button1");

// button1.addEventListener("click",function(){
//     let li=document.createElement("li");
//     //<li>Dsdsa</li>
//     li.innerText=box.value;
//     items.appendChild(li);


// })
let tasks = [];
let taskid = 1;

const taskName = document.querySelector("#taskName");
const taskContainer = document.querySelector("#taskContainer");
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function () {
    addTask();

})

taskName.addEventListener("keyup", function (e) {
    // console.log(e);
    if (e.key == "Enter") {
        // tasks.push(taskName.value);
        addTask();
    }


})
function addTask()
{
     let task = {
            id: taskid,
            title: taskName.value,
            status: "Pending"
        }
        console.log(task);
        
        tasks.push(task);
        taskid++;



        addDom(task);
        taskName.value = "";
        storeTasks();
}

function addDom(task) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id",task.id);


    let titleSpan = document.createElement("span");
    titleSpan.innerText = task.title;
    mainDiv.appendChild(titleSpan);

    let chkBox=document.createElement("input");
    chkBox.setAttribute("type","checkbox");
    chkBox.addEventListener("click",function(){
       // console.log(chkBox.checked);
       let status="Pending";
        if(chkBox.checked)
        {
            status="Completed";
            titleSpan.style.textDecoration="line-through";
            //chkBox.remove();

        }
        else
            titleSpan.style.textDecoration="none";

        task.status=status;
        storeTasks();
        console.log(tasks);





    })
    mainDiv.appendChild(chkBox);

    let delBtn=document.createElement("button");
    delBtn.innerText="Del";

    // delBtn.addEventListener("click",function(){
    //     mainDiv.remove();
    //    tasks= tasks.filter(function(item){
    //         return item.id!=task.id;
    //     })
    //     console.log(tasks);
    // })
    delBtn.addEventListener("click",delHandler);

    mainDiv.appendChild(delBtn);
    

    taskContainer.appendChild(mainDiv);
    console.log(tasks);


}
function delHandler(e)
{
    let id=e.target.parentNode.getAttribute("id")
e.target.parentNode.remove();
tasks= tasks.filter(function(item){
            return item.id!=id;
        })
        storeTasks();

    //console.log(e.target.parentNode);

}
///Local Browser ->localStorage->localStorage

//localStorage.setItem("A",10);
//let arr=[10,20,30,40];
//console.log(arr);
//document.write(arr);
let obj={
    id:1,
    "Name":"Text"
}
//console.log(obj);
//document.write(JSON.stringify( obj));//Object ->String

//JSON.parse()->String->Object
function storeTasks()
{
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function loadTasks()
{
    if(localStorage.getItem("tasks"))
      tasks=JSON.parse( localStorage.getItem("tasks"));

   tasks.forEach(function(task){
    if(taskid<task.id)
        taskid=task.id;
    addDom(task)
   })
   if(tasks.length!=0)
   taskid++;

   //console.log(data[0].title);


}
loadTasks()