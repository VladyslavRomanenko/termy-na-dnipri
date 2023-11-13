// READ MORE, ABOUT SECTION

const readMoreBtn = document.querySelector(".read-more-btn");
const readMoreText = document.querySelector(".read-more");

readMoreBtn.addEventListener("click", () => {
  readMoreText.classList.add("read-more-visible");
  readMoreBtn.style.display = "none";
});

//HEADER HIDE
// ________________________________________________________________
const headerDesktop = document.querySelector(".header-desktop");
const headerMobile = document.querySelector(".header-mobile");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    headerDesktop.classList.add("header-hidden");
    headerMobile.classList.add("header-hidden");
  } else {
    headerDesktop.classList.remove("header-hidden");
    headerMobile.classList.remove("header-hidden");
  }
  lastScrollY = window.scrollY;
  if (window.scrollY === 0) {
    headerDesktop.classList.remove("header-hidden");
    headerMobile.classList.remove("header-hidden");
  }
});

//BUTTON SCROLL UP
const buttonUp = document.querySelector(".up");
let prevScrollPoss = -1;

function checkScrollPosition() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPoss > currentScrollPos) {
    buttonUp.style.display = "flex";
  } else {
    buttonUp.style.display = "none";
  }

  if (currentScrollPos === 0) {
    buttonUp.style.display = "none";
  }

  prevScrollPoss = currentScrollPos;
}

window.addEventListener("scroll", checkScrollPosition);
checkScrollPosition();

// SLIDER
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    // dots: true,
    adaptiveHeight: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    speed: 1000,
    easing: "ease",
    autoplay: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slideToShow: 2,
          // adaptiveHeight: true,
        },
      },
    ],
  });
});

// LOADING
const loader = document.querySelector(".loader");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.classList.add("loader-hidden");
    document.body.removeChild(loader);
  }, 1500);
});

// CHAT
const chatBoxRef = document.querySelector(".chat-box");
const btnChatRef = document.querySelector(".chat");

btnChatRef.addEventListener("click", () => {
  chatBoxRef.classList.toggle("chat-box-visible");
});

// ANIMATION
function reveal() {
  const revealsRight = document.querySelectorAll(".reveal-right");
  const revealsLeft = document.querySelectorAll(".reveal-left");
  const revealsBottom = document.querySelectorAll(".reveal-bottom");

  function handleReveal(reveals, direction) {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  handleReveal(revealsRight, "right");
  handleReveal(revealsLeft, "left");
  handleReveal(revealsBottom, "bottom");
}

window.addEventListener("scroll", reveal);

// DISCOUNT
const discountBtnRef = document.querySelector(".discount-btn");
const discountImgRef = document.querySelector(".discount-container");
const discountBtnCloseRef = document.querySelector(".discount-close-btn");

discountBtnRef.addEventListener("click", (event) => {
  discountImgRef.classList.add("visible");
  document.body.style.overflow = "hidden";
});

discountImgRef.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    discountImgRef.classList.remove("visible");
    document.body.style.overflow = "auto";
  }
});

discountBtnCloseRef.addEventListener("click", () => {
  discountImgRef.classList.remove("visible");
  document.body.style.overflow = "auto";
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    discountImgRef.classList.remove("visible");
    document.body.style.overflow = "auto";
  }
});
