# Componentes

## Layout

Define la estructura común de la aplicación. Incluye cabecera, navegación, contenido principal mediante `Outlet` y pie de página.

## BookCard

Muestra la información de un libro en una tarjeta reutilizable. Recibe props tipadas:

- `book`: libro a mostrar.
- `onEdit`: función para seleccionar un libro y editarlo.
- `onDelete`: función para eliminar el libro.

## BookForm

Formulario controlado para crear y editar libros. Usa estado local con `useState`, validación básica y mensajes de error o confirmación.

## StatCard

Componente pequeño para mostrar una métrica. Se reutiliza para total, pendientes, leyendo y leídos.

## Composición

`LibraryPage` compone `BookForm`, `StatCard` y múltiples `BookCard`. Esta separación permite mantener la página organizada y reutilizar piezas visuales.

## Estilos

Todos los componentes usan Tailwind CSS para layout responsive, espaciado, colores y estados interactivos.
