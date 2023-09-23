'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';


interface ID {
  id : string,
  userEmail ?: string
}

export default function RemoveFromWishlist({id,userEmail}:ID) {
  const router = useRouter();
  const removeFromWishlist =async(id:string,email:string)=>{
  
    const backend = process.env.NODE_ENV==='production'?process.env.BACKEND :'http://localhost:3000/';
    console.log(backend)
    const res = await fetch(`${backend}api/getWishlist/${email}`,{
      method:'DELETE',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:id
      })
    });
    const data = await res.json();
    toast.success(data.msg);
    if(res.ok){
      router.refresh();
    }
  }
  
  return (
    <>
    <button onClick={()=>{removeFromWishlist(id,userEmail as string)}} className='w-32 h-10 text-xl text-slate-500 border rounded-lg border-slate-500 '>
          Remove
      </button> 
      <Toaster position="bottom-right" 
        toastOptions={{
        className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </>
  )
}
