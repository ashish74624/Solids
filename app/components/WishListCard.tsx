import React from 'react'
import Image from 'next/image'
import AddtoCart2 from './AddtoCart2'
import RemoveFromWishlist from './RemoveFromWishlist'

export default function WishListCard({title,image,price,id,email}:any) {
  return (
    <>
      <section className='flex bg-white h-48 w-[75vw] rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto overflow-clip'>
        <div>
            <Image className='w-64 h-48 pl-8' src={image} alt="hello" height={300} width={300}/>
        </div>
        <div className='p-4 flex flex-col h-full justify-between'>
          <div>
            <h1 className='text-2xl'>
                {title}
            </h1>
            <p className='text-2xl'>Price ${price}</p>
          </div>
            <span className=' space-x-4'>
              <AddtoCart2 id={id} userEmail={email}/>
              <RemoveFromWishlist id={id} userEmail={email}/>              
            </span>
        </div>
      </section>
    </>
  )
}
