'use client'
import React,{useState} from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"

const MenuButton: React.FC = () => {
  const [menu,setMenu] = useState(false)
  const toggleMenu = () => {
    const menuButton = document.getElementById("menu") as HTMLButtonElement;
    if (menuButton) {
      menuButton.classList.toggle('opened');
      menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened').toString());
    }
  };

  return (
    <>
    <button
    id='menu'
      className="menu bg-transparent border-none cursor-pointer flex p-0 "
      onClick={()=>{toggleMenu();setMenu(!menu)}}
      aria-label="Main Menu"
    >
        {/* SVG Paths */}
        <svg width="40" height="40" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
    {menu &&(
      <AnimatePresence>
        <motion.div className=' w-screen h-16 bg-white fixed top-14 left-0 right-0 z-50 flex justify-center items-center rounded-b-xl shadow' 
        initial={{y:-300}} animate={{y:0}} exit={{y:-300}}
        >
        <ul className="flex space-x-2 px-2">
                  <Link href={'/men'} className=" hover-btn" >
                    <li >Men&apos;s Clothing</li>
                  </Link>
                  <Link href={'/women'} className=" hover-btn" >
                    <li >Women&apos;s Clothing</li>
                  </Link>
                  <Link href={'/jewel'} className=" hover-btn" >
                    <li >Jewelery</li>
                  </Link>
                </ul> 
        </motion.div>
      </AnimatePresence>
      )}
    </>
    
  );
};

export default MenuButton;
