const loadComponent = (url, containerId, callback) => {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
      if (callback) callback();
    })
    .catch(error => console.error(`Error al cargar ${url}:`, error));
};

const initMenuToggle = () => {
  const menuBtn = document.querySelector('.header__menu-btn');
  const navList = document.querySelector('.header__nav-list');

  if (!menuBtn || !navList) return;

  const menuIcon = menuBtn.querySelector('svg');
  if (!menuIcon) return;

  const menuSvg = menuIcon.innerHTML;
  const closeSvg = `
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  `;

  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuIcon.innerHTML = navList.classList.contains('active')
      ? closeSvg
      : menuSvg;
  });
};

const initSlider = () => {
  const sliderContent = document.querySelector('.slider__content');
  const sliderImages = document.querySelectorAll('.slider__content-img');

  if (!sliderContent || sliderImages.length === 0) return;

  sliderImages.forEach(image => {
    const clonedImage = image.cloneNode(true);
    sliderContent.appendChild(clonedImage);
  });
};

loadComponent('components/header.html', 'header-container', initMenuToggle);
loadComponent('components/banner.html', 'banner-container');
loadComponent('components/slider.html', 'slider-container', initSlider);
loadComponent('components/advantage.html', 'advantage-container');
loadComponent('components/footer.html', 'footer-container');
