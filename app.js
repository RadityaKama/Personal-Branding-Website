let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Student', 'Frontend Developer', 'Backend Developer', 'Fullstack Development'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

 ScrollReveal().reveal('.about, .services, .project', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    opacity: 0,
    interval: 200,
});

let backToTopButton = document.querySelector("#back-to-top");

window.onscroll = () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
