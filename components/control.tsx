import React from 'react';
import Left from '../app/Icons/Left';
import Right from '../app/Icons/Right';

export const renderCenterLeftControls = ({
  previousDisabled,
  previousSlide,
}:any) => (
  <button
    className='w-11 h-11 bg-gray-800/60 rounded-full pl-1 ml-1 mb-5'
    disabled={previousDisabled}
    onClick={previousSlide}
    aria-label="Go to previous slide"
  >
    <Left/>
  </button>
);

export const renderCenterRightControls = ({ nextDisabled, nextSlide }:any) => (
  <button
  className='w-11 h-11 bg-gray-800/60 rounded-full pl-2 mr-1 mb-5 '
    disabled={nextDisabled}
    onClick={nextSlide}
    aria-label="Go to next slide"
  >
    <Right/>
  </button>
);

export const renderBottomCenterControls=({goToSlide}:any)=>(
    <button className='bg-orange-500 w-2 h-2 rounded-full'>

    </button>
);