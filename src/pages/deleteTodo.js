const storageKey = 'todos'
import loadTodo from "./loadTodo"
function deleteTodo (id) {
    const todoObject = JSON.parse(localStorage.getItem(storageKey))
    if (!todoObject){
        console.log('there is no todo in the storage')
        return
    }

    

    
    loadTodo()
};

export default deleteTodo