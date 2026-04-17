const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#aerticule-color-picker');
const body = document.querySelector('body');
const newsArticles = document.querySelectorAll('.news');

// carrega as preferencias do usuario armazenadas no localStorage
// @function loadPrefernces 

const loadPreferences = () => {
    //cor
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;
    };

    //cor artigo
    const savedAriticleColor = localStorage.getItem('articleColor');
    if (savedAriticleColor) {
        newsArticles.forEach(article => {article.style.backgroundColor = savedAriticleColor})
        articleColorPicker.value = savedAriticleColor;
    };

    //fonte
    const savedFont = localStorage.getItem('fontFamily');
    if(savedFont){
        document.documentElement.style.setProperty('--font-family',savedFont);
        fontSelect.value = savedFont;
    }

    //tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.children[0].textContent = 'light_mode';
    }

};

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value; // capturar o movimento do mouse 
    // mudar o valor da variavel no css, com o valor capturado
    document.documentElement.style.setProperty('--primary-color', color)
    //inseriri a chave (primaryColor) e o valor (color) no local storage 
    localStorage.setItem('primaryColor', color);

});

articleColorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    newsArticles.forEach(article => {
        article.style.backgroundColor = color;
    });
    localStorage.setItem('articleColor', color);
});

fontSelect.addEventListener('change', (e) => {
    const font = e.target.value; 
    document.documentElement.style.setProperty('--font-family', font)
    localStorage.setItem('fontFamily', font);

});

themeToggle.addEventListener('click', () => {
    body.classList.toggle ('dark');

    const isDark = body.classList.contains ('dark');

    themeToggle.children[0].textContent = isDark
    ? 'light_mode'
    : 'dark_mode';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});