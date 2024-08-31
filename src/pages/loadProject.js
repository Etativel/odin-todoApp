import currentPage from "./currentPage";
import loadTodo from "./loadTodo";
import deleteProject from "./deleteProjects";
const storageKey = 'projectList'
function loadProject(){

    const projectBtnContainer = document.querySelector('.sub-project-container');
    projectBtnContainer.innerHTML = ""
    const getProject = JSON.parse(localStorage.getItem(storageKey)) || [];
    // console.log(getProject)
    getProject.forEach(project=>{
        // console.log(project)
        const container = document.createElement('div')
        container.classList.add('sub-project-btn')
        const projectDOM = `
        <button class="project-btn active-btn active-project-btn small-font" id=${project.projectId}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style="width: 16px; height: 16px;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
        </svg>
            <p>${project.projectName}<p>
        <button class="delete-project-btn" id=${project.projectId}>
            Del
        </button>
        </button>`
        container.innerHTML = projectDOM;
        projectBtnContainer.appendChild(container);
    })

    const projectBtn = document.querySelectorAll('.active-project-btn');
    projectBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage.setCurrentPage(btn.id)
            loadTodo(currentPage.getCurrentPage())
        });
    });

    const deleteBtn = document.querySelectorAll('.delete-project-btn')
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            deleteProject(e.target.id)
        })
    })

        
}

export default loadProject