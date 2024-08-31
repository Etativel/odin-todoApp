function pageStyling(currentPage) {
    const allButtons = document.querySelectorAll('.active-btn');
    allButtons.forEach(btn => {
        const svgElement = btn.querySelector('svg');

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
