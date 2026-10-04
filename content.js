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

const revealItems = [...document.querySelectorAll('.reveal-on-scroll')];
revealItems.forEach((item, index) => item.style.setProperty('--delay', `${(index % 4) * 70}ms`));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
