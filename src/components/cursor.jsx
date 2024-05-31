'use client'
import React, { useEffect, useState } from 'react'

const Cursor = () => {

  const [mousePosition, setMousePosition] = useState({
    x:400,
    y:400
})

const onMouseMove = event => {
    const {pageX: x , pageY: y} = event;
    setMousePosition({x,y});
}

useEffect(() => {
  document.addEventListener('mousemove', onMouseMove)

  return () => {
    document.removeEventListener('mousemove', onMouseMove)
  }
}, [])

  return (
    <div className='absolute top-0 left-0 md:flex hidden  w-[32px] h-[32px] bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2 ease-in-out pointer-events-none z-50' style={{ left: `${mousePosition.x}px`, top : `${mousePosition.y}px`}}></div>
  )
}

export default Cursor