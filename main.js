const openmenu = document.getElementById("open");
const closemenu = document.getElementById("close");
const navlink = document.getElementsByClassName("navlinkm");
const menu = document.getElementsByClassName("headerm")[0];


openmenu.addEventListener('click', () => {
    menu.style.right = 0
})

closemenu.addEventListener('click', () => {
    menu.style.right = '-100%'
})

navlink.forEach((x) => {
    x.addEventListener('click', () => {
        menu.style.right = '-100%';
        })
})