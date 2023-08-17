import Link from "next/link"

export default function Navbar() {
  return (
    <>
        <header className= "w-screen h-14 bg-[#F3F4F7] z-50 font-serif ">
            <nav className="w-[80vw] relative h-full flex items-end justify-between mx-auto">
                <span className="text-red-500  my-auto text-4xl">Solids</span>
                <ul className="flex space-x-4 my-auto">
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
            </nav>
        </header> 
    </>
  )
}
