import React, { useEffect, useState } from 'react';
import AllBreakTime from '../Allbreaktime/AllBreakTime';


const BreakTime = ({handleBreakTime}) => {

    const[breakTime,setbreakTime] = useState([]);
    
    useEffect(()=>{
        fetch('breaktime.json')
        .then(res=>res.json())
        .then(data=> setbreakTime(data))
    },[]);

    
    return (
        <div>
            {
                
                    breakTime.map(time=> 
                    <AllBreakTime 
                     key={time.id}
                        time={time.breaktime}
                        handleBreakTime={handleBreakTime}>
                        </AllBreakTime>)
      }
            
        </div>
    );
};

export default BreakTime;