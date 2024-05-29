import React from 'react'

const Video = () => {
    return (
        <section className='w-full min-h-[100vh] bg-black'>
            <div className='w-3/4 h-3/4 m-auto'>
            <video autoPlay loop muted className=" h-[100vh] w-[100vw]">
                <source src="/assets/video/featured-video.mp4" type="video/mp4" />
            </video>
            </div>
                <div>
                    <button className='px-6 py-2 ml-[75%] bg-red-700 text-black flex items-center justify-between text-2xl font-semibold' type="button"> All Projects <span className='text-4xl '>=</span></button>
                </div>
           
        </section>
    )
}

export default Video