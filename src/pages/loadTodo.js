// should check if user on project page
import deleteTodo from "./deleteTodo";
import pageStyling from "./pageStyling";
import OnProjectPage from "./onProjectPage";
const projectNameStorageKey = 'projectList'

function loadTodo (currentPage){
    let storageKey = currentPage;
    console.log(currentPage)
    const projectName = JSON.parse(localStorage.getItem(projectNameStorageKey))
    pageStyling(currentPage);
    const taskContainerPosition = document.querySelector('.task-container__position')
    taskContainerPosition.innerHTML = ""
    const todoObject = JSON.parse(localStorage.getItem(storageKey))
    const projectTitle = document.querySelector('.project-title')

    //Set the project title based on what page its clicked
    if (OnProjectPage.getProjectPage()){
        const findName = projectName.find(item => item.projectId === currentPage)
        projectTitle.textContent = findName.projectName.charAt(0).toUpperCase() + findName.projectName.slice(1)
    }else{
        projectTitle.textContent = currentPage.charAt(0).toUpperCase() + currentPage.slice(1)
    }

    // do not check this first before checking the projectList. There is possibility that the current project doesn't have a task yet
    if (!todoObject){
        console.log('there is no todo in the storage')
        return
    }

    todoObject.forEach(todo => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add("task-container");
        taskContainer.innerHTML = `
            <div class="overflow-act">...</div>
            <button  class="task-check checkbox ${todo.priority}">
            
            </button>
            <div class="task__column-container">
                <div class="task__column">
                    <span class="task-title">${todo.title}</span>
                    <span class="task-desc">${todo.description}</span>
                    <span>${todo.dueDate}</span>
                </div>

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