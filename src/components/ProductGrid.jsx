import React, { useRef } from "react";
import productCategories from "../data/productsData/productsCategoriesData";

export default function ProductGrid() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-sky-900">所有商品分類</h2>

      {/* 手機版左右箭頭 */}
      <div className="relative block md:hidden">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
        >
          ❮
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
        >
          ❯
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll flex-nowrap scroll-smooth scrollbar-hide snap-x snap-mandatory px-1"
        >
          {productCategories.map((product) => (
            <div
              key={product.id}
              className="min-w-[80%] snap-start shrink-0 rounded-lg shadow-sm"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="mt-3 flex items-center text-sky-950  justify-center px-2">
                <span>{product.title}</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 電腦版 grid 顯示 */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productCategories.map((product) => (
          <div key={product.id} className="group">
            <div className="group-hover:-translate-y-2 transition-transform">
              <div className="aspect-square overflow-hidden rounded-lg shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-center justify-center text-sky-950 font-medium">
                <span>{product.title}</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
