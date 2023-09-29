'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import { Noto_Sans_Osmanya } from "next/font/google"
import Link from 'next/link';

const nso= Noto_Sans_Osmanya({
  subsets:['latin'],
  weight:['400']
})


export default async function Payment() {
    const searchParams = useSearchParams();
    const reference = searchParams.get('reference')
  return (
    <main className='h-screen w-screen flex justify-center mt-12'>
      <section className={`w-80 md:w-96 h-max pb-4 bg-white rounded-lg overflow-hidden ${nso.className} text-lg`}>
        <div className='relative w-full h-72'>
          <Image className=' w-full h-72' src={'/12.jpg'} alt="Product Image" width={300} height={300}/>
        </div>
        <div className='p-4'>
          <p className='text-green-500'>Payment Successful</p>
          <p>Reference No : <span className='text-blue-500'>{reference}</span> </p>
        </div>
        <Link href={'/'} className='w-full text-red-500 mx-auto hover:underline flex justify-center'>Continue Shoping...</Link>
      </section>
    </main>
  )
}
