import React, { useEffect, useState } from 'react'

const Eye = (props) => {

  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
    

      const y = e.clientY - window.innerHeight/ 2
      const x = e.clientX - window.innerWidth / 2
  
      
  
      const r=Math.atan2(y, x)*180/Math.PI;
  
      setrotate(r-180);
    })

  })

  return (
    <div data-scroll data-scroll-speed=".1"  className='p-[2.3rem] w-[13rem] h-[13rem] rounded-full bg-white' id='bar'>
        <div className={`bg-black flex justify-center text-${props.tcolor} text-[1.2rem] relative items-center rounded-full w-full h-full`}>Play
            <div style={{transform:`rotate(${rotate}deg)`}} className="absolute w-full h-5">
            <div className='w-5 bottom-0 rounded-full h-5 bg-white'></div>
            </div>
        </div>
      
    </div>
  )
}

export default Eye
