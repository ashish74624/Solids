'use client'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';


const addToCart=async(id:string,user:string,title:string,price:number,image:string)=>{
  
    const res = await fetch(`/api/addToCart`,{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:id,
        user : user.toString(),
        title:title,
        price:Number(price),
        image:image
      })
    });
    const data = await res.json();
    toast.success(data.msg)
  }
  
const askAuth=async()=>{
  toast("Please Login To Continue")
}

interface ID {
    id : string,
    isUser : boolean,
    userEmail ?: string,
    title ?:string,
    price ?:number,
    image ?:string
}

export default async function AddtoCart({id,userEmail,isUser,title,price,image}:ID) {

  return (
    <>
      <button onClick={()=>{ isUser? addToCart(id,userEmail as string,title as string,Number(price),image as string): askAuth()}} className='w-36 md:w-40 h-10 lg:w-48 md:h-12 text-xl md:text-2xl text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300'>
          Add to Cart
      </button> 
      <Toaster position="bottom-right" 
        toastOptions={{
          className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </>
  )
}
