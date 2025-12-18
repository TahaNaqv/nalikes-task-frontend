import type { ImageCardProps } from "./types";

export function ImageCard({
  faction,
  isActive,
  onHover,
  onClick,
}: ImageCardProps) {
  return (
    <div
      className="relative aspect-square overflow-hidden cursor-pointer group"
      onMouseEnter={onHover}
      onClick={onClick}
    >
      {/* Cover Image */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isActive ? "opacity-0" : "opacity-100"
        } ${!isActive ? "blur-[2px] brightness-[0.4]" : ""}`}
      >
        <img
          src={faction.coverImage}
          alt={`${faction.name} cover`}
          className="w-full h-full object-cover image-slice"
        />
      </div>

      {/* Inner Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={faction.innerImage}
          alt={`${faction.name} inner`}
          className="w-full h-full object-cover image-slice"
        />
      </div>

      {/* Logo Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 pointer-events-none ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={faction.logo}
          alt={`${faction.name} logo`}
          className="w-[25%] h-[25%] object-contain"
        />
      </div>
    </div>
  );
}

