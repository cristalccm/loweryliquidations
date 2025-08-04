
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('topnav');
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
