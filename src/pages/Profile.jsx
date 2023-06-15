import React from 'react'

const Profile = () => {
  return (
    <div>



<div className='w-[400px] bg-slate-300 h-[900px] m-auto mt-10 border-[1px] p-[20px] block md:hidden bg-white flex items-center flex-col'>
      <div className='flex flex-col items-center justify-between w-full  '>
        <h1 className='font-bold text-[20px] my-[20px]'>Personal Details</h1>
        <div className='flex flex-col justify-between w-[350px] text-gray-700'>
            <label>First name</label>
            <div className='w-full bg-white p-1 rounded-lg border-blue-800 border-[2px]'>
                <input type='text' className='w-full outline-none' />
            </div>
        </div>
        
      </div>
      <div className='flex flex-col items-center justify-between w-full my-[5px]'>
        <div className='flex w-[350px]'>
        <div className='flex flex-col justify-between w-[300px]  text-gray-700 '>
            <label>Middle name</label>
            <div className=' bg-white p-1 rounded-lg border-blue-800 border-[2px] '>
                <input type='text' className='w-full outline-none' />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-[300px] mx-1  text-gray-700'>
            <label>Last name</label>
            <div className=' bg-white p-1 rounded-lg border-blue-800 border-[2px]'>
                <input type='text' className='w-full outline-none' />
            </div>
            
        </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between w-full my-[5px] '>
      
        <div className='flex flex-col justify-between w-[350px]  text-gray-700'>
            <label>Street address</label>
            <div className='w-full bg-white p-1 rounded-lg border-blue-800 border-[2px]'>
                <input type='text' className='w-full' />
            </div>
        </div>
        
      </div>

      <div className='flex flex-col items-center justify-between w-full '>
      
      <div className='flex flex-col justify-between w-[350px]  text-gray-700 my-1' >
          
          <div className='w-full bg-white p-1 rounded-lg border-blue-800 border-[2px]'>
              <input type='text' className='w-full outline-none' />
          </div>
      </div>
      
    </div>
    <div className='flex flex-col items-center justify-between w-full my-[5px] '>
        <div className='flex w-[350px]'>
        <div className='flex flex-col justify-between w-[200px]  text-gray-700'>
            <label>City</label>
            <div className=' bg-white p-1 rounded-lg border-blue-800 border-[2px]'>
                <input type='text' className='w-full outline-none' />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-[300px]  text-gray-700'>
            <label>Postal code</label>
            <div className=' bg-white p-1 rounded-lg border-blue-800 border-[2px]'>
                <input type='text' className='w-full outline-none' />
            </div>
            
        </div>
        </div>
      </div>
      <div className='flex items-end h-full w-[60%]'>
        <button className='w-full bg-blue-800 text-white px-8 py-1 rounded-xl'>Continue</button>
      </div>
    </div>

    </div>
    
  )
}

export default Profile
