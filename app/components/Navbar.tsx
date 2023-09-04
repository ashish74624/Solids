import Link from "next/link"
import MenuButton from "./MenuButton"
import {PiUserThin} from  "react-icons/pi"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Noto_Sans_Osmanya } from "next/font/google"

const nso= Noto_Sans_Osmanya({
  subsets:['latin'],
  weight:['400']
})


export default function Navbar() {
  return (
    <>
        <header className= "w-screen h-14 bg-[#F3F4F7] z-50 font-serif ">
            <nav className=" w-[90vw] xl:w-[80vw] relative h-full flex items-end justify-between mx-auto">
                <Link href={'/'} className="text-red-500 my-auto text-4xl ">Solids</Link>
                <ul className="md:flex space-x-4 my-auto hidden">
                  <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className={` flex text-xl h-10 w-[115px] items-center justify-between px-2 border ${nso.className}`}>
                      <span className="text-3xl"><PiUserThin/></span>
                       Sign in 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={`${nso.className}`}>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  </li>
                </ul> 
                <span className=" my-auto inline md:hidden">
                  <MenuButton/>
                </span>
            </nav>
        </header> 
    </>
  )
}
