# savvia.studio

La web de **savvia**, el estudio web de Eric y Andoni en Donostia. En vivo en **[savvia.studio](https://savvia.studio)**.

[Read in English](README.md)

Este repositorio es una copia pública del código de la web. La compartimos para desarrolladores y diseñadores que quieran ver cómo se construye una web de estudio hecha a mano, pieza a pieza, junto a un agente de IA.

## Cómo se hizo

La web entera se construyó con [Claude Code](https://claude.com/claude-code), por **rondas**. Cada ronda es una petición de Eric o de Andoni («hay que dar más aire al hero», «que el cambio de estación parezca que se pinta»), resuelta por el agente y comprobada en un navegador real.

Tres archivos sostienen el proyecto.

- **[`CLAUDE.md`](CLAUDE.md)** es la memoria del proyecto. Es lo que lee el agente antes de cada sesión. Guarda el sistema, el vocabulario, los guardarraíles y, sobre todo, todo lo que se probó y se descartó, para que no vuelva.
- **[`DESIGN.md`](DESIGN.md)** es el sistema de diseño de Andoni. Color, tipografía, espaciado y componentes, con sus valores exactos.
- **[`docs/registro-rondas.md`](docs/registro-rondas.md)** es el registro completo de rondas. La petición literal, lo que se hizo, lo que se midió y lo que queda pendiente.

## Stack

- [Astro](https://astro.build) 7 con la API de fuentes y [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript sin framework en el navegador
- Shaders WebGL escritos a mano para el árbol de acuarela, las raíces y el paisaje (`src/scripts/estela.ts`)
- Funciones serverless en Vercel para el brief de contacto y la conversación (`api/`)
- Scripts de Blender y Node para preparar imágenes y vídeos y para comprobar la web (`tools/`)

## Carpetas

| Carpeta | Qué hay dentro |
| --- | --- |
| `src/pages` | Rutas. Español en la raíz, inglés en `/en` |
| `src/views` | Páginas enteras, compartidas por los dos idiomas |
| `src/components` | Componentes de Astro, uno por sección o pieza |
| `src/scripts` | Código del navegador. El árbol, las estaciones, las transiciones, el sonido |
| `src/data` | Todo el texto y los datos de los proyectos, en español e inglés |
| `src/styles` | Tokens y estilos globales |
| `api` | Funciones de Vercel |
| `tools` | Scripts para procesar medios y comprobar la web en Chrome y WebKit |
| `docs` | El registro de rondas |

## Arrancarla

Hace falta Node 22.12 o posterior.

```sh
npm install
npm run dev
```

El formulario de contacto y la conversación necesitan sus propias claves. Copia `.env.example` a `.env` y rellénalo. Sin claves, el resto de la web funciona.

## Qué cambia respecto a savvia.studio

Esta copia no es la web completa.

- **Tipografías.** La web usa fuentes con licencia (Family de Klim, ABC Areal de Dinamo, Timeless) que no se pueden publicar. Aquí van cambiadas por fuentes libres de Google Fonts, así que la tipografía se ve distinta.
- **Vídeo y audio** no están incluidos. Las piezas que reproducen un vídeo o un sonido se verán vacías.
- **Material de clientes** (archivos fuente, referencias, capturas en bruto) no está incluido.

## Licencia

El **código** va con [licencia MIT](LICENSE). Las ilustraciones, el logotipo, los textos, las fotos, los vídeos y las imágenes de proyectos **no** entran en ella. Ver [NOTICE.md](NOTICE.md).

## Contacto

hola@savvia.studio · [savvia.studio](https://savvia.studio)
