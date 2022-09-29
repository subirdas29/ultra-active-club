import React from 'react';

const AllBreakTime = (props) => {
    const {time,handleBreakTime}=props;
    return (
     
            
                <button onClick={()=> handleBreakTime(time)}>{time}</button>

     
    );
};

export default AllBreakTime;