# Pacepard Learn

Vite + React + TypeScript app for Pacepard learning experiences.

## Stack

- [Vite](https://vite.dev/guide/)
- React 19
- TypeScript
- [`@pacepard/ui`](../pacepard-ui) (local `file:` dependency)

## Setup

From this directory:

```bash
pnpm install
pnpm dev
```

Ensure `pacepard-ui` is built so styles and types resolve:

```bash
cd ../pacepard-ui && pnpm build
```

## Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | Typecheck and production build |
| `pnpm preview` | Preview production build |
| `pnpm typecheck` | TypeScript project references check |
| `pnpm lint` | Oxlint |
| `pnpm format` | Prettier write |

## Notes

- Path alias: `@/*` → `src/*`
- Theme: `initTheme('system')` from `@pacepard/ui`
- Local UI package is linked via `"@pacepard/ui": "file:../pacepard-ui"`
