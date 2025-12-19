import { useState } from "react";
import type { Route } from "./+types/home";
import { ContentSection } from "../components/ContentSection";
import { FactionImageDisplay } from "../components/FactionImageDisplay";
import { FactionGallery } from "../components/FactionGallery";
import { factions } from "../data/factions";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Choose Your Faction" },
    {
      name: "description",
      content: "Select your faction and pledge your allegiance",
    },
  ];
}

export default function Home() {
  // Initialize with first faction selected
  const [selectedFactionId, setSelectedFactionId] = useState<number | null>(
    1
  );

  const handleFactionSelect = (id: number) => {
    setSelectedFactionId(id);
  };

  const selectedFaction = factions.find((f) => f.id === selectedFactionId) || null;

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left: Content Section */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <ContentSection />
          </div>

          {/* Right: Single Image Display */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="w-full">
              <FactionImageDisplay faction={selectedFaction} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Faction Gallery - Full Width */}
      <div className="w-full mt-2">
        <FactionGallery
          factions={factions}
          selectedFactionId={selectedFactionId}
          onSelect={handleFactionSelect}
        />
      </div>
    </div>
  );
}
