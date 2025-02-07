const menubtn = document.getElementById("menu-btn"); 
const navlinks = document.getElementById("nav-links"); 
const menubtnicon = menubtn.querySelector("i");

menubtn.addEventListener("click", (e) =>{
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open");
    menubtnicon.setAttribute("class", isopen ? "ri-close-line" : "ri-menu-line")
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menubtnicon.setAttribute("class", "ri-menu-line");
});

const ScrollRevealoption ={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal('.header__image img' ,{
    ...ScrollRevealoption,
    origin:"right",
});
ScrollReveal().reveal('.header__content h1' ,{
    ...ScrollRevealoption,
    delay: 500,
});
ScrollReveal().reveal('.header__content p' ,{
    ...ScrollRevealoption,
    delay: 1000,
});
ScrollReveal().reveal('.header__content h4' ,{
    ...ScrollRevealoption,
    delay: 1500,
});
ScrollReveal().reveal('.header__content .header__btns',{
    ...ScrollRevealoption,
    delay: 2000,
});


ScrollReveal().reveal('.story__image img',{
    ...ScrollRevealoption,
    origin:"left",
});
ScrollReveal().reveal('.story__content .section__header',{
    ...ScrollRevealoption,
    delay: 500,
});
ScrollReveal().reveal('.story__content h4',{
    ...ScrollRevealoption,
    delay: 1000,
});
ScrollReveal().reveal('.story__content p',{
    ...ScrollRevealoption,
    delay: 1500,
});
ScrollReveal().reveal('.story__content .story__btn',{
    ...ScrollRevealoption,
    delay: 2000,
});


ScrollReveal().reveal('.client__image img',{
    ...ScrollRevealoption,
    origin:"right",
});
 
const swiper = new Swiper(".swiper", {
    loop : true,
  });
