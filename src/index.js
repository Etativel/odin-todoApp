import "./styles/style.css"
import favicon from "./images/icons/to-do-list.png"
import addTodo from "./pages/addTodo";
import currentPage from "./pages/currentPage";

// Load icon to DOM
const faviconContainer = document.querySelector(".favicon");
faviconContainer.href = favicon;

// Show dialog
const dialogContainer = document.querySelector('.formDialog');
const closeDialog = document.querySelector('.cancel-form-btn');
const showDialog = document.querySelector('.add-task-btn');
const formDialog = document.querySelector('.dialog-form');

showDialog.addEventListener('click', ()=>{
    dialogContainer.showModal();
})

closeDialog.addEventListener('click', (e)=>{
    e.preventDefault();
    dialogContainer.close();
    formDialog.reset();
})

formDialog.addEventListener('submit', (e)=>{
    e.preventDefault();
    addTodo(currentPage.getCurrentPage());
    formDialog.reset();
    dialogContainer.close();
    loadProject()
    loadTodo(currentPage.getCurrentPage());
})

// Load todo to DOM
import loadTodo from "./pages/loadTodo";
document.addEventListener('DOMContentLoaded',()=>{
    currentPage.setCurrentPage('inbox')
    loadProject()
    loadTodo(currentPage.getCurrentPage());
})


// Get all sidebar button

const searchBtn = document.querySelector('.search-btn');
const inboxBtn = document.querySelector('.inbox-btn');
const todayBtn = document.querySelector('.today-task-btn');
const upcomingBtn = document.querySelector('.upcoming-task-btn');
const addProjectBtn = document.querySelector('.add-project-btn');

searchBtn.addEventListener("click", ()=>{

});

inboxBtn.addEventListener("click", () => {
    if (currentPage.getCurrentPage() !== 'inbox') {
        currentPage.setCurrentPage('inbox');
        // loadProject()
        loadTodo(currentPage.getCurrentPage());
    }
});

todayBtn.addEventListener("click", () => {
    if (currentPage.getCurrentPage() !== 'today') {
        currentPage.setCurrentPage('today');
        // loadProject()
        loadTodo(currentPage.getCurrentPage());
    }
});

upcomingBtn.addEventListener("click", () => {
    if (currentPage.getCurrentPage() !== 'upcoming') {
        currentPage.setCurrentPage('upcoming');
        // loadProject()
        loadTodo(currentPage.getCurrentPage());
    }
});

// Load add project dialog
import addProject from "./pages/addProject";
import loadProject from "./pages/loadProject";
import pageStyling from "./pages/pageStyling";
const projectFormDialog = document.querySelector('.project-dialog-form');
const projectDialogContainer = document.querySelector('.projectFormDialog');
const projectCloseDialog = document.querySelector('.project-cancel-form-btn');

addProjectBtn.addEventListener("click", () => {
    projectDialogContainer.showModal()
});

projectCloseDialog.addEventListener('click', (e)=>{
    e.preventDefault();
    projectDialogContainer.close();
    projectFormDialog.reset();
})
projectFormDialog.addEventListener('submit', (e)=>{
    e.preventDefault();
    addProject();
    projectFormDialog.reset();
    projectDialogContainer.close();
    loadProject()
    loadTodo(currentPage.getCurrentPage());
})



