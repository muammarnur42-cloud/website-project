const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.className = "delete-btn";

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        li.addEventListener("click", function() {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            tasks.splice(i, 1);
            saveTasks();
            renderTasks();
        });
    }
}

function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

renderTasks();