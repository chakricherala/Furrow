'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Video = () => {
    return (
        <section className='w-full h-fit'>
            <motion.div initial={{scale: '0.8', opacity: '0.5'}} whileInView={{scale: '1', opacity: '1', duration: '2', delay: '1.2'}} exit={{scale: '0.8', opacity: '0.5'}} className='w-3/4 m-auto '>
                <motion.video initial={{y:'0'}} animate={{y:'100'}} autoPlay loop muted>
                    <source src="/assets/video/it-takes-an-island.mp4" type="video/mp4" />
                </motion.video>
            </motion.div> 
            <div className='py-4'>
                <button className='px-6 py-2 ml-[10vw] lg:ml-[75%] bg-red-700 text-black flex items-center justify-between text-[1.8vw] font-semibold' type="button"> All Projects <span className='text-[2vw] '>=</span></button>
            </div>

        </section>
    )
}

export default Video