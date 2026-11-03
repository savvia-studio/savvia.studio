// SEO (2/11/2026) · lo que Google LEE y no se ve: datos estructurados (JSON-LD) y la descripción del resultado de búsqueda.
// Regla de Andoni: ni el copy visible, ni el <title> (pestaña), ni los Open Graph (vistas previas) se tocan por SEO. Solo `meta description`
// (que solo muestra Google) y este archivo. Nada de artículos ni páginas nuevas: posicionan la home, los casos de estudio y, cuando esté, el handbook.
import type { Lang } from './i18n';
import type { Proyecto } from '../data/proyectos';

export const SITIO = 'https://savvia.studio';
const abs = (ruta: string) => new URL(ruta, SITIO).href;

// La descripción que Google enseña bajo el enlace (meta description): qué hacemos y para quién, sin ciudad (clientes en seis países). ≤ 160 caracteres.
export const DESCRIPCION_BUSCADOR: Record<Lang, string> = {
  es: 'savvia, estudio de diseño y desarrollo web con IA. Webs a medida con desarrollo agéntico, documentadas para que tu equipo las cambie. Casos: Neety, Invopop, Isotrol.',
  en: 'savvia, AI web design and development studio. Custom websites built with agentic development and documented so your team can change them. Neety, Invopop, Isotrol.',
};

// La entidad: el estudio. Lo mismo en todas las páginas, para que Google junte las señales en un solo sitio.
// La dirección es la del aviso legal (ya pública); va como dato de identidad, no como posicionamiento local (Andoni, 2/11: «tenemos clientes de todas partes»).
export const organizacion = (lang: Lang) => ({
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITIO}/#organizacion`,
  name: 'savvia',
  legalName: 'savvia CB',
  url: `${SITIO}/`,
  logo: { '@type': 'ImageObject', url: abs('/savvia-logo.svg') },
  image: abs('/og/otono.jpg'),
  email: 'hola@savvia.studio',
  foundingDate: '2020',
  description: DESCRIPCION_BUSCADOR[lang],
  address: { '@type': 'PostalAddress', streetAddress: 'Real Compañía Guipuzcoana de Caracas 12, 1.º D', postalCode: '20011', addressLocality: 'Donostia-San Sebastián', addressRegion: 'Gipuzkoa', addressCountry: 'ES' },
  areaServed: lang === 'en' ? 'Worldwide' : 'Internacional',
  founder: [
    { '@type': 'Person', '@id': `${SITIO}/#eric`, name: 'Eric Ruiz Molero', givenName: 'Eric', worksFor: { '@id': `${SITIO}/#organizacion` } },
    { '@type': 'Person', '@id': `${SITIO}/#andoni`, name: 'Andoni Martínez Talavera', givenName: 'Andoni', worksFor: { '@id': `${SITIO}/#organizacion` } },
  ],
  knowsAbout: lang === 'en'
    ? ['Web design', 'Agentic web development', 'Design systems', 'Webflow', 'Astro', 'Multilingual websites', 'AI-assisted development']
    : ['Diseño web', 'Desarrollo web agéntico', 'Sistemas de diseño', 'Webflow', 'Astro', 'Webs multidioma', 'Desarrollo asistido por IA'],
});

export const sitioWeb = (lang: Lang) => ({
  '@type': 'WebSite',
  '@id': `${SITIO}/#web`,
  url: `${SITIO}/`,
  name: 'savvia',
  inLanguage: lang === 'en' ? 'en-GB' : 'es-ES',
  publisher: { '@id': `${SITIO}/#organizacion` },
});

// La página en sí (la URL exacta de esta página, con su idioma); `tipo` afina: WebPage, CollectionPage, AboutPage…
export const paginaWeb = (lang: Lang, url: string, nombre: string, descripcion: string, tipo = 'WebPage') => ({
  '@type': tipo,
  '@id': `${url}#pagina`,
  url,
  name: nombre,
  description: descripcion,
  inLanguage: lang === 'en' ? 'en-GB' : 'es-ES',
  isPartOf: { '@id': `${SITIO}/#web` },
  about: { '@id': `${SITIO}/#organizacion` },
});

// El rastro de migas: Inicio › Proyectos › Nombre (Google lo usa para entender la jerarquía; a veces lo pinta en el resultado)
export const migas = (items: { nombre: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.nombre, item: it.url })),
});

// Las preguntas de la home, tal como están en preguntas.json (sin tocar el copy). OJO: desde 2023 Google solo pinta el resultado enriquecido de FAQ
// a webs de salud y administración; aquí vale para que entienda de qué va la página, no para una caja de preguntas en el resultado.
export const preguntasFrecuentes = (lista: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: lista.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\s*\n+\s*/g, ' ') } })),
});

// Un caso de estudio: la pieza que posiciona. CreativeWork hecho por savvia SOBRE el cliente (Organization con su web), con el sector como palabra clave.
export const casoDeEstudio = (lang: Lang, p: Proyecto, url: string, imagen: string) => ({
  '@type': 'CreativeWork',
  '@id': `${url}#caso`,
  url,
  name: p.titulo ?? (lang === 'en' ? `${p.nombre}, a savvia project` : `${p.nombre}, un proyecto de savvia`),
  headline: p.titular ?? p.nombre,
  description: descripcionCaso(lang, p),
  image: imagen,
  inLanguage: lang === 'en' ? 'en-GB' : 'es-ES',
  genre: lang === 'en' ? 'Case study' : 'Caso de estudio',
  keywords: [p.sector, ...p.servicios].filter(Boolean).join(', '),
  ...(p.anio ? { dateCreated: p.anio } : {}),
  author: { '@id': `${SITIO}/#organizacion` },
  creator: { '@id': `${SITIO}/#organizacion` },
  publisher: { '@id': `${SITIO}/#organizacion` },
  about: { '@type': 'Organization', name: p.nombre, ...(p.url ? { url: p.url } : {}) },
  isPartOf: { '@id': `${SITIO}/#web` },
});

// La descripción del caso para Google: el cliente y su sector delante (es lo que busca quien se le parece), luego la línea del caso. ≤ 165 caracteres.
export const descripcionCaso = (lang: Lang, p: Proyecto) => {
  const cabeza = lang === 'en' ? `savvia case study for ${p.nombre}${p.sector ? ` (${p.sector})` : ''}.` : `Caso de estudio de savvia para ${p.nombre}${p.sector ? ` (${p.sector})` : ''}.`;
  return recortar(`${cabeza} ${p.resumen}`, 165);
};

const recortar = (t: string, max: number) => (t.length <= max ? t : t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…');

// El JSON para el <script type="application/ld+json">: un @graph con la entidad y lo que aporte cada página. `<` escapado: dentro de un <script>
// un «</script>» en un texto cerraría la etiqueta.
export const jsonLd = (nodos: object[]) => JSON.stringify({ '@context': 'https://schema.org', '@graph': nodos }).replace(/</g, '\\u003c');
