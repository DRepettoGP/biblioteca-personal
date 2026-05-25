# Hooks de React

## useState

Se usa para estado local como formularios, mensajes, libro seleccionado, carga y errores.

## useEffect

Se usa en `LibraryContext` para cargar los libros al montar la aplicación. También se usa en `BookForm` para rellenar el formulario cuando se selecciona un libro existente.

## useMemo

Se usa para calcular estadísticas y para filtrar libros sin repetir el cálculo en cada render si no cambian las dependencias.

## useCallback

Se usa para memorizar funciones como `refreshBooks`, `addBook`, `editBook` y `removeBook`. Esto ayuda a evitar recreaciones innecesarias cuando se comparten por contexto.

## Custom hook: useFilteredBooks

`useFilteredBooks` recibe libros, texto de búsqueda y filtro de estado. Devuelve la lista filtrada usando `useMemo`.

## Custom hook: useFormField

`useFormField` encapsula el estado de un campo de formulario, su `onChange` y una función `reset`. Es una mejora reutilizable para formularios futuros.
