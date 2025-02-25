import { IoMdArrowDropdown } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import "../App.css";
import { Footer } from "../components/Footer";
import useProducts from "../api/hooks/useProducts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Discount from "../components/Discount";
import RouteSection from "../components/RouteSection";

function HomePage() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error loading products: {error}
      </div>
    );

  return (
    <div className="mx-auto scroll-smooth min-h-screen ">
      <Discount />

      <Navbar />

      <RouteSection />

      <div className="flex flex-col md:flex-row w-full text-black">
        <Sidebar />

        <main className="flex-1 p-4 bg-gray-100">
          <div className="h-80 rounded-lg overflow-hidden">
            <img
              src="/banner.jpg"
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8">
            <h1 className="text-5xl mb-6">All Products</h1>

            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <p className="mb-2 md:mb-0">{products.length} products</p>
              <div className="flex items-center gap-2">
                <span>Sort by:</span>
                <button className="flex items-center gap-1">
                  Recommended
                  <IoMdArrowDropdown />
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <a
                  href="/product-detail"
                  key={product.id}
                  className="bg-white p-6 rounded-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl line-clamp-1 font-semibold text-center">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-center">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex justify-center gap-2 items-center mb-2">
                    <div className="flex text-amber-500">
                      {[...Array(Math.round(product.rating.rate))].map(
                        (_, i) => (
                          <TiStarFullOutline key={i} />
                        )
                      )}
                    </div>
                    <span className="font-extralight mt-1">({product.rating.count})</span>
                  </div>

                  <button className="w-full py-2 border-2 rounded hover:bg-black hover:text-amber-50 transition-colors">
                    Add to Cart
                  </button>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
