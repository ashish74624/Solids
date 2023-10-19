'use client'
import OrderCard from '@/app/components/OrderCard'
import OrderSusp from '@/app/components/OrderSusp'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
type Params ={
  params:{
    email:string
  }
}

export default  function Order(email:any) {
  const [product,setProduct] = useState([])
  const [eml,setEml] = useState('')
  const [isLoading,setLoading] = useState(true)
  useEffect(()=>{
    const getOrders = async () => {
      const email1 = email.replace('%40','@')
      const backend = process.env.NODE_ENV == 'production' ? process.env.BACKENDURL :'http://localhost:3000';
      const res = await fetch(`${backend}/api/getOrders/${email1}`)
      const d = await res.json()
      const data = d?.product
      setProduct(data)
      setEml(email1)
      setLoading(false)
    }
    getOrders();
  },[product.length])

  if(product.length ===0 || product === undefined){
    return(
      <section className='lg:w-[80vw] md:w-[90vw] w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 '>
      <div className='col-span-1 md:col-span-2 lg:col-span-3 w-full text-3xl font-sans mt-5'>Your Orders</div>
      {
      isLoading ?
      (
      <>
        <OrderSusp/>
      </>
      ):
      (
      <div className='w-full h-80 col-span-3 font-sans flex justify-center items-center flex-col'>
        You Do not have any orders yet
        <Link className=' text-red-500 hover:underline' href={'/'}>Continue shoping</Link>
      </div>
      )
      }
    </section>
    )
  }

  return (
    <section className='lg:w-[80vw] md:w-[90vw] w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4'>
      <div className='col-span-1 md:col-span-2 lg:col-span-3 text-3xl font-sans mt-5'>Your Orders</div>
      {
      isLoading ?
      (
      <>
        <OrderSusp/>
      </>
      ):
      (
      <>
        {product?.map((item:any)=>(
        <>
          <OrderCard id={item.id} img={item.image} title={item.title} email={eml}/>
        </>
      ))}
      </>
      )
      }
    </section>
  )
}
