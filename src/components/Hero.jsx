'use client'
import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <section className=' w-full h-fit relative '>
        <Navbar />
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className=' sm:p-6 py-8 text-[12vw] md:text-[18vw] font-extrabold leading-none flex flex-col'>
          <span>DIG<br className='' />DEEP</span>
        </motion.div>
      </section>
      <video autoPlay loop muted className='absolute -z-10 top-0 left-0 right-0 object-fill h-fit w-full'>
          <source src="/assets/video/easy.mp4" type="video/mp4" />
        </video>

    </>
  )
}

export default Hero