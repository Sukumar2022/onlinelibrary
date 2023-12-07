const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});



// ----------------------- swiper js ------------------------- 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".myTestSwiper", {
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
 //------------------------- Navigation Toggle ----------------------

function openNavbar() {
  document.querySelector(".res-nav").style.height = "290px";
  document.querySelector("#res-up-btn").style.display = "block";
}
function closeNavbar() {
  document.querySelector(".res-nav").style.height = "0px";
  document.querySelector("#res-up-btn").style.display = "none";
}
//------------------- gsap functions ------------------
gsap.from(".hero-banner h1",{
  opacity:0,
  duration: 4,
  scrollTrigger:{
      trigger:".hero-banner h1",
      scroller:"body",
  }
})
gsap.from(".hero-banner button",{
  opacity:0,
  duration: 2,
  y:-50
})
//------------------------Login page validation--------------------------
function checkLogin(){
  let username=document.getElementById('username').value;
  let password=document.getElementById('password').value;

  if(username==''){
    alert("Username is not blank !");
    return false;
  }
  else if(password==''){
    alert("Password is not blank !");
    return false;
  }
  else{
    return true;
  }
}