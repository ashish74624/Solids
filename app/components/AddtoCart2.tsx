'use client'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';



const addToCart=async(id:string,user:string)=>{
  const backend = process.env.NODE_ENV ==='production' ? '' :'http://localhost:3000';
  const res = await fetch(`${backend}/api/addToCart`,{
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

interface ID {
    id : string,
    userEmail ?: string
}

export default function AddtoCart2({id,userEmail}:ID) {

  return (
    <>
      <button onClick={()=>{ addToCart(id,userEmail as string)}} className=' w-32 h-10 text-xl text-red-500 bg-white rounded-lg border border-red-500 '>
          Add to Cart
      </button> 
      <Toaster position="bottom-right" 
        toastOptions={{
        className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </>
  )
}
