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

const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");

let result = document.querySelector("#result");

add.addEventListener("click", () => {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);

  result.textContent = `Результат: ${num1 + num2}`;
});

sub.addEventListener("click", () => {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);

  result.textContent = `Результат: ${num1 - num2}`;
});

mul.addEventListener("click", () => {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);

  result.textContent = `Результат: ${num1 * num2}`;
});

div.addEventListener("click", () => {
  let num1 = Number(document.querySelector("#num1").value);
  let num2 = Number(document.querySelector("#num2").value);

  result.textContent = `Результат: ${num1 / num2}`;
});

