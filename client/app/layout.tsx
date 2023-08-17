import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import { Josefin_Slab } from "next/font/google"

const sc= Josefin_Slab({
  subsets:['latin'],
  weight: ['600'],
})


export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Created by Ashish Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sc.className} bg-[#F3F4F7]`}>
        <header>
          <Navbar/>
        </header>
        {children}
      </body>
    </html>
  )
}
