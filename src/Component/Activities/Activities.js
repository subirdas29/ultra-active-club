import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities]= useState([]);
    
    useEffect(()=>{
        fetch('activity.json')
        .then(res=>res.json())
        .then(data=> setActivities(data))
    },[]);


    return (
        <div className='activities-details'>
            <div className='activity-info'>
                {
                activities.map(activity=> <Activity activity={activity}></Activity> )
                }
            
            </div>
            <div className='exercise-details'>
                <h2>Exercise</h2>

            </div>
            
        </div>
    );
};

export default Activities;