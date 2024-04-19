import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Sliders from "./_components/Sliders";
import GlobalApi from "./_utils/GlobalApi";

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
      <ProductList productList={productList}/>
    </div>
  );
}
