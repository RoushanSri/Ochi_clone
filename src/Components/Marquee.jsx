import React from 'react'
import Marquee from "react-fast-marquee"
import About from './About'

const Marque = () => {
  return (
    <div className='w-full bg-[#004d43] z-[2] text-[18rem] max-xl:text-[12rem] max-lg:text-[10rem] max-md:text-[8rem] h-fit rounded-t-[1rem] py-[6rem] max-lg:py-[4rem]'>
      <Marquee speed={150}>
        <div className='flex tracking-tighter items-start font-bold border-t-2 border-b-2 leading-none p-0 overflow-hidden border-[#acacac] text-white'>
            <h1 className='-mt-12 max-lg:-mt-5'>WE ARE OCHI&nbsp;</h1>
            <h1 className='-mt-12 max-lg:-mt-5'>WE ARE OCHI&nbsp;</h1>
        </div>
        </Marquee>  
    </div>
  )
}

export default Marque
