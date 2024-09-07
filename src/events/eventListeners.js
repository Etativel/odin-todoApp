import { openDialogUtils, closeDialogUtils } from "../pages/domUtils";
import loadTodo from "../pages/loadTodo";
import addTodo from "../pages/addTodo";
import currentPage from "../pages/currentPage";
import loadProject from "../pages/loadProject";
import addProject from "../pages/addProject";
import OnProjectPage from "../pages/onProjectPage";
import loadAllTask from "../pages/loadAllTask";
import pageStyling from "../pages/pageStyling";
import { saveEditedTodo } from "../pages/editTodo";
function attachEditDialogListeners(formDialog, todo){
    const dialogContainer = document.querySelector('.formDialog.edit');
    const newFormDialog = formDialog.cloneNode(true);
    formDialog.replaceWith(newFormDialog);

    // Update the reference to the newly cloned form
    formDialog = newFormDialog;
    // closeDialog.addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     closeDialogUtils(dialogContainer, formDialog)
    // });

    formDialog.addEventListener('submit', (e)=>{
        e.preventDefault();
        saveEditedTodo(todo);
        closeDialogUtils(dialogContainer, formDialog);
        loadAllTask()
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

function attachDialogEventListeners(showDialog, closeDialog, formDialog, dialogContainer, projectTitle){
    showDialog.addEventListener('click',()=>{
        // console.log(currentPage.getCurrentPage())
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
        alert("upcoming feature")
    });

    showAllTask.addEventListener("click",()=>{
        if(currentPage.getCurrentPage() !== 'All'){
            currentPage.setCurrentPage('All');
            OnProjectPage.setProjectPage(false);
            loadAllTask()
            loadTodo(currentPage.getCurrentPage())
        }
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

export {attachDialogEventListeners, attachSidebarBtnEventListeners, attachProjectDialogEventListeners, attachEditDialogListeners}
