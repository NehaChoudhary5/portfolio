# Portfolio (Next.js + Tailwind CSS)

A modern, animated developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Ready to deploy on **Vercel** in minutes.

---

## ✨ Features

- ⚡ Next.js 14 App Router (TypeScript)
- 🎨 Tailwind CSS with custom design tokens
- 🌀 Scroll reveal animations via `react-intersection-observer`
- ⌨️ Typewriter role animation
- 🎯 Filterable skills section
- 📱 Fully responsive (mobile-first)
- 🖱️ Custom cursor (desktop)
- 🔝 Back-to-top button
- ✉️ Contact form with success modal
- 🚀 One-click Vercel deploy

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + Google Fonts
│   │   ├── page.tsx            # Main page (assembles all sections)
│   │   └── globals.css         # Global styles + CSS variables
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Preloader.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── BackToTop.tsx
│   │   │   ├── SuccessModal.tsx
│   │   │   └── Reveal.tsx      # Scroll reveal wrapper
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Education.tsx
│   │       ├── Achievements.tsx
│   │       ├── Certifications.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   └── lib/
│       └── data.ts             # ⭐ ALL your content lives here
├── public/
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── vercel.json
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## ✏️ Customizing Your Content

**All content is in one file:** `src/lib/data.ts`

Edit these fields to make it yours:
- `personal` — name, email, phone, links, bio
- `stats` — years experience, projects, bugs fixed
- `skills` — add/remove skills with icons
- `experience` — companies, roles, bullet points
- `projects` — title, description, tech stack, links
- `education` — university, degree, CGPA, coursework
- `achievements` — key wins
- `certifications` — badges

---

## 🌐 Deploy to Vercel (Free)

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```
Follow the prompts. Your site will be live in ~60 seconds.

### Option B — GitHub + Vercel Dashboard
1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Click **Deploy** — that's it!

Vercel auto-detects Next.js and sets everything up for you.

---

## 🔧 Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| react-intersection-observer | Scroll reveal |
| react-icons | Icon library |
| Vercel | Hosting |

---

## 📄 License

MIT — free to use and customize.
