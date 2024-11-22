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
const linAction = () => {
  const navMenu = document.getElementById('navMenu')
  navMenu.classList.remove('show_menu')
}
navLink.forEach((n) => n.addEventListener('click', linAction))
