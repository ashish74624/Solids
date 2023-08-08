

export default function Navbar() {
  return (
    <>
        <header className="w-screen h-[52px] bg-[#F3F4F7]">
            <nav className="w-[80vw] h-full flex items-center justify-between mx-auto">
                <span className="text-red-500 text-lg">Ecommerce</span>
                <ul className="flex space-x-4">
                    <li>Men's Clothing</li>
                    <li>Women's Clothing</li>
                    <li>Jewelery</li>
                </ul> 
            </nav>
        </header> 
    </>
  )
}
