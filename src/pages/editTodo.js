import { openDialogUtils } from "./domUtils";
import { closeDialogUtils } from "./domUtils";
import loadProject from "./loadProject";
import loadTodo from "./loadTodo";
import currentPage from "./currentPage";
import loadAllTask from "./loadAllTask";

function showEditTodo(todo){
    // Dialog
    const dialogContainer = document.querySelector('.formDialog.edit');
    const taskName = document.querySelector('.task-name-input.edit');
    const taskDescription = document.querySelector('.task-desc-input.edit');
    const taskDueDate = document.querySelector('.due-date.edit');
    const taskPriority = document.querySelector('.task-priority.edit');

    // Dialog form field
    taskName.value = todo.title
    taskDescription.value = todo.description
    taskDueDate.value = todo.dueDate
    taskPriority.value = todo.priority || '';

    openDialogUtils(dialogContainer)

    console.log(todo.priority)


}

function saveEditedTodo(todo) {
    console.log(todo)
    const storageKey = todo.storageKey; 
    const taskId = todo.id; 
    
    let existingTasks = JSON.parse(localStorage.getItem(storageKey)) || [];

    
    const taskName = document.querySelector('.task-name-input.edit').value;
    const taskDescription = document.querySelector('.task-desc-input.edit').value;
    const taskDueDate = document.querySelector('.due-date.edit').value;
    const taskPriority = document.querySelector('.task-priority.edit').value;

    console.log(taskName)
    console.log(taskDescription)
    console.log(taskDueDate)
    console.log(taskPriority)
    
    existingTasks = existingTasks.map(task => {
        if (task.id === taskId) {
            return {
                ...task,
                title: taskName,
                description: taskDescription,
                dueDate: taskDueDate,
                priority: taskPriority
            };
        }
        return task;
    });

    localStorage.setItem(storageKey, JSON.stringify(existingTasks));
    loadTodo(currentPage.getCurrentPage())
    loadAllTask()

    console.log(currentPage.getCurrentPage())

}

export {showEditTodo, saveEditedTodo}