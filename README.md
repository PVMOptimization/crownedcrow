# Crowned Crow Tattoo Studio

Editorial / atelier-style website for **Crowned Crow Tattoo Studio LLC** — a small Fort Worth tattoo studio (Sierra & Josh).

Built with **Vite + React + TypeScript + Tailwind + Framer Motion**.

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

To build for production:

```bash
npm run build
```

The static site lands in `dist/`.

---

## Deploy to Cloudflare Pages (via GitHub)

1. **Push this folder to a new GitHub repo.**

   ```bash
   git init
   git add .
   git commit -m "Initial commit — Crowned Crow site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/crowned-crow.git
   git push -u origin main
   ```

2. **In Cloudflare Pages:**
   - Go to **Workers & Pages → Create → Pages → Connect to Git**.
   - Pick the `crowned-crow` repo.
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Framework preset:** *None* (or *Vite* — both work).
   - Click **Save and Deploy**.

3. Cloudflare will give you a `*.pages.dev` URL within ~60 seconds. Add your custom domain in the Pages project settings.

`public/_headers` ships sensible cache + security headers for Cloudflare Pages.

---

## Editing content

Almost everything is in plain string literals inside the components — no CMS needed. Quick map:

| What                         | Where                                  |
|------------------------------|----------------------------------------|
| Open / closed hours logic    | `src/components/StatusBar.tsx`         |
| Hours displayed in footer    | `src/components/Visit.tsx` (`HOURS_DISPLAY`) |
| Phone number                 | search the repo for `8177370770`       |
| Instagram handle             | search the repo for `crownedcrowtattoo`|
| Reviews                      | `src/components/Words.tsx` (`REVIEWS`) |
| Gallery plates               | `src/components/Gallery.tsx` (`PLATES`)|
| Address                      | `src/components/Visit.tsx`             |
| Manifesto text               | `src/components/Manifesto.tsx`         |

### Replacing the placeholder gallery art

Each plate in `Gallery.tsx` is currently an inline SVG. To swap one for a photo:

```tsx
// before
{ id: 'i', ..., art: PlateA, ... }

// after
{
  id: 'i',
  ...,
  art: <img src="/gallery/sierra-rose.jpg" alt="" className="w-full h-auto" />,
  ...,
}
```

Drop the JPGs into `public/gallery/` and they'll be served as `/gallery/<filename>`.

### Hooking the booking form to a real endpoint

`src/components/Ritual.tsx` has a `submit()` function that currently just shows the confirmation state.  
Replace its body with a real `fetch()` to:

- A Cloudflare Pages Function (`functions/api/book.ts`)
- A Formspree / Basin / Web3Forms endpoint
- An email API like Resend

```ts
const submit = async () => {
  await fetch('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSubmitted(true)
}
```

---

## Design notes

- **Palette:** parchment cream + ink black + oxblood. No purple-to-blue gradients, no glowing orbs.
- **Type:** Fraunces (display, variable), Newsreader (body), Caveat (handwritten margins). No Inter.
- **Layout:** intentionally asymmetric. The 12-column grid offsets each gallery plate differently.
- **Motion:** controlled. Sections enter on scroll with varied easing — not a uniform fade. Micro-interactions only on the primary CTA and clickable cards.
- **Sticky CTA:** appears after 700px of scroll, never before. The floating "?" button opens a quick contact card.
