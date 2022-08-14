(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    menuRef.classList.toggle('is-hidden');
  });
})();
