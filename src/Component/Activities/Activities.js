import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ExerciseDetails from '../Exercise-details/ExerciseDetails';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities]= useState([]);
    const[time,setTime] = useState([])
    
    useEffect(()=>{
        fetch('activity.json')
        .then(res=>res.json())
        .then(data=> setActivities(data))
    },[]);
    
    const handleAddToTime = (activity) =>
    {
        const newTime = [...time, activity]
        setTime(newTime);
    }
    return (
        <div>
            <span>Selected the exercise</span>
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
                age="24years"></ExerciseDetails>
            </div>
            </div>
            
        </div>
    );
};

export default Activities;