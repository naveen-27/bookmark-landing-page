const NAV_LINKS = document.querySelector('.nav-links');

document.querySelector('img[alt="Expand Menu"]').addEventListener('click', () => {
    NAV_LINKS.classList.toggle('hidden');
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        NAV_LINKS.classList.remove('hidden');
    } else {
        NAV_LINKS.classList.add('hidden');
    }
})