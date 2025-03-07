# ECSESS Website
> Made by ECSESS 2024-2025

# Tech stack:
- SvelteKit (Svelte v5, Kit v2)
  - Start the project: [`sv`](https://github.com/sveltejs/cli).
    ```bash
    # create a new project in the current directory
    npx sv create
    ```
- Frontend Options:
  - JavaScript with JSDoc (sorry I don't like TypeScript)
  - TailwindCSS (incl. typography, forms)
  - [Svelte Adapter](https://svelte.dev/docs/kit/adapters): node
  - [`bun`](https://bun.sh) as Node.js package manager (similar to `npm`, `yarn`, `pnpm`, and `deno` v2)

- Strapi CMS (v5)
# Dev guide
- Start dev enviornment: (assume `deno`)
```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```
- To create a production version of your app:
```bash
bun run build
bun run preview # to preview the production build
```