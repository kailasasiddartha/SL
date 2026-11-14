// Experiment 4: To-Do List Application
let tasks = [
    { text: "Complete Scripting Languages Lab Record", completed: false },
    { text: "Implement JQuery AJAX search program", completed: true },
    { text: "Verify XML DTD validation rules", completed: false }
];

function renderTasks() {
    const list = document.getElementById('taskList');
    const counter = document.getElementById('taskCounter');
    list.innerHTML = "";

    const completedCount = tasks.filter(t => t.completed).length;
    counter.innerText = `${completedCount} of ${tasks.length} tasks completed`;

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;

        const leftDiv = document.createElement('div');
        leftDiv.className = 'task-left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleTask(index);

        const span = document.createElement('span');
        span.className = 'task-text';
        span.innerText = task.text;

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text === "") return;

    tasks.push({ text: text, completed: false });
    input.value = "";
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function clearAllTasks() {
    tasks = [];
    renderTasks();
}

document.addEventListener('DOMContentLoaded', renderTasks);