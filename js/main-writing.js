// remove shrink class
const shrink = document.getElementsByClassName('shrink');
const delayInMilliseconds = 300;

window.addEventListener('load', (growContent) => {
    setTimeout(function() {
        while (shrink.length) {
            shrink[0].classList.remove('shrink');
        }
    }, delayInMilliseconds);
});

// change section hash & color on scroll

const sections = document.getElementsByTagName('section');
let len = sections.length;

function updateFragId() {
    for (let i = 0; i < len; i++) {
        let id = sections[i].id;
        let rect = sections[i].getBoundingClientRect().y;
        let pageData = {id:id, rect:rect};
        if (pageData.rect > -100 && pageData.rect < 100) {
            if (pageData.id !== location.hash) {
                fragmentId = pageData.id;
                window.location.hash = fragmentId;
                if (new URL(document.URL).hash === '#work') {
                    document.documentElement.style.setProperty('--color', 'rgb(165, 36, 34)');
                } else if (new URL(document.URL).hash === '#contact') {
                    document.documentElement.style.setProperty('--color', 'rgb(0, 110, 144)');
                } else {
                    document.documentElement.style.setProperty('--color', 'rgb(0, 0, 0)');
                    const noHash = window.location.href.split('#')[0];
                    window.history.pushState('', 'Home', noHash);
                }
            }
        }
    }
}

window.addEventListener('scroll', updateFragId);


// turn off above ^^ scroll event when a nav item is clicked and change color
function navClick() {
    window.removeEventListener('scroll', updateFragId);

    let navItem = document.getElementsByClassName('nav-item');

    navItem[0].addEventListener('click', (colorChange) => {
        document.documentElement.style.setProperty('--color', 'rgb(0, 0, 0)');
    });
    navItem[1].addEventListener('click', (colorChange) => {
        document.documentElement.style.setProperty('--color', 'rgb(165, 36, 34)');
    });
    navItem[2].addEventListener('click', (colorChange) => {
        document.documentElement.style.setProperty('--color', 'rgb(0, 110, 144)');
    });

    setTimeout(() => {
        window.addEventListener('scroll', updateFragId);
    }, 500);
}

// date in footer
let date = new Date();
let year = date.getFullYear();
document.getElementsByClassName('date')[0].innerHTML = year;
