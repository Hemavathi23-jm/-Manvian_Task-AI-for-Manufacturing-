# The Intelligent Factory — AI for Manufacturing

A high-performance, responsive React landing page and interactive event registration web application replicating [The Intelligent Factory — AI for Manufacturing](https://intelligent-factory-2--7n8infbm.preview.emergentagent.com/?utm_source=share).

## 🚀 Features & Components

- **Header / Navigation (`Navbar.jsx`)**: Sticky blurred glassmorphism navbar with branding logo, smooth section scroll links (`About`, `What You'll Learn`, `Speaker`, `FAQ`), mobile drawer menu, and primary "Register Free" CTA.
- **Hero Section (`Hero.jsx`)**:
  - Live countdown timer (`useCountdown.js`) targeting the event date (10 December 2026, 6:00 PM IST).
  - Editorial headline typography with smooth spring animations.
  - Event metadata cards (Date, Day & Time, Format, Registration Price).
  - Parallax interactive robotic cell preview frame (`Fig. 01 — Automated Assembly Line`).
  - Direct CTA buttons with smooth scroll routing.
- **Marquee Ticker (`Marquee.jsx`)**: Infinite horizontal ticker displaying Industry 4.0 pillars (`Predictive Maintenance`, `Computer Vision`, `Production Optimisation`, etc.) with hover pause and reduced-motion support.
- **Why AI Matters (`WhyAIMatters.jsx`)**: Asymmetrical bento grid highlighting 4 industrial AI use cases with technical crosshair corner accents and hover micro-interactions.
- **Curriculum & Agenda (`Agenda.jsx`)**:
  - Sticky "Key Takeaways" panel alongside automated fabrication imagery (`Fig. 02`).
  - Timed session breakdown (00–75 MIN) with hover highlights and directional arrows.
- **Speaker Spotlight (`Speaker.jsx`)**: Profile card for Dr. Kavya Menon (Industrial AI Strategist) featuring technical metadata, biography, and interactive expertise tags.
- **Who Should Attend (`Audience.jsx`)**: 5-column breakdown of target industry roles (Manufacturing Managers, Production Engineers, Operations Leaders, Technology Professionals, Students).
- **Interactive Registration Flow (`Registration.jsx` & `ThankYou.jsx`)**:
  - Complete form with field validation (Full Name, Work Email, Company/College, Job Role, Experience Level).
  - Live feedback and validation states.
  - Smooth animated transition to the confirmation screen (`ThankYou.jsx`) with animated SVG badge and event summary.
- **FAQ Accordion (`FAQ.jsx`)**: Accessible animated accordion with smooth expanding/collapsing answers (`AnimatePresence`).
- **Footer (`Footer.jsx`)**: Minimalist industrial footer with contact email, date recap, and copyright notice.
- **Smooth Scrolling (`scroll.js`)**: Powered by Lenis for buttery-smooth inertial scrolling.

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v4 with custom industrial palette (`steel`, `steeldeep`, `ivory`, `machine`, `copper`, `graphite`) and typography (`Space Grotesk`, `IBM Plex Sans`, `IBM Plex Mono`)
- **Animation**: Framer Motion 11
- **Icons**: Lucide React
- **Smooth Scroll**: Lenis

## 📦 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node.js 22)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build & Preview

```bash
npm run build
npm run preview
```
