function googleTranslateInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, "google_translate");
}

const root = document.getElementById("root");
const hash = window.location.hash.substring(1);

function whenLoad() {
    root.style.display = "block";
    if (hash.length > 0) {
        document.getElementById(hash).scrollIntoView();
    }
}