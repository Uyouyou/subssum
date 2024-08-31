import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';

const Heading = () => {
  return (
    <nav className='w-full h-[32px] flex justify-between items-center mt-[1rem]'>
      <div className='ml-[3.5rem]'>
        <h2 className='font-inter text-[20px] font-medium leading-[28px] tracking-wide text-[#2b3b5a]'>Welcome, Lawal Wahab</h2>
      </div>

      <div className='w-[254px] h-[32px] gap-2 flex justify-between items-center mr-[3rem]'>
        <p className='font-inter text-[#4169c1] text-[16px] leading-4 tracking-wide'>Upgrade To Merchant</p>
        <span className='w-[32px] h-[32px] rounded-[32.4px] border-[1.92px] border-custom border-custom-color flex justify-center items-center bg-[#eff3fb]'><FaBell className='w-[15.36px] h-[15.36px] text-[#4f169e] cursor-pointer' /></span>
        <span className='w-[32px] h-[32px] rounded-[32.4px] border-[1.92px] border-custom border-custom-color flex justify-center items-center bg-[#eff3fb]'><FaUser className='w-[15.36px] h-[15.36px] text-[#4f169e] cursor-pointer' /></span>
      </div>
    </nav>
  )
}

export default Heading