// import loadTodo from "./loadTodo";
// import currentPage from "./currentPage";
import loadProject from "./loadProject";

const projectListStorage = 'projectList';

function deleteProject(projectId){
    // delete the project list
    const getProjectList = JSON.parse(localStorage.getItem(projectListStorage));
    const filterProject = getProjectList.filter(project => project.projectId !== projectId)
    localStorage.setItem(projectListStorage, JSON.stringify(filterProject));

    // delete the storage for that project
    const todoKey = projectId;
    localStorage.removeItem(todoKey)
    loadProject()
    const projectTitle = document.querySelector('.project-title')
    projectTitle.textContent = ""
    // loadTodo(currentPage.getCurrentPage())
}

export default deleteProject