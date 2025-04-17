import React from "react";
import heroVideo from "../assets/videos/hero.mp4"; 

export default function Hero() {
  return (
  <section className="relative w-full aspect-[16/9] overflow-hidden">
      {/* 背景影片 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-contain"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </section>
  );
}