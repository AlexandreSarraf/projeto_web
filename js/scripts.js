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
function addNote() {
    var noteInput = document.getElementById("noteInput");
    var noteText = noteInput.value.trim();
    if (noteText !== "") {
        notes.push(noteText);
        displayNotes(); // Atualiza a exibição das anotações
        noteInput.value = "";
    } else {
        alert("Por favor, insira uma anotação!");
    }
}

function displayNotes() {
    var noteDisplay = document.getElementById("noteDisplay");
    noteDisplay.innerHTML = ""; // Limpa o conteúdo anterior
    var ul = document.createElement("ul");
    notes.forEach(function(note) {
        var li = document.createElement("li");
        li.textContent = note;
        ul.appendChild(li);
    });
    noteDisplay.appendChild(ul);
}