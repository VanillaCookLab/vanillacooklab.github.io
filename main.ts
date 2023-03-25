let myHeader = document.getElementById('JSUketoreyo')! as HTMLElement;
let scrolldown = document.getElementById('scrolldown_animation')! as HTMLElement;

window.addEventListener('scroll', function() {
    if (window.pageYOffset === 0) {
        myHeader.classList.add('madaTop');
        scrolldown.classList.remove('hideSA');
    } else {
        myHeader.classList.remove('madaTop');
        scrolldown.classList.add('hideSA');
    }
});