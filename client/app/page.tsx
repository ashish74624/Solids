import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const getImages = async()=>{
  const res = await fetch('https://image-get.vercel.app/getFolderData/Ecommerce');
  return res.json();
}

export default function Home() {
  const images = getImages();
  return (
   <>
    <Navbar/>
    <main>
      <Slider />
    </main>
   </>
  )
}
