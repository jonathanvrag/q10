/**
 * Carga un componente HTML desde una URL y lo inserta en un contenedor del DOM.
 * 
 * @param {string} url - URL del archivo HTML a cargar.
 * @param {string} containerId - ID del contenedor donde se insertará el HTML cargado.
 * @param {Function} [callback] - Función opcional que se ejecuta después de cargar el contenido.
 */
const loadComponent = (url, containerId, callback) => {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
      if (callback) callback();
    })
    .catch(error => console.error(`Error al cargar ${url}:`, error));
};

/**
 * Inicializa la funcionalidad de alternancia del menú de navegación.
 * 
 * - Busca el botón del menú y la lista de navegación.
 * - Cambia el icono entre el menú abierto y cerrado.
 * - Alterna la clase "active" en la lista de navegación.
 */
const initMenuToggle = () => {
  const menuBtn = document.querySelector('.header__menu-btn');
  const navList = document.querySelector('.header__nav-list');

  if (!menuBtn || !navList) return;

  const menuIcon = menuBtn.querySelector('svg');
  if (!menuIcon) return;

  const menuSvg = menuIcon.innerHTML; // Icono del menú
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

/**
 * Inicializa un slider de imágenes duplicando los elementos existentes.
 * 
 * - Busca el contenedor del slider y las imágenes dentro de él.
 * - Duplica cada imagen y la añade al final del contenedor.
 */
const initSlider = () => {
  const sliderContent = document.querySelector('.slider__content');
  const sliderImages = document.querySelectorAll('.slider__content-img');

  if (!sliderContent || sliderImages.length === 0) return;

  sliderImages.forEach(image => {
    const clonedImage = image.cloneNode(true);
    sliderContent.appendChild(clonedImage);
  });
};

// Carga los componentes HTML en sus respectivos contenedores y ejecuta las funciones de inicialización cuando sea necesario.
loadComponent('components/header.html', 'header-container', initMenuToggle);
loadComponent('components/banner.html', 'banner-container');
loadComponent('components/slider.html', 'slider-container', initSlider);
loadComponent('components/advantage.html', 'advantage-container');
loadComponent('components/footer.html', 'footer-container');
