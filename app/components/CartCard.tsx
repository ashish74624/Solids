import React from 'react'
import Image from 'next/image'
import RemoveCartItem from './RemoveCartItem'


export default function CartCard({title,image,price,id,email}:any) {
  return (
    <>
     <section className='w-full h-56 flex p-4 border-b border-black'>
        <div className='w-36'>
            <div className='h-36 w-36 rounded-lg'>
                <Image className='h-36 w-36 rounded-lg' height={200} width={200} src={image} alt="Img" />
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
        <div className='w-full ml-8'>
            <div className='w-full text-xl flex justify-between'>
                <h3>{title}</h3> 
                <RemoveCartItem id={id} email={email}/>
            </div>
            <p className=' text-2xl'>Price: ${price}</p>
        </div>
     </section> 
    </>
  )
}
