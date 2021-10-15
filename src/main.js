import './scss/main.scss'

const openMobMenu = document.getElementById('open-mob-nav')
const closeMobMenu = document.getElementById('close-mob-nav')
const mobileMenu = document.getElementById('mobileMenu')

const simpleBtn = document.getElementById('simpleBtn')
const speedyBtn = document.getElementById('speedyBtn')
const easyBtn = document.getElementById('easyBtn')

let featureButtons = [simpleBtn, speedyBtn, easyBtn]

featureButtons.forEach(button => {
    button.addEventListener('click', e => {

        featureButtons.forEach(btn => {
            btn.parentNode.classList.toggle('active', false)
        })

        document.querySelectorAll('.card').forEach(elem => {
            console.log(elem);
            elem.classList.toggle('disabled', true)
        })

        // e.target
    })
})

let buttons = [closeMobMenu, openMobMenu]

buttons.forEach(button => {
    //console.log(button);
    button.addEventListener('click', () => {
        mobileMenu.classList.toggle('animate')
    
    })
}); 