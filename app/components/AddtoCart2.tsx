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
    <Toaster position="bottom-right" />
    </>
  )
}
