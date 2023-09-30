'use client'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

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
    callback_url : `${process.env.paymentServer}/paymentVerification/${email}/${id}`,
    prefill: { 
        name : `${firstName} ${lastName}`,
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
    
}

const askAuth=async()=>{
  toast("Please Login To Continue")
}

export default function BuyNow({id,price,firstName,lastName,email,isUser}:any) {

  return (
    <>
      <button className='w-36 md:w-40 h-10 lg:w-48 md:h-12 text-xl md:text-2xl text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 '
      onClick={()=>{isUser ? checkout(id,price,firstName,lastName,email) : askAuth() }}
      >
        Buy Now
      </button>
      <Toaster position="bottom-right" 
        toastOptions={{
          className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </>
  )
}
