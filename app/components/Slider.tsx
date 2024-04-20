'use client'
import React from 'react'
import Carousel from "nuka-carousel"
import {
  renderCenterLeftControls,
  renderCenterRightControls,
} from '@/components/control'
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
        <Image className='w-screen h-[600px]' src="/1.jpg" alt='mens wear' width={1024} height={600} />
      </div>
      <div>
        <Image className='w-screen h-[600px]' src="/3.jpg" alt='womens wear' width={1024} height={600}  />
      </div>
      <div>
        <Image className='w-screen h-[600px]' src="/2.jpg" alt='watches' width={1024} height={600}  />
      </div>
    </Carousel>
    </>
  )
}
