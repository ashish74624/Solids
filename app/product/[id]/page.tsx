import Offer from '@/app/Icons/Offer';
import Star from '@/app/Icons/Star';
import AddtoCart from '@/app/components/AddtoCart';
import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import BuyNow from '@/app/components/BuyNow';

type Params={
  params:{
    id:string
  }
}

export default async function Product({params:{id}}:Params) {
  const {isAuthenticated,getUser} = getKindeServerSession();
  const user = getUser();
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return (
    <>
      <section className='bg-[#F3F4F7] flex flex-col md:grid grid-cols-2 w-[95vw] mx-auto h-[90vh]'>
        <div className=' w-full h-full bg-white'>
          <Image className=' h-[500px] mx-auto w-[500px] mb-4 p-4 border mt-1' src={data.image} alt="Product Image" height={500} width={500} />
          <div id='buttons' className=' space-x-4 mx-auto w-max'>
            {!isAuthenticated()?<AddtoCart id={id} isUser={false}/>:<AddtoCart id={id} isUser={true} userEmail={user.email as string}/>}
            
            <BuyNow id={id} price={data.price} firstName={user.given_name} lastName={user.family_name} email={user.email} />
          </div>
        </div>
        <div className=' w-full h-full bg-white p-2 md:p-2 lg:p-10'>
          <p className='text-2xl md:text-3xl'>{data?.title}</p>
          <div id="rating" className=' mt-2 flex'>
            <span className=' rounded-lg text-sm bg-emerald-600 px-2 py-[0.1rem] text-white w-max flex'>
            {data.rating.rate}
            <Star/>
            </span>
            <p className=' ml-2 text-gray-600'> {data.rating.count} Ratings and {(Math.random() * 60).toFixed()}  Reviews </p>
          </div>
          <h3 id="price" className=' mt-3 text-3xl'>$ {data.price}</h3>
          <div id='Offers' className=' mt-3 text-sm'>
            <h4 className='text-xl'>Availale Offers</h4>
            <h5 className=' flex h-10 lg:h-6 items-center'>
              <span className='md:inline hidden'><Offer/></span> Bank Offer: 5% Cashback on Axis Bank Card
            </h5>
            <h5 className=' flex h-10 lg:h-6 items-center'>
              <span className='md:inline hidden'><Offer/></span> Bank Offer: 4% Off On HDFC Bank Credit Card Transactions
            </h5>
            <h5 className=' flex h-10 lg:h-6 items-center'>
              <span className='md:inline hidden'><Offer/></span> Bank Offer: 7% Off On HDFC Bank Debit Card EMI Transactions
            </h5>
            <h5 className=' flex h-10 lg:h-6 items-center'>
              <span className='md:inline hidden'><Offer/></span> Special Offer: Get extra 10% off (price inclusive of cashback/coupon)
            </h5>
          </div>
          <div id="desp" className=' mt-3'>
            <h4 className=' text-2xl underline'>Description</h4>
            <p className=' text-lg'>
              {data.description}
            </p>
          </div>
        </div>
      </section>
      <Toaster position="bottom-right" 
        toastOptions={{
        className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </>
  )
}
