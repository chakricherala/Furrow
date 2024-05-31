'use client'

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  // const darkTheme = {
  //   background: "#000",
  //   text: "#fff",
  // }

  // const lightTheme = {
  //   background: "#fff",
  //   text: "#000",
  // }

  const navlinks = [
    {
        id: 1,
        title: 'LEGENDARY RED'
    },
    {
        id: 2,
        title: 'MADE TO ENJOY',
    },
    {
        id: 3,
        title: 'NOT HUMBLE',
    },
    {
        id: 4,
        title: '50 BEACHES',
    },
    {
        id: 5,
        title: 'MAKE IT ZERO',
    },

]

  

  return (
    <>
      <motion.div
        className='w-full h-screen bg-red-700 text-black px-20 py-10 absolute'

        initial={{ x: "-100%" }}
        exit={{ x: "-100%" }}
        animate={{ x: isActive ? 0 : "-100%" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}

      >
        <div className='font-semibold'>
          <div className='flex justify-between mb-6'>
            <h2 className='text-[1.5vw] '>Projects</h2>
            <button onClick={() => setIsActive(!isActive)} className='text-[2vw] font-bold'>✕</button>
          </div>
        
            <div>
              {navlinks.map((link,index) => (
                <ul className='w-1/2 list-none text-[4vw] hover:text-white'  key={link.id}>
                  <li>{link.title}</li>
                </ul>
              ))}
            </div>
      
        </div>
      </motion.div>
      <header className='px-10 md:px-20 py-4 md:py-10'>
        <nav className='flex justify-between items-center'>
          <a href="/" className='text-[3vw] font-semibold flex items-center justify-center'>
            FURR<span className='text-red-500 text-[3vw] '>●</span>W
          </a>
          <button onClick={() => setIsActive(!isActive)}>
            <span className='text-[4vw]'>=</span>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
