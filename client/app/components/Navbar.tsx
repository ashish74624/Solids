import Link from "next/link"
import { Great_Vibes } from "next/font/google"

const GV= Great_Vibes({
  subsets:['latin'],
  weight: ['400'],
})


export default function Navbar() {
  return (
    <>
        <header className={`w-screen h-[52px] bg-[#F3F4F7] font-serif`}>
            <nav className="w-[80vw] relative h-full flex items-end justify-between mx-auto">
                <span className={`text-red-500  my-auto text-4xl ${GV.className}`}>Solids</span>
                <ul className="flex space-x-4 my-auto">
                  <Link href={'/'} className=" hover-btn" >
                    <li >Men's Clothing</li>
                  </Link>
                  <Link href={'/'} className=" hover-btn" >
                    <li >Women's Clothing</li>
                  </Link>
                  <Link href={'/'} className=" hover-btn" >
                    <li >Jewelery</li>
                  </Link>
                </ul> 
            </nav>
        </header> 
    </>
  )
}
