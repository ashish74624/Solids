'use client'
import React from 'react'
import Carousel, { PagingDots }  from "nuka-carousel"
import {
  renderCenterLeftControls,
  renderCenterRightControls,
} from './control'

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
        <img className='w-screen h-[600px]' src="/1.webp" />
      </div>
      <div>
        <img className='w-screen h-[600px]' src="/2.webp" />
      </div>
      <div>
        <img className='w-screen h-[600px]' src="/3.webp" />
      </div>
    </Carousel>
    </>
  )
}
