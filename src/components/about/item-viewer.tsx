"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ItemViewer({ items }: { items: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [vw, setVw] = useState({ width: 0 });

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get current slice of items
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const currentItems = items.slice(startIndex, endIndex);

  useEffect(() => {
    if (vw.width <= 1220 && vw.width > 1110) {
      setItemsPerPage(5);
    } else if (vw.width <= 1110 && vw.width > 960) {
      setItemsPerPage(4);
    } else if (vw.width <= 960) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(6);
    }
  }, [vw]);

  useEffect(() => {
    if (window.innerWidth != 0) {
      setVw({ width: window.innerWidth });
    }
    const handleResize = () => {
      setVw({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Animation variants
  const containerVariants = {
    hiddenLeft: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hiddenRight: { x: 10, opacity: 0 },
  };
  return (
    <div className="relative w-full max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">
      {/* Navigation buttons */}

      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className={`
           rounded-full flex items-center justify-center transition-all duration-300
          ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "bg-transparent hover:bg-gray-800 hover:text-white"
          }
        `}
      >
        <ChevronLeft className="h-10 w-10 relative left-[-0.15rem]" />
      </button>

      {/* Items container with animation */}
      <div className="overflow-hidden w-full">
        <div key={currentIndex} className="flex justify-center gap-5 text-xl">
          <AnimatePresence>
            {currentItems.map((item, index) => (
              <motion.div
                key={`${startIndex + index}`}
                variants={containerVariants}
                initial={currentIndex > 0 ? "hiddenLeft" : "visible"}
                animate="visible"
                exit={currentIndex < totalPages - 1 ? "hiddenRight" : "visible"}
                className="
              bg-blue-950 rounded-2xl text-white
                flex items-center justify-center
                whitespace-nowrap
                py-2 px-6
                "
              >
                {item}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex === totalPages - 1}
        className={`
          min-w-15 min-h-15 rounded-full
          flex items-center justify-center text-xl
          transition-all duration-300
          ${
            currentIndex === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : "bg-transparent hover:bg-gray-800 hover:text-white"
          }
        `}
      >
        <ChevronRight className=" h-10 w-10 relative left-[0.15rem]" />
      </button>
    </div>
  );
}
