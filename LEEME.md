# Sitio consultorabelgrano.com

Esta carpeta ES la web: todo lo que está acá se publica tal cual. No guardar nada que no deba ser público. Todos los archivos van sueltos, sin subcarpetas.

| Archivo | Qué es |
|---|---|
| `index.html` | Todo el contenido de la página |
| `marca.css` | Colores, tipografías y componentes de la marca (copia de `web_CB/marca/marca.css`) |
| `sitio.css` | Estilos propios de la web |
| `sitio.js` | Menú, ventanas emergentes (bios y casos) y carrusel de informes |
| `logo.png`, `favicon.png`, `apple-touch-icon.png`, `og-imagen.png` | Logo, ícono de pestaña e imagen para compartir el link |
| `joaquin-taborda.jpg`, `sofia-santamarina.jpg`, `franco-aguirre.jpg` | Fotos del equipo (400 × 400 px) |
| `*.pdf` | Informes publicados |

## Cómo cambiar un texto
En GitHub: abrir `index.html` → ícono del lápiz → buscar el texto con Ctrl+F → cambiarlo → "Commit changes". Cloudflare publica el cambio solo en uno o dos minutos.

## Cómo sumar un informe
1. Subir el PDF con "Add file → Upload files", con un nombre simple, sin espacios ni acentos: `informe-provincial-octubre-2026.pdf`. Antes, revisar que el nombre y las propiedades del PDF no mencionen a terceros.
2. En `index.html`, sección `id="informes"`, copiar un bloque `<article class="card">…</article>` y pegarlo **primero** (el más nuevo va a la izquierda).
3. Cambiar la etiqueta (`ABRIL 2025`), el título, la frase y el link `href="…pdf"`.
4. Con cuatro informes o más, las flechas del carrusel aparecen solas.

## Cómo sumar una nota en medios
Copiar un bloque `<a class="fila-link" …>` en "En los medios" y cambiar el link, el medio con la fecha y el título. Las más nuevas van arriba.

## Cómo cambiar una foto o una bio
- Foto: subir el archivo nuevo con el mismo nombre (cuadrado, unos 400 × 400 px). GitHub reemplaza el anterior.
- Bio: está dos veces en `index.html`: en el botón de la persona (frase corta) y en su ventana `<dialog id="bio-…">` (texto largo y LinkedIn).
