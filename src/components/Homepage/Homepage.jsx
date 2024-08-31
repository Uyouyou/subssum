import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Heading from './Heading';
import Hero from './Hero';


const Homepage = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
       <Sidebar />

       <div className='flex-1'>
       <Heading />
       <Hero />
       <div>{<Outlet />}</div>
       </div>
       
       
    </div>
  )
}

export default Homepage