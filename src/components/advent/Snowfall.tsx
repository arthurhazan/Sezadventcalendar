
import React, { useEffect, useState } from "react";

export const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<{ id: number; left: string; animationDuration: string; opacity: number }[]>([]);

  useEffect(() => {
    // Generate snowflakes on client side only to avoid hydration mismatch
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 5}s`,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-[-10px] bg-white rounded-full w-2 h-2 animate-fall"
          style={{
            left: flake.left,
            opacity: flake.opacity,
            animation: `fall ${flake.animationDuration} linear infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
