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
            addTaskBtn.style.pointerEvents = 'none'; // Disable interaction
            addTaskBtn.style.opacity = '0.5'; // Make it look disabled
            addTaskBtn.style.transition = 'opacity 0.3s';
        }else{
            addTaskBtn.style.pointerEvents = 'auto'; // Enable interaction
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
