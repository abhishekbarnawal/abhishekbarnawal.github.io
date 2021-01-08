/*===== SHOW MENU =====*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId)
       
        if(toggle && nav){
        toggle.addEventListener('click',()=>{
        nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMEnu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))
/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY= window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active-link')
        
        }else{ 
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active-link')
        
            
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*===== CHANGE BACKGROUND HEADER =====*/ 

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >=200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)    

// // /*===== SHOW SCROLL TOP =====*/ 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// function scrollTop(){
//     const scrolltop = document.getElementById('scroll-top')
//     if(this.scrollY >=560) header.classList.add('show-scroll'); else scrolltop.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrolltop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item')
function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l = l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}

linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))
/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 

gsap.to('.home__img', {opacity :0, duration: 2, delay: .5, x: 60});
gsap.to('.home__data', {opacity:0, duration:2, delay: .8, y:25});
gsap.to('.home__greeting, .home__name, .home__profession, .home__button' , {opacity:0, duration:2, delay: 1, y:25, ease:'expo.out', stagger:.2});
gsap.to('.nav__logo, .nav__toggle' , {opacity:0, duration:2, delay: 1.5, y:25, ease:'expo.out', stagger:.2});
gsap.to('.nav__item' , {opacity:0, duration:2, delay: 1.8, y:25, ease:'expo.out', stagger:.2});
gsap.to('.home__social-icon' , {opacity:0, duration:2, delay: 2.3, y:25, ease:'expo.out', stagger:.2});
