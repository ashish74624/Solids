'use client'
import React from 'react'

const addToCart=(id:string)=>{
    console.log(id)
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
