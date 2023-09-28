"use client";
import React, { useState } from 'react';
import Nav from '../Mycomponents/Nav';



const Page = () => {
    const [themee, setThemee] = useState(false);
    const pageClass5 = themee ? 'dark-theme5' : 'light-theme';
    
    
    const toggleTheme1 = () => {
      setThemee((prevTheme) => !prevTheme);
    };
    
    
 

  return (
    
    <div className={`flex  bg-[#d5d5d7]   flex-col  ${pageClass5}`} >
      <div className='w-full justify-center m-auto flex'>  <Nav themee={themee} toggleTheme1={toggleTheme1}/></div>
      <div className={`bg-[#d5d5d7]  h-[80vh] mt-[8vh] rounded-t-[20px] w-[98vw] ${pageClass5}`}>
        <div className='pl-[15vw] pt-[10vh]'>

        <div><img className='h-[23px]' src="https://www.oldfriends.studio/clients/hbo-max.svg" alt="" /></div>
        <div className='text-[30px] w-[800px] opacity-80 font-semibold pt-[5vh]  font-extrabold font-s1'>As one of the world’s most popular streaming platforms, HBO Max has teams publishing content all over the globe. We crafted a site that guides them on how to use their branding and serves as inspiration in bringing it to life.</div>
        <div className='pt-[5vh]'>
            <div className='w-[1000px] grid grid-cols-2 border-b-2 border-[#FFFFFF60] pb-5 ' >
                <div className=' opacity-60'>Industry</div>
                <div>Media</div> 
            </div>
            <div className='w-[1000px] grid grid-cols-2 border-b-2 border-[#FFFFFF60] py-4' >
                <div className=' opacity-60'>Type</div>
                <div>Brand Portal</div> 
            </div>
            <div className='w-[1000px] grid grid-cols-2 border-b-2 border-[#FFFFFF60]  py-4' >
                <div className=' opacity-60'>Platform</div>
                <div>Webflow</div> 
            </div>
        </div>
        </div>

      </div>
      <div className='w-full flex justify-center'>
        <div className='w-[68vw] h-[68vh] overflow-hidden rounded-[30px]'>

      <video
                  muted
                  autoPlay
                  loop
                  playsinline
                  className="h-[70vh] w-[70vw] "
                  id="myVideo"
                >
                  <source src="/img/s1.mp4" type="video/mp4" />
                </video>
        </div>
      </div>
      <div className={`bg-white w-[70vw] h-max pb-12 m-auto rounded-3xl mt-[1vh] ${pageClass5}`}>
      <div className='w-full flex justify-center' >

      <div className='flex gap-2 pt-[5vh]'>
        <div className='flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.403 1.185a2 2 0 0 0-.806 0c-.307.063-.582.217-.8.34l-.06.033-6.426 3.571c-.409.227-.613.34-.68.49a.5.5 0 0 0-.002.412c.068.15.271.265.679.494l7.3 4.107c.143.08.214.12.29.136a.502.502 0 0 0 .204 0c.076-.016.147-.056.29-.136l7.3-4.107c.408-.229.611-.343.679-.494a.5.5 0 0 0-.001-.411c-.068-.15-.273-.264-.68-.49l-6.427-3.572-.06-.034c-.218-.122-.493-.276-.8-.339ZM21.996 8.89c0-.448 0-.672-.095-.803a.5.5 0 0 0-.35-.204c-.16-.018-.356.092-.747.312l-7.396 4.16c-.149.084-.223.125-.277.184a.5.5 0 0 0-.106.182c-.025.076-.025.161-.025.331v8.176c0 .447 0 .67.094.801a.5.5 0 0 0 .348.205c.16.019.355-.09.745-.306l6.476-3.597.063-.034c.23-.128.522-.288.745-.53.193-.21.339-.457.428-.728.103-.313.102-.644.101-.908v-.072c0-1.963-.003-5.303-.004-7.169ZM9.814 21.928c.39.216.584.325.744.306a.5.5 0 0 0 .348-.205c.094-.13.094-.354.094-.801v-8.176c0-.17 0-.255-.025-.331a.5.5 0 0 0-.106-.181c-.054-.06-.128-.101-.277-.185l-7.396-4.16c-.391-.22-.587-.33-.748-.312a.5.5 0 0 0-.349.204c-.094.13-.095.355-.095.803C2.003 10.756 2 14.096 2 16.06v.072c-.001.264-.002.595.101.908a2 2 0 0 0 .428.728c.223.242.514.402.745.53l.063.034 6.477 3.597Z"></path></svg></div>
        <div>Features</div>
      </div>
      </div>
      <div>
      <div className='w-full justify-center flex gap-3 pt-[5vh]'>
        <button className=' border-2 py- rounded-[20px] border-[#FFFFFF60] text-center px-4 hover:cursor-pointer'>Menu</button>
        <button className=' border-2 py- rounded-[20px] border-[#FFFFFF60] text-center px-4 hover:cursor-pointer' >Notification</button>
        <button className=' border-2 py- rounded-[20px] border-[#FFFFFF60] text-center px-4 hover:cursor-pointer'>Downloads</button>
        <button className=' border-2 py- rounded-[20px] border-[#FFFFFF60] text-center px-4 hover:cursor-pointer'>Interaction</button>
      </div>
      </div>
      <div className='w-full flex justify-center pt-[5vh] ' >

      <div className=' text-center w-[550px]' >Not everyone remembers to check the site frequently. Visitors can enter their email to receive notifications when assets are updated. Latest assets can be download directly from the email.</div>
      </div>
      <div className='w-full flex justify-center'>
      <div className='w-[40vw] h-[40vh]  pt-[5vh] '>

<video
            muted
            autoPlay
            loop
            playsinline
            className="h-[40vh] w-[40vw]  "
            id="myVideo"
          >
            <source src="/img/s2.mp4" type="video/mp4" className=' ' />
          </video>
  </div>

      </div>
      </div>
  
   <div className='w-full flex justify-center h-max '>
    <div className='w-[70vw] h-[70vh] pt-[1vh] ' >
        <img className='w-[70vw] h-[70vh] rounded-[30px] ' src="https://www.oldfriends.studio/_next/image?url=%2Fwork%2Fhbo%2Fcase-study%2Fscreens.jpg&w=1920&q=75" alt="" />
      </div>
    </div>
    <div className='w-full flex justify-center pt-[2vh]'>
      <div className={`w-[70vw] grid grid-rows-3 gap-3 ${pageClass5}`}  >
        <div className={` ${pageClass5} flex bg-white rounded-3xl`}>
          <div className='flex flex-col items-center justify-center w-[50%]'>
            <div className='text-[20px] w-[50%]'>Multi-language Support</div>
            <div className='w-[50%]'>Translations are decoupled from the rest of the site, making it easy to add new languages.</div>
          </div>
          <div className='w-[50%] py-2 rounded-3xl' ><img className=' rounded-2xl' src="https://www.oldfriends.studio/_next/image?url=%2Fwork%2Fhbo%2Fcase-study%2Fmultilang.jpg&w=1920&q=75" alt="" /></div>
        </div>
        <div  className={` ${pageClass5} flex bg-white rounded-3xl flex-row-reverse`}> 
          <div className='flex flex-col items-center justify-center w-[50%]'>
            <div className='text-[20px] w-[50%]'>Content Filters</div>
            <div className='w-[50%]'>Custom filters allow visitors to search for assets across a variety of criteria. Filter states are synced to the URL, so employees can share links to inspiration when working on new projects.</div>
          </div>
          <div className='w-[50%] py-2 rounded-3xl' ><img className=' rounded-2xl' src="https://www.oldfriends.studio/_next/image?url=%2Fwork%2Fhbo%2Fcase-study%2Ffilters.jpg&w=1920&q=75" alt="" /></div></div>
        <div className={` ${pageClass5} flex bg-white rounded-3xl`}>
          <div className={`flex flex-col items-center justify-center w-[50%] ${pageClass5}`}>
            <div className='text-[20px] w-[50%]'>Live Changelog</div>
            <div className='w-[50%]'>Media templates and assets are updated frequently, so we created a changelog that automatically updates with the latest changes. This allows users to quickly see what's new and what's changed. Assets can be downloaded directly from the changelog.</div>
          </div>
          <div className='w-[50%] py-2 rounded-3xl' ><img className=' rounded-2xl object-cover' src="https://www.oldfriends.studio/_next/image?url=%2Fwork%2Fhbo%2Fcase-study%2Fchangelog.jpg&w=1920&q=75" alt="" /></div>
        </div>
        </div>
      </div>
    </div>
 
   
  );
}

export default Page;