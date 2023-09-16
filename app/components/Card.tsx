import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'
import AddToWishlist from './AddToWishlist'
import { Rate } from 'antd';

export default function Card({id,img,title,rating,price}:any) {
    const {isAuthenticated,getUser} = getKindeServerSession();
    const user = getUser();
  return (
      <section className='relative'>
        <Link href={`/product/${id}`}>      
        <div className=" w-80 xl:w-96 min-h-[428px] h-max pb-2 bg-white border border-gray-200 rounded-lg shadow group ">
            <div className="rounded-t-lg pb-2 h-72 overflow-hidden flex justify-center pt-1">
                <img className="rounded-t-lg pb-2 h-72 overflow-hidden group-hover:scale-125 transition-all duration-500" src={img} alt="product image" />
            </div>
            
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition-all duration-500 ">{(title.length>37) ?title.substring(0,36)+'...':title}</h5>
                <div className="flex items-center mt-2.5 mb-5">
                <Rate disabled defaultValue={Math.round(rating)} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">${price}</span>
                </div>
            </div>
        </div>
        </Link>
        <div className='absolute z-50 right-5 bottom-6'>
            <AddToWishlist id={id} email={user?.email} isUser={!isAuthenticated()?false:true}/>
        </div>
    </section>
  )
}
