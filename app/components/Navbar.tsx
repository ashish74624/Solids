import Link from "next/link"
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
                <ul className={`flex space-x-4 my-auto  ${nso.className}`}>
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
                        <LoginLink>
                          <DropdownMenuItem>
                            Sign in
                          </DropdownMenuItem>
                        </LoginLink>
                        <RegisterLink>
                          <DropdownMenuItem>
                            Sign Up
                          </DropdownMenuItem>
                        </RegisterLink>
                      </>)
                      :
                      (<>
                        <LogoutLink>
                          <DropdownMenuItem className=" text-red-500">
                            Log Out
                          </DropdownMenuItem>
                        </LogoutLink>
                      </>)}
                      
                      <DropdownMenuItem>
                        <Link href={'/'}>
                          Orders
                        </Link>
                      </DropdownMenuItem>
                      <Link href={'/wishlist'}>
                        <DropdownMenuItem>
                          Wishlist
                        </DropdownMenuItem>
                      </Link>
                      <Link className="md:hidden inline-block" href={'/cart'}>
                        <DropdownMenuItem className="md:hidden inline-block">
                          My Cart
                        </DropdownMenuItem>
                      </Link>
                      <Link href={'/policies'}>
                        <DropdownMenuItem>
                          Policies
                        </DropdownMenuItem>
                      </Link>
                      {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  </li>
                  <li className="md:inline-block hidden">
                    <Link className=" border w-max flex px-2 text-xl h-10 items-center" href={'/cart'}>
                      <Cart/> My Cart
                    </Link>
                  </li>
                </ul> 
            </nav>
        </header> 
    </>
  )
}
