import React from "react";
import Discount from "../components/Discount";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Sidebar from "../components/Sidebar";
import RouteSection from "../components/RouteSection";

const ProductDetail = () => {
  return (
    <>
      <Discount />
      <Navbar />
      <RouteSection />
      
      <div className="flex flex-col md:flex-row w-full text-black">
        <Sidebar />

        <main className="flex-1 p-4 bg-gray-100 flex justify-center item-center">
        
        <div class="grid h-[90vh] w-11/12 grid-cols-1 lg:grid-cols-2">
    <div class="col-span-1 bg-amber-950 flex justify-center items-center">
      <div className="bg-white w-11/12 h-11/12 rounded-2xl">Image</div>
    </div>
    <div class="bg-amber-950">
     
    <div class="flex items-start p-9 text-white">
  <div class="ml-2">
    <h2 class="text-3xl font-semibold">Product name</h2>
    <p class="text-sm my-3">Code: ####</p>
    <h1 className="text-4xl font-serif pt-15">Price</h1>
    <p className="uppercase opacity-80 pt-5">Select a color</p>
    <div className="pt-2 flex gap-2">
    <div class="w-5 h-5 bg-blue-500 rounded-full"></div>
    <div class="w-5 h-5 bg-amber-300 rounded-full"></div>
    <div class="w-5 h-5 bg-fuchsia-600 rounded-full"></div>
    <div class="w-5 h-5 bg-emerald-500 rounded-full"></div>
    <div class="w-5 h-5 bg-black rounded-full"></div>
    <div class="w-5 h-5 bg-red-600 rounded-full"></div>
    </div>

    <p className="pt-10 text-xl">Description</p>
    <h1 className="border border-1 w-30"></h1>
    <p className="pt-3">A soft, comfortable t-shirt with a classic fit, short sleeves, and a crew neckline. Perfect for everyday wear.</p>
    <button className="bg-amber-950 w-40 h-10 text-amber-200 font-semibold border-2 border-amber-200 rounded-br-2xl my-10 hover:cursor-pointer hover:border-2 hover:bg-amber-200 hover:text-black">ADD TO CART</button>
  </div>
</div>



    
    </div>
  </div>

        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
