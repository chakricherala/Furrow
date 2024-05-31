import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-fit py-3 md:py-10 px-4 md:px-10 '>
        <div className='flex justify-evenly text-[1.4vw] flex-col gap-3  md:gap-12 lg:flex-row hover:text-red-500'>
            <div >
                <h4>+1.902.315.1279</h4>
                <h4>info@furrow.studio</h4>
            </div>
            <div>
                <h4>Unit 3 - 30 Greenwood Drive</h4>
                <h4>Summerside, PE C1N 3Y1</h4>
            </div>
            <div className='list-none flex gap-1'>
                <li>In</li>
                <li>Fb</li>
                <li>Vn</li>
            </div>
        </div>
    </footer>
  )
}

export default Footer