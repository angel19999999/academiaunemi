# AGROVISIÓN · Sitio web

Sitio de 5 páginas para una empresa agrícola ecuatoriana: `index.html`, `nosotros.html`, `productos.html`, `servicios.html` y `contacto.html`.

## Cómo usarlo
1. Descomprime la carpeta y abre `index.html` en el navegador (se necesita internet para Bootstrap, iconos y fuentes).
2. Para publicarlo, sube la carpeta completa a cualquier hosting estático (Netlify, GitHub Pages, etc.).

## Estructura
- `css/styles.css`: colores y estilos propios (verde, blanco y tonos tierra).
- `js/script.js`: catálogo y servicios (arreglos `PRODUCTOS` y `SERVICIOS`), filtros, buscador, animaciones y validación del formulario.
- `img/`: logotipo e ilustraciones en SVG. Son marcadores de posición: reemplázalos por fotos reales (`img/agricultura.jpg`, `img/productos/…`) y actualiza las rutas en `styles.css` y `script.js`.

## Datos de ejemplo
Teléfono, correo, dirección, redes sociales, nombres del equipo y testimonios son ficticios. Cámbialos por los reales (busca `+593 99 123 4567` y `info@agrovision.ec`).

## Pendiente para producción
El formulario valida y confirma en pantalla, pero no envía el mensaje. Conéctalo a un servicio como Formspree o a tu propio servidor.
