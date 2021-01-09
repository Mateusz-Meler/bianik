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
navSlide();

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

// function (e, t, n) {
//   "use strict";
//   n.r(t);
//   n(2);
//   var o,
//       r,
//       a,
//       i = n(0),
// custom = document.querySelector(".achievements"),
//       c = (new (n.n(i).a)('a[href*="#"]'), document.querySelectorAll(".div__header"));

// var isInViewport = function (elem) {
// var bounding = elem.getBoundingClientRect();
// return (
// bounding.top >= 0 &&
// bounding.left >= 0 &&
// bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
// );
// };

// window.addEventListener("scroll", function() {

// if(isInViewport(custom)) {
// c.forEach(function (e) {

// !(function t() {
// var n = +e.getAttribute("data-target"),
// o = +e.innerText,
// r = n / 400;
// o < n ? ((e.innerText = Math.ceil(o + r)), setTimeout(t, 1)) : (o = n);
// })();
// });
// } else {
// c.forEach(function (e) {

// e.innerText = 0;
// });
// }
// }),
//   (o = document.querySelector(".burger")),
//   (r = document.querySelector(".nav__box")),
//   (a = document.querySelectorAll(".nav__box li")),
//   o.addEventListener("click", function () {
//       r.classList.toggle("nav-active"),
//           a.forEach(function (e, t) {
//               e.style.animation ? (e.style.animation = "") : (e.style.animation = "navLinkFade 0.5s ease forwards ".concat(t / 7 + 0.3, "s"));
//           }),
//           o.classList.toggle("toggle");
//   });
// }
