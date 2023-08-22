const themeModeBtn = document.querySelector(
  '.header_actions .header_actions--theme'
);
const themeKey = 'theme-mode';
const favBtn = document.querySelector('.header_actions .header_actions--fav');
const favPopup = document.querySelector('.favourites');

// Change theme
const setThemeMode = mode => {
  localStorage.setItem(themeKey, mode);
};

const getThemeMode = () => {
  return localStorage.getItem(themeKey);
};

const themeBtnContent = mode => {
  if (mode === 'dark') {
    themeModeBtn.innerHTML = `
    <ion-icon name="sunny-outline" class="header_actions--icon"></ion-icon>
    <span>Light Mode</span>
    `;
  } else if (mode === 'light') {
    themeModeBtn.innerHTML = `
    <ion-icon
    name="moon-outline"
    class="header_actions--icon"
  ></ion-icon>
    <span>Dark Mode</span>
    `;
  }
};

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

const toggleDarkMode = () => {
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
};

themeModeBtn.addEventListener('click', toggleDarkMode);

const favBtnContent = () => {
  if (favPopup.classList.contains('visible')) {
    favBtn.innerHTML = `
    <ion-icon name="heart"></ion-icon>
    <span>Favourites</span>
    `;
  } else if (!favPopup.classList.contains('visible')) {
    favBtn.innerHTML = `
    <ion-icon name="heart-outline" class="header_actions--icon"></ion-icon>
    <span>Favourites</span>
    `;
  }
};

favBtnContent();

favBtn.addEventListener('click', () => {
  favPopup.classList.toggle('visible');
  favBtnContent();
});

document.addEventListener('click', event => {
  if (!favPopup.classList.contains(event.target) && event.target !== favBtn) {
    favPopup.classList.remove('visible');
    favBtnContent();
  }
});
