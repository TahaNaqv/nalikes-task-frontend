import type { FactionCardProps } from "./types";

export function FactionCard({
  faction,
  isSelected,
  onSelect,
}: FactionCardProps) {
  return (
    <div
      className={`min-w-[260px] md:min-w-[300px] h-[180px] md:h-[200px] p-4 md:p-5 bg-black border transition-all duration-300 cursor-pointer flex flex-col transform ${
        isSelected
          ? "border-gray-500 bg-gray-800 scale-105 z-10"
          : "border-gray-800 hover:border-gray-700"
      }`}
      onClick={() => onSelect(faction.id)}
    >
      <h3 className="text-white font-bold text-base md:text-lg mb-2 uppercase">
        {faction.name}
      </h3>
      <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2 overflow-hidden">
        {faction.description}
      </p>
      <div className="flex justify-center mt-auto">
        <img
          src={faction.logo}
          alt={`${faction.name} logo`}
          className="h-10 w-10 md:h-12 md:w-12 object-contain"
        />
      </div>
    </div>
  );
}

