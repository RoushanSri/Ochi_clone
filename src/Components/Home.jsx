import React, { useEffect, useRef, useState } from 'react'
import img1 from '/img1.jpg'
import {motion} from 'framer-motion'
import Header from './Header'
import { MdArrowOutward } from "react-icons/md";

const Home = () => {

  const refer=useRef();

  const [col,setcol]=useState("black")

  const r1=useRef();

  useEffect(() => {
    refer.current.addEventListener("mouseenter", () =>{
      r1.current.classList.remove("scale-0");
      setcol("white")
    })
    refer.current.addEventListener("mouseleave", () =>{
      r1.current.classList.add("scale-0");
      setcol("black");
    })
    },[])
      
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[100vh]'>
      <div className="de w-full h-full flex flex-col">
        <Header/>
      <div className='px-[3.5rem] w-full flex items-center h-full'>
        <div className="flex flex-col w-full text-[6rem] leading-none max-xl:text-[4rem] max-md:text-[3rem] tracking-tighter font-bold">
        <span className='w-full leading-none'>WE CREATE</span>
        <div className='flex items-center'>
        <div className=' rounded-md overflow-hidden max-xl:w-[10%] h-fit '>
          <div className='w-full h-full justify-center items-center '>
          <img src={img1} width={150} alt="" />
          </div>
          </div>
        <motion.h1
        animate={{x:[-153,0]}}
        transition={{duration:1,ease:"easeOut",delay:0.5}}
        className='bg-white whitespace-nowrap'
        >EYE-OPENING</motion.h1>
        </div>
        <span className='leading-none'>PRESENTATIONS</span>
        </div>
      </div>
      <div className='h-[30vh]'>
                <hr className='h-[2px] bg-black' />
                <div className='flex w-full max-md:flex-col justify-between px-[3.5rem] py-[1rem]'>
                    <span>For public and private companies</span>
                    <span>From the first pitch to IPO</span>
                    <div ref={refer} className='flex gap-2 items-center'><span className='border-black p-2 hover:bg-black hover:text-white px-4 duration-500 rounded-full whitespace-nowrap border-[1px]'>START THE PROJECT</span><span className='border-black p-2 z-[2] relative rounded-full border-[1px]'><div ref={r1} className='absolute bg-black w-[2.3rem] h-[2.3rem] top-0 z-[-1] scale-0 left-0 rounded-full duration-500'></div><MdArrowOutward color={col} size={20}/></span></div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Home;