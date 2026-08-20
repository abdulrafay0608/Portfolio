// components/BackgroundSplash.tsx
'use client';

import SplashCursor from "./SplashCursor";


export default function BackgroundSplash() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <SplashCursor
        SIM_RESOLUTION={96}
        DYE_RESOLUTION={640}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        PRESSURE_ITERATIONS={12}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />
    </div>
  );
}