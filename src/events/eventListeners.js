import { openDialogUtils, closeDialogUtils } from "../pages/domUtils";
import loadTodo from "../pages/loadTodo";
import addTodo from "../pages/addTodo";
import currentPage from "../pages/currentPage";
import loadProject from "../pages/loadProject";
import addProject from "../pages/addProject";


function attachDialogEventListeners(showDialog, closeDialog, formDialog, dialogContainer){
    showDialog.addEventListener('click',()=>{
        openDialogUtils(dialogContainer)
    });

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
}

function attachSidebarBtnEventListeners(searchBtn, inboxBtn, todayBtn, upcomingBtn){

    searchBtn.addEventListener("click", ()=>{
        // upcoming feature
    });

    inboxBtn.addEventListener("click", ()=>{
        if (currentPage.getCurrentPage() !== 'inbox') {
            currentPage.setCurrentPage('inbox');
            loadTodo(currentPage.getCurrentPage());
        }
    });

    todayBtn.addEventListener("click", () => {
        if (currentPage.getCurrentPage() !== 'today') {
            currentPage.setCurrentPage('today');
            loadTodo(currentPage.getCurrentPage());
        }
    });

    upcomingBtn.addEventListener("click", () => {
        if (currentPage.getCurrentPage() !== 'upcoming') {
            currentPage.setCurrentPage('upcoming');
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

}

export {attachDialogEventListeners, attachSidebarBtnEventListeners, attachProjectDialogEventListeners}
