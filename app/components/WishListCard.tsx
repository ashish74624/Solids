import React from 'react'
import Image from 'next/image'
import AddtoCart2 from './AddtoCart2'
import RemoveFromWishlist from './RemoveFromWishlist'

export default function WishListCard({title,image,price,id,email}:any) {
  return (
    <>
      <section className='flex flex-col lg:flex-row bg-white h-max lg:h-48 w-[95vw] lg:w-[75vw] lg:rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto overflow-clip rounded-lg'>
        <div className='w-64 h-48 mx-auto lg:mx-0'>
            <Image className='w-64 h-48 lg:pl-8' src={image} alt="hello" height={300} width={300}/>
        </div>
        <div className='p-4 flex flex-col h-full items-center w-full lg:justify-between lg:items-start'>
          <div>
            <h1 className=' text-xl lg:text-2xl '>
                {title}
            </h1>
            <p className='text-2xl lg:block hidden'>Price ${price}</p>
          </div>
          <span className='space-x-4'>
            <AddtoCart2 id={id} userEmail={email}/>
            <RemoveFromWishlist id={id} userEmail={email}/>              
          </span>
        </div>
      </section>
    </>
  )
}
