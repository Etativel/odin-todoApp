const projectKey = 'projectList';
function addProject(){
    const projectName = document.querySelector('.project-name-input').value
    const existingProject = JSON.parse(localStorage.getItem(projectKey)) || [];     
    const project = {
        projectId: new Date(),
        projectName: projectName
    };
    existingProject.push(project)

    const stringifyProject = JSON.stringify(existingProject)
    localStorage.setItem(projectKey, stringifyProject);

    const projectStorage = JSON.parse(localStorage.getItem(project.projectId)) || [];
    localStorage.setItem(JSON.parse(JSON.stringify(project.projectId)), JSON.stringify(projectStorage));
}
export default addProject