import "./styles/style.css"
import favicon from "./images/icons/to-do-list.png"
import currentPage from "./pages/currentPage";
import { setFavicon } from "./pages/domUtils";
import { attachDialogEventListeners, attachSidebarBtnEventListeners, attachProjectDialogEventListeners } from "./events/eventListeners";
import loadTodo from "./pages/loadTodo";
import loadProject from "./pages/loadProject";
// Load icon to DOM
setFavicon(favicon)

// Load todo to DOM
document.addEventListener('DOMContentLoaded',()=>{
    currentPage.setCurrentPage('inbox')
    loadProject()
    loadTodo(currentPage.getCurrentPage());
})


// Show dialog
const dialogContainer = document.querySelector('.formDialog');
const closeDialog = document.querySelector('.cancel-form-btn');
const showDialog = document.querySelector('.add-task-btn');
const formDialog = document.querySelector('.dialog-form');

attachDialogEventListeners(showDialog, closeDialog, formDialog, dialogContainer);

// Get all sidebar button

const searchBtn = document.querySelector('.search-btn');
const inboxBtn = document.querySelector('.inbox-btn');
const todayBtn = document.querySelector('.today-task-btn');
const upcomingBtn = document.querySelector('.upcoming-task-btn');

attachSidebarBtnEventListeners(searchBtn, inboxBtn, todayBtn, upcomingBtn)

// Load add project dialog
const addProjectBtn = document.querySelector('.add-project-btn');
const projectCloseDialog = document.querySelector('.project-cancel-form-btn');
const projectFormDialog = document.querySelector('.project-dialog-form');
const projectDialogContainer = document.querySelector('.projectFormDialog');

attachProjectDialogEventListeners(addProjectBtn,projectCloseDialog, projectFormDialog, projectDialogContainer )


