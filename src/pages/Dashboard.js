import React from 'react'
import dashboard from '../images/dashboard.jpg'


const Dashboard = () => {
  
  return (
    
    <div className='item-center my-[120px]'>
    <div className='bg-[#ccc] flex items-center flex-col h-[700px] '>
      <div className='text-lg my-10'>My recipients</div>
      <div><img src={dashboard} className='w-[1000px]' /></div>
    </div>
    </div>
    
  )
}

export default Dashboard
