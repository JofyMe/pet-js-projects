// //Calculator code

// function loadLanguage() {
//   const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
//   const translationsUrl = `translations/${selectedLanguage}.json`;

//   console.log("translationsUrl: " + translationsUrl);

//   fetch(translationsUrl)
//     .then((response) => response.json())
    
//     .then((translations) => {
//       console.log("translations -" + translations);
//       document.querySelector("exampleTitle").textContent =
//         translations.exampleTitle;
//       document.querySelector("exampleButton").textContent =
//         translations.exampleButton;
//     })
//     .catch((error) => {
//       console.error("Ошибка при загрузке переводов:", error);
//     });
// }

// // Обработчик события нажатия на кнопку "Перевести"
// const exampleButton = document.querySelector("#exampleButton");
// if (exampleButton) {
//   exampleButton.addEventListener("click", () => {
//     console.log("1");
//     const selectedLanguage = prompt("Выберите язык (en / ru):"); // Получаем выбранный язык от пользователя
//     localStorage.setItem("selectedLanguage", selectedLanguage); // Сохраняем выбранный язык в localStorage

//     console.log(selectedLanguage);
//     loadLanguage(); // Загружаем и применяем выбранный язык
//   });
// }

