

class DarkModeFeature {
  static DARK_MODE_KEY = 'imjeevesh.github.io.dark-mode';

  static browserPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  static getSavedPreference() {
    return localStorage.getItem(DarkModeFeature.DARK_MODE_KEY);
  }

  static switchToSavedPreference() {
    const darkMode = DarkModeFeature.getSavedPreference();

    switch (darkMode) {
      case 'false':
        DarkModeFeature.switchOff();
        break;
      case 'true':
        DarkModeFeature.switchOn();
        break;
      default:
        // no saved preference
    }
  }

  static isDarkMode() {
    return document.body.classList.contains('dark');
  }

  static toggleDarkMode() {
    if (DarkModeFeature.isDarkMode()) {
      DarkModeFeature.switchOff();
    } else {
      DarkModeFeature.switchOn();
    }
  }

  static switchOn() {
    document.body.classList.add('dark');
    localStorage.setItem(DarkModeFeature.DARK_MODE_KEY, true);
  }

  static switchOff() {
    document.body.classList.remove('dark');
    localStorage.setItem(DarkModeFeature.DARK_MODE_KEY, false);
  }
}

(() => {
  DarkModeFeature.switchToSavedPreference();

  const toggleDark = document.querySelector('#action-dark-mode');
  if (toggleDark) {
    toggleDark.addEventListener('click', () => DarkModeFeature.toggleDarkMode());
  }
})();
