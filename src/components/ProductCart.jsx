import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const cartItem = [
  {
    image: "./pro.avif", // Ensure this path is correct relative to your public folder
    title: "Essential Silver Eyeshadow",
    price: 15.00,
  },
  {
    image: "./pro.avif",
    title: "Essential Gold Eyeshadow",
    price: 18.00,
  },
  {
    image: "./pro.avif",
    title: "Essential Blue Eyeshadow",
    price: 20.00,
  },

  // Add more items as needed
];

const ProductCart = () => {
  return (
    <div className=""> {/* Enable horizontal scrolling */}
      <div className="flex gap-3">
        {cartItem.map((cart, index) => (
          <div key={index} className="w-40 p-1 lg:w-65 mt-8 bg-white flex-col text-center relative inline-block"> {/* Use inline-block for horizontal layout */}
            <div className="px-4 absolute translate-y-0 py-1 bg-black text-gray-100">New</div>
            <img src={cart.image} alt={cart.title} className="w-40 h-40 lg:w-65 lg:h-65" />
            <div>
              <p className="mt-3">{cart.title}</p>
              <span className="text-gray-600">${cart.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;