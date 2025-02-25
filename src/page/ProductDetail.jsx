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

        <main className="flex-1 p-4 bg-gray-100"></main>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
