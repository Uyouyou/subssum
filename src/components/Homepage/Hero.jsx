import React from 'react';
import { FaCopy, FaPencilAlt, FaShare, FaMoneyBillWave } from 'react-icons/fa';
import Frame from '../../assets/frame.png';

const Hero = () => {
  return (
    <div className='w-[991px] h-[452px] gap-6 flex justify-between items-center ml-[3rem]'>
      <div className='w-[463px] h-[452px] gap-5 flex flex-col items-center mt-[5rem]'>
      <div className='w-[463px] h-[112px] pt-6 gap-[97px] rounded-[24px] border-2 border-solid border-[#D7E1F4] flex justify-between items-center'>
        <div className='w-[124px] h-[64px] gap-2 flex flex-col items-center ml-[2rem]'>
          <p className='font-poppins font-normal tracking-wide text-base leading-7 text-[#3c517c] text-nowrap'>Wallet Balance</p>
          <p className='font-poppins font-semibold text-[#36px] leading-7 tracking-wide text-[#3c517c]'>Price: &#8358;3000</p>
        </div>

        <div className='mr-[3rem]'>
          <button className="w-[194px] h-[50px] px-[50px] py-[17px] gap-[10px] rounded-[10px] bg-[#4169E1] text-white font-inter font-semibold text-base leading-4 tracking-wide text-nowrap">Fund Wallet</button>
        </div>
      </div>



      <div  className='w-[463px] h-[112px] pt-6 gap-[2px] rounded-[24px] border-2 border-solid border-[#D7E1F4] flex flex-col items-center'>
        <div className='mr-[10rem] gap-1 mt-[-1rem]'>
        <p className='font-poppins font-normal text-base leading-7 tracking-wide text-[#3c517c]'>Referral</p>
        <p className='font-poppins font-normal text-base leading-7 tracking-wide text-[#3c517c]'>Referral Code: <span className='font-poppins font-semibold text-base leading-7 tracking-wide text-[#3c517c]'>18/52ha089</span> </p>
        <div className='flex justify-between items-center gap-2'>
          <span className='flex justify-between items-center font-poppins font-semibold text-base leading-7 tracking-wide text-[#4169e1] gap-2'>  <FaCopy className='w-[15.36px] h-[15.36px] text-[#4169e1] cursor-pointer' /> Copy</span>
          <span className='flex justify-between items-center font-poppins font-semibold text-base leading-7 tracking-wide text-[#4169e1] gap-2'><FaPencilAlt className='w-[15.36px] h-[15.36px] text-[#4169e1] cursor-pointer' />Edit</span>
          <span className='flex justify-between items-center font-poppins font-semibold text-base leading-7 tracking-wide text-[#4169e1] gap-2'> <FaShare className='w-[15.36px] h-[15.36px] text-[#4169e1] cursor-pointer' /> Share</span>
        </div>
        </div>
        
       
      </div>


      <div className='w-[463px] h-[112px] pt-6 gap-[2px] rounded-[24px] border-2 border-solid border-[#D7E1F4] flex justify-between items-center'>

       <div className='flex flex-col items-center ml-[2rem]' >  
         <p className='font-poppins font-normal text-base leading-7 tracking-wide text-[#3c517c]'>Total referrals made</p>
        <span className='font-poppins font-semibold text-[#36px] leading-7 tracking-wide text-[#3c517c] mr-[10rem]'>0</span>
        <span className='flex justify-between items-center font-poppins font-semibold text-base leading-7 tracking-wide text-[#4169e1] gap-2 mr-[5rem]'><FaMoneyBillWave className='w-[15.36px] h-[15.36px] text-[#4169e1] cursor-pointer' />Cashout</span>
       </div>

       <div className='flex flex-col items-center'>
        <p className='font-poppins font-normal text-base leading-7 tracking-wide text-[#3c517c]'>Current wallet Bonus</p>
        <p className='font-poppins font-semibold text-[#36px] leading-7 tracking-wide text-[#3c517c] mr-[8rem]'>&#8358;0.00</p>
       </div>
      </div>
      </div>
    
      <div className='w-[540px] h-[204px] mt-[-10rem] ml-[1rem]'>
        <img src={Frame} alt="card-image" />
      </div>
    </div>
  )
}

export default Hero