# Real Estate MVP — Agent Development Pack

Paquete inicial de reglas para construir el MVP inmobiliario con agentes de desarrollo.

## Instalación en el repositorio

Copiar `AGENTS.md`, `STACK.md` y `skills/` a la raíz del proyecto. Después crear compatibilidad con Codex y OpenCode:

```bash
mkdir -p .agents .opencode
ln -s ../skills .agents/skills
ln -s ../skills .opencode/skills
```

## Uso recomendado

1. Leer `AGENTS.md` antes de cada tarea.
2. Consultar `STACK.md` antes de tomar decisiones técnicas.
3. Activar el skill correspondiente a la tarea.
4. Mantener decisiones difíciles de revertir como ADR en `docs/decisions/`.
5. Entregar cambios pequeños, probados y desplegables.
