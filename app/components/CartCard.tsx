import React from 'react'
import Image from 'next/image'
export default function CartCard() {
  return (
    <>
     <section className=' w-full h-56 flex p-4 border-b border-black'>
        <div className='w-36'>
            <div className='h-36 w-36 bg-red-300'>
                <Image className=' h-36 w-36' height={200} width={200} src="/4.jpg" alt="Img" />
            </div>
            <span className='flex mt-2 space-x-2 mx-auto w-max'>
                <button className='w-8 h-8 text-6xl grid place-content-center font-thin rounded-full border-black border pb-2 bg-gray-300'>
                    -
                </button>
                <span className=' w-12 h-8 border border-black grid place-content-center bg-gray-200'>
                    1
                </span>
                <button className='w-8 h-8 text-4xl grid place-content-center font-thin rounded-full border-black border bg-gray-300'>
                    +
                </button>
            </span>
        </div>
        <div className=' ml-4'>
            <h3 className=' text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, sunt?
            </h3>
            <p className=' text-2xl'>Price: </p>
        </div>
     </section> 
    </>
  )
}
