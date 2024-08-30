import { openDialogUtils, closeDialogUtils } from "../pages/domUtils";
import loadTodo from "../pages/loadTodo";
import addTodo from "../pages/addTodo";
import currentPage from "../pages/currentPage";
import loadProject from "../pages/loadProject";

function attachDialogEventListeners(showDialog, closeDialog, formDialog, dialogContainer){
    showDialog.addEventListener('click',()=>{
        openDialogUtils(dialogContainer)
    });

    closeDialog.addEventListener('click',(e)=>{
        e.preventDefault();
        closeDialogUtils(dialogContainer, formDialog)
    });

    formDialog.addEventListener('click', (e)=>{
        e.preventDefault();
        addTodo(currentPage.getCurrentPage());
        closeDialogUtils(dialogContainer, formDialog);
        loadProject();
        loadTodo(currentPage.getCurrentPage())
    })
}

export {attachDialogEventListeners}
