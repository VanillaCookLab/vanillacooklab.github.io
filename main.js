var myHeader = document.getElementById('JSUketoreyo');
var scrolldown = document.getElementById('scrolldown_animation');
var mordal = [document.getElementById('mordalback'), document.getElementById('mordalback')];
var mordalpage = ['', ''];
// x-0y-0様
mordalpage[0] = '';
// fhruby
mordalpage[1] = '<h2>FhRuby</h2>';
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
function mordalWindowShow(inside) {
    switch (inside) {
        case 'x-0y-0':
            mordal[1].innerHTML = mordalpage[0];
            break;
        case 'fhruby':
            mordal[1].innerHTML = mordalpage[1];
            break;
        default:
            break;
    }
    mordal[0].classList.remove('hideMD');
    return;
}
function removeNowMordal() {
    mordal[0].classList.add('hideMD');
}
