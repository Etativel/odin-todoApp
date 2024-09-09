import currentPage from "./currentPage";
import loadTodo from "./loadTodo";
import deleteProject from "./deleteProjects";
import OnProjectPage from "./onProjectPage";

const storageKey = 'projectList'
function loadProject(){
    const projectBtnContainer = document.querySelector('.sub-project-container');
    projectBtnContainer.innerHTML = ""
    const getProject = JSON.parse(localStorage.getItem(storageKey)) || [];
    getProject.forEach(project=>{
        const container = document.createElement('div')
        container.classList.add('sub-project-btn')
        const projectDOM = `
        <button class="project-btn active-btn active-project-btn small-font" id=${project.projectId}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width: 16px; height: 16px;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
        </svg>
            <p>${project.projectName}<p>
        </button>
        <button class="delete-project-btn a b c" id=${project.projectId}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 sidebar-icon delete-project-svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </button>`
        container.innerHTML = projectDOM;
        projectBtnContainer.appendChild(container);
    })
    const projectBtn = document.querySelectorAll('.active-project-btn');
    projectBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            OnProjectPage.setProjectPage(true)
            currentPage.setCurrentPage(btn.id)
            console.log(currentPage.getCurrentPage())
            loadTodo(currentPage.getCurrentPage())
        });
    });
    const deleteBtn = document.querySelectorAll('.delete-project-btn')
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            currentPage.setCurrentPage('inbox')
            OnProjectPage.setProjectPage(false)
            deleteProject(e.target.id)
            loadTodo(currentPage.getCurrentPage())
        })
    })
}
export default loadProject