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

  const sectionHeight = 100 / 6;
  const numSections = 6;
  const delayPerSection = 120; // ms delay between each section

  // Create section configurations
  const sections = Array.from({ length: numSections }, (_, i) => {
    const topPercent = i * sectionHeight;
    const bottomPercent = 100 - (i + 1) * sectionHeight;
    return {
      top: topPercent,
      bottom: bottomPercent,
      delay: i * delayPerSection,
    };
  });

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
          className="w-full h-full object-contain"
        />
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          className="absolute inset-0 image-section"
          style={{
            clipPath: isHovered
              ? `inset(${section.top}% 0% ${section.bottom}% 0%)`
              : `inset(${section.top}% 50% ${section.bottom}% 50%)`,
            transitionDelay: `${section.delay}ms`,
          }}
        >
          <img
            src={displayFaction.innerImage}
            alt={`${displayFaction.name} display section ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
