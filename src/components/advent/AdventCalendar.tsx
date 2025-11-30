
import React, { useState, useEffect } from "react";
import { DayCard } from "./DayCard";
import { PhotoModal } from "./PhotoModal";
import { adventData, AdventDay } from "./adventData";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import { Snowfall } from "./Snowfall";

// Import the user provided asset as a background or header element if appropriate
// Since it is a full design comp, we won't use it as a main image, but we'll use the style inspiration.
// import designRef from "figma:asset/28cebbb8b48356104024c5728306255d6594bcfc.png"; 

export const AdventCalendar: React.FC = () => {
  const [openedDays, setOpenedDays] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<AdventDay | null>(null);
  const [mounted, setMounted] = useState(false);

  // Load state from local storage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("sez-advent-calendar");
    if (saved) {
      try {
        setOpenedDays(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
    }
  }, []);

  // Save state when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("sez-advent-calendar", JSON.stringify(openedDays));
    }
  }, [openedDays, mounted]);

  const handleDayClick = (day: AdventDay) => {
    // Add to opened days if not already
    if (!openedDays.includes(day.id)) {
      setOpenedDays((prev) => [...prev, day.id]);
    }
    setSelectedDay(day);
  };

  // Calculate progress
  const progress = Math.round((openedDays.length / 24) * 100);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#3E2723] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] text-[#FFF8E7] font-sans selection:bg-[#d32f2f] selection:text-white pb-20 relative">
      <Snowfall />
      
      <header className="relative pt-12 pb-8 px-4 text-center space-y-4 z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-100 drop-shadow-md text-wrap">
          Le Calendrier de l'Avent de Sez
        </h1>
        <p className="text-amber-200/80 text-lg md:text-xl max-w-2xl mx-auto">
          24 jours de surprises félines en attendant Noël !
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section / Featured Image */}
        <div className="mb-12 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#5D4037] aspect-[16/9] md:aspect-[21/9]">
           <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-transparent to-transparent z-10 opacity-60" />
           <ImageWithFallback
             src="https://images.unsplash.com/photo-1733398190299-a1739f5bd820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB0cmVlJTIwY2hyaXN0bWFzfGVufDF8fHx8MTc2NDUwMDA1NHww&ixlib=rb-4.1.0&q=80&w=1080"
             alt="Sez Christmas Hero"
             className="w-full h-full object-cover"
           />
           <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">La magie de Noël</h2>
                <p className="text-white/90">Découvrez une nouvelle photo chaque jour.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="text-amber-200 font-bold">{openedDays.length}</span>
                <span className="text-white"> / 24 découverts</span>
              </div>
           </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {adventData.map((day) => (
            <DayCard
              key={day.id}
              day={day.day}
              isOpened={openedDays.includes(day.id)}
              onClick={() => handleDayClick(day)}
            />
          ))}
        </div>
      </main>

      <footer className="mt-20 text-center text-[#8D6E63] pb-8">
        <p className="font-serif">© 2025 Le Monde de Sez</p>
      </footer>

      {/* Modal */}
      {selectedDay && (
        <PhotoModal
          isOpen={!!selectedDay}
          onClose={() => setSelectedDay(null)}
          imageUrl={selectedDay.imageUrl}
          message={selectedDay.message}
          day={selectedDay.day}
        />
      )}
    </div>
  );
};
