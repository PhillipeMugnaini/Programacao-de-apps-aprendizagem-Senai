
function addTask(){

    //pega o input
    let input = document.querySelector("#input")
    let text = input.value

    if (text === ""){
        alert("Digite uma tarefa!")
        return
    }

    //pega a área onde as tarefas vão aparecer
    let taskArea = document.querySelector("#taskList")

    //cria uma tarefa (div)
    let task = document.createElement("li")
    task.innerText = text

   let taskText = document.createElement("span");
    taskText.style.cursor = "pointer";
    taskText.onclick = function() {
        taskText.classList.toggle("completed");
    };


    deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"
    deleteBtn.classList.add("delete-btn")

    deleteBtn.onclick = function(){
        task.remove()
    }

    task.appendChild(taskText)
    task.appendChild(deleteBtn)

    taskArea.appendChild(task)

    input.value =""
 }