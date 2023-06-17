import React, { useEffect, useState,useRef } from 'react'
import { useLoadScript, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api' 
import usePlacesAutocomplete,{getGeocode, getLatLng}  from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox'
import axios from 'axios'
import { useFormik } from 'formik'
const center = {lat: 48.8584, lng: 2.2945}

function Profile(){
      const {isLoaded}= useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries: [
            'places'
        ],
    })

    if(!isLoaded) return <div>Loading....</div>
    return <Map/>
}

function Map(){
  const [selected, setSelected] = useState(null)
  const [post, setPost] = useState("")
  const [postAfter, setPostAfter] = useState("")
  const [fullData, setfullData] = useState(false)
  const [data, setData] = useState("")
  useEffect(() => {
    
  const getPost = async () =>{
    try {
        setPostAfter(post)
       
        const response = await axios.post("https://addressvalidation.googleapis.com/v1:validateAddress?key=AIzaSyDyI1JT3BLtQxm-MC1rjvzysLhFOLjylW8",{  "address": {
            "addressLines": [post]
              }})
          console.log(response.data.result.verdict.hasInferredComponents)
          setPostAfter(response.data.result.address.formattedAddress)
          setfullData(response.data.result.verdict.hasInferredComponents)
          setData(response.data.result.address.postalAddress)
    } catch (error) {
        console.log(error)
    }
  
  }
  getPost()
},[post,setfullData])

const formik = useFormik({
    initialValues:{
        firstName: "",
        middleName:"",
        lastName: "",
        add:"",
        postCode:"",
        city:""
    },
    onSubmit:(values)=>{
        console.log(values)
    }
    

})
useEffect(() => {
    if (
      (document.querySelector('input[name="postCode"]'))?.value ||
      (document.querySelector('input[name="city"]'))?.value
    ) {
      if (!formik.values.postCode || !formik.values.city) {
        formik.setValues({
            postCode: (document.querySelector('input[name="postCode"]') )?.value || '',
            city: (document.querySelector('input[name="city"]'))?.value || '',
        });
      }
    }
  }, []);

  return (
    <div className='max-w-[1660px] m-auto flex max-h-[1060px] items-center justify-center'>
<div className=' w-[80%] overflow-hidden bg-[#fafafa] h-[1000px] m-auto mt-10 border-[1px] p-[20px] hidden md:block bg-white flex items-center flex-col'>
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col  justify-between  '>
        <h1 className='font-bold text-[20px] my-[20px]'>Personal Details </h1>
        <div className='flex '>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px]'>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>First name</label>
                <input type='text' name='firstName' id='firstName' onChange={formik.handleChange} value={formik.values.firstName} placeholder='First Name' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg   ' />
            </div>
            
        </div>
        
        </div>
        
      </div>
      <div className='flex flex-col  justify-between  '>
       
        <div className='flex '>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Middle name</label>
                <input type='text' name='middleName' id='middleName' onChange={formik.handleChange} value={formik.values.middleName} placeholder='Middle Name' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Last name</label>
                <input type='text' name='lastName' id='lastName' onChange={formik.handleChange} value={formik.values.lastName} placeholder='Last Name' className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
            </div>
            
        </div>
        </div>
        
      </div>

      <div className='flex flex-col justify-between w-[98%]  text-gray-700 m-[10px] '>
            
            <div  className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Street address</label>
           <PlaceAutoComplete setSelected={setSelected} post={setPost} />
       
            
               
            </div>
            
        </div>
        
        {fullData && 
         <div className='flex  justify-center ease-in-out duration-700 flex-col justify-between w-[60%]  text-gray-700 m-[10px] '>

         <div className='flex items-start justify-between '>
         <div className='flex flex-col justify-between w-[100%] h-[100%]  text-gray-700  '>
             
             <div className='flex flex-col  bg-white relative bg-amber-100 rounded-lg border-blue-800 border-[1px] flex  h-[100px]'>
             
             <label className='font-bold pl-[30px] text-lg absolute top-[15px]'> <input type='radio' onChange={formik.handleChange} value={formik.values.add=post} name='add' id='add1' className='m-[10px] w-[30px] h-[16px]' />  What you entered</label>
              <div className='w-full outline-none h-full pl-[30px] pt-[46px] overflow-auto rounded-lg'>{post}</div> 
             </div>
             
         </div>
         <div className='flex flex-col  w-[100%]  text-gray-700  '>
             
             <div className='flex flex-col justify-between bg-white relative bg-amber-100  rounded-lg border-blue-800 border-[1px] flex  h-[100px]'>
             
             <label className='font-bold pl-[30px] text-lg absolute top-[15px]'> <input type='radio' onChange={formik.handleChange} value={formik.values.add=postAfter} name='add' id='add'  className='m-[10px] w-[30px] h-[16px] ' />   Recommended</label>
              <div className='w-full outline-none h-full pl-[30px] pt-[46px] overflow-auto rounded-lg'>{postAfter}</div> 
             </div>
             
         </div>
         </div></div>
        }
               
            
            
        
        <div className='flex flex-col  justify-between  '>
        
        <div className='flex '>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>City</label>
                <input type='text' name='city' id='city' onChange={formik.handleChange} placeholder='city' value={formik.values.city=data.locality}   className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
            </div>
            
        </div>
        <div className='flex flex-col justify-between w-[100%]  text-gray-700 m-[10px] '>
            
            <div className='flex flex-col bg-white relative  rounded-lg border-blue-800 border-[1px] flex  h-[85px]'>
            <label className='font-bold pl-[30px] text-lg absolute top-[15px]'>Postal code</label>
                <input type='text' name='postCode' id='postCode' onChange={formik.handleChange}  placeholder='Post code' value={formik.values.postCode=data.postalCode} className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg' />
            </div>
            
        </div>
        </div>
        
      </div>
      
      <div className='flex items-end m-auto w-[38%]'>
        <button type='submit' className='w-full bg-blue-800 text-white font-bold my-4 px-8 py-[20px] hover:bg-blue-600 rounded-xl'>Continue</button>
      </div>
      </form>
      <div className='flex items-center  w-[98%] h-[30%] m-auto'>
       <GoogleMap center={!selected ? center : selected} zoom={15} mapContainerStyle={{width:'100%', height:'100%'}}>
        {selected && <Marker position={selected} />}
        {!selected && <Marker position={center} />}
        </GoogleMap>
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

const PlaceAutoComplete = (props)=>{

    const [addressen, setAddressen] = useState("");
    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions,
    } = usePlacesAutocomplete()
    
    const handleSelect = async (address)=>{
        setValue(address, false)
        
        console.log(address)
        clearSuggestions()
       props.post(address)
       const result = await getGeocode({address})
       const {lat, lng} = await getLatLng(result[0])
       props.setSelected({lat, lng})

      //setAddressen(address)
      //const response = await axios.post("https://addressvalidation.googleapis.com/v1:validateAddress?key=AIzaSyDyI1JT3BLtQxm-MC1rjvzysLhFOLjylW8",{  "address": {
        //        "addressLines": [{value}]
          //    }})
            //   console.log(response.data)

    }
   
    return (
        <Combobox onSelect={handleSelect}>
        <ComboboxInput 
        className='w-full outline-none h-full pl-[30px] pt-[36px] overflow-auto rounded-lg my-1'
        disabled={!ready}  
        onChange={(e)=>setValue(e.target.value)} 
        value={value} 
        placeholder='Address'
        />
       
      
       <ComboboxPopover >
        <ComboboxList>
        {status === "OK" && data.map(({place_id, description})=>
          <ComboboxOption className='border-[1px] pl-[20px] h-[29px] bg-white' id={place_id} value={description}/>)}
        </ComboboxList>
       </ComboboxPopover>
       </Combobox>

    )
    
    
    
}

export default Profile
