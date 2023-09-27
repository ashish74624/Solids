import React from 'react'
import Star from '../Icons/Star';

export default function loading() {
  return (
    <>
      <main className=' w-screen h-[92vh] overflow-x-hidden overflow-y-scroll flex flex-col'>
      <h1 className='mt-4 text-2xl md:text-3xl mx-4'>Latest in Women&apos;s Fashion &gt;</h1>
      <section className='grid grid-cols-1 md:grid md:grid-cols-2 w-[82vw] xl:w-[53vw] gap-y-4 self-center place-items-center mt-4 animate-pulse'>
      {/* 1 */}
      <section className='relative'>
        <div className=" w-80 xl:w-96 min-h-[428px] h-max pb-2 bg-white border border-gray-200 rounded-lg shadow group ">
            <div className="rounded-t-lg pb-2 h-72 overflow-hidden flex items-center justify-center pt-1">
                <img className="rounded-t-lg pb-2 h-32 overflow-hidden" src='11.png' alt="product image" />
            </div>
            
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight rounded-full bg-gray-900 h-5 w-full "></h5>
                <div className="flex items-center mt-2.5 mb-5">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-5 w-10 ml-3"></span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 h-5 w-10 "></span>
                </div>
            </div>
        </div>
        <div className='absolute z-50 right-5 bottom-6'>
        <button className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-10 w-28 text-center
    ">
        Add to Wishlist
    </button>
        </div>
    </section>
    {/* 2 */}
    <section className='relative'>
        <div className=" w-80 xl:w-96 min-h-[428px] h-max pb-2 bg-white border border-gray-200 rounded-lg shadow group ">
            <div className="rounded-t-lg pb-2 h-72 overflow-hidden flex items-center justify-center pt-1">
                <img className="rounded-t-lg pb-2 h-32 overflow-hidden" src='11.png' alt="product image" />
            </div>
            
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight rounded-full bg-gray-900 h-5 w-full "></h5>
                <div className="flex items-center mt-2.5 mb-5">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-5 w-10 ml-3"></span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 h-5 w-10 "></span>
                </div>
            </div>
        </div>
        <div className='absolute z-50 right-5 bottom-6'>
        <button className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-10 w-28 text-center
    ">
        Add to Wishlist
    </button>
        </div>
    </section>
    {/* 3 */}
    <section className='relative'>
        <div className=" w-80 xl:w-96 min-h-[428px] h-max pb-2 bg-white border border-gray-200 rounded-lg shadow group ">
            <div className="rounded-t-lg pb-2 h-72 overflow-hidden flex items-center justify-center pt-1">
                <img className="rounded-t-lg pb-2 h-32 overflow-hidden" src='11.png' alt="product image" />
            </div>
            
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight rounded-full bg-gray-900 h-5 w-full "></h5>
                <div className="flex items-center mt-2.5 mb-5">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-5 w-10 ml-3"></span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 h-5 w-10 "></span>
                </div>
            </div>
        </div>
        <div className='absolute z-50 right-5 bottom-6'>
        <button className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-10 w-28 text-center
    ">
        Add to Wishlist
    </button>
        </div>
    </section>
    {/* 4 */}
    <section className='relative'>
        <div className=" w-80 xl:w-96 min-h-[428px] h-max pb-2 bg-white border border-gray-200 rounded-lg shadow group ">
            <div className="rounded-t-lg pb-2 h-72 overflow-hidden flex items-center justify-center pt-1">
                <img className="rounded-t-lg pb-2 h-32 overflow-hidden" src='11.png' alt="product image" />
            </div>
            
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight rounded-full bg-gray-900 h-5 w-full "></h5>
                <div className="flex items-center mt-2.5 mb-5">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-5 w-10 ml-3"></span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 h-5 w-10 "></span>
                </div>
            </div>
        </div>
        <div className='absolute z-50 right-5 bottom-6'>
        <button className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-10 w-28 text-center
    ">
        Add to Wishlist
    </button>
        </div>
    </section>
      </section>
      
    </main>
    </>
  )
}
