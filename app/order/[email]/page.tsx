'use client'
import OrderCard from '@/app/components/OrderCard'
import React, { useEffect, useState } from 'react'

type Params ={
  params:{
    email:string
  }
}

export default  function page({params:{email}}:Params) {
  
  const [product,setProduct] = useState([])
  const [eml,setEml] = useState('')
  useEffect(()=>{
    const getOrders = async () => {
      const email1 = email.replace('%40','@')
      const backend = process.env.NODE_ENV == 'production' ? process.env.BACKENDURL :'http://localhost:3000';
      const res = await fetch(`${backend}/api/getOrders/${email1}`)
      const d = await res.json()
      const data = d.product
      setProduct(data)
      setEml(email1)
    }
    getOrders();
  },[])
  return (
    <section className='lg:w-[80vw] md:w-[90vw] w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4'>
      <div className='col-span-1 md:col-span-2 lg:col-span-3 text-3xl font-sans mt-10'>Your Orders</div>
      {product.map((item:any)=>(
        <>
          <OrderCard img={item.image} title={item.title} email={eml}/>
        </>
      ))}
    </section>
  )
}