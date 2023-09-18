import React from 'react'
import { getKindeServerSession, RegisterLink , LoginLink , LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
import Link from 'next/link';
import Cart from '../Icons/Cart';
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
});


export default function InsideMenu() {
  const {isAuthenticated , getUser } = getKindeServerSession()
  const user = getUser();
  return (
    <>
    <ul className="flex space-x-2 px-2">
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
                      <DropdownMenuItem>
                        <Link href={'/wishlist'}>
                          Wishlist
                        </Link>
                      </DropdownMenuItem>
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
    </>
  )
}
