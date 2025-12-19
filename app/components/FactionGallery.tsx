import { useRef, useEffect } from "react";
import type { FactionGalleryProps } from "./types";
import { FactionCard } from "./FactionCard";

export function FactionGallery({
  factions,
  selectedFactionId,
  onSelect,
}: FactionGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedCardRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to selected card
  useEffect(() => {
    if (selectedCardRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = selectedCardRef.current;
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      const scrollLeft =
        card.offsetLeft -
        container.offsetLeft -
        container.clientWidth / 2 +
        card.clientWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [selectedFactionId]);

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
      >
        {factions.map((faction) => (
          <div
            key={faction.id}
            ref={selectedFactionId === faction.id ? selectedCardRef : null}
          >
            <FactionCard
              faction={faction}
              isSelected={selectedFactionId === faction.id}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {factions.map((faction) => (
          <button
            key={faction.id}
            onClick={() => onSelect(faction.id)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedFactionId === faction.id
                ? "bg-white w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Select ${faction.name}`}
          />
        ))}
      </div>
    </div>
  );
}

