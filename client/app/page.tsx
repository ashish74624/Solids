import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import { Josefin_Slab } from "next/font/google"
import Slider from "./components/Slider";

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
    <main className={`bg-[#F3F4F7] ${sc.className} h-[90vh] w-screen overflow-x-hidden overflow-y-scroll `}>
      <Slider/>
      {/* <Categories/> */}
    </main>
   </>
  )
}
