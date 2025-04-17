import React from 'react';

export default function AddCartBtn({onClick}) {
  return (
    <button onClick={onClick} className="w-full h-12 rounded-full border border-gray-300 shadow-md text-gray-500 font-bold">
      加入購物車
    </button>
  );
}
