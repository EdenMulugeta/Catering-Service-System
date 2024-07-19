const menu= document.querySelector('#menu-icon');
const navbar= document.querySelector('.navbar');
const darkmode= document.querySelector('#darkmode');
const navbarlist= document.querySelectorAll('.nav-link');
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
});

darkmode.addEventListener('click',()=>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('dark');
    }
    else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('dark');
    }
});

navbarlist.forEach((a) => {
    a.addEventListener("click", (e) => {
        navbarlist.forEach((el) => el.classList.remove("active"));
        a.classList.add("active");
    });
});