const projectKey = 'projectList';
function addProject(){
    const projectName = document.querySelector('.project-name-input').value
    const existingProject = JSON.parse(localStorage.getItem(projectKey)) || [];
     
    const project = {
        projectId: new Date(),
        projectName: projectName
    };

    existingProject.push(project)
    localStorage.setItem(projectKey, JSON.stringify(existingProject));
}

export default addProject