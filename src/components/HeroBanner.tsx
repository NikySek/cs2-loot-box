import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative rounded-lg overflow-hidden gaming-glow">
      <img
        src={heroBanner}
        alt="CS2 Skins Gaming"
        width={1920}
        height={512}
        className="w-full h-48 md:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent flex items-center p-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Open <span className="text-primary">Cases</span>
          </h2>
          <p className="text-secondary-foreground text-sm mt-1">
            Win rare CS2 skins & knives
          </p>
          <button className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
