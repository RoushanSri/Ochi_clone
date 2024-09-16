import React from 'react'
import img1 from '/logo001.svg'
import img2 from '/logo002.svg'
import img3 from '/logo003.png'
import Button from './Button';

function Icons() {
  return (
    <div className="px-[3rem] h-fit sticky top-[4.5rem] max-2xl:top-[2rem] max-md:top-[-17rem] mt-[2rem] grid gap-[1rem] max-2xl:grid-rows-2 grid-cols-[2fr_1fr_1fr] max-2xl:grid-cols-2 max-md:grid-rows-3 pb-[3rem]">
    <div className='relative h-[50vh] max-2xl:h-[40vh] bg-[#004D43] rounded-[1rem] w-full max-2xl:col-span-2 flex justify-center items-center'>
        <img src={img1} alt="" />
        <div className='absolute border-2 py-1 px-3 rounded-[3rem] border-[#CBE968] text-[#CBE968] bottom-[2rem] left-3'>©2019-2022</div>
    </div>
    <div className='relative h-[50vh] max-md:col-span-2 max-2xl:h-[40vh] bg-[#212121] rounded-[1rem] w-full flex justify-center items-center'>
        <img src={img2} alt="" />
        <div className='absolute bottom-[2rem] left-3'>
            <Button text={"RATING 5.0 ON CLUTCH"} color={"white"}/>
        </div>
    </div>
    <div className='relative h-[50vh] max-md:col-span-2 max-2xl:h-[40vh] bg-[#212121] rounded-[1rem] w-full flex justify-center items-center'>
        <img src={img3} alt="" width={100}/>
        <div className='absolute bottom-[2rem] left-3 text-[100%]'>
            <Button text={"BUSINESS BOOTCAMP ALUMNI"} color={"white"}/>
        </div>
    </div>
  </div>
  )
}

export default Icons
