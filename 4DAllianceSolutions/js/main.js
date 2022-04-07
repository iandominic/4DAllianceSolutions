const navMenu = $('.side__nav__container');
const navToggle = $('.nav__toggle');
const navClose = $('.nav__close');
const header = $('.header');

navToggle.click(function() {
    navMenu.css("right", "0");
});

navClose.click(function() {
    navMenu.css("right", "-100%");
});

function scrollHeader(){
    if(this.scrollY >= 50) {
        header.css("background-color" , "#1e5d81d7"); 
        header.css("box-shadow" , "0px 5px 10px rgba(0, 0, 0, 0.329)"); 
        header.css("backdrop-filter", "blur(4px)")
        $('.nav').css("height", "4rem");
    }
    else {
        header.css("background-color" , "transparent");
        header.css("box-shadow" , "0px 5px 20px rgba(0, 0, 0, 0)"); 
        header.css("backdrop-filter", "blur(0px)")
        $('.nav').css("height", "5rem");
    }
}
window.addEventListener('scroll', scrollHeader)

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{f
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.side__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.side__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)