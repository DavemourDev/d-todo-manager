# D-Todo-Manager

## ¿Qué es?

D-Todo-Manager es una aplicación de gestión de tareas que permite una gestión simplificada de tareas y proyectos cotidianos desde una cómoda interfaz en el navegador.

## ¿Cómo está desarrollado?

D-Todo-Manager está desarrollada con **React** y **Typescript**, con la intención de ser un proyecto potencialmente escalable y fácil de ampliar y modificar.

## ¿Cómo se almacenan las tareas?

Las tareas se almacenan en el almacenamiento local del navegador usando dos tipos de listas: diarias y personalizadas.

- Las listas diarias están asignadas a los días del calendario.
- Las listas personalizadas son independientes de los días de calendario, y cada usuario define tantas como desee y decide cómo desea utilizarlas.
- Las tareas se guardan automáticamente después de cada operación.

## ¿Qué características ofrece?

- Creación y edición de tareas de forma rápida y robusta desde la interfaz de la aplicación.
- Ordenación de tareas usando distintos criterios.
- Opciones de importación y exportación de información con archivos:
  - Las tareas de una lista se pueden exportar en formatos `json`, `txt` y `csv`.
  - La importación solamente es soportada para el formato `json`. 
- **Interfaz multiidioma**: Por defecto utilizará el idioma de tu navegador, pero puedes escoger entre catalán, castellano e inglés.
