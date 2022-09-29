import React, {useState } from 'react';

import BreakTime from '../breakTime/BreakTime';
import images from '../../images/menpic.jpg'
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    const {name,weight,height,age,address,exerciseTime}=props

        let totalTime =0;
    
        for(const activity of exerciseTime)
        {
            totalTime = totalTime + activity.time;
        }

    const[showTime,setShowTime] = useState("")

    const handleBreakTime = (breakTime) =>
    {
       setShowTime(breakTime);
    }

    return (
        <div className='details-exercise'>
            <div className='info'>
            <img src={images} alt="" />
            <div className='name-address'><h2>name:{name}</h2>
            <p>address:{address}</p></div>
            </div>
            <div className='weight-info'>
            <p>weight:{weight}</p>
              <p>height:{height}</p>
            <p> age:{age}</p>
            </div>
            
            
            <div>
                <h2>Add a break</h2>
            </div>
            <div className='break-time'>
            <BreakTime handleBreakTime={handleBreakTime}></BreakTime>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <p>Exercise time:{totalTime}</p>
                <p>Break time: {showTime}</p>
            </div>
         
                <button className='button'>Activity Complete</button>
           
            
        </div>
    );
};

export default ExerciseDetails;