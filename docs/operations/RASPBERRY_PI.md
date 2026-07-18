# Despliegue de la demo en Raspberry Pi

## Compatibilidad

La demo requiere un sistema operativo Linux de 64 bits sobre ARM64. Antes de desplegar:

```bash
uname -m
```

El resultado esperado es `aarch64`. Las imágenes fijadas de Node, Nginx y cloudflared publican variantes `linux/arm64`. La imagen oficial de cloudflared no publica ARM de 32 bits, por lo que esta configuración no soporta Raspberry Pi OS de 32 bits.

## Recursos medidos

Mediciones realizadas el 2026-07-18 en un host AMD64, en reposo y durante 2.000 solicitudes locales consecutivas. ARM64 debe volver a medirse en el dispositivo, aunque se espera un orden de magnitud similar:

| Recurso | Antes | Optimizado |
|---|---:|---:|
| Imagen web | 54,8 MB | 13,5 MB |
| Imagen cloudflared | 63,3 MB | 63,3 MB |
| Total de imágenes de ejecución | 118,1 MB | 76,9 MB |
| RAM web en reposo | 7,6 MiB | 2,4 MiB |
| RAM web durante prueba | No medida | 3,0 MiB |
| RAM cloudflared en reposo | 14,8 MiB | 15-16 MiB |
| RAM total aproximada | 22,4 MiB | 17-19 MiB |

Los límites de Compose son 32 MiB y 20% de un núcleo para Nginx, y 48 MiB y 20% de un núcleo para cloudflared. Son límites máximos, no memoria reservada.

## Recomendación de hardware

- Ejecución: Raspberry Pi ARM64 con al menos 512 MB de RAM disponible.
- Build local de Next.js: se recomiendan 2 GB de RAM o más.
- Almacenamiento libre recomendado: mínimo 500 MB para imágenes, capas temporales y actualizaciones.
- Para equipos con menos memoria, construir la imagen en CI para ARM64 y descargar únicamente la imagen final.

La etapa Node del Dockerfile solo existe durante el build. El contenedor final contiene Nginx y el sitio estático; Node.js y `node_modules` no forman parte de la imagen de ejecución.

## Despliegue

```bash
git pull
cp .env.example .env
docker compose build
docker compose up -d --wait
docker compose ps
docker compose logs cloudflared
```

La URL temporal aparece en los logs de cloudflared. El túnel no tiene garantía de disponibilidad y cambia cuando el contenedor se recrea.

## Medición

```bash
docker stats --no-stream
docker image inspect lumina-raiz-demo:local cloudflare/cloudflared:2026.7.0
docker system df
```

## Mantenimiento de disco

Cada reconstrucción puede dejar imágenes antiguas sin etiqueta. Después de confirmar que la nueva versión está saludable:

```bash
docker image prune -f
docker builder prune -f
```

Estos comandos eliminan imágenes y caché de build no utilizados. No ejecutar `docker system prune --volumes`, porque podría eliminar datos de otros proyectos.

## Criterios de operación

- Ambos servicios deben aparecer como `Up`; `web` además debe estar `healthy`.
- El consumo normal conjunto debe permanecer por debajo de 30 MiB de RAM.
- Un reinicio por OOM indica que no debe reducirse más `mem_limit`.
- No publicar los puertos de Nginx; el acceso externo debe ocurrir por el túnel.
- Mantener Raspberry Pi OS, Docker y firmware actualizados.
