function pageStyling(currentPage) {
    const allButtons = document.querySelectorAll('.active-btn');
    const allDeleteProjectBtn = document.querySelectorAll('.delete-project-btn')
    const addTaskBtn = document.querySelector('.add-task-btn')
    allDeleteProjectBtn.forEach(btn =>{
        if (btn.id === currentPage) {
            btn.style.background = '#ffefe5';
            btn.style.color = '#ba1f00';
        } else {
            btn.style.background = '';
            btn.style.color = 'black';
        }
    })
    allButtons.forEach(btn => {
        const svgElement = btn.querySelector('svg');
        if (currentPage === 'today' || currentPage === 'upcoming'){
            addTaskBtn.style.pointerEvents = 'none';
            addTaskBtn.style.opacity = '0.5';
            addTaskBtn.style.transition = 'opacity 0.3s';
        }else{
            addTaskBtn.style.pointerEvents = 'auto';
            addTaskBtn.style.opacity = '1';
        }
        if (btn.id === currentPage) {
            btn.style.background = '#ffefe5';
            btn.style.color = '#ba1f00';
            if (svgElement) {
                svgElement.setAttribute('stroke', 'currentColor');
            }
        } else {
            btn.style.background = '';
            btn.style.color = 'black';
            if (svgElement) {
                svgElement.setAttribute('stroke', 'gray');
            }
        }
    });
}

export default pageStyling;
