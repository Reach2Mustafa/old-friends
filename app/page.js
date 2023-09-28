"use client"
import './globals.css'
import React, { useState } from 'react';
import Nav from './Mycomponents/Nav';
import C1 from './Mycomponents/c1';
import C2 from './Mycomponents/c2';
import { useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
  const [theme, setTheme] = useState(false);
  const pageClass = theme ? 'dark-theme' : 'light-theme';
  const pageClass1 = theme ? 'dark-theme1' : 'light-theme1';

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  
  return (
    <div className={`bg-[#d5d5d7] font-s1  ${pageClass}`}>
      <div className='w-full flex justify-center'>
        <Nav theme2={theme} toggleTheme={toggleTheme} />
      </div>
      <div className='flex flex-col pt-[20vh] gap-3 pb-[10vh] items-center'>
        <div><button className={`border-s-white border-[2px] rounded-[20px] px-2  ${pageClass}`}>welcome</button></div>
        <div className='text-[40px] w-[700px] font-s1  font-semibold'>Old Friends is an engineering studio. We build custom websites for teams who value craft.</div>
      </div>
      <div className='grid grid-cols-2 w-[97vw] grid-rows-3 h-[300vh] gap-4 mx-4'>
      <Link href={theme ? "/next?theme=dark" : "/next"}><div className='bg-[url("/img/o1.webp")] bg-cover bg-no-repeat h-full w-full rounded-[30px]'>
     

        </div></Link>  
        <div id='e1' className={`bg-white h-full w-full  rounded-[30px] ${pageClass1}`}>
          <div className={`text-[#0f0f0f99] pt-10 ml-10 ${pageClass1}`}>Notes From Friends</div>
          <div className='flex justify-center  overflow-y-scroll max-h-[700px] mt-10 scrollbar-hide '><C2 /></div>
        </div>
        <div className={`bg-white h-full w-full rounded-[30px] ${pageClass1}`}>
           <div  className={`bg-white h-full w-full rounded-[30px] ${pageClass} `}>
           <div className='pt-10 ml-10'> Happening Elsewhere</div>
           <div className=' relative  overflow-hidden' ><C1 theme1={theme} toggleTheme={toggleTheme} /></div> </div>
           </div>
        <div className='bg-[url("/img/o2.webp")] bg-cover bg-no-repeat h-full w-full rounded-[30px]'></div>
        <div className='bg-[url("/img/o3.webp")] bg-cover bg-no-repeat h-full w-full rounded-[30px]'></div>
      <div className='bg-[url("/img/o4.webp")] bg-cover bg-no-repeat h-full w-full rounded-[30px]'></div>
      </div>
     
    </div>
  );
};

export default Page;
