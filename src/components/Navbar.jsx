import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 sticky top-0 z-50 md:px-20 h-20 bg-amber-950 flex justify-between items-center text-amber-200">
      <a href="/">
        <p className="text-2xl  hover:cursor-pointer uppercase">lucky</p>
      </a>

      <ul className="hidden md:flex gap-8 uppercase">
        {["Home","ShopAll", "New", "Best Sellers"].map(
          (item) => (
            <li key={item} className="hover:cursor-pointer hover:text-white">
              {item}
            </li>
          )
        )}
      </ul>
      <div className="flex gap-8 uppercase">
        <p className="hover:cursor-pointer hover:text-white">Cart</p>
        <p className="hover:cursor-pointer hover:text-white">Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
