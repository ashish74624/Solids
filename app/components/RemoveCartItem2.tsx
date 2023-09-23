'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"


export default function RemoveCartItem2({id,email}:any) {
  const router = useRouter();
  const remove=async(id:string,email:string)=>{
    const backend = process.env.NODE_ENV ==='production' ? process.env.BACKENDURL :'http://localhost:3000/api';
    const res = await fetch(`${backend}/getCartItems/${email}`,{
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
          <button onClick={()=>{remove(id,email as string)}}>
              <Button className='w-14 h-8' variant="outline">Remove</Button>
          </button>  
  )
}
