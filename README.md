# Choose Your Faction

A futuristic, interactive front-end demo that replicates a "Choose Your Faction" interface. Features a single large image display with interactive hover reveal animation, horizontal scrollable faction gallery, and smooth transitions.

## Features

- 🎨 **Dark Futuristic Theme** - Sleek dark gradient background (black to grey) with Oxanium font
- 🖼️ **Interactive Image Display** - Single large image that changes based on faction selection
- 🎯 **Sequential Bar-by-Bar Reveal Animation** - Hover effect with 6 horizontal sections revealing sequentially from center-out (120ms delay between sections)
- 🖼️ **Cover/Inner Image System** - Cover image with embedded logo fades out on hover, revealing inner image through clip-path animation
- 🔘 **UTILITY Button** - Styled button with white background, black text, and cut bottom-right corner
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - GPU-accelerated transitions and hover effects using CSS clip-path
- 🎮 **Interactive Gallery** - Full-width horizontal scrollable faction cards with hidden scrollbar
- 🎯 **Auto-Scroll to Selection** - Gallery automatically scrolls to center the selected faction card
- 🔘 **Navigation Dots** - Visual indicators for faction selection with smooth transitions
- 🔄 **State Synchronization** - Selecting a faction updates the main image display instantly

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Tech Stack

- **React Router v7** - Server-side rendering and routing
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Oxanium Font** - Futuristic typography
- **Vite** - Fast build tool and dev server

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Technical Details

### Sequential Reveal Animation

The image hover reveal effect is implemented using CSS `clip-path` with a sequential animation system:

- **6 Horizontal Sections**: The inner image is divided into 6 equal horizontal sections
- **Center-Out Reveal**: Each section reveals from the center (50% left/right) to full width (0% left/right)
- **Sequential Timing**: Each section has a 120ms delay, creating a cascading effect from top to bottom
- **Smooth Transitions**: Uses `cubic-bezier(0.4, 0, 0.2, 1)` easing for natural motion
- **Bidirectional**: The unreveal animation follows the same top-to-bottom sequence

### Cover/Inner Image System

- **Cover Image**: Displays when not hovered, contains embedded logo, fades out with opacity transition
- **Inner Image**: Split into 6 sections, each with independent clip-path animation
- **Object Contain**: Images use `object-contain` to ensure full visibility without cropping
- **State Management**: React state manages hover state and faction transitions

### Dark Gradient Background

The application uses a fixed linear gradient background:
- Gradient: `linear-gradient(180deg, #000000 0%, #0f0f0f 50%, #1a1a1a 100%)`
- Fixed attachment ensures consistent appearance during scroll
- Applied globally via CSS custom properties

### Gallery Features

- **Full-Width Layout**: Gallery spans entire screen width with no side padding
- **Hidden Scrollbar**: Custom CSS hides scrollbar while maintaining scroll functionality
- **Auto-Scroll**: Selected card automatically centers in viewport
- **Scale Effect**: Selected cards scale to 105% with proper z-index layering
- **Navigation Dots**: Visual indicators that expand when selected

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Project Structure

```
app/
├── data/
│   └── factions.ts          # Faction data with names, descriptions, images, logos
├── components/
│   ├── ContentSection.tsx    # Left content panel with heading, description, and UTILITY button
│   ├── FactionImageDisplay.tsx # Main image display with sequential hover reveal animation
│   ├── FactionGallery.tsx   # Full-width horizontal scrollable faction gallery
│   ├── FactionCard.tsx      # Individual faction card component for the gallery
│   └── types.ts             # TypeScript type definitions
├── routes/
│   └── home.tsx             # Main page layout orchestrating all components
└── app.css                   # Custom animations, gradient background, and scrollbar styling
```

## Factions

The application displays 9 unique factions:

1. **SENTINELS** - A global peacekeeping force for the public good.
2. **THE CELESTE GROUP** - A conglomerate of energy firms in a joint venture with private intelligence.
3. **OX898** - A rag-tag group of dissidents and extremists, with the cause of freedom of information and equality.
4. **PATRIOTS DIVISION** - An American security company specializing in arms manufacturing.
5. **LEBENSKRAFT ARMORERS** - A global materials science firm that develops next-generation robots.
6. **SANZU BIOMEDICAL** - A triumvirate of leading organizations in technology, science, and government.
7. **JUNPEI LIGHT & POWER** - Asia's largest energy multinational and specialist in fusion technology.
8. **DEADEYE ENFORCEMENT** - A global network composed of ex-NATO members.
9. **THE SEEKER MEGACHURCH** - A leading media corp that is also the face of a modern neo-religion.

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect React Router
4. Deploy!

**Live Demo**: [Add your Vercel deployment link here]

The build output is in the `build/` directory:
- `build/client/` - Static assets
- `build/server/` - Server-side code

---

Built with React Router, TypeScript, and Tailwind CSS.
