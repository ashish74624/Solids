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

interface ID {
  id : string,
  userEmail ?: string,
  title ?:string,
  price ?:number,
  image ?:string
}

export default function AddtoCart2({id,userEmail,title,price,image}:ID) {

  return (
    <>
      <button onClick={()=>{ addToCart(id,userEmail as string,title as string,Number(price),image as string)}} className=' w-32 h-10 text-xl text-red-500 bg-white rounded-lg border border-red-500 '>
          Add to Cart
      </button> 
      <Toaster position="bottom-right" 
        toastOptions={{
        className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </>
  )
}
