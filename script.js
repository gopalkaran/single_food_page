const navBarItems = document.querySelectorAll('.nav-item');
navBarItems.forEach(item => {
    item.addEventListener('click', () => {        
        const [anchorTag] = item.children;
        navBarItems.forEach(item => {
            const [anchorTag] = item.children;
            anchorTag.classList.remove('linethrough');
        })
        anchorTag.classList.add('linethrough');
    })
})