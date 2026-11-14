function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText == "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete" onclick="removeTask(this, '${taskText}')">X</button>`;
    li.onclick = function() {
        li.classList.toggle("completed");
    };
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    let tableRow = document.createElement("tr");
    tableRow.setAttribute("data-task", taskText);
    tableRow.innerHTML = `<td>${taskText}</td>`;
    document.getElementById("taskTable").appendChild(tableRow);
}

function removeTask(button, taskText) {
    let taskItem = button.parentElement;
    let tableRows = document.querySelectorAll("#taskTable tr");
    tableRows.forEach(row => {
        if (row.getAttribute("data-task") === taskText) {
            row.remove();
        }
    });
    taskItem.remove();
}
