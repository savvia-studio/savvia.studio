# savvia.studio

The website of savvia, Eric and Andoni's studio.

At savvia we orchestrate the design and development of websites with AI. For us, agentic development is less a way of building than a way of delivering. We hand over every website connected to AI, so the client can keep evolving it while respecting everything we have worked on together.

That only works with guardrails. Every design, motion and component decision is recorded in the system, which is the source of truth of the website. In practice, it is a set of .md files. This repository is that system applied to our own website.

AI is the foundation. The judgement is still ours.

[Leer en español](README.md)

We are sharing the code for developers and designers who want to see how a bespoke studio website is built, hand in hand with an AI agent. You can see it live at [savvia.studio](https://savvia.studio).

## How it was built

We built the whole website with Claude Code, in rounds. Each round starts with a request from Eric or Andoni ("the hero needs more air", "make the season change look like it is being painted"). The agent works it out and we check it in a real browser.

Three files hold the project together.

- **`CLAUDE.md`** is the memory of the project and the first thing the agent reads in every session. It keeps the system, the vocabulary and the guardrails. And, above all, everything we tried and rejected, so we do not go back to it.
- **`DESIGN.md`** is Andoni's design system. Colour, type, spacing and components, with their exact values.
- **`docs/registro-rondas.md`** is the full log of rounds. The request as it was made, what was done, what was measured and what was left pending. It is in Spanish.

## Stack

- Astro 7, with its Fonts API, and Tailwind CSS 4
- TypeScript in the browser, no framework
- Hand-written WebGL shaders for the watercolour tree, the roots and the landscape (`src/scripts/estela.ts`)
- Serverless functions on Vercel for the contact brief and the conversation (`api/`)
- Blender and Node scripts to prepare images and videos and to test the website (`tools/`)

## Structure

| Folder | What is inside |
| --- | --- |
| `src/pages` | Routes. Spanish at the root and English under `/en` |
| `src/views` | Full pages, shared by both languages |
| `src/components` | Astro components, one per section or piece |
| `src/scripts` | Browser code. The tree, the seasons, the transitions and the sound |
| `src/data` | All the copy and the project data, in Spanish and English |
| `src/styles` | Tokens and global styles |
| `api` | Vercel functions |
| `tools` | Scripts to process media and test the website in Chrome and WebKit |
| `docs` | The log of rounds |

## Getting started

You need Node 22.12 or later.

```bash
npm install
npm run dev
```

The contact form and the conversation need their own keys. Copy `.env.example` to `.env` and fill it in. Without keys, the rest of the website works the same.

## Differences from savvia.studio

This copy is not the full website.

- **Typefaces.** The website uses licensed fonts (Family by Klim, ABC Areal by Dinamo and Timeless) that we cannot publish. Here they have been replaced with free Google Fonts, so the type will look different.
- **Video and audio.** Not included. Pieces that play a video or a sound will appear empty.
- **Client material.** Source files, references and raw captures are not included either.

## Licence

The code is under the MIT licence. Illustrations, logo, copy, photos, videos and project images are not covered by it. More details in [NOTICE.md](NOTICE.md).

## Contact

hola@savvia.studio · [savvia.studio](https://savvia.studio)
