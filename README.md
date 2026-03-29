# Speak Smart - English Speaking Course

Landing page for **Speak Smart**, an English communication course designed for rural Maharashtra. The course helps students, teachers, working professionals, and homemakers speak English confidently.

🌐 **Live:** [www.speak-smart.co.in](https://www.speak-smart.co.in)

## Tech Stack

- **React 18** + TypeScript
- **Vite 7** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide Icons** - Icons
- **React Router** - Routing
- **Sonner** - Toast notifications

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Arkan-Khan/Speak-Smart.git
cd Speak-Smart

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (button, toast, etc.)
│   ├── AsSeenIn.tsx     # Media mentions section
│   ├── CountdownTimer.tsx
│   ├── CourseHighlights.tsx
│   ├── FeatureGrid.tsx
│   ├── Footer.tsx
│   ├── TargetAudience.tsx
│   └── TestimonialGrid.tsx
├── hooks/
│   └── use-toast.ts     # Toast notification hook
├── lib/
│   └── utils.ts         # Utility functions
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── App.tsx              # App entry with routing
├── main.tsx             # React entry point
└── index.css            # Global styles
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 8080 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

The site is deployed on **Vercel**. Any push to `main` triggers automatic deployment.

To deploy manually:
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## License

MIT License - see [LICENSE](LICENSE) for details.