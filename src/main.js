import './scss/main.scss'

const openMobMenu = document.getElementById('open-mob-nav')
const closeMobMenu = document.getElementById('close-mob-nav')
const mobileMenu = document.getElementById('mobileMenu')

let buttons = [closeMobMenu, openMobMenu]

buttons.forEach(button => {
    console.log(button);
    button.addEventListener('click', () => {
        mobileMenu.classList.toggle('animate')
    
    })
}); 