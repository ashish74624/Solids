import React from 'react'
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

export default function page() {
  return (
    <>
    <section className=' h-screen w-screen flex justify-center items-center'>
        <div className='w-36 h-12 grid grid-cols-3 border border-gray-900 rounded-lg overflow-hidden'>
            <button className='bg-gray-900 hover:bg-gray-800 grid place-content-center text-2xl text-white'>
                <AiOutlineDown />
            </button>
            <span className='grid place-content-center text-2xl'>1</span>
            <button className='bg-gray-900 hover:bg-gray-800 grid place-content-center text-2xl text-white'>
                <AiOutlineUp />
            </button>
        </div>
    </section>
      
    </>
  )
}
