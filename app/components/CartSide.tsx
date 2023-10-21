'use client'
import React, { useEffect } from 'react'
import PlaceOrder from './PlaceOrder'
import { usePrice } from '../context/PriceContext'

export default function CartSide({length,given_name,email,family_name}:any) {
    const {price,setPrice}:any = usePrice()
    useEffect(()=>{
      const check = async() => {
        const backend=process.env.NODE_ENV=='production'?process.env.BACKENDURL:'http://localhost:3000'
        const res = await fetch(`${backend}/api/getCartItems/${email}`);
        const data = await res.json();
        const cart = data?.cart
        let totalPrice=0;
        for(const item of cart){
          totalPrice += (item.price* item.quantity)
        }
        setPrice(totalPrice)
      }
      check();
    },[])
  return (
    <>
      <div className='z-[2] relative lg:sticky h-max lg:bottom-0 w-full lg:mt-0 mt-4 lg:w-96 lg:top-10 bg-white divide-y px-5 py-3 rounded-lg'>
            <div className='text-gray-400 text-2xl'>PRICE DETAILS</div>
              <ul className='w-full space-y-4 text-xl pt-2'>
                <li className='w-full flex justify-between'>
                  <span>Price({length} items)</span>
                  ${(price).toFixed(2)}
                </li>
                <li className='w-full flex justify-between'>
                  <span>Discount</span>
                  <span className='text-green-500'>-$10</span>
                </li>
                <li className='w-full flex justify-between'>
                  <span>Delivery</span>
                  Free
                </li>
              </ul>
              <div className='w-full flex justify-between text-2xl font-bold pt-4'>
                <span>TOTAL AMOUNT</span>
                {(price-10).toFixed(2)}
              </div>
              <div className='mt-4'>
                <PlaceOrder price={price} email={email} firstName={given_name} lastName={family_name}/>
              </div>
          </div>
    </>
  )
}
