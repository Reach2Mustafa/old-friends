"use client";
import React, { useState } from 'react';

const C1 = ({ theme1, toggleTheme }) => {
  const data = [
    { id: 1, title: 'HBO Max brand portal, built on ', dt: '21:13PM ·10/2/2022', swap: "86", net: "132k", like: "15,99", video:"/img/s1.mp4" },
    { id: 2, title: 'case study island', dt: "21.31PM · 2/2/2023", swap: "35", net: "85k", like: "15,99" ,video:"/img/s2.mp4"  },
    { id: 3, title: 'progressive blur', dt: "19:31PM · 1/22/2023", swap: "14", net: "52.5k", like: "15,99",video:"/img/s3.mp4" },
    { id: 4, title: 'studio stack', dt: '21:13PM ·10/2/2022', swap: "86", net: "132k", like: "15,99" ,video:"/img/s4.mp4"},
    { id: 5, title: 'scroll progress', dt: "21.31PM · 2/2/2023", swap: "35", net: "85k", like: "15,99",video:"/img/s5.mp4" },
    { id: 6, title: '1-800-text-your-notes', dt: "19:31PM · 1/22/2023", swap: "14", net: "52.5k", like: "15,99",video:"/img/s6.mp4" },
    { id: 7, title: 'menu open menu close', dt: '21:13PM ·10/2/2022', swap: "86", net: "132k", like: "15,99" ,video:"/img/s7.mp4"},
    { id: 8, title: 'scroll-based storytelling', dt: "21.31PM · 2/2/2023", swap: "35", net: "85k", like: "15,99",video:"/img/s8.mp4" },
    
  ];
  

  const [translateX, setTranslateX] = useState(0);

  const [tx, setTx] = useState(0);
 

  const handleNextClick = () => {
   
    const nextTranslation=translateX +34.5-3;
    if (nextTranslation > 0) {
        setTranslateX(0);
      } else {
        setTranslateX(nextTranslation);
        setTx(1); 
      }
   
   
  };

  const handlePreviousClick = () => {
    const nextTranslation = translateX - 34.5 + 3;
  
    if (nextTranslation < -236) {
        setTranslateX(0);
      setTx(-1);
    } else if (nextTranslation < 0) {
        setTranslateX(nextTranslation);
      setTx(1);
    }
  };
 

  const pageClass2 = theme1? 'dark-theme2' : 'light-theme';
  

  return (
    <>
      <div
        id="a1"
        className="flex   mt-20 w-[40vw]   relative ml-[10vw]"
        style={{
            transform: `translateX(${translateX}vw)`,
            transition: `transform ${tx}s ease`, 
           
          }}
      >
        {data.map((item) => (
          <div key={item.id} className="w-[vw] h-[65vh]">
            <div className="w-[20px] h-[17px] ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#1DA1F2" viewBox="0 0 24 20">
                <path fill="#1DA1F2" d="M23.893 2.486a9.836 9.836 0 0 1-2.428.692c.39-.067.965-.77 1.194-1.055.348-.43.613-.92.782-1.446 0-.039.039-.095 0-.123a.134.134 0 0 0-.128 0 12.28 12.28 0 0 1-2.875 1.117a.2.2 0 0 1-.201-.05 2.792 2.792 0 0 0-.252-.263 5.235 5.235 0 0 0-1.373-.887 4.829 4.829 0 0 0-2.138-.352c-.708.045-1.4.235-2.032.558a5.264 5.264 0 0 0-1.608 1.362a5.158 5.158 0 0 0-.976 1.954a5.364 5.364 0 0 0-.05 2.066c0 .117 0 .134-.101.117-3.98-.586-7.246-1.999-9.915-5.03c-.117-.134-.178-.134-.273 0C.358 2.91.922 5.701 2.373 7.08c.195.184.396.363.609.53a4.985 4.985 0 0 1-1.91-.53c-.111-.072-.173-.033-.178.1a3.288 3.288 0 0 0 0 .559a5.069 5.069 0 0 0 4.02 3.7c.203.086.414.152.63.195a5.711 5.711 0 0 1-1.87.056c-.133-.028-.184.044-.133.173c.82 2.233 2.601 2.914 3.907 3.293c.179.028.358.028.558.073l-.033.033c-.385.704-1.943 1.178-2.657 1.424a9.552 9.552 0 0 1-4.075.525c-.218-.034-.268-.028-.324 0c-.056.027 0 .089.061.145c.28.184.558.346.849.502c.864.472 1.778.846 2.724 1.117c4.901 1.35 10.417.357 14.096-3.3c2.891-2.869 3.907-6.827 3.907-10.79c0-.15.184-.24.29-.318c.88-.623 1.834-1.06 2.835-1.313c.182-.052.267.026.267.118c0 .15-.06.208-.193.283Z"></path>
              </svg>
            </div>

            <div className="ml-5 mt-10 text-[16px] font-semibold mb-2">{item.title}</div>
            <div className="w-[30vw] mx-[10px] flex items-center h-[40vh] rounded-[30px] bg-black "> <video
                  muted
                  autoPlay
                  loop
                  playsinline
                  className="h-[100%] w-[100%]  object-cover   "
                  id="myVideo"
                >
                  <source src={item.video} type="video/mp4" />
                </video>
            </div>
            <div className="ml-5 mt-2">{item.dt}</div>
            <div className="w-[60%] flex justify-between mt-[5vh] ml-5">
              <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                  <path d="m11.993 5.136-.57.487.57.667.57-.667-.57-.487ZM3.264 12.56l.592-.46-.592.46Zm17.458 0-.592-.46.592.46Zm-9.25 7.98.497-.56-.497.56Zm.378.274-.214.718.214-.718Zm.664-.273-.497-.562.497.562Zm-.378.273.215.718-.215-.718Zm.427-16.166c-2.22-2.595-6.022-3.363-8.896-.908l.975 1.14c2.136-1.825 5.003-1.336 6.781.743l1.14-.975ZM3.667 3.74c-2.806 2.398-3.21 6.43-.995 9.28l1.184-.92c-1.718-2.211-1.418-5.337.786-7.22l-.975-1.14Zm17.647 9.28c2.21-2.842 1.864-6.904-1.003-9.287l-.959 1.154c2.23 1.852 2.503 4.993.778 7.213l1.184.920Zm-1.003-9.287c-2.909-2.418-6.662-1.687-8.888.915l1.14.975c1.773-2.072 4.602-2.554 6.79-.736l.958-1.154ZM2.672 13.021c.859 1.105 2.548 2.779 4.186 4.325a184.688 184.688 0 0 0 4.117 3.756l.994-1.123a184.787 184.787 0 0 1-4.081-3.723C6.238 14.697 4.633 13.1 3.856 12.1l-1.184.92Zm10.34 8.081c.813-.720 2.463-2.195 4.116-3.756 1.639-1.546 3.328-3.22 4.186-4.325l-1.184-.92c-.777.999-2.38 2.596-4.032 4.155a183.752 183.752 0 0 1-4.081 3.723l.994 1.123Zm-2.037 0c.082.073.175.157.263.223.097.073.227.156.398.207l.429-1.437c.064.020.096.047.076.032a10.734 10.734 0 0 1-.171-.147l-.995 1.122Zm1.042-1.123a10.734 10.734 0 0 1-.171.148c-.020.015.011-.013.076-.032l.428 1.437a1.23 1.23 0 0 0 .398-.207c.088-.066.182-.150.263-.223l-.994-1.123Zm-.381 1.553c.232.070.482.070.715 0l-.43-1.437a.245.245 0 0 1 .144 0l-.43 1.437Z"></path>
                </svg>
                {item.like}
              </div>
              <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="m11 2 3 3m0 0-3 3m3-3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 7.28 2 8.12 2 9.8v5.7c0 .464 0 .697.026.892a3 3 0 0 0 2.582 2.582c.195.026.428.026.892.026m4.5 0h7.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 16.72 22 15.88 22 14.2V8.5c0-.464 0-.697-.026-.892a3 3 0 0 0-2.582-2.582C19.197 5 18.964 5 18.5 5M10 19l3 3m-3-3 3-3"></path>
                </svg>
                {item.swap}
              </div>
              <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ width: '16', height: '16' }}>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 20V4M6 20v-4m6 4V10"></path>
                </svg>
                {item.net}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-4 justify-center'>
  <button className={`bg-[#d5d5d7] px-4 py-3 rounded-[100px] ${pageClass2}`} onClick={handleNextClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" style={{ width: '1.25rem' }}>
      <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="M19 12H5m0 0 7 7m-7-7 7-7"></path>
    </svg>
  </button>
  <button className={`bg-[#d5d5d7] px-4 py-3 rounded-[100px] ${pageClass2} `} onClick={handlePreviousClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" style={{ width: '1.25rem' }}>
      <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="M5 12h14m0 0-7-7m7 7-7 7"></path>
    </svg>
  </button>
</div>

    </>
  );
};

export default C1;
