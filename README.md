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

Los filtros se generan a partir de una configuración externa almacenada en un archivo JSON. Esto permite agregar nuevos filtros sin modificar la lógica principal de la aplicación.

### Ordenamiento

Permite ordenar las tareas por fecha de creación:

* Más reciente
* Más antiguo

### Detalle de tarea

Cada tarea puede visualizarse en un modal con información ampliada.

### Persistencia

Los filtros seleccionados se almacenan en localStorage y se recuperan automáticamente al recargar la aplicación.

### Smart Insights (IA)

Se incorporó una funcionalidad adicional basada en Gemini que permite consultar información de la bandeja mediante lenguaje natural.

La IA recibe como contexto el conjunto de tareas cargadas en la aplicación y responde preguntas relacionadas con:

* Cantidad de tareas pendientes.
* Responsables de tareas.
* Distribución por estado.
* Prioridades.
* Resúmenes generales de la bandeja.
* Análisis básicos de productividad.

La IA trabaja exclusivamente con la información suministrada por la aplicación.

---

## Tecnologías utilizadas

* React
* JavaScript
* Vite
* Tailwind CSS
* Google Gemini API

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
  * geminiService.js

* mocks/
  * tasks.json
  * filters.json

Esta estructura busca mantener desacopladas la interfaz, la lógica de negocio y el acceso a datos.

---

## Instalación

1. Clonar repositorio:

  git clone https://github.com/sebastianJH21/arkia-tasks-inbox.git

2. Ingresar al proyecto:

  cd arkia-tasks-inbox

  Crear el archivo .env a partir de .env.example:

  cp .env.example .env
  
  Nota: La funcionalidad Smart Insights utiliza claves de prueba de Gemini incluidas en .env.example. Si la clave activa ha alcanzado su límite de uso, puede habilitar una de las claves alternativas disponibles, dejando únicamente una clave activa en el archivo .env.

3. Instalar dependencias:

  npm install

4. Ejecutar proyecto:

  npm run dev

5. Generar build si es necesario:

  npm run build

---

## Decisiones técnicas

### Diseño centrado en la gestión de tareas

La interfaz prioriza la visualización y gestión de tareas, ubicando filtros y herramientas complementarias en un panel secundario.

### Smart Insights con IA

Se integró Gemini para permitir consultas en lenguaje natural y facilitar el análisis de la información de la bandeja.

### Arquitectura preparada para crecimiento

La aplicación se organizó por responsabilidades para facilitar el mantenimiento y futuras integraciones.

---

## Mejoras futuras

* Integración con backend real.
* Paginación o virtualización para grandes volúmenes de datos.
* Testing automatizado.
* Exportación de reportes.
* Gestión completa de tareas (crear, editar, completar y eliminar).
* Mejorar Smart Insights mediante generación de reportes ejecutivos.
* Exportación de resultados generados por IA a Excel.
* Análisis estadísticos avanzados sobre la bandeja.
