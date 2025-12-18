import { useEffect, useState } from "react";
import type { Faction } from "./types";

interface FactionImageDisplayProps {
  faction: Faction | null;
}

export function FactionImageDisplay({ faction }: FactionImageDisplayProps) {
  const [displayFaction, setDisplayFaction] = useState<Faction | null>(faction);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (faction && faction.id !== displayFaction?.id) {
      setIsTransitioning(true);
      setIsHovered(false); // Reset hover state when faction changes
      const timer = setTimeout(() => {
        setDisplayFaction(faction);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    } else if (faction) {
      setDisplayFaction(faction);
    }
  }, [faction, displayFaction?.id]);

  if (!displayFaction) return null;

  return (
    <div
      className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover Image Layer - visible when not hovered (logo is embedded in cover image) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
          } ${isTransitioning ? "opacity-0" : ""}`}
      >
        <img
          src={displayFaction.coverImage}
          alt={`${displayFaction.name} cover`}
          className="w-full h-full object-contain blur-sm brightness-[0.4]"
        />
      </div>

      {/* Inner Image Layer - reveals on hover, clean with no overlays */}
      <div
        className={`absolute inset-0 image-reveal-container ${isHovered ? "image-reveal-visible" : "image-reveal-hidden"
          }`}
      >
        <img
          src={displayFaction.innerImage}
          alt={`${displayFaction.name} display`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Horizontal Bars Overlay - always visible on both states */}
      {/* <div className="absolute inset-0 horizontal-bars-overlay pointer-events-none z-20" /> */}
    </div>
  );
}
