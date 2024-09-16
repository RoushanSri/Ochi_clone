import React from 'react'
import Button1 from './Button1'
import Eye from './Eye';

function Ready() {
  return (
    <div className='w-full h-[125vh] sticky -top-[10rem] z-[0]'>
    <div className='h-[125vh] w-full bg-[#CDEA68] flex justify-center items-center relative'>
        <div className='flex flex-col w-full items-center gap-7'>
      <div className='w-full flex flex-col text-[#000000] tracking-tighter text-[6rem] max-lg:text-[4rem] text-center font-bold leading-none'>
        <span>READY</span><span>TO START</span><span>THE PROJECT?</span>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <div>
        <Button1 text={"START THE PROJECT"}/>
        </div>
        <span>OR</span>
        <div>
        <Button1 text={"HELLO@OCHI.DESIGN"}/>
        </div>
      </div>
      <div data-scroll data-scroll-speed=".5" className='absolute top-[30%] flex gap-7'>
        <Eye tcolor={"black"}/>
        <Eye tcolor={"black"}/>
      </div>
        </div>
    </div>
    </div>
  )
}

export default Ready;
