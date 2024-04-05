// JavaScript source code
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = taskInput.value;
        const li = document.createElement('li');
        li.innerHTML = taskText + ' <button class="delete-btn" onclick="deleteTask(this)">Supprimer</button>';
        taskList.appendChild(li);
        let editButton = document.createElement("button");
        editButton.innerHTML = taskText + ' <button class="modify" onclick="ediTask(this)">Modifier</button>';
        li.appendChild(editButton);
        saveData();
        taskInput.value = '';

        editButton.onclick = function () {
            editTask(li);
        };



    } else {
        alert('Veuillez entrer une t�che valide.');
    }

} function editTask(task) {
    var taskTextElement = task.firstChild;
    var taskText = taskTextElement.textContent;

    var newTaskText = prompt("Modifier la t�che :", taskText);

    if (newTaskText === null || newTaskText === "") {
        return; // Ne rien faire si l'utilisateur a cliqu� sur Annuler ou n'a pas entr� de nouveau texte
    }

    taskTextElement.textContent = newTaskText;
}
function deleteTask(btn) {
    btn.parentNode.remove();
    saveData();
}

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();