'use client'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

export default function OrderCard({id,img,title,email,quantity}:any) {
    const cancelOrder = async()=>{
        const res = await fetch(`/api/getOrders/${email}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                id:id
            })
        })
        if(res.ok){
          window.location.reload()
        }
      }
  return (
    <>
        <div className={`w-80 lg:w-96 min-h-[410px] h-max pb-2 bg-white border border-gray-200 rounded-lg shadow`}>
            <div className="rounded-t-lg pb-2 h-72 overflow-hidden flex justify-center pt-1">
                <img className="rounded-t-lg pb-2 h-72 overflow-hidden" src={img} alt="product image" />
            </div>
            
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition-all duration-500 ">{(title?.length>30) ?title.substring(0,29)+'...':title}</h5>
                <h5>Quantity : {quantity}</h5> 
            </div>
            <div className='w-full flex justify-center'>
                <Dialog>
                    <DialogTrigger className=' w-72 mx-auto h-10 font-sans text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 active:bg-gray-800'>
                        Cancel Order
                    </DialogTrigger>
                    <DialogContent className=' font-sans'>
                        <DialogHeader>
                            <DialogTitle>
                                Are you sure absolutely sure?
                            </DialogTitle>
                            <DialogDescription className=' flex w-ful h-full flex-col'>
                                This action cannot be undone. This will permanently delete your order
                                and remove your data from our servers.
                                <button className='w-20 h-10 rounded-lg text-white bg-red-500 self-end '
                                onClick={()=>{cancelOrder();}}>
                                    Ok
                                </button>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </>
  )
}
