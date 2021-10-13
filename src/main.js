import './scss/main.scss'

const closeMobMenu = document.getElementById('close-mob-nav')
const openMobMenu = document.getElementById('open-mob-nav')
const mobileMenu = document.getElementById('mobileMenu')

openMobMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('disabled')
        document.getElementsByClassName('top-nav').classList.add('disabled')
    })

// [openMobMenu, closeMobMenu].forEach(button => {
//     console.log(button);
//     button.addEventListener('click', () => {
//         mobileMenu.classList.toggle('disabled')
//         document.getElementsByClassName('top-nav').classList.toggle('disabled')
//     })
// }); 