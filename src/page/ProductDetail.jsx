import React from "react";
import Discount from "../components/Discount";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Sidebar from "../components/Sidebar";
import RouteSection from "../components/RouteSection";
import Comment from "../components/Comment";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProductCart from "../components/ProductCart";

const ProductDetail = () => {


  return (
    <>
      <Discount />
      <Navbar />
      <RouteSection />
      
      <div className="flex flex-col md:flex-row w-full text-black">
        <Sidebar />

        <main className="flex-1 p-4 w- bg-gray-50">
        
        {/* User Feedback */}
        <Comment />


        {/* Order Comment Page */}
        <div className="flex gap-12 justify-center items-center py-6 ">
            <div className="flex items-center gap-2 text-gray-500">
            <MdOutlineKeyboardArrowLeft size={30} />
            <p>Previous</p>
            </div>

            <div className="flex items-center gap-2">
            <p>Next</p>
            <MdOutlineKeyboardArrowRight size={30} />
            </div>
       </div>

        </main>
        
      </div>

         {/* Product Recommendation */}
      <div className="py-6 flex-col place-self-center gap-2 text-gray-800">
        <span className="text-2xl">You Might Also Like</span>

         <div className="flex gap-6 items-center ">
         <MdOutlineKeyboardArrowLeft size={30} className=" " />
          
          {/* Product Cart Scrollable */}
          <ProductCart />

          <MdOutlineKeyboardArrowRight size={30} className=" " />
          </div>
        
       </div>
  


      <Footer />
    </>
  );
};

export default ProductDetail;
