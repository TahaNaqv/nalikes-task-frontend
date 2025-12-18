export function Header() {
  return (
    <div className="mb-8 md:mb-12">
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
    </div>
  );
}

