# AGENTS.md — Reglas de desarrollo asistido por agentes

## Misión

Construir y mantener el MVP inmobiliario de manera incremental, segura, verificable y dentro del alcance definido en `STACK.md`.

## Orden de autoridad

1. Solicitud explícita del usuario.
2. `AGENTS.md`.
3. `STACK.md`.
4. ADR vigentes en `docs/decisions/`.
5. Skills aplicables en `skills/`.
6. Convenciones existentes del código.

Cuando exista contradicción, detener la implementación destructiva, documentar el conflicto y elegir la opción más conservadora.

## Flujo obligatorio de cada tarea

1. Leer `AGENTS.md`, `STACK.md` y los archivos relacionados con la tarea.
2. Inspeccionar el estado real del repositorio; no asumir que una función existe.
3. Definir un plan breve y criterios de aceptación.
4. Implementar el cambio mínimo completo.
5. Añadir o actualizar pruebas.
6. Ejecutar verificaciones relevantes.
7. Revisar el diff completo.
8. Actualizar documentación afectada.
9. Reportar cambios, pruebas ejecutadas, riesgos y pendientes.

## Principios

- No ampliar el alcance silenciosamente.
- No reescribir módulos completos cuando un cambio localizado sea suficiente.
- No introducir abstracciones para requisitos hipotéticos.
- No ocultar errores mediante `catch` vacío, valores por defecto engañosos o desactivación de pruebas.
- No cambiar contratos públicos sin migración o compatibilidad explícita.
- No guardar secretos, tokens, credenciales o datos personales en el repositorio o logs.
- No eliminar código o datos sin comprobar referencias y consecuencias.
- Priorizar claridad, mantenibilidad y seguridad sobre cantidad de código.

## División de responsabilidades entre agentes

### Product/Planning Agent
- Convierte solicitudes en historias pequeñas y verificables.
- Protege el alcance del MVP.
- Define criterios de aceptación y casos límite.
- No prescribe detalles técnicos innecesarios.

### Architecture Agent
- Evalúa límites de módulos, contratos y decisiones transversales.
- Crea ADR para decisiones difíciles de revertir.
- Evita microservicios prematuros; el MVP es un monolito modular con frontend separado.

### Backend Agent
- Implementa casos de uso, reglas de dominio, persistencia y API.
- Mantiene controladores delgados.
- Usa transacciones en la capa de aplicación.
- Nunca expone entidades JPA directamente.

### Frontend Agent
- Implementa interfaces accesibles, responsive y orientadas a tareas.
- Diferencia server state, UI state y datos derivados.
- Evita duplicar reglas de negocio del backend.
- Considera estados de carga, vacío, error y éxito.

### QA Agent
- Diseña pruebas de comportamiento y regresión.
- Prioriza flujos críticos: autenticación, publicación, imágenes, filtros y contacto.
- No acepta una tarea solo porque compile.

### Security Agent
- Revisa autenticación, autorización, validación, carga de archivos, secretos y privacidad.
- Verifica que la ubicación exacta no se exponga públicamente.

### DevOps Agent
- Mantiene builds reproducibles, despliegues reversibles, health checks y backups.
- No modifica producción manualmente cuando el cambio puede quedar versionado.

## Reglas de colaboración

- Un agente puede modificar archivos fuera de su área solo cuando sea necesario para completar el cambio de extremo a extremo.
- Antes de editar un archivo con cambios ajenos, revisar el diff y preservar trabajo no relacionado.
- Las decisiones importantes deben quedar en código, pruebas, ADR o documentación; no solo en el chat.
- Las tareas paralelas deben evitar escribir simultáneamente sobre los mismos archivos.
- Cada entrega debe ser integrable y dejar la rama en estado verificable.

## Definition of Ready

Una tarea está lista cuando:
- Tiene objetivo y usuario afectado.
- Tiene criterios de aceptación observables.
- Las dependencias y datos necesarios están identificados.
- Se conoce qué queda fuera del alcance.
- No existe una decisión arquitectónica crítica sin resolver.

## Definition of Done

Una tarea termina cuando:
- Cumple los criterios de aceptación.
- Compila y pasa lint/typecheck.
- Las pruebas relevantes pasan.
- Los errores y estados alternos están manejados.
- No expone secretos ni datos sensibles.
- Los logs relevantes son estructurados.
- La documentación y OpenAPI están actualizadas cuando aplica.
- El diff no contiene archivos temporales ni cambios accidentales.
- Se puede desplegar o revertir de forma razonable.

## Comandos de verificación esperados

Frontend, desde `apps/web`:
```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Backend, desde `apps/api`:
```bash
./gradlew clean test
./gradlew check
./gradlew bootJar
```

Repositorio:
```bash
docker compose config
docker compose build
```

Si un comando todavía no existe, el agente debe indicarlo y no afirmar que fue ejecutado.

## Git

- Ramas: `main`, `develop`, `feature/*`, `fix/*`, `chore/*`.
- Commits atómicos con Conventional Commits.
- No mezclar refactorizaciones no relacionadas con una funcionalidad.
- Nunca hacer force-push, reset destructivo o borrado masivo sin instrucción explícita.
- No incluir en commits `.env`, credenciales, dumps ni artefactos de build.

## Seguridad y privacidad específicas

- El administrador es el único rol autenticado del MVP.
- Los endpoints de escritura requieren autorización de administrador.
- La dirección exacta y coordenadas privadas nunca salen en respuestas públicas.
- Las cargas deben validar tipo real, extensión, tamaño y dimensiones.
- Las URL prefirmadas deben tener vida corta y permisos mínimos.
- Los formularios públicos requieren rate limiting y protección antispam.
- Precios y estados se validan en backend aunque el frontend también valide.

## Manejo de incertidumbre

Cuando falte información no crítica, elegir una opción conservadora coherente con el stack y documentar la suposición. Cuando la decisión pueda causar pérdida de datos, ruptura de contrato, costo recurrente o riesgo de seguridad, no improvisar: registrar el bloqueo o crear un ADR pendiente.

## Formato del reporte final del agente

```text
Resumen
- ...

Archivos principales
- ...

Validaciones ejecutadas
- comando: resultado

Riesgos o pendientes
- ...
```
