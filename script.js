fetch('components/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header-container').innerHTML = html;

    const menuBtn = document.querySelector('.header__menu-btn');
    const navList = document.querySelector('.header__nav-list');

    menuBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  });
