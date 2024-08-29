let storageKey = "todos";
function loadTodo (){
    const todoObject = JSON.parse(localStorage.getItem(storageKey))
    if (!todoObject){
        console.log('there is no todo in the storage')
        return
    }
    const title = todoObject.map((todo)=>{
        return todo.title
    })
    const desc = todoObject.map((todo)=>{
        return todo.description
    })
    const dueDate = todoObject.map((todo)=>{
        return todo.dueDate
    })
    const priority  = todoObject.map((todo)=>{
        return todo.priority
    })

    for (let i = 0; i < todoObject.length; i++){
        console.log(title[i])
    }
}

export default loadTodo