import React from 'react'

const Features = () => {
    return (
        <section className='w-full h-screen bg-black'>
            <div className='w-[80vw] m-auto text-white translate-y-2/3 flex justify-evenly '>
                <div className='flex flex-col gap-10 w-1/2'>
                    <h2 className='text-3xl'>Furrow is an integrated, full-service creative studio offering video production, creative development, and post-production services.</h2>
                    <h6>Everybody’s got a story. And we don’t stop until we’ve uncovered what makes yours worth telling. Whether it’s working directly with you, an agency partner, or putting the finishing touches on something special, we’re ready to dig in and get our hands dirty—are you?</h6>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Services</h2>
                    <ul className='text-sm text-red-700 font-semibold py-6'>
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