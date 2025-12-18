import { useEffect, useState } from "react";
import type { Faction } from "./types";

interface FactionImageDisplayProps {
  faction: Faction | null;
}

export function FactionImageDisplay({ faction }: FactionImageDisplayProps) {
  const [displayFaction, setDisplayFaction] = useState<Faction | null>(faction);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (faction && faction.id !== displayFaction?.id) {
      setIsTransitioning(true);
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
    <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden">
      {/* Inner Image */}
      <div className="absolute inset-0">
        <img
          src={displayFaction.innerImage}
          alt={`${displayFaction.name} display`}
          className={`w-full h-full object-cover image-slice transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Logo Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={displayFaction.logo}
          alt={`${displayFaction.name} logo`}
          className={`w-[35%] h-[35%] object-contain transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
}

