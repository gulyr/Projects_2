const navMenu = document.getElementById('navMenu')
const navToggle = document.getElementById('navToggle')
const navClose = document.getElementById('navClose')
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show_menu')
  })
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
  })
}
const navLink = document.querySelectorAll('.nav_link')
const linkAction = () => {
  const navMenu = document.getElementById('navMenu')
  navMenu.classList.remove('show_menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))
const blurHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50
    ? header.classList.add('blur_header')
    : header.classList.remove('blur_header')
}
window.addEventListener('scroll', blurHeader)
// show scroll-up
const scrollUp = () => {
  const scrollUp = document.getElementById('scrollUp')
  this.scrollY >= 350
    ? scrollUp.classList.add('show_scroll')
    : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)
// scroll sections active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 58
    const sectionId = current.getAttribute('id')
    const sectionClass = document.querySelector(
      '.nav_menu a[href*=' + sectionId + ']'
    )
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active_link')
    } else {
      sectionClass.classList.remove('active_link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
