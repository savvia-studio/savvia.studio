// RONDA 62 · TODOS LOS PROYECTOS (página /proyectos, referencia: focuslab.agency/work) y su CASO DE ESTUDIO (/proyectos/<slug>, referencia:
// focuslab.agency/work/marketo). Una ficha por proyecto: para añadir los de la web anterior (treseiscero), se copia una ficha.
// RONDA 63 · «los casos tienen que tener bastante más información, que veas cada proyecto al detalle; en las métricas no pondría las rondas,
// cosas relevantes sobre el proyecto»: cada ficha gana el RETO, la web SECCIÓN A SECCIÓN, el SISTEMA (paleta y tipografías reales), cómo se hizo
// el MOVIMIENTO, la parte TÉCNICA, lo que se DESCARTÓ y cifras del proyecto (no del proceso).
// Regla: solo HECHOS que constan. Fuentes: los registros de cada proyecto (~/Desktop/Claude Code/multiverse-home, playground-iep; savvia_inspo/work/
// r31/makingof-B.md para Neety y Zernio), los casos publicados en la web anterior (treseiscero.com/portfolio/<slug>, leídos el 28/09/2026) y lo que
// se ve en cada web. RONDA 64: paletas y tipografías de los cinco proyectos anteriores, MEDIDAS en su web en vivo (tools/r64-marca.cjs). Las citas de clientes en inglés van traducidas. Lo que no consta no se escribe: el campo se queda vacío y la página no lo enseña.
// Medios: public/media/obra/<slug>/ (tools/reel/obra.cjs, desde las grabaciones del reel).

export type Medio = { tipo: 'video' | 'imagen'; src: string; poster?: string; ancho?: 'entero' | 'mitad'; movil?: boolean; pie?: string };
export type Apartado = { titulo: string; texto: string[] };
// RONDA 152 · «que cada caso muestre cómo la hemos construido y los detalles más relevantes, y que cada imagen represente bien lo que se dice»:
// cada DETALLE es una pieza concreta de la web (un componente, una interacción, un efecto) con su vídeo DE CERCA, grabado en la web real
// (tools/r152/detalle.cjs, a densidad 2) o cortado de la grabación archivada de la web entregada (tools/r152/archivo.sh), y el texto que cuenta
// cómo está hecha. El PROCESO son los pasos de la construcción. Fuentes de los hechos: los registros de cada proyecto (ver arriba) y, para Quantus,
// Patchbay, Neety y Playground, sus documentos de proceso (multiverse-home/docs/proceso-y-receta.md, savvia_inspo/work/r31/makingof-B.md,
// playground-iep/CLAUDE.md), leídos el 09/10/2026.
export type Detalle = { titulo: string; texto: string; medio: Medio; prop?: string; pie?: string };
// RONDA 153 · Andoni: «la parte de detalles, que se presente más con imágenes (referencia: casabien.com/proyectos/rebranding-identidad-hannun);
// terminamos con una conclusión; en colores y typos, mostrar mejor tamaños y cómo se usan». «Los detalles» pasa a ser un MOSAICO de filas:
// ancha (12 columnas) · sangre (ronda 188: ya no sale de las guías; las 12 columnas a la proporción de su vídeo, como la ancha) · par (6 + 6) · par75 (7 + 5) · par57 (5 + 7) · trio (4 + 4 + 4); cada pieza con
// su título y UNA frase. `placa`: el vídeo, entero y centrado sobre un color de su paleta (índice); sin placa, el medio llena su hueco.
// Los textos largos de cada detalle se quedan en `detalles` (fuente de los hechos). Medios: x-* (ronda 152), d*/g* (ronda 62, solo los que
// enseñan la web entregada) y c-* (primeros planos y tramos: tools/r153/recorte.sh). Escala, botón y ejemplo aplicado: medidos en la web
// (tools/r153/estilos.cjs y aplicado.cjs); el porcentaje de uso de cada color, en las grabaciones de la web entregada (tools/r153/proporcion.cjs).
export type Pieza = { medio: Medio; titulo: string; pie: string; prop?: string; placa?: number; pos?: string };
export type Fila = { f: 'ancha' | 'sangre' | 'par' | 'par75' | 'par57' | 'trio'; p: Pieza[] };
export type Escalon = { n: string; fam: string; px: number; lh: number | 'normal'; peso: number; ls?: string; movil?: number }; // movil: su tamaño en móvil (28/10)
export type Boton = { fam: string; px: number; peso: number; radio: number; alto: number; fondo: string; tinta: string; nota?: string };
export type Proyecto = {
  slug: string;
  nombre: string;
  titular?: string; // titular grande bajo el nombre, en la cabecera del caso (si falta, no hay)
  titulo?: string; // <title> de su página, tal cual (si falta: «Nombre, un proyecto de savvia»; ronda 296: sin rayas en los títulos)
  dominio?: string;
  url?: string;
  sector?: string;
  ubicacion?: string;
  anio?: string; // Eric (oct.): el año del proyecto, en la ficha del caso
  hicimos?: string; // Eric (oct.): lo que hicimos para el cliente, en una o dos frases (columna fija del caso; si falta, la entradilla)
  destacado?: boolean;
  servicios: string[]; // filtran el listado (ver SERVICIOS)
  stack?: string[];
  resumen: string; // una línea: tarjeta del listado
  entradilla: string; // lead del caso
  contexto: string[]; // dos columnas bajo la entradilla
  reto: string; // el punto de partida
  frase?: string; // la frase grande del caso
  secciones?: { n: string; d: string }[]; // la web, sección a sección
  paleta?: { hex: string; n: string; pct?: number }[]; // el color de SU web (pct: % de uso medido, ronda 153)
  tipos?: { n: string; uso: string }[]; // sus tipografías
  proceso?: { n: string; d: string }[]; // ronda 152: cómo se construyó, paso a paso
  detalles?: Detalle[]; // ronda 152: las piezas de la web, de cerca (ronda 153: fuente de los hechos; en la página manda el mosaico)
  mosaico?: Fila[]; // ronda 153: «Los detalles», en imágenes
  escala?: Escalon[]; // ronda 153: su escala tipográfica, medida
  boton?: Boton; // ronda 153: su botón principal, medido
  medido?: string; // ronda 153: dónde y cómo se midió
  aplicado?: boolean; // ronda 153: hay recorte de su hero (public/media/obra/<slug>/aplicado.webp, tools/r153/aplicado.cjs)
  nota?: string; // ronda 153: aviso sobre las grabaciones
  conclusion?: string[]; // ronda 153: el cierre del caso
  comentario?: { quien: 'andoni' | 'eric'; texto: string }; // octubre 2026: lo que ha sido el proyecto, dicho por uno de los dos (BORRADORES de Nilo a partir de la conclusión: revisar)
  apartados: Apartado[]; // diseño, movimiento, contenido…
  tecnica?: string[]; // por dentro
  descartado?: string[]; // lo que se probó y cayó
  cifras?: { v: string; t: string }[]; // del PROYECTO (nunca del proceso)
  cita?: { texto: string; autor: string; rol: string; video?: string; retrato?: string }; // ronda 144: si el testimonio tiene vídeo, se indica · 28/10: con retrato, va ilustrado al final del caso (Voces)
  valor?: { n: string; d: string }[]; // 28/10: lo que ganó el cliente, cada punto con su prueba
  sinMovimiento?: boolean; // 28/10: no enseña «Movimiento»
  sinDetalles?: boolean; // 28/10: no enseña «Los detalles» (el mosaico sigue alimentando «Movimiento»)
  sinCita?: boolean; // 02/11: pieza propia sin cliente (Quantus, Patchbay): el caso no enseña el marcador del testimonio final
  figmaCorte?: number; // 28/10: cuántas láminas del Figma van antes de Color, Tipografía y Espaciado (el resto, después)
  figmaTitulo?: string; // 02/11: el título del bloque de láminas cuando no hubo Figma (Quantus y Patchbay: «Del concepto a la web»); con él, los alt no nombran Figma
  figma?: { f: 'ancha' | 'trio' | 'alta' | 'tema'; img: string[]; titulo: string; pie: string }[]; // «tema» = dos láminas (clara, oscura) con un conmutador (02/11) // 28/10: «Del Figma a la web», capturas de su archivo de diseño (tools/neety-figma/)
  animacion?: { titulo: string; texto: string; diseno: { src: string; pie: string; rotulo?: string; alt?: string }; web: { src: string; poster: string; pie: string; rotulo?: string; alt?: string } }; // 02/11: rotulo y alt propios cuando el diseño no fue en Figma // 28/10: del diseño (Figma) a la animación en la web, en dos columnas
  herramientas?: { titulo: string; texto: string; piezas: { titulo: string; alt: string; video?: { src: string; poster: string; pie: string }; img?: { src: string; pie: string } }[] }; // 02/11: `img`, una pieza en imagen // 28/10: con qué trabajamos (Ship Studio, Agentation), dos vídeos a dos columnas
  micro?: { titulo: string; texto: string; video: { src: string; poster: string; pie: string; rotulo?: string; alt?: string }; mas?: { titulo: string; alt: string; video: { src: string; poster: string; pie: string } }[] }; // mas: más grabaciones debajo (28/10) // 28/10: las microanimaciones, una grabación a lo ancho
  con?: string;
  color: string; // fondo de su tarjeta
  colores: [string, string, string]; // fondo · secundario · acento de su web (el degradado de su pieza)
  portada: Medio;
  escritorio?: Medio; // ronda 131: si la portada es móvil, su web en escritorio para la rejilla del portfolio
  caratulaLogo?: { vb: string; fill: string; d: string[] }; // el caso enseña solo su logotipo sobre el fondo de marca, sin la web (el vídeo se muestra más abajo)
  cubierta?: Medio; // ronda 154: la toma GRANDE de la carátula del caso (1920 px, tools/r154/grabar.cjs y archivo.sh); si falta, la portada
  cubiertaMovil?: { src: string; poster: string }; // 28/10: la grabación en móvil; con ella, la carátula del caso tiene también el MÓVIL de la mesa (cápsula mesa · móvil)
  galeria?: Medio[]; // ronda 152: sin uso en el caso (lo sustituyen los detalles)
  // octubre 2026: los SONIDOS de su web, si los tiene, copiados de su código (Web Audio): un bus con su volumen y un paso bajo, y sus capas: «ruido»
  // (ruido blanco por un paso banda: f Hz, q; ataque de 0,5 ms y caída exponencial en dur s) y «seno» (de f a fin Hz en 44 ms; ataque y caída). Cada golpe
  // varía un pelo de tono (±4 % el ruido, ±3 % el seno), como en su web. El caso deja tocarlos y dibuja su forma de onda.
  sonidos?: { tipo: 'clic' | 'pasar'; vol: number; corte: number; capas: ({ c: 'ruido'; f: number; q: number; pico: number; dur: number } | { c: 'seno'; f: number; fin: number; pico: number; ataque: number; dur: number })[] }[];
  // octubre 2026: la librería que entregamos al cliente, si está publicada. El caso la REPRESENTA (no la graba) con su propio contenido, leído de la librería:
  // su índice, prompts de «Trabajar con Claude», su paleta, sus titulares, su botón y su escala de espaciado; y enlaza a la entera
  libreria?: {
    url: string;
    captura: string; capturaMovil: string; // su primera pantalla (lo que se ve mientras carga, y si no carga)
    accesos: { n: string; nEn: string; ancla: string }[]; // los atajos a sus secciones (sus #id)
    tapa: { marca: string; titulo: string; tituloEn: string; fondo: string; tinta: string; acento: string }; // el libro: su tapa, en los colores de su marca
    entrega: { n: string; d: string; nEn: string; dEn: string }[]; // lo que se llevó el cliente (de su librería: «Recibir el proyecto»)
    video?: { src: string; poster: string; pie: string; pieEn: string }; // 28/10: «La entrega» como grabación de la librería (sin albarán ni libro)
    texto?: string[]; textoEn?: string[]; // 28/10: lo que se cuenta de la entrega, encima del albarán
  };
  entrega?: { texto: string[]; textoEn?: string[]; img?: { src: string; pie: string; pieEn?: string }; video?: { src: string; poster: string; pie: string; pieEn?: string } }; // video (02/11): la librería de ejemplo recorrida, como la de Neety // 02/11: «La entrega» solo en texto (piezas sin librería publicada: lo que se entregaría)
  muestra?: { titular: string; texto: string; detalle?: string; cifra?: string; titularEn?: string; textoEn?: string; detalleEn?: string }; // cifra (02/11): el número que enseñan los escalones «Cifra» // 28/10: frases de SU web para la escala tipográfica del caso (como el storybook)
  iconos?: { n: string; src: string }[]; // octubre 2026: su iconografía, si la tiene (el caso la enseña en rejilla, a la manera de brand.dropbox.com)
};

export const SERVICIOS = ['Diseño web', 'Desarrollo agéntico', 'Webflow', 'CMS', 'Multidioma', 'Migración', 'Animación'];

const m = (slug: string, n: string, extra: Partial<Medio> = {}): Medio => ({ tipo: 'video', src: `/media/obra/${slug}/${n}.mp4`, poster: `/media/obra/${slug}/${n}.jpg`, ...extra });
// un detalle: su vídeo (x-<nombre>) y su proporción real
// una pieza del mosaico (ronda 153): su vídeo, su título, su frase y cómo se presenta
// ronda 154 · `foto`: lo que no se mueve va en imagen fija (.webp a 2×, tools/r154/grabar.cjs) en vez de un vídeo quieto o cortado
const pz = (slug: string, n: string, titulo: string, pie: string, o: { prop?: string; placa?: number; pos?: string; medio?: Partial<Medio>; foto?: boolean } = {}): Pieza => ({ medio: o.foto ? { tipo: 'imagen', src: `/media/obra/${slug}/${n}.webp`, ...(o.medio ?? {}) } : m(slug, n, o.medio ?? {}), titulo, pie, prop: o.prop ?? '16 / 9', placa: o.placa, pos: o.pos });
const x = (slug: string, n: string, titulo: string, texto: string, prop = '16 / 9', extra: { pie?: string; medio?: Partial<Medio> } = {}): Detalle => ({ titulo, texto, medio: m(slug, 'x-' + n, extra.medio ?? {}), prop, pie: extra.pie });

export const proyectos: Proyecto[] = [
  {
    // octubre 2026: Andoni rehízo la home de Multiverse Computing (que no llegó a publicarla; ronda 126: «Kuanta», en marca blanca) como CONCEPTO propio,
    // sin nada del cliente: Quantus. Medios y medidas, de quantus-demo.vercel.app
    // 02/11 · reescrito con la estructura del caso de Neety y el dosier de la ingeniería inversa (docs/casos/dossier-quantus.md, cada dato con su fuente):
    // la historia en «El proyecto», láminas del concepto (ilustraciones por código, la marca por rondas, la home), «Del diseño a la animación» (el plano y la
    // pieza), «Microanimaciones», Agentation y la conclusión. Sin Figma, sin Ship Studio y sin CMS: todo en código con Claude Code. El cliente original no se nombra.
    slug: 'quantus',
    nombre: 'Quantus',
    url: 'https://quantus-demo.vercel.app',
    dominio: 'quantus-demo.vercel.app',
    sector: 'IA y computación cuántica',
    anio: '2026',
    destacado: true,
    servicios: ['Diseño web', 'Desarrollo agéntico', 'Animación'],
    stack: ['HTML y CSS a medida', 'GSAP + ScrollTrigger', 'Lenis', 'Canvas 2D', 'Agentation', 'Vercel', 'GitHub'],
    resumen: 'Una esfera de puntos que se comprime hasta ser su logotipo: el producto, explicado sin una palabra.',
    hicimos: 'Una pieza propia para demostrar que el desarrollo agéntico funciona cuando lo guía el criterio de un estudio: la home completa de una empresa de IA, construida con Claude Code en una semana de rondas, con cada decisión tomada en savvia y cada entrega medida en Chrome y WebKit.',
    entradilla: 'Quantus comprime modelos de IA para que corran con mucho menos cálculo y la misma inteligencia. Su home tenía que demostrarlo, no solo decirlo.',
    contexto: [
      'Quantus es una pieza nuestra para demostrar que el desarrollo agéntico funciona cuando lo dirige el criterio de un estudio: la home completa de una empresa ficticia de compresión de modelos de IA, diseñada y construida con Claude Code.',
      'Así se trabaja en savvia: escribimos el brief, la IA propone tres direcciones y elegimos una. Después, una semana de rondas con feedback por puntos y capturas. Cada decisión es humana. Lo que rechazamos pasa a una lista de 99 reglas que la IA lee antes de cada ronda, y revisamos sobre la página publicada con Agentation.',
      'Cada entrega se mide en Chrome y WebKit antes de darse por buena. Tras 32 rondas: doce secciones, quince ilustraciones escritas como código y cuatro escenas animadas con el scroll.',
    ],
    reto: '',
    frase: 'Menos cálculo, la misma inteligencia.',
    secciones: [
      { n: 'Hero', d: 'Una esfera de miles de puntos se comprime con el scroll hasta ser el isotipo, mientras las lecturas caen: del 100 % al 5 % del tamaño, con el 97,4 % de la precisión.' },
      { n: 'Quién usa IA comprimida', d: 'Cuatro casos de uso, cada uno con su ilustración isométrica, que se redibuja al pasar el cursor.' },
      { n: 'El modelo', d: 'Un ranking de 178 modelos en el que el suyo escala hasta el puesto 13, una sola vez, al entrar.' },
      { n: 'Cómo funciona la compresión', d: 'Una matriz de 4096 × 4096 de la que el scroll descarta dos tercios y descompone el resto.' },
      { n: 'Un modelo, cuatro sitios', d: 'Una sola ilustración que se transforma entre nube, centro de datos, borde y dispositivo.' },
      { n: 'La suite de IA', d: 'Compresión, seguridad y orquestación en paneles que se abren.' },
      { n: 'La plataforma', d: 'Un panel de cuatro pasos con capacidad, latencia y coste.' },
      { n: 'Una sola pila', d: 'Los productos como bloques con nombre que caen y encajan con gravedad.' },
      { n: 'Sectores', d: 'Diez industrias numeradas, con su icono.' },
      { n: 'Validado en producción', d: 'Cuatro medidas de clientes que se turnan al pulsarlas.' },
      { n: 'Compañía', d: 'Tres ilustraciones de su historia y noticias que rotan.' },
      { n: 'Cómo se hizo', d: 'La única sección que no es ficción: las rondas, el archivo, las ilustraciones y las herramientas de medida.' },
    ],
    paleta: [
      { hex: '#15181C', pct: 72.3, n: 'Fondo' },
      { hex: '#1B1F24', pct: 25.8, n: 'Fondo elevado' },
      { hex: '#F8FAFC', pct: 1.2, n: 'Tinta' },
      { hex: '#F01438', pct: 0.8, n: 'Rojo de marca' },
    ],
    tipos: [
      { n: 'Schibsted Grotesk', uso: 'Titulares y texto, 400, 500 y 600' },
      { n: 'JetBrains Mono', uso: 'Datos, especificaciones y etiquetas' },
    ],
    apartados: [],
    tecnica: [
      'Un único HTML escrito a mano, autocontenido, de 446 KB',
      'La esfera, la matriz y el tensor, en Canvas 2D. Las quince ilustraciones, SVG generado por código',
      'GSAP y ScrollTrigger con Lenis al mando del reloj. Todo bucle se pausa fuera de pantalla',
      'Medido antes de optimizar: el hilo principal bajó de 40,1 s a 26,4 s y los fotogramas de más de 20 ms, del 2,5 % al 0,9 %',
      'Movimiento reducido respetado: sin bucles, con el logotipo ya formado',
      'Modo revisión con Agentation detrás de un parámetro: un visitante normal no descarga ni un byte',
      'Publicada en Vercel desde la rama principal, con caché inmutable para los recursos',
    ],
    cifras: [
      { v: '32', t: 'rondas de feedback humano' },
      { v: '15', t: 'ilustraciones escritas como código' },
      { v: '99', t: 'reglas de lo que no vuelve' },
    ],
    // 02/11 · DEL CONCEPTO A LA WEB (no hubo Figma): el kit de ilustraciones, la marca ronda a ronda y la home sección a sección (tools/casos-concepto/)
    figmaTitulo: 'Del concepto a la web',
    // 02/11 · Andoni: «poner las diferentes iteraciones de cada página» y «mostrar más cómo se va trabajando cada iteración»: cuatro secuencias ronda a ronda
    // (docs/casos/iteraciones-quantus.md; recortes sin cabecera ni nada del cliente original) antes de Color; la home, después. Sin isotipos (Andoni)
    // 02/11 · Andoni: «un avance del hero de low fidelity hasta el resultado final, y otra captura con varias opciones de hero, créalas tú» (tools/casos-concepto/hero-mockups.cjs)
    figmaCorte: 2,
    figma: [
      { f: 'ancha', img: ['/media/obra/quantus/hero-fidelidad.webp'], titulo: 'Del boceto al hero', pie: 'Así se construye una base sólida en savvia. Primero las guías: doce columnas con 29 px de hueco, 58 px de margen, 96 px de aire arriba y cada medida acotada, sin una sola decisión de estilo. Después el texto real sobre esas guías. Luego la marca: la tipografía, el rojo y la esfera, todavía sobre la retícula. Y al final la versión publicada, con la luz detrás y las lecturas del modelo.' },
      { f: 'ancha', img: ['/media/obra/quantus/hero-opciones.webp'], titulo: 'Las opciones de hero', pie: 'Nueve maneras de abrir la misma página: el titular centrado sobre la esfera, el panel con la llamada a la API, los cuatro casos de uso, el titular a todo el ancho con las cifras, la esfera como cartel, los tres productos, la tabla de modelos, el titular a 150 px con la esfera cortada por el borde, y la elegida, la esfera que se comprime al hacer scroll. Se quedó la última porque es la única que enseña lo que hace Quantus sin explicarlo.' },
      { f: 'ancha', img: ['/media/obra/quantus/breakpoints.webp'], titulo: 'Los dos breakpoints, en detalle', pie: 'Seis secciones a 1440 y a 390 píxeles, una al lado de la otra. Las tarjetas pasan a columna con su ilustración, la matriz y su texto se apilan sin perder el proceso y la pila deja de ser una rejilla para ser una lista. Nada se recorta ni se esconde.' }, // 02/11: sin #nova ni #suite (restos del cliente original en la web; Andoni: «mientras no se vea nada de eso en el case study»)
    ],
    // 02/11 · Andoni: «Del diseño a la animación quitamos porque se hizo directamente en Claude; pondría microinteracciones directamente»
    micro: {
      titulo: 'Animaciones', // 02/11 · Andoni: «cambiaría Microanimaciones por Animaciones y explicaría que sirven para contar mejor la historia del producto»
      texto: 'Las animaciones cuentan la historia del producto y hacen que quien entra entienda rápido lo que ofrece: la matriz se comprime y se descompone con el scroll, la pila cae con gravedad real y lo de debajo cede al recibirla, y cada ilustración se traza a línea y después se pinta. Al estar hecha en código, cada movimiento se escribe y se afina a mano.',
      video: { src: '/media/obra/quantus/x-matriz.mp4', poster: '/media/obra/quantus/x-matriz.jpg', pie: 'La compresión, contada en horizontal con el scroll: la matriz de 4096 × 4096 se perfila, pierde dos tercios y lo que queda se descompone en una cadena de tensores.', rotulo: 'La ilustración del proceso.', alt: 'La matriz de Quantus perfilándose y descomponiéndose con el scroll' },
      mas: [
        { titulo: 'La pila que cae', alt: 'Los productos de Quantus cayendo como bloques en su web, a cámara lenta', video: { src: '/media/obra/quantus/x-pila.mp4', poster: '/media/obra/quantus/x-pila.jpg', pie: 'Los bloques caen con gravedad, a cámara lenta: nada rebota y lo de debajo cede 3,2 píxeles al recibirlos.' } },
        { titulo: 'Cómo se pintan las ilustraciones', alt: 'Una ilustración de Quantus trazándose a línea y pintándose', video: { src: '/media/obra/quantus/x-plano.mp4', poster: '/media/obra/quantus/x-plano.jpg', pie: 'Primero el contorno de cada arista, de atrás hacia delante, como un plano. Después entra el color de cada cara.' } },
      ],
    },
    // 02/11 · el feedback se dejó sobre la propia página publicada (?feedback=1); la grabación es del modo revisión sobre Quantus (tools/casos-concepto/cast.cjs)
    herramientas: {
      titulo: 'Agentation',
      texto: 'Así se afina al detalle. En savvia dejamos los comentarios sobre la propia página publicada, elemento a elemento: Agentation marca lo que hay bajo el cursor, guarda cada nota con el selector exacto y el tamaño de pantalla, y lo entrega a Claude como un texto. Cada pin es un cambio concreto, no una impresión general.',
      piezas: [
        { titulo: 'Los comentarios, uno por pieza', alt: 'Agentation sobre la web de Quantus: cuatro notas, una por sección', video: { src: '/media/obra/quantus/agentation.mp4', poster: '/media/obra/quantus/agentation.jpg', pie: 'Cuatro notas reales de la revisión de savvia: la tipografía de las cifras del hero, el material de las ilustraciones, la ilustración única que se transforma y la caída de los bloques. Al final, el botón de copiar.' } },
        { titulo: 'Lo que recibe Claude', alt: 'El texto que Agentation entrega a Claude: cada nota con la ruta de su elemento', img: { src: '/media/obra/quantus/agentation-md.webp', pie: 'El texto copiado: cada nota con la ruta del elemento y lo que debe cambiar. Claude lo lee y resuelve los cuatro puntos en la siguiente ronda.' } },
      ],
    },
    entrega: {
      texto: ['Con una web así, el cliente se llevaría su librería: el sistema de diseño generado desde el propio código (color, tipografía, espaciado, movimiento y cada componente) y la guía para conectar el repositorio a Claude. Con ella, su equipo crea páginas nuevas con la misma estética pidiéndoselas a la IA, sin salirse de lo decidido.'],
      video: { src: '/media/obra/quantus/libreria-recorrido.mp4', poster: '/media/obra/quantus/libreria-recorrido.jpg', pie: 'Un ejemplo de la librería de Quantus, montada con sus tokens reales: cómo recibir el proyecto y pedir cambios a Claude, color, tipografía, botones, espaciado y los componentes con el nombre con el que se piden.', pieEn: 'An example of Quantus’s library, built from its real tokens: how to receive the project and ask Claude for changes, colour, typography, buttons, spacing and the components with the names they are asked for by.' },
      textoEn: ['With a site like this, the client would take away its library: the design system generated from the code itself (colour, typography, spacing, motion and every component) and the guide to connecting the repository to Claude. With it, their team creates new pages in the same aesthetic by asking the AI, without stepping outside what was decided.'],
    },
    sinMovimiento: true,
    sinDetalles: true,
    sinCita: true,
    detalles: [
      x('quantus', 'esfera', 'La esfera que se comprime', 'El producto, explicado sin una palabra: miles de puntos atados al scroll se comprimen hasta formar el isotipo mientras las lecturas bajan del 100 % al 5 %. En Canvas 2D, pintados por lotes (16 tintes × 40 alfas, un solo trazo por grupo) para que no pese.'),
      x('quantus', 'tarjetas', 'Cuatro casos, cuatro dibujos', 'Cada caso de uso tiene su ilustración isométrica. Al pasar el cursor, el dibujo se rehace: primero el contorno, después el color. Las cuatro salen del mismo generador de ilustraciones.', '7 / 3'),
      x('quantus', 'matriz', 'Del tensor a cuatro sitios', 'Una sección fijada: la matriz de 4096 × 4096 se perfila, se descartan dos tercios de sus correlaciones y lo que queda se descompone en una cadena de cinco tensores. Después, un solo modelo viaja de la nube al dispositivo: se mide su caja en la escena que sale y en la que entra para que aterrice en el mismo píxel.'),
      x('quantus', 'pila', 'La pila que cae', 'Los productos caen como bloques con gravedad (2.400 px/s², medio segundo, una décima entre filas) y lo de debajo cede 3,2 px al recibirlos antes de volver a su sitio.'),
      x('quantus', 'tensor', 'El tensor del pie', 'Un tensor de 9 × 9 × 9 cubos gira y un plano rojo marca los del logotipo, que se ordenan hasta formarlo. Un ciclo de 12 segundos sin salto, en canvas: el cubo 3D en CSS que lo precedió no se componía bien en Safari.'),
    ],
    mosaico: [
      { f: 'ancha', p: [pz('quantus', 'x-esfera', 'La esfera que se comprime', 'Miles de puntos atados al scroll forman el isotipo mientras el tamaño baja del 100 % al 5 %.')] },
      { f: 'par57', p: [pz('quantus', 'x-plano', 'Un plano que se construye', 'Cada sitio donde corre el modelo es una ilustración isométrica que se traza a línea y después se rellena.', { prop: '1 / 1' }), pz('quantus', 'x-matriz', 'Del tensor a cuatro sitios', 'La matriz de 4096 × 4096 pierde dos tercios y se queda en un modelo que cabe en cualquier sitio.', { placa: 3 })] },
      { f: 'sangre', p: [pz('quantus', 'x-tarjetas', 'Cuatro casos, cuatro dibujos', 'Al pasar el cursor, cada ilustración se rehace: primero el contorno, después el color.', { prop: '1680 / 720' })] },
      { f: 'par', p: [pz('quantus', 'x-pila', 'La pila', 'Los productos caen con gravedad al entrar y lo de debajo cede 3,2 px al recibirlos.', { placa: 2, prop: '1320 / 940', foto: true }), pz('quantus', 'c-casos', 'Quién usa IA comprimida', 'Diez industrias en una rejilla de filetes, con el rótulo en JetBrains Mono y el texto en Schibsted Grotesk.', { placa: 3, foto: true })] },
      { f: 'ancha', p: [pz('quantus', 'x-tensor', 'El tensor del pie', '729 cubos giran y un plano rojo marca los que forman el logotipo.')] },
    ],
    muestra: { titular: 'All the intelligence.', texto: 'The same answers, on a fraction of the compute.', detalle: 'For data centers', cifra: '43' },
    // 02/11 · Andoni: «en tipografía poner todos los tamaños usados» y «los tamaños son algo raros, con impares: ¿qué sistema sigue?». El sistema de Quantus
    // es FLUIDO: cada escalón es un clamp(mínimo, vw, máximo) de su hoja de estilos (site/src.html): aquí, el mínimo (móvil) y el máximo (pantalla ancha) de cada
    // token, que son los números de diseño; a 1440 se miden valores intermedios (el H1, 97,9). Los nombres de escalón son de Nilo
    escala: [
      { n: 'H1', fam: 'Schibsted Grotesk', px: 104, movil: 44, lh: 100, peso: 500, ls: '−0,04 em' },
      { n: 'H2', fam: 'Schibsted Grotesk', px: 66, movil: 34, lh: 67, peso: 500, ls: '−0,025 em' },
      { n: 'H3 L', fam: 'Schibsted Grotesk', px: 40, movil: 26, lh: 43, peso: 500, ls: '−0,03 em' },
      { n: 'H3', fam: 'Schibsted Grotesk', px: 24, movil: 20, lh: 30, peso: 500, ls: '−0,01 em' },
      { n: 'Entradilla', fam: 'Schibsted Grotesk', px: 21, movil: 17, lh: 31.5, peso: 400 },
      { n: 'Texto', fam: 'Schibsted Grotesk', px: 17, lh: 25.5, peso: 400 },
      { n: 'Pequeño', fam: 'Schibsted Grotesk', px: 15, lh: 22.5, peso: 400 },
      { n: 'Detalle', fam: 'JetBrains Mono', px: 13, lh: 19.5, peso: 400 },
      { n: 'Rótulo', fam: 'JetBrains Mono', px: 11, lh: 16.5, peso: 400, ls: 'mayúsculas' },
    ],
    boton: { fam: 'Schibsted Grotesk', px: 15, peso: 500, radio: 6, alto: 40, fondo: '#F01438', tinta: '#FFFFFF' },
    medido: 'Los tokens de su hoja de estilos: cada tamaño es fluido, de su mínimo en móvil a su máximo en pantalla ancha', // 02/11
    aplicado: true,
    comentario: { quien: 'andoni', texto: 'Quantus fue el proyecto en el que más aprendimos a decir que no: treinta y dos rondas y casi cien reglas de lo que no vuelve. Lo que queda es una página que explica un producto difícil sin pedir nada a quien la lee.' },
    conclusion: [
      'Con criterio humano y agentes bien dirigidos, una home como esta, con quince ilustraciones y cuatro escenas animadas, sale en una semana de rondas. Las animaciones que antes llevaban semanas de maquetación, ahora son días de dirección.',
      'La IA no decide: propone y ejecuta, y lo mide todo antes de enseñarlo. En savvia decidimos cada forma, cada movimiento y cada palabra, y eso es lo que se ve.',
      'Lo que queda es un método: cada petición se convierte en un cambio, se mide y queda escrita, para que la siguiente web empiece donde acabó esta.',
    ],
    color: '#15181c',
    colores: ['#15181c', '#f01438', '#3a3e44'],
    // 29/10 · Eric: SU grabación de Screen Studio (lvcg4kO8); las de obra/quantus/portada y cubierta eran mías, con script
    portada: { tipo: 'video', src: '/media/anteriores/video/quantus.mp4', poster: '/media/anteriores/video/quantus.jpg' },
    cubierta: { tipo: 'video', src: '/media/anteriores/video/quantus-grande.mp4', poster: '/media/anteriores/video/quantus-grande.jpg' },
    cubiertaMovil: { src: '/media/anteriores/video/quantus-movil.mp4', poster: '/media/anteriores/video/quantus-movil.jpg' }, // la de Eric (Screen Studio 224iivlq)
  },
  {
    // octubre 2026: Andoni rehízo la web de Zernio (ronda 126: «Arkdev», en marca blanca; antes «Amarra») como CONCEPTO propio, sin nada del cliente:
    // Patchbay. Medios y medidas, de patchbay-web.vercel.app
    // 02/11 · reescrito con la estructura del caso de Neety y el dosier de la ingeniería inversa (docs/casos/dossier-patchbay.md, cada dato con su fuente):
    // el diseño vino de un artefacto de Claude Design y se llevó a producción en código con Claude Code (dos días, quince rondas); sin archivo de diseño en
    // Figma, sin Ship Studio y sin CMS. Láminas del concepto (la marca por código, el móvil antes y después, la home), «Del diseño a la animación» (el terminal),
    // «Microanimaciones» (el muelle, los pasos, las fichas, la calculadora, el intro) y la conclusión. El cliente original no se nombra.
    slug: 'patchbay',
    nombre: 'Patchbay',
    url: 'https://patchbay-web.vercel.app',
    dominio: 'patchbay-web.vercel.app',
    sector: 'Software para desarrolladores',
    anio: '2026',
    destacado: true,
    servicios: ['Diseño web', 'Desarrollo agéntico', 'Animación'],
    stack: ['Claude Design', 'HTML a medida', 'React 18', 'CSS', 'Web Audio', 'Vercel', 'GitHub'],
    resumen: 'Una API de redes y mensajería para 23 canales, presentada como un muelle donde atraca cada uno.',
    hicimos: 'Una pieza propia para demostrar que el desarrollo agéntico funciona con guía humana: un diseño hecho con Claude Design, llevado a producción con Claude Code en una semana de rondas, con savvia decidiendo en cada una y cada entrega medida en Chrome y WebKit.',
    entradilla: 'Patchbay conecta un producto con 23 canales de redes sociales, mensajería y anuncios a través de una sola API. Ellos se ocupan de las apps de desarrollador, los permisos y las revisiones de cada plataforma.',
    contexto: [
      'Patchbay es una pieza nuestra para demostrar que el desarrollo agéntico funciona con guía humana: la landing de una API ficticia que conecta un producto con 23 canales, diseñada con Claude Design y llevada a producción con Claude Code.',
      'El diseño y su coreografía salen de Claude Design como un artefacto. Claude Code lo convierte en un sitio propio sin tocar lo que ya estaba bien. Después, una semana de rondas guiadas desde savvia: cada una empieza con una decisión nuestra y la IA la convierte en un cambio medido en Chrome y WebKit.',
      'Así un diseño de partida se convierte en una web de verdad: cómo entra cada sección, qué retratos cuentan la historia, cuánto puede pesar la página. Cada ronda queda escrita para que la siguiente empiece sabiendo.',
    ],
    reto: '',
    frase: 'Cada canal atraca en la misma API.',
    secciones: [
      { n: 'Hero', d: 'El titular y un terminal que escribe el ejemplo línea a línea: conectar, publicar y responder.' },
      { n: 'En directo', d: 'Contadores de publicaciones y cuentas conectadas.' },
      { n: 'Plataformas', d: 'Veintitrés pestañas, una por canal, con su ficha técnica.' },
      { n: 'El cambio', d: 'Una sección oscura que cambia el ritmo: la foto de un ordenador con la consola de Patchbay y la nueva capa de infraestructura.' },
      { n: 'Agentes: el muelle', d: 'Los 23 canales en un arco que van atracando, uno a uno, en la API.' },
      { n: 'Clientes', d: 'Un caso destacado que rota y seis reseñas.' },
      { n: 'Cómo empezar', d: 'Tres pasos cronometrados: 30 segundos, 2 minutos y 1 minuto.' },
      { n: 'Precios', d: 'Pago por uso, con una calculadora de 1 a 10.000 cuentas.' },
      { n: 'Preguntas, seguridad y cierre', d: 'Seis preguntas de ingeniería, el bloque de seguridad y la llamada final.' },
    ],
    paleta: [
      { hex: '#F7F4F0', pct: 96.2, n: 'Papel' },
      { hex: '#17130F', pct: 1.2, n: 'Tinta' },
      { hex: '#EB3514', pct: 2.6, n: 'Bermellón (único acento)' },
      { hex: '#57C15F', pct: 0, n: 'Verde «en directo»' },
    ],
    tipos: [
      { n: 'Instrument Sans', uso: 'Titulares, 600' },
      { n: 'JetBrains Mono', uso: 'Código y rótulos' },
    ],
    // 02/11 · Andoni: «el sonido va fuera en Patchbay»: sin `sonidos` ni el apartado
    apartados: [], // 02/11 · Andoni: «quitamos lo del sonido en Patchbay» (los tonos de blip() quedan en el registro, ronda del 02/11)
    tecnica: [
      'Un único HTML de 2.962 líneas (229 KB), con React 18 en el navegador y sin una sola petición a una CDN',
      'Movimiento en CSS: 25 animaciones propias, sin librerías, sin canvas ni WebGL',
      'Sonido sintetizado con Web Audio',
      'Calculadora de precios con un deslizador logarítmico de 1 a 10.000 cuentas',
      'Tema claro y oscuro, recordados en el navegador',
      'Carga de 580 KB: el artefacto de partida pesaba 5,7 MB',
      'Publicada en Vercel desde la rama principal. Cada ronda, verificada en Chrome y WebKit a 1440 y 390 píxeles',
    ],
    cifras: [
      { v: '15', t: 'rondas de feedback humano' },
      { v: '23', t: 'canales en una API' },
      { v: '580 KB', t: 'de carga, de 5,7 MB' },
    ],
    // 02/11 · DE CLAUDE DESIGN A LA WEB: la marca generada por código, el móvil que no existía (antes y después) y la home sección a sección (tools/casos-concepto/)
    figmaTitulo: 'De Claude Design a la web',
    figmaCorte: 2, // 02/11 · Andoni: del boceto al hero y varias opciones creadas por savvia; sin breakpoints (no enseñamos móvil): en su lugar, claro y oscuro
    figma: [
      { f: 'ancha', img: ['/media/obra/patchbay/hero-fidelidad.webp'], titulo: 'Del boceto al hero', pie: 'La misma secuencia que en cualquier pieza de savvia. Las guías primero: un contenedor de 1240 px, doce columnas con 24 px de hueco, 92 px de aire arriba y el terminal ocupando diez columnas, todo acotado. Después el texto real, luego la marca con el bermellón y el terminal ya escrito, y al final la versión publicada, donde el terminal se escribe solo.' },
      { f: 'ancha', img: ['/media/obra/patchbay/hero-opciones.webp'], titulo: 'Las opciones de hero', pie: 'Nueve aperturas. «Esquema», la que traía el diseño: una llamada que entra y los canales que salen. «Muelle», con los 23 canales atracando en la API. «Producto», con la bandeja de publicaciones. «Dos columnas», con el terminal al lado del titular. «Canales», los 23 en píldoras. «Antes y después», doce integraciones o una. «Playground», la petición y su respuesta. «Confianza», las cifras y los partners. Y «Código», la elegida: tres líneas que se escriben solas, porque eso es lo que vende Patchbay.' },
      { f: 'tema', img: ['/media/obra/patchbay/temas-claro.webp', '/media/obra/patchbay/temas-oscuro.webp'], titulo: 'Tema claro y tema oscuro', pie: 'Las diez secciones, en el tema que elijas con el botón. El oscuro no es una inversión: cada superficie, filete y velo tiene su valor propio, y el bermellón es el mismo en los dos.' }, // 02/11 · Andoni: «en Patchbay quitamos móvil, dejamos solo desktop»
    ],
    micro: {
      titulo: 'Animaciones', // 02/11 · Andoni: «cambiaría Microanimaciones por Animaciones y explicaría que sirven para contar mejor la historia del producto»
      texto: 'Las animaciones cuentan la historia del producto y hacen que quien entra entienda rápido lo que ofrece: los canales atracan uno a uno en la API, los pasos se cumplen en el tiempo que dicen y el intro dibuja la marca antes de abrir la página. Al estar hecha en código, cada detalle se puede animar y medir.',
      video: { src: '/media/obra/patchbay/x-muelle.mp4', poster: '/media/obra/patchbay/x-muelle.jpg', pie: 'Los 23 canales en un arco. Cada 2,4 segundos uno atraca en la API.', rotulo: 'El muelle.', alt: 'El muelle de Patchbay: los canales atracando uno a uno en la API' },
      mas: [
        { titulo: 'En marcha en minutos', alt: 'Los tres pasos cronometrados de Patchbay', video: { src: '/media/obra/patchbay/x-pasos.mp4', poster: '/media/obra/patchbay/x-pasos.jpg', pie: 'Tres pasos cronometrados: la clave se genera a la vista y los canales se conectan uno a uno.' } },
        { titulo: 'La animación de carga', alt: 'El intro de Patchbay: la marca que se llena y el contador', video: { src: '/media/obra/patchbay/intro.mp4', poster: '/media/obra/patchbay/intro.jpg', pie: 'Un cuadrado que se dibuja, la marca que se llena de abajo arriba y un contador de 000 a 100. Después los paneles suben escalonados. Dura 2,3 segundos y cualquier gesto lo salta.' } },
      ],
    },
    entrega: {
      texto: ['Con una web así, el cliente se llevaría su librería: el sistema de diseño generado desde el propio código (la marca sobre φ, los dos tipos, el acento único, el sonido y cada componente) y la guía para conectar el repositorio a Claude. Con ella, su equipo crea páginas nuevas con la misma estética pidiéndoselas a la IA, sin salirse de lo decidido.'],
      video: { src: '/media/obra/patchbay/libreria-recorrido.mp4', poster: '/media/obra/patchbay/libreria-recorrido.jpg', pie: 'Un ejemplo de la librería de Patchbay, montada con sus tokens reales: cómo recibir el proyecto y pedir cambios a Claude, color, tipografía, botones, espaciado y los componentes con el nombre con el que se piden.', pieEn: 'An example of Patchbay’s library, built from its real tokens: how to receive the project and ask Claude for changes, colour, typography, buttons, spacing and the components with the names they are asked for by.' },
      textoEn: ['With a site like this, the client would take away its library: the design system generated from the code itself (the brand on φ, the two typefaces, the single accent, the sound and every component) and the guide to connecting the repository to Claude. With it, their team creates new pages in the same aesthetic by asking the AI, without stepping outside what was decided.'],
    },
    sinMovimiento: true,
    sinDetalles: true,
    sinCita: true,
    detalles: [
      x('patchbay', 'terminal', 'La intro y el terminal', 'La marca se llena de bermellón de abajo arriba mientras un contador va de 000 a 100. Después, el terminal se escribe solo, una línea cada 190 ms: conectar, publicar y responder, cada paso con su ✓ y su «200 OK».'),
      x('patchbay', 'canales', 'Veintitrés fichas técnicas', 'Una pestaña por canal y, en cada una, lo que admite de verdad: formatos, límites de vídeo y de texto, y el recorrido de una publicación (en cola, publicando, publicada).', '2 / 1'),
      x('patchbay', 'muelle', 'El muelle', 'Una cápsula de 180 px y un arco de radio 730 px con las 23 teselas, a 15,65° cada una. Cada 2,4 segundos avanza una y encaja en 0,9 s con una curva que arranca seca y se posa. Las vecinas, a escala 0,79. Las pieles alternan blanco, tinta y bermellón.', '4 / 3'),
      x('patchbay', 'pasos', 'En marcha en minutos', 'Tres pasos cronometrados (30 segundos, 2 minutos y 1 minuto): la clave de API se genera a la vista y los canales se conectan uno a uno, con su estado.'),
    ],
    mosaico: [
      { f: 'ancha', p: [pz('patchbay', 'x-terminal', 'La intro y el terminal', 'La marca se llena de bermellón y el ejemplo se escribe solo, una línea cada 190 ms.')] },
      { f: 'par75', p: [pz('patchbay', 'x-muelle', 'El muelle', 'Los 23 canales en un arco. Cada 2,4 segundos uno atraca en la API.', { placa: 1, prop: '4 / 3' }), pz('patchbay', 'c-atraca', 'Cada canal atraca', 'El muelle y su titular: las mismas herramientas y la misma forma de datos para cualquier agente.', { prop: '1 / 1', pos: '0% 50%', foto: true })] },
      { f: 'sangre', p: [pz('patchbay', 'x-canales', 'Veintitrés fichas técnicas', 'Una pestaña por canal, con lo que admite de verdad: formatos, límites y estados.', { prop: '2 / 1' })] },
      { f: 'par57', p: [pz('patchbay', 'c-clientes', 'Clientes', 'Un caso destacado que rota y las reseñas, con nombre y empresa.', { prop: '1 / 1', pos: '50% 60%', foto: true }), pz('patchbay', 'x-pasos', 'En marcha en minutos', 'Tres pasos cronometrados: la clave se genera a la vista y los canales se conectan.', { placa: 2, prop: '1240 / 470' })] },
    ],
    muestra: { titular: 'One API', texto: 'We hold the dev apps, the OAuth flows and the reviews.', detalle: '200 OK', cifra: '$615' },
    // 02/11 · la escala medida en la web (tools/casos-concepto/tipos-todos.cjs): Patchbay no tiene tokens con nombre (los estilos van en línea), así que se agrupan
    // los tamaños por papel, en enteros, y las variantes de medio píxel caen en su escalón. Los nombres son de Nilo
    escala: [
      { n: 'H1', fam: 'Instrument Sans', px: 68, movil: 44, lh: 67, peso: 600, ls: '−0,04 em' },
      { n: 'H2', fam: 'Instrument Sans', px: 44, movil: 30, lh: 48, peso: 600, ls: '−0,032 em' },
      { n: 'H3 L', fam: 'Instrument Sans', px: 27, lh: 30, peso: 600, ls: '−0,03 em' },
      { n: 'H3', fam: 'Instrument Sans', px: 19, lh: 'normal', peso: 600, ls: '−0,02 em' },
      { n: 'Entradilla', fam: 'Instrument Sans', px: 21, lh: 31.5, peso: 400, ls: '−0,015 em' },
      { n: 'Cita', fam: 'Instrument Sans', px: 18, lh: 27, peso: 400, ls: '−0,012 em' },
      { n: 'Texto', fam: 'Instrument Sans', px: 15, lh: 'normal', peso: 400 },
      { n: 'Pequeño', fam: 'Instrument Sans', px: 14, lh: 'normal', peso: 400 },
      { n: 'Código', fam: 'JetBrains Mono', px: 13, lh: 24, peso: 400 },
      { n: 'Detalle', fam: 'JetBrains Mono', px: 12, lh: 'normal', peso: 400 },
      { n: 'Rótulo', fam: 'JetBrains Mono', px: 11, lh: 'normal', peso: 400, ls: 'mayúsculas' },
    ],
    boton: { fam: 'Instrument Sans', px: 14, peso: 600, radio: 10, alto: 40, fondo: '#EB3514', tinta: '#FFFFFF' },
    medido: 'Medido en la web, a 1440 px y a 390 px. Los tamaños, agrupados por papel', // 02/11
    aplicado: true,
    comentario: { quien: 'andoni', texto: 'Queríamos que quien programa viera el producto funcionando antes de leer una línea. Meterlo todo en un único HTML, con el movimiento en CSS y el sonido en el navegador, fue la parte más divertida.' },
    conclusion: [
      'Un diseño hecho con IA se convierte en una web de verdad en una semana de rondas con criterio: marca, móvil, rendimiento y detalle que antes eran semanas de trabajo, ahora son días de dirección y de medir.',
      'La IA propone y comprueba. savvia decide. Cada ronda queda escrita con lo que se pidió, lo que se decidió y lo medido.',
      'Es la forma de trabajar que ofrecemos: diseño y desarrollo agéntico de principio a fin, con una persona al mando.',
    ],
    color: '#f8f4ee',
    colores: ['#f8f4ee', '#e8542b', '#998a82'],
    // 29/10 · Eric: SU grabación de Screen Studio (r4EqYjLX); las de obra/patchbay/portada y cubierta eran mías, con script
    portada: { tipo: 'video', src: '/media/anteriores/video/patchbay.mp4', poster: '/media/anteriores/video/patchbay.jpg' },
    cubierta: { tipo: 'video', src: '/media/anteriores/video/patchbay-grande.mp4', poster: '/media/anteriores/video/patchbay-grande.jpg' },
    // 02/11 · Andoni: «en Patchbay quitamos móvil, dejamos solo desktop»: sin cubiertaMovil (la carátula va solo en la mesa)
  },
  {
    slug: 'playground',
    nombre: 'Playground IEP',
    url: 'https://playgroundiep.com',
    dominio: 'playgroundiep.com',
    sector: 'Educación especial',
    ubicacion: 'Chicago, Estados Unidos',
    servicios: ['Diseño web', 'Desarrollo agéntico', 'Webflow', 'CMS', 'Animación'],
    stack: ['Figma', 'Webflow', 'HTML y CSS a medida', 'GSAP', 'Lenis', 'Vercel'],
    resumen: 'IA con base científica para educación especial, contada con pegatinas que se pueden coger.',
    entradilla: 'Playground IEP es una suite de IA para educación especial en Estados Unidos: ayuda a los equipos a redactar los planes individuales de cada alumno, seguir su progreso y gestionar su carga de casos.',
    contexto: [
      'Primero se hizo su web en Webflow, con CMS y animaciones a medida. Después, la home se rehízo en código propio, sin dependencias externas, para que su equipo pueda crear páginas nuevas con IA.',
      'La nueva home tenía que ser más profesional y más centrada en el producto, sin perder la autenticidad de una marca que habla a profesores: aire entre secciones, un menú al estilo de Apple y animaciones con sentido.',
    ],
    reto: 'Contar 21 herramientas de IA, en un sector donde la confianza lo es todo, sin que la web parezca un catálogo ni pierda el tono cercano que tiene la marca.',
    frase: 'Serio en el fondo, cercano en la forma.',
    secciones: [
      { n: 'Hero', d: 'La app real, navegable, dentro de un contenedor que sube y crece con el scroll. El titular rota entre lo que hace.' },
      { n: 'Cómo funciona', d: 'Una tarjeta fija con cuatro escenas del producto, del archivo del alumno a la explicación para la familia.' },
      { n: 'IEP Copilot', d: 'Las 21 herramientas en cuatro pasos (Write, Check, Teach y Measure) y la app que cambia al pulsar.' },
      { n: 'Compatible', d: 'Un diagrama atado al scroll: los datos de sus sistemas entran, se limpian y quedan listos.' },
      { n: 'Privacidad', d: 'Un panel oscuro con los compromisos y una demo de permisos.' },
      { n: 'Para todo el equipo', d: 'Cada perfil del equipo del IEP, con lo que gana.' },
      { n: 'Testimonios', d: 'Siete cartas de colores apiladas que se relevan en arco.' },
      { n: 'Precios', d: 'Dos caminos: profesores por su cuenta o el distrito entero.' },
      { n: 'Preguntas y cierre', d: 'Ocho notas adhesivas que se dan la vuelta y una trama de puntos que el ratón aparta.' },
    ],
    paleta: [
      { hex: '#4F1CF8', pct: 0.6, n: 'Azul eléctrico (único acento)' },
      { hex: '#111D2A', pct: 0.5, n: 'Tinta' },
      { hex: '#F5F5F7', pct: 98.7, n: 'Superficie' },
      { hex: '#2F9E5B', pct: 0.1, n: 'Verde (solo en el producto)' },
      { hex: '#B7791F', pct: 0, n: 'Ámbar (solo en el producto)' },
    ],
    tipos: [
      { n: 'Politetype', uso: 'Titulares, nunca en negrita' },
      { n: 'Inter', uso: 'Lectura e interfaz' },
    ],
    apartados: [],
    tecnica: [
      'HTML, CSS y JS propios con un script de compilación que incluye parciales y versiona los recursos',
      'Todo local, sin CDN ni seguimiento. GSAP y Lenis para el movimiento',
      'Peso transferido de 4,67 a 1,91 MB. Fuentes recortadas a latín, de 2,9 MB a 372 KB',
      '0 % de fotogramas lentos al bajar en escritorio y 1 % en móvil con la CPU a ×4',
      '0 errores en 17 tamaños de pantalla, en Chrome y WebKit',
      'Roles de pestañas, avisos para lectores de pantalla y contrastes revisados',
    ],
    descartado: [
      'La carga del hoyo en uno (5 s) y la del cohete de cera (2,8 s): volvió la del logotipo, una vez por sesión',
      'Pegatinas por toda la web, el producto que entraba empujando y la pila de tarjetas en 3D',
      'Un buscador para las 21 herramientas: nadie sabría qué buscar',
      'Un logotipo en 3D: se quedó el suyo',
    ],
    cifras: [
      { v: '21', t: 'herramientas presentadas' },
      { v: '1,91 MB', t: 'de peso (antes 4,67)' },
      { v: '17', t: 'tamaños de pantalla comprobados' },
      { v: '0 %', t: 'fotogramas lentos en escritorio' },
    ],
    cita: {
      texto: 'Eric y Andoni son increíbles. Es divertido trabajar con ellos y su trabajo es increíble. No solo tienen un talento increíble, sino que se preocupan profundamente por la colaboración. Durante todo el proceso se comunicaron constantemente conmigo y juntos construimos algo precioso.',
      autor: 'Sean Klamm',
      rol: 'CEO de Playground IEP',
    },
    proceso: [
      { n: 'Un clon fiel', d: 'Primero, la web de Webflow reconstruida en código propio, pieza a pieza, sin dependencias externas.' },
      { n: 'La librería', d: 'Después, su sistema escrito para personas y para IA: DESIGN.md, 9 bloques con «qué cambiar y qué no tocar» y 6 componentes.' },
      { n: 'El rediseño', d: 'Unas 37 rondas. Tras la revisión del cliente, que pedía menos cosas compitiendo por la atención, salieron pegatinas, pila y carga: la página pasó de 15.286 a 10.636 px. Una idea por contenedor.' },
      { n: 'Tres direcciones', d: 'IEP Copilot se probó de tres maneras antes de quedarse en pasos arriba y herramientas en el lateral de la app.' },
      { n: 'El filtro final', d: 'Antes de entregar: 17 tamaños de pantalla, de 320 a 2560 px, en Chrome y en WebKit.' },
    ],
    detalles: [
      x('playground', 'app', 'La app, de verdad', 'El hero no es una captura: es la app navegable (Dashboard, IEP Copilot, Chat IEP, Progress Monitoring y calendario). Al bajar, el hero se fija y la app sube y crece. El titular rota con letras que suben desenfocadas dentro de una máscara.'),
      x('playground', 'historia', 'Una tarjeta, cuatro escenas', 'La explicación ocupa una sola tarjeta fija. Cada frase de la derecha elige su escena del producto: soltar el archivo del alumno, el borrador que sale de él, comprobar cualquier línea y explicarlo a la familia.'),
      x('playground', 'copilot', '21 herramientas sin saltos', 'Las herramientas, agrupadas en cuatro pasos que se pulsan. Para que la página no salte al cambiar, se pintan las 21 pantallas, se mide la más alta y esa fija la altura de la app (743 px a 1440).'),
      x('playground', 'compatible', 'Los datos, limpios', 'Un diagrama atado al scroll: los sistemas del colegio entran por las líneas, el contador de duplicados baja y la lista de casos queda lista para trabajar.'),
      x('playground', 'cromos', 'Testimonios en cromos', 'Siete cartas apiladas. La nueva sube en arco y lidera (1 segundo), la de delante sale empujada 100 ms después y el resto la sigue en ola.'),
      x('playground', 'notas', 'Preguntas en notas', 'Ocho notas adhesivas de colores, como las de la sala de profesores, que giran en 3D al pulsarlas para enseñar la respuesta.'),
    ],
    mosaico: [
      { f: 'ancha', p: [pz('playground', 'x-app', 'La app, de verdad', 'El hero es la app navegable: al bajar se fija y la app sube y crece.')] },
      { f: 'par', p: [pz('playground', 'x-historia', 'Una tarjeta, cuatro escenas', 'Cada frase elige su escena: aquí, el borrador escrito desde los documentos del alumno, con cada dato citado.', { prop: '1 / 1', pos: '50% 50%', foto: true }), pz('playground', 'x-copilot', '21 herramientas sin saltos', 'Cuatro pasos que se pulsan. La pantalla más alta fija la altura de la app.', { placa: 1 })] },
      { f: 'sangre', p: [pz('playground', 'x-cromos', 'Testimonios en cromos', 'Siete cartas apiladas: la nueva sube en arco y el resto la sigue en ola.', { prop: '1440 / 640' })] },
      { f: 'par', p: [pz('playground', 'x-compatible', 'Los datos, limpios', 'Los sistemas del colegio entran por las líneas, Playground los limpia y el caseload queda en una vista.', { placa: 3, foto: true }), pz('playground', 'x-notas', 'Preguntas en notas', 'Ocho notas adhesivas que giran en 3D para enseñar la respuesta.', { placa: 4 })] },
    ],
    escala: [
      { n: 'H1', fam: 'Politetype', px: 64, lh: 70.4, peso: 400, ls: '−0,01 em' },
      { n: 'H2', fam: 'Politetype', px: 48, lh: 57.6, peso: 400 },
      { n: 'H3', fam: 'Politetype', px: 32, lh: 38.4, peso: 400 },
      { n: 'Texto', fam: 'Inter', px: 20, lh: 30, peso: 300 },
      { n: 'Detalle', fam: 'Politetype', px: 14, lh: 21, peso: 400, ls: 'mayúsculas' },
    ],
    medido: 'Medido en playgroundiep.com, a 1440 px',
    aplicado: true,
    comentario: { quien: 'andoni', texto: 'Empezamos en Webflow y acabamos rehaciendo la home en código propio para que su equipo cree páginas nuevas con IA. La vara de medir fue que pesara menos de la mitad y no diera tirones en ningún tamaño.' },
    conclusion: [
      'Primero, una web en Webflow con CMS y animaciones a medida. Después, la home rehecha en código propio, sin dependencias externas, para que su equipo cree páginas nuevas con IA.',
      'Pesa 1,91 MB (antes 4,67), no da fotogramas lentos al bajar en escritorio y se comprobó en 17 tamaños de pantalla, en Chrome y WebKit.',
    ],
    color: '#f3f1fb',
    colores: ['#21127a', '#5c2e6e', '#3d7a96'],
    portada: m('playground', 'portada'),
    cubierta: m('playground', 'cubierta'),
  },
  {
    slug: 'neety',
    nombre: 'Neety',
    url: 'https://neety.com',
    dominio: 'neety.com',
    sector: 'Ventas B2B, SaaS',
    anio: '2026',
    destacado: true,
    servicios: ['Diseño web', 'Desarrollo agéntico', 'CMS', 'Multidioma', 'Animación'],
    stack: ['Next.js', 'Tailwind CSS', 'GSAP + ScrollTrigger', 'Sanity', 'Cloudflare', 'GitHub'],
    resumen: 'Diseño y desarrollo agéntico: 40 páginas en dos idiomas que su equipo sigue cambiando con Claude.',
    // 28/10 · reescrito con el dossier de la ingeniería inversa (~/ShipStudio/neety/docs/dossier-caso.md, con su fuente por dato). Eric: el Figma también es nuestro
    // 28/10 · reescrito con Eric en el documento del caso (Claude Docs «Caso de estudio · Neety»): la historia en «El proyecto», sin plazos
    hicimos: 'Diseñamos y desarrollamos con IA la web de Neety, en dos idiomas, y se la entregamos con una librería para que su equipo la siga haciendo evolucionar con IA, respetando todo lo que trabajamos juntos.',
    entradilla: 'Neety detecta a quién vender, cuándo hacerlo y qué acción tomar. Su web tenía que enseñarlo moviéndose y quedarse en manos de un equipo sin desarrolladores.',
    contexto: [
      'Neety ayuda a los equipos comerciales B2B a saber a qué empresas vender, cuándo hacerlo y qué acción tomar. Lo usan más de 200 comerciales en más de 50 empresas industriales, como Ojmar, Telpark o Fagor Automation.',
      'Trabajamos con Unai y su equipo en el rediseño de su web. La anterior estaba en Webflow y mantenerla era uno de sus mayores problemas: la web no avanzaba al ritmo del producto.',
      'Empezamos por el diseño, en Figma, y después nos pidieron construir la web con IA: con Ship Studio, cada pantalla pasaba a Claude, que la convertía en código. El resultado: 40 páginas en dos idiomas, con el contenido en el CMS Sanity.',
      'Salió el 24 de septiembre, en Neety Forward. Desde entonces, Unai y su equipo han rehecho la página de demo y han publicado 30 artículos y 26 recursos de la academia por su cuenta.',
    ],
    reto: '', // 28/10 · Eric: fuera «El reto» y «Lo que ganó Neety»
    frase: 'Una web que su equipo sigue cambiando sin nosotros.',
    // 28/10 · LO QUE GANÓ NEETY: el valor, cada punto con su prueba (dossier §3)
    secciones: [
      { n: 'Hero', d: 'El titular y un feed de siete tarjetas de señales que corre en bucle.' },
      { n: 'Clientes', d: 'Los logotipos de quienes ya la usan.' },
      { n: 'Por qué Neety', d: 'Seis cifras del producto que cuentan al entrar.' },
      { n: 'De ruido a señal', d: 'El antes y el después, con píxeles que se ordenan.' },
      { n: 'Neety por dentro', d: 'Tarjetas solapadas con lo que ve el equipo.' },
      { n: 'Cómo funciona', d: 'Un raíl que recorre el proceso paso a paso.' },
      { n: 'Integraciones', d: 'El producto conectado a su pila comercial.' },
      { n: 'Casos de uso', d: 'Cuatro pestañas, una por equipo.' },
      { n: 'Demo', d: 'Qué verás en la demo y la llamada final.' },
    ],
    paleta: [
      { hex: '#431B44', pct: 0.6, n: 'Berenjena' },
      { hex: '#A7C5F9', pct: 1.4, n: 'Azul bebé' },
      { hex: '#FE8238', pct: 1.2, n: 'Naranja Core' },
      { hex: '#2A0E2C', n: 'Ciruela' },
      { hex: '#F5F7F9', pct: 96.8, n: 'Gris tecnológico' },
    ],
    tipos: [
      { n: 'Bricolage Grotesque', uso: 'Titulares, 500' },
      { n: 'Switzer', uso: 'Interfaz y texto' },
      { n: 'Inter', uso: 'Textos largos' }, // 28/10: la cuarta familia (su librería: «e Inter para textos largos»; blog y academia)
    ],
    apartados: [],
    tecnica: [
      'Next.js 15 con App Router y Tailwind CSS 4',
      'GSAP 3.15 y ScrollTrigger para el feed y las entradas, sin librerías de scroll',
      'Cuatro familias: Bricolage Grotesque, Switzer, Inter y Roboto Mono, servidas con next/font',
      'Español e inglés, con el blog, el equipo y los eventos en el CMS de Sanity',
      'Alojada en Cloudflare, en la cuenta de Neety',
      'El código, en un repositorio de GitHub con los assets y la documentación',
    ],
    cifras: [
      { v: '40', t: 'páginas en dos idiomas' },
      { v: '209', t: 'decisiones escritas' },
      { v: '80', t: 'componentes en la librería' },
    ],
    // 28/10 · Eric: «cómo pasamos del diseño a la animación»: el feed dibujado a mano en Figma (Neety Web, nodo 14340-3494; las siete tarjetas a 1×, apiladas
    // como en el frame) y la web (Screen Studio CUcZjwvM, sin 24,75–26,8 s: la cámara se alejaba y asomaba la ventana; tras el corte, en inglés)
    animacion: {
      titulo: 'Del diseño a la animación',
      texto: 'Primero dibujamos a mano en Figma cada tarjeta y luego las animamos directamente en código con Claude Code. Ahora el equipo de Neety puede cambiar sus textos e imágenes hablando con la IA.',
      diseno: { src: '/media/obra/neety/anim-figma.webp', pie: 'Las siete tarjetas, dibujadas a mano.' },
      web: { src: '/media/obra/neety/x-feed.mp4', poster: '/media/obra/neety/x-feed.jpg', pie: 'Las mismas tarjetas, en bucle sobre el degradado: la activa, nítida; el resto, desenfocadas.' },
    },
    // 28/10 · Eric: «otra sección a recalcar sobre las microanimaciones: cómo se nos permite microanimar en código todo» (Screen Studio RCpQOObj, «Cómo funciona»)
    // 28/10 · Eric: «un vídeo enseñando Ship Studio y Agentation, en dos columnas» (Ship Studio: Screen Studio bdisDhjQ, 18,6 s). Agentation: pendiente
    herramientas: {
      titulo: 'Ship Studio y Agentation',
      texto: 'La web se construyó en Ship Studio. Claude trabaja sobre el código mientras la web se ve en directo en el canvas. Y con Agentation, los comentarios se dejan sobre la propia web, señalando cada elemento, para que Claude sepa exactamente qué cambiar.',
      piezas: [
        { titulo: 'Ship Studio', alt: 'Ship Studio con la web de Neety: el agente a la izquierda y la web en directo', video: { src: '/media/obra/neety/ship-studio.mp4', poster: '/media/obra/neety/ship-studio.jpg', pie: 'Le pedimos un cambio al agente y la web se actualiza en directo.' } },
        // Screen Studio O0P9dwVL, 17 s: se marca un elemento de «Cómo funciona» y se le escribe el comentario
        { titulo: 'Agentation', alt: 'Agentation sobre la web de Neety: un comentario escrito sobre la sección «Cómo funciona»', video: { src: '/media/obra/neety/agentation.mp4', poster: '/media/obra/neety/agentation.jpg', pie: 'Al pasar el cursor se marca cada elemento de la web. Se pulsa y se escribe el comentario. Claude recibe el texto, el elemento exacto y el tamaño de pantalla en el que se dejó.' } },
      ],
    },
    micro: {
      titulo: 'Microanimaciones',
      texto: 'Al estar hecha en código, cada detalle se puede animar: una línea, un paso, una tarjeta. En «Cómo funciona Neety», la línea avanza y va encendiendo cada paso con su pantalla.',
      video: { src: '/media/obra/neety/micro-rail.mp4', poster: '/media/obra/neety/micro-rail.jpg', pie: 'La línea recorre el proceso y enciende cada paso.' },
      // 28/10 · Eric (Screen Studio jJUxf8d0, 9,4 s, el hero de /casos-de-uso/reactivacion-de-oportunidades): la píldora que cambia de caso, la transición
      // entre páginas y la ilustración que adapta el logotipo de cada empresa
      mas: [
        { titulo: 'Casos de uso', alt: 'El hero de los casos de uso de Neety: la píldora cambia de caso y la ilustración se adapta', video: { src: '/media/obra/neety/micro-casos.mp4', poster: '/media/obra/neety/micro-casos.jpg', pie: 'La píldora del titular cambia de caso de uso, la página pasa al siguiente con su transición y la ilustración animada se adapta al logotipo de cada empresa.' } },
      ],
    },
    figmaCorte: 2, // el esqueleto y el look and feel; después, el sistema (color, tipografía, espaciado); luego la home
    figma: [
      // 28/10 · Eric: «quitaremos el tema del sitemap»: fuera «La estructura» (figma-sitemap.webp); empieza por el esqueleto y los conceptos
      { f: 'trio', img: ['/media/obra/neety/figma-estructura.webp', '/media/obra/neety/figma-concepto-1.webp', '/media/obra/neety/figma-concepto-3.webp'], titulo: 'Del esqueleto al concepto', pie: 'Cada página, primero en estructura y sin color. Después, cinco conceptos de dirección visual hasta dar con el definitivo.' },
      // 28/10 · Eric: «empezar por las variantes, pero también mostrar look and feel, descartes y luego la home/responsive» (capturas de Eric; tools: las cabeceras
      // con «treseiscero» y la barra de Figma, recortadas o tapadas). La librería sustituye a «El sistema» (figma-sistema.webp, sin uso)
      // 28/10 · Eric: «descartes quitamos»: fuera «Los descartes» (figma-descartes.webp, borrada) y «gradiente quitamos»: fuera «Los gradientes» (figma-gradientes.webp, borrada)
      { f: 'ancha', img: ['/media/obra/neety/figma-look.webp'], titulo: 'El look and feel', pie: 'Diecisiete variaciones de la home sobre el mismo esqueleto. Cambian el degradado, el titular y la tarjeta del hero hasta dar con la dirección.' },
      // 28/10 · Eric: fuera «La librería» del Figma: en su sitio suben Color y Tipografía (figmaCorte); figma-libreria.webp sin uso
      { f: 'ancha', img: ['/media/obra/neety/figma-home.webp'], titulo: 'La home, en escritorio y en móvil', pie: 'La home definitiva, los desplegables del menú y el feed; al lado, la versión móvil con su menú.' },
    ],
    // 28/10 · «Cómo la construimos» fuera (Eric: «a partir de ahí iremos más visual»); la historia la cuenta el contexto
    detalles: [
      x('neety', 'feed', 'El feed de señales', 'Siete tarjetas en bucle. La pista sube por pasos y deja la activa a un 40 % de la ventana; las demás pierden opacidad, se desenfocan hasta 5 px y encogen según su distancia. Cada tarjeta pasa de esqueleto a contenido y una se escribe sola hasta «Enviado ✓».', '4 / 3'),
      x('neety', 'ruido', 'De ruido a señal', 'El antes y el después en una sola máquina: los píxeles salen de la lista fría de la izquierda y se recogen en el isotipo, y a la derecha queda la lista priorizada.', '2 / 1'),
      x('neety', 'dentro', 'Neety por dentro', 'Las pantallas reales del producto (cuentas con encaje, señales de intención) se relevan al bajar, cada una con la cifra que la justifica: la web enseña lo que verá el equipo.'),
      x('neety', 'casos', 'Un caso por equipo', 'Cuatro pestañas, una por equipo comercial. Cada una cambia el texto y una tarjeta de producto con empresas de ejemplo y su encaje.'),
    ],
    sinMovimiento: true, // 28/10 · Eric: «Movimiento» fuera
    sinDetalles: true, // 28/10 · Eric: «los detalles quitamos»: ya lo enseñan «Del diseño a la animación» y «Microanimaciones»
    mosaico: [
      { f: 'ancha', p: [pz('neety', 'x-ruido', 'De ruido a señal', 'La lista fría, a la izquierda; a la derecha, lo que Neety devuelve: cuentas priorizadas y la acción siguiente.', { prop: '2 / 1', foto: true })] },
      // 28/10 · fuera el feed: ya lo cuenta «Del diseño a la animación»
      { f: 'ancha', p: [pz('neety', 'x-cifras', 'Por qué Neety', 'Seis cifras del producto que cuentan al entrar.', { pos: '84% 50%', prop: '1440 / 880', foto: true })] },
      { f: 'sangre', p: [pz('neety', 'x-dentro', 'Neety por dentro', 'Las pantallas reales del producto se relevan al bajar, cada una con su cifra.')] },
      { f: 'par', p: [pz('neety', 'x-rail', 'Cómo funciona', 'Un raíl recorre el proceso: detecta, prioriza y actúa.', { placa: 1, foto: true }), pz('neety', 'x-casos', 'Un caso por equipo', 'Cuatro pestañas; cada una cambia el texto y la tarjeta de producto.', { placa: 3 })] },
    ],
    muestra: { titular: 'A quién vender', texto: 'No es otra herramienta para enviar más mensajes.', detalle: 'Detecta. Prioriza. Actúa.', titularEn: 'Who to sell to', textoEn: 'It isn’t another tool for sending more messages.', detalleEn: 'Detect. Prioritise. Act.' },
    // 28/10 · Eric: «hay más tamaños»: la escala ENTERA de su librería (LibraryPage.tsx › HEADINGS y BODY: escritorio y móvil; titulares al 120 %, cuerpo al 150 %); sin H4–H6 (Eric)
    escala: [
      { n: 'H1 · XL', fam: 'Bricolage Grotesque', px: 112, movil: 64, lh: 134.4, peso: 500 },
      { n: 'H1 · L', fam: 'Bricolage Grotesque', px: 80, movil: 48, lh: 96.0, peso: 500 },
      { n: 'H1 · M', fam: 'Bricolage Grotesque', px: 64, movil: 40, lh: 76.8, peso: 500 },
      { n: 'H2', fam: 'Bricolage Grotesque', px: 48, movil: 32, lh: 57.6, peso: 500 },
      { n: 'H3', fam: 'Bricolage Grotesque', px: 40, movil: 24, lh: 48.0, peso: 500 },
      { n: 'Large', fam: 'Switzer', px: 24, movil: 20, lh: 36.0, peso: 400 },
      { n: 'Medium', fam: 'Switzer', px: 20, movil: 18, lh: 30.0, peso: 400 },
      { n: 'Regular', fam: 'Switzer', px: 16, movil: 16, lh: 24.0, peso: 400 },
      { n: 'Small', fam: 'Switzer', px: 14, movil: 14, lh: 21.0, peso: 400 },
      { n: 'Tiny', fam: 'Switzer', px: 12, movil: 12, lh: 18.0, peso: 400 },
      { n: 'Detalle', fam: 'Roboto Mono', px: 12, lh: 16, peso: 500, ls: 'mayúsculas' },
    ],
    boton: { fam: 'Bricolage Grotesque', px: 14, peso: 500, radio: 999, alto: 36, fondo: '#431B44', tinta: '#FFFFFF', nota: 'Berenjena al 75 %' },
    medido: 'Medido en la web entregada, a 1440 px',
    aplicado: true,
    libreria: {
      url: 'https://neety.treseiscero.app/library',
      captura: '/media/obra/neety/libreria.webp', capturaMovil: '/media/obra/neety/libreria-movil.webp',
      // 28/10 · «La entrega» (Eric): el texto que va encima del albarán y del libro
      // 28/10 · Eric: «La entrega» vuelve como VÍDEO de la librería (Screen Studio 5oBvdom9): para que el equipo sepa cómo conectarla a la IA,
      // y como guía de cambios, de diseño y de componentes
      video: { src: '/media/obra/neety/libreria-recorrido.mp4', poster: '/media/obra/neety/libreria-recorrido.jpg', pie: 'Cómo usarla, los fundamentos de diseño y el catálogo de componentes de la web.', pieEn: 'How to use it, the design foundations and the catalogue of the site’s components.' },
      texto: [
        'Con la web, Neety se llevó su librería: los guardarraíles para seguir evolucionándola con IA. En ella queda recogida cada decisión de diseño, de movimiento o de componente, junto con la guía para conectar el repositorio con Claude o Ship Studio.',
      ],
      textoEn: [
        'Along with the site, Neety took its library: the guardrails for evolving it with AI. Every decision on design, motion or components is captured in it, along with the guide to connecting the repository to Claude or Ship Studio.',
      ],
      tapa: { marca: 'neety', titulo: 'El sistema de diseño de Neety, y cómo mantener la web', tituloEn: 'Neety’s design system, and how to maintain the website', fondo: '#431B44', tinta: '#F8F7EC', acento: '#FE8238' },
      accesos: [
        { n: 'Cambiar contenido', nEn: 'Changing content', ancla: 'contenido' },
        { n: 'Color', nEn: 'Colour', ancla: 'color' },
        { n: 'Tipografía', nEn: 'Typography', ancla: 'tipografia' },
        { n: 'Botones', nEn: 'Buttons', ancla: 'botones' },
        { n: 'Componentes', nEn: 'Components', ancla: 'componentes' },
      ],
      entrega: [
        { n: 'La web', d: 'Publicada y suya: Next.js, con el blog y el equipo en Sanity.', nEn: 'The website', dEn: 'Live and theirs: Next.js, with the blog and the team in Sanity.' },
        { n: 'El código', d: 'Un repositorio de GitHub con el código, los assets y la documentación.', nEn: 'The code', dEn: 'A GitHub repository with the code, the assets and the documentation.' },
        { n: 'La librería', d: 'Su sistema de diseño y la guía para mantener la web, generados desde el código.', nEn: 'The library', dEn: 'Its design system and a living guide to maintain the site, generated from the code.' },
        { n: 'La guía para Claude', d: 'Las convenciones del proyecto y el porqué de cada una de las 209 decisiones.', nEn: 'The guide for Claude', dEn: 'The project’s conventions and the reason behind each of the 209 decisions.' },
      ],
    },
    comentario: { quien: 'andoni', texto: 'Con Neety entregamos algo más que una web: una librería que sale del propio código para que su equipo la siga cambiando con Claude. Es la forma de trabajar que queremos para todos los proyectos.' },
    conclusion: [
      'Neety fue nuestro primer proyecto con desarrollo agéntico. El diseño empezó en Figma. El código lo construimos con IA, fiel a cada decisión de ese diseño.',
      'Neety se llevó una web conectada con la IA, que su equipo sigue evolucionando por su cuenta.',
      'Eso funciona porque la librería hace de guardarraíles. En ella quedan recogidos el color, la tipografía, el movimiento y los 80 componentes.',
      'Y a su equipo le llegó un repositorio conectado a Claude desde el que cambian, hablando, el contenido, las secciones o las páginas.',
    ],
    cita: { texto: 'Cercanos, humanos y capaces de entender de verdad tu proyecto. Más que un proveedor, son parte de tu equipo.', autor: 'Unai Arambarri', rol: 'Fundador y CEO, Neety', retrato: '/media/testimonios/unai-arambarri.webp' }, // la de la home; retrato: su foto (Eric, 28/10) con tools/r191/retrato.py (S=1.25 OY=230 FY=-170 BODY=0.45)
    color: '#f5f7f9',
    colores: ['#EEE8F7', '#A7C5F9', '#FE8238'], // ronda 154: «el gradiente de Neety se ve sucio» → su paleta real: lavanda (base) · Azul bebé · Naranja Core (acento)
    portada: m('neety', 'portada'),
    cubierta: { tipo: 'video', src: '/media/anteriores/video/neety-com-grande.mp4', poster: '/media/anteriores/video/neety-com-grande.jpg' }, // ronda 227: la toma grande de Eric (visor de «Más proyectos»)
    cubiertaMovil: { src: '/media/anteriores/video/neety-com-movil.mp4', poster: '/media/anteriores/video/neety-com-movil.jpg' },
  },
  {
    slug: 'invopop',
    nombre: 'Invopop',
    url: 'https://invopop.com',
    dominio: 'invopop.com',
    sector: 'Facturación electrónica',
    ubicacion: 'Madrid, España',
    servicios: ['Diseño web', 'Webflow', 'CMS', 'Multidioma'],
    stack: ['Figma', 'Webflow', 'Notion', 'WhaleSync'],
    resumen: 'Más de cien fichas por país que el propio equipo actualiza desde Notion.',
    entradilla: 'Invopop hace infraestructura de facturación electrónica para empresas globales. Tiene mucho contenido por país (cobertura, costes locales, casos de cliente) y necesitaba actualizarlo sin pasar cada cambio por la web.',
    contexto: [
      'Se rediseñaron las páginas clave: la cobertura por países, las guías de facturación con mapa interactivo y la cobertura técnica, para que un contenido complejo se lea fácil.',
      'Debajo, un CMS en Webflow de más de cien fichas con referencias cruzadas, alimentado desde Notion: el equipo edita donde ya trabaja y la web se actualiza sola.',
    ],
    reto: 'Mejorar el diseño de páginas y componentes concretos y montar un CMS de más de cien elementos conectado con la base de datos del cliente.',
    frase: 'El equipo edita donde ya trabaja y la web se actualiza sola.',
    paleta: [
      { hex: '#FEFEFC', pct: 58.2, n: 'Fondo' },
      { hex: '#0B0B10', pct: 1.5, n: 'Tinta' },
      { hex: '#004235', pct: 38.2, n: 'Verde Invopop' },
      { hex: '#6B727D', pct: 2.1, n: 'Gris' },
    ],
    tipos: [
      { n: 'Söhne', uso: 'Titulares y texto' },
      { n: 'Geist Mono', uso: 'Detalles' },
    ],
    apartados: [
      { titulo: 'De Notion a Webflow', texto: ['Notion es la base de datos principal. WhaleSync sincroniza cada ficha campo a campo con el CMS de Webflow: casos de éxito, costes locales de facturación y los datos de cada país.'] },
    ],
    tecnica: ['CMS en Webflow con referencias entre colecciones', 'Sincronización Notion → Webflow con WhaleSync', 'Localización de Webflow en inglés y español, con SEO por idioma'],
    cifras: [
      { v: '+100', t: 'fichas de CMS' },
      { v: '2', t: 'idiomas' },
      { v: '3', t: 'tipos de cliente en el mapa' },
    ],
    cita: {
      texto: 'Nos los recomendó un amigo emprendedor y ha sido una gran decisión. Desde el primer día se integraron perfectamente con nuestras herramientas y manejaron la integración de más de cien elementos de CMS con agilidad. Eric y Andoni responden en minutos y despliegan en horas. Superaron nuestras expectativas.',
      autor: 'Juan Moliner',
      rol: 'Cofundador de Invopop',
    },
    detalles: [
      x('invopop', 'mapa', 'El mapa', 'Los países con facturación electrónica obligatoria, dibujados sobre el mapa. Cada uno es una ficha del CMS; al pasar por encima, sale la suya con lo que exige.', '1440 / 930', { pie: 'Grabado en la web tal como se entregó, en Webflow' }),
      x('invopop', 'paises', 'Cobertura por países', 'Todas las fichas en una rejilla que se filtra por región y se busca por nombre, sin recargar: el contenido vive en el CMS y la interfaz solo lo ordena.', '1440 / 930', { pie: 'Grabado en la web tal como se entregó, en Webflow' }),
      x('invopop', 'ficha', 'La ficha de un país', 'Cada país tiene su página: requisitos de facturación electrónica, e-reporting y sus noticias. Todo sale de Notion, sincronizado campo a campo con WhaleSync.', '1440 / 930', { pie: 'Grabado en la web tal como se entregó, en Webflow' }),
      x('invopop', 'flujos', 'El producto, en piezas', 'Componentes rediseñados para explicar el producto: flujos que se arrastran, errores que se gestionan, reintentos y la consola.', '1440 / 930', { pie: 'Grabado en la web tal como se entregó, en Webflow' }),
    ],
    mosaico: [
      { f: 'ancha', p: [pz('invopop', 'c-mapa', 'El mapa', 'Los países con factura electrónica obligatoria; al pasar, la ficha de cada uno.', { prop: '1674 / 1080' })] },
      { f: 'par57', p: [pz('invopop', 'c-ficha', 'La ficha de un país', 'Requisitos de factura y e-reporting, formato y plazos, sincronizados desde Notion con WhaleSync.', { prop: '1 / 1', pos: '10% 0%', foto: true }), pz('invopop', 'x-consola', 'Bajo control con la consola', 'Documentos, espacios de trabajo, facturas y flujos: cada apartado de la consola se enseña al pulsarlo.', { placa: 2, prop: '1674 / 1080' })] },
      { f: 'par', p: [pz('invopop', 'x-impuestos', 'Una herramienta fiscal completa', 'Los pasos del producto en un carrusel: sincronizar ventas, validar, calcular impuestos y cumplir.', { placa: 3, prop: '1674 / 1080' }), pz('invopop', 'x-paises', 'Cobertura por países', 'Una rejilla que se filtra por tipo de factura y por región, sin recargar.', { placa: 2, prop: '1674 / 1080' })] },
    ],
    nota: 'Grabado en la web tal como se entregó, en Webflow. Hoy invopop.com es otra web.',
    comentario: { quien: 'eric', texto: 'Lo mejor de Invopop no se ve: el equipo escribe en Notion y la web se actualiza sola, en dos idiomas. Más de cien fichas que ya no dependen de nosotros.' },
    conclusion: [
      'El contenido por país ya no pasa por la web: el equipo lo edita en Notion y WhaleSync lo sincroniza campo a campo con el CMS de Webflow, en inglés y en español.',
      'Más de cien fichas con referencias cruzadas alimentan la cobertura, las guías y el mapa.',
    ],
    color: '#1a4534',
    colores: ['#1a4534', '#2f6a52', '#9dbfae'],
    portada: m('invopop', 'portada'),
    cubierta: m('invopop', 'cubierta'),
  },
  {
    slug: 'business-online-payroll',
    nombre: 'Business Online Payroll',
    url: 'https://businessonlinepayroll.com',
    dominio: 'businessonlinepayroll.com',
    sector: 'Nóminas y banca',
    ubicacion: 'Rochester, Estados Unidos',
    servicios: ['Webflow', 'CMS', 'Animación'],
    stack: ['Webflow', 'Lenis', 'Finsweet'],
    resumen: 'Una sola arquitectura de CMS para veintiún bancos, cada uno con su marca.',
    entradilla: 'SurePayroll quería convertir su plataforma Business Online Payroll en una solución de marca blanca para 21 bancos socios, cada uno con sus colores, su logotipo y su contenido.',
    contexto: [
      'El trabajo se hizo dentro del equipo de desarrollo Webflow de Farco Studio: un sistema de CMS que crea el microsite de cada banco sin rehacer nada.',
      'Colecciones por banco para el microsite, el formulario de referidos, las páginas de gracias, los legales, los beneficios y las preguntas de precios, conectadas por referencias.',
    ],
    reto: 'Que veintiún marcas distintas vivan en una sola web sin que ninguna se parezca a otra y sin multiplicar el trabajo por veintiuno.',
    frase: 'Veintiún marcas, una sola arquitectura.',
    paleta: [
      { hex: '#F6F3F2', pct: 78.1, n: 'Fondo' },
      { hex: '#121516', pct: 5.4, n: 'Tinta' },
      { hex: '#BB532E', pct: 0.2, n: 'Terracota' },
      { hex: '#122541', pct: 16.1, n: 'Azul noche' },
      { hex: '#F0764B', pct: 0.2, n: 'Coral' },
    ],
    tipos: [
      { n: 'Untitled Sans', uso: 'Titulares 500, texto 400' },
    ],
    apartados: [
      { titulo: 'El CMS', texto: ['Colecciones para los microsites de cada banco, el formulario de referidos, dos tipos de páginas de agradecimiento, la política de privacidad, las condiciones de uso, los beneficios y las preguntas de precios.', 'El mapa del sitio se construye con referencias y multirreferencias: cada banco tiene su experiencia completa a partir de sus fichas.'] },
    ],
    tecnica: ['CMS de Webflow con referencias y multirreferencias', 'Colores por banco mediante variables ligadas al CMS, con una nomenclatura pensada para crecer', 'Scroll suave con Lenis y formularios con Finsweet'],
    cifras: [
      { v: '21', t: 'bancos, cada uno con su microsite' },
      { v: '1', t: 'sola arquitectura de CMS' },
    ],
    con: 'Farco Studio, para SurePayroll',
    detalles: [
      x('business-online-payroll', 'banco', 'Un banco, su marca', 'El microsite de uno de los bancos, con sus colores y su logotipo. Esos colores son variables de Webflow conectadas a campos del CMS: cambiar de banco es cambiar de ficha.', '1440 / 936', { pie: 'Grabado en el microsite de un banco socio' }),
      x('business-online-payroll', 'ventajas', 'Las mismas piezas', 'Los beneficios y los bloques de producto son colecciones que cada banco reutiliza: el texto y la marca cambian, la estructura no.', '1440 / 936', { pie: 'Grabado en el microsite de un banco socio' }),
      x('business-online-payroll', 'precio', 'Precio y preguntas', 'El precio y las preguntas de precios salen de su propia colección, conectada a cada banco por referencias.', '1440 / 936', { pie: 'Grabado en el microsite de un banco socio' }),
    ],
    mosaico: [
      { f: 'ancha', p: [pz('business-online-payroll', 'c-banco', 'Un banco, su marca', 'Sus colores son variables de Webflow conectadas al CMS: cambiar de banco es cambiar de ficha.', { prop: '8 / 5', foto: true })] },
      { f: 'par', p: [pz('business-online-payroll', 'c-ventajas', 'Las mismas piezas', 'Beneficios y bloques de producto que cada banco reutiliza: cambian el texto y la marca.', { placa: 3, prop: '8 / 5', foto: true }), pz('business-online-payroll', 'c-precio', 'Precio y preguntas', 'Su propia colección, conectada a cada banco por referencias.', { placa: 2, prop: '8 / 5', foto: true })] },
      { f: 'ancha', p: [pz('business-online-payroll', 'c-cta', 'El cierre', 'Fotografía a sangre, titular en blanco y el vídeo del producto: la llamada a empezar, con la marca del banco.', { prop: '16 / 9', foto: true })] },
    ],
    escala: [
      { n: 'H1', fam: 'Untitled Sans', px: 72, lh: 80, peso: 500, ls: '−0,04 em' },
      { n: 'H2', fam: 'Untitled Sans', px: 48, lh: 54, peso: 500, ls: '−0,04 em' },
      { n: 'H3', fam: 'Untitled Sans', px: 32, lh: 40, peso: 500, ls: '−0,04 em' },
      { n: 'Texto', fam: 'Untitled Sans', px: 16, lh: 24, peso: 400 },
      { n: 'Detalle', fam: 'Untitled Sans', px: 16, lh: 24, peso: 400, ls: '0,15 em, mayúsculas' },
    ],
    boton: { fam: 'Untitled Sans', px: 16, peso: 500, radio: 8, alto: 58, fondo: '#F0764B', tinta: '#FFFFFF' },
    medido: 'Medido en businessonlinepayroll.com, a 1440 px',
    comentario: { quien: 'eric', texto: 'Un solo sistema para veintiún bancos, cada uno con su marca. Lo hicimos dentro del equipo de Farco Studio y nos obligó a pensar el CMS antes que las pantallas.' },
    conclusion: [
      'Un sistema de CMS crea el microsite de cada banco sin rehacer nada: sus colores son variables conectadas a su ficha y sus páginas salen de colecciones compartidas.',
      'Veintiún bancos socios, cada uno con su marca, sobre una sola arquitectura. Se hizo dentro del equipo de desarrollo Webflow de Farco Studio, para SurePayroll.',
    ],
    color: '#101e3b',
    colores: ['#101e3b', '#1c3364', '#a4a2a3'],
    portada: m('business-online-payroll', 'portada'),
    cubierta: m('business-online-payroll', 'cubierta'),
  },
  {
    slug: 'cubbo',
    nombre: 'Cubbo',
    url: 'https://cubbo.com',
    dominio: 'cubbo.com',
    sector: 'Logística',
    ubicacion: 'Ciudad de México, México',
    servicios: ['Diseño web', 'Webflow', 'CMS', 'Multidioma', 'Migración', 'Animación'],
    stack: ['Figma', 'Webflow', 'GSAP', 'Osmo Supply', 'Finsweet', 'HubSpot', 'Cloudflare'],
    resumen: 'Dos webs, México y Brasil, unidas en una sola y rediseñadas de principio a fin.',
    entradilla: 'Cubbo tenía dos proyectos de Webflow separados: México en producción y Brasil en un subdominio. El objetivo: unirlo todo en uno solo con la localización de Webflow y rediseñar la web entera.',
    contexto: [
      'Se presentaron varios conceptos alineados con la visión de Cubbo, siempre respetando su identidad, y se afinó la dirección con Ignasi hasta el concepto final. Desde ahí, cada página se aprobó casi sin cambios.',
      'Con la home aprobada, el desarrollo empezó en paralelo mientras el diseño cerraba las páginas secundarias.',
    ],
    reto: 'Unir dos webs en dos idiomas sin perder contenido, posicionamiento ni formularios de venta, y rediseñarla por el camino.',
    frase: 'Dos webs en una, sin perder nada por el camino.',
    paleta: [
      { hex: '#FFFFFF', pct: 0.9, n: 'Fondo' },
      { hex: '#0741DD', pct: 27.9, n: 'Azul Cubbo' },
      { hex: '#031C63', pct: 69.9, n: 'Marino' },
      { hex: '#F7F9FC', pct: 1.4, n: 'Niebla' },
    ],
    tipos: [
      { n: 'Manrope', uso: 'Titulares, 500' },
      { n: 'Inter', uso: 'Texto' },
    ],
    apartados: [
      { titulo: 'Por debajo', texto: ['El CMS se estructuró para migrar cada caso de éxito y cada artículo del blog de México (es-MX) y Brasil (pt-BR), con un plan de redirecciones 301 en Cloudflare y los formularios de ventas conectados a HubSpot, que avisan al equipo en Slack.'] },
    ],
    tecnica: ['Un solo proyecto de Webflow con localización es-MX y pt-BR', 'Migración del CMS: casos de éxito y blog de los dos países', 'GSAP con ScrollTrigger, SplitText y Flip; carga del CMS con Finsweet', 'Redirecciones 301 con Cloudflare', 'Formularios de ventas en HubSpot con avisos en Slack'],
    cifras: [
      { v: '2 → 1', t: 'webs unificadas' },
      { v: '2', t: 'idiomas: es-MX y pt-BR' },
    ],
    cita: {
      texto: 'Nos encantó trabajar con Andoni y Eric. El resultado superó nuestras expectativas, pero lo mejor fue lo increíblemente proactivos que fueron. Nunca tuve que ir detrás de ellos: venían a mí con soluciones. Desde el primer día entendieron quiénes somos, qué hacemos y qué necesitábamos.',
      autor: 'Ignasi Vegas',
      rol: 'Cofundador y CEO de Cubbo',
    },
    detalles: [
      x('cubbo', 'capas', 'Seis productos, un sistema', 'La capa tecnológica en una rejilla: cada producto con su icono isométrico animado y su texto, todos con la misma estructura.'),
      x('cubbo', 'operacion', 'Cómo conecta Cubbo', 'Cuatro pasos de la operación que se pulsan y cambian la imagen, con GSAP y componentes de la librería Osmo Supply.'),
    ],
    mosaico: [
      { f: 'ancha', p: [pz('cubbo', 'x-operacion', 'Cómo conecta Cubbo', 'Cuatro pasos de la operación que se pulsan y cambian la imagen.')] },
      { f: 'par75', p: [pz('cubbo', 'x-capas', 'Seis productos, un sistema', 'La capa tecnológica: cada producto con su icono isométrico animado y su texto.', { placa: 1 }), pz('cubbo', 'c-panel', 'El panel de cada pedido', 'La infraestructura detrás de cada pedido: el panel real de Cubbo dentro de su navegador, con los tiempos de entrega.', { prop: '1440 / 900', pos: '50% 40%', foto: true })] },
      { f: 'sangre', p: [pz('cubbo', 'c-red', 'Tecnología, red y expansión', 'La infraestructura de Cubbo con sus cifras, en fotografía.', { prop: '2 / 1', foto: true })] },
    ],
    escala: [
      { n: 'H1', fam: 'Manrope', px: 79.2, lh: 95.1, peso: 500, ls: '−0,036 em' },
      { n: 'H2', fam: 'Manrope', px: 40, lh: 48, peso: 500, ls: '−0,036 em' },
      { n: 'H3', fam: 'Manrope', px: 24, lh: 28.8, peso: 500, ls: '−0,027 em' },
      { n: 'Texto', fam: 'Inter', px: 16, lh: 24, peso: 400 },
      { n: 'Entradilla', fam: 'Inter', px: 21.6, lh: 36, peso: 400 },
    ],
    boton: { fam: 'DM Sans', px: 16, peso: 600, radio: 6, alto: 39, fondo: '#0741DD', tinta: '#FFFFFF' },
    medido: 'Medido en cubbo.com, a 1440 px',
    aplicado: true,
    comentario: { quien: 'eric', texto: 'El reto era juntar México y Brasil en un solo proyecto sin perder posicionamiento. Con la localización y las redirecciones bien hechas, el equipo ya trabaja sobre una sola web.' },
    conclusion: [
      'México y Brasil viven ahora en un solo proyecto de Webflow, con localización es-MX y pt-BR, el contenido de los dos países migrado y redirecciones 301 para no perder posicionamiento.',
      'Los formularios de ventas llegan a HubSpot y avisan al equipo en Slack.',
    ],
    color: '#1b40d6',
    colores: ['#1b40d6', '#4963e2', '#788ae8'],
    portada: m('cubbo', 'portada'),
    cubierta: { tipo: 'video', src: '/media/anteriores/video/cubbo-grande.mp4', poster: '/media/anteriores/video/cubbo-grande.jpg' }, // ronda 227: la toma grande de Eric (visor de «Más proyectos»)
  },
  {
    slug: 'remerge',
    nombre: 'Remerge',
    destacado: true, // ronda 138: sustituye a Playground en los destacados del portfolio (la web móvil, en teléfono)
    url: 'https://remerge.io',
    dominio: 'remerge.io',
    sector: 'Publicidad en apps',
    ubicacion: 'Berlín, Alemania',
    servicios: ['Webflow', 'CMS', 'Multidioma', 'Migración'],
    stack: ['Webflow', 'Cursor', 'Webflow MCP'],
    resumen: 'Toda la web, de Craft CMS a Webflow, en cuatro idiomas.',
    entradilla: 'Remerge necesitaba migrar su web entera de Craft CMS a Webflow, en cuatro idiomas: inglés, coreano, japonés y chino.',
    contexto: [
      'Se trabajó desde la web original, inspeccionando el código y reconstruyendo la arquitectura desde cero: de las variables de estilo y el sistema de espaciado a cada componente, pensado para que el equipo de marketing lo reutilice.',
      'En dos meses: más de treinta páginas estáticas y un CMS con dos colecciones principales y más de 350 fichas. Con Cursor y el MCP de Webflow, y aun así revisando a mano casi cada contenido en los cuatro idiomas.',
    ],
    reto: 'Una de esas migraciones donde cada detalle cuenta: cambiar de plataforma sin que nada se mueva de su sitio, en cuatro idiomas y cuatro sistemas de escritura.',
    frase: 'La IA ayuda. La revisión, a mano.',
    paleta: [
      { hex: '#E0E4EF', pct: 91.4, n: 'Lavanda' },
      { hex: '#EEFF53', pct: 2.4, n: 'Lima' },
      { hex: '#202020', pct: 3.5, n: 'Tinta' },
      { hex: '#BBB9A3', pct: 2.7, n: 'Piedra' },
    ],
    tipos: [
      { n: 'Editorial New', uso: 'Titulares, ultraligera' },
      { n: 'GT America', uso: 'Texto' },
    ],
    apartados: [
      { titulo: 'Validación', texto: ['La IA aceleró la migración, pero hubo que revisar casi cada contenido en los cuatro idiomas para asegurar que todo estaba exactamente donde debía.'] },
    ],
    tecnica: ['De Craft CMS a Webflow, reconstruida desde el código original', 'Localización de Webflow en inglés, coreano, japonés y chino', 'Migración asistida con Cursor y el MCP de Webflow'],
    cifras: [
      { v: '+30', t: 'páginas' },
      { v: '+350', t: 'fichas de CMS' },
      { v: '4', t: 'idiomas' },
      { v: '2', t: 'meses' },
    ],
    cita: {
      texto: 'Trabajar con ellos en nuestra migración web fue una experiencia excelente de principio a fin. Llevaron un proyecto complejo, con varios idiomas, una arquitectura de componentes a medida y una migración de contenido extensa, con una precisión sólida.',
      autor: 'Guilherme Escobar',
      rol: 'Director global de marketing de Remerge',
    },
    detalles: [
      x('remerge', 'idiomas', 'Cuatro idiomas, cuatro escrituras', 'La misma home en inglés, coreano, japonés y chino. Cada escritura ocupa distinto y la maqueta lo aguanta sin descolocarse; cada contenido se revisó a mano en los cuatro.', '390 / 844', { medio: { movil: true } }),
      x('remerge', 'objetivos', 'Componentes para marketing', 'Uno de los componentes reconstruidos para que marketing lo reutilice: objetivos que se abren y cambian su ilustración, montados sobre las variables de estilo y el sistema de espaciado.'),
    ],
    mosaico: [
      { f: 'ancha', p: [pz('remerge', 'x-home', 'La home', 'El hero en escritorio: la serif ultraligera del titular y el teléfono que se monta con sus anuncios.')] },
      { f: 'par57', p: [pz('remerge', 'x-idiomas', 'Cuatro idiomas, cuatro escrituras', 'Inglés, coreano, japonés y chino, revisados a mano en los cuatro.', { placa: 1, medio: { movil: true } }), pz('remerge', 'x-objetivos', 'Componentes para marketing', 'Objetivos que se abren y cambian su ilustración, sobre las variables de estilo.', { placa: 3 })] },
      { f: 'par', p: [pz('remerge', 'c-equipo', 'Equipo', 'La serif ultraligera y los botones de filete, también en las secciones de enfoque y equipo.', { placa: 3, prop: '1440 / 590', foto: true }), pz('remerge', 'c-premios', 'Reconocimientos', 'Tres sellos del sector en un carrusel: Top DSP 2023 de Business of Apps, AppsFlyer y Singular.', { placa: 0, prop: '1440 / 700', foto: true })] },
    ],
    escala: [
      { n: 'H1', fam: 'Editorial New', px: 96, lh: 105.6, peso: 200 },
      { n: 'H2', fam: 'Editorial New', px: 70, lh: 75.9, peso: 200 },
      { n: 'H3', fam: 'Editorial New', px: 50, lh: 54.3, peso: 200 },
      { n: 'Texto', fam: 'GT America', px: 19, lh: 26, peso: 400 },
      { n: 'Detalle', fam: 'GT America Condensed', px: 15, lh: 22, peso: 400, ls: 'mayúsculas' },
    ],
    medido: 'Medido en remerge.io, a 1440 px',
    aplicado: true,
    comentario: { quien: 'eric', texto: 'Migrar de Craft a Webflow en cuatro idiomas y en dos meses salió porque reconstruimos la arquitectura desde su código. La IA aceleró; la revisión, idioma a idioma, la hicimos a mano.' },
    conclusion: [
      'La web pasó de Craft CMS a Webflow en dos meses, en cuatro idiomas: más de treinta páginas y 350 fichas de CMS, sin que nada se moviera de su sitio.',
      'Su arquitectura se reconstruyó desde el código original, con componentes pensados para que marketing los reutilice. La IA aceleró la migración; la revisión, en los cuatro idiomas, se hizo a mano.',
    ],
    color: '#eceed9',
    colores: ['#eceed9', '#f2ff71', '#ffffff'],
    portada: m('remerge', 'portada', { movil: true }),
    cubierta: m('remerge', 'cubierta', { movil: true }),
    escritorio: m('remerge', 'escritorio'),
  },
  {
    slug: 'isotrol',
    nombre: 'Isotrol',
    url: 'https://isotrol.com',
    dominio: 'isotrol.com',
    sector: 'Renovables',
    ubicacion: 'Sevilla, España',
    servicios: ['Diseño web', 'Webflow', 'CMS', 'Multidioma'],
    stack: ['Figma', 'Webflow', 'GSAP', 'Finsweet'],
    resumen: 'Software para energías renovables, con el mundo entero en un mapa.',
    entradilla: 'Isotrol hace software para gestionar activos de energía renovable en todo el mundo. Su web tenía que estar a la altura de ese alcance.',
    contexto: [
      'Diseño de la web, desarrollo en Webflow, integración del CMS y localización: de la portada con su imagen de marca a las páginas de producto de Bluence y el mapa de su impacto global.',
      'Una web sobria, con fotografía a sangre, cifras que se leen de lejos y el azul de la marca como único acento.',
    ],
    reto: 'Contar una empresa técnica con presencia en todo el mundo de forma clara, y que su equipo pueda mantener el contenido.',
    frase: 'Su impacto, en un mapa.',
    paleta: [
      { hex: '#FFFFFF', pct: 93.6, n: 'Fondo' },
      { hex: '#090756', pct: 0.1, n: 'Marino' },
      { hex: '#1A1AFF', pct: 1.3, n: 'Azul eléctrico' },
      { hex: '#AAAAAA', pct: 4.9, n: 'Gris' },
    ],
    tipos: [
      { n: 'Aspekta', uso: 'Titulares 300, texto 400' },
    ],
    apartados: [],
    tecnica: ['Diseño en Figma y desarrollo en Webflow', 'Integración del CMS y localización de Webflow', 'Filtros del CMS con Finsweet y animaciones con GSAP'],
    cita: {
      texto: 'Estamos encantados de trabajar con vosotros en nuestros proyectos. El servicio, la ejecución, los plazos y la entrega son excelentes, pero lo que de verdad destaca es vuestro conocimiento y vuestra capacidad de mejorar nuestra idea inicial.',
      autor: 'Inés López-Pita',
      rol: 'Directora de marketing de Isotrol',
    },
    detalles: [
      x('isotrol', 'historia', 'La historia que se entinta', 'La presentación de la empresa pasa de gris a tinta, palabra a palabra, a medida que se baja.', '1440 / 936', { pie: 'Grabado en la web tal como se entregó' }),
      x('isotrol', 'mapa', 'Su impacto, en un mapa', 'Las cifras cuentan al entrar (proyectos, gigavatios, países, clientes) y el mapa marca dónde está; al pasar por un país, enseña su proyecto.', '1440 / 936', { pie: 'Grabado en la web tal como se entregó' }),
      x('isotrol', 'bluence', 'Bluence', 'El producto, con su propia sección: soluciones que se recorren con la captura del software al lado.', '1440 / 936', { pie: 'Grabado en la web tal como se entregó' }),
    ],
    mosaico: [
      { f: 'ancha', p: [pz('isotrol', 'x-mapa', 'Su impacto, en un mapa', 'Las cifras cuentan al entrar y, al pasar por un país, enseña su proyecto.', { prop: '1920 / 1248' })] },
      { f: 'par', p: [pz('isotrol', 'x-bluence', 'Bluence', 'El producto, con su sección: cada solución con sus etiquetas, su nombre en Aspekta ligera y la captura del software.', { placa: 1, prop: '1920 / 1248' }), pz('isotrol', 'x-historia', 'La historia que se entinta', 'La presentación pasa de gris a tinta, palabra a palabra, al bajar.', { placa: 2, prop: '1920 / 1248' })] },
      { f: 'ancha', p: [pz('isotrol', 'c-beneficios', 'Trabajar en Isotrol', 'Cuatro razones en tarjetas que alternan texto y fotografía del equipo.', { prop: '8 / 5', foto: true })] },
    ],
    escala: [
      { n: 'H1', fam: 'Aspekta', px: 68, lh: 81.6, peso: 300, ls: '−0,024 em' },
      { n: 'H2', fam: 'Aspekta', px: 48, lh: 57.6, peso: 300, ls: '−0,02 em' },
      { n: 'H3', fam: 'Aspekta', px: 32, lh: 38.4, peso: 300, ls: '−0,025 em' },
      { n: 'Texto', fam: 'Aspekta', px: 20, lh: 30, peso: 400 },
      { n: 'Detalle', fam: 'Aspekta', px: 14, lh: 16.8, peso: 400, ls: '0,1 em, mayúsculas' },
    ],
    boton: { fam: 'Aspekta', px: 16, peso: 600, radio: 6, alto: 36, fondo: '#1A1AFF', tinta: '#FFFFFF' },
    medido: 'Medido en isotrol.com, a 1440 px',
    aplicado: true,
    comentario: { quien: 'eric', texto: 'Isotrol pedía sobriedad: fotografía grande, cifras claras y su impacto en un mapa. Dejamos el CMS y los idiomas montados para que su equipo lo lleve solo.' },
    conclusion: [
      'Una empresa técnica con presencia en todo el mundo, contada en una web sobria: fotografía a sangre, cifras que se leen de lejos y su impacto en un mapa.',
      'El CMS y la localización de Webflow quedaron montados para que su equipo mantenga el contenido.',
    ],
    color: '#19171d',
    colores: ['#19171d', '#635850', '#8d8478'],
    portada: m('isotrol', 'portada'),
    cubierta: m('isotrol', 'cubierta'),
  },
];

export const deProyecto = (slug: string) => proyectos.find((p) => p.slug === slug);
