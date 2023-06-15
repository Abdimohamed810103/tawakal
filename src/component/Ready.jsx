import React from 'react'
import mobile from '../images/mobile.png'

const Ready = (props) => {
  return (
    <div className={`flex items-center justify-center bg-[#3cb4fc] h-[300px]`}>   
    <div  >
      
        <div className='text-[48px] font-bold leading-none '>Ready to get started?
        <div className='text-[18px] py-3 text-center'>Your first transfer is fee-free.</div>
        <button className='text-black font-bold text-[16px] px-[100px] py-[12px]  rounded-[100px] mx-4 bg-white'>Get started</button>
        
        </div>
     

        </div>
        <div className={`w-[500px] h-[400px] py-[48px] `}>
        <img  src={`${mobile}`} className='w-[300px]'/>
        </div>
     </div> 
  )
}

export default Ready
