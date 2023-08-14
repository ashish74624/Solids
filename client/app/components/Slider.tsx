'use client'
import React, { useEffect, useState } from 'react';

export default function Slider() {
  const images = [
    {
      url: 'https://placehold.co/600x400',
    },
    {
      url: 'https://image-get.vercel.app/Ecommerce/1.webp',
    },
    {
      url: 'https://image-get.vercel.app/Ecommerce/2.webp',
    },
    {
      url: 'https://image-get.vercel.app/Ecommerce/3.webp',
    },
  ];
  const [img, setImg] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(false);

  const changeImage = () => {
    // setIsTransitioning(true);
    setTimeout(() => {
      setImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      // setIsTransitioning(false);
    }, 5000);
  };

  const startInterval=()=>{
    const newInterval =  setInterval(()=>changeImage(),5000 )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeImage();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <section className='w-screen h-[500px] relative'>
        <img
          src={images[img].url}
          className={`w-full h-full bg-cover bg-no-repeat duration-500 bg-left-top rounded-2xl`}
          alt='Slider Image'
        />
        <button
          className='bg-white h-10 w-10 rounded-full absolute top-[280px] left-3'
          onClick={() => {
            setImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          }}
        >
          P
        </button>
        <button
          className='bg-white h-10 w-10 rounded-full absolute top-[280px] right-3'
          onClick={() => {
            setImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          }}
        >
          N
        </button>
      </section>
    </>
  );
}
