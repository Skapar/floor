let flags = ['en', 'kz', 'ru'];
let currentIndex = 0;

function switchFlag(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = flags.length - 1;
    if (currentIndex >= flags.length) currentIndex = 0;
    document.getElementById("flag").src = "main-flag/" + "flags-gif/" + flags[currentIndex] + ".gif";
}

function redirectToPage() {
    switch (flags[currentIndex]) {
        case 'en':
            window.location.href = 'redirected-page.html';
            break;
        case 'kz':
            window.location.href = 'kz_page.html';
            break;
        case 'ru':
            window.location.href = 'ru_page.html';
            break;
    }
}
