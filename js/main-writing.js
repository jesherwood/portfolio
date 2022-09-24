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

// change section hash on scroll

//...have to fix: it reads the place on the page and overpowers the nav links...
const sections = document.getElementsByTagName('section');

function updateFragId() {
    let len = sections.length;
    for (let i = 0; i < len; i++) {
        let id = sections[i].id;
        let rect = sections[i].getBoundingClientRect().y;
        let pageData = {id:id, rect:rect};
        let url = window.location.toString();
        console.log(url);
        if (pageData.rect > -100 && pageData.rect < 100) {
            if (pageData.id !== location.hash) {
                  fragmentId = pageData.id;
                  var uri = window.location.toString();
                  console.log(fragmentId);
                  window.location.hash = fragmentId;
            }
        }
    }
}

// change site color variable on menu item
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

if (new URL(document.URL).hash === '#work') {
    document.documentElement.style.setProperty('--color', 'rgb(165, 36, 34)');
} else if (new URL(document.URL).hash === '#contact') {
    document.documentElement.style.setProperty('--color', 'rgb(0, 110, 144)');
};
     // this fixes bug where the entered url of a hash wont drop to the right section
window.onload = function() {
    if (window.location.hash) {
        elmnt = document.getElementById(window.location.hash.substring(1));
            elmnt.scrollIntoView(true);
    }
};

window.addEventListener('scroll', updateFragId);

// date in footer
let date = new Date();
let year = date.getFullYear();
document.getElementsByClassName('date')[0].innerHTML = year;
