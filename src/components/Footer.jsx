import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-fit py-14'>
        <div className='flex justify-evenly'>
            <div>
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