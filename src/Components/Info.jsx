import React from 'react'

function Info(props) {
  return (
    <div className='w-full py-4 px-[3.5rem] flex justify-between border-t-2 border-black text-[1.1rem]'>
      <span className='underline w-[10rem]' >{props.comp}</span>
      <span>{props.name}</span>
      <span className='underline'>READ</span>
    </div>
  )
}

export default Info
