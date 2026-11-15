export function DiscHeroVisual() {
  return (
    <div className="disc-stage" aria-hidden>
      <div className="disc-stage__glow" />
      <div className="disc-stage__trail disc-stage__trail--a" />
      <div className="disc-stage__trail disc-stage__trail--b" />
      <div className="disc-stage__disc">
        <div className="disc-stage__spin">
          <svg viewBox="0 0 200 200" className="disc-svg">
            <defs>
              <radialGradient id="discMetal" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#f2d19a" />
                <stop offset="45%" stopColor="#c47a4a" />
                <stop offset="100%" stopColor="#6b3f28" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="78" fill="url(#discMetal)" />
            <circle cx="100" cy="100" r="28" fill="#1a1f1c" />
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="#e8c49a"
              strokeWidth="3"
              strokeDasharray="8 10"
              opacity="0.55"
            />
            <circle
              cx="100"
              cy="100"
              r="48"
              fill="none"
              stroke="#2a332c"
              strokeWidth="6"
            />
          </svg>
        </div>
      </div>
      <div className="disc-stage__ground" />
    </div>
  );
}
