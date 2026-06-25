# Gestion del Conocimiento: Caso Interactivo

Proyecto independiente basado en la experiencia visual del software educativo anterior.
No esta conectado al repositorio ni al despliegue original.

## Recorrido

- Unidad 1: Gestion del Conocimiento e Innovacion.
- Evaluacion ICFES de 10 preguntas. Se aprueba con minimo 80%.
- Unidad 2: Caso Integrador Universidad Horizonte.
- Matriz interactiva de capital personal con 30 valoraciones, resultados automáticos,
  siete reflexiones, guardado de borrador y balance descargable en PDF.
- Laboratorio web de realidad aumentada con camara, cuatro capas y codigo QR.
- Caso final de cinco decisiones en lugar de una segunda evaluacion tradicional.

## Estructura

- `index.html`: vistas principales, modales y laboratorio AR.
- `src/new-course-data.js`: contenido de las dos unidades, preguntas, actividades y caso.
- `src/main.js`: navegacion, progreso, evaluacion, simulacion y persistencia.
- `src/styles.css`: identidad visual y diseño responsive.
- `Recursos/nuevo`: acompanantes, objetivos visuales y guias de audio.
- `tmp/qa-test.mjs`: prueba automatizada del recorrido completo.

## Ejecutar localmente

Desde esta carpeta:

```powershell
python -m http.server 8135 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8135/`.

La ruta publica del laboratorio es `?experience=capitales`. Para que el QR funcione
desde otro dispositivo, el proyecto debe tener una direccion publica o estar servido
en una direccion de red accesible desde el celular.

## Publicacion

Antes de publicar, crear un repositorio y un proyecto de Vercel nuevos. No reutilizar
el repositorio ni el despliegue del software anterior.
