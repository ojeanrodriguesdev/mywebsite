"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <>
      <div className="lg:flex flex relative h-full lg:h-[550px] border-2 border-black rounded-2xl overflow-hidden lg:my-[25%] lg:mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slideshow;
