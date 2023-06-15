import React from 'react'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest, b2cPolicies } from '../authConfig';
import logo from '../../src/images/aaa2.png'
import Dropdown from './Dropdown';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Navbar = () => {
  const { instance, inProgress } = useMsal();
  const [open, setOpen] = useState(false)

  const toggle = ()=>{
    setOpen(!open)
  }
    let activeAccount;
    if (instance) {
      activeAccount = instance.getActiveAccount();
  }
  
  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
};

const handleLogoutRedirect = () => {
    instance.logoutRedirect();
};
const handleProfileEdit = () => {
  if (inProgress === InteractionStatus.None) {
      instance.acquireTokenRedirect(b2cPolicies.authorities.editProfile);
  }
};
  return (
    <div className='w-full'>
    <div className='flex items-center justify-between h-24 max-w-[1260px] mx-auto px-10px '>
    <h1><img src={logo} className='w-[200px]'/></h1>
      <div className='flex items-center justify-between hidden md:block'>
        
        <Link to='support' className='p-4 font-bold hover:text-blue-600 cursor-pointer'>Customer support</Link>
        <Link to='work' className='p-4 font-bold hover:text-blue-600 cursor-pointer'>How it works</Link>
        <Link to='help' className='p-4 font-bold hover:text-blue-600 cursor-pointer'>Help center</Link>
      </div>
      <div className=' flex items-center justify-between'>
        <button className='text-4 p-8 w-full py-2 bg-[#1e40af] text-white hover:bg-blue-600 rounded-lg mx-2'>English</button>
        <AuthenticatedTemplate>
        <button  onClick={handleProfileEdit}>{activeAccount && activeAccount.idTokenClaims.given_name ? activeAccount.idTokenClaims.given_name : 'Unknown'} </button>
        <Dropdown />
        <button onClick={handleLogoutRedirect}>Logout</button>
        
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
        <button onClick={handleLoginRedirect} className='text-4 w-full p-8 py-2 bg-red-600 hover:bg-[#ff3030] rounded-lg text-white'>Login</button>
       
       
        </UnauthenticatedTemplate>
        
      </div>
      <div onClick={toggle} className='block md:hidden'>
      {open ? <AiOutlineClose size={20} />:<AiOutlineMenu size={20} />}
      </div>
      <div className={open ? 'block md:hidden top-20 fixed left-0 w-full h-[90%] ease-in duration-300 z-10  bg-blue-400 flex flex-col item-center justify-between' :
        ' top-20 fixed left-[-100%]  h-[90%] ease-in duration-300 z-10  bg-blue-400 flex flex-col item-center justify-between'
       }>
        <ul>
        <li className='border-b text-lg font-bold p-4'><Link to='account'>Account</Link></li>
        <li className='border-b text-lg font-bold p-4'><Link to='account'>Transfer</Link></li>
        <li className='border-b text-lg font-bold p-4'><Link to='account'>Reciepent</Link></li>
        <li className='text-lg font-bold p-4'><Link to='account'>Discounts</Link></li>
        </ul>
       
        <div className='flex flex-col p-4 w-full'>
       
        <AuthenticatedTemplate>
        <button  onClick={handleProfileEdit}>{activeAccount && activeAccount.idTokenClaims.given_name ? activeAccount.idTokenClaims.given_name : 'Unknown'} </button>
        
        <button onClick={handleLogoutRedirect} className='text-4  py-2 my-2 bg-white rounded-lg mx-2 bg-red-400 rounded-lg hover:bg-red-700'>Logout</button>
        
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
        <button onClick={handleLoginRedirect} className='text-4  py-2 my-2 bg-white rounded-lg mx-2 bg-red-400 rounded-lg hover:bg-red-700'>Login</button>
       
       
        </UnauthenticatedTemplate>
        
      </div>
      </div>
    
      
    </div>
    </div>
    
 
  )
}

export default Navbar
