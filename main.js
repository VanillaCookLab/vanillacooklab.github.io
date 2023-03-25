var myHeader = document.getElementById('JSUketoreyo');
var scrolldown = document.getElementById('scrolldown_animation');
window.addEventListener('scroll', function () {
    if (window.pageYOffset === 0) {
        myHeader.classList.add('madaTop');
        scrolldown.classList.remove('hideSA');
    }
    else {
        myHeader.classList.remove('madaTop');
        scrolldown.classList.add('hideSA');
    }
});
