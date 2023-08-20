import Link from "next/link"
import MenuButton from "./MenuButton"

export default function Navbar() {
  return (
    <>
        <header className= "w-screen h-14 bg-[#F3F4F7] z-50 font-serif ">
            <nav className=" w-[90vw] xl:w-[80vw] relative h-full flex items-end justify-between mx-auto">
                <Link href={'/'} className="text-red-500 my-auto text-4xl cursor-default">Solids</Link>
                <ul className="md:flex space-x-4 my-auto hidden">
                  <Link href={'/men'} className=" hover-btn" >
                    <li >Men&apos;s Clothing</li>
                  </Link>
                  <Link href={'/women'} className=" hover-btn" >
                    <li >Women&apos;s Clothing</li>
                  </Link>
                  <Link href={'/jewel'} className=" hover-btn" >
                    <li >Jewelery</li>
                  </Link>
                </ul> 
                <span className=" my-auto inline md:hidden">
                  <MenuButton/>
                </span>
            </nav>
        </header> 
    </>
  )
}
