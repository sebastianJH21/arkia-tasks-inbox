# Decisiones Técnicas

## Decisión 1: Distribución de la interfaz orientada a productividad

### Problema identificado

La aplicación debía permitir consultar, filtrar y gestionar tareas de forma eficiente, manteniendo una buena experiencia tanto en escritorio como en dispositivos móviles.

### Alternativas consideradas

1. Utilizar una estructura tradicional con filtros en el lado izquierdo y listado de tareas en el contenido principal.
2. Utilizar una tabla administrativa con todos los elementos en una única vista.
3. Priorizar el espacio de trabajo principal y ubicar las herramientas auxiliares en un panel secundario.

### Opción elegida

Ubicar la bandeja de tareas como elemento central de la interfaz y desplazar filtros y herramientas complementarias a un panel lateral derecho.

En dispositivos móviles los filtros se muestran antes de la lista de tareas y las funcionalidades complementarias después de la misma.

### Justificación

El objetivo principal del usuario es gestionar tareas, por lo que la mayor parte del espacio visual debe destinarse a esta actividad. Los filtros y herramientas de análisis son elementos de apoyo y no deben competir visualmente con el contenido principal.

Esta distribución mejora la jerarquía visual, facilita la navegación y permite escalar la cantidad de filtros sin afectar la experiencia de uso.

---

## Decisión 2: Incorporación de Smart Insights mediante IA

### Problema identificado

La bandeja puede contener una cantidad considerable de tareas, dificultando la obtención rápida de información relevante por parte del usuario.

### Alternativas consideradas

1. Mostrar únicamente métricas estáticas.
2. Crear consultas predefinidas para responder preguntas frecuentes.
3. Incorporar un sistema de consultas mediante lenguaje natural.

### Opción elegida

Integrar un componente de análisis basado en Gemini que recibe como contexto la información de las tareas cargadas en la aplicación.

### Justificación

La solución permite realizar consultas flexibles utilizando lenguaje natural y obtener respuestas adaptadas al contexto actual de la bandeja.

Esta funcionalidad representa una mejora de valor para el usuario y demuestra cómo la inteligencia artificial puede complementar procesos de consulta y análisis dentro de aplicaciones de negocio.

---

## Decisión 3: Arquitectura preparada para crecimiento

### Problema identificado

Aunque la prueba contempla una única pantalla, la aplicación podría evolucionar hacia una solución con múltiples módulos y fuentes de información.

### Alternativas consideradas

1. Centralizar toda la lógica dentro de pocos componentes.
2. Crear una arquitectura excesivamente compleja para el alcance actual.
3. Separar responsabilidades manteniendo un nivel de complejidad adecuado.

### Opción elegida

Organizar la aplicación mediante componentes, servicios, hooks, mocks y utilidades independientes.

### Justificación

Esta estructura facilita el mantenimiento, mejora la legibilidad del código y permite evolucionar la aplicación sin afectar otras áreas del sistema.

Además, posibilita reemplazar fácilmente fuentes de datos simuladas por APIs reales y agregar nuevas funcionalidades manteniendo un bajo nivel de acoplamiento.

## Decisión 4: Modal para visualización del detalle de tareas

### Problema identificado

La aplicación debía permitir visualizar información detallada de una tarea sin afectar la experiencia de navegación dentro de la bandeja principal.

### Alternativas consideradas

1. Navegar a una página independiente para mostrar el detalle.
2. Utilizar un panel lateral permanente.
3. Mostrar la información mediante un modal.

### Opción elegida

Utilizar un modal para visualizar el detalle de las tareas.

### Justificación

El detalle de una tarea es una acción puntual y no requiere ocupar espacio permanente dentro de la interfaz.

La utilización de un modal permite mantener el foco sobre la tarea seleccionada, conservar la posición dentro de la bandeja y optimizar el espacio disponible para la visualización de tareas.

Adicionalmente, esta solución facilita la adaptación responsive en dispositivos móviles al reutilizar la misma experiencia de usuario en diferentes tamaños de pantalla.

---

## Decisión 5: Mantener una única fuente de verdad para las tareas

### Problema identificado

La aplicación requiere aplicar búsquedas, filtros y ordenamientos sobre el mismo conjunto de tareas.

### Alternativas consideradas

1. Mantener múltiples estados derivados (filteredTasks, searchedTasks, sortedTasks).
2. Mantener una única colección de tareas y derivar la vista visible mediante transformaciones.

### Opción elegida

Mantener una única colección de tareas como fuente de verdad y calcular dinámicamente la lista visible mediante useMemo.

### Justificación

Esta estrategia evita la duplicación de estado, reduce el riesgo de inconsistencias entre colecciones derivadas y simplifica el mantenimiento de la aplicación.

Además, permite combinar búsqueda, filtros y ordenamiento dentro de un único flujo de procesamiento, facilitando futuras extensiones y mejorando la claridad de la lógica de negocio.
