import { openDialogUtils, closeDialogUtils } from "../pages/domUtils";
import loadTodo from "../pages/loadTodo";
import addTodo from "../pages/addTodo";
import currentPage from "../pages/currentPage";
import loadProject from "../pages/loadProject";
import addProject from "../pages/addProject";
import OnProjectPage from "../pages/onProjectPage";

function attachDialogEventListeners(showDialog, closeDialog, formDialog, dialogContainer, projectTitle){
    showDialog.addEventListener('click',()=>{
        console.log(projectTitle)
        openDialogUtils(dialogContainer)
    });

    projectTitle.addEventListener('click', ()=>{
        openDialogUtils(dialogContainer)
    })

    closeDialog.addEventListener('click',(e)=>{
        e.preventDefault();
        closeDialogUtils(dialogContainer, formDialog)
    });

    formDialog.addEventListener('submit', (e)=>{
        e.preventDefault();
        addTodo(currentPage.getCurrentPage());
        closeDialogUtils(dialogContainer, formDialog);
        loadProject();
        loadTodo(currentPage.getCurrentPage())
    })
    formDialog.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (formDialog.checkValidity()) {
                formDialog.dispatchEvent(new Event('submit'));
            } else {
                formDialog.reportValidity();
            }
        }
    });
}

function attachSidebarBtnEventListeners(searchBtn, inboxBtn, todayBtn, upcomingBtn, showAllTask){

    searchBtn.addEventListener("click", ()=>{
        // upcoming feature
    });

    showAllTask.addEventListener("click",()=>{
        // if(currentPage.getCurrentPage() !== 'allTask'){
        //     currentPage.setCurrentPage('allTask');
        //     OnProjectPage.setProjectPage(false);
        //     loadProject(currentPage.getCurrentPage())
        // }
        // return

        console.log('all task')
    })

    inboxBtn.addEventListener("click", ()=>{
        if (currentPage.getCurrentPage() !== 'inbox') {
            currentPage.setCurrentPage('inbox');
            OnProjectPage.setProjectPage(false)
            loadTodo(currentPage.getCurrentPage());
        }
    });

    todayBtn.addEventListener("click", () => {
        if (currentPage.getCurrentPage() !== 'today') {
            currentPage.setCurrentPage('today');
            OnProjectPage.setProjectPage(false)
            loadTodo(currentPage.getCurrentPage());
        }
    });

    upcomingBtn.addEventListener("click", () => {
        if (currentPage.getCurrentPage() !== 'upcoming') {
            currentPage.setCurrentPage('upcoming');
            OnProjectPage.setProjectPage(false)
            loadTodo(currentPage.getCurrentPage());
        }
    });
}

function attachProjectDialogEventListeners(addProjectBtn, projectCloseDialog, projectFormDialog, projectDialogContainer){

    addProjectBtn.addEventListener("click", () => {
        
        projectDialogContainer.showModal()
        
    });

    
    projectCloseDialog.addEventListener('click', (e)=>{
        e.preventDefault();
        closeDialogUtils(projectDialogContainer, projectFormDialog)
    })
    projectFormDialog.addEventListener('submit', (e)=>{
        e.preventDefault();
        addProject();
        closeDialogUtils(projectDialogContainer, projectFormDialog)
        loadProject()
        loadTodo(currentPage.getCurrentPage());
    })
    projectFormDialog.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (projectFormDialog.checkValidity()) {
                projectFormDialog.dispatchEvent(new Event('submit'));
            } else {
                projectFormDialog.reportValidity();
            }
        }
    });

}

export {attachDialogEventListeners, attachSidebarBtnEventListeners, attachProjectDialogEventListeners}
