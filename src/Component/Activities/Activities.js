import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ExerciseDetails from '../Exercise-details/ExerciseDetails';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities]= useState([]);
    const[exerciseTime,setExerciseTime] = useState([])
    
    useEffect(()=>{
        fetch('activity.json')
        .then(res=>res.json())
        .then(data=> setActivities(data))
    },[]);

    const handleAddToTime = (activity) =>
    {
        console.log(activity);
        const newTime = [...exerciseTime, activity]
        setExerciseTime(newTime);
    }
    
    return (
        <div>Selected the exercise
        <div className='activities-details'>
             
       
       <div className='activity-info'>
            
                {
                    
                activities.map(activity=> 
                <Activity
                 key={activity.id}
                    activity={activity}
                    handleAddToTime={handleAddToTime}>
                    </Activity>)
                }
            </div>
            <div className='exercise-details'>
                <ExerciseDetails name="Subir Das"
                weight="65kg"
                height="6"
                age="24years"
                exerciseTime={exerciseTime}></ExerciseDetails>
                
            </div>
            </div>
            </div>
            
    );
};

export default Activities;