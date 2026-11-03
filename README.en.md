# savvia.studio

The website of **savvia**, a web studio from Donostia run by Eric and Andoni. Live at **[savvia.studio](https://savvia.studio)**.

[Leer en español](README.md)

This repository is a public copy of the code behind the site. We are sharing it for developers and designers who want to see how a hand-crafted studio site is built, piece by piece, together with an AI agent.

## How it was built

The whole site was built with [Claude Code](https://claude.com/claude-code), in **rounds**. Each round is a request from Eric or Andoni ("the hero needs more air", "make the season change look painted"), worked out by the agent and checked in a real browser.

Three files hold the project together.

- **[`CLAUDE.md`](CLAUDE.md)** is the memory of the project. It is what the agent reads before each session. It keeps the system, the vocabulary, the guardrails and, above all, everything that was tried and rejected, so it does not come back.
- **[`DESIGN.md`](DESIGN.md)** is the design system by Andoni. Colour, type, spacing and components, with exact values.
- **[`docs/registro-rondas.md`](docs/registro-rondas.md)** is the full log of rounds. The literal request, what was done, what was measured and what is pending. It is in Spanish.

## Stack

- [Astro](https://astro.build) 7 with the Fonts API and [Tailwind CSS](https://tailwindcss.com) 4
- Plain TypeScript in the browser, no UI framework
- Hand-written WebGL shaders for the watercolour tree, the roots and the landscape (`src/scripts/estela.ts`)
- Serverless functions on Vercel for the contact brief and the chat (`api/`)
- Blender and Node scripts to prepare images, videos and checks (`tools/`)

## Folders

| Folder | What is inside |
| --- | --- |
| `src/pages` | Routes. Spanish at the root, English under `/en` |
| `src/views` | Full pages, shared by both languages |
| `src/components` | Astro components, one per section or piece |
| `src/scripts` | Browser code. The tree, the seasons, the transitions, the sound |
| `src/data` | All the copy and the project data, in Spanish and English |
| `src/styles` | Tokens and global styles |
| `api` | Vercel functions |
| `tools` | Scripts to process media and to verify the site in Chrome and WebKit |
| `docs` | The log of rounds |

## Run it

You need Node 22.12 or newer.

```sh
npm install
npm run dev
```

The contact form and the chat need their own keys. Copy `.env.example` to `.env` and fill it in. Without keys, the rest of the site works.

## What is different from savvia.studio

This copy is not the full site.

- **Fonts.** The site uses licensed fonts (Family by Klim, ABC Areal by Dinamo, Timeless) that cannot be published. Here they are swapped for free Google Fonts, so the type looks different.
- **Video and audio** are not included. Pieces that play a video or a sound will be empty.
- **Client material** (source files, references, raw captures) is not included.

## Licence

The **code** is under the [MIT licence](LICENSE). Illustrations, logo, copy, photos, videos and project images are **not** covered by it. See [NOTICE.md](NOTICE.md).

## Contact

hola@savvia.studio · [savvia.studio](https://savvia.studio)
