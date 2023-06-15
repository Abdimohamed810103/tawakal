import React, { useEffect, useState } from 'react'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api' 

const center = {lat: 48.8584, lng: 2.2945}
const Profile = () => {
    const {isLoaded}= useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries: [
            'places'
        ],
    })
  const [address, setddress]= useState("")
  const [touched, setTouched]= useState(false)
    const handleAddressChange = evt =>{
        setddress(evt.target.value)
      }

 
  const isValid = address !== "";
  return (
    <div className='max-w-[1660px] m-auto flex max-h-[1060px] items-center justify-center'>
<div className=' w-[80%] overflow-hidden bg-[#fafafa] h-[1000px] m-auto mt-10 border-[1px] p-[20px] hidden md:block bg-white flex items-center flex-col'>
      <div className='flex flex-col  justify-between  '>
        <h1 className='font-bold text-[20px] my-[20px]'>Personal Details </h1>
        <div className='flex '>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px]'>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>First name</label>
                <input type='text' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg   ' />
            </div>
            
        </div>
        
        </div>
        
      </div>
      <div className='flex flex-col  justify-between  '>
       
        <div className='flex '>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Middle name</label>
                <input type='text' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Last name</label>
                <input type='text' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
            </div>
            
        </div>
        </div>
        
      </div>

      <div className='flex flex-col justify-between w-[98%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Street address</label>
            {!isLoaded ? 'Not loaded' : <Autocomplete><input onBlur={()=>setTouched(true)} onChange={handleAddressChange} type='text' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg my-1' /></Autocomplete>}
            
           
               
            </div>
            
        </div>
       
        {touched ? (isValid ? 
                <div className='flex ease-in-out duration-700 flex-col justify-between w-[99%]  text-gray-700 m-[10px] '>

       <div className='flex items-center justify-between '>
       <div className='flex flex-col justify-between w-[100%]  text-gray-700  '>
           
           <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
           <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Middle name</label>
               <input type='text' value={address} className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
           </div>
           
       </div>
       <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
           
           <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
           <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Last name</label>
               <input type='text' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
           </div>
           
       </div>
       </div></div>:"") : null}
            
            
        
        <div className='flex flex-col  justify-between  '>
        
        <div className='flex '>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>City</label>
                <input type='text' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Postal code</label>
                <input type='text' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
            </div>
            
        </div>
        </div>
        
      </div>
      <div className='flex items-center  w-[98%] h-[30%] m-auto'>
        {!isLoaded ? 'Not loaded' : <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%', height:'100%'}}><Marker position={center} /></GoogleMap>}
      </div>
      <div className='flex items-end m-auto w-[38%]'>
        <button className='w-full bg-blue-800 text-white font-bold my-4 px-8 py-[20px] hover:bg-blue-600 rounded-xl'>Continue</button>
      </div>
    </div>


<div className='w-[400px] bg-slate-300 h-[900px] m-auto mt-10 border-[1px] p-[20px] block md:hidden bg-white flex items-center flex-col'>
      <div className='flex flex-col items-center justify-between w-full  '>
        <h1 className='font-bold text-[20px] my-[20px]'>Personal Details</h1>
        <div className='flex flex-col justify-between w-[350px]   text-gray-700'>
            <label>First name</label>
            <div className='w-full   bg-white p-1 rounded-lg border-blue-800 border-[2px] flex items-center h-[50px]'>
                <input type='text' className='w-full outline-none' />
            </div>
        </div>
        
      </div>
      <div className='flex flex-col items-center justify-between w-full my-[5px]'>
        <div className='flex w-[350px]'>
        <div className='flex flex-col justify-between w-[300px]  text-gray-700 '>
            <label>Middle name</label>
            <div className=' bg-white  p-1 rounded-lg border-blue-800 border-[2px] flex items-center h-[50px]'>
                <input type='text' className='w-full outline-none' />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-[300px] mx-1  text-gray-700'>
            <label>Last name</label>
            <div className=' bg-white p-1 rounded-lg border-blue-800 border-[2px] flex items-center h-[50px]'>
                <input type='text' className='w-full outline-none' />
            </div>
            
        </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between w-full my-[5px] '>
      
        <div className='flex flex-col justify-between w-[350px]  text-gray-700'>
            <label>Street address</label>
            <div className='w-full bg-white p-1 rounded-lg border-blue-800 border-[2px] flex items-center h-[50px]'>
                <input type='text' className='w-full outline-none' />
            </div>
        </div>
        
      </div>

      <div className='flex flex-col items-center justify-between w-full '>
      
      <div className='flex flex-col justify-between w-[350px]  text-gray-700 my-1' >
          
          <div className='w-full bg-white p-1 rounded-lg border-blue-800 border-[2px] flex items-center h-[50px]'>
              <input type='text' className='w-full outline-none' />
          </div>
      </div>
      
    </div>
    <div className='flex flex-col items-center justify-between w-full my-[5px] '>
        <div className='flex w-[350px]'>
        <div className='flex flex-col justify-between w-[200px]  text-gray-700'>
            <label>City</label>
            <div className=' bg-white p-1 rounded-lg border-blue-800 border-[2px] flex items-center h-[50px]'>
                <input type='text' className='w-full outline-none' />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-[300px]  text-gray-700'>
            <label>Postal code</label>
            <div className=' bg-white p-1 rounded-lg border-blue-800 border-[2px] flex items-center h-[50px] mx-1'>
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
