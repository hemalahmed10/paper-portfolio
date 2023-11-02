var html = document.querySelector(".html");
var css = document.querySelector(".css");
var js = document.querySelector(".js");
var img = document.querySelector(".basicimg");
var htmlimg = document.querySelector(".htmlimg");
var cssimg = document.querySelector(".cssimg");
var jsimg = document.querySelector(".jsimg");

function imageAnimation(){
    html.addEventListener("mouseenter",function(){
        img.style.opacity=0;
        htmlimg.style.opacity=1;
    
        gsap.from(".htmlimg",{
            scale:0,
            duration:1,
        })
    })
    html.addEventListener("mouseleave",function(){
        img.style.opacity=1;
        htmlimg.style.opacity=0;
    })
    css.addEventListener("mouseenter",function(){
        img.style.opacity=0;
        cssimg.style.opacity=1;
        gsap.from(".cssimg",{
            scale:2,
            duration:0.6,
        })
    })
    css.addEventListener("mouseleave",function(){
        img.style.opacity=1;
        cssimg.style.opacity=0;
    })
    js.addEventListener("mouseenter",function(){
        img.style.opacity=0;
        jsimg.style.opacity=1;
        gsap.from(".jsimg",{
            scale:0,
            duration:1,
        })
    })
    js.addEventListener("mouseleave",function(){
        img.style.opacity=1;
        jsimg.style.opacity=0;
    })
};
imageAnimation();

function animation(){
    gsap.from(".elem1",{
        scale:0,
        duration:1,
        stagger:1,
    })
    gsap.from(".elem2",{
        scale:0,
        duration:1,
        delay: 1.5,
        stagger:1,
    })
    gsap.from(".elem3",{
        scale:0,
        duration:1,
        delay: 2.5,
        stagger:1,
    })
    gsap.to("#main",{
        y:-780,
        duration:1,
        delay: 4,
        stagger:1,
    })
    gsap.from(".topleft",{
        x:120,
        duration:1,
        delay:5,
        stagger:1,
    })
    gsap.from(".topmiddle",{
        scale:0,
        duration:1,
        delay:5,
        stagger:1,
    })
    gsap.from(".topright",{
        x:-120,
        duration:1,
        delay:5,
        stagger:1,
    })
    gsap.from(".mirandabackground h1",{
        x:-100,
        duration:1,
        delay:5,
        stagger:.5,
    })
};
animation();
function slider (){
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });   
};
slider ();
