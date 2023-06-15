import React, { useState } from 'react'
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center w-[160px] h-[40px] rounded-lg  text-[#0b0c8c] font-bold text-[16px] px-[16px]  rounded-[100px] mx-4 bg-[#3cb4fc]'>
    <button onClick={()=>setIsOpen((prev)=>!prev)} className=' w-[155px] flex items-center justify-between rounded-lg tracking-wider border-4 border-transparent active:border-black duration-100'>
        My account
        {!isOpen ? (<AiOutlineCaretDown  className='h-8'/>): (<AiOutlineCaretUp className='h-8' />)}
    </button>
    {isOpen && (
        <div className='absolut top-20  flex flex-col item-start  w-[260px] text-black  tracking-wider  bg-white shadow-xl '>
            <div className='flex w-full justify-between hover:bg-slate-100 h-[50px] p-2'>
            <Link to="/dashboard" onClick={()=>setIsOpen((prev)=>!prev)} className='w-[200px] flex justify-between items-center'>My details</Link>
            </div>
            <div className='flex w-full justify-between hover:bg-slate-100 h-[50px] p-2'>
            <a href='#' onClick={()=>setIsOpen((prev)=>!prev)}>My recipients</a>
            </div>
            <div className='flex w-full justify-between hover:bg-slate-100 h-[50px] p-2'>
            <a href='#' onClick={()=>setIsOpen((prev)=>!prev)}>My transactions</a>
            </div>
        </div>
    )}
    </div>
  ) 
}

export default Dropdown
