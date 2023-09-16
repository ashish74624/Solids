'use client'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import AskToLogin from '../toast/AskToLogin';

const addToWishlist=async(id:string,email:string)=>{
    const backend = process.env.NODE_ENV==='production'?process.env.BACKEND :'http://localhost:3000';
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
        })
    }
    catch{}
}

const askAuth=async()=>{
    toast.custom(<><AskToLogin/></>)
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
    <Toaster/>
    </>
  )
}
