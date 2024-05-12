var notes = [];
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

        console.log("Anotações atuais:", notes); // Verifica se a variável "notes" contém anotações
        saveNotes(); // Chama a função saveNotes()
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

function saveNotes() {
    if (notes.length === 0) {
        alert("Não há anotações para salvar!");
        return;
    }

    var blob = new Blob([notes.join('\n')], { type: 'text/plain' });
    console.log(blob)
    console.log("Salvando anotações...");

    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "anotacoes.txt";
    a.click();
}