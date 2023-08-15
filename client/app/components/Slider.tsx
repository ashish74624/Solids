'use client'
import React, { useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Josefin_Slab } from "next/font/google"
import Link from 'next/link';

const sc= Josefin_Slab({
  subsets:['latin'],
  weight: ['700'],
})

export default function Slider() {
  const images = [
    {
      url: '/1.webp',
      caption:"Dressed Impeccably to Impress: Elevate Your Style with our Men's Collection",
      link:"/men"
    },
    {
      url: '/3.webp',
      caption:"Empower Your Elegance: Dive into Women's Fashion Wonderland",
      link:'/women'
    },
    {
      url: '/2.webp',
      caption:'Timeless Elegance: Adorn Yourself with Exquisite Watches & Ornaments',
      link:'/jewel'
    },
  ];
  const [img, setImg] = useState(0);
  const [intervalId, setIntervalId]:any = useState(null);

  const changeImage = () => {
    setImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const startInterval = () => {
    const newInterval = setInterval(() => changeImage(), 5000);
    setIntervalId(newInterval);
  };

  const clearAndStartInterval = () => {
    clearInterval(intervalId);
    startInterval();
  };

  const handlePrev = () => {
    setImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    clearAndStartInterval();
  };

  const handleNext = () => {
    setImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    clearAndStartInterval();
  };

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)

// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 50 

const onTouchStart = (e:any) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX )
}

const onTouchMove = (e:any) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe || isRightSwipe){
    if(isLeftSwipe){
      handleNext();
    }
    if(isRightSwipe){
      handlePrev();
    }
  }
}

  return (
    <>
      <AnimatePresence initial={false}>
        <section className='w-screen h-screen  relative'
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        >
          <motion.img
            
            key={images[img].url}
            src={images[img].url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
            transition={{ duration : 0.2}}
            className={`bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 w-full h-full bg-cover bg-no-repeat duration-500 bg-left-top `}
            alt='Slider Image'
            width={1440}
            height={928}
          />
          <div className='fixed top-0 z-40 bg-transparent h-screen w-screen flex justify-center items-center'>
            <span className='flex flex-col'>
            <h3 className={`${sc.className} text-4xl bg-clip-text text-transparent text-red-600`}>{images[img].caption}</h3>
            <Link className='self-center' href={`${images[img].link}`}>
              <button className='text-white bg-black rounded-full px-6 py-4  mt-2 hover:bg-[#1f1f1f] active:bg-[#151313]'>Shop Now</button>
            </Link>
            </span>
          </div>
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
