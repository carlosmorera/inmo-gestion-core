---
name: real-estate-application-security
description: Audita e implementa seguridad para la plataforma inmobiliaria: autenticación administrativa, autorización, privacidad de ubicación, carga de imágenes, formularios públicos, secretos y OWASP.
---

# Modelo de amenazas prioritario

- Toma de cuenta del administrador.
- IDOR en propiedades e imágenes.
- Exposición de dirección exacta.
- Archivos maliciosos o excesivos.
- Spam y abuso de formularios.
- Inyección y XSS en descripciones.
- Fuga de secretos o datos personales.

# Controles

- Cookie Secure, HttpOnly y SameSite apropiado.
- Contraseñas con Argon2id o BCrypt y política razonable.
- Rate limiting en login, contacto y generación de URLs prefirmadas.
- Autorización en cada endpoint de escritura.
- Validación por allowlist y encoding de salida.
- CORS mínimo; CSRF cuando aplique al mecanismo de sesión.
- URLs S3 de corta duración, key controlada por servidor y tamaño máximo.
- Validar magic bytes, MIME, extensión y dimensiones; eliminar EXIF.
- Secretos solo en gestores/variables de entorno, nunca en Git o logs.
- Logs sin contraseña, token, cookie, dirección exacta, correo completo o teléfono completo.

# Criterio de cierre

No declarar segura una feature sin probar acceso anónimo, usuario sin permisos, manipulación de IDs, entrada maliciosa, límites y datos expuestos.
