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
    addDom();

})

taskName.addEventListener("keyup", function (e) {
    // console.log(e);
    if (e.key == "Enter") {
        // tasks.push(taskName.value);
        let task = {
            id: taskid,
            title: taskName.value,
            status: "Pending"
        }
        tasks.push(task);
        taskid++;


        addDom(task);
        taskName.value = "";
    }


})

function addDom(task) {
    let mainDiv = document.createElement("div");

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
        console.log(tasks);





    })
    mainDiv.appendChild(chkBox);

    let delBtn=document.createElement("button");
    delBtn.innerText="Del";

    delBtn.addEventListener("click",function(){
        mainDiv.remove();
       tasks= tasks.filter(function(item){
            return item.id!=task.id;
        })
        console.log(tasks);
    })
    mainDiv.appendChild(delBtn);
    

    taskContainer.appendChild(mainDiv);
    console.log(tasks);


}
