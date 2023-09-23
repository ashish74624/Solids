'use client'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';


const addToCart=async(id:string,user:string)=>{
    const backend = process.env.NODE_ENV ==='production' ? process.env.BACKENDURL :'http://localhost:3000/';
    const res = await fetch(`${backend}api/addToCart`,{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:id,
        user : user.toString(),
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
    isUser : boolean
    userEmail ?: string
}

export default async function AddtoCart({id,userEmail,isUser}:ID) {

  return (
    <>
      <button onClick={()=>{ isUser? addToCart(id,userEmail as string): askAuth()}} className='w-36 md:w-40 h-10 lg:w-48 md:h-12 text-xl md:text-2xl text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300'>
          Add to Cart
      </button> 
      <Toaster position="bottom-right" 
        toastOptions={{
          className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </>
  )
}
