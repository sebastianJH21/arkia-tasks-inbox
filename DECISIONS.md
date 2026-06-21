# Decisiones Técnicas

## Decisión 1: Filtros dinámicos mediante configuración

### Problema identificado

La aplicación debía permitir filtrar tareas por distintos criterios y facilitar la incorporación de nuevos filtros en el futuro.

### Alternativas consideradas

1. Crear manualmente cada filtro en React.
2. Generar filtros dinámicamente desde una configuración.

### Opción elegida

Generar filtros a partir de un archivo JSON de configuración.

### Justificación

Permite agregar nuevos filtros sin modificar componentes ni lógica de renderizado, facilitando la escalabilidad de la solución.

---

## Decisión 2: Persistencia mediante localStorage

### Problema identificado

Los filtros seleccionados debían mantenerse después de recargar la página.

### Alternativas consideradas

1. Mantener el estado únicamente en memoria.
2. Utilizar localStorage.
3. Utilizar almacenamiento remoto.

### Opción elegida

Utilizar localStorage.

### Justificación

Cumple completamente el requerimiento de persistencia sin necesidad de un backend adicional y proporciona una experiencia consistente para el usuario.

---

## Decisión 3: Una única fuente de verdad para las tareas

### Problema identificado

La aplicación requiere búsqueda, filtrado y ordenamiento simultáneos.

### Alternativas consideradas

1. Mantener múltiples estados derivados.
2. Mantener una única colección de tareas y derivar la vista visible.

### Opción elegida

Mantener una única colección de tareas y calcular la lista visible mediante useMemo.

### Justificación

Reduce la complejidad, evita inconsistencias entre estados y simplifica el mantenimiento de la aplicación.

---

## Decisión 4: Modal para el detalle de tarea

### Problema identificado

Se requería visualizar información detallada de cada tarea.

### Alternativas consideradas

1. Navegar a una nueva página.
2. Utilizar un panel lateral.
3. Utilizar un modal.

### Opción elegida

Utilizar un modal.

### Justificación

Permite visualizar información ampliada sin abandonar la bandeja de trabajo y mantiene el foco del usuario sobre la tarea seleccionada.
