const burger = document.querySelector(".burger-menu")
const closer = document.querySelector(".menu__criss")
const menu = document.querySelector(".menu")
burger.addEventListener('click', (e) => {
    menu.classList.add('opened')
    body.style.overflow = "hidden"
    body.style.height = "100vh"
})
closer.addEventListener('click', (e) => {
    menu.classList.remove('opened')
    body.style.overflow = "visible"
    body.style.height = "100%"
})