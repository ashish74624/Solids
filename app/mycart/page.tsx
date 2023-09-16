import React from 'react'
import { getKindeServerSession , LoginLink , RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import UnAuthCart from '../components/UnAuthCart';
import CartCard from '../components/CartCard';

export default async function Cart() {
  const {isAuthenticated,getUser} = getKindeServerSession();
  const user = getUser();
  const backend= process.env.NODE_ENV==='production' ? process.env.BACKEND : 'http://localhost:3000'
  const res = await fetch(`${backend}/api/getCartItems/${user?.email}`);
  const data:any = await res.json();
  const cart= data?.cart
  let totalPrice=0
  for(const item of cart){
    totalPrice+=item.price;
  }
  return (
    <>
     {!isAuthenticated()
     ?
     (<UnAuthCart/>)
     :
     (
     <>
      <section className='relative w-[90vw] mx-auto '>
        <div className='flex flex-row w-full'>
          <div className='overflow-visible w-3/4 bg-white rounded-lg mr-2'>
            {
              cart.map((cart:any)=>
              (
                <div key={cart?._id}>
                  <CartCard title={cart?.title} image={cart?.image} price={cart?.price}/>
                </div>
              ))
            }
          <div className='flex items-center justify-end pr-8 w-full h-16'>
            <button className=' px-6 py-2 rounded-lg text-white bg-red-500 text-lg font-bold'>
              Place Order
            </button>
          </div>  
          </div>
          <div className='z-[2] sticky h-max bottom-0 w-96 top-10 bg-white divide-y px-5 py-3'>
            <div className='text-gray-400 text-2xl'>PRICE DETAILS</div>
              <ul className='w-full space-y-4 text-xl pt-2'>
                <li className='w-full flex justify-between'>
                  <span>Price({cart.length} items)</span>
                  ${totalPrice}
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
                {totalPrice-10}
              </div>
          </div>
        </div>
      </section>
     </>
     )
     } 
    </>
  )
}
