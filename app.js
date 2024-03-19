// Sample tasks data
let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <h3>${task.taskName}</h3>
            <p>${task.description}</p>
            <p>Priority: ${task.priority}</p>
            <p>Start Date: ${task.startDate}</p>
            <p>Due Date: ${task.dueDate}</p>
        `;
        taskList.appendChild(taskElement);
    });
}

// Function to add a new task
function addTask() {
    const taskName = document.getElementById('task-name').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const startDate = document.getElementById('start-date').value;
    const dueDate = document.getElementById('due-date').value;

    const newTask = {
        taskName,
        description,
        priority,
        startDate,
        dueDate
    };

    tasks.push(newTask);
    renderTasks();
}

// Initial rendering
renderTasks();
