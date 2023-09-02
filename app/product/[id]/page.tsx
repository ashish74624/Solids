import Offer from '@/app/Icons/Offer';
import Star from '@/app/Icons/Star';
import AddtoCart from '@/app/components/AddtoCart';
import React from 'react'

type Params={
  params:{
    id:string
  }
}

export default async function Product({params:{id}}:Params) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return (
    <>
      <section className=' bg-[#F3F4F7] grid grid-cols-2 w-[95vw] mx-auto h-[90vh]'>
        <div className=' w-full h-full bg-white'>
          <img className=' h-[500px] mx-auto w-[500px] mb-4 p-4 border mt-1' src={data.image} alt="" />
          <div id='buttons' className=' space-x-8 mx-auto w-max'>
            <AddtoCart id={id}/>
            <button className=' w-56 h-12 text-2xl text-white rounded-lg bg-red-500 '>
              Buy Now
            </button>
          </div>
        </div>
        <div className=' w-full h-full bg-white p-10'>
          <p className=' text-3xl'>{data?.title}</p>
          <div id="rating" className=' mt-2 flex'>
            <span className=' rounded-lg text-sm bg-emerald-600 px-2 py-[0.1rem] text-white w-max flex'>
            {data.rating.rate}
            <Star/>
            </span>
            <p className=' ml-2 text-gray-600'> {data.rating.count} Ratings and {(Math.random() * 60).toFixed()}  Reviews </p>
          </div>
          <h3 id="price" className=' mt-3 text-3xl'>$ {data.price}</h3>
          <div id='Offers' className=' mt-3'>
            <h4 className='text-xl'>Availale Offers</h4>
            <h5 className=' flex h-6 items-center'>
              <Offer/> Bank Offer: 5% Cashback on Axis Bank Card
            </h5>
            <h5 className=' flex h-6 items-center'>
              <Offer/> Bank Offer: 4% Off On HDFC Bank Credit Card Transactions
            </h5>
            <h5 className=' flex h-6 items-center'>
              <Offer/> Bank Offer: 7% Off On HDFC Bank Debit Card EMI Transactions
            </h5>
            <h5 className=' flex h-6 items-center'>
              <Offer/> Special Offer: Get extra 10% off (price inclusive of cashback/coupon)
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
    </>
  )
}
