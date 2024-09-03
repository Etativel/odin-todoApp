function loadAllTask(){
    // check inbox storage
    const existingInboxTodo = JSON.parse(localStorage.getItem('inbox')) || [];
    // console.log(existingInboxTodo)
    // check projectList storage
    const storageKey = JSON.parse(localStorage.getItem('projectList')) || [];
    let allProjectTask = [];
    storageKey.forEach(item => {
        const projectTask = JSON.parse(localStorage.getItem(item.projectId));
        allProjectTask = allProjectTask.concat(projectTask)

    })
    // console.log(allProjectTask)

    const allTask = allProjectTask.concat(existingInboxTodo)
    localStorage.setItem('All', JSON.stringify(allTask))

    // make storage for today item and upcoming item
    let currentDate = new Date
    currentDate = currentDate.toISOString().slice(0,10)

    const taskWithDueDate = allTask.filter(obj => obj.dueDate)

    const todayTask = taskWithDueDate.filter(task => task.dueDate === currentDate)
    const upcomingTask = taskWithDueDate.filter(task => task.dueDate > currentDate)

    localStorage.setItem('upcoming', JSON.stringify(upcomingTask))
    localStorage.setItem('today', JSON.stringify(todayTask))

}

export default loadAllTask