import Lorem1230 from '@/app/lorem/Lorem1230'
import Lorem4000 from '@/app/lorem/Lorem4000'
import React from 'react'

export default function Product() {
  return (
    <div className=' w-screen h-[200vh] relative'>
    <section className='grid grid-cols-2 w-[90vw] mx-auto relative z-20'>
      <div id="first" className=''>
        <article className=' fixed z-10 top-16 h-96 w-[500px] mx-auto'>
            <img  src="https://placehold.co/600x400" alt="" />
            <caption>

            </caption>
        </article>
      </div>
      <div id='second'>
        <Lorem1230/>
      </div>
    </section>
    <section className=' absolute top-[100vh] z-20'>
        <Lorem4000/>
    </section>
    </div>
  )
}
