import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import UnAuthWishlist from '../components/UnAuthWishlist';
import WishListCard from '../components/WishListCard';

export default async function page() {
  const {isAuthenticated,getUser} = getKindeServerSession();
  const user = getUser();
  const backend= process.env.NODE_ENV==='production' ? process.env.BACKEND : 'http://localhost:3000'
  const res = await fetch(`${backend}/api/getWishlist/${user?.email}`);
  const data:any = await res.json();
  const product= data?.list
  return (
    <>
      {!isAuthenticated()
     ?
     (<UnAuthWishlist/>)
     :
     (
     <>
     <section className='text-2xl text-slate-900 p-4 bg-white mx-auto w-[75vw] rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-8 mb-4'>
        My Wishlist
     </section>
     <section className=' space-y-4'>
      {
        product.map((item:any)=>(
          <div key={item?._id}>
            <WishListCard title={item?.title} id={item?.id} image={item?.image}/>
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