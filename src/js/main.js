// This script adds an animation from the library to the first element in each section
AOS.init();
const sections = document.getElementsByTagName("section");
for (const section of sections) {
  section.firstElementChild.setAttribute("data-aos", "fade-up");
  section.firstElementChild.setAttribute("data-aos-duration", 1000);
}

//This script adds an open class for further animation
const burger = document.querySelector(".header__burger");
const navbar = document.querySelector(".header__navbar");

burger.addEventListener("click", (e) => {
  e.preventDefault();

  burger.classList.toggle("active");
  navbar.classList.toggle("open");
});

//Calculator code

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");

const result = document.querySelector("#result");

const actions = [add, sub, mul, div];

actions.forEach((i) => {
  i.addEventListener("click", (e) => {
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);

    if (isNaN(value1) || isNaN(value2)) {
      result.textContent = "Result: Invalid variable";
      return;
    }
    switch (i) {
      case add:
        result.textContent = "Result: " + (value1 + value2);
        break;
      case sub:
        result.textContent = "Result: " + (value1 - value2);
        break;
      case mul:
        result.textContent = "Result: " + value1 * value2;
        break;
      case div:
        if ((value1 || value2) === 0) {
          result.textContent = "Result: Divide by zero";
          break;
        }

        result.textContent = "Result: " + value1 / value2;
        break;

      default:
        break;
    }
  });
});
