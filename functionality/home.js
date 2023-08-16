const toggleModeBtn = document.querySelector('.header_actions button');
const themeKey = 'theme-mode';

function setThemeMode(mode) {
  localStorage.setItem(themeKey, mode);
}

function getThemeMode() {
  return localStorage.getItem(themeKey);
}

const savedThemeMode = getThemeMode();
if (savedThemeMode === 'dark') {
  document.documentElement.classList.add('dark');
} else if (savedThemeMode === 'light') {
  document.documentElement.classList.add('light');
} else {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.add('light');
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains('light')) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    setThemeMode('dark');
  } else if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    setThemeMode('light');
  }
}

toggleModeBtn.addEventListener('click', toggleDarkMode);
