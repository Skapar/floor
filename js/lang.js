window.addEventListener('DOMContentLoaded', function() {
    // Get the referring page
    const referringPage = document.referrer;

    // Determine the language based on the referring page
    let language = 'en'; // Default language is English

    if (referringPage.includes('ru_page.html')) {
        language = 'ru'; // Russian
    } else if (referringPage.includes('kz_page.html')) {
        language = 'kz'; // Kazakh
    }

    // Adjust content based on language
    const roomName = document.querySelector('.room-name h5');
    const roomLocate = document.querySelector('.room-locate');

    if (language === 'ru') {
        roomName.textContent = 'Отдел Учета, Отчетности и Финансов';
        roomLocate.textContent = 'Толе би, 5-й этаж';
        // Adjust other content for Russian
    } else if (language === 'kz') {
        // Adjust content for Kazakh
    } else {
        // Default content for English
    }
});