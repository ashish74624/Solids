'use client'
import React from 'react'
import Carousel from "nuka-carousel"
import {
  renderCenterLeftControls,
  renderCenterRightControls,
} from '@/app/components/control'
import Image from 'next/image'

export default function Slider() {
  return (
    <>
    <Carousel className=' w-screen h-96 md:h-[600px] group' autoplay={true} autoplayInterval={5000}
    slideIndex={0}
    renderCenterLeftControls={renderCenterLeftControls}
    renderCenterRightControls={renderCenterRightControls}
    enableKeyboardControls={false}
    wrapAround={true}
    pauseOnHover={false} 
    defaultControlsConfig={
      {
        pagingDotsContainerClassName:'pg'      
      } 
    }
    >

      <div>
        <Image className='w-screen h-[600px]' src="https://image-get.onrender.com/ashishkumar74624@gmail.com/Ecommerce/1.webp" alt='mens wear' width={1024} height={600} />
      </div>
      <div>
        <Image className='w-screen h-[600px]' src="https://image-get.onrender.com/ashishkumar74624@gmail.com/Ecommerce/3.webp" alt='womens wear' width={1024} height={600}  />
      </div>
      <div>
        <Image className='w-screen h-[600px]' src="https://image-get.onrender.com/ashishkumar74624@gmail.com/Ecommerce/2.webp" alt='watches' width={1024} height={600}  />
      </div>
    </Carousel>
    </>
  )
}
