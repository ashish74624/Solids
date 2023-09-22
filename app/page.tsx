import Categories from "./components/Categories";
import Slider from "./components/Slider";


export default async function Home() {
  const backend= process.env.NODE_ENV==='production' ? process.env.BACKEND : 'http://localhost:3000'
  const res = await fetch(`${backend}/api/test`)
  const data = await res.json()
  const h = data.msg
  return (
   <>
    <main className={`bg-[#F3F4F7] h-[92vh] w-screen overflow-x-hidden overflow-y-scroll `}>
      <Slider/>
      <div className="text-6xl">{h}</div>
      <Categories/>
    </main>
   </>
  )
}
