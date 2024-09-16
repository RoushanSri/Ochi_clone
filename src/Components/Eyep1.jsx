import React from 'react'
import img from '/img.jpg'
import Eye from './Eye'

const Eyep1 = () => {
  return (
    <div className='h-[100vh]'>
        <div data-scroll data-scroll-speed="-.7" className='relative flex justify-center items-center h-[100%] w-full overflow-hidden'>
            <img src={img} alt="" width={"100%"}/>
            <div className='absolute top-[35%] flex gap-[2.5rem]'>
                <Eye tcolor={"white"}/>
                <Eye tcolor={"white"}/>
            </div>
            <div className='w-full h-full absolute top-0 opacity-0 bg-black'></div>
        </div>      
    </div>
  )
}

export default Eyep1