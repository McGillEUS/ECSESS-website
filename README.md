# ECSESS Website
> Made by ECSESS 2024-2025

# Prerequisite knowledge
- `npm` knowledge. We use `bun` for this project. See https://bun.sh for installation guide.
- Svelte & SvelteKit: Follow the tutorial here: https://svelte.dev/tutorial/svelte/welcome-to-svelte

# Tech stack
## Frontend
- SvelteKit (Svelte v5, Kit v2)
- Frontend options:
  - JavaScript with JSDoc
  - TailwindCSS (v4.0)
  - [Svelte Auto Adapter](https://svelte.dev/docs/kit/adapters)
- [`bun`](https://bun.sh) as Node.js package manager (similar to `npm`, `yarn`, `pnpm`, and `deno` v2)

## Content Management System (CMS)
- Strapi CMS (v5)

# Development guide
- Clone the repo, install dependencies, and start dev environment:
```bash
git clone https://github.com/mcgill-ecsess/ecsess-site.git
bun i
bun run dev
```

- To create a production version of the website:
```bash
bun run build
bun run preview # to preview the production build
```