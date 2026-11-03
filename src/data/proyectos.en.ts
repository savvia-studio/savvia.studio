// ENGLISH overrides for src/data/proyectos.ts, by slug: only the fields that carry visible text. Whatever isn't listed falls back to the Spanish original.
// Estructura, medios, números y flags se heredan del original (se mapea sobre él cambiando solo las cadenas). `servicios` NO se sobrescribe: es la clave del filtro.
import { proyectos, type Proyecto, type Fila } from './proyectos';

export const SERVICIOS_EN: Record<string, string> = {
  'Diseño web': 'Web design',
  'Desarrollo agéntico': 'Agentic development',
  Webflow: 'Webflow',
  CMS: 'CMS',
  Multidioma: 'Multilingual',
  Migración: 'Migration',
  Animación: 'Animation',
};

const base = (slug: string): Proyecto => proyectos.find((p) => p.slug === slug)!;
// mezcla, por posición, las cadenas traducidas con los objetos del original
const tx = <T extends object>(arr: T[] | undefined, rows: Partial<T>[]): T[] => (arr ?? []).map((o, i) => ({ ...o, ...rows[i] }));
// el mosaico: filas → piezas, solo titulo y pie
const tm = (filas: Fila[] | undefined, rows: [string, string][][]): Fila[] =>
  (filas ?? []).map((f, i) => ({ ...f, p: f.p.map((z, j) => ({ ...z, titulo: rows[i][j][0], pie: rows[i][j][1] })) }));
// escala tipográfica medida: nombres y notación en inglés
const NESC: Record<string, string> = { Texto: 'Text', Detalle: 'Detail', Entradilla: 'Lead', Cifra: 'Figure', 'Cifra XL': 'Figure XL', 'Cifra L': 'Figure L', Grande: 'Large', Pequeño: 'Small', Mini: 'Tiny', Rótulo: 'Label', Etiqueta: 'Tag', Cita: 'Quote', Código: 'Code', Cierre: 'Closing' };
const escalaEn = (p: Proyecto) =>
  p.escala?.map((e) => ({ ...e, n: NESC[e.n] ?? e.n, ls: e.ls?.replace(/,/g, '.').replace('mayúsculas', 'uppercase') }));

const quantus = base('quantus');
const patchbay = base('patchbay');
const playground = base('playground');
const neety = base('neety');
const invopop = base('invopop');
const bop = base('business-online-payroll');
const cubbo = base('cubbo');
const remerge = base('remerge');
const isotrol = base('isotrol');

export const proyectosEn: Record<string, Partial<Proyecto>> = {
  quantus: {
    sector: 'AI and quantum computing',
    resumen: 'A sphere of dots that compresses into its own logo: the product, explained without a single word.',
    hicimos: 'A piece of our own to show that agentic development works when a studio’s judgement guides it: the complete home page of an AI company, built with Claude Code over a week of rounds, every decision taken at savvia and every delivery measured in Chrome and WebKit.',
    entradilla: 'Quantus compresses AI models so they run on far less compute with the same intelligence. Its home page had to prove it, not just say it.',
    contexto: [
      'Quantus is a piece of our own to show that agentic development works when a studio’s judgement directs it: the complete home page of a fictional AI model-compression company, designed and built with Claude Code.',
      'This is how savvia works: we write the brief, the AI proposes three directions and we choose one. Then a week of rounds with feedback as numbered points and screenshots. Every decision is human. What we reject goes onto a list of 99 rules the AI reads before each round, and we review on the published page with Agentation.',
      'Every delivery is measured in Chrome and WebKit before it is accepted. After 32 rounds: twelve sections, fifteen illustrations written as code and four scenes animated by scroll.',
    ],
    frase: 'Less compute, the same intelligence.',
    secciones: tx(quantus.secciones, [
      { n: 'Hero', d: 'A sphere of thousands of dots compresses with the scroll until it becomes the isotype, while the readouts fall: from 100% to 5% of the size, with 97.4% of the accuracy.' },
      { n: 'Who uses compressed AI', d: 'Four use cases, each with its own isometric illustration, which redraws itself when the cursor passes over it.' },
      { n: 'The model', d: 'A ranking of 178 models in which theirs climbs to 13th place, just once, on entering.' },
      { n: 'How compression works', d: 'A 4096 × 4096 matrix from which the scroll discards two thirds and breaks down the rest.' },
      { n: 'One model, four places', d: 'A single illustration that transforms between cloud, data centre, edge and device.' },
      { n: 'The AI suite', d: 'Compression, security and orchestration in panels that open.' },
      { n: 'The platform', d: 'A four-step panel with capacity, latency and cost.' },
      { n: 'One stack', d: 'The products as named blocks that fall and lock into place with gravity.' },
      { n: 'Sectors', d: 'Ten numbered industries, each with its icon.' },
      { n: 'Validated in production', d: 'Four customer measurements that take turns when clicked.' },
      { n: 'Company', d: 'Three illustrations of their story and news that rotate.' },
      { n: 'How it was made', d: 'The only section that is not fiction: the rounds, the file, the illustrations and the measuring tools.' },
    ]),
    paleta: tx(quantus.paleta, [{ n: 'Background' }, { n: 'Elevated background' }, { n: 'Ink' }, { n: 'Brand red' }]),
    tipos: tx(quantus.tipos, [{ uso: 'Headlines and text, 400, 500 and 600' }, { uso: 'Data, specifications and labels' }]),
    tecnica: [
      'A single hand-written, self-contained HTML file of 446 KB',
      'The sphere, the matrix and the tensor in Canvas 2D. The fifteen illustrations as SVG generated by code',
      'GSAP and ScrollTrigger with Lenis driving the clock. Every loop pauses off-screen',
      'Measured before optimising: main-thread work dropped from 40.1 s to 26.4 s, and frames over 20 ms from 2.5% to 0.9%',
      'Reduced motion respected: no loops, with the logo already formed',
      'A review mode with Agentation behind a URL parameter: an ordinary visitor downloads not a single byte of it',
      'Published on Vercel from the main branch, with immutable caching for assets',
    ],
    cifras: tx(quantus.cifras, [{ t: 'rounds of human feedback' }, { t: 'illustrations written as code' }, { t: 'rules for what doesn’t come back' }]),
    figmaTitulo: 'From concept to site',
    figma: tx(quantus.figma, [
      { titulo: 'From sketch to hero', pie: 'This is how a solid base is built at savvia. First the guides: twelve columns with a 29 px gap, 58 px margins, 96 px of air at the top and every measurement marked, with not a single style decision. Then the real copy on those guides. Then the brand: the typography, the red and the sphere, still on the grid. And at the end the published version, with the light behind it and the model readouts.' },
      { titulo: 'The hero options', pie: 'Nine ways to open the same page: the headline centred over the sphere, the panel with the API call, the four use cases, the headline across the full width with the figures, the sphere as a poster, the three products, the model table, the headline at 150 px with the sphere cut by the edge, and the chosen one, the sphere that compresses as you scroll. The last one stayed because it is the only one that shows what Quantus does without explaining it.' },
      { titulo: 'The two breakpoints, in detail', pie: 'Six sections at 1440 and at 390 pixels, side by side. The cards become a column with their illustration, the matrix and its text stack without losing the process, and the stack stops being a grid to become a list. Nothing is cropped or hidden.' },
    ]),
    micro: {
      titulo: 'Animations',
      texto: 'The animations tell the product’s story and let whoever lands here understand quickly what it offers: the matrix compresses and breaks down with the scroll, the stack falls with real gravity and what is underneath gives way as it lands, and every illustration is traced as lines and then painted. Because it is built in code, every movement is written and tuned by hand.',
      video: { src: '/media/obra/quantus/x-matriz.mp4', poster: '/media/obra/quantus/x-matriz.jpg', pie: 'Compression, told horizontally with the scroll: the 4096 × 4096 matrix is profiled, loses two thirds and what remains breaks down into a chain of tensors.', rotulo: 'The process illustration.', alt: 'Quantus’s matrix being profiled and decomposed with the scroll' },
      mas: [
        { titulo: 'The falling stack', alt: 'Quantus’s products falling as blocks on its website, in slow motion', video: { src: '/media/obra/quantus/x-pila.mp4', poster: '/media/obra/quantus/x-pila.jpg', pie: 'The blocks fall with gravity, in slow motion: nothing bounces and what is underneath gives way 3.2 pixels as they land.' } },
        { titulo: 'How the illustrations are painted', alt: 'A Quantus illustration being traced as lines and painted', video: { src: '/media/obra/quantus/x-plano.mp4', poster: '/media/obra/quantus/x-plano.jpg', pie: 'First the outline of every edge, back to front, like a plan. Then the colour of each face comes in.' } },
      ],
    },
    herramientas: {
      titulo: 'Agentation',
      texto: 'This is how it gets polished in detail. At savvia we leave our comments on the published page itself, element by element: Agentation marks what is under the cursor, saves each note with the exact selector and the screen size, and hands it to Claude as text. Every pin is a concrete change, not a general impression.',
      piezas: [
        { titulo: 'The comments, one per piece', alt: 'Agentation on Quantus’s site: four notes, one per section', video: { src: '/media/obra/quantus/agentation.mp4', poster: '/media/obra/quantus/agentation.jpg', pie: 'Four real notes from savvia’s review: the typography of the hero figures, the material of the illustrations, the single illustration that transforms and the fall of the blocks. At the end, the copy button.' } },
        { titulo: 'What Claude receives', alt: 'The text Agentation hands to Claude: each note with its element’s path', img: { src: '/media/obra/quantus/agentation-md.webp', pie: 'The copied text: each note with the element’s path and what should change. Claude reads it and resolves the four points in the next round.' } },
      ],
    },
    detalles: tx(quantus.detalles, [
      { titulo: 'The sphere that compresses', texto: 'The product, explained without a single word: thousands of dots tied to the scroll compress into the isotype while the readouts drop from 100% to 5%. In Canvas 2D, painted in batches (16 tints × 40 alphas, a single stroke per group) to keep it light.' },
      { titulo: 'Four cases, four drawings', texto: 'Each use case has its own isometric illustration. When the cursor passes over it, the drawing redraws itself: outline first, colour after. All four come from the same illustration generator.' },
      { titulo: 'From tensor to four places', texto: 'A pinned section: the 4096 × 4096 matrix is profiled, two thirds of its correlations are discarded and what remains is broken down into a chain of five tensors. Then a single model travels from the cloud to the device: its box is measured in the outgoing and the incoming scene so that it lands on the same pixel.' },
      { titulo: 'The stack that falls', texto: 'The products fall as blocks with gravity (2,400 px/s², half a second, a tenth between rows) and what is underneath gives way 3.2 px as they land before returning to place.' },
      { titulo: 'The footer tensor', texto: 'A 9 × 9 × 9 tensor of cubes rotates and a red plane marks the logo’s cubes, which arrange themselves until they form it. A 12-second loop with no jump, in canvas: the CSS 3D cube that preceded it did not compose well in Safari.' },
    ]),
    mosaico: tm(quantus.mosaico, [
      [['The sphere that compresses', 'Thousands of dots tied to the scroll form the isotype as the size drops from 100% to 5%.']],
      [['A plan being built', 'Every place the model runs is an isometric illustration drawn in line and then filled.'], ['From tensor to four places', 'The 4096 × 4096 matrix loses two thirds and ends up as a model that fits anywhere.']],
      [['Four cases, four drawings', 'When the cursor passes over it, each illustration redraws itself: outline first, colour after.']],
      [['The stack', 'The products fall with gravity on entering and what is underneath gives way 3.2 px as they land.'], ['Who uses compressed AI', 'Ten industries in a grid of rules, with the label in JetBrains Mono and the text in Schibsted Grotesk.']],
      [['The footer tensor', '729 cubes rotate and a red plane marks the ones that form the logo.']],
    ]),
    escala: escalaEn(quantus),
    medido: 'The tokens of its stylesheet: every size is fluid, from its minimum on mobile to its maximum on a wide screen',
    comentario: { quien: 'andoni', texto: 'Quantus was the project where we learnt most about saying no: thirty-two rounds and nearly a hundred rules for what doesn’t come back. What remains is a page that explains a hard product without asking anything of the reader.' },
    conclusion: [
      'With human judgement and well-directed agents, a home page like this one, with fifteen illustrations and four animated scenes, comes out of a week of rounds. Animations that used to take weeks of layout work are now days of direction.',
      'The AI does not decide: it proposes and executes, and measures everything before showing it. At savvia we decided every shape, every movement and every word, and that is what shows.',
      'What remains is a method: every request becomes a change, gets measured and is written down, so the next website starts where this one ended.',
    ],
  },

  patchbay: {
    sector: 'Developer software',
    resumen: 'An API for social networks and messaging across 23 channels, presented as a dock where each one moors.',
    hicimos: 'A piece of our own to show that agentic development works with human guidance: a design made with Claude Design, taken to production with Claude Code over a week of rounds, with savvia deciding in every one and every delivery measured in Chrome and WebKit.',
    entradilla: 'Patchbay connects a product to 23 social media, messaging and advertising channels through a single API. They take care of the developer apps, permissions and reviews of each platform.',
    contexto: [
      'Patchbay is a piece of our own to show that agentic development works with human guidance: the landing page of a fictional API that connects a product to 23 channels, designed with Claude Design and taken to production with Claude Code.',
      'The design and its choreography come out of Claude Design as an artifact. Claude Code turns it into a site of its own without touching what was already right. Then a week of rounds guided from savvia: each one starts with a decision of ours and the AI turns it into a change measured in Chrome and WebKit.',
      'That is how a starting design becomes a real website: how each section comes in, which portraits tell the story, how much the page may weigh. Every round is written down so the next one starts knowing.',
    ],
    frase: 'Every channel moors at the same API.',
    secciones: tx(patchbay.secciones, [
      { n: 'Hero', d: 'The headline and a terminal that writes the example line by line: connect, publish and reply.' },
      { n: 'Live', d: 'Counters for posts and connected accounts.' },
      { n: 'Platforms', d: 'Twenty-three tabs, one per channel, each with its spec sheet.' },
      { n: 'The shift', d: 'A dark section that changes the rhythm: a photo of a computer with the Patchbay console, and the new infrastructure layer.' },
      { n: 'Agents: the dock', d: 'The 23 channels in an arc, mooring one by one at the API.' },
      { n: 'Customers', d: 'A featured case that rotates and six reviews.' },
      { n: 'Getting started', d: 'Three timed steps: 30 seconds, 2 minutes and 1 minute.' },
      { n: 'Pricing', d: 'Pay as you go, with a calculator from 1 to 10,000 accounts.' },
      { n: 'Questions, security and close', d: 'Six engineering questions, the security block and the final call.' },
    ]),
    paleta: tx(patchbay.paleta, [{ n: 'Paper' }, { n: 'Ink' }, { n: 'Vermilion (only accent)' }, { n: '“Live” green' }]),
    tipos: tx(patchbay.tipos, [{ uso: 'Headlines, 600' }, { uso: 'Code and labels' }]),
    apartados: [],
    tecnica: [
      'A single 2,962-line HTML file (229 KB), with React 18 in the browser and not a single request to a CDN',
      'Motion in CSS: 25 custom animations, no libraries, no canvas or WebGL',
      'Sound synthesised with Web Audio',
      'Pricing calculator with a logarithmic slider from 1 to 10,000 accounts',
      'Light and dark themes, remembered in the browser',
      'A 580 KB load: the starting artifact weighed 5.7 MB',
      'Published on Vercel from the main branch. Every round verified in Chrome and WebKit at 1440 and 390 pixels',
    ],
    cifras: tx(patchbay.cifras, [{ t: 'rounds of human feedback' }, { t: 'channels in one API' }, { t: 'load, down from 5.7 MB' }]),
    figmaTitulo: 'From Claude Design to the site',
    figma: tx(patchbay.figma, [
      { titulo: 'From sketch to hero', pie: 'The same sequence as in any savvia piece. The guides first: a 1240 px container, twelve columns with a 24 px gap, 92 px of air at the top and the terminal spanning ten columns, all measured. Then the real copy, then the brand with the vermilion and the terminal already written, and at the end the published version, where the terminal types itself.' },
      { titulo: 'The hero options', pie: 'Nine openings. “Schema”, the one the design came with: one call in, every channel out. “Dock”, with the 23 channels mooring at the API. “Product”, with the posts tray. “Two columns”, with the terminal beside the headline. “Channels”, all 23 as pills. “Before and after”, twelve integrations or one. “Playground”, the request and its response. “Trust”, the figures and the partners. And “Code”, the chosen one: three lines that type themselves, because that is what Patchbay sells.' },
      { titulo: 'Light theme and dark theme', pie: 'The ten sections, in whichever theme you pick with the button. Dark is not an inversion: every surface, rule and veil has its own value, and the vermilion is the same in both.' },
    ]),
    micro: {
      titulo: 'Animations',
      texto: 'The animations tell the product’s story and let whoever lands here understand quickly what it offers: the channels moor one by one at the API, the steps complete in the time they promise and the intro draws the mark before opening the page. Because it is built in code, every detail can be animated and measured.',
      video: { src: '/media/obra/patchbay/x-muelle.mp4', poster: '/media/obra/patchbay/x-muelle.jpg', pie: 'The 23 channels in an arc. Every 2.4 seconds one moors at the API.', rotulo: 'The dock.', alt: 'Patchbay’s dock: the channels mooring one by one at the API' },
      mas: [
        { titulo: 'Up and running in minutes', alt: 'Patchbay’s three timed steps', video: { src: '/media/obra/patchbay/x-pasos.mp4', poster: '/media/obra/patchbay/x-pasos.jpg', pie: 'Three timed steps: an API key appears in view and the channels connect one by one.' } },
        { titulo: 'The loading animation', alt: 'Patchbay’s intro: the mark filling up and the counter', video: { src: '/media/obra/patchbay/intro.mp4', poster: '/media/obra/patchbay/intro.jpg', pie: 'A square that draws itself, the mark filling from the bottom up and a counter from 000 to 100. Then the panels rise in steps. It lasts 2.3 seconds and any gesture skips it.' } },
      ],
    },
    detalles: tx(patchbay.detalles, [
      { titulo: 'The intro and the terminal', texto: 'The mark fills with vermilion from the bottom up while a counter goes from 000 to 100. Then the terminal writes itself, one line every 190 ms: connect, publish and reply, each step with its ✓ and its “200 OK”.' },
      { titulo: 'Twenty-three spec sheets', texto: 'One tab per channel and, in each, what it truly supports: formats, video and text limits, and the journey of a post (queued, publishing, published).' },
      { titulo: 'The dock', texto: 'A 180 px capsule and an arc with a 730 px radius holding the 23 tiles, 15.65° apart. Every 2.4 seconds one advances and locks in 0.9 s with a curve that starts sharp and settles. Its neighbours at 0.79 scale. The skins alternate white, ink and vermilion.' },
      { titulo: 'Up and running in minutes', texto: 'Three timed steps (30 seconds, 2 minutes and 1 minute): the API key is generated in view and the channels connect one by one, each with its status.' },
    ]),
    mosaico: tm(patchbay.mosaico, [
      [['The intro and the terminal', 'The mark fills with vermilion and the example writes itself, one line every 190 ms.']],
      [['The dock', 'The 23 channels in an arc. Every 2.4 seconds one moors at the API.'], ['Every channel moors', 'The dock and its headline: the same tools and the same data shape for any agent.']],
      [['Twenty-three spec sheets', 'One tab per channel, with what it truly supports: formats, limits and statuses.']],
      [['Customers', 'A featured case that rotates and the reviews, with name and company.'], ['Up and running in minutes', 'Three timed steps: the key is generated in view and the channels connect.']],
    ]),
    escala: escalaEn(patchbay),
    medido: 'Measured on the site, at 1440 px and at 390 px. Sizes grouped by role',
    comentario: { quien: 'andoni', texto: 'We wanted whoever codes to see the product working before reading a line. Putting it all in a single HTML file, with the motion in CSS and the sound in the browser, was the most fun part.' },
    conclusion: [
      'A design made with AI becomes a real website in a week of rounds with judgement: brand, mobile, performance and detail that used to be weeks of work are now days of direction and measuring.',
      'The AI proposes and checks. savvia decides. Every round is written down with what was asked, what was decided and what was measured.',
      'It is the way we offer to work: agentic design and development from start to finish, with a person in charge.',
    ],
  },

  playground: {
    sector: 'Special education',
    ubicacion: 'Chicago, United States',
    resumen: 'Science-based AI for special education, told through stickers you can pick up.',
    entradilla: 'Playground IEP is an AI suite for special education in the United States: it helps teams draft each student’s individual plans, track their progress and manage their caseload.',
    contexto: [
      'First their site was built in Webflow, with a CMS and custom animations. Then the home page was rebuilt in custom code, with no external dependencies, so their team can create new pages with AI.',
      'The new home page had to be more professional and more product-focused, without losing the authenticity of a brand that speaks to teachers: breathing room between sections, an Apple-style menu and animations with purpose.',
    ],
    reto: 'To present 21 AI tools, in a sector where trust is everything, without the site feeling like a catalogue or losing the friendly tone the brand has.',
    frase: 'Serious at heart, friendly in form.',
    secciones: tx(playground.secciones, [
      { n: 'Hero', d: 'The real app, navigable, inside a container that rises and grows with the scroll; the headline rotates through what it does.' },
      { n: 'How it works', d: 'A pinned card with four scenes of the product, from the student’s file to the explanation for the family.' },
      { n: 'IEP Copilot', d: 'The 21 tools in four steps (Write, Check, Teach and Measure) and the app that changes on click.' },
      { n: 'Compatible', d: 'A scroll-driven diagram: data from their systems comes in, gets cleaned and is ready to use.' },
      { n: 'Privacy', d: 'A dark panel with the commitments and a permissions demo.' },
      { n: 'For the whole team', d: 'Every role on the IEP team, with what they gain.' },
      { n: 'Testimonials', d: 'Seven stacked coloured cards that take turns in an arc.' },
      { n: 'Pricing', d: 'Two paths: teachers on their own or the whole district.' },
      { n: 'Questions and close', d: 'Eight sticky notes that flip over and a dot grid that the mouse pushes aside.' },
    ]),
    paleta: tx(playground.paleta, [{ n: 'Electric blue (only accent)' }, { n: 'Ink' }, { n: 'Surface' }, { n: 'Green (product only)' }, { n: 'Amber (product only)' }]),
    tipos: tx(playground.tipos, [{ uso: 'Headlines, never bold' }, { uso: 'Reading and interface' }]),
    tecnica: [
      'Custom HTML, CSS and JS with a build script that includes partials and versions the assets',
      'Everything local, with no CDN or tracking; GSAP and Lenis for motion',
      'Transferred weight from 4.67 to 1.91 MB; fonts subset to Latin, from 2.9 MB to 372 KB',
      '0% slow frames when scrolling on desktop and 1% on mobile with the CPU at ×4',
      '0 errors across 17 screen sizes, in Chrome and WebKit',
      'Tab roles, screen-reader announcements and checked contrast',
    ],
    descartado: [
      'The hole loader (5 s) and the wax rocket (2.8 s): the logo one came back, once per session',
      'Stickers all over the site, the product that came in pushing and the 3D card stack',
      'A search box for the 21 tools: nobody would know what to look for',
      'A 3D logo: we kept their own',
    ],
    cifras: tx(playground.cifras, [
      { t: 'tools presented' },
      { v: '1.91 MB', t: 'in weight (previously 4.67)' },
      { t: 'screen sizes checked' },
      { t: 'slow frames on desktop' },
    ]),
    cita: {
      ...playground.cita!,
      texto: 'Eric and Andoni are amazing. They are fun to work with and their work is incredible. Not only do they have incredible talent, but they care deeply about collaboration. Throughout the whole process they communicated with me constantly and together we built something beautiful.',
      rol: 'CEO of Playground IEP',
    },
    proceso: tx(playground.proceso, [
      { n: 'A faithful clone', d: 'First, the Webflow site rebuilt in custom code, piece by piece, with no external dependencies.' },
      { n: 'The library', d: 'Then, their system written for people and for AI: DESIGN.md, 9 blocks with “what to change and what not to touch” and 6 components.' },
      { n: 'The redesign', d: 'Around 37 rounds. After the client’s review, which asked for fewer things competing for attention, the stickers, stack and loader went: the page shrank from 15,286 to 10,636 px. One idea per container.' },
      { n: 'Three directions', d: 'IEP Copilot was tried three ways before settling on steps at the top and tools in the app’s sidebar.' },
      { n: 'The final filter', d: 'Before delivery: 17 screen sizes, from 320 to 2560 px, in Chrome and in WebKit.' },
    ]),
    detalles: tx(playground.detalles, [
      { titulo: 'The app, for real', texto: 'The hero is not a screenshot: it is the navigable app (Dashboard, IEP Copilot, Chat IEP, Progress Monitoring and calendar). On scroll, the hero pins and the app rises and grows; the headline rotates with letters that rise blurred inside a mask.' },
      { titulo: 'One card, four scenes', texto: 'The explanation takes up a single pinned card. Each sentence on the right picks its product scene: dropping in the student’s file, the draft that comes out of it, checking any line and explaining it to the family.' },
      { titulo: '21 tools without jumps', texto: 'The tools, grouped into four steps you can click. So the page doesn’t jump when switching, all 21 screens are rendered, the tallest is measured and it sets the app’s height (743 px at 1440).' },
      { titulo: 'The data, clean', texto: 'A scroll-driven diagram: the school’s systems come in along the lines, the duplicates counter goes down and the caseload list ends up ready to work with.' },
      { titulo: 'Testimonials as trading cards', texto: 'Seven stacked cards. The new one rises in an arc and takes the lead (1 second), the one in front is pushed out 100 ms later and the rest follow in a wave.' },
      { titulo: 'Questions as notes', texto: 'Eight coloured sticky notes, like the ones in the staff room, that flip in 3D when clicked to reveal the answer.' },
    ]),
    mosaico: tm(playground.mosaico, [
      [['The app, for real', 'The hero is the navigable app: on scroll it pins and the app rises and grows.']],
      [['One card, four scenes', 'Each sentence picks its scene: here, the draft written from the student’s documents, with every fact cited.'], ['21 tools without jumps', 'Four steps you can click; the tallest screen sets the app’s height.']],
      [['Testimonials as trading cards', 'Seven stacked cards: the new one rises in an arc and the rest follow in a wave.']],
      [['The data, clean', 'The school’s systems come in along the lines, Playground cleans them and the caseload ends up in one view.'], ['Questions as notes', 'Eight sticky notes that flip in 3D to reveal the answer.']],
    ]),
    escala: escalaEn(playground),
    medido: 'Measured on playgroundiep.com, at 1440 px',
    conclusion: [
      'First, a Webflow site with a CMS and custom animations. Then, the home page rebuilt in custom code, with no external dependencies, so their team can create new pages with AI.',
      'It weighs 1.91 MB (previously 4.67), gives no slow frames when scrolling on desktop and was checked across 17 screen sizes, in Chrome and WebKit.',
    ],
  },

  neety: {
    sector: 'B2B sales, SaaS',
    hicimos: 'We designed and built Neety’s website with AI, in two languages, and handed it over with a library so their team can keep evolving it with AI, true to everything we worked on together.',
    resumen: 'Design and agentic development: 40 pages in two languages that their team keeps changing with Claude.',
    entradilla: 'Neety detects who to sell to, when to do it and what action to take. Its website had to show that in motion and stay in the hands of a team with no developers.',
    contexto: [
      'Neety helps B2B sales teams know which companies to sell to, when to do it and what action to take. More than 200 salespeople use it at more than 50 industrial companies, such as Ojmar, Telpark and Fagor Automation.',
      'We worked with Unai and his team on the redesign of their website. The previous one was on Webflow, and maintaining it was one of their biggest problems: the site could not keep pace with the product.',
      'We started with the design, in Figma, and then they asked us to build the site with AI: with Ship Studio, each screen went to Claude, which turned it into code. The result: 40 pages in two languages, with the content in the Sanity CMS.',
      'It launched on 24 September, at Neety Forward. Since then, Unai and his team have rebuilt the demo page and published 30 articles and 26 academy resources on their own.',
    ],
    frase: 'A website their team keeps changing without us.',
    animacion: {
      titulo: 'From design to motion',
      texto: 'First we drew each card by hand in Figma, then animated them directly in code with Claude Code. Now Neety’s team can change their copy and images by talking to AI.',
      diseno: { src: '/media/obra/neety/anim-figma.webp', pie: 'The seven cards, drawn by hand.' },
      web: { src: '/media/obra/neety/x-feed.mp4', poster: '/media/obra/neety/x-feed.jpg', pie: 'The same cards, looping over the gradient: the active one sharp; the rest, blurred.' },
    },
    herramientas: {
      titulo: 'Ship Studio and Agentation',
      texto: 'The site was built in Ship Studio. Claude works on the code while the site shows live on the canvas. And with Agentation, feedback is left on the site itself, pointing at each element, so Claude knows exactly what to change.',
      piezas: [
        { titulo: 'Ship Studio', alt: 'Ship Studio with Neety’s site: the agent on the left and the live site', video: { src: '/media/obra/neety/ship-studio.mp4', poster: '/media/obra/neety/ship-studio.jpg', pie: 'We ask the agent for a change and the site updates live.' } },
        { titulo: 'Agentation', alt: 'Agentation on Neety’s site: a comment written on the “How it works” section', video: { src: '/media/obra/neety/agentation.mp4', poster: '/media/obra/neety/agentation.jpg', pie: 'Hovering marks each element of the site. You click it and write the comment. Claude gets the text, the exact element and the screen size it was left at.' } },
      ],
    },
    micro: {
      titulo: 'Micro-animations',
      texto: 'Because it is built in code, every detail can be animated: a line, a step, a card. In “How Neety works”, the line moves forward and lights up each step with its screen.',
      video: { src: '/media/obra/neety/micro-rail.mp4', poster: '/media/obra/neety/micro-rail.jpg', pie: 'The line runs through the process and lights up each step.' },
      mas: [
        { titulo: 'Use cases', alt: 'The hero of Neety’s use cases: the pill switches case and the illustration adapts', video: { src: '/media/obra/neety/micro-casos.mp4', poster: '/media/obra/neety/micro-casos.jpg', pie: 'The pill in the headline switches use case, the page moves to the next one with its transition and the animated illustration adapts to each company’s logo.' } },
      ],
    },
    secciones: tx(neety.secciones, [
      { n: 'Hero', d: 'The headline and a feed of seven signal cards running in a loop.' },
      { n: 'Customers', d: 'The logos of those already using it.' },
      { n: 'Why Neety', d: 'Six product figures that count up on entering.' },
      { n: 'From noise to signal', d: 'The before and after, with pixels that fall into order.' },
      { n: 'Neety inside', d: 'Overlapping cards with what the team sees.' },
      { n: 'How it works', d: 'A rail that runs through the process step by step.' },
      { n: 'Integrations', d: 'The product connected to their commercial stack.' },
      { n: 'Use cases', d: 'Four tabs, one per team.' },
      { n: 'Demo', d: 'What you’ll see in the demo and the final call.' },
    ]),
    paleta: tx(neety.paleta, [{ n: 'Aubergine' }, { n: 'Baby blue' }, { n: 'Orange Core' }, { n: 'Plum' }, { n: 'Tech grey' }]),
    tipos: tx(neety.tipos, [{ uso: 'Headlines, 500' }, { uso: 'Interface and text' }, { uso: 'Long-form text' }]),
    tecnica: [
      'Next.js 15 with App Router and Tailwind CSS 4',
      'GSAP 3.15 and ScrollTrigger for the feed and the entrances, with no scroll libraries',
      'Four families: Bricolage Grotesque, Switzer, Inter and Roboto Mono, served with next/font',
      'Spanish and English, with the blog, team and events in the Sanity CMS',
      'Hosted on Cloudflare, in Neety’s own account',
      'The code, in a GitHub repository with the assets and the documentation',
    ],
    cifras: tx(neety.cifras, [
      { t: 'pages in two languages' },
      { t: 'written decisions' },
      { t: 'components in the library' },
    ]),
    figma: tx(neety.figma, [
      { titulo: 'From skeleton to concept', pie: 'Every page, first as structure with no colour. Then five visual direction concepts until landing on the final one.' },
      { titulo: 'The look and feel', pie: 'Seventeen variations of the home page on the same skeleton. The gradient, the headline and the hero card change until the direction is found.' },
      { titulo: 'The home page, on desktop and mobile', pie: 'The final home page, the menu dropdowns and the feed; next to it, the mobile version with its menu.' },
    ]),
    detalles: tx(neety.detalles, [
      { titulo: 'The signals feed', texto: 'Seven cards in a loop. The track climbs in steps and leaves the active card at 40% of the window; the others lose opacity, blur up to 5 px and shrink with distance. Each card goes from skeleton to content and one types itself out up to “Sent ✓”.' },
      { titulo: 'From noise to signal', texto: 'The before and after in a single machine: the pixels leave the cold list on the left and gather into the isotype, and the prioritised list remains on the right.' },
      { titulo: 'Neety inside', texto: 'The product’s real screens (accounts with fit, intent signals) take turns as you scroll, each with the figure that justifies it: the site shows what the team will see.' },
      { titulo: 'One case per team', texto: 'Four tabs, one per sales team. Each changes the text and a product card with sample companies and their fit.' },
    ]),
    mosaico: tm(neety.mosaico, [
      [['From noise to signal', 'The cold list on the left; on the right, what Neety returns: prioritised accounts and the next action.']],
      [['Why Neety', 'Six product figures that count up on entering.']],
      [['Neety inside', 'The product’s real screens take turns as you scroll, each with its figure.']],
      [['How it works', 'A rail runs through the process: detect, prioritise and act.'], ['One case per team', 'Four tabs; each changes the text and the product card.']],
    ]),
    escala: escalaEn(neety),
    boton: { ...neety.boton!, nota: 'Aubergine at 75%' },
    medido: 'Measured on the delivered site, at 1440 px',
    conclusion: [
      'Neety was our first project with agentic development. The design started in Figma. We built the code with AI, true to every decision in that design.',
      'Neety took away a website connected to AI, which their team keeps evolving on their own.',
      'That works because the library acts as guardrails. Colour, typography, motion and the 80 components are all captured in it.',
      'And their team received a repository connected to Claude, from which they change content, sections or pages just by talking.',
    ],
    cita: { ...neety.cita!, texto: 'Close, human and genuinely able to understand your project. More than a supplier, they are part of your team.', rol: 'Founder and CEO, Neety' },
  },

  invopop: {
    sector: 'E-invoicing',
    ubicacion: 'Madrid, Spain',
    resumen: 'Over a hundred country pages that the team itself updates from Notion.',
    entradilla: 'Invopop builds e-invoicing infrastructure for global companies. It has a lot of per-country content (coverage, local costs, customer cases) and needed to update it without routing every change through the website.',
    contexto: [
      'The key pages were redesigned: country coverage, invoicing guides with an interactive map and technical coverage, so that complex content reads easily.',
      'Underneath, a Webflow CMS of over a hundred entries with cross-references, fed from Notion: the team edits where it already works and the site updates itself.',
    ],
    reto: 'To improve the design of specific pages and components and to set up a CMS of over a hundred items connected to the client’s database.',
    frase: 'The team edits where it already works and the site updates itself.',
    paleta: tx(invopop.paleta, [{ n: 'Background' }, { n: 'Ink' }, { n: 'Invopop green' }, { n: 'Grey' }]),
    tipos: tx(invopop.tipos, [{ uso: 'Headlines and text' }, { uso: 'Details' }]),
    apartados: [
      { titulo: 'From Notion to Webflow', texto: ['Notion is the main database. WhaleSync syncs every entry field by field with the Webflow CMS: success stories, local invoicing costs and each country’s data.'] },
    ],
    tecnica: ['Webflow CMS with references between collections', 'Notion → Webflow sync with WhaleSync', 'Webflow localisation in English and Spanish, with SEO per language'],
    cifras: tx(invopop.cifras, [{ t: 'CMS entries' }, { t: 'languages' }, { t: 'customer types on the map' }]),
    cita: {
      ...invopop.cita!,
      texto: 'A friend of ours who is an entrepreneur recommended them and it has been a great decision. From day one they integrated seamlessly with our tools and handled the integration of over a hundred CMS items with agility. Eric and Andoni reply in minutes and deploy in hours. They exceeded our expectations.',
      rol: 'Co-founder of Invopop',
    },
    detalles: tx(invopop.detalles, [
      { titulo: 'The map', texto: 'The countries with mandatory e-invoicing, drawn on the map. Each one is a CMS entry; on hover, its own card appears with what it requires.', pie: 'Recorded on the site as delivered, in Webflow' },
      { titulo: 'Coverage by country', texto: 'All the entries in a grid that filters by region and searches by name, without reloading: the content lives in the CMS and the interface just arranges it.', pie: 'Recorded on the site as delivered, in Webflow' },
      { titulo: 'A country page', texto: 'Each country has its own page: e-invoicing requirements, e-reporting and its news. Everything comes from Notion, synced field by field with WhaleSync.', pie: 'Recorded on the site as delivered, in Webflow' },
      { titulo: 'The product, in pieces', texto: 'Components redesigned to explain the product: flows you drag, errors that get handled, retries and the console.', pie: 'Recorded on the site as delivered, in Webflow' },
    ]),
    mosaico: tm(invopop.mosaico, [
      [['The map', 'The countries with mandatory e-invoicing; on hover, each one’s card.']],
      [['A country page', 'Invoicing and e-reporting requirements, format and deadlines, synced from Notion with WhaleSync.'], ['Under control with the console', 'Documents, workspaces, invoices and flows: each section of the console is shown on click.']],
      [['A complete tax tool', 'The product’s steps in a carousel: sync sales, validate, calculate taxes and comply.'], ['Coverage by country', 'A grid that filters by invoice type and by region, without reloading.']],
    ]),
    nota: 'Recorded on the site as delivered, in Webflow. Today invopop.com is a different site.',
    conclusion: [
      'Country content no longer goes through the website: the team edits it in Notion and WhaleSync syncs it field by field with the Webflow CMS, in English and Spanish.',
      'Over a hundred cross-referenced entries feed the coverage pages, the guides and the map.',
    ],
  },

  'business-online-payroll': {
    sector: 'Payroll and banking',
    ubicacion: 'Rochester, United States',
    resumen: 'A single CMS architecture for twenty-one banks, each with its own brand.',
    entradilla: 'SurePayroll wanted to turn its Business Online Payroll platform into a white-label solution for 21 partner banks, each with its own colours, logo and content.',
    contexto: [
      'The work was done within Farco Studio’s Webflow development team: a CMS system that creates each bank’s microsite without rebuilding anything.',
      'Collections per bank for the microsite, the referral form, the thank-you pages, the legal pages, the benefits and the pricing questions, connected by references.',
    ],
    reto: 'To have twenty-one different brands live on a single site without any resembling another and without multiplying the work by twenty-one.',
    frase: 'Twenty-one brands, a single architecture.',
    paleta: tx(bop.paleta, [{ n: 'Background' }, { n: 'Ink' }, { n: 'Terracotta' }, { n: 'Midnight blue' }, { n: 'Coral' }]),
    tipos: tx(bop.tipos, [{ uso: 'Headlines 500, text 400' }]),
    apartados: [
      { titulo: 'The CMS', texto: ['Collections for each bank’s microsites, the referral form, two types of thank-you pages, the privacy policy, the terms of use, the benefits and the pricing questions.', 'The site map is built with references and multi-references: each bank gets its complete experience from its entries.'] },
    ],
    tecnica: ['Webflow CMS with references and multi-references', 'Colours per bank through variables linked to the CMS, with a naming scheme built to grow', 'Smooth scrolling with Lenis and forms with Finsweet'],
    cifras: tx(bop.cifras, [{ t: 'banks, each with its microsite' }, { t: 'single CMS architecture' }]),
    con: 'Farco Studio, for SurePayroll',
    detalles: tx(bop.detalles, [
      { titulo: 'One bank, its brand', texto: 'One bank’s microsite, with its colours and its logo. Those colours are Webflow variables connected to CMS fields: switching bank means switching entry.', pie: 'Recorded on a partner bank’s microsite' },
      { titulo: 'The same pieces', texto: 'The benefits and product blocks are collections that each bank reuses: the text and the brand change, the structure doesn’t.', pie: 'Recorded on a partner bank’s microsite' },
      { titulo: 'Pricing and questions', texto: 'The price and the pricing questions come from their own collection, connected to each bank by references.', pie: 'Recorded on a partner bank’s microsite' },
    ]),
    mosaico: tm(bop.mosaico, [
      [['One bank, its brand', 'Its colours are Webflow variables connected to the CMS: switching bank means switching entry.']],
      [['The same pieces', 'Benefits and product blocks that each bank reuses: the text and the brand change.'], ['Pricing and questions', 'Their own collection, connected to each bank by references.']],
      [['The close', 'Full-bleed photography, white headline and the product video: the call to get started, with the bank’s brand.']],
    ]),
    escala: escalaEn(bop),
    medido: 'Measured on businessonlinepayroll.com, at 1440 px',
    conclusion: [
      'A CMS system creates each bank’s microsite without rebuilding anything: its colours are variables connected to its entry and its pages come from shared collections.',
      'Twenty-one partner banks, each with its own brand, on a single architecture. It was done within Farco Studio’s Webflow development team, for SurePayroll.',
    ],
  },

  cubbo: {
    sector: 'Logistics',
    ubicacion: 'Mexico City, Mexico',
    resumen: 'Two sites, Mexico and Brazil, merged into one and redesigned from start to finish.',
    entradilla: 'Cubbo had two separate Webflow projects: Mexico in production and Brazil on a subdomain. The goal: merge everything into one using Webflow localisation and redesign the entire site.',
    contexto: [
      'Several concepts aligned with Cubbo’s vision were presented, always respecting their identity, and the direction was refined with Ignasi until the final concept. From there, each page was approved almost without changes.',
      'With the home page approved, development started in parallel while design finished the secondary pages.',
    ],
    reto: 'To merge two sites in two languages without losing content, rankings or sales forms, and to redesign it along the way.',
    frase: 'Two sites in one, losing nothing along the way.',
    paleta: tx(cubbo.paleta, [{ n: 'Background' }, { n: 'Cubbo blue' }, { n: 'Navy' }, { n: 'Mist' }]),
    tipos: tx(cubbo.tipos, [{ uso: 'Headlines, 500' }, { uso: 'Text' }]),
    apartados: [
      { titulo: 'Under the hood', texto: ['The CMS was structured to migrate every success story and every blog article from Mexico (es-MX) and Brazil (pt-BR), with a 301 redirect plan on Cloudflare and the sales forms connected to HubSpot, which notify the team on Slack.'] },
    ],
    tecnica: ['A single Webflow project with es-MX and pt-BR localisation', 'CMS migration: success stories and blog from both countries', 'GSAP with ScrollTrigger, SplitText and Flip; CMS loading with Finsweet', '301 redirects with Cloudflare', 'Sales forms in HubSpot with Slack notifications'],
    cifras: tx(cubbo.cifras, [{ t: 'sites unified' }, { t: 'languages: es-MX and pt-BR' }]),
    cita: {
      ...cubbo.cita!,
      texto: 'We loved working with Andoni and Eric. The result exceeded our expectations, but the best part was how incredibly proactive they were. I never had to chase them: they came to me with solutions. From day one they understood who we are, what we do and what we needed.',
      rol: 'Co-founder and CEO of Cubbo',
    },
    detalles: tx(cubbo.detalles, [
      { titulo: 'Six products, one system', texto: 'The technology layer in a grid: each product with its animated isometric icon and its text, all with the same structure.' },
      { titulo: 'How Cubbo connects', texto: 'Four operation steps that you click and that change the image, built with GSAP and components from the Osmo Supply library.' },
    ]),
    mosaico: tm(cubbo.mosaico, [
      [['How Cubbo connects', 'Four operation steps that you click and that change the image.']],
      [['Six products, one system', 'The technology layer: each product with its animated isometric icon and its text.'], ['The panel for every order', 'The infrastructure behind every order: Cubbo’s real dashboard inside its browser, with delivery times.']],
      [['Technology, network and expansion', 'Cubbo’s infrastructure with its figures, in photography.']],
    ]),
    escala: escalaEn(cubbo),
    medido: 'Measured on cubbo.com, at 1440 px',
    conclusion: [
      'Mexico and Brazil now live in a single Webflow project, with es-MX and pt-BR localisation, both countries’ content migrated and 301 redirects so no rankings are lost.',
      'The sales forms reach HubSpot and notify the team on Slack.',
    ],
  },

  remerge: {
    sector: 'In-app advertising',
    ubicacion: 'Berlin, Germany',
    resumen: 'The whole site, from Craft CMS to Webflow, in four languages.',
    entradilla: 'Remerge needed to migrate its entire site from Craft CMS to Webflow, in four languages: English, Korean, Japanese and Chinese.',
    contexto: [
      'We worked from the original site, inspecting the code and rebuilding the architecture from scratch: from the style variables and the spacing system to every component, designed for the marketing team to reuse.',
      'In two months: over thirty static pages and a CMS with two main collections and over 350 entries. With Cursor and the Webflow MCP, and still checking almost every piece of content by hand in all four languages.',
    ],
    reto: 'One of those migrations where every detail counts: changing platform without anything moving out of place, in four languages and four writing systems.',
    frase: 'AI helps. The checking, by hand.',
    paleta: tx(remerge.paleta, [{ n: 'Lavender' }, { n: 'Lime' }, { n: 'Ink' }, { n: 'Stone' }]),
    tipos: tx(remerge.tipos, [{ uso: 'Headlines, extra light' }, { uso: 'Text' }]),
    apartados: [
      { titulo: 'Validation', texto: ['AI sped up the migration, but almost every piece of content had to be checked in all four languages to make sure everything was exactly where it should be.'] },
    ],
    tecnica: ['From Craft CMS to Webflow, rebuilt from the original code', 'Webflow localisation in English, Korean, Japanese and Chinese', 'Migration assisted with Cursor and the Webflow MCP'],
    cifras: tx(remerge.cifras, [{ t: 'pages' }, { t: 'CMS entries' }, { t: 'languages' }, { t: 'months' }]),
    cita: {
      ...remerge.cita!,
      texto: 'Working with them on our website migration was an excellent experience from start to finish. They delivered a complex project, with multiple languages, a custom component architecture and an extensive content migration, with solid precision.',
      rol: 'Global Head of Marketing at Remerge',
    },
    detalles: tx(remerge.detalles, [
      { titulo: 'Four languages, four scripts', texto: 'The same home page in English, Korean, Japanese and Chinese. Each script takes up space differently and the layout holds without shifting; every piece of content was checked by hand in all four.' },
      { titulo: 'Components for marketing', texto: 'One of the components rebuilt for marketing to reuse: goals that open and change their illustration, built on the style variables and the spacing system.' },
    ]),
    mosaico: tm(remerge.mosaico, [
      [['The home page', 'The hero on desktop: the headline’s extra-light serif and the phone assembling with its ads.']],
      [['Four languages, four scripts', 'English, Korean, Japanese and Chinese, checked by hand in all four.'], ['Components for marketing', 'Goals that open and change their illustration, on top of the style variables.']],
      [['Team', 'The extra-light serif and the hairline buttons, also in the focus and team sections.'], ['Recognition', 'Three industry badges in a carousel: Top DSP 2023 by Business of Apps, AppsFlyer and Singular.']],
    ]),
    escala: escalaEn(remerge),
    medido: 'Measured on remerge.io, at 1440 px',
    conclusion: [
      'The site went from Craft CMS to Webflow in two months, in four languages: over thirty pages and 350 CMS entries, with nothing moving out of place.',
      'Its architecture was rebuilt from the original code, with components designed for marketing to reuse. AI sped up the migration; the checking, in all four languages, was done by hand.',
    ],
  },

  isotrol: {
    sector: 'Renewables',
    ubicacion: 'Seville, Spain',
    resumen: 'Software for renewable energy, with the whole world on a map.',
    entradilla: 'Isotrol makes software to manage renewable energy assets all over the world. Its website had to live up to that reach.',
    contexto: [
      'Website design, Webflow development, CMS integration and localisation: from the home page with its brand imagery to the Bluence product pages and the map of their global impact.',
      'A sober site, with full-bleed photography, figures that read from a distance and the brand blue as the only accent.',
    ],
    reto: 'To tell the story of a technical company with a worldwide presence clearly, and to let their team maintain the content.',
    frase: 'Their impact, on a map.',
    paleta: tx(isotrol.paleta, [{ n: 'Background' }, { n: 'Navy' }, { n: 'Electric blue' }, { n: 'Grey' }]),
    tipos: tx(isotrol.tipos, [{ uso: 'Headlines 300, text 400' }]),
    tecnica: ['Design in Figma and development in Webflow', 'CMS integration and Webflow localisation', 'CMS filters with Finsweet and animations with GSAP'],
    cita: {
      ...isotrol.cita!,
      texto: 'We are delighted to be working with you on our projects. The service, execution, deadlines and delivery are excellent, but what really stands out is your knowledge and your ability to improve on our initial idea.',
      rol: 'Marketing Director at Isotrol',
    },
    detalles: tx(isotrol.detalles, [
      { titulo: 'The story that inks in', texto: 'The company presentation goes from grey to ink, word by word, as you scroll down.', pie: 'Recorded on the site as delivered' },
      { titulo: 'Their impact, on a map', texto: 'The figures count up on entering (projects, gigawatts, countries, customers) and the map shows where they are; hovering over a country reveals its project.', pie: 'Recorded on the site as delivered' },
      { titulo: 'Bluence', texto: 'The product, with its own section: solutions you move through with a capture of the software alongside.', pie: 'Recorded on the site as delivered' },
    ]),
    mosaico: tm(isotrol.mosaico, [
      [['Their impact, on a map', 'The figures count up on entering and, hovering over a country, its project appears.']],
      [['Bluence', 'The product, with its section: each solution with its tags, its name in light Aspekta and the software capture.'], ['The story that inks in', 'The presentation goes from grey to ink, word by word, as you scroll.']],
      [['Working at Isotrol', 'Four reasons on cards that alternate text and photography of the team.']],
    ]),
    escala: escalaEn(isotrol),
    medido: 'Measured on isotrol.com, at 1440 px',
    conclusion: [
      'A technical company with a worldwide presence, told in a sober site: full-bleed photography, figures that read from a distance and their impact on a map.',
      'The Webflow CMS and localisation were set up so their team can maintain the content.',
    ],
  },
};
