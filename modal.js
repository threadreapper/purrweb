const formButtons = document.querySelectorAll(".contact-button")
let modal = document.querySelector(".modal")
let criss = document.querySelector(".modal__body__criss")
const body = document.querySelector("body")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#tel")
const companyInput = document.querySelector("#company")
const webInput = document.querySelector("#url")
const modalWarn = document.querySelector(".modal__body__warn")
const submit = document.querySelector(".modal__body__submit-button")
const requiredInputs = document.querySelectorAll(".modal-required")
const small = document.querySelectorAll("small")

formButtons.forEach((i) => i.addEventListener("click", (ev) => {
    ev.preventDefault()
    modal.style.display = "flex"
    body.style.height = "100vh"
    body.style.overflow = "hidden"
    console.log(modal.style.dislpay)
}))

criss.addEventListener('click', (e) => {
    e.preventDefault()
    modal.style.display = "none"
    body.style.overflow = "visible"
    body.style.height = "100%"
})


const inps = [nameInput, emailInput, telInput, companyInput, webInput]
for (i in inps) {
    inps[i].addEventListener('input', (e) => {
        submit.classList.remove('inactive')
    })
}


submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (!submit.classList.contains("inactive")) {
        if ((emailInput.value != "") && (nameInput.value != "") && (telInput.value != "")) {
            modal.innerHTML = `
        <div class="modal__body modal-success">
            <div class="modal__body__criss close-criss">
            </div>
            <img src="img/rouded-guy.svg" alt="">
            <h2>Thank you!</h2>
            <p>Thank you, we have received your application and will contact you soon!</p>
            <a href="#" class="accept-button close-modal">Super!</a>
        </div>
        `
            const closeModalButton = document.querySelector(".close-modal")
            closeModalButton.addEventListener('click', (e) => {
                e.preventDefault()
                modal.style.display = "none"
                body.style.overflow = "visible"
                body.style.height = "100%"
            })
            criss = document.querySelector(".modal__body__criss")
            criss.addEventListener('click', (e) => {
                e.preventDefault()
                modal.style.display = "none"
                body.style.overflow = "visible"
                body.style.height = "100%"
            })
        } else {
            modalWarn.style.display = "inline"
            requiredInputs.forEach(i => {
                if (i.value == "") {
                    i.classList.add('invalid-error')
                    small.forEach((x) => {
                        if (i.classList.contains(x.classList[1]))
                            x.style.display = "inline"
                    })
                } else {
                    i.classList.remove('invalid-error')
                    small.forEach((x) => {
                        if (i.classList.contains(x.classList[1]))
                            x.style.display = "none"
                    })
                }
            })
        }
    }



})
