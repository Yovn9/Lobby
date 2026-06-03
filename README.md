# 🎮 LOBBY — Gaming Social Platform MVP

> The social platform built for gamers, creators, and gaming culture.

A polished front-end MVP prototype built with Next.js 14, Tailwind CSS, and TypeScript. Dark cyberpunk aesthetic, mobile-first, all mock data — no backend required.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** — [Download here](https://nodejs.org/)
- **npm** (comes with Node)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 📁 Project Structure

```
lobby/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Landing page
│   │   ├── layout.tsx            ← Root layout
│   │   ├── globals.css           ← Global styles + design system
│   │   ├── not-found.tsx         ← 404 page
│   │   ├── auth/
│   │   │   └── page.tsx          ← Sign in / Sign up
│   │   ├── dashboard/
│   │   │   └── page.tsx          ← Main dashboard
│   │   ├── feed/
│   │   │   └── page.tsx          ← Gaming feed
│   │   ├── trending/
│   │   │   └── page.tsx          ← Trending topics
│   │   ├── create/
│   │   │   └── page.tsx          ← Create post
│   │   ├── ai-generator/
│   │   │   └── page.tsx          ← AI content generator
│   │   ├── profile/
│   │   │   └── page.tsx          ← User profile
│   │   └── saved/
│   │       └── page.tsx          ← Saved AI generations
│   ├── components/
│   │   └── layout/
│   │       ├── AppLayout.tsx     ← Shared app shell
│   │       ├── Sidebar.tsx       ← Desktop sidebar nav
│   │       └── BottomNav.tsx     ← Mobile bottom nav
│   └── data/
│       └── mockData.ts           ← All mock data
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## 🗺 Pages

| Route | Page |
|-------|------|
| `/` | Landing page with hero, features & CTA |
| `/auth` | Sign in / Sign up |
| `/dashboard` | Creator dashboard with stats & trending |
| `/feed` | Gaming post feed |
| `/trending` | Trending topics with content angles |
| `/create` | Create a post |
| `/ai-generator` | AI content generator (hook, script, caption, hashtags) |
| `/profile` | User profile with posts, saved, badges |
| `/saved` | Saved AI-generated content library |

---

## 🎨 Design System

- **Font display**: Orbitron (headings, labels)
- **Font body**: Rajdhani (body text)
- **Font mono**: JetBrains Mono (code, tags, numbers)
- **Primary accent**: `#00F5FF` cyan
- **Secondary**: `#8B5CF6` purple
- **Alert**: `#FF2D78` pink
- **Success**: `#00FF87` green
- **Background**: `#080B11`

---

## 🔧 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Google Fonts** (Orbitron, Rajdhani, JetBrains Mono)

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🔮 What's NOT Built Yet (V2 Roadmap)

- [ ] Real authentication (Clerk / NextAuth)
- [ ] Real AI generation (Anthropic API)
- [ ] Livestreaming
- [ ] Marketplace / gear buying/selling
- [ ] Real-time feed (WebSockets)
- [ ] Notifications
- [ ] Mobile app (React Native)
- [ ] Payments

---

Built with ❤️ for gamers. Version 1.0 Beta.
