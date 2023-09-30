import React from 'react'
import Payment from '../components/Payment'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'


export default async function Pay() {
    const {isAuthenticated,getUser} = getKindeServerSession();
    const user = getUser();
    const backend= process.env.NODE_ENV==='production' ? process.env.BACKENDURL : 'http://localhost:3000'
    const res = !isAuthenticated() ?undefined: await fetch(`${backend}/api/deleteCart/${user?.email}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    });
    
  return (
    <main className='h-screen w-screen flex justify-center mt-12'>
      <Payment/>
    </main>
  )
}
