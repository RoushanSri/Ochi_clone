import React, { useEffect, useRef, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";

function Button1(props) {

  const refer=useRef();

  const r1=useRef();

  const r2=useRef();

  const [c,setc]=useState("white")

  useEffect(() => {
    refer.current.addEventListener('mouseenter', () => {
        r1.current.style.transform='scale(1)';
        setc("black");
    })
    
    refer.current.addEventListener('mouseleave', () => {
        r1.current.style.transform='scale(.3)';
        setc("white");
    })
  }
  ,[])

  return (
    <div ref={refer} className='bg-[#212121] flex gap-10 w-fit pl-7 pr-2 py-3 rounded-full items-center text-white text-[1.05rem]'><a href="">{props.text}</a> <div ref={r1} className='w-[2.5rem] h-[2.5rem] scale-[.3] flex justify-center z-[1] items-center duration-500'><div ref={r2} className='bg-white rounded-full flex justify-center items-center duration-500 w-full h-full overflow-hidden '><MdArrowOutward color={c} size={20}/></div></div></div>
  )
}

export default Button1
