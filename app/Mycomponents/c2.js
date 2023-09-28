import React, { useState } from 'react';

const C2 = ( ) => {
    const data = [
        { id: 1, title: 'C ', t1: 'Chester Chipperfield · Running Tide', t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple" },
        { id: 2, title: 'K', t1: "Danny Crichton · Lux Capital", t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple" },
        { id: 3, title: 'D', t1: "Kevin Robinson · Juniper Jones", t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple" },
        { id: 4, title: 'H', t1: 'Kevin Robinson · Juniper Jones', t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple"},
        { id: 5, title: 'P', t1: "Kevin Robinson · Juniper Jones", t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple" },
        { id: 6, title: 'J', t1: "Kevin Robinson · Juniper Jones", t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple" },
        { id: 7, title: 'D', t1: 'Kevin Robinson · Juniper Jones', t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple"},
        { id: 8, title: 'E', t1: "Kevin Robinson · Juniper Jones", t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him.",n:"Running Tide Advisor, Former Creative Director at Tesla and Apple"},
        { id: 8, title: 'K', t1: "Kevin Robinson · Juniper Jones", t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple" },
        { id: 8, title: 'M', t1: "Kevin Robinson · Juniper Jones", t2:"James is one of the rare talents that harmonizes design and technology. Very few people get it, and teams often throw projects over the wall for the next person in the chain to deal with. James approaches his project with real thought, insight, and care. His eye for detail is so welcome in my world, and I've loved every project I've worked on with him." ,n:"Running Tide Advisor, Former Creative Director at Tesla and Apple" },
        
      ];
    const [clickStates, setClickStates] = useState(new Array(data.length).fill(false));

      const handleButtonClick = (index) => {
        
        const newClickStates = [...clickStates];
   
        newClickStates[index] = !newClickStates[index];
      
        setClickStates(newClickStates);
      };
     
      
  return (
    <div className=' '>

    {data.map((item,index) => (
        <div key={item.id} className=" flex  flex-col gap-[10vh] ">
           <div className='flex     w-[500px] justify-between cursor-pointer hover:bg-[#0f0f0f0a] pr-3 pb-5  transition-bg duration-300  ease-in-out'>
            <div className='flex justify-start'>

           <div className={`h-[50px] w-[50px] bg-[#0f0f0f1a] m-10 flex justify-center items-center rounded-[5px] `}>
                {item.title}
            </div>

            </div>
            <div className={` overflow-hidden w-[400px] mt-9  ${clickStates[index]?"h-max":"max-h-[75px]"} `}   onClick={() => handleButtonClick(index)} >
                <div className=' font-bold'>
                    {item.t1}
                </div>
                <div className="">
                    {item.t2}
                </div>
                <div className=' mt-5'>{item.n}</div>
            </div>
           </div>
      
    </div>))}
    </div>
  );
}

export default C2;
