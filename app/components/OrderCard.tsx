'use client'
import React from 'react'

export default function OrderCard({id,img,title,email}:any) {
    const cancelOrder = async()=>{
        const res = fetch(`/api/getOrders/${email}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                id:id
            })
        })
      }
  return (
    <>
        <div className=" w-80 xl:w-96 min-h-[410px] h-max pb-2 bg-white border border-gray-200 rounded-lg shadow  ">
            <div className="rounded-t-lg pb-2 h-72 overflow-hidden flex justify-center pt-1">
                <img className="rounded-t-lg pb-2 h-72 overflow-hidden" src={img} alt="product image" />
            </div>
            
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition-all duration-500 ">{(title.length>30) ?title.substring(0,29)+'...':title}</h5>
            </div>
            <div className='w-full flex justify-center'>

            <button className=' w-72 mx-auto h-10 font-sans text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300'
            onClick={cancelOrder}
            >
                Cancel Order
            </button>
            </div>
        </div>
    </>
  )
}
