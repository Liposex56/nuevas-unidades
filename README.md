# Gestión del Conocimiento: Caso Interactivo

Proyecto independiente basado en la experiencia visual del software educativo anterior.
No está conectado al repositorio ni al despliegue original.

## Recorrido

- Unidad 1: Gestión del Conocimiento e Innovación.
- Evaluación ICFES de 10 preguntas. Se aprueba con mínimo 80%.
- Unidad 2: Caso Integrador Universidad Horizonte.
- Laboratorio web de realidad aumentada con cámara, marcadores QR por capital,
  información ampliada, datos clave, acciones sugeridas y recursos relacionados.
- Actividades renovadas: clasificación por zonas, decisiones con pistas y
  retroalimentación contextual.
- Evaluación final de la Unidad 2: Matriz interactiva de capital personal con
  30 valoraciones, resultados automáticos, siete reflexiones, guardado de
  borrador y balance descargable en PDF.
- Insignias digitales desbloqueables y certificado final del recorrido.

## Estructura

- `index.html`: vistas principales, modales, asistente y laboratorio AR.
- `src/new-course-data.js`: contenido de las dos unidades, preguntas, actividades, insignias y marcadores AR.
- `src/main.js`: navegación, progreso, evaluación, insignias, realidad aumentada y persistencia.
- `src/styles.css`: identidad visual y diseño responsive.
- `Recursos/nuevo`: acompañantes, objetivos visuales y guías de audio.
- `tmp/qa-test.mjs`: prueba automatizada del recorrido completo.

## Ejecutar localmente

Desde esta carpeta:

```powershell
python -m http.server 8135 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8135/`.

La ruta pública del laboratorio es `?experience=capitales`. Cada marcador usa
además `&target=humano`, `&target=intelectual`, `&target=relacional` o
`&target=digital`. Para que el QR funcione desde otro dispositivo, el proyecto
debe tener una dirección pública o estar servido en una dirección de red
accesible desde el celular.

## Publicación

Antes de publicar, crear un repositorio y un proyecto de Vercel nuevos. No reutilizar
el repositorio ni el despliegue del software anterior.
