import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../common/assets/Images/Image1.jpg";
import image2 from "../common/assets/Images/Image2.jpg";
import image3 from "../common/assets/Images/Image3.jpg";
import image4 from "../common/assets/Images/Image4.jpg";
import image5 from "../common/assets/Images/Image5.jpg";

const images = [image1, image2, image3, image4, image5];

export default function ImageSlider() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const changeSlide = useCallback(
    (newDirection) => {
      setCurrent(([prev]) => [
        (prev + newDirection + images.length) % images.length,
        newDirection,
      ]);
    },
    [setCurrent]
  );

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => changeSlide(1), 4000);
    return () => clearInterval(interval);
  }, [changeSlide, isPaused]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") changeSlide(1);
      if (e.key === "ArrowLeft") changeSlide(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [changeSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
      <div
        className="relative w-full mx-auto max-w-[1480px] mt-24  aspect-video sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none  " />

        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Prev/Next arrows */}
        <button
          onClick={() => changeSlide(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2  text-7xl text-white/50 rounded-full p-2 z-20 transition-transform hover:scale-110"
        >
          ‹
        </button>
        <button
          onClick={() => changeSlide(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2  text-7xl text-white/50 rounded-full p-2 z-20 transition-transform hover:scale-110 "
        >
          ›
        </button>
      </div>
  );
}
