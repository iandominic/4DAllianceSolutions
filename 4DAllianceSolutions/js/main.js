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
        header.css("background-color" , "#1e5d81"); 
        header.css("box-shadow" , "0px 5px 10px rgba(0, 0, 0, 0.329)"); 
        $('.nav__logo img').css("width", "90px");
        $('.nav').css("height", "4rem");
    }
    else {
        header.css("background-color" , "transparent");
        header.css("box-shadow" , "0px 5px 20px rgba(0, 0, 0, 0)"); 
        $('.nav__logo img').css("width", "120px");
        $('.nav').css("height", "5rem");
    }
}
window.addEventListener('scroll', scrollHeader)