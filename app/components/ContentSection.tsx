export function ContentSection() {
  return (
    <div className="space-y-6 w-full">
      {/* Heading */}
      <h1 className="text-white">
        <span
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider uppercase"
          style={{
            WebkitTextStroke: "1px white",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          } as React.CSSProperties}
        >
          CHOOSE YOUR
        </span>
        <br />
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
          FACTION
        </span>
      </h1>

      {/* Description */}
      <div className="space-y-4 text-white text-sm md:text-base leading-relaxed">
        <p>
          Agents will be customizable, allowing you to select from among the
          various factions in the game - will you fight for a global police force
          seeking to enact a new brand of justice? Or will you battle alongside
          a secret network of deviants and outcasts?
        </p>
        <p>
          Once you acquire your agent, the choice is yours. Pledging your
          allegiance is no small decision - as your agent accrues Loyalty Points
          over time, your choices truly matter.
        </p>
      </div>

      {/* Button */}
      <button
        className="px-6 py-2 bg-white text-black uppercase text-sm font-medium shadow-lg transition-all"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)",
        } as React.CSSProperties}
      >
        UTILITY
      </button>
    </div>
  );
}

