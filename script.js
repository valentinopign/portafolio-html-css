// Seleccionamos todos los elementos que tienen la clase 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Creamos un observador que detecta cuando algo entra en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // deja de observarlo una vez que se muestra
    }
  });
});

// Le decimos al observador que observe cada elemento oculto
hiddenElements.forEach(el => observer.observe(el));
