import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {activity}=props;
    const {name,time,img} =activity;
    return (
        <div>
            <div className='all-activity'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Time required: {time}s</p>
                <button onClick={()=> props.handleAddToTime(activity)}>Add to list</button>

            </div>
        </div>
    );
};

export default Activity;