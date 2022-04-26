themeSetup();
function themeSetup() {
  const doc = zuix.$(document.body);
  const toggle = doc.find('.theme-toggle');
  const themeDark = 'theme-dark';
  const storeKey = 'app.theme';
  toggle.on('change', toggleTheme);
  toggleTheme();
  function toggleTheme(ev) {
    const checked = ev ?
      toggle.checked() :
      localStorage.getItem(storeKey) === 'true';
    !ev && toggle.checked(checked);
    checked ? doc.addClass(themeDark) : doc.removeClass(themeDark);
    localStorage.setItem(storeKey, String(checked));
  }
}
