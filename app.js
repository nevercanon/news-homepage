const menuOpenIcon = document.querySelector('.menu-icon')
const menuCloseIcon = document.querySelector('.menu-close-icon')
const mobileNav = document.querySelector('.mobile-nav')

menuOpenIcon.addEventListener('click', () => {
    mobileNav.classList.add('display-block')
})

menuCloseIcon.addEventListener('click', () => {
    mobileNav.classList.remove('display-block')
})