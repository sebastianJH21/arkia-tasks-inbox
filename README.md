# Arkia Tasks Inbox

## Descripción

Aplicación desarrollada en React para visualizar y gestionar una bandeja de tareas.

La solución permite consultar tareas, realizar búsquedas dinámicas, aplicar filtros configurables, ordenar resultados por fecha de creación y visualizar el detalle completo de cada tarea.

La aplicación consume información desde archivos JSON mockeados y fue diseñada para facilitar futuras integraciones con APIs reales.

---

## Funcionalidades

### Bandeja de tareas

Visualización de tareas mostrando:

* Título
* Proceso
* Responsable
* Prioridad
* Estado
* Fecha de creación

### Búsqueda

Permite buscar tareas mediante texto libre.

La búsqueda se realiza en tiempo real sobre los campos relevantes de cada tarea.

### Filtros dinámicos

Los filtros se generan a partir de una configuración externa almacenada en un archivo JSON.

Esto permite agregar nuevos filtros sin modificar la lógica principal de la aplicación.

### Ordenamiento

Permite ordenar las tareas por fecha de creación:

* Más reciente
* Más antiguo

### Detalle de tarea

Cada tarea puede visualizarse en un modal con información ampliada.

### Persistencia

Los filtros seleccionados se almacenan en localStorage y se recuperan automáticamente al recargar la aplicación.

---

## Tecnologías utilizadas

* React
* JavaScript
* Vite
* Tailwind CSS

---

## Arquitectura

La solución se encuentra organizada por responsabilidades:

src/

* components/

  * dashboard/
  * filters/
  * insights/
  * layout/
  * tasks/

* hooks/

  * usePersistedState.js

* services/

  * taskService.js
  * filterService.js

* mocks/

  * tasks.json
  * filters.json

Esta estructura busca mantener desacopladas la interfaz, la lógica de negocio y el acceso a datos.

---

## Instalación

Clonar repositorio:

git clone https://github.com/sebastianJH21/arkia-tasks-inbox.git

Instalar dependencias:

npm install

Ejecutar proyecto:

npm run dev

Generar build si es necesario:

npm run build

---

## Decisiones técnicas

### Filtros dinámicos

Los filtros se construyen a partir de una configuración JSON para facilitar la escalabilidad y reducir cambios futuros en la interfaz.

### Persistencia

Se utilizó localStorage para conservar la selección de filtros entre recargas de página.

### Cálculo de resultados

Se utilizó useMemo para evitar cálculos innecesarios durante búsquedas, filtrados y ordenamientos.

---

## Mejoras futuras

* Integración con backend real.
* Paginación o virtualización para grandes volúmenes de datos.
* Testing automatizado.
* Exportación de reportes.
* Integración con IA para análisis de tareas.
* Gestión completa de tareas (crear, editar, completar y eliminar).
