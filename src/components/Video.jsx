import React from 'react'

const Video = () => {
    return (
        <section className='w-full h-fit'>
            <div className='w-3/4 m-auto '>
                <video autoPlay loop muted>
                    <source src="/assets/video/featured-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='py-4'>
                <button className='px-6 py-2 ml-[10vw] lg:ml-[75%] bg-red-700 text-black flex items-center justify-between text-[1.8vw] font-semibold' type="button"> All Projects <span className='text-[2vw] '>=</span></button>
            </div>

        </section>
    )
}

export default Video