import React from 'react'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const BodySectionTemplate = ({children, subTitle, title}) => {
  return (
    <section className='relative flex flex-col items-center w-full h-[96vh] box-border pt-[4vh] px-[10rem]'>
        <h1 className='text-center text-1xl pb-4 text-[#555555]'>{subTitle}</h1>
        <h1 className='text-center text-5xl font-bold'>{title}</h1>
        <div className='flex flex-1 justify-center items-center'>
            {children}
        </div>
        <div className='absolute right-[5rem] bottom-[2.5rem] hover:cursor-pointer'>
            <MdOutlineKeyboardDoubleArrowDown size='3rem'/>
        </div>
    </section>
  )
}

export default BodySectionTemplate