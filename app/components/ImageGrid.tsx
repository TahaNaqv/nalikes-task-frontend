import type { ImageGridProps } from "./types";
import { ImageCard } from "./ImageCard";

export function ImageGrid({
  factions,
  selectedFactionId,
  onFactionHover,
}: ImageGridProps) {
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 w-full">
      {factions.map((faction) => (
        <ImageCard
          key={faction.id}
          faction={faction}
          isActive={selectedFactionId === faction.id}
          onHover={() => onFactionHover?.(faction.id)}
          onClick={() => onFactionHover?.(faction.id)}
        />
      ))}
    </div>
  );
}

