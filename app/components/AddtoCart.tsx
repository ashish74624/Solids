'use client'
import React from 'react'

const backend = process.env.BACKEND

const addToCart=async(id:string)=>{
    const res = await fetch(`http://localhost:3000/api/addToCart`,{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id:id})
    });
    const data = await res.json();
    console.log(data.msg)
}

interface ID {
    id : string,
}

export default function AddtoCart({id}:ID) {
  return (
    <>
      <button onClick={()=>{addToCart(id)}} className=' w-56 h-12 text-2xl text-white rounded-lg bg-red-500 '>
          Add to Cart
      </button>
    </>
  )
}
