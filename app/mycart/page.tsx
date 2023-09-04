import React from 'react'
import { getKindeServerSession , LoginLink , RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import UnAuthCart from '../components/UnAuthCart';

export default function Cart() {
    const {isAuthenticated} = getKindeServerSession();
  return (
    <>
     {!isAuthenticated()
     ?
     (<UnAuthCart/>)
     :
     (<>hello</>)
     } 
    </>
  )
}
