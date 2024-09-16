import React, { useEffect, useRef } from 'react'

const Button = (props) => {

  const contra=props.color=="white"?"black":"white";

  const refer = useRef();
  
  const r1 = useRef();

  useEffect(() => {

    refer.current.addEventListener("mouseenter", () =>{
      r1.current.style.top="0";
      refer.current.style.color=contra;
    })

    refer.current.addEventListener("mouseleave", () =>{
      r1.current.style.top="-8rem";
      refer.current.style.color=props.color;
    })
  },[])

  return (
    <div ref={refer} style={{color:props.color }} className='w-fit'>
    <div className={`w-fit whitespace-nowrap relative rounded-[1rem] px-[1rem] py-[2px] overflow-hidden flex justify-center items-center border-${props.color} border-2`}>
      <div ref={r1} className={`absolute w-full h-full bg-${props.color} rounded-[5rem] top-8 z-0 duration-500 select-none`}></div>
      <h1 className='z-10 duration-500 select-none'>{props.text}</h1>
    </div>
    </div>
  )
}

export default Button
