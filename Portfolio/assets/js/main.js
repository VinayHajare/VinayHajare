// Fetching the DOM elements of navigation for event handling 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLinks = document.querySelectorAll('.nav-link');
      
// Handling the navigation menu toggle button
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

// Handling the navigation menu close button
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

// On mobile devices clicking on the navigation menu item will close menu 
navLinks.forEach((n) =>{ n.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
})});

// Fetching the DOM elements of skills for event handling
const skillsContent = document.getElementsByClassName('skills-content'),
       skillsHeader = document.querySelectorAll('.skills-header');

// Handling the skills section tabs
skillsHeader.forEach((skill) => 
    skill.addEventListener('click', () => {
        let skillClass = skill.parentNode.className;
        for(i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills-content skills-close';
        }
        if(skillClass === 'skills-content skills-close'){
            skill.parentNode.className = 'skills-content skills-open';
        }
}));

// Fetching DOM elements of qualification section for event handling
const tabs = document.querySelectorAll('[data-target]'),
      tabsContent = document.querySelectorAll('[data-content]');

// Qualifications section tabs actions
tabs.forEach((tab) =>{
    tab.addEventListener('click', (e) =>{
        const target = document.querySelector(tab.dataset.target);
        tabsContent.forEach((tabContent) =>{
            tabContent.classList.remove('qualification-active');
        });
        target.classList.add('qualification-active');
        tabs.forEach((tab) =>{
            tab.classList.remove('qualification-active');
        });
        tab.classList.add('qualification-active');
    })
});

// Fetching the DOM elements of services section for event handling
const modalViews = document.querySelectorAll('.services-modal'),
      modalViewsBtns = document.querySelectorAll('.services-button'),
      modalViewsClose = document.querySelectorAll('.services-modal-close');
      
// Service section tabs open actions
modalViewsBtns.forEach((modalBtn, index) =>{
    modalBtn.addEventListener('click', (e)=>{
        modalViews[index].classList.add('active-modal');
    });
});

// Services section tabs close actions
modalViewsClose.forEach((modalCloseBtn) =>{
    modalCloseBtn.addEventListener('click',(e)=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal');
        });
    });
});

// Swipper function for portfolio tabs
const portfolioSwiper = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    mouseWheel: true,
    keyboard: true,
});

// Swiper for the testimonial tabs
const testimonialSwiper = new Swiper('.testimonial-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    },
    mouseWheel: true,
    keyboard: true,
});

// Sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach((currentSection) => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop-50;
        sectionId = currentSection.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*='+ sectionId +']').classList.add('active-link');
        }else{
            document.querySelector('.nav-menu a[href*='+ sectionId +']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// Change the background shadow of header
function scrollHeader(){
    const nav = document.getElementById('header');
    // if the scroll is greater than 200 viewport height, add the scroll-header class
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader);

// Show scroll-top icon
function scrollTop(){
    const scrollTop =  document.getElementById('scroll-top');
    // when the scroll is greater than the 560 viewport height, add the show-scroll-top class
    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll-top');
    }else{
        scrollTop.classList.remove('show-scroll-top');
    }
}
window.addEventListener('scroll',scrollTop);

// Dark/light theme functionality
const themeButton = document.getElementById('change-theme-button');
const darkTheme = 'dark-theme';
const lightThemeIcon = 'uil-sun';

// Previously selected theme (if selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// current theme that the interface has by validating change-theme class
// const getCurrentTheme = () => { document.body.classList.contains(darkTheme) ? 'dark' : 'light'; };
// const getCurrentIcon = () => { themeButton.classList.contains(lightThemeIcon) ? 'uil-moon' : 'uil-sun'; };

// function to get current theme
function getCurrentTheme(){
    if(document.body.classList.contains(darkTheme)){
        return 'dark';
    }else{
        return 'light';
    }
}

// function to get current icon
function getCurrentIcon(){
    if(themeButton.classList.contains(lightThemeIcon)){
        return 'uil-moon';
    }else{
        return 'uil-sun';
    }
}

// validate if user has previously selected a theme
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](lightThemeIcon);
}

// acivate/deactivate the theme manually with the button
themeButton.addEventListener('click', (e)=>{
    // add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(lightThemeIcon);
    // save the user preference
    let curTheme = getCurrentTheme();
    let curIcon = getCurrentIcon();
    console.log(curTheme, curIcon);
    localStorage.setItem('selected-theme',curTheme);
    localStorage.setItem('selected-icon',curIcon);
});

// Contact-me form handling
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }