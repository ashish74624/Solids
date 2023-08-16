import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Categories() {
  return (
    <section className='h-max w-screen flex flex-col items-center my-4'>
      <h3 className='w-screen px-20 text-4xl'>Shop by categories &gt;</h3>
      <div className='grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 mt-4'>
        <article className=" w-96 bg-white border border-gray-200 rounded-sm shadow h-[370px]">
            <div className='w-96 h-64 relative group overflow-hidden'>
                <Image className="rounded-t-sm w-96 h-64 group-hover:scale-125  transition-all duration-500" src="/4.jpg" alt="" width={400} height={260} />
                <div className='absolute top-11 w-96 h-64 bg-slate-700 opacity-0 bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-50 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 text-white flex justify-center items-center'>Buy Now to get the best offers !</div>
            </div>   
            <caption className="px-5 py-3 w-full h-28 flex flex-col items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Men's Fashion</h5>
            <Link href='/' className=" items-center px-3 py-2 text-base font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full flex justify-center ">
                Shop Now 
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            </caption>
        </article>
        <article className="w-96 bg-white border border-gray-200 rounded-sm shadow h-[370px]"> 
            <div className='w-96 h-64 relative group overflow-hidden'>
                <Image className="rounded-t-sm w-96 h-64 group-hover:scale-125  transition-all duration-500" src="/5.jpg" alt="" width={400} height={260} />
                <div className='absolute top-11 w-96 h-64 bg-slate-700 opacity-0 bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-50 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 text-white flex justify-center items-center'>Check Out the best offers on Womens Fashion</div>
            </div>  
            <caption className="px-5 py-3 w-full h-28 flex flex-col items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Women's Fashion</h5>
            <Link href='/' className=" items-center px-3 py-2 text-base font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full flex justify-center ">
                Shop Now 
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            </caption>
        </article>
        <article className="w-96 bg-white border border-gray-200 rounded-sm shadow h-[370px]">   
            <div className='w-96 h-64 relative group overflow-hidden'>
                <Image className="rounded-t-sm w-96 h-64 group-hover:scale-125  transition-all duration-500" src="/6.jpg" alt="" width={400} height={260} />
                <div className='absolute top-11 w-96 h-64 bg-slate-700 opacity-0 bg-opacity-0 group-hover:top-0 group-hover:bg-opacity-50 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 text-white flex justify-center items-center'>Level up your Outfits</div>
            </div>
            <caption className="px-5 py-3 w-full h-28 flex flex-col items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Watchs</h5>
            <Link href='/' className=" items-center px-3 py-2 text-base font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full flex justify-center ">
                Shop Now 
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            </caption>
        </article>
        <article className="w-96 bg-white border border-gray-200 rounded-sm shadow h-[370px]">  
            <div className='w-96 h-64 relative group overflow-hidden'>
                <Image className="rounded-t-sm w-96 h-64 group-hover:scale-125  transition-all duration-500" src="/7.jpg" alt="" width={400} height={260} />
                <div className='absolute top-0 text-xl font-semibold w-96 h-64 bg-white bg-opacity-60  text-red-500 flex justify-center items-center'>Not Available at the moment</div>
            </div> 
            <caption className="px-5 py-3 w-full h-28 flex flex-col items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Shoes</h5>
            <Link href='/' className=" items-center px-3 py-2 text-base font-medium text-center text-white bg-gray-900 rounded-sm hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full flex justify-center ">
                Shop Now 
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            </caption>
        </article>
      </div>
    </section>
  )
}
