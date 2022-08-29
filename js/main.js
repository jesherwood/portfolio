// Nav item expander
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
        let hasExpand = this.classList.contains('expand');
        if (hasExpand) {
            let blocks = document.getElementsByClassName('block');
            for (let i = 0; i < blocks.length; i++) {
                const block = blocks[i];
                console.log('HEY');
                if (block.classList.contains('show')) {
                    block.classList.remove('show')
                } else {
                    block.classList.toggle('show');
                }
                // let setStyles = !block.classList.contains('show');
                // for (let thing of block) {
                //     console.log(thing);
                //     thing.classList.remove('show');
                // }
                // if (setStyles) {
                //     block.classList.toggle('show');
                // }
            }
        }
    });
}

// Light/dark theme switch
const mainBody = document.getElementsByTagName('body')[0];

function toggleMode() {
    mainBody.classList.toggle('dark');
}

// Date
let date = new Date();
let year = date.getFullYear();
document.getElementsByClassName('date')[0].innerHTML = year;
