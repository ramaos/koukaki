/*var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});*/

const ul = document.getElementsByTagName("ul");
console.log(ul);
const links = document.querySelectorAll(".ul li");
icon.addEventListener("click", function () {
  nav.classList.toggle("active");
  ul[0].classList.toggle("apparence");
});
links.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    ul[0].classList.remove("apparence");
  });
});
