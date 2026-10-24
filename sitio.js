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

// 2. Menú en celular: botón que abre y cierra la lista.
(function () {
  var header = document.querySelector('header.top');
  var boton = document.querySelector('.menu-btn');
  if (!header || !boton) return;
  function cerrar() { header.classList.remove('abierto'); boton.setAttribute('aria-expanded', 'false'); }
  boton.addEventListener('click', function () {
    var abierto = header.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
  header.querySelectorAll('ul a').forEach(function (a) { a.addEventListener('click', cerrar); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });
})();

// 3. Ventanas emergentes: bios del equipo (data-bio) y casos de Experiencia (data-dialogo).
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

// 4. Informes: hasta 6 se muestran en grilla; con 7 o más pasa a carrusel con flechas.
(function () {
  var MAX_EN_GRILLA = 6;
  document.querySelectorAll('[data-carrusel]').forEach(function (c) {
    var pista = c.querySelector('.informes-grid');
    var ant = c.querySelector('[data-anterior]');
    var sig = c.querySelector('[data-siguiente]');
    if (!pista || !ant || !sig) return;
    var esCarrusel = pista.children.length > MAX_EN_GRILLA;
    c.classList.toggle('modo-carrusel', esCarrusel);
    if (!esCarrusel) return;
    function paso() {
      var t = pista.firstElementChild;
      return t ? t.getBoundingClientRect().width + 18 : pista.clientWidth;
    }
    function actualizar() {
      var max = pista.scrollWidth - pista.clientWidth - 2;
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
