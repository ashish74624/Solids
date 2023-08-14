'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import useSwipe from '../hooks/useSwipe';

export default function Slider() {
  const images = [
    {
      url: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      url: 'https://placehold.co/600x400/orange/white/png',
    },
    {
      url: 'https://placehold.co/600x400/brown/white/png',
    },
  ];
  const [img, setImg] = useState(0);
  const [intervalId,setIntervalId]:any = useState(null) 


  const changeImage = () => {
    // setIsTransitioning(true);
      setImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const startInterval=()=>{
    const newInterval =  setInterval(()=>changeImage(),5000 );
    setIntervalId(newInterval)
  };

  const clearAndStartInterval=()=>{
    clearInterval(intervalId);
    startInterval();
  }

  const handlePrev=()=>{
    setImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            clearAndStartInterval();
  }

  const handleNext=()=>{
    setImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            clearAndStartInterval();
  }

  const swipeHandlers = useSwipe({ onSwipedLeft: () => handleNext(), onSwipedRight: () => handlePrev() });

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <>
        <AnimatePresence>
      <section className='w-screen h-[600px] relative'>
        <motion.img
         key={images[img].url}
           src={images[img].url}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{duration:1}}
          className={`w-full h-full bg-cover bg-no-repeat duration-500 bg-left-top `}
          alt='Slider Image'
        />
        <button
          className='bg-white h-10 w-10 rounded-full absolute top-[280px] left-3'
          onClick={() => {
            handlePrev();
          }}
        >
          P
        </button>
        <button
          className='bg-white h-10 w-10 rounded-full absolute top-[280px] right-3'
          onClick={() => {
            handleNext();
          }}
        >
          N
        </button>
      </section>
        </AnimatePresence>
    </>
  );
}
