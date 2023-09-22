import React from 'react'
import { Noto_Sans_Osmanya } from "next/font/google"
import { LiaGreaterThanSolid } from "react-icons/lia";
import Link from 'next/link';

const nso= Noto_Sans_Osmanya({
    subsets:['latin'],
    weight:['400']
  })

export default function page() {
  return (
    <>
    <h1 className={`mx-auto w-min my-4 text-5xl ${nso.className}`}>Policies</h1>
    <section className={`flex flex-col bg-white p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto place-content-center ${nso.className} divide-y-2 text-xl w-96 md:w-[500px] rounded-lg`}>
        <div className='py-2 hover:text-blue-500'>
            <a className="flex w-full justify-between"href="https://merchant.razorpay.com/policy/MfQmyQMkXcExD0/privacy" target="_blank">
                Privacy Policy 
                <LiaGreaterThanSolid/>
            </a>
        </div>
        <div className='py-2 hover:text-blue-500'>
            <a className="flex w-full justify-between"href="https://merchant.razorpay.com/policy/MfQmyQMkXcExD0/terms" target="_blank">
                Terms and Condition 
                <LiaGreaterThanSolid/>
            </a>
        </div>
        <div className='py-2 hover:text-blue-500'>
            <a className="flex w-full justify-between"href="https://merchant.razorpay.com/policy/MfQmyQMkXcExD0/refund" target="_blank">
                Cancellation and refund 
                <LiaGreaterThanSolid/>
            </a>
        </div>
        <div className='py-2 hover:text-blue-500'>
            <a className="flex w-full justify-between"href="https://merchant.razorpay.com/policy/MfQmyQMkXcExD0/shipping" target="_blank">
                Shipping details 
                <LiaGreaterThanSolid/>
            </a>
        </div>
        <div className='py-2 hover:text-blue-500'>
            <a className="flex w-full justify-between"href="https://merchant.razorpay.com/policy/MfQmyQMkXcExD0/contact_us" target="_blank">
                Contact us 
                <LiaGreaterThanSolid/>
            </a>
        </div>
        <div className='py-2 hover:text-blue-500'>
            <Link className="flex w-full justify-between" href="/">
                Back Home
                <LiaGreaterThanSolid/>
            </Link>
        </div>
    </section>              
    </>
  )
}
