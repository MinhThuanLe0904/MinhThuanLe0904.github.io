const button = document.getElementById('themeToggle');
let savedTheme;
try { savedTheme = localStorage.getItem('mtl-theme'); } catch { /* Theme remains usable without storage. */ }
const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  button.textContent = dark ? 'Light' : 'Dark';
  button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  button.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#171a17' : '#f6f3ed';
}
setTheme(savedTheme ? savedTheme === 'dark' : preferredDark);
button.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  setTheme(dark);
  try { localStorage.setItem('mtl-theme', dark ? 'dark' : 'light'); } catch { /* Storage is optional. */ }
});
