import currentPage from "./currentPage"
import loadAllTask from "./loadAllTask"
import loadTodo from "./loadTodo"

function deleteTodo (id) {
    let storageKey = currentPage.getCurrentPage()
    const todoObject = JSON.parse(localStorage.getItem(storageKey))
    if (!todoObject){
        console.log('there is no todo in the storage')
        return
    }
    const filterTodo = todoObject.filter(todo => todo.id !== id)
    localStorage.setItem(storageKey, JSON.stringify(filterTodo));
    
    loadTodo(currentPage.getCurrentPage())
    loadAllTask()
};

export default deleteTodo