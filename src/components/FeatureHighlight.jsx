import React, { useRef, useEffect, useState, useContext } from "react";
import featureImage from "../assets/feature.jpg";


export default function FeatureHighlight() {
  const imgRef = useRef();
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const imgTop = imgRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const scrollPos = Math.max(0, windowHeight - imgTop);
      setOffset(scrollPos * 0.2); // 這裡控制移動速度，0.2 是比例
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section className="w-screen px-4 py-16 text-center">
      <h2 className="text-5xl  font-extrabold text-sky-950 mb-4">
        家用到商用
      </h2>
      <p className="text-lg  text-gray-700 mb-8">
        專為效率打造，輕鬆切出直線美，提升包裝質感！
      </p>
      <div className="overflow-hidden shadow aspect-[16/9] relative w-screen mx-auto">
        <img
          ref={imgRef}
          src={featureImage}
          alt="商用展示圖"
          className="w-screen h-auto object-contain transition-transform duration-200"
          style={{ transform: `translateY(-${offset}px)` }}
        />
      </div>
    </section>
  );
}