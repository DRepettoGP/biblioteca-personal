# Formularios

## Formulario de libros

`BookForm` es un formulario controlado. Los valores de los inputs viven en estado local con `useState`.

Campos:

- Título.
- Autor.
- Estado.
- Valoración.
- Notas.

## Validación

La interfaz valida que título y autor no estén vacíos. El backend vuelve a validar todos los campos en la frontera de red para evitar datos inválidos.

## Mensajes

El formulario muestra mensajes de error cuando falta información o cuando la API falla. También muestra confirmación cuando se guarda correctamente.

## Interacción

El mismo formulario sirve para crear y editar. Si hay un libro seleccionado, se rellena con `useEffect`; si no, se muestra vacío para crear uno nuevo.
