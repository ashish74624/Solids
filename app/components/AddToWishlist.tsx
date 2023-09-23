'use client'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const addToWishlist=async(id:string,email:string)=>{
    const backend = process.env.NODE_ENV==='production'? process.env.BACKENDURL :'http://localhost:3000';
    try{
        const res = await fetch(`${backend}/api/addToWishlist`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:id,
                email : email.toString(),
            })
        });
        const data = await res.json();
        toast(data.msg)
    }
    catch{}
}

const askAuth=async()=>{
    toast("Please Login To Continue")
}


export default function AddToWishlist({id,email,isUser}:any) {
  return (
    <>
    <button className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm h-10 w-28 text-center
    "
    onClick={()=>{isUser? addToWishlist(id,email as string): askAuth()}}
    >
        Add to Wishlist
    </button>
    <Toaster position="bottom-right" 
    toastOptions={{
      className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </>
  )
}
