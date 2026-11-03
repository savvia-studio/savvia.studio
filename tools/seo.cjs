// SEO (2/11/2026) · recorre el sitemap y comprueba cada página como lo haría Google (la receta de wow4ever, `e2e/r6-seo.mjs`, adaptada):
// 200 · un solo <title> · meta description de 50 a 165 caracteres · canónica = la URL · hreflang propio y RECÍPROCO · og:image absoluta que responde ·
// un solo <h1> · sin noindex · JSON-LD que parsea y trae la Organization · robots.txt con el sitemap.
// Uso: node tools/seo.cjs [origen]   → origen por defecto https://savvia.studio (en local: http://localhost:4321 tras `astro preview`; las URLs del sitemap se
// reescriben a ese origen). Sale con código 1 si algo falla.
const ORIGEN = (process.argv[2] || 'https://savvia.studio').replace(/\/$/, '');
const SITIO = 'https://savvia.studio';
const local = (u) => u.replace(SITIO, ORIGEN);
const fallos = [];
const falla = (url, m) => fallos.push(`${url}  →  ${m}`);
const ua = { headers: { 'user-agent': 'Mozilla/5.0 (compatible; savvia-seo-check)' } };
const html = async (u) => { const r = await fetch(local(u), ua); return { status: r.status, text: r.ok ? await r.text() : '' }; };
const uno = (t, re) => { const m = t.match(re); return m ? m[1] : null; };
const todos = (t, re) => [...t.matchAll(re)].map((m) => m[1]);
const des = (s) => s.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
(async () => {
  const robots = await (await fetch(`${ORIGEN}/robots.txt`, ua)).text().catch(() => '');
  if (!/Sitemap:\s*https:\/\/savvia\.studio\/sitemap-index\.xml/.test(robots)) falla('/robots.txt', 'no declara el sitemap');
  const idx = await (await fetch(`${ORIGEN}/sitemap-index.xml`, ua)).text();
  const mapas = todos(idx, /<loc>([^<]+)<\/loc>/g);
  const urls = [];
  for (const m of mapas) urls.push(...todos(await (await fetch(local(m), ua)).text(), /<loc>([^<]+)<\/loc>/g));
  console.log(`${urls.length} URLs en el sitemap (${ORIGEN})`);
  const ogVistas = new Map();
  const paginas = new Map();
  for (const u of urls) paginas.set(u, await html(u));
  for (const [u, pg] of paginas) {
    if (pg.status !== 200) { falla(u, `responde ${pg.status}`); continue; }
    const t = pg.text;
    const titles = todos(t, /<title[^>]*>([^<]*)<\/title>/g);
    if (titles.length !== 1 || !titles[0].trim()) falla(u, `${titles.length} <title>`);
    const desc = uno(t, /<meta name="description" content="([^"]*)"/);
    if (!desc) falla(u, 'sin meta description'); else if (des(desc).length < 50 || des(desc).length > 165) falla(u, `description de ${des(desc).length} caracteres: «${des(desc).slice(0, 60)}…»`);
    const canon = uno(t, /<link rel="canonical" href="([^"]+)"/);
    if (canon !== u) falla(u, `canónica ${canon}`);
    if (/<meta name="robots" content="[^"]*noindex/.test(t)) falla(u, 'lleva noindex y está en el sitemap');
    const h1 = (t.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) falla(u, `${h1} <h1>`);
    const og = uno(t, /<meta property="og:image" content="([^"]+)"/);
    if (!og || !/^https:\/\//.test(og)) falla(u, `og:image ${og}`);
    else if (!ogVistas.has(og)) { const r = await fetch(local(og), { ...ua, method: 'HEAD' }).catch(() => ({ status: 0 })); ogVistas.set(og, r.status); }
    if (og && ogVistas.get(og) !== 200) falla(u, `og:image responde ${ogVistas.get(og)}`);
    // hreflang: los míos, y que la otra versión me devuelva el enlace
    const alts = [...t.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
    const propio = alts.find(([l, h]) => h === u && l !== 'x-default');
    if (alts.length && !propio) falla(u, `hreflang sin la propia URL (${alts.map((a) => a[1]).join(' ')})`);
    for (const [l, h] of alts) {
      if (l === 'x-default' || h === u) continue;
      const otra = paginas.get(h) || (await html(h));
      if (otra.status !== 200) falla(u, `hreflang ${l} → ${h} responde ${otra.status}`);
      else if (!otra.text.includes(`hreflang="${propio ? propio[0] : 'es'}" href="${u}"`)) falla(u, `hreflang no recíproco desde ${h}`);
    }
    // JSON-LD
    const bloques = todos(t, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
    if (!bloques.length) falla(u, 'sin JSON-LD');
    for (const b of bloques) {
      try {
        const j = JSON.parse(b);
        const nodos = j['@graph'] || [j];
        if (!nodos.some((n) => [].concat(n['@type']).includes('Organization'))) falla(u, 'JSON-LD sin Organization');
        for (const n of nodos) if (n['@type'] === 'BreadcrumbList' && n.itemListElement.at(-1).item !== u) falla(u, `migas acaban en ${n.itemListElement.at(-1).item}`);
      } catch (e) { falla(u, `JSON-LD no parsea: ${e.message}`); }
    }
  }
  if (fallos.length) { console.log(`\n${fallos.length} fallos:`); fallos.forEach((f) => console.log(' · ' + f)); process.exit(1); }
  console.log('OK: título, description, canónica, hreflang recíproco, og:image, un h1, JSON-LD con Organization en todas.');
})();
