import Link from "next/link"
import { Josefin_Slab } from "next/font/google"

const sc= Josefin_Slab({
  subsets:['latin'],
  weight: ['600'],
})


export default function Navbar() {
  return (
    <>
        <header className={`w-screen h-[52px] bg-[#F3F4F7]/50 z-50 fixed top-0 font-serif ${sc.className}`}>
            <nav className="w-[80vw] relative h-full flex items-end justify-between mx-auto">
                <span className={`text-red-500  my-auto text-4xl `}>Solids</span>
                <ul className="flex space-x-4 my-auto">
                  <Link href={'/'} className=" hover-btn" >
                    <li >Men&apos;s Clothing</li>
                  </Link>
                  <Link href={'/'} className=" hover-btn" >
                    <li >Women&apos;s Clothing</li>
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
