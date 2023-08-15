class Task {
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.task.push(task);
    }
}

function randomId() {
    return Math.floor(Math.random() * 9999);
}

const TaskList = TaskList();

function createTask() {
    let taskTitle = document.getElementById("field").value;
    let task = new TaskList(randomId), title, false;

    TaskList.addTask()
}