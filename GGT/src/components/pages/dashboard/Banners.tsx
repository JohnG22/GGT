import React, { useState, useEffect } from 'react';
import './Banners.css';

interface SlideData {
  index: number;
  src: string;
}

interface SliderProps {
  slides: SlideData[];
  heading: string;
}

const Banners: React.FC<SliderProps> = ({ slides, heading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const getSlideIndex = (offset: number) => {
    const totalSlides = slides.length;
    let index = currentSlide + offset;

    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    return index;
  };

  return (
    <div className="container">
      <div className="slider">
        <div className="slides">
          {[-1, 0, 1].map((offset) => {
            const slideIndex = getSlideIndex(offset);
            const slide = slides[slideIndex];

            return (
              <div
                key={slide.index}
                className={`slide ${
                  offset === 0
                    ? 'active'
                    : offset === -1
                    ? 'previous'
                    : 'next'
                }`}
              >
                <img src={slide.src} alt={`Slide ${slide.index}`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banners;
