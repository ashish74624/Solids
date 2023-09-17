'use client'
import React from 'react'

const removeFromWishlist =async(id:string,email:string)=>{
  const backend = process.env.NODE_ENV==='production'?process.env.BACKEND :'http://localhost:3000';
  const res = await fetch(`${backend}/api/getWishlist/${email}`,{
    method:'DELETE',
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id:id
    })
  })
}

interface ID {
  id : string,
  userEmail ?: string
}

export default function RemoveFromWishlist({id,userEmail}:ID) {
  return (
    <button onClick={()=>{removeFromWishlist(id,userEmail as string)}} className='w-32 h-10 text-xl text-slate-500 border rounded-lg border-slate-500 '>
          Remove
      </button> 
  )
}
