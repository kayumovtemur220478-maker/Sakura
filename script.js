const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
        hamburger.textContent = '✕';
    } else {
        hamburger.textContent = '☰';
    }
});

document.querySelectorAll('.nav-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('open');
        hamburger.textContent = '☰';
    });
});
function setLang(lang, btn) {
    // Находим все переводимые элементы и меняем текст
    document.querySelectorAll('[data-en]').forEach(function(el) {
        const translation = el.getAttribute('data-' + lang);
        if (translation) {
            el.textContent = translation;
        }
    });

    // Убираем active со всех кнопок
    document.querySelectorAll('.lang-btn').forEach(function(b) {
        b.classList.remove('active');
    });

    // Добавляем active на нажатую кнопку
    if (btn) {
        btn.classList.add('active');
    }

    // Запоминаем язык в браузере
    localStorage.setItem('sakura-lang', lang);
}

// При загрузке страницы восстанавливаем сохранённый язык
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('sakura-lang') || 'en';
    const savedBtn = document.querySelector('.lang-btn[data-lang="' + savedLang + '"]');
    setLang(savedLang, savedBtn);
});