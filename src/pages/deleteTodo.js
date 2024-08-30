const storageKey = 'todos'
import loadTodo from "./loadTodo"
function deleteTodo (id) {
    const todoObject = JSON.parse(localStorage.getItem(storageKey))
    if (!todoObject){
        console.log('there is no todo in the storage')
        return
    }
    const filterTodo = todoObject.filter(todo => todo.id !== id)
    localStorage.setItem(storageKey, JSON.stringify(filterTodo));
    
    loadTodo()
};

export default deleteTodo