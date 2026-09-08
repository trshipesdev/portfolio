# imliterallyjustanengineer.com

Tara Shipes' portfolio. A single-page React app built as a "time machine": the
site opens in one era and you dial forward and back through four of them, each a
different visual treatment of the same underlying content.

| Era        | What it is                                             |
| ---------- | ------------------------------------------------------ |
| `terminal` | A boot-sequence / CLI entrance (hides a trail minigame) |
| `myspace`  | A 2007 MySpace-style profile — the default landing     |
| `modern`   | The straightforward professional portfolio            |
| `future`   | A glam "after the makeover" version, reached only via the sparkle transition |

Content (résumé, projects, skills, the career timeline) lives in one place:
[`frontend/src/data/portfolio.js`](frontend/src/data/portfolio.js). The era
components only render it.

### Direct entry points

- `/#` — skip the intro, land on the professional (`modern`) page
- `/#~` — land in the terminal with the trail minigame already running

## Develop

```bash
cd frontend
npm install
npm start          # http://localhost:3000
npm test           # watch mode
npm run test:ci    # single run with coverage
npm run build      # production build -> frontend/build
```

Stack: React 19 + Create React App (via CRACO for the `@/` path alias),
Framer Motion for the transitions, Tailwind, `sonner` for toasts.

## Deploy

Vercel, project root `frontend/`, build command `npm run build`, output
`build/`. Pushing to `main` deploys production.
