import React, { useContext } from "react";
import allProducts from "../data/productsData/allProducts";
import BlueBtn from "../ui/BlueBtn";
import AddCartBtn from "../ui/addCratBtn";
import CartContext from "../store/CartContext";

export default function FeaturedProducts() {
  const cartCtx = useContext(CartContext);
  const topProducts = allProducts.slice(0, 4); 

  function handleAddToCart(product) {
    cartCtx.addItem(product);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-sky-950 mb-10">
        熱門商品
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {topProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="space-y-3 group-hover:-translate-y-2 transition-transform">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] object-contain"
              />
              <div className="text-sky-950 font-semibold leading-tight min-h-[3rem]">
                {product.name}
              </div>
              <div className="text-lg font-bold text-sky-950">
                ${product.originalPrice}
              </div>
              <AddCartBtn onClick={() => handleAddToCart(product)} />
            </div>
          </div>
        ))}
      </div>
      <BlueBtn>檢視全部</BlueBtn>
    </section>
  );
}