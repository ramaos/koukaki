// recuperation des elements
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-navigation");
const ul = document.querySelector(".menu__content");
const linkFooter = document.querySelector(".menu__content--link-footer");
const links = document.querySelectorAll(".menu__content ul li");
//au click sur le bouton burger
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
  ul.classList.toggle("apparence-menu");
});
// au click sur les liens
links.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    ul.classList.remove("apparence-menu");
  });
});
// au click sur le link footer
linkFooter.addEventListener("click", function () {
  nav.classList.remove("active");
  ul.classList.remove("apparence-menu");
});

// code pour les annimations au scroll
const story = document.querySelector(".histoire"); // recuperation section story
const characters = document.querySelector("#characters"); // recuperation article characters
const place = document.querySelector("#place"); // recuperation article place
const studio = document.querySelector("#studio"); // recuperation section studio
const nomination = document.querySelector("#nomination"); // recuperation nomination
const footer = document.querySelector("#colophon"); // recuperation footer

window.addEventListener("scroll", function () {
  const { scrollTop, clientHeight } = document.documentElement;

  const topStoryToTopViewport = story.getBoundingClientRect().top;
  const topPlaceToTopViewport = place.getBoundingClientRect().top;
  const topCharactersToTopViewport = characters.getBoundingClientRect().top;
  const topStudioToTopViewport = studio.getBoundingClientRect().top;
  const topNominationToTopViewport = nomination.getBoundingClientRect().top;
  const topFooterToTopViewport = footer.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topStoryToTopViewport).toFixed() - clientHeight * 0.95
  ) {
    story.classList.add("active-story");
  } else {
    story.classList.remove("active-story");
  }
  // scroll article place
  if (
    scrollTop >
    (scrollTop + topPlaceToTopViewport).toFixed() - clientHeight * 0.5
  ) {
    place.classList.add("active-place");
  } else {
    place.classList.remove("active-place");
  }
  // scroll article characters
  if (
    scrollTop >
    (scrollTop + topCharactersToTopViewport).toFixed() - clientHeight * 0.7
  ) {
    characters.classList.add("active-characters");
  } else {
    characters.classList.remove("active-characters");
  }
  // scrol section studio
  if (
    scrollTop >
    (scrollTop + topStudioToTopViewport).toFixed() - clientHeight * 1.1
  ) {
    studio.classList.add("active-studio");
  } else {
    studio.classList.remove("active-studio");
  } // scroll section nomination
  if (
    scrollTop >
    (scrollTop + topNominationToTopViewport).toFixed() - clientHeight * 0.95
  ) {
    nomination.classList.add("active-nomination");
  } else {
    nomination.classList.remove("active-nomination");
  }
  // scroll footer
  if (
    scrollTop >
    (scrollTop + topFooterToTopViewport).toFixed() - clientHeight * 1.5
  ) {
    footer.classList.add("active-footer");
  } else {
    footer.classList.remove("active-footer");
  }
});

//code swipperjs
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 60,
  speed: 1000,
  autoplay: {
    delay: 250,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
