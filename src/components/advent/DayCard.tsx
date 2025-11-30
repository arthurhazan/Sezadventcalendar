
import React from "react";
import { motion } from "motion/react";
import { Gift, Check } from "lucide-react";

interface DayCardProps {
  day: number;
  isOpened: boolean;
  onClick: () => void;
}

export const DayCard: React.FC<DayCardProps> = ({ day, isOpened, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center aspect-square rounded-xl border-2 border-dashed transition-colors duration-300 
        ${
          isOpened
            ? "bg-[#4a3b32]/80 border-amber-200/50 text-amber-200/50"
            : "bg-[#5D4037] border-amber-200 text-amber-100 hover:bg-[#6d4c41] hover:border-amber-100"
        } shadow-lg overflow-hidden`}
    >
      <span className="absolute top-2 left-3 text-lg font-serif font-bold">
        {day}
      </span>
      
      {isOpened ? (
        <Check className="w-8 h-8 opacity-50" />
      ) : (
        <Gift className="w-8 h-8 animate-pulse" />
      )}
    </motion.button>
  );
};
