import React from "react";

function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute -top-28 -right-20 w-72 h-72 rounded-full bg-[#e6fff8] opacity-80 blur-3xl transform rotate-12" />
      <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-[#f0f8ff] opacity-60 blur-2xl" />
      {/* Subtle wave SVG for extra polish */}
      <svg
        className="absolute bottom-0 right-0 w-[700px] opacity-10"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 0L0 0 0 46.29C80 62 240 120 480 120s320-58 480-62 320 12 240-58z"
          fill="#54c6a8"
        />
      </svg>
    </div>
  );
}

export default HeroDecor;
