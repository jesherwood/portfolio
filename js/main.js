// Light/dark theme switch
const mainBody = document.getElementsByTagName('body')[0];

function toggleMode() {
    mainBody.classList.toggle('dark');
}

// Slide item in from the right
const dayIcon = document.getElementsByClassName('day-toggle')[0];

window.addEventListener('load', (slideFromRight) => {
    dayIcon.classList.toggle('live');
});

// open/close nav items & blocks
const navItems = document.getElementsByClassName('navitem');
const blocks = document.getElementsByClassName('block');
const landingContent = document.getElementsByClassName('home')[0];
const main = document.getElementsByTagName('main')[0];

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            for (let i = 0; i < navItems.length; i++) {
              navItems[i].classList.remove('selected');
            }
            this.classList.toggle('selected');
        }
        landingContent.classList.add('closed');
        main.style.paddingTop = '0.5rem';
    });
}

// for (let j = 0; j < blocks.length; j++) {
//     for (let k = 0; k < navItems.length; k++) {
//         if (navItems[k].classList.contains('selected')) {
//             let openItem = navItems[k];
//             if (openItem) {
//                 console.log('Hey');
//                 if (openItem.classList.contains('auburn')) {
//                     if (blocks[j].classList.contains('auburn')) {
//                         blocks[j].style.display = 'block';
//                     } else {
//                         blocks[j].style.display = 'none';
//                     }
//                 }
//             }
//         }
//     }
// }

// close nav items when on home
landingContent.addEventListener('click', function() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('selected');
        landingContent.classList.remove('closed');
        main.style.paddingTop = '1rem';
    }
});

// Date
let date = new Date();
let year = date.getFullYear();
document.getElementsByClassName('date')[0].innerHTML = year;
