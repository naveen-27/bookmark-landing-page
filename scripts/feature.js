const FEATURE_TABS = document.querySelectorAll('.feature-brief');
const FEATURE_SELECT = document.querySelectorAll('.features-list li');
let prev_tab = 0

for (let i = 0; i < FEATURE_SELECT.length; i++) {
    FEATURE_SELECT[i].addEventListener('click', function() {
        FEATURE_SELECT[prev_tab].style.borderBottom = 'none';
        FEATURE_SELECT[i].style.borderBottom = '2px solid hsl(0, 94%, 66%)';

        FEATURE_TABS[prev_tab].classList.add('hidden');
        FEATURE_TABS[i].classList.remove('hidden');

        prev_tab = i;
    });
}