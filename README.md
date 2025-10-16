# Infinity Globalindo Trade - Landing Page

A modern, responsive landing page built with Next.js 15, TypeScript, and Tailwind CSS with dark mode support.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark Mode** support with next-themes
- 📱 **Responsive Design** for all devices
- 🎯 **TypeScript** for type safety
- 🧩 **Modern UI Components** with shadcn/ui
- ⚡ **Fast Performance** with optimized builds

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode
- **Font**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd infinity_globalindo_trade
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx    # Dark mode toggle component
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### Colors and Theme

The project uses CSS custom properties for theming. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other colors */
}
```

### Content

Edit `src/app/page.tsx` to customize the landing page content, sections, and layout.

### Components

All UI components are in `src/components/ui/` and can be customized or extended as needed.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is licensed under the MIT License.
# Infinity-Globalindo-Trade
