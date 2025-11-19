# Pro Starter Site (React + Vite + Tailwind)

A professional, production‑ready starter website for construction/property businesses.
You can run it locally first, then decide on cloud hosting later.

## 1) Install the required software
- **Node.js LTS** (v18 or v20): https://nodejs.org/en
- **Git**: https://git-scm.com/downloads
- **Visual Studio Code** (recommended): https://code.visualstudio.com/

> Check versions in a terminal:
```bash
node -v
npm -v
git --version
```

## 2) Install dependencies
In a terminal inside this folder:
```bash
npm install
```

## 3) Run locally (development server)
```bash
npm run dev
```
It will print a **Local** URL like `http://localhost:5173`. Open it in your browser.

## 4) Make edits
- Pages: `src/pages/`
- Global styles: `src/index.css` (Tailwind CSS)
- Navbar/Footer: `src/ui/`
- Brand name/logo: edit in `src/ui/Navbar.jsx` and `src/ui/Footer.jsx`
- SEO: `index.html` meta tags

## 5) Build for production
```bash
npm run build
npm run preview
```

## 6) Next steps (when you're ready)
- **Deploy (free/easy)**: Vercel / Netlify / GitHub Pages
- **Custom domain + HTTPS**: point DNS to your host
- **Contact form**: connect to Formspree/EmailJS or your API
- **Analytics**: add Google Analytics or Plausible


---
## STEP 3 — Brand & Content Customisation (Follow & fill in placeholders)
1) **Company Name & Logo**

   - Replace `/src/assets/logo.svg` with your own red-icon/black-text logo (keep the same file name for zero-code change).

   - If you prefer PNG: save as `/src/assets/logo.png` and update `<img src="/src/assets/logo.svg"/>` to `.png` in `Navbar.jsx` & `Footer.jsx`.

2) **Navigation & Pages**

   - Edit text on each page under `/src/pages/`.

   - Replace placeholder strings like `YOUR COMPANY`, `SERVICE 1`...

3) **Services List**

   - Open `src/pages/Services.jsx` and rename the six service cards with your own services.

4) **Contact Details**

   - In `src/ui/Footer.jsx`, replace email/phone/address.

   - In `src/pages/Contact.jsx`, edit the helper text.

5) **Brand Colours (Red + Black)**

   - Tailwind `brand` palette is now **red** (see `tailwind.config.js`).

   - For black text accents, just use `text-slate-900` / `text-black` where needed.

6) **Hero Media (Video or Image)**

   - In `src/pages/Home.jsx`, replace the hero `<img>` with your own image or embed a video component. For a full-bleed video hero, I can provide a React snippet if needed.

7) **SEO**

   - Edit `index.html` `<title>` and `<meta name="description">` to your company copy.

8) **Build & Preview**

   ```bash

   npm run build

   npm run preview

   ```

