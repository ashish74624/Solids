import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { Josefin_Slab } from "next/font/google"

const sc= Josefin_Slab({
  subsets:['latin'],
  weight: ['600'],
})


export default function Home() {
  return (
   <>
    <header>
      <Navbar/>
    </header>
    <main className={`bg-[#F3F4F7] ${sc.className}`}>
      <Slider />
      <Categories/>
    </main>
   </>
  )
}
