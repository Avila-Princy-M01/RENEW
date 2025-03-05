// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Smooth scrolling for the "Get Involved" button
const getInvolvedButton = document.querySelector(".cta-button");
getInvolvedButton.addEventListener("click", function (e) {
  e.preventDefault();
  const targetElement = document.querySelector("#contact");
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth"
    });
  }
});

const testimonialCarousel = document.querySelector(".testimonial-carousel");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentCard = 0;

testimonialCards[currentCard].classList.add("active");

prevBtn.addEventListener("click", () => {
  testimonialCards[currentCard].classList.remove("active");
  currentCard =
    (currentCard - 1 + testimonialCards.length) % testimonialCards.length;
  testimonialCards[currentCard].classList.add("active");
  slideCarousel();
});

nextBtn.addEventListener("click", () => {
  testimonialCards[currentCard].classList.remove("active");
  currentCard = (currentCard + 1) % testimonialCards.length;
  testimonialCards[currentCard].classList.add("active");
  slideCarousel();
});

function slideCarousel() {
  testimonialCards.forEach((card, index) => {
    if (index === currentCard) {
      card.style.transform = "translateX(0)";
    } else {
      card.style.transform = "translateX(100%)";
    }
  });
}
setInterval(() => {
  nextBtn.click();
}, 2000);
