import './scss/main.scss'

const openMobMenu = document.getElementById('open-mob-nav')
const closeMobMenu = document.getElementById('close-mob-nav')
const mobileMenu = document.getElementById('mobileMenu')

const simpleBtn = document.getElementById('simpleBtn')
const speedyBtn = document.getElementById('speedyBtn')
const easyBtn = document.getElementById('easyBtn')

const form = document.getElementById('form')
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// EMAIL FORM VALIDATION
form.addEventListener('submit', e => {
    e.preventDefault()

    const inputEmail = document.getElementById('email').value
    form.classList.toggle('error', false)

    if (inputEmail === '' || !EMAIL_PATTERN.test(inputEmail)) {
        form.classList.toggle('error', true)
        return
    }

    console.log('DONE');
})

// OPEN/CLOSE FAQ ITEMS
document.addEventListener('click', e => {
    const elem = e.target.closest('.faq__item')

    if (elem) {
        elem.classList.toggle('open')
    }
})

// TOGGLE FEATURE TABS
let featureButtons = [simpleBtn, speedyBtn, easyBtn]

featureButtons.forEach(button => {
    button.addEventListener('click', e => {

        featureButtons.forEach(btn => {
            btn.parentNode.classList.toggle('active', false)
        })

        document.querySelectorAll('.card').forEach(elem => {
            elem.classList.toggle('disabled', true)
        })

        const clickedElem = e.target.closest('li')
        const elemID = clickedElem.dataset.section
        
        document.getElementById(elemID).classList.toggle('disabled', false)
        clickedElem.classList.toggle('active', true)
    })
})


// OPEN / CLOSE mobile menu
let buttons = [closeMobMenu, openMobMenu]

buttons.forEach(button => {
    //console.log(button);
    button.addEventListener('click', () => {
        mobileMenu.classList.toggle('animate')
    
    })
}); 

