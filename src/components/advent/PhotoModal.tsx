
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  message: string;
  day: number;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  message,
  day,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-[#FFF8E7] rounded-2xl p-6 shadow-2xl border-4 border-[#5D4037]"
          >
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 bg-[#d32f2f] text-white p-2 rounded-full shadow-lg hover:bg-[#b71c1c] transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-6">
              <h2 className="text-3xl font-serif text-[#5D4037]">
                Jour {day}
              </h2>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-inner border-2 border-[#5D4037]/20">
                <ImageWithFallback
                  src={imageUrl}
                  alt={`Photo du jour ${day}`}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xl font-medium text-[#5D4037] italic">
                  "{message}"
                </p>
                <div className="h-px w-24 bg-[#5D4037]/30 mx-auto my-4" />
                <p className="text-sm text-[#8D6E63] font-semibold">
                  Reviens demain pour découvrir une autre photo !
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
