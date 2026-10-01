/*
  TUNE TOTS — EDITABLE CONTENT
  Основной текст сайта находится в index.html, чтобы его можно было менять
  прямо через GitHub. Этот файл оставлен как место для будущих интерактивных
  функций и интеграций (форма записи, оплата, CMS и т.д.).
*/

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    // Место для будущей аналитики / интерактивов.
  });
});

const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBackdrop = document.querySelector('.mobile-menu-backdrop');

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  mobileMenu?.setAttribute('aria-hidden', String(!open));
}

menuToggle?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
menuBackdrop?.addEventListener('click', () => setMenu(false));
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenu(false);
});
