// || BRING IN PAGE ELEMENTS AFTER LOAD ||
const hide = document.getElementsByClassName('hide');
const delayInMilliseconds = 300;

window.addEventListener('load', (showContent) => {
    setTimeout(function() {
        while (hide.length) {
            hide[0].classList.remove('hide');
        }
    }, delayInMilliseconds);
});
