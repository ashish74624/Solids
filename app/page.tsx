import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Slider from "./components/Slider";


export default async function Home() {
  return (
   <>
    <main className={`bg-[#F3F4F7] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll `}>
      <Slider/>
      <Categories/>
      <Footer/>
    </main>
   </>
  )
}
