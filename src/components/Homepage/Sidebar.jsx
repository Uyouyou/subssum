import React from 'react';
import Logo from '../../assets/Group.png'; 
import { Dashboard_Sidebar_Top_Links, Dashboard_Sidebar_Bottom_Links } from '../constants/Navigation';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='flex flex-col bg-[#eff3fb] w-[304px] p-3'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <img src={Logo} alt="logo" className="h-8 w-auto" /> 
        <h1 className='font-inter text-[#000080] font-semibold text-[23px] leading-[28px]'>subssum</h1>
      </div>

      <div className='flex-1 mt-[2rem]'>
        {Dashboard_Sidebar_Top_Links.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
      </div>

      <div className='flex-1 mt-[10rem]'>
        {Dashboard_Sidebar_Bottom_Links.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
      </div>
      
    </div>
  );
};

export default Sidebar;

function SideBarLinks({ item }) {
  return (
    <Link to={item.path} className='flex items-center gap-2 px-[10px] pr-[23px] py-[9px] rounded-[12px] hover:bg-[#4169E1]'>
      <img className='w-[24px] h-[24px] hover:text-[#fff]' src={item.image} alt="" />
       <button className='font-inter text-base text-[#4c689e] hover:text-[#fff] font-medium leading-7 tracking-wide text-nowrap flex justify-between items-center'>{item.label}</button>
      <span className='text-xl text-[#4c689e] ml-2"'>{item.icon}</span> 
    </Link>
  );
}
