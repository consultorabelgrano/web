// Consultora Belgrano · comportamiento del sitio (sin librerías)

// 1. Alto real del header, para que al saltar a una sección no quede tapado el título.
(function () {
  var header = document.querySelector('header.top');
  if (!header) return;
  function medir() {
    document.documentElement.style.setProperty('--alto-header', header.offsetHeight + 'px');
  }
  medir();
  if ('ResizeObserver' in window) new ResizeObserver(medir).observe(header);
  else window.addEventListener('resize', medir);
})();

// 2. Ventanas emergentes: bios del equipo (data-bio) y casos de Experiencia (data-dialogo).
(function () {
  document.querySelectorAll('[data-bio], [data-dialogo]').forEach(function (boton) {
    var dialogo = document.getElementById(boton.getAttribute('data-bio') || boton.getAttribute('data-dialogo'));
    if (!dialogo || typeof dialogo.showModal !== 'function') return;
    boton.addEventListener('click', function () { dialogo.showModal(); });
  });
  document.querySelectorAll('dialog.bio').forEach(function (dialogo) {
    dialogo.querySelectorAll('[data-cerrar]').forEach(function (b) {
      b.addEventListener('click', function () { dialogo.close(); });
    });
    // Cerrar al tocar fuera de la ventana
    dialogo.addEventListener('click', function (e) {
      var r = dialogo.getBoundingClientRect();
      var afuera = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      if (afuera) dialogo.close();
    });
  });
})();

// 3. Carrusel de informes: flechas que avanzan de a una tarjeta.
(function () {
  document.querySelectorAll('[data-carrusel]').forEach(function (c) {
    var pista = c.querySelector('.carrusel-pista');
    var ant = c.querySelector('[data-anterior]');
    var sig = c.querySelector('[data-siguiente]');
    function paso() {
      var t = pista.firstElementChild;
      return t ? t.getBoundingClientRect().width + 18 : pista.clientWidth;
    }
    function actualizar() {
      var max = pista.scrollWidth - pista.clientWidth - 2;
      c.classList.toggle('sin-desborde', max <= 0);
      ant.disabled = pista.scrollLeft <= 2;
      sig.disabled = pista.scrollLeft >= max;
    }
    ant.addEventListener('click', function () { pista.scrollBy({ left: -paso(), behavior: 'smooth' }); });
    sig.addEventListener('click', function () { pista.scrollBy({ left: paso(), behavior: 'smooth' }); });
    pista.addEventListener('scroll', actualizar, { passive: true });
    window.addEventListener('resize', actualizar);
    actualizar();
  });
})();
