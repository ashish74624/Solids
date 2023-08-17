'use client'
import React from 'react'
import Carousel  from "nuka-carousel"
import {
  renderCenterLeftControls,
  renderCenterRightControls,
} from './control'

export default function Slider() {
  return (
    <>
    <Carousel className=' w-screen h-96 md:h-[600px]' autoplay={true}
    slideIndex={0}
    renderCenterLeftControls={renderCenterLeftControls}
    renderCenterRightControls={renderCenterRightControls}
    enableKeyboardControls={false}
    wrapAround={true}
    pauseOnHover={false} 
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
