export function BackgroundOrbs() {
  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1 animate-drift1" />
        <div className="orb orb-2 animate-drift2" />
        <div className="orb orb-3 animate-drift3" />
      </div>
      <div className="grain-overlay" aria-hidden="true" />
    </>
  );
}
