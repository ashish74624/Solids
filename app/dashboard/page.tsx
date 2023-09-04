import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

export default function DashBoard() {
  return (
    <>
    <main className={`bg-[#F3F4F7] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll `}>
      <Slider/>
      <Categories/>
    </main>
    </>
  )
}
