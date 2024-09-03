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
}

export default loadAllTask