import Image from "next/image";
import Sliders from "./_components/Sliders";
import GlobalApi from "./_utils/GlobalApi";


export default async function Home() {
const sliderList = await GlobalApi.getSlider();
  return (
    <div className="p-5 md:p-10 px-16">
      <Sliders sliderList={sliderList}/>
    </div>
  );
}
