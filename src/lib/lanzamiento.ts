// LANZAMIENTO (oct 2026) · Eric y Andoni: «salimos con la Home, el Manifiesto y el caso de Neety; el resto, “próximamente” o fuera».
// Una sola lista manda: los casos que se publican. Para abrir otro, añadir su slug aquí (el resto del recorte se deshace solo).
// Las demás páginas (portfolio, lab, sistema, método) redirigen a la home; sus enlaces del menú salen apagados («pronto»).
// 26/10 · Eric: «que vuelva el menú entero» (salir con todo): RECORTE = false abre todas las páginas y casos; true vuelve al recorte.
export const RECORTE = false;
// 28/10 · Andoni: «el Método, que no se pueda abrir esa página de ninguna manera» (aún no salimos con él): /metodo vuelve a la home y sus capítulos
// no se generan (404). Para abrirlo, true (el menú y el pie lo siguen marcando «próximamente» hasta darle href en home.ts › nav.mas).
export const METODO_ABIERTO = false;
export const CASOS_PUBLICOS = ['neety'];
// 28/10 · Eric: «SOLO NEETY»: con RECORTE = false se generaban los nueve casos (borradores) y la home y el menú enlazaban a Quantus, Patchbay y Playground.
// Ahora un caso existe (página, «Ver caso de estudio», menú) solo si está en CASOS_LISTOS, con o sin recorte.
// 02/11 · los casos en BORRADOR (Quantus y Patchbay, rehechos con la estructura del de Neety) existen solo en el servidor de desarrollo, para revisarlos en
// local; en la build no se generan ni se enlazan. Para estrenar uno, pasarlo a CASOS_LISTOS.
export const CASOS_BORRADOR: string[] = [];
// 03/11 · Andoni: «lo subimos a producción ya, pero de momento no enlazamos con el portfolio: primero quiero que los lea Eric». Un caso OCULTO se genera en la build
// (su URL responde) pero no se enlaza desde ningún sitio (home, menú, portfolio, visor, anterior/siguiente), no entra en el sitemap y lleva noindex. Para estrenarlo,
// pasarlo a CASOS_LISTOS.
export const CASOS_OCULTOS: string[] = ['quantus', 'patchbay'];
// esPublico = se enlaza y se indexa; existe = se genera su página (los públicos, los ocultos y, solo en desarrollo, los borradores)
export const esPublico = (slug: string) => (CASOS_LISTOS.includes(slug) || (import.meta.env.DEV && CASOS_BORRADOR.includes(slug))) && (!RECORTE || CASOS_PUBLICOS.includes(slug));
export const existe = (slug: string) => esPublico(slug) || CASOS_OCULTOS.includes(slug) || (import.meta.env.DEV && CASOS_BORRADOR.includes(slug));
// 26/10 · Eric: en el portfolio, la tarjeta lleva a su CASO solo si el caso es definitivo («todavía no lo es ninguno»); si no, abre el visor (como en la home).
// Para estrenar un caso en el portfolio, añadir aquí su slug.
// 28/10 · Eric: Neety ya tiene caso: en la home y en /proyectos su tarjeta lleva al caso (no al visor) y lo anuncia con una flecha en la cápsula de cristal (en lugar de la cámara)
export const CASOS_LISTOS: string[] = ['neety'];
