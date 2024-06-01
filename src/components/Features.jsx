'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
    return (
        <section className='w-full h-fit'>
            <div className='w-[80%] m-auto py-6 md:py-12 lg:py-24 flex justify-evenly flex-col gap-12 lg:flex-row '>
                <motion.div initial={{opacity: '0', y: '0'}} whileInView={{opacity: '1', y: '100', duration: '1.5', delay: 1}} className='flex flex-col gap-10 w-full md:w-2/3 lg:w-1/2'>
                    <h2 className='text-[2.2vw]'>Furrow is an integrated, full-service creative studio offering video production, creative development, and post-production services.</h2>
                    <h6 className='text-[1.2vw]'>Everybody’s got a story. And we don’t stop until we’ve uncovered what makes yours worth telling. Whether it’s working directly with you, an agency partner, or putting the finishing touches on something special, we’re ready to dig in and get our hands dirty—are you?</h6>
                </motion.div>
                <div>
                    <h2 className='text-[1.5vw] font-bold'>Services</h2>
                    <ul className='text-[1.2vw] text-red-700 font-semibold py-2 md:py-6'>
                        <li>Pre-Production</li>
                        <li>Video Production</li>
                        <li>Post-Production</li>
                        <li>Audio Post-Production</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Features