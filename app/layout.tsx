import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import { Josefin_Slab } from "next/font/google"
import Script from 'next/script'
import { PriceProvider } from './context/PriceContext'

const sc= Josefin_Slab({
  subsets:['latin'],
  weight: ['600'],
})


export const metadata: Metadata = {
  title: 'Solids',
  description: 'Created by Ashish Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sc.className} bg-[#F3F4F7] h-screen w-screen overflow-x-hidden overflow-y-scroll`}>
        <PriceProvider>
        <header>
          <Navbar/>
        </header>
        {children}
      </PriceProvider>
      </body>
      <Script src='https://checkout.razorpay.com/v1/checkout.js'/>
    </html>
  )
}
