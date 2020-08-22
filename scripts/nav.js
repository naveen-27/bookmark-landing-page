const NAV_LINKS = document.querySelector('.nav-links');

document.querySelector('img[alt="Expand Menu"]').addEventListener('click', () => {
    NAV_LINKS.style.display = (NAV_LINKS.style.display === 'none') ? 'flex' : 'none';
});