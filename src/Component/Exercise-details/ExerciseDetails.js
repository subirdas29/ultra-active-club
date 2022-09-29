import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    const {name,weight,height,age}=props
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
                <p>10s</p>
                <p>10s</p>
                <p>10s</p>
                <p>10s</p>
                <p>10s</p>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <p>Exercise time: {}</p>
                <p>Break time: {}</p>
            </div>
         
                <button className='button'>Activity Complete</button>
           
            
        </div>
    );
};

export default ExerciseDetails;