import Link from "next/link"

export default function Navbar() {
  return (
    <>
        <header className="w-screen h-[52px] bg-[#F3F4F7]">
            <nav className="w-[80vw] relative h-full flex items-end justify-between mx-auto">
                <span className="text-red-500 text-lg my-auto">Ecommerce</span>
                <ul className="flex space-x-4">
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
