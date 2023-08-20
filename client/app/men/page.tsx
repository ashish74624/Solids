import React from 'react'
import Card from '../components/Card';


export default async function Men() {
  const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
  const data = await res.json();
  return (
    <main className=' w-screen h-[92vh] overflow-x-hidden overflow-y-scroll flex flex-col'>
      <h1 className='mt-4 text-2xl md:text-3xl mx-4'>Latest in Men&apos;s Fashion &gt;</h1>
      <section className='grid grid-cols-1 md:grid md:grid-cols-2 w-[82vw] xl:w-[53vw] gap-y-4 self-center place-items-center mt-4'>
        {data.map((item:any)=>(
          <Card id={item.id} key={item.id} img={item.image} title={item.title} rating={item.rating.rate} price={item.price} />
        ))}
      </section>
    </main>
  )
}
