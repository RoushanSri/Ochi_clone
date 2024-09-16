import React from 'react'
import data from '../../public/data.js'
import Info from './Info';


export default function Clients() {

    const datas=data[1];
  return (
    <div className='w-full top-0 flex flex-col gap-[2rem] py-[2rem]'>
      <span className='text-[3.4rem] px-[3rem]'>Client's reviews</span>
      <div className='flex flex-col'>
        {
            datas.map((item,idx)=><Info key={idx} comp={item.comp} name={item.name}/>)
        }
      </div>
    </div>
  )
}
