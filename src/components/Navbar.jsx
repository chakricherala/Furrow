import React from 'react'
// import { MaterialSymbolsOutlined } from '@next/font/google';

// const materialSymbols = MaterialSymbolsOutlined();


const Navbar = () => {
  return (
    <header className='px-10 py-4'>
        <nav className='flex justify-between'>
            <a href="/" className='text-2xl font-semibold'>FURR<span className='text-red-500 text-3xl'>●</span>W</a>
            <button>
            <span className='text-4xl '>=</span>
            {/* <span className={`${materialSymbols.className} material-symbols-outlined`}>home</span> */}
            </button>
        </nav>
    </header>
  )
}

export default Navbar