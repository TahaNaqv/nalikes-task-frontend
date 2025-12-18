export function ContentSection() {
  return (
    <div className="space-y-6 max-w-2xl">
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
      <button className="px-6 py-2 border border-gray-400 bg-gray-800 text-white uppercase text-sm font-medium hover:bg-gray-700 transition-colors">
        UTILITY
      </button>
    </div>
  );
}

