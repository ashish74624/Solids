'use client'
import React from 'react'
import Bin from '../Icons/Bin'
import { useRouter } from 'next/navigation'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function RemoveCartItem({id,email}:any) {
  const router = useRouter();
  const remove=async(id:string,email:string)=>{
    
    const res = await fetch(`/api/getCartItems/${email}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        id:id
      })  
    });
    if(res.ok){
      router.refresh();
    }
  }
  return (
    <>
      
      <HoverCard>
        <HoverCardTrigger>
          <button onClick={()=>{remove(id,email as string)}}>
              <Bin/>
          </button>  
        </HoverCardTrigger>
        <HoverCardContent className=' text-sm w-max px-2 h-max py-2'>
          Remove Item
        </HoverCardContent>
        </HoverCard>
      
    </>
  )
}
