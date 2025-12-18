export interface Faction {
  id: number;
  name: string;
  description: string;
  coverImage: string;
  innerImage: string;
  logo: string;
}

export const factions: Faction[] = [
  {
    id: 1,
    name: "SENTINELS",
    description: "A global peacekeeping force for the public good.",
    coverImage: "/main-images/1-cover.png",
    innerImage: "/main-images/1-in.png",
    logo: "/logos/1.svg",
  },
  {
    id: 2,
    name: "THE CELESTE GROUP",
    description: "A conglomerate of energy firms in a joint venture with private intelligence.",
    coverImage: "/main-images/2-cover.png",
    innerImage: "/main-images/2-in.png",
    logo: "/logos/2.svg",
  },
  {
    id: 3,
    name: "OX898",
    description: "A rag-tag group of dissidents and extremists, with the cause of freedom of information and equality.",
    coverImage: "/main-images/3-cover.png",
    innerImage: "/main-images/3-in.png",
    logo: "/logos/3.svg",
  },
  {
    id: 4,
    name: "PATRIOTS DIVISION",
    description: "An American security company specializing in arms manufacturing.",
    coverImage: "/main-images/4-cover.png",
    innerImage: "/main-images/4-in.png",
    logo: "/logos/4.svg",
  },
  {
    id: 5,
    name: "LEBENSKRAFT ARMORERS",
    description: "A global materials science firm that develops next-generation robots.",
    coverImage: "/main-images/5-cover.png",
    innerImage: "/main-images/5-in.png",
    logo: "/logos/5.svg",
  },
  {
    id: 6,
    name: "SANZU BIOMEDICAL",
    description: "A triumvirate of leading organizations in technology, science, and government.",
    coverImage: "/main-images/6-cover.png",
    innerImage: "/main-images/6-in.png",
    logo: "/logos/6.svg",
  },
  {
    id: 7,
    name: "JUNPEI LIGHT & POWER",
    description: "Asia's largest energy multinational and specialist in fusion technology.",
    coverImage: "/main-images/7-cover.png",
    innerImage: "/main-images/7-in.png",
    logo: "/logos/7.svg",
  },
  {
    id: 8,
    name: "DEADEYE ENFORCEMENT",
    description: "A global network composed of ex-NATO members.",
    coverImage: "/main-images/8-cover.png",
    innerImage: "/main-images/8-in.png",
    logo: "/logos/8.svg",
  },
  {
    id: 9,
    name: "THE SEEKER MEGACHURCH",
    description: "A leading media corp that is also the face of a modern neo-religion.",
    coverImage: "/main-images/9-cover.png",
    innerImage: "/main-images/9-in.png",
    logo: "/logos/9.svg",
  },
];

