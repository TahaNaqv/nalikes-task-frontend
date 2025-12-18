import { useState } from "react";
import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { ContentSection } from "../components/ContentSection";
import { FactionImageDisplay } from "../components/FactionImageDisplay";
import { FactionGallery } from "../components/FactionGallery";
import { factions } from "../data/factions";

export function meta({}: Route.MetaArgs) {
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
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <Header />

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left: Content Section */}
          <div className="flex items-start order-2 lg:order-1">
            <ContentSection />
          </div>

          {/* Right: Single Image Display */}
          <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-2xl">
              <FactionImageDisplay faction={selectedFaction} />
            </div>
          </div>
        </div>

        {/* Bottom: Faction Gallery */}
        <div className="mt-16">
          <FactionGallery
            factions={factions}
            selectedFactionId={selectedFactionId}
            onSelect={handleFactionSelect}
          />
        </div>
      </div>
    </div>
  );
}
