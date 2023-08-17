import React from 'react';

export const renderCenterLeftControls = ({
  previousDisabled,
  previousSlide,
}:any) => (
  <button
    className='w-5 h-5 rounded-full bg-white text-base'
    disabled={previousDisabled}
    onClick={previousSlide}
    aria-label="Go to previous slide"
  >
    P
  </button>
);

export const renderCenterRightControls = ({ nextDisabled, nextSlide }:any) => (
  <button
  className='w-5 h-5 rounded-full bg-white text-base'
    disabled={nextDisabled}
    onClick={nextSlide}
    aria-label="Go to next slide"
  >
    N
  </button>
);

export const renderBottomCenterControls=({goToSlide}:any)=>(
    <button className='bg-orange-500 w-2 h-2 rounded-full'>

    </button>
);