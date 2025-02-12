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

fetch('components/banner.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('banner-container').innerHTML = html;
  });

fetch('components/slider.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('slider-container').innerHTML = html;

    const sliderContent = document.querySelector('.slider__content');
    const sliderImages = document.querySelectorAll('.slider__content-img');

    sliderImages.forEach(image => {
      const clonedImage = image.cloneNode(true);
      sliderContent.appendChild(clonedImage);
    });
  });
