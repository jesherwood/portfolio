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

// *** color load correctly on url ***
if (window.location.href.indexOf('home') > -1) {
    document.documentElement.style.setProperty('--color', '0, 0, 0');
    document.documentElement.style.setProperty('--background-color', '255, 255, 255');
} else if (window.location.href.indexOf('work') > -1) {
    document.documentElement.style.setProperty('--color', '165, 36, 34');
    document.documentElement.style.setProperty('--background-color', '240, 162, 2');
} else if (window.location.href.indexOf('contact') > -1) {
    document.documentElement.style.setProperty('--color', '0, 110, 144');
    document.documentElement.style.setProperty('--background-color', '169, 178, 172');
}

// *** scrolling/navigation w/ color change stuff ***
// navigation on click
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
    });
}
// change section hash & color on scroll

let len = sections.length;

function updateFragId() {
    for (let i = 0; i < len; i++) {
        let id = sections[i].id;
        let rect = sections[i].getBoundingClientRect().y;
        let pageData = {
            id: id,
            rect: rect
        };
        if (pageData.rect > -100 && pageData.rect < 100) {
            if (pageData.id !== location.hash) {
                fragmentId = pageData.id;
                window.location.hash = fragmentId;
                if (new URL(document.URL).hash === '#work') {
                    document.documentElement.style.setProperty('--color', '165, 36, 34');
                    document.documentElement.style.setProperty('--background-color', '240, 162, 2');
                } else if (new URL(document.URL).hash === '#contact') {
                    document.documentElement.style.setProperty('--color', '0, 110, 144');
                    document.documentElement.style.setProperty('--background-color', '169, 178, 172');
                } else {
                    document.documentElement.style.setProperty('--color', '0, 0, 0');
                    document.documentElement.style.setProperty('--background-color', '255, 255, 255');
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
    }, 500);
}
window.addEventListener('load', pauseScroll);

// turn off above scroll function when a nav item is clicked and change color

const navItem = document.getElementsByClassName('nav-item');

function navClick() {
    window.removeEventListener('scroll', updateFragId);

    navItem[0].addEventListener('click', (colorChange) => {
        document.documentElement.style.setProperty('--color', '0, 0, 0');
        document.documentElement.style.setProperty('--background-color', '255, 255, 255');
    });
    navItem[1].addEventListener('click', (colorChange) => {
        document.documentElement.style.setProperty('--color', '165, 36, 34');
        document.documentElement.style.setProperty('--background-color', '240, 162, 2');
    });
    navItem[2].addEventListener('click', (colorChange) => {
        document.documentElement.style.setProperty('--color', '0, 110, 144');
        document.documentElement.style.setProperty('--background-color', '169, 178, 172');
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

function keyPress(e) {
    if (e.key === "Escape") {
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

// press and hold verification

// The item (or items) to press and hold on
let item = document.getElementsByClassName('contact-button')[0];

let timerID;
let counter = 0;

let pressHoldEvent = new CustomEvent("pressHold");

// Increase or decreae value to adjust how long
// one should keep pressing down before the pressHold
// event fires
let pressHoldDuration = 70;

// Listening for the mouse and touch events
item.addEventListener("mousedown", pressingDown, false);
item.addEventListener("mouseup", notPressingDown, false);
item.addEventListener("mouseleave", notPressingDown, false);

item.addEventListener("touchstart", pressingDown, {
    passive: true
});
item.addEventListener("touchend", notPressingDown, false);

// Listening for our custom pressHold event
item.addEventListener("pressHold", doSomething, false);

function pressingDown(e) {
    // Start the timer
    requestAnimationFrame(timer);

    e.preventDefault();

    console.log("Pressing!");
}

function notPressingDown(e) {
    // Stop the timer
    cancelAnimationFrame(timerID);
    counter = 0;

    console.log("Not pressing!");
}

//
// Runs at 60fps when you are pressing down
//
function timer() {
    console.log("Timer tick!");

    if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
    } else {
        console.log("Press threshold reached!");
        item.dispatchEvent(pressHoldEvent);
    }
}

//remove button and put in link to email
let email = document.getElementsByClassName('contact-email')[0];

function doSomething(e) {
    console.log("pressHold event fired!");
    emailText = 'amVzc2UuZS5zaGVyd29vZEBnbWFpbC5jb20=';
    email.style.display = 'block';
    email.innerHTML += '<div style="font-weight:bold;font-size:2rem;font-family: \'Bungee\', cursive;width: 65%;margin-left: auto;margin-right: auto;"><a href="mailto:' + atob(emailText) + '" target="_blank"> click here to email me</a></div>';
    item.style.display = 'none';
    if (window.getComputedStyle(email, null).display === 'block') {
        function removeEmail(el) {
            email.innerHTML = '';
            email.style.display = 'none';
            item.style.display = 'block';
        }
        setTimeout(removeEmail, 3000);
    }
}

// date in footer
let date = new Date();
let year = date.getFullYear();
document.getElementsByClassName('date-w')[0].innerHTML = year;
