import { useEffect, useRef, useState } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

// Since we can't import Swiper in this environment, I'll create a custom implementation
// that mimics Swiper's functionality with modern design

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80",
    title: "Mountain Adventures",
    subtitle: "Explore breathtaking peaks",
    description: "Discover the world's most stunning mountain landscapes with guided tours and thrilling adventures.",
    cta: "Start Adventure"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&q=80",
    title: "Ocean Serenity",
    subtitle: "Dive into tranquility",
    description: "Experience the calming power of crystal-clear waters and pristine beaches around the globe.",
    cta: "Explore Waters"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=1920&h=1080&fit=crop&q=80",
    title: "Desert Wonders",
    subtitle: "Journey through golden sands",
    description: "Witness the magical beauty of endless desert horizons and ancient dunes.",
    cta: "Desert Journey"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&q=80",
    title: "Forest Mysteries",
    subtitle: "Enter enchanted woodlands",
    description: "Discover hidden secrets in ancient forests filled with wildlife and natural wonders.",
    cta: "Forest Tour"
  }
];

export default function SwiperCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const intervalRef = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoplay, currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoplay();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className= " relative w-full h-screen overflow-hidden bg-black">
      {/* Main carousel container */}
      <div 
        className="relative w-full h-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        Slides
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100 z-10'
                : index === (currentSlide - 1 + slides.length) % slides.length
                ? 'opacity-0 scale-110 -translate-x-full z-0'
                : index === (currentSlide + 1) % slides.length
                ? 'opacity-0 scale-110 translate-x-full z-0'
                : 'opacity-0 scale-110 z-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
                <div className="max-w-3xl">
                  <div 
                    className={`transition-all duration-1000 delay-300 ${
                      index === currentSlide 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h3 className="text-blue-400 text-lg md:text-xl font-medium mb-4 tracking-wide uppercase">
                      {slide.subtitle}
                    </h3>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
                      <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1">
                      <span className="flex items-center gap-3">
                        {slide.cta}
                        <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-bounce" />
          </div>
        ))}

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 md:p-5 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-x-1" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 md:p-5 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-1" />
        </button> */}

        {/* Controls */}
        {/* <div className="absolute top-6 md:top-12 right-6 md:right-12 z-30 flex gap-4">
          <button
            onClick={toggleAutoplay}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            {isAutoplay ? <Pause className="w-5 h-5 md:w-6 md:h-6" /> : <Play className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div> */}

        {/* Pagination Dots */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3 md:gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 md:w-16 h-3 md:h-4 bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'w-3 md:w-4 h-3 md:h-4 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Side Counter */}
        {/* <div className="absolute left-6 md:left-12 bottom-20 md:bottom-32 z-30 text-white">
          <div className="text-sm md:text-base text-gray-400 mb-2">
            {String(currentSlide + 1).padStart(2, '0')}
          </div>
          <div className="w-px h-16 md:h-20 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="text-sm md:text-base text-gray-400 mt-2">
            {String(slides.length).padStart(2, '0')}
          </div>
        </div> */}
      </div>
    </div>
  );
}