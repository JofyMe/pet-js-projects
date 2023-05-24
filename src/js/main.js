// Connecting SCSS styles
import "../scss/main.scss";

// This script adds an animation from the library to the first element in each section
AOS.init();

//This script adds an open class for further animation
const burger = document.querySelector(".header__burger");
const navbar = document.querySelector(".header__navbar");

burger.addEventListener("click", (e) => {
  e.preventDefault();

  burger.classList.toggle("active");
  navbar.classList.toggle("open");
});
