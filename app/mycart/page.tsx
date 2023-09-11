import React from 'react'
import { getKindeServerSession , LoginLink , RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import UnAuthCart from '../components/UnAuthCart';
import CartCard from '../components/CartCard';

export default async function Cart() {
    const {isAuthenticated,getUser} = getKindeServerSession();
    const user = getUser();
    if(!isAuthenticated()){}
    if(process.env.NODE_ENV ==='development'){
      let backend = 'http://localhost:3000';
      const res = await fetch(`${backend}/api/getCartItems/${user.email}`);
      const data = await res.json();
    }
    else if(process.env.NODE_ENV ==='production'){
      let backend = process.env.BACKEND
      const res = await fetch(`${backend}/api/getCartItems/${user.email}`);
      const data = await res.json();
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
          <div id='red' className='overflow-visible w-3/4 bg-white rounded-lg mr-2'>
            <CartCard/>
            <CartCard/>
            <CartCard/>
          </div>
          <div id='green' className='z-[2] sticky h-20 bottom-0 w-96 top-10 bg-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, animi.
          </div>
        </div>
      </section>
     </>
     )
     } 
    </>
  )
}
