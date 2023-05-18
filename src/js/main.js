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

document.querySelector("#add").addEventListener("click", () => mainCalc("+"));
document.querySelector("#sub").addEventListener("click", () => mainCalc("-"));
document.querySelector("#mul").addEventListener("click", () => mainCalc("*"));
document.querySelector("#div").addEventListener("click", () => mainCalc("/"));

const mainCalc = (sign) => {
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  let result;
  if (sign === "+") {
    result = num1 + num2;
  } else if (sign === "-") {
    result = num1 - num2;
  } else if (sign === "*") {
    result = num1 * num2;
  } else if (sign === "/") {
    result = num1 / num2;
  }
  document.querySelector("#result").textContent = `Result: ${result}`;
};

