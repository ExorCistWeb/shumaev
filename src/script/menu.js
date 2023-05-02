const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');

if (hamburger && menuOverlay) {
    hamburger.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
    });
}

const columnTitles = document.querySelectorAll('.footer__column h5');
columnTitles.forEach((title) => {
    let isVisible = false;
    title.addEventListener('click', () => {
        const column = title.parentNode;
        const links = column.querySelectorAll('a');
        links.forEach((link) => {
            if (isVisible) {
                link.style.display = 'none';
            } else {
                link.style.display = 'block';
            }
        });
        isVisible = !isVisible;
    });
});