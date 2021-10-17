import './scss/main.scss'

const openMobMenu = document.getElementById('open-mob-nav')
const closeMobMenu = document.getElementById('close-mob-nav')
const mobileMenu = document.getElementById('mobileMenu')

const simpleBtn = document.getElementById('simpleBtn')
const speedyBtn = document.getElementById('speedyBtn')
const easyBtn = document.getElementById('easyBtn')

document.addEventListener('click', e => {
    const elem = e.target.closest('.faq__item')

    if (elem) {
        elem.classList.toggle('open')
    }
})

// TOGGLE TABS
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

