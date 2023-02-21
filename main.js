const taskInput = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".add-task-button");
const taskList = document.querySelector(".tasks");
const form = document.querySelector(".new-task-form");

let tasks = [];
form.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();
    const taskName = taskInput.value;
    console.log(taskName);
    if (taskName) {
        const task = {
            name: taskName,
            completed: false,
        };
        tasks.push(task);
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskItem = document.createElement("div");
        taskItem.classList.add("task");

        taskItem.innerHTML = `
            <div class="content">
                <input type="text" class="name">
            </div>
            <div class="actions">
                <button type="button" class="done-button">Done</button>
                <button type="button" class="delete-button">Delete</button>
            </div>
        `;


        const taskNameElement = taskItem.querySelector(".name");
        taskNameElement.value = task.name;

        const deleteButton = taskItem.querySelector(".delete-button");
        const doneButton = taskItem.querySelector(".done-button");

        doneButton.addEventListener("click", () => {
            task.completed = true;
            taskNameElement.classList.add("completed");
        });

        deleteButton.addEventListener("click", () => {
            tasks.splice(i, 1);
            displayTasks();
        });

        taskList.appendChild(taskItem);
    }
}
