function pageStyling(currentPage) {
    const allButtons = document.querySelectorAll('.active-btn');
    allButtons.forEach(btn => {
        // console.log(btn.id)
        if (btn.id === currentPage) {
            btn.style.background = 'red';
        } else {
            btn.style.background = '';
        }
    });
}

export default pageStyling