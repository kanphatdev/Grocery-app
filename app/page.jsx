"use client";
import Image from "next/image";
// ui component
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Sliders from "./_components/Sliders";
// ----------------------------------------------------------------
// api fetching variables
import GlobalApi from "./_utils/GlobalApi";
import Footer from "./_components/Footer";

export default async function Home() {
  const sliderList = await GlobalApi.getSlider();
  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();
  return (
    <div className="p-5 md:p-10 px-16">
      {/* Sliders  */}
      <Sliders sliderList={sliderList} />
      {/* CategoryList */}
      <CategoryList categoryList={categoryList} />
      {/* product list */}
      <ProductList productList={productList} />
      {/* Banner */}
      <Image
        src={"/banner.jpg"}
        width={1000}
        height={300}
        className="w-full h-[400px] object-contain mt-2"
      />
      {/* footer */}
      <Footer/>
    </div>
  );
}
