const languageButtons = document.querySelectorAll(".language-btn");
const translatableElements = document.querySelectorAll("[data-es][data-en]");

function setLanguage(language) {
    translatableElements.forEach(element => {
        element.textContent = element.dataset[language];
    });

    languageButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );
    });

    document.documentElement.lang = language;
    localStorage.setItem("mapaLanguage", language);
}

languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});

const savedLanguage = localStorage.getItem("mapaLanguage") || "es";

setLanguage(savedLanguage);