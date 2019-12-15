const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch'),
  input: document.querySelector('.js-switch-input'),
};

const curentTheme = localStorage.getItem('theme');

if (curentTheme) {
  refs.body.classList.add(curentTheme);
} else {
  refs.body.classList.add(LIGHT);
}
if (curentTheme === DARK) {
  refs.input.checked = true;
}

function handleSwitchTheme() {
  if (refs.body.classList.contains(DARK)) {
    refs.body.classList.add(LIGHT);
    refs.body.classList.remove(DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', LIGHT);
  } else if (refs.body.classList.contains(LIGHT)) {
    refs.body.classList.add(DARK);
    refs.body.classList.remove(LIGHT);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', DARK);
  }
}
refs.switch.addEventListener('change', handleSwitchTheme);
