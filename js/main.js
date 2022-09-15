// || THEME SWITCH ||
const mainBody = document.getElementsByTagName('body')[0];

function toggleMode() {
    mainBody.classList.toggle('dark');
}

// || SLIDE TOGGLE IN FROM RIGHT ||
const dayIcon = document.getElementsByClassName('day-toggle')[0];

window.addEventListener('load', (slideFromRight) => {
    dayIcon.classList.toggle('live');
});

// || NAVIGATION AND MAIN CONTENT ||

// open/close nav items & blocks
const nav = document.getElementsByTagName('nav')[0];
const navItems = document.getElementsByClassName('navitem');
const landingContent = document.getElementsByClassName('home')[0];
const main = document.getElementsByTagName('main')[0];
const auburnBlock = document.getElementsByClassName('block')[0];
const deepSpaceSparkleBlock = document.getElementsByClassName('block')[1];
const indianYellowBlock = document.getElementsByClassName('block')[2];
let url = window.location.href;

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].classList.remove('selected');
                auburnBlock.classList.remove('expand');
                deepSpaceSparkleBlock.classList.remove('expand');
                indianYellowBlock.classList.remove('expand');
            }
            this.classList.toggle('selected');
            if (this.classList.contains('auburn')) {
                auburnBlock.classList.add('expand');
                nav.classList.add('auburn-selected');
                if ((auburnBlock.classList.contains('expand')) && !(url.indexOf('#cv') > -1)) {
                    console.log('Hey');
                    // let newUrl = url.slice(0, url.indexOf('#cv'));
                    // location.href = newUrl;
                }
                nav.classList.remove('ds-sparkle-selected');
                nav.classList.remove('i-yellow-selected');
            } else if (this.classList.contains('deep-space-sparkle')) {
                deepSpaceSparkleBlock.classList.add('expand');
                nav.classList.add('ds-sparkle-selected');
                nav.classList.remove('i-yellow-selected');
                nav.classList.remove('auburn-selected');
            } else {
                indianYellowBlock.classList.add('expand');
                nav.classList.add('i-yellow-selected');
                nav.classList.remove('auburn-selected');
                nav.classList.remove('ds-sparkle-selected');
            }
        }
        landingContent.classList.add('closed');
        main.style.paddingTop = '0.5rem';
    });
}

// close nav items when on home
landingContent.addEventListener('click', function() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('selected');
        landingContent.classList.remove('closed');
        main.style.paddingTop = '1rem';
        if (url.indexOf('#') > -1) {
            let newUrl = url.slice(0, url.indexOf('#'));
            location.href = newUrl;
        }
    }
    auburnBlock.classList.remove('expand');
    deepSpaceSparkleBlock.classList.remove('expand');
    indianYellowBlock.classList.remove('expand');
    nav.classList.remove('auburn-selected');
    nav.classList.remove('ds-sparkle-selected');
    nav.classList.remove('i-yellow-selected');
});

//close item when header is clicked
const closer = document.getElementsByClassName('closer');
for (let i = 0; i < closer.length; i++) {
    closer[i].addEventListener('click', function() {
        auburnBlock.classList.remove('expand');
        deepSpaceSparkleBlock.classList.remove('expand');
        indianYellowBlock.classList.remove('expand');
        for (k = 0; k < navItems.length; k++) {
            navItems[k].classList.remove('selected');
        }
        landingContent.classList.remove('closed');
        main.style.paddingTop = '1rem';
        nav.classList.remove('auburn-selected');
        nav.classList.remove('ds-sparkle-selected');
        nav.classList.remove('i-yellow-selected');
    });
}

// open tabs when url includes id
if (window.location.href.indexOf("#cv") > -1) {
    auburnBlock.classList.add('expand');
    navItems[0].classList.add('selected');
    nav.classList.add('auburn-selected');
    nav.classList.remove('ds-sparkle-selected');
    nav.classList.remove('i-yellow-selected');
    landingContent.classList.add('closed');
    main.style.paddingTop = '0.5rem';
} else if (window.location.href.indexOf("#projects") > -1) {
    deepSpaceSparkleBlock.classList.add('expand');
    navItems[1].classList.add('selected');
    nav.classList.remove('auburn-selected');
    nav.classList.add('ds-sparkle-selected');
    nav.classList.remove('i-yellow-selected');
    landingContent.classList.add('closed');
    main.style.paddingTop = '0.5rem';
} else if (window.location.href.indexOf("#contact") > -1) {
    indianYellowBlock.classList.add('expand');
    navItems[2].classList.add('selected');
    nav.classList.remove('auburn-selected');
    nav.classList.remove('ds-sparkle-selected');
    nav.classList.add('i-yellow-selected');
    landingContent.classList.add('closed');
    main.style.paddingTop = '0.5rem';
}

// || GROW UNDERLINES LEFT ||
const line = document.getElementsByClassName('line');

window.addEventListener('load', (slideFromLeft) => {
    for (i = 0; i < line.length; i++) {
        line[i].classList.toggle('grow');
    }
});

// || DATE IN FOOTER ||
let date = new Date();
let year = date.getFullYear();
document.getElementsByClassName('date')[0].innerHTML = year;
