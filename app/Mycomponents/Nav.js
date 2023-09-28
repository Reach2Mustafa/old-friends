import clsx from "clsx";
import React, { useState, useEffect } from "react";

const Nav = ({ theme2, toggleTheme, toggleTheme1, themee }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showId1, setShowId1] = useState(true); 
  const [showId2, setShowId2] = useState(false); 
 const[active1,setactive1]=useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const calculatedScrollPercentage =
        (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(calculatedScrollPercentage);

      // Toggle the visibility of id 1 and id 2 based on scroll position
      if (calculatedScrollPercentage > 0) {
        setShowId1(false);
        setShowId2(true);
      } else {
        setShowId1(true);
        setShowId2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const toggleActive = () => {
      if (active1 === 1) {
        setactive1(2);
      } else if (active1 === 2) {
        setactive1(1);
      }
    };

    setInterval(toggleActive, 3000);
  }, [active1]);

  useEffect(()=>{
    
    if (showId2==true){
      document.getElementById("1").style.display="none"
      document.getElementById("3").style.display="none"
    }
    else{
      document.getElementById("1").style.display="block"
      document.getElementById("3").style.display="block" 
    }
  })

  const pageClass3 = theme2 || themee ? "dark-theme3" : "light-theme";
  const pageClass4 = theme2 || themee ? "dark-theme4" : "light-theme";
  const pageClass6 = theme2 || themee ? "dark-theme6" : "light-theme";
  const pageClass7 = theme2 || themee ? "dark-theme7" : "light-theme";

  const [icon, setIcon] = useState("/img/moon.png");
  const [title, setTitle] = useState("Dark");

  const onClick = () => {
    if (themee !== true && theme2 !== true) {
      setIcon("/img/sun.png");
      setTitle("Light");
    } else {
      setIcon("/img/moon.png");
      setTitle("Dark");
    }
  };
  const [currenttime,setcurrenttime]=useState()
  const livetime = () => {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  
    var time = hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
    setcurrenttime(time);
  };
  
  setInterval(livetime,1000);

  return (
    <div
      className={`fixed top-2 z-10 w-[98vw] px-3  rounded-[50px] bg-white ${pageClass3}`}
    >
      <div className="max-h-max">
        <div className="flex mx-2 my-2 rounded-[10px] w-full justify-between px-4">
          <div className="flex items-center">Old Friends</div>
          <div className=" h-10 ml-[10vw] relative  overflow-clip  w-[15vw]" >
         
          <div
  id="1"
  className={clsx("h-10   transition-opacity  absolute top-0 ease-in duration-300 ",active1==1 ?"translate-y-0":"translate-y-48")}
>
 
<div className="w-full flex ">
  
<button
                onClick={toggleTheme}
                className={`bg-[#ebebed] w-[12vw] py-2 px-2 rounded-[30px] ${pageClass4}`}
              >
                <div  className="w-full flex justify-center items-center ml-4">
                <div className="flex gap-2 h-max" onClick={toggleTheme1}>
                  <div className="flex justify-center items-center">
                    <div
                      className={`w-[5px] flex items-center h-[5px] bg-black rounded-[50px] ${pageClass6}`}
                    ></div>
                  </div>
                  <div>
                    <div
                      className="flex  w-[9vw] gap-2"
                      onClick={onClick}
                    >
                      <div>Theme | {title}</div>
                      <div className="flex justify-center items-center">
                        <div
                          className={`w-[1vw] h-[1vh] flex justify-center items-center`}
                        >
                          <img className="" src={icon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                </div>
              </button>
</div>
            </div>
            <div 
              id="2"
              className={clsx(
                "bg-[#EBEBED] absolute top-1 transition-transform ease-in-out duration-300  gap-3 justify-center items-center w-[15vw]  px-2 rounded-[30px] py-2  ",` ${pageClass4}`,showId2? "tranlate-y-0":"translate-y-48"
                
              )}
            >
             <div className="flex h-5 justify-center gap-2 items-center">
             <div className={`flex h-[1px] bg-[#d5d5d7] z-[99] w-[12vw] `}>
                <div
                  className="h-full bg-[black] transition-width duration-0.2s  ease w-[10vw]"
                  style={{ width: `${scrollPercentage}%` }}
                ></div>
              </div>
              <div className="scroll-progress-text">
                  {Math.round(scrollPercentage)}%
                </div>
             </div>
            </div>
          <div id="3" className={clsx("h-10 transition-opacity  ease-in absolute top-0 duration-300",active1==2 ?"translate-y-0":"translate-y-48")}>
  
  <button
                 
                  className={`bg-[#ebebed] w-[15vw] py-2 px-2 rounded-[30px] ${pageClass4}`}
                >
                  <div  className="w-full flex justify-center items-center ml-4">
                  <div className="flex gap-2 h-max" >
                    <div className="flex justify-center items-center">
                      <div
                        className={`w-[5px] flex items-center h-[5px] bg-black rounded-[50px] ${pageClass6}`}
                      ></div>
                    </div>
                    <div>
                      <div
                        className="flex  w-[max] gap-2"
                       
                      >
                        <div>Local Time | {currenttime}</div>
                        <div className="flex justify-center items-center">
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  </div>
                </button>
  </div>
          </div>
           
          <div className={`flex items-center gap-5 w-max text-black ${pageClass7}`}>
            <div>Home</div>
            <div>Work</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Nav;

