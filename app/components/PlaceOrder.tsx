'use client'
import React, { useState } from 'react'
import Loading from '../Icons/Loading'

export default function PlaceOrder({price,email,firstName,lastName}:any) {
  const [loading,setLoading] = useState(false)
  const getCardItems= async()=>{
    setLoading(true)
    const res1 = await fetch(`/api/getCartItems/${email}`)
    const data1 = await res1.json()
    let lst =[]
    const cart= data1?.cart
    if(cart){
      for(const item of cart){
        lst.push(`${item.product_id}-${item.quantity}`)
      }
    }
    const res = await fetch(`${process.env.paymentServer}/checkout`,{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body: JSON.stringify({
          amount: Number(price)
      })
  });
  const data = await res.json();
  const options = {
    key: "rzp_test_XpNRA8Qw0nU8TX", // Enter the Key ID generated from the Dashboard
    amount: data.order.amount, 
    currency: "INR",
    name: "Solids", 
    description: "Test Transaction",
    image : "https://image-get.onrender.com/ashishkumar74624@gmail.com/solids/1.png",
    order_id : data.order.id, 
    callback_url : `${process.env.paymentServer}/payment/${email}/${lst}`,
    prefill: { 
        name : `${firstName} ${lastName}`, //your customer's name
        email: email,
        contact: ""
    },
    notes: {
        address: "Razorpay Corporate Office"
    },
    theme: {
        color: "#1f2937"
    }
};
const razor = new (window as any).Razorpay(options);
razor.open();
setLoading(false)
  }
  return (
    <>
        <button disabled={loading} className={` w-full h-10 md:h-11 text-xl text-white ${loading?"bg-gray-500":"bg-gray-800"} rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300`}
        onClick={()=>{getCardItems()}}
        >
          {loading
          ?
          <>
            <Loading/> Place Order
          </>
          :
          <>Place Order</>
          }
            
        </button>  
    </>
  )
}
