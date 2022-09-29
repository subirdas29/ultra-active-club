import React, { useState } from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    const {name,weight,height,age,exerciseTime}=props

        let totalTime =0
    
        for(const activity of exerciseTime)
        {
            totalTime = totalTime + activity.time;
        }
        console.log(totalTime);
        const [breakTime, setBreakTime]= useState([]);

        newTime=[];
        const handleBreakTime = () =>
    {
        const newTime = [...breakTime]
        setBreakTime(newTime);
    }

    return (
        <div className='details-exercise'>
            <div className='info'>
            <img src="" alt="" />
            <h2>name:{name}</h2>
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
                <p onClick={handleBreakTime}>10s</p>
                <p>20s</p>
                <p>30s</p>
                <p>40s</p>
                <p>50s</p>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <p>Exercise time:{totalTime}</p>
                <p>Break time: {}</p>
            </div>
         
                <button className='button'>Activity Complete</button>
           
            
        </div>
    );
};

export default ExerciseDetails;