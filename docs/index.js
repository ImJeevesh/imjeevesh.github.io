function toggleDarkMode() {
  const hasDark = document.body.classList.contains('dark');
  if (hasDark) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
}

(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
  }
  const toggleDark = document.querySelector('#action-dark-mode');
  if (toggleDark) {
    toggleDark.addEventListener('click', () => toggleDarkMode());
  }
})();
