
function addTask() {
   let task = document.getElementById("taskInput")
   let taskText = task.value
   
   let li = document.createElement("li")
   li.textContent = taskText

   let taskList = document.getElementById("taskList")
   taskList.appendChild(li)

   task.value = "";
   

}

let btn = document.getElementById("btn")
btn.addEventListener("click" , addTask)



