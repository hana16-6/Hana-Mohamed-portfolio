
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

/* ================================ show menu =============================== */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/* ================================ hide menu =============================== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/* =========================== remove menu mobile =========================== */
const navLink = document.querySelectorAll('.nav_link')
function linkAction() {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ============================ filter portfolio ============================ */
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

//link active work

const link = document.querySelectorAll('.work_item')
function activeProject() {
    link.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
link.forEach(l => l.addEventListener('click', activeProject))

/* ============================ accordion skills ============================ */
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillsHeader.forEach(elem => {
    elem.addEventListener('click', toggleSkills)
})
/* ============================= qualifications tabs ============================= */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        console.log(target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')
        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})
/* ============================= services modal ============================= */

const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})
modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* ======================= scroll sections active link ====================== */
const sections = document.querySelectorAll('section[id]')
// console.log(sections, "sec")
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const b = document.querySelector(`.nav_menu a[href*= ${sectionId}]`).classList.add('active-link')
        } else {
            document.querySelector(`.nav_menu a[href*= ${sectionId}]`).classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ======================== change background header ======================== */
function scrollHeader() {
    const nav = document.getElementById('header')
    console.log(this.scrollY)
    //when the scroll is geater then 200 viewport height , add the scroll-header class
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ============================= show scroll up ============================= */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-up');
    //when the scroll is geater then 560 viewport height , add the show-scroll class to the a tag
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollTop)

/* ============================= Dark light mood ============================ */
const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected mood (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//we validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfild,we ask what the issue was to know if we activatate
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
//activate - deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})