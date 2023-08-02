const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false, // Змінено з true на false
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
  grabCursor: true, // Додаємо цей параметр
});

const swiperTwo = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false, // Змінено з true на false
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
  grabCursor: true, // Додаємо цей параметр
});

// Знаходимо елементи, які будемо маніпулювати
const burgerMenu = document.querySelector(".top-burger");
const navMenu = document.querySelector(".nav-menu");

// Додаємо обробник події для кліку на кнопку бургер
burgerMenu.addEventListener("click", () => {
  console.log("first");
  // Змінюємо стиль показу навігаційного меню при кожному кліку
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});
