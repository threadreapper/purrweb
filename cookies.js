const cookiesCriss = document.querySelector(".cookies__body__criss")
const acceptCookies = document.querySelector(".cookies__body__buttons__accept-cookies")
const declineCookies = document.querySelector(".cookies__body__buttons__decline-cookies")
const cookies = document.querySelector(".cookies")
let state = localStorage.getItem('cookies')
localStorage.clear()
if (state == null) {
    cookies.style.display = "block"
    cookies.style.opacity = "100%"
}
cookiesCriss.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem("cookies", "false")
    cookies.style.display = "none"
})

declineCookies.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem("cookies", "false")
    cookies.style.display = "none"
})

acceptCookies.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem("cookies", "true")
    cookies.style.display = "none"
})
