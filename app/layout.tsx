import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import { Josefin_Slab } from "next/font/google"

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
        <header>
          <Navbar/>
        </header>
        {children}
      </body>
    </html>
  )
}
