# Testing y pruebas manuales

## Funcionalidades probadas

Lista de comprobación para la revisión manual:

- La aplicación carga la página principal.
- La API responde a `GET /api/v1/books`.
- Se puede crear un libro con datos válidos.
- Se muestra error si faltan campos obligatorios.
- Se puede editar un libro.
- Se puede eliminar un libro.
- La búsqueda filtra por título y autor.
- El filtro por estado funciona.
- La página `/about` carga correctamente.
- Una ruta inexistente muestra la página 404.

## Responsive

El diseño usa Tailwind con grids adaptables. En móvil las tarjetas se muestran en una columna y en pantallas mayores se distribuyen en dos o tres columnas.

## Consola

Durante las pruebas se debe revisar que no aparezcan errores en la consola del navegador ni en la terminal del servidor.

## Mejoras de testing

Como mejora futura se pueden añadir tests con React Testing Library para comprobar renderizado de componentes y flujos de formulario.
