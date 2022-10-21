// remove resize
const delayGrow = 300;
const delayFade = 2300;

window.addEventListener('load', (growContent) => {
    setTimeout(function() {
        document.getElementsByClassName('hero-object')[0].style.transform = 'scale(50%)';
    }, delayGrow);
});

window.addEventListener('load', (growContent) => {
    setTimeout(function() {
        document.getElementsByClassName('hero-container')[0].classList.add('fade-in');
    }, delayFade);
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
                    let workItems = document.getElementsByClassName('work-object');
                    for (j = 0; j < workItems.length; j++) {
                        workItems[j].style.animation = 'flowfromtop 1s';
                    }
                } else if (new URL(document.URL).hash === '#contact') {
                    document.documentElement.style.setProperty('--color', 'rgb(0, 110, 144)');
                } else {
                    document.documentElement.style.setProperty('--color', 'rgb(0, 0, 0)');
                }
            }
        }
    }
}
window.addEventListener('scroll', updateFragId);

// turn off scroll function on load to prevent direct links to sections from not working

function pauseScroll() {
    window.removeEventListener('scroll', updateFragId);
    setTimeout(() => {
        window.addEventListener('scroll', updateFragId);
    }, 200);
}
window.addEventListener('load', pauseScroll);

// turn off above scroll function when a nav item is clicked and change color

const navItem = document.getElementsByClassName('nav-item');

function navClick() {
    window.removeEventListener('scroll', updateFragId);

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

// excerpt modal functions

function openModal() {
    document.getElementsByClassName('lightbox')[0].style.display = "block";
}

function closeModal() {
    document.getElementsByClassName('lightbox')[0].style.display = "none";
}

function contact() {
    pauseScroll()
    document.getElementsByClassName('lightbox')[0].style.display = "none";
    if (new URL(document.URL).hash !== '#contact') {
        window.location.href = '#contact';
    }
}

// date in footer
let date = new Date();
let year = date.getFullYear();
document.getElementsByClassName('date')[0].innerHTML = year;

// captcha
let captcha = new Array();

function createCaptcha() {
    const activeCaptcha = document.getElementById("captcha");
    for (i = 0; i < 6; i++) {
        if (i % 2 == 0) {
            captcha[i] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        } else {
            captcha[i] = Math.floor(Math.random() * 10 + 0);
        }
    }
    theCaptcha = captcha.join("");
    activeCaptcha.innerHTML = `${theCaptcha}`;
}
