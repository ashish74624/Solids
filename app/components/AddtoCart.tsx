'use client'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import AskToLogin from '../toast/AskToLogin';



const addToCart=async(id:string,user:string)=>{
  if(process.env.NODE_ENV ==='development'){
    let backend = 'http://localhost:3000';
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
  else if(process.env.NODE_ENV ==='production'){
    let backend = process.env.BACKEND
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
    
}

const askAuth=async()=>{
  toast.custom(<><AskToLogin/></>)
}

interface ID {
    id : string,
    isUser : boolean
    userEmail ?: string
}

export default function AddtoCart({id,userEmail,isUser}:ID) {

  return (
    <>
      <button onClick={()=>{ isUser? addToCart(id,userEmail as string): askAuth()}} className=' w-56 h-12 text-2xl text-white rounded-lg bg-red-500 '>
          Add to Cart
      </button> 
    <Toaster position="bottom-right" />
    </>
  )
}
