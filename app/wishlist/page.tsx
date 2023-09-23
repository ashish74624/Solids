import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import UnAuthWishlist from '../components/UnAuthWishlist';
import WishListCard from '../components/WishListCard';
import Link from 'next/link';

export default async function page() {
  const {isAuthenticated,getUser} = getKindeServerSession();
  const user = getUser();
  const backend = process.env.NODE_ENV == 'production' ? process.env.BACKENDURL :'http://localhost:3000/';
  const res = !isAuthenticated() ? undefined : await fetch(`${backend}/api/getWishlist/${user?.email}`,{
    cache:'no-store'
  });
  const data:any = await res?.json();
  const product= data?.list
  if(isAuthenticated() && product?.length<=0){
    return(
      <>
        <div>
          <div className='text-2xl text-slate-900 p-4 bg-white mx-auto w-[95vw] lg:w-[75vw] rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-8 mb-4 '>
            My Wishlist
          </div>
          <div className=' bg-white mx-auto w-[95vw] lg:w-[75vw] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col justify-center items-center h-96 rounded-3xl'>
            <p className="text-xl">Your wish list is empty</p>
            <p className='hover:underline'><Link href='/'>Continue Shoping...</Link></p>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      {!isAuthenticated()
     ?
     (<UnAuthWishlist/>)
     :
     (
     <>
     <section className='text-2xl text-slate-900 p-4 bg-white mx-auto w-[95vw] lg:w-[75vw] rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-8 mb-4'>
        My Wishlist
     </section>
     <section className=' space-y-4'>
      {
        product.map((item:any)=>(
          <div key={item?.id}>
            <WishListCard email={user?.email} title={item?.title} id={item?.id} image={item?.image} price={item?.price}/>
          </div>
        ))
      }
     </section>
      
     </>
     )
      }
    </>
  )
}
