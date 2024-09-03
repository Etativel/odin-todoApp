// Check which page user at
import loadAllTask from "./loadAllTask";
import loadTodo from "./loadTodo";
function addTodo(currentPage){
    let storageKey = currentPage;
    console.log(currentPage)
    const taskName = document.querySelector('.task-name-input').value;
    const taskDescription = document.querySelector('.task-desc-input').value;
    const taskDueDate = document.querySelector('.due-date').value;
    let taskPriority = document.querySelector('.task-priority').value;
    const getId = new Date().toISOString();
    if (!taskPriority) {
        taskPriority = 'none';
    };

    const task = {
            id: getId,
            title: taskName,
            description: taskDescription,
            dueDate: taskDueDate,
            priority: taskPriority,
    };

    const existingTasks = JSON.parse(localStorage.getItem(storageKey)) || [];

    existingTasks.push(task);

    localStorage.setItem(storageKey, JSON.stringify(existingTasks));
    // localStorage.clear()
    loadTodo(currentPage)
    loadAllTask()
    
}

    export default addTodo
