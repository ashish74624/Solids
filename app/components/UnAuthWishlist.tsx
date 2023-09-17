import React from 'react'
import Image from 'next/image'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { Noto_Sans_Osmanya } from "next/font/google"
import Link from 'next/link'

const nso= Noto_Sans_Osmanya({
  subsets:['latin'],
  weight:['400']
})


export default function UnAuthWishlist() {
  return (
    <>
     <section className=' w-screen h-screen'>
        <div className=' w-11/12 h-[70vh] bg-white mx-auto flex flex-col justify-center items-center space-y-2'>
            <Image className=' w-96 h-80 rounded-lg' src='/9.jpg' alt='Cart Image' width={320} height={320} />
            <h1>Missing Wishlist items?</h1>
            <p>Login to see the items you added previously</p>
            <LoginLink className={`h-8 w-24 bg-red-500 text-white grid place-content-center rounded-lg font-serif ${nso.className}`}>Log In</LoginLink>
            <p className=' hover:underline'><Link href={'/'}>or Go to home page ?</Link></p>
        </div>
     </section> 
    </>
  )
}
