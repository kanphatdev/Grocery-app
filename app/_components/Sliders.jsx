import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
function Sliders({sliderList}) {
  return (
    <Carousel>
    <CarouselContent>
      {sliderList.map((slider,index) =>(

      <CarouselItem key={index}>
     <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+ slider.attributes.image.data.attributes.url} width={1000} height={400} alt='slider' className='w-full  h-[200px] md:h-[400px] object-cover rounded-xl'/>
      </CarouselItem>
      ) )}
  
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  
  )
}

export default Sliders