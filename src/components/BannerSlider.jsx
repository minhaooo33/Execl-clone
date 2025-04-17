import React, { useEffect, useState } from "react";
import carouselData from "../data/carouselData/carouselData";
import BlueBtn from "../ui/BlueBtn";

export default function BannerSlider() {
  const [index, setIndex] = useState(0);
  const total = carouselData.length;

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  // 左右控制
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="relative w-full aspect-[21/9] overflow-visible pb-28 md:pb-0">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {carouselData.map((item) => (
          <div key={item.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto aspect-[16/9] object-cover object-center"
            />
            <div
              className="
                absolute 
                text-white text-right
                flex flex-col whitespace-nowrap
                md:top-1/2 md:right-12 md:-translate-y-1/2 md:items-end
                top-full left-1/2 -translate-x-1/2 mt-4 items-center text-center
              "
            >
              <h2 className=" text-sky-950 text-5xl font-bold drop-shadow">{item.title}</h2>
              <BlueBtn>
                {item.buttonText}
              </BlueBtn>
            </div>
          </div>
        ))}
      </div>

      {/* 左右控制箭頭 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow z-10"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow z-10"
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex gap-2 z-50 sm:absolute sm:z-10">
        {carouselData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-400"} transition`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}