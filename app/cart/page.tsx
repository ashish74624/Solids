import React, { use } from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import UnAuthCart from '../components/UnAuthCart';
import CartCard from '../components/CartCard';
import Link from 'next/link';
import CartSide from '../components/CartSide';

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
                  <CartCard id={cart?.product_id} email={user?.email} title={cart?.title} image={cart?.image} itemPrice={cart?.price} quant={cart?.quantity} totalPrice={totalPrice} />
                </div>
              ))
            }
          <div className='hidden lg:flex items-center justify-end pr-8 w-full h-16'></div>  
          </div>
          <CartSide email={user?.email} given_name={user?.given_name} family_name={user?.family_name} length={cart?.length} />
        </div>
      </section>
     </>
     )
     } 
    </>
  )
}