// should check if user on project page
import deleteTodo from "./deleteTodo";
import pageStyling from "./pageStyling";
import OnProjectPage from "./onProjectPage";
import { showEditTodo } from "./editTodo";
import { attachEditDialogListeners } from "../events/eventListeners";

const projectNameStorageKey = "projectList";
function loadTodo(currentPage) {
  let storageKey = currentPage;
  const projectName = JSON.parse(localStorage.getItem(projectNameStorageKey));
  pageStyling(currentPage);
  const taskContainerPosition = document.querySelector(
    ".task-container__position"
  );
  taskContainerPosition.innerHTML = "";
  const todoObject = JSON.parse(localStorage.getItem(storageKey));
  const projectTitle = document.querySelector(".project-title");

  //Set the project title based on what page its clicked
  if (OnProjectPage.getProjectPage()) {
    const findName = projectName.find((item) => item.projectId === currentPage);
    projectTitle.textContent =
      findName.projectName.charAt(0).toUpperCase() +
      findName.projectName.slice(1);
  } else {
    projectTitle.textContent =
      currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  }

  // do not check this first before checking the projectList. There is possibility that the current project doesn't have a task yet
  if (!todoObject) {
    console.log("there is no todo in the storage");
    return;
  }
  todoObject.forEach((todo) => {
    const taskContainer = document.createElement("div");
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
                <button class = "edit-task">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 edit-todo-svg sidebar-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </button>
            </div>
        `;
    const checkBox = taskContainer.querySelector(".task-check");
    checkBox.addEventListener("click", () => {
      checkBox.style.background = "rgb(109, 226, 255)";
      deleteTodo(todo.id, todo.storageKey);
    });
    const editTaskBtn = taskContainer.querySelector(".edit-task");
    editTaskBtn.addEventListener("click", () => {
      // Call edit task module, pass the todo
      showEditTodo(todo);
      const editFormDialog = document.querySelector(".dialog-form.edit");
      attachEditDialogListeners(editFormDialog, todo);
    });
    taskContainerPosition.appendChild(taskContainer);
  });
}
export default loadTodo;
