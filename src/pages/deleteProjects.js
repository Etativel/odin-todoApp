import currentPage from "./currentPage";
import loadAllTask from "./loadAllTask";
import loadProject from "./loadProject";
import OnProjectPage from "./onProjectPage";

const projectListStorage = 'projectList';
function deleteProject(projectId){
    const getProjectList = JSON.parse(localStorage.getItem(projectListStorage));
    const filterProject = getProjectList.filter(project => project.projectId !== projectId)
    localStorage.setItem(projectListStorage, JSON.stringify(filterProject));

    // This if statement set the currentPage to default (inbox). When the project name get deleted and the project list as we store the project name is empty, the addTodo function will check the projectName and it doesn't find it because the projectList are empty. So to prevent that, set the current page to default (inbox) and the OnProjectPage to false.
    if (filterProject.length === 0){
        currentPage.setCurrentPage('inbox')
        OnProjectPage.setProjectPage(false)
    }

    // delete the storage for that project
    const todoKey = projectId;
    localStorage.removeItem(todoKey)
    loadProject()

    const projectTitle = document.querySelector('.project-title')
    projectTitle.textContent = ""

    const taskContainerPosition = document.querySelector('.task-container__position')
    taskContainerPosition.innerHTML = ""
    loadAllTask()
}
export default deleteProject