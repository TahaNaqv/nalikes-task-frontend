# Choose Your Faction

A futuristic, interactive front-end demo that replicates a "Choose Your Faction" interface. Features an interactive 3x3 image grid with hover effects, horizontal scrollable faction gallery, and smooth animations.

## Features

- 🎨 **Dark Futuristic Theme** - Sleek dark interface with Oxanium font
- 🖼️ **Interactive Image Grid** - 3x3 grid with cover/inner image transitions
- 🎯 **Horizontal Slicing Effect** - Unique visual effect on images
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - GPU-accelerated transitions and hover effects
- 🎮 **Interactive Gallery** - Horizontal scrollable faction cards with selection states
- 🔄 **State Synchronization** - Selecting a faction highlights the corresponding image card

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
│   ├── Header.tsx           # Title section ("CHOOSE YOUR FACTION")
│   ├── ContentSection.tsx    # Left text panel with UTILITY button
│   ├── ImageCard.tsx        # Individual image card with hover effects
│   ├── ImageGrid.tsx        # 3x3 grid of interactive image cards
│   ├── FactionCard.tsx      # Bottom gallery faction card
│   ├── FactionGallery.tsx   # Horizontal scrollable faction gallery
│   └── types.ts             # TypeScript type definitions
├── routes/
│   └── home.tsx             # Main page layout
└── app.css                   # Custom animations and effects
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

The build output is in the `build/` directory:
- `build/client/` - Static assets
- `build/server/` - Server-side code

---

Built with React Router, TypeScript, and Tailwind CSS.
