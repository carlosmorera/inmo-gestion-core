---
name: structured-git-commits
description: Crea y audita commits Git atómicos, trazables y compatibles con Conventional Commits. Úsalo al preparar commits, separar cambios, redactar mensajes o revisar el historial.
---

# Formato

```text
<type>(<scope>): <descripción imperativa>

[cuerpo opcional]

[footer opcional]
```

Tipos: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `build`, `ci`, `perf`, `style`, `revert`.

Scopes preferidos: `web`, `api`, `auth`, `property`, `media`, `contact`, `db`, `infra`, `docs`.

# Reglas

- Un commit representa una intención coherente.
- Separar refactor, funcionalidad y formateo no relacionado.
- La descripción indica qué cambia, no “changes” o “updates”.
- El cuerpo explica por qué cuando no sea obvio.
- Usar `BREAKING CHANGE:` solo para rupturas reales.
- No incluir secretos, `.env`, dumps, builds o archivos temporales.
- Antes de commit: revisar `git diff`, pruebas y archivos staged.
- No afirmar que un commit fue creado si no se ejecutó el comando.

# Ejemplos

`feat(property): add admin property publishing workflow`

`fix(media): reject uploads with mismatched MIME type`

`test(auth): cover expired administrator session`
