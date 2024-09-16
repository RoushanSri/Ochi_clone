import React, { useEffect, useRef } from 'react'
import Button from './Button'
import gsap from 'gsap'


const Card = (props) => { 

    const refer=useRef()

    const r1=useRef()

    const loc=".feature .c"+props.id;
    
    useEffect(()=>{
         gsap.to(loc,{
            duration:.1,
            opacity:0,
            y:200
        })
    })

    

    useEffect(() => {
        refer.current.addEventListener("mouseenter", () =>{
            refer.current.classList.add("scale-95");
            r1.current.classList.add("scale-110");
            gsap.to(loc,{
                y:0,
                duration:.1,
                stagger:.02,
                opacity:1
            })
        })
        refer.current.addEventListener("mouseleave", () =>{
            refer.current.classList.remove("scale-95");
            r1.current.classList.remove("scale-110")
            gsap.to(loc,{
                y:200,
                duration:.1,
                stagger:.02,
                opacity:0
            })
        })
    })
    
  return (
        <div className=' flex relative flex-col mb-[2rem] gap-5'>
            <div>
                <span className='text-[1.1rem] flex items-center gap-2'>
                    <div className='w-3 h-3 rounded-full bg-black'></div> {props.title}</span>
            </div>
            <div ref={refer} className='overflow-hidden w-fit duration-700 rounded-[1rem] z-0'> 
                <img ref={r1} src={props.img} alt="" className='w-[44rem] duration-700 delay-100 rounded-[1rem] '/>    
            </div>
            <div className={`feature top-0 ${props.id%2==0?"lg:translate-x-[50%]":"lg:-translate-x-[50%]"} absolute pointer-events-none w-full h-[60%] text-[#CDEA68] tracking-tighter whitespace-nowrap font-bold text-[5rem] max-lg:text-[2.5rem] z-[8] flex justify-center items-end`}>
            {props.title.split("").map((item,id)=>
                            (<span key={id} className={`c${props.id}`}>{item}</span>)
            )}
                
        </div>  
            <div className='flex gap-2 flex-wrap z-[10] w-full'>
                {
                    props.button.map((item,idx)=><Button key={idx} color={"black"} text={item}/>)
                }
            </div>
        </div>
  )
}

export default Card
