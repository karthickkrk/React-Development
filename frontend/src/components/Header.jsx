import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { LogOut } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
const Header = () => {
    const navigate = useNavigate();
    const handleSignOut = () =>{
        navigate('/')
    }
  return (
    <div className='flex justify-between items-end py-4'>
        <h1 className='text-xl text-blue-500'>KRK</h1>
        <div className='flex gap-4'>
        <Navigation/>
        <div className='flex text-red-600 items-end pb-1 hover:cursor-pointer'>
        <LogOut data-tooltip-id="my-tooltip" data-tooltip-content="Log out"  size={16} onClick={handleSignOut}/>
        <Tooltip content="Log out"  className="bg-white text-blue-500" id="my-tooltip"/>
          
        </div>
        
        </div>
        
    </div>
  )
}

export default Header