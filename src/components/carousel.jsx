import React, { useState } from 'react';
import banner from '../assets/banner.png'
import tapal from '../assets/tapal.png'

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="prev-button">
        &lt;
      </button>
      <div className="carousel-item">
        {items[currentIndex]}
      </div>
      <button onClick={nextSlide} className="next-button">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
