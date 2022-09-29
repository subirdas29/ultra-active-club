import React from 'react';
import './Allbreaktime.css'

const AllBreakTime = (props) => {
    const {time,handleBreakTime}=props;
    return (

            
                <button className="timeButton" onClick={()=> handleBreakTime(time)}>{time}</button>
     
    );
};

export default AllBreakTime;