# Speak Smart V2 — AI Agent Context

## What is this project?
A single-page React landing page for **Speak Smart** — an English-speaking course targeting rural Indian students. Content is bilingual (Marathi + English). Client is Reshma Dabholkar Damari.

---

## Tech Stack
- **React 18 + Vite + TypeScript**
- **Tailwind CSS** only — no CSS modules, no styled-components
- **Routing:** React Router v6, single route `/` → `src/pages/Index.tsx`
- **UI:** Radix UI primitives (`src/components/ui/`), Lucide React icons
- **Utility:** `cn()` in `src/lib/utils.ts` (clsx + tailwind-merge)
- **Path alias:** `@` → `src/`

---

## Project Structure
```
src/
  pages/Index.tsx          ← Main page — all sections assembled here
  components/              ← One file per section
  components/ui/           ← Radix UI primitives (do not modify)
  config/
    productsConfig.ts      ← 4 product cards data (Drive links are # placeholders)
    feedbackConfig.ts      ← 6 testimonials (3 text + 3 video, Drive links are # placeholders)
  lib/utils.ts             ← cn() helper
public/                    ← Static images
```

---

## Page Section Order (top → bottom)
| # | Section | Component |
|---|---------|-----------|
| 1 | Navbar | `Navbar.tsx` |
| 2 | Running Banner | Inline `NotificationBar` in `Index.tsx` |
| 3 | Hero headings + 5-Star Review | Inline in `Index.tsx` |
| 4 | Product Cards (2×2 grid) | `ProductCards.tsx` |
| 5 | Course Points + Vision | `CoursePointsAndVision.tsx` |
| 6+7 | Introduction + Why Speak Smart (side by side) | Inline in `Index.tsx` + `WhySpeakSmart.tsx` |
| 8 | As Seen In | `AsSeenIn.tsx` |
| 9+10 | कोर्समध्ये काय शिकायला मिळेल + Highlights | `CourseHighlights.tsx` |
| 11 | Founder + Co-Founder | `FounderSection.tsx` |
| 12 | Testimonials | `TestimonialSection.tsx` |
| 13 | Sticky Banner | `StickyBanner.tsx` |
| 14 | Footer | `Footer.tsx` |

---

## Design System
- **Background:** `bg-black` throughout the page — no per-section color overrides
- **Section separation:** `<Divider />` component (`border-t border-white/[0.06]`) between sections
- **Dark cards:** `bg-[#1a1a1a] border border-white/[0.06] rounded-2xl`
- **White cards:** `bg-white rounded-2xl` (Introduction, Testimonials text cards)
- **Orange accent:** `orange-500` (#f97316) — used for headings, badges, CTAs, borders
- **Section headings pattern:** `<span className="text-white">word </span><span className="text-orange-500">word</span>`
- **Container:** `max-w-6xl mx-auto`
- **Mobile first:** every section uses `grid-cols-1 md:grid-cols-2` (or md:grid-cols-3)

---

## Public Assets
| File | Used In |
|------|---------|
| `/logo.png` | Navbar + Footer |
| `/product-1.png` → `/product-4.png` | ProductCards (1920×1080) |
| `/mirror-child.jpeg` | CoursePointsAndVision (Vision card placeholder) |
| `/why-speak-smart.jpeg` | WhySpeakSmart (A4 portrait, 1892×2560) |
| `/founder.png` | FounderSection |
| `/co-founder.jpeg` | FounderSection |
| `/footer-banner.jpg` | StickyBanner (1600×400) |

---

## Pending Client Inputs (placeholders in code)
- Google Drive links for 4 product courses → `src/config/productsConfig.ts` (`driveLink: "#"`)
- Google Drive links for 3 video testimonials → `src/config/feedbackConfig.ts` (`driveLink: "#"`)
- Sub-heading for "कोर्समध्ये काय शिकायला मिळेल" → `CourseHighlights.tsx` (marked with TODO comment)
- Final portrait image for Vision card (currently `/mirror-child.jpeg`)

---

## Archived / Removed Sections
- **TargetAudience.tsx** — file exists, not imported anywhere, safe to delete
- **CountdownTimer.tsx** — not used in V2, safe to delete
- **TestimonialGrid.tsx** — replaced by `TestimonialSection.tsx`, safe to delete
- **FeatureGrid.tsx** — entire component commented out; "Your Trainer" layout preserved as reference for FounderSection

---

## Key Implementation Notes
- **Navbar CTA:** `mailto:speakenglishwithreshmad@gmail.com?subject=Book%20a%20Free%20Demo`
- **Product card overlay:** tight frosted rectangle (`bg-black/70 backdrop-blur-md`) at right-center — NOT a full-width overlay
- **WhySpeakSmart:** no own `<section>` tag — rendered inside Index.tsx alongside Introduction in a 2-col grid
- **FounderSection:** wrapped in `border border-orange-500/25 rounded-3xl bg-[#0d0d0d]` container
- **Adding testimonials:** only update `src/config/feedbackConfig.ts` — no component changes needed
- **Adding products:** only update `src/config/productsConfig.ts`

---

## Run / Dev
```bash
npm run dev      # http://localhost:8080
npm run build    # production build
npx tsc --noEmit # type check only
```
