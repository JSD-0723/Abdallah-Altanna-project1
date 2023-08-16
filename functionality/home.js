const toggleModeBtn = document.querySelector('.header_actions button');
const themeKey = 'theme-mode';

function setThemeMode(mode) {
  localStorage.setItem(themeKey, mode);
}

function getThemeMode() {
  return localStorage.getItem(themeKey);
}

function themeBtnContent(mode) {
  if (mode === 'dark') {
    toggleModeBtn.innerHTML = `
    <ion-icon name="sunny-outline" class="header_actions--icon"></ion-icon>
    <span>Light Mode</span>
    `;
  } else if (mode === 'light') {
    toggleModeBtn.innerHTML = `
    <ion-icon
    name="moon-outline"
    class="header_actions--icon"
  ></ion-icon>
    <span>Dark Mode</span>
    `;
  }
}

const savedThemeMode = getThemeMode();
if (savedThemeMode === 'dark') {
  themeBtnContent('dark');
  document.documentElement.classList.add('dark');
} else if (savedThemeMode === 'light') {
  themeBtnContent('light');
  document.documentElement.classList.add('light');
} else {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    themeBtnContent('dark');
    document.documentElement.classList.add('dark');
  } else {
    themeBtnContent('light');
    document.documentElement.classList.add('light');
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains('light')) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    themeBtnContent('dark');
    setThemeMode('dark');
  } else if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    themeBtnContent('light');
    setThemeMode('light');
  }
}

toggleModeBtn.addEventListener('click', toggleDarkMode);
