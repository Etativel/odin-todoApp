import "./styles/style.css"
import favicon from "./images/icons/to-do-list.png"
import addTodo from "./pages/addTodo";

// Load icon to DOM
const faviconContainer = document.querySelector(".favicon");
faviconContainer.href = favicon;

// Show dialog
const dialogContainer = document.querySelector('.formDialog')
const closeDialog = document.querySelector('.cancel-form-btn')
const showDialog = document.querySelector('.add-task-btn')
const formDialog = document.querySelector('.dialog-form')

showDialog.addEventListener('click', ()=>{
    dialogContainer.showModal()
})

closeDialog.addEventListener('click', (e)=>{
    e.preventDefault()    
    dialogContainer.close()
})

formDialog.addEventListener('submit', (e)=>{
    e.preventDefault()
    addTodo()
    formDialog.reset()
    dialogContainer.close()
    loadTodo()
})

// Load todo to DOM
import loadTodo from "./pages/loadTodo";
document.addEventListener('DOMContentLoaded',()=>{
    loadTodo()
})