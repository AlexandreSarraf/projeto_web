function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    if (taskText !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = function() {
            this.classList.toggle("done");
        };
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Por favor, insira uma tarefa!");
    }
}