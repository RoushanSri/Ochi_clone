import React from 'react'
import Button1 from './Button1'
import img from '/Homepage-Photo.jpg'

const About = () => {
  return (
    <>
    <div className='w-full h-fit z-[3] pb-[2rem] bg-[#CDEA68] rounded-t-[1rem]'>
        <div className='w-full'>
      <p className='text-[3.5rem] pt-[5rem] px-[3rem] max-xl:text-[2.5rem] max-md:text-[1.5rem] w-[91%] leading-none pb-[5rem]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline decoration-5'>raise funds</span>, <span className='underline decoration-5'>sell products</span>, <span className='underline decoration-5'>explain complex Ideas</span>, and <span className='underline decoration-5'>hire great peo-ple.</span></p>
        </div>
      <hr  className='border-none h-[1px] bg-[#7c7c7c]'/>
      <div className='px-[3rem] w-[91%] pt-[1.5rem] pb-[5rem] flex max-2xl:flex-col max-2xl:gap-16 justify-between'>
        <span className='text-[1.05rem]'>What you can expect:</span>
        <div className='flex gap-[12rem] w-[45%] max-2xl:w-full items-end text-[1.05rem]'>
        <div className='w-full max-2xl:w-full flex flex-col gap-[2.5rem]'>
            <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. </p>
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
        </div>
        <div className='flex flex-col gap-[1rem]'>
            <span>S:</span>
            <div className='flex flex-col'>
                <a href="" className='underline decoration-1'>Instagram</a>
                <a href="" className='underline decoration-1'>Behance</a>
                <a href="" className='underline decoration-1'>Facebook</a>
                <a href="" className='underline decoration-1'>LinkedIn</a>
            </div>
        </div>
        </div>
      </div>
      <hr  className='border-none h-[0.7px] bg-[#7c7c7c]'/>
      <div className='h-fit w-full px-[3rem] pt-2 flex max-xl:flex-col max-xl:gap-16 justify-between bg-[#CDEA68]'>
        <div className='flex flex-col gap-3'>
      <span className='text-[3.4rem]'>Our approach:</span>
      <Button1 text={"READ MORE"}/>
      </div>
        <div className='rounded-[1rem] w-fit overflow-hidden h-fit'>
            <img src={img} alt="" className='w-[45rem]' />
        </div>
    </div>
    </div>
    </>
  )
}

export default About