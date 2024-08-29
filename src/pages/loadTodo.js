import deleteTodo from "./deleteTodo";
let storageKey = "todos";
function loadTodo (){
    const taskContainerPosition = document.querySelector('.task-container__position')
    taskContainerPosition.innerHTML = ""
    console.log(taskContainerPosition)
    const todoObject = JSON.parse(localStorage.getItem(storageKey))
    if (!todoObject){
        console.log('there is no todo in the storage')
        return
    }
    todoObject.forEach(todo => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add("task-container");
        taskContainer.innerHTML = `
            <div class="overflow-act">...</div>
            <button  class="task-check checkbox">
            
            </button>
            <div class="task__column">
                <span class="task-title">${todo.title}</span>
                <span class="task-desc">${todo.description}</span>
                <span>${todo.dueDate}</span>
                <span>${todo.priority}</span>
            </div>
        `;
        const checkBox = taskContainer.querySelector('.task-check')
        checkBox.addEventListener("click",()=>{
            checkBox.style.background = 'rgb(109, 226, 255)';
            deleteTodo(todo.id);
        });
        taskContainerPosition.appendChild(taskContainer);
    });
}

export default loadTodo