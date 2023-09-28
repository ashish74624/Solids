'use client'
import React from 'react'

const checkout =async(id:string,price:string,firstName:string,lastName:string,email:string)=>{
    const res = await fetch(`${process.env.paymentServer}/checkout`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            id:id,
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
    callback_url : `${process.env.paymentServer}/paymentVerification/${id}`,
    prefill: { 
        name : `${firstName} ${lastName}`, //your customer's name
        email: email,
        contact: "9999999999"
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
    
}

export default function BuyNow({id,price,firstName,lastName,email}:any) {

  return (
    <>
      <button className='w-36 md:w-40 h-10 lg:w-48 md:h-12 text-xl md:text-2xl text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 '
      onClick={()=>{checkout(id,price,firstName,lastName,email)}}
      >
        Buy Now
      </button>
    </>
  )
}
