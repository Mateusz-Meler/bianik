import "../scss/main.scss";
import SmoothScroll from "smooth-scroll";
var scroll = new SmoothScroll('a[href*="#"]');

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__box");
  const navLinks = document.querySelectorAll(".nav__box li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

const counters = document.querySelectorAll(".div__header");
const speed = 400;
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
navSlide();
