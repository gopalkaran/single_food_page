const navBarItems = document.querySelectorAll('.nav-item');
navBarItems.forEach(item => {
    item.addEventListener('click', () => {
        navBarItems.forEach(item => {
            item.classList.remove('linethrough');
        })
        item.classList.add('linethrough');
    })
})