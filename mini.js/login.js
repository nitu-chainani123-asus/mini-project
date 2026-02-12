const authWrapper = document.querySelector('.auth-wrapper');
const loginTrigger = document.querySelector('.login-trigger');
const registerTrigger = document.querySelector('.register-trigger');

registerTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    authWrapper.classList.add('toggled');
});

loginTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    authWrapper.classList.remove('toggled');
});

/* ===== THEME TOGGLE ===== */
let currentTheme = localStorage.getItem('loginTheme') || 'dark';
document.body.classList.add(currentTheme + '-theme');
updateThemeButton();

function toggleTheme() {
    const body = document.body;
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        currentTheme = 'light';
    } else if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        currentTheme = 'dark';
    }
    
    localStorage.setItem('loginTheme', currentTheme);
    updateThemeButton();
}

function updateThemeButton() {
    const btn = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('light-theme')) {
        btn.textContent = '🌙 Dark';
    } else {
        btn.textContent = '☀️ Light';
    }
}

// Check "Remember Me" functionality
document.addEventListener('DOMContentLoaded', function() {
    const rememberCheckbox = document.getElementById('rememberMe');
    const usernameInput = document.querySelector('input[type="text"]:first-of-type');
    
    const savedUsername = localStorage.getItem('rememberedUsername');
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberCheckbox.checked = true;
    }

    rememberCheckbox.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('rememberedUsername', usernameInput.value);
        } else {
            localStorage.removeItem('rememberedUsername');
        }
    });
});