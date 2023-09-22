import React from 'react'
import Card from '../components/Card';
import { Toaster } from 'react-hot-toast';


export default async function Men() {
  const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
  const data = await res.json();
  
  const backend= process.env.NODE_ENV==='production' ? process.env.BACKEND : 'http://localhost:3000'
  const res2 = await fetch(`${backend}/api/test`)
  const data2 = await res2.json()
  const h = data2.msg
  return (
    <main className=' w-screen h-[92vh] overflow-x-hidden overflow-y-scroll flex flex-col'>
      <div className="text-6xl">{h}</div>
      <h1 className='mt-4 text-2xl md:text-3xl mx-4'>Latest in Men&apos;s Fashion &gt;</h1>
      <section className='grid grid-cols-1 md:grid md:grid-cols-2 w-[82vw] xl:w-[53vw] gap-y-4 self-center place-items-center mt-4'>
        {data.map((item:any)=>(
          <Card id={item.id} key={item.id} img={item.image} title={item.title} rating={item.rating.rate} price={item.price} />
        ))}
      </section>
      <Toaster position="bottom-right" 
    toastOptions={{
      className :' bg-blue-400/20 w-64 text-blue-700 rounded-full border-2 border-blue-700 h-[70px] grid place-content-center'
    }}/>
    </main>
  )
}
