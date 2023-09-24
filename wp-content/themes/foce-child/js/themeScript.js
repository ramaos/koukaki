//supression du style du menu-togle
//let toggle = document.getElementById("menu-burger");
//console.log(toggle);
//toggle.removeAttribute("style");

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.getElementById("main-navigation");

const ul = document.querySelector(".menu__content");

const linkFooter = document.querySelector(".menu__content--link-footer");

const links = document.querySelectorAll(".menu__content ul li");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
  ul.classList.toggle("apparence-menu");
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    ul.classList.remove("apparence-menu");
  });
});

linkFooter.addEventListener("click", function () {
  nav.classList.remove("active");
  ul.classList.remove("apparence-menu");
});

//code slider
/*const swiper = new Swiper(".swiper-container", {
  spaceBetween: 60,
  speed: 1000,
  autoplay: true,
  autoplay: {
    delay: 250,
  },
  controller: {
    inverse: true,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 3,
    depth: 100,
    modifier: 1,
    scale: 1,
    slideShadows: false,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});*/
// code pour les annimations au scroll
const fleur1 = document.querySelector("#story .animation-titre::after");
console.log(fleur1);
const bigCloud = document.querySelector(".place__big-cloud");
const littleCloud = document.querySelector(".place__little-cloud");
window.addEventListener("scroll", function () {
  const { scrollTop, clientHeight } = document.documentElement;
  const topElementToTopViewport = bigCloud.getBoundingClientRect().top;
  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
  ) {
    bigCloud.classList.add(".place__active-clouds");
  } else {
    bigCloud.classList.remove(".place__active-clouds");
  }
});
