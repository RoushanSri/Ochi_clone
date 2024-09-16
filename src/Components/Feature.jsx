import React from 'react'
import Card from './Card'
import data from '../../public/data.js'
import Button1 from './Button1.jsx'

const Feature = () => {

  const datas=data[0];

  return (
    <div className='pt-[5rem] w-full rounded-[5rem] z-[3] bg-white'>
      <span className='text-[3.4rem] max-md:text-[2rem] px-[3rem]'>Featured projects</span>
      <hr className='mt-[2.5rem] h-[1.5px] border-none bg-[#bebcbc]'/>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5 px-[3rem] w-full mt-[3rem]'>
      {
        datas.map((item, index) => (
          <Card key={index} id={index} title={item.title} img={item.img} button={item.button}/>
        ))

      }
      </div>
      <div className='flex justify-center h-[27vh] items-center'>
        <Button1 color={"black"} text={"VIEW ALL CASE STUDIES"}/>
      </div>
    </div>
  )
}

export default Feature
