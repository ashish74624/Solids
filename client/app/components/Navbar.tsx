

export default function Navbar() {
  return (
    <>
        <header className="w-screen h-[52px] bg-[#F3F4F7]">
            <nav className="w-[80vw] h-full flex items-center justify-between mx-auto">
                <span className="text-red-500 text-lg">Peperfry</span>
                <ul className="flex space-x-4">
                    <li className="bg-blue-500 content-normal after:w-10 after:h-5 after:bg-red-600">Sofa's</li>
                    <li>Beds</li>
                    <li>Lamps</li>
                    <li>Curtains</li>
                </ul> 
            </nav>
        </header> 
    </>
  )
}
