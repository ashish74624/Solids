import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import UnAuthCart from '../components/UnAuthCart';
import CartCard from '../components/CartCard';
import Link from 'next/link';
import PlaceOrder from '../components/PlaceOrder';

export default async function Cart() {
  const {isAuthenticated,getUser} = getKindeServerSession();
  const user = getUser();
  const backend= process.env.NODE_ENV==='production' ? process.env.BACKENDURL : 'http://localhost:3000'
  const res = !isAuthenticated() ? undefined : await fetch(`${backend}/api/getCartItems/${user?.email}`,{cache:'no-store'});
  const data:any = await res?.json();
  const cart= data?.cart
  let totalPrice=0
  if(cart){
    for(const item of cart){
      totalPrice+=item.price;
    }
  }

  if(isAuthenticated() && cart?.length<=0){
    return (
      <>
        <section className='w-[90vw] mx-auto bg-white'>
          <div className='w-full border-b-2 border-black px-4 pt-4 pb-2 text-2xl'>My Cart</div>
          <div className=' w-full h-96 flex flex-col justify-center items-center'>
            <p className='text-2xl'>Your Cart is Empty</p>
            <Link className='hover:underline' href={'/'}>Continue Shoping...</Link>
          </div>
        </section>
      </>
    )
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
        <div className='flex flex-col lg:flex-row w-full'>
          <div className='overflow-visible w-full lg:w-3/4 bg-white rounded-lg mr-2'>
            <p className=' w-full border-b-2 border-black px-4 pt-4 pb-2 text-2xl'>My Cart</p>
            {
              cart.map((cart:any)=>
              (
                <div key={cart?.id}>
                  <CartCard id={cart?.id} email={user?.email} title={cart?.title} image={cart?.image} price={cart?.price} quant={cart?.quantity} />
                </div>
              ))
            }
          <div className='hidden lg:flex items-center justify-end pr-8 w-full h-16'></div>  
          </div>
          <div className='z-[2] relative lg:sticky h-max lg:bottom-0 w-full lg:mt-0 mt-4 lg:w-96 lg:top-10 bg-white divide-y px-5 py-3 rounded-lg'>
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
              <div className='mt-4'>
                <PlaceOrder price={totalPrice} email={user?.email} firstName={user?.given_name} lastName={user?.family_name}/>
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
