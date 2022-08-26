// Nav item expander function
const navItems = document.getElementsByClassName('navitem');

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
        const navItem = document.getElementsByClassName('navitem');
        let setClasses = !this.classList.contains('expand');
        for (let it of navItem) {
            console.log(it);
            it.classList.remove('expand');
        }
        if (setClasses) {
            this.classList.toggle('expand');
        }
    });
}


// Ligh/dark theme switch function
const mainBody = document.getElementsByTagName('body');
const bodyMain = mainBody[0];

function toggleMode() {
    bodyMain.classList.toggle('dark');
}
