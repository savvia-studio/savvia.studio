// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // RONDA 177 · brandbook y handbook se unifican en /sistema: las direcciones antiguas siguen funcionando
  redirects: {
    // ronda 180 · Sistema = diseño + desarrollo en una página; el Método (antes handbook), aparte
    // 30/10 · Andoni: «la redirección, en un solo salto»: /sistema ya lleva a /storybook (src/pages/sistema), así que van directas
    '/brandbook': '/storybook',
    '/sistema/marca': '/storybook',
    '/sistema/dev': '/storybook#stack',
    '/handbook': '/metodo',
    '/handbook/[slug]': '/metodo/[slug]',
    '/sistema/metodo': '/metodo',
    '/sistema/metodo/[slug]': '/metodo/[slug]',
  },
  site: 'https://savvia.studio',
  // Dos idiomas: castellano en / (el de siempre) e inglés en /en/. El enrutado automático por país vive en vercel.json.
  i18n: { defaultLocale: 'es', locales: ['es', 'en'], routing: { prefixDefaultLocale: false } },
  devToolbar: { enabled: false },
  // 29/10 · lanzamiento: sitemap con los dos idiomas (hreflang); fuera lo que lleva noindex (Método, aún «próximamente», las pruebas y la 404)
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
      // 03/11 · los casos OCULTOS (lanzamiento.ts › CASOS_OCULTOS: publicados sin enlazar, para que los lea Eric) tampoco entran
      filter: (url) => !/\/(metodo|prueba|sistema|brandbook|handbook|404)(\/|$)/.test(new URL(url).pathname) && !/\/proyectos\/(quantus|patchbay)(\/|$)/.test(new URL(url).pathname),
    }),
  ],
  fonts: [
    {
      // Repo público: «Timeless Sans» tiene licencia y no se publica. En savvia.studio va la original; aquí, Instrument Sans (OFL, Google Fonts).
      name: 'Instrument Sans',
      cssVariable: '--font-timeless-sans',
      provider: fontProviders.google(),
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // Repo público: «Timeless Text» tiene licencia y no se publica. En savvia.studio va la original; aquí, Newsreader (OFL, Google Fonts).
      name: 'Newsreader',
      cssVariable: '--font-timeless-text',
      provider: fontProviders.google(),
      weights: ['400 500'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      // Repo público: «Timeless Grotesk» tiene licencia y no se publica. En savvia.studio va la original; aquí, Space Grotesk (OFL, Google Fonts).
      name: 'Space Grotesk',
      cssVariable: '--font-timeless-grotesk',
      provider: fontProviders.google(),
      weights: ['300 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // Repo público: «Family» tiene licencia y no se publica. En savvia.studio va la original; aquí, Instrument Serif (OFL, Google Fonts).
      name: 'Instrument Serif',
      cssVariable: '--font-family-display',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      // Repo público: «ABC Areal» tiene licencia y no se publica. En savvia.studio va la original; aquí, Inter Tight (OFL, Google Fonts).
      name: 'Inter Tight',
      cssVariable: '--font-areal',
      provider: fontProviders.google(),
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // Repo público: «ABC Areal Mono» tiene licencia y no se publica. En savvia.studio va la original; aquí, JetBrains Mono (OFL, Google Fonts).
      name: 'JetBrains Mono',
      cssVariable: '--font-areal-mono',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
    {
      // Textos (hasta la ronda 38)
      name: 'Manrope',
      cssVariable: '--font-manrope',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // Detalles (ronda 17: IBM Plex Mono sustituye a Geist Mono)
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
    {
      // RONDA 83 · la ENTRADA de concierto de la partitura sigue la identidad de NEETY (su librería: titulares en Bricolage Grotesque). Solo se descarga
      // donde se usa (la entrada). OFL (Google Fonts).
      name: 'Bricolage Grotesque',
      cssVariable: '--font-bricolage',
      provider: fontProviders.google(),
      weights: [500, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // RONDA 260 · Andoni: «que salgan debajo de nuestro nombre con unas letras escritas a mano que indiquen qué es cada icono». Caveat (OFL, Google Fonts),
      // solo para esos rótulos de Eric y Andoni.
      name: 'Caveat',
      cssVariable: '--font-mano',
      provider: fontProviders.google(),
      weights: [500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['cursive'],
    },
    {
      // RONDA 155 · la CAPITULAR del Manifiesto (Andoni: «la letra grande de este estilo», una mayúscula caligráfica tipo copperplate). Pinyon Script,
      // OFL (Google Fonts). Solo la capitular la usa y solo se carga en /manifiesto (<Font> en la propia página). Excepción expresa a «sin cursivas».
      name: 'Pinyon Script',
      cssVariable: '--font-capitular',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['cursive'],
    },
    {
      // RONDA 92 · el texto de NEETY en la partitura (su librería: cuerpo en Switzer, de Fontshare; licencia ITF Free Font, uso comercial libre).
      // Solo se descarga donde se usa (el ensayo de su web dentro de la partitura)
      name: 'Switzer',
      cssVariable: '--font-switzer',
      // ronda 231: guardada en el proyecto (src/assets/fonts/switzer/, de la API de Fontshare): el 16/10 un build de Vercel falló al no poder descargarla
      provider: fontProviders.local(),
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/switzer/Switzer-Regular.woff2'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/switzer/Switzer-Medium.woff2'], weight: 500, style: 'normal' },
        ],
      },
    },
    {
      // RONDA 188 · réplica del hero de Neety (tools/r188/neety-hero): su subtítulo va en Inter 400 y el eyebrow en Roboto Mono 500 (RootShell.tsx).
      // OFL (Google Fonts). Solo se cargan donde se usa la réplica.
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // 02/11 · los casos de Quantus y Patchbay con la tipografía VIVA como el de Neety (Andoni: «la parte de typo hacerla igual que el caso de estudio de
      // Neety»): sus familias, de Google Fonts (OFL). Solo se descargan donde se usan (las muestras de cada caso).
      name: 'Schibsted Grotesk',
      cssVariable: '--font-schibsted',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Instrument Sans',
      cssVariable: '--font-instrument',
      provider: fontProviders.google(),
      weights: [400, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
    {
      name: 'Roboto Mono',
      cssVariable: '--font-roboto-mono',
      provider: fontProviders.google(),
      weights: [500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    // ronda 205 · `astro dev` no ejecuta api/: en local la pregunta libre llama a la función de producción (con su clave)
    server: { allowedHosts: ['.ts.net'], proxy: { '/api': { target: 'https://savvia.studio', changeOrigin: true, headers: { Origin: 'https://savvia.studio' } } } },
  },
});
