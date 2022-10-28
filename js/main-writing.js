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

// fade non-hovered items
const workObjects = document.getElementsByClassName('work-object');

for (let i = 0; i < workObjects.length; i++) {
    workObjects[i].addEventListener('mouseenter', (e) => {
        let active = workObjects[i];
        console.log(workObjects);
        for (let j = 0; j < workObjects.length; j++) {
            workObjects[j].style.opacity = '0.3';
            active.style.opacity = '1';
        }
    });
    workObjects[i].addEventListener('mouseleave', (e) => {
        for (let j = 0; j < workObjects.length; j++) {
            workObjects[j].style.opacity = '1';
        }
  });
}

// excerpt modal functions

function openModal() {
    document.getElementsByClassName('lightbox')[0].style.display = "block";
}

function closeModal() {
    document.getElementsByClassName('lightbox')[0].style.display = "none";
}

function keyPress (e) {
    if(e.key === "Escape") {
        closeModal();
    }
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

// email obfuscation
function generateAlphabet(capital = false) {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));
}
const alpha = generateAlphabet();
const user = alpha.slice(9, 10) + alpha.slice(4, 5) + alpha.slice(18, 19) + alpha.slice(18, 19) + alpha.slice(4, 5) + '.' + alpha.slice(4, 5) + '.' + alpha.slice(18, 19) + alpha.slice(7, 8) + alpha.slice(4, 5) + alpha.slice(17, 18) + alpha.slice(22, 23) + alpha.slice(14, 15) + alpha.slice(14, 15) + alpha.slice(3, 4);
const domain = alpha.slice(6, 7) + alpha.slice(12, 13) + alpha.slice(0, 1) + alpha.slice(8, 9) + alpha.slice(11, 12) + '.' + alpha.slice(2, 3) + alpha.slice(14, 15) + alpha.slice(12, 13);

window.onload = function() {
    document.contactForm.action = get_action();
}
function get_action() {
    return 'mailto:' + user + '@' + domain + ' target="_blank"';
}
