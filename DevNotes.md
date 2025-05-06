# Development Notes

> Documentation is important !!

# Development Stack

- SvelteKit: 2
- Svelte: 5
- TailwindCSS: 4
- `bun` (https://bun.sh) - it's `npm` and `node` for JavaScript/TypeScript runtime. Feel free to use `npm`, `pnpm`, or even `deno` if you wish, but I built this project with `bun` hehe :smile:

```sh
bun i # install dependencies
bun run dev   # development server
bun run build # test build
```

# Design:

- Figma: https://www.figma.com/design/tomzJ7nLU4KCkojf2vM6xq/ECSESS-Website?node-id=1-1375&t=IxVyjZTYTlztEEpK-0

# Libraries I consider to use:

- Styling:
  - [x] SkelentonUI
- Components:
  - [ ] BitsUI
    - I think it's a bit painful and overkill to use this, tho it gives all the accessibility stuff... Could be a feature!
- Icons:
  - [ ] Lucide: https://lucide.dev/icons/
  - [ ] FontAwesome: https://fontawesome.com/icons

# ECSESS Colors

- I didn't use SkeletonUI custom colors or themes. I rely solely on TailwindCSS custom colors variable.

| ECSESS Colours    | HEX     | `var`                |
| ----------------- | ------- | -------------------- |
| Beigey Green      | #a9b7a0 | --color-ecsess-200   |
| Touching Grass    | #5c8a5c | --color-ecsess-400   |
| Simply Green      | #3b6a3a | --color-ecsess-600   |
| Iconic Dark Green | #0A3D2A | --color-ecsess-800   |
| Not quite black   | #1f1f1f | --color-ecsess-black |

# CMS Integration

- Edit `.env` in the project folder (see `.env.example` for template)
- Add the Sanity CMS's **Project ID**
- See the data when you run `bun run dev`
