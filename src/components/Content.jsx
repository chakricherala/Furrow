'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Content = () => {
    const container = useRef(null);


    const { scrollYProgress } = useScroll({

        target: container,

        offset: ["start 0.9", "start 0.25"]

    })

    return (
        <section className=' w-full h-fit '>
            <div className='w-2/3 md:px-20 p-[6vw] md:p-[12vw] text-white  text-[2vw]'>
                <motion.h2 ref={container} style={{ opacity: scrollYProgress }} >Great stories don’t just happen— <br className='md:flex hidden' /> they need to be uncovered. And
                    we dig deep to discover the great stories that lie just below the
                    surface. Dirt under our fingernails and all.</motion.h2>
            </div>

        </section>
    )
}

export default Content