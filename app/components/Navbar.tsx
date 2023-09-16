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
import { getKindeServerSession, RegisterLink , LoginLink , LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
import Cart from "../Icons/Cart"

const nso= Noto_Sans_Osmanya({
  subsets:['latin'],
  weight:['400']
})


export default function Navbar() {
  const {isAuthenticated , getUser } = getKindeServerSession()
  const user = getUser();

  return (
    <>
        <header className= "w-screen h-14 bg-[#F3F4F7] z-50 font-serif ">
            <nav className=" w-[90vw] xl:w-[80vw] relative h-full flex items-end justify-between mx-auto">
                <Link href={'/'} className="text-red-500 my-auto text-4xl ">Solids</Link>
                <ul className={`md:flex space-x-4 my-auto hidden ${nso.className}`}>
                  <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className={` flex text-xl h-10 w-max items-center justify-between pr-2 border `}>
                      <span className="text-3xl mx-2"><PiUserThin/></span>
                       {!isAuthenticated()?(<>Sign in</>):(<>{user?.given_name?.[0]}{user?.family_name?.[0]}</>)} 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={`${nso.className}`}>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      { !isAuthenticated() ?
                      (<>
                        <DropdownMenuItem>
                          <LoginLink>
                            Sign in
                          </LoginLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RegisterLink>
                            Sign Up
                          </RegisterLink>
                        </DropdownMenuItem>
                      </>)
                      :
                      (<>
                        <DropdownMenuItem className=" text-red-500">
                          <LogoutLink>
                            Log Out
                          </LogoutLink>
                        </DropdownMenuItem>
                      </>)}
                      
                      <DropdownMenuItem>
                        <Link href={'/orders'}>
                          Orders
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Wishlist</DropdownMenuItem>
                      {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  </li>
                  <li>
                    <Link className=" border w-max flex px-2 text-xl h-10 items-center" href={'/cart'}>
                      <Cart/> My Cart
                    </Link>
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
