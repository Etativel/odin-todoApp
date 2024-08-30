import currentPage from "./currentPage";
import loadTodo from "./loadTodo";

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
        <button class="project-btn active-btn active-project-btn" id=${project.projectId}>
            ${project.projectName}
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
    
}

export default loadProject