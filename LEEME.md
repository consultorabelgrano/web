# Sitio consultorabelgrano.com

Esta carpeta ES la web: todo lo que está acá se publica tal cual. No guardar acá nada que no deba ser público.

```
sitio/
├── index.html          ← todo el contenido de la página
├── assets/
│   ├── marca.css       ← copia de web_CB/marca/marca.css (colores, tipografías, componentes)
│   ├── sitio.css       ← estilos propios de la web
│   └── sitio.js        ← menú, ventanas de bio y carrusel de informes
├── img/                ← logo, favicon, fotos del equipo (400 px)
└── informes/           ← PDFs publicados (nombres sin espacios ni acentos)
```

## Cómo cambiar un texto
Abrir `index.html` (en GitHub: el archivo → ícono del lápiz), buscar el texto con Ctrl+F, cambiarlo y guardar ("Commit changes"). Cloudflare publica el cambio solo en uno o dos minutos.

## Cómo sumar un informe
1. Subir el PDF a `informes/` con un nombre simple, por ejemplo `informe-provincial-octubre-2026.pdf`. Antes, revisar que el nombre del archivo y sus propiedades (Archivo → Propiedades en el visor de PDF) no mencionen a terceros.
2. En `index.html`, sección `id="informes"`, copiar un bloque `<article class="card">…</article>` y pegarlo **primero** (el más nuevo va a la izquierda).
3. Cambiar la etiqueta (`ABRIL 2025`), el título, la frase y el link `href="informes/…pdf"`.
4. Con cuatro informes o más, las flechas del carrusel aparecen solas.

## Cómo sumar una nota en medios
Copiar un bloque `<a class="fila-link" …>` en la sección "En los medios", cambiar el link, el medio con la fecha y el título. Las más nuevas van arriba.

## Cómo cambiar una foto o una bio
- Foto: reemplazar el archivo en `img/` con el mismo nombre (cuadrada, unos 400 × 400 px).
- Bio: está dos veces en `index.html`, en el botón de la persona (frase corta) y en su ventana `<dialog id="bio-…">` (texto largo y LinkedIn).

## Probar en la compu antes de publicar
Abrir `index.html` con doble clic. Todo funciona igual salvo los PDF, que en algunos navegadores se abren en otra pestaña.
