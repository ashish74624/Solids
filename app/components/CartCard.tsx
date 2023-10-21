'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import RemoveCartItem from './RemoveCartItem'
import RemoveCartItem2 from './RemoveCartItem2'
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { usePrice } from '../context/PriceContext'

export default function CartCard({title,image,totalPrice,itemPrice,id,email,quant}:any) {
    const {price,setPrice}:any = usePrice()
    // setPrice(totalPrice)
    const [quantity,setQuantity] = useState(Number(quant))
    const decrement = async()=>{
        setQuantity(quantity<=1?quantity:quantity-1);
        setPrice(quantity<=1?price:price-itemPrice)
        const res = quantity<=1?undefined:await fetch(`/api/decQuant`,{
            method:'PATCH',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                id:id
            })
        })
    }
    const increment = async()=>{
        setQuantity(quantity+1);
        setPrice(price+itemPrice)
        const res = await fetch(`/api/incQuant`,{
            method:'PATCH',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                id:id
            })
        })
    }
  return (
    <>
     <section className='relative w-full h-32 md:h-56 flex p-1 pt-2 md:pt-4 md:p-4 border-b border-black'>
        <div className='w-20 md:w-36 flex flex-col'>
            <div className='h-20 w-20 md:h-36 md:w-36 rounded-lg'>
                <Image className=' h-20 w-20 md:h-36 md:w-36 rounded-lg' height={200} width={200} src={image} alt="Img" />
            </div>
            <div className='flex-grow'></div>
            <span className='w-20 md:w-36 h-6 md:h-8 grid grid-cols-3 border border-gray-900 rounded overflow-hidden'>
                <button className='bg-gray-900 hover:bg-gray-800 grid place-content-center text-base md:text-xl text-white h-full w-full md:pb-0 '
                onClick={()=>{decrement()}}
                >
                    <AiOutlineDown />
                </button>
                <span className='grid place-content-center text-base md:text-2xl'>
                    {quantity}
                </span>
                <button className='bg-gray-900 hover:bg-gray-800 flex justify-center items-center text-base md:text-xl text-white h-full w-full md:pb-1 '
                onClick={()=>{increment()}}
                >
                    <AiOutlineUp />
                </button>
            </span>
        </div>
        <div className='w-full ml-8 h-full flex flex-col'>
            <div className='w-full text-lg md:text-xl lg:text-2xl flex justify-between'>
                <h3>{title}</h3> 
                <span className='md:inline hidden'>
                    <RemoveCartItem id={id} email={email}/>
                </span>
            </div>
            <p className='text-xl md:text-2xl lg:text-3xl'>Price: ${itemPrice}</p>
            <div className='flex-grow'></div>
            <span id='h' className='md:hidden inline'>
                <RemoveCartItem2/>
            </span>
        </div>
     </section> 
    </>
  )
}
