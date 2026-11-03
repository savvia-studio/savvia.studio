# savvia.studio

La web de savvia, el estudio de Eric y Andoni.

En savvia orquestamos el diseño y desarrollo de webs con IA. Para nosotros, el desarrollo agéntico no es tanto una forma de construir como una forma de entregar. Entregamos cada web conectada con la IA, para que el cliente pueda seguir evolucionándola respetando todo lo que hemos trabajado juntos.

Eso solo funciona con guardarraíles. Cada decisión de diseño, de movimiento o de componente queda recogida en el sistema, que es la fuente de verdad de la web. En la práctica son archivos .md. Este repositorio es ese sistema aplicado a nuestra propia web.

La IA es la base. El criterio sigue siendo nuestro.

[Read in English](README.en.md)

Compartimos el código para desarrolladores y diseñadores que quieran ver cómo se construye una web de estudio a medida, mano a mano con un agente de IA. Puedes verla publicada en [savvia.studio](https://savvia.studio).

## Cómo se hizo

Hicimos la web entera con Claude Code, por rondas. Cada ronda empieza con una petición de Eric o de Andoni. El agente la resuelve y la comprobamos en un navegador real.

Tres archivos sostienen el proyecto.

- **`CLAUDE.md`** es la memoria del proyecto y lo primero que lee el agente en cada sesión. Recoge el sistema, el vocabulario y los guardarraíles. Y, sobre todo, todo lo que probamos y descartamos, para no volver a ello.
- **`DESIGN.md`** es el sistema de diseño de Andoni. Color, tipografía, espaciado y componentes, con sus valores exactos.
- **`docs/registro-rondas.md`** es el registro completo de rondas. La petición tal cual, lo que se hizo, lo que se midió y lo que quedó pendiente.

## Stack

- Astro 7, con su API de fuentes, y Tailwind CSS 4
- TypeScript en el navegador, sin framework
- Shaders WebGL escritos a mano para el árbol de acuarela, las raíces y el paisaje (`src/scripts/estela.ts`)
- Funciones serverless en Vercel para el brief de contacto y la conversación (`api/`)
- Scripts de Blender y Node para preparar imágenes y vídeos y para comprobar la web (`tools/`)

## Estructura

| Carpeta | Qué hay dentro |
| --- | --- |
| `src/pages` | Rutas. Español en la raíz e inglés en `/en` |
| `src/views` | Páginas completas, compartidas por los dos idiomas |
| `src/components` | Componentes de Astro, uno por sección o pieza |
| `src/scripts` | Código del navegador. El árbol, las estaciones, las transiciones y el sonido |
| `src/data` | Todos los textos y los datos de los proyectos, en español e inglés |
| `src/styles` | Tokens y estilos globales |
| `api` | Funciones de Vercel |
| `tools` | Scripts para procesar medios y probar la web en Chrome y WebKit |
| `docs` | El registro de rondas |

## Ponerla en marcha

Necesitas Node 22.12 o superior.

```bash
npm install
npm run dev
```

El formulario de contacto y la conversación necesitan sus propias claves. Copia `.env.example` a `.env` y rellénalo. Sin claves, el resto de la web funciona igual.

## Diferencias con savvia.studio

Esta copia no es la web completa.

- **Tipografías.** La web usa fuentes con licencia (Family de Klim, ABC Areal de Dinamo y Timeless) que no podemos publicar. Aquí las hemos sustituido por fuentes libres de Google Fonts, así que la tipografía se verá distinta.
- **Vídeo y audio.** No están incluidos. Las piezas que reproducen un vídeo o un sonido aparecerán vacías.
- **Material de clientes.** Los archivos fuente, las referencias y las capturas en bruto tampoco están incluidos.

## Licencia

El código tiene licencia MIT. Las ilustraciones, el logotipo, los textos, las fotos, los vídeos y las imágenes de los proyectos quedan fuera de ella. Más detalles en [NOTICE.md](NOTICE.md).

## Contacto

hola@savvia.studio · [savvia.studio](https://savvia.studio)
