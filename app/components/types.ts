import type { Faction } from "../data/factions";

export type { Faction };

export interface ImageCardProps {
  faction: Faction;
  isActive: boolean;
  onHover?: () => void;
  onClick?: () => void;
}

export interface FactionCardProps {
  faction: Faction;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export interface ImageGridProps {
  factions: Faction[];
  selectedFactionId: number | null;
  onFactionHover?: (id: number) => void;
}

export interface FactionGalleryProps {
  factions: Faction[];
  selectedFactionId: number | null;
  onSelect: (id: number) => void;
}

export interface FactionImageDisplayProps {
  faction: Faction | null;
}

