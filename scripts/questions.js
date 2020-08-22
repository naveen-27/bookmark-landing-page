const FAQS = document.querySelectorAll('.faq');
let prev;

FAQS.forEach((faq) => {
    faq.children[0].children[0].style.transform = 'rotateX(0deg)';
});

FAQS.forEach(function(faq) {
    faq.addEventListener('click', function() {
        if (prev && prev !== this) {
            prev.children[1].classList.add('hidden');
            prev.children[0].children[0].style.transform = 'rotateX(0deg)';
        }
        this.children[1].classList.toggle('hidden');
        let angle = this.children[0].children[0].style.transform;
        this.children[0].children[0].style.transform = (angle === 'rotateX(0deg)') ? 'rotateX(180deg)' : 'rotateX(0deg)';
        prev = this;
    });
});